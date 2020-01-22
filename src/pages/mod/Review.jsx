import {
  Box,
  Avatar,
  Typography,
  IconButton,
  Paper,
  Tooltip
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Rating } from '@material-ui/lab';
import {
  ThumbUp,
  ThumbDown,
  ThumbUpOutline,
  ThumbDownOutline,
  EmoticonExcited,
  EmoticonExcitedOutline
} from 'mdi-material-ui';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAsyncFn, useToggle } from 'react-use';

import { shortenAmount, useIsLoggedIn } from '../../utils';
import { reviewReact } from '../../utils/api';
import useGlobalStyles from '../../utils/globalStyles';

const useReviewStyles = makeStyles(theme => ({
  avatar: {
    height: 48,
    width: 48,
    marginRight: theme.spacing(2)
  }
}));

const useReactionChange = (
  type,
  id,
  { toggleUpvote, toggleDownvote, toggleFoundFunny, upvoted, downvoted }
) =>
  useAsyncFn(async undo => {
    try {
      const {
        upvoted: newUpvoted,
        downvoted: newDownvoted,
        funny: newFunny
      } = await reviewReact(id, type, undo);

      toggleUpvote(newUpvoted);
      toggleDownvote(newDownvoted);
      toggleFoundFunny(newFunny);
    } catch {
      // Undo immediate feedback if theres an error
      if (type === 'upvote') {
        if (undo && downvoted) toggleDownvote(true);
        toggleUpvote(!undo);
      } else if (type === 'downvote') {
        if (undo && upvoted) toggleUpvote(true);
        toggleDownvote(!undo);
      } else if (type === 'funny') toggleFoundFunny(!undo);
    }
  });

const Review = ({
  id,
  rating,
  content,
  title,
  author,
  upvotes: upvotes_,
  downvotes: downvotes_,
  funnys: funnys_,
  user_reacted_upvote: userUpvoted,
  user_reacted_downvote: userDownvoted,
  user_reacted_funny: userFoundFunny,
  flat = false
}) => {
  const [upvoted, toggleUpvote] = useToggle(!!userUpvoted);
  const [downvoted, toggleDownvote] = useToggle(!!userDownvoted);
  const [foundFunny, toggleFoundFunny] = useToggle(!!userFoundFunny);
  const isLoggedIn = useIsLoggedIn();
  const history = useHistory();

  const changeToggles = {
    toggleUpvote,
    toggleDownvote,
    toggleFoundFunny,
    upvoted,
    downvoted
  };
  const [, reactUpvote] = useReactionChange('upvote', id, changeToggles);
  const [, reactDownvote] = useReactionChange('downvote', id, changeToggles);
  const [, reactFunny] = useReactionChange('funny', id, changeToggles);

  const onUpvote = () => {
    if (!isLoggedIn)
      return history.push(`/login?to=${encodeURIComponent(`/mods/${id}`)}`);

    // Give immediate feedback on reaction state.
    if (!upvoted) toggleDownvote(false);
    toggleUpvote();
    reactUpvote(!upvoted);
  };
  const onDownvote = () => {
    if (!isLoggedIn)
      return history.push(`/login?to=${encodeURIComponent(`/mods/${id}`)}`);

    // Give immediate feedback on reaction state.
    if (!downvoted) toggleUpvote(false);
    toggleDownvote();
    reactDownvote(!downvoted);
  };
  const onFoundFunny = () => {
    if (!isLoggedIn)
      return history.push(`/login?to=${encodeURIComponent(`/mods/${id}`)}`);

    toggleFoundFunny();
    reactFunny(!foundFunny);
  };

  const upvotes = upvotes_ + (upvoted && !userUpvoted ? 1 : 0);
  const downvotes = downvotes_ + (downvoted && !userDownvoted ? 1 : 0);
  const funnys = funnys_ + (foundFunny && !userFoundFunny ? 1 : 0);

  const UpvoteIcon = upvoted ? ThumbUp : ThumbUpOutline;
  const DownvoteIcon = downvoted ? ThumbDown : ThumbDownOutline;
  const FoundFunnyIcon = foundFunny ? EmoticonExcited : EmoticonExcitedOutline;

  const { buttonReset } = useGlobalStyles();
  const { avatar } = useReviewStyles();

  return (
    <Box mb={2}>
      <Paper elevation={Number(!flat)}>
        <Box p={!flat ? 3 : 0} display="flex" flexDirection="column">
          <Box display="flex" alignItems="center" mb={2}>
            <Link className={buttonReset} to={`/profile/${author.id}`}>
              <Avatar src={author.avatar} alt="h" className={avatar} />
            </Link>
            <div>
              <Link className={buttonReset} to={`/profile/${author.id}`}>
                <Typography variant="h6" component="h2">
                  {author.username}
                </Typography>
              </Link>
              <Rating
                name={`ratings-${id}`}
                precision={0.5}
                value={rating}
                readOnly
              />
            </div>
          </Box>

          <Typography variant="h6" component="h1" gutterBottom>
            {title}
          </Typography>

          <Typography variant="body1">{content}</Typography>

          <Box display="flex" justifyContent="flex-end" mr={-1.5} mb={-1.5}>
            <Box alignItems="center" display="flex">
              {shortenAmount(upvotes)}
              <Tooltip title="Thumbs Up" placement="top">
                <IconButton onClick={() => onUpvote(upvoted)}>
                  <UpvoteIcon />
                </IconButton>
              </Tooltip>
            </Box>

            <Box alignItems="center" display="flex" ml={1}>
              {shortenAmount(downvotes)}
              <Tooltip title="Thumbs Down" placement="top">
                <IconButton onClick={() => onDownvote(downvoted)}>
                  <DownvoteIcon />
                </IconButton>
              </Tooltip>
            </Box>

            <Box alignItems="center" display="flex" ml={1}>
              {shortenAmount(funnys)}
              <Tooltip title="Found Funny" placement="top">
                <IconButton onClick={() => onFoundFunny(foundFunny)}>
                  <FoundFunnyIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Review;
