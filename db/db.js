const casual = require('casual');
const categories = ['Meme', 'Idk', 'Miscellaneous'];

/**
 * Easily generate an array of random length with random values from a generator.
 *
 * @param {Function} gen Generator to run.
 * @param {Object} [clamp] Range for array length.
 * @param {Number} [clamp.min=1] Minimum array length.
 * @param {Number} [clamp.max=10] Maximum array length.
 * @returns {*} Array filled with random values.
 */
const arrayOf = (gen, {min=1, max=10}={}) => Array(casual.integer(min, max)).fill(() => gen()).map(v => v());
const sample = (arr, {min=1, max=5}={}) => arr.map(v => ({v, r: Math.random()})).sort((a, b) => a.r - b.r).map(v => v.v).slice(0, Math.floor(Math.random() * max) + 1);

casual.seed(420);

casual.define('snowflake', () => (
  // Woohoo type coercion!
  casual.unix_time.toString() + casual.integer(0, 20) + casual.integer(0, 50)
));

casual.define('user', id => ({
  username: casual.username,
  id: id || casual.snowflake,
  avatar: 'https://vuematerial.io/assets/examples/avatar.png',
  bio: casual.sentences(casual.integer(4, 7)),
  donator: casual.boolean,
  developer: casual.boolean,
  moderator: casual.boolean,
  connections: [
    {
      service: 'GitHub',
      name: casual.username
    }
  ],
  mods: {
    authored: [],
    collaborated: []
  },
  created: casual.unix_time
}));

casual.define('simpleUser', user => (
  user
    ? {
      username: user.username,
      id: user.id,
      avatar: user.avatar
    }
    : {
      username: casual.username,
      id: casual.snowflake,
      avatar: null
    }
));

casual.define('mod', id => ({
  id: id || casual.snowflake,
  title: casual.title,
  icon: 'https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/fa/05/b5/fa05b5ed-6564-d0f9-d963-28629995c21e/Monstercat_-_Uncaged_Vol_4_Art.png/100000x100000.jpg',
  media: [],
  tagline: casual.sentence,
  description: arrayOf(casual._text).join('\n\n'),
  category: casual.random_element(categories),
  owner: null,
  authors: [],
  verified: casual.boolean,
  rating: casual.double(0, 5).toFixed(2),
  created: casual.unix_time,
  released: casual.random_element([null, casual.unix_time])
}));

module.exports = (() => {
  let userIDs = arrayOf(casual._snowflake, {min: 15, max: 60});
  let modIDs = arrayOf(casual._snowflake, {min: 25, max: 100});
  let users = userIDs.map(id => casual.user(id));
  let mods = modIDs.map(id => casual.mod(id));

  mods.forEach(m => {
    let authors = sample(users);
    let owner = casual.random_element(authors);

    m.authors = authors.map(a => casual.simpleUser(a));
    m.owner = owner.id;

    authors.forEach(a => {
      if (a.id === owner.id) a.mods.authored.push(m.id);
      else a.mods.collaborated.push(m.id);
    });
  });

  return {
    users,
    mods
  };
})();
