import { Avatar, Chip, IconButton, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  Archive,
  Check,
  ClipboardList,
  CodeTags,
  Heart,
  TestTube
} from 'mdi-material-ui';
import propTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { fromModColor } from '../utils/colors';

const m = (...args) => args.join(' ');

const useStyles = makeStyles(theme => ({
  baseLink: {
    textDecoration: 'none'
  },
  root: {
    paddingBottom: theme.spacing(1)
  },
  backgroundRoot: {
    height: 160,
    backgroundColor: ({ themeColor }) =>
      fromModColor(themeColor, 'dark', theme),
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderTopLeftRadius: theme.shape.borderRadius,
    borderTopRightRadius: theme.shape.borderRadius,
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2)
  },
  modIcon: {
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: 0,
    backgroundColor: ({ themeColor }) =>
      fromModColor(themeColor, 'main', theme),
    width: 128,
    height: 128,
    marginTop: -64
  },
  contentRoot: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingTop: theme.spacing(2),
    marginTop: 0
  },
  modTitle: {
    textAlign: 'center',
    paddingBottom: theme.spacing(1)
  }
}));

const useCategoryStyles = makeStyles(theme => ({
  categoryRoot: {
    display: 'flex'
  },
  category: {
    display: 'flex',
    flex: '1',
    alignItems: 'center',
    padding: `0 ${theme.spacing(2)}px`
  },
  categoryRight: {
    justifyContent: 'flex-end'
  },
  categoryIcon: {
    marginLeft: theme.spacing(1),
    marginRight: -theme.spacing(1),
    zIndex: 900
  }
}));

const categories = {
  unassigned: 'Unassigned',
  tools: 'Tools',
  comedy: 'Comedy',
  tragic_comedy: 'Tragic Comedy', // eslint-disable-line camelcase
  drama: 'Drama',
  rom_com: 'Rom Com', // eslint-disable-line camelcase
  romance: 'Romance',
  horror: 'Horror',
  mystery: 'Mystery',
  satire: 'Satire',
  thriller: 'Thriller',
  sci_fi: 'Sci-Fi' // eslint-disable-line camelcase
};

const CategoryFavoriteFooter = ({ category }) => {
  const {
    category: categorySection,
    categoryIcon,
    categoryRoot,
    categoryRight
  } = useCategoryStyles();

  return (
    <div className={categoryRoot}>
      <div className={categorySection}>
        <Typography>{categories[category]}</Typography>
      </div>
      <div className={m(categorySection, categoryRight)}>
        15.5k
        <IconButton className={categoryIcon}>
          <Heart />
        </IconButton>
      </div>
    </div>
  );
};

const StatusChip = ({ status }) => {
  const [icon, label] = React.useMemo(
    () =>
      /* eslint-disable camelcase, react/jsx-key */
      ({
        archived: [<Archive />, 'Archived'],
        planning: [<ClipboardList />, 'Planning'],
        in_development: [<CodeTags />, 'In Development'],
        playtesting: [<TestTube />, 'Playtesting'],
        released: [<Check />, 'Released']
      }[status]),
    /* eslint-enable */
    [status]
  );

  return <Chip icon={icon} label={label} />;
};

const ModCard = ({
  id,
  title,
  icon,
  banner,
  tagline,
  status,
  category,
  theme_color: themeColor
}) => {
  const {
    baseLink,
    root,
    backgroundRoot,
    modIcon,
    contentRoot,
    modTitle
  } = useStyles({ themeColor });

  return (
    <Link to={`/mods/${id}`} className={baseLink}>
      <Paper className={root}>
        <div
          className={backgroundRoot}
          style={{
            backgroundImage: `url(${banner})`
          }}
        >
          <StatusChip status={status} />
        </div>
        <Avatar className={modIcon} src={icon} />
        <div className={contentRoot}>
          <Typography className={modTitle} component="h2" variant="h5">
            {title}
          </Typography>
          <Typography variant="body2" paragraph>
            {tagline}
          </Typography>
        </div>
        <CategoryFavoriteFooter category={category} />
        {/* <StatusCategory
          status={status}
          category={category}
          favorites={favorites}
          handleFavoriteToggle={handleFavoriteToggle}
        /> */}
      </Paper>
    </Link>
  );
};

ModCard.propTypes = {
  banner: propTypes.string.isRequired,
  category: propTypes.oneOf([]),
  icon: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  status: propTypes.oneOf([]),
  tagline: propTypes.string.isRequired,
  theme_color: propTypes.string.isRequired, // eslint-disable-line camelcase
  title: propTypes.string.isRequired
  // favourites
  // is_favourited
  // favorites: propTypes.number,
  // status: propTypes.number.isRequired,
};

export default ModCard;
