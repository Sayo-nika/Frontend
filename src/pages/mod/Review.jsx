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
import { Link } from 'react-router-dom';

import { Spacer } from '../components/common';
import { useToggle } from '../utils';
import useGlobalStyles from '../utils/globalStyles';

const useReviewStyles = makeStyles(theme => ({
  avatar: {
    height: 48,
    width: 48,
    marginRight: theme.spacing(2)
  }
}));

const Review = ({ authorID }) => {
  const { buttonReset } = useGlobalStyles();
  const { avatar } = useReviewStyles();
  const [upvoted, toggleUpvote] = useToggle();
  const [downvoted, toggleDownvote] = useToggle();
  const [foundFunny, toggleFoundFunny] = useToggle();
  const UpvoteIcon = React.useMemo(() => (upvoted ? ThumbUp : ThumbUpOutline), [
    upvoted
  ]);
  const DownvoteIcon = React.useMemo(
    () => (downvoted ? ThumbDown : ThumbDownOutline),
    [downvoted]
  );
  const FoundFunnyIcon = React.useMemo(
    () => (foundFunny ? EmoticonExcited : EmoticonExcitedOutline),
    [foundFunny]
  );
  return (
    <Box mb={2}>
      <Paper>
        <Box p={3} display="flex" flexDirection="column">
          <Box display="flex" alignItems="center" mb={2}>
            <Avatar
              src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000"
              alt="h"
              className={avatar}
            />
            <Link className={buttonReset} to={`/users/${authorID}`}>
              <Typography variant="h6" component="h2">
                Reviewer Boy
              </Typography>
            </Link>

            <Spacer />
            <Rating name="ratings-{id}" precision={0.5} value={3.5} readOnly />
          </Box>

          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            nulla sagittis, porttitor felis a, mollis lacus. Quisque tempus
            felis metus, eget malesuada ex consectetur eget. Praesent molestie
            neque sed lacus porta dignissim. Integer bibendum quam sit amet
            sapien aliquam, ullamcorper placerat sem dictum. Quisque
            ullamcorper, nulla molestie congue bibendum, massa tellus euismod
            nulla, sed sagittis risus purus et justo. Phasellus ipsum enim,
            convallis dignissim nibh non, blandit dapibus massa.
          </Typography>

          <Box display="flex" justifyContent="flex-end" mr={-1.5} mb={-1.5}>
            <Box alignItems="center" display="flex">
              42k
              <Tooltip title="Thumbs Up" placement="top">
                <IconButton onClick={toggleUpvote}>
                  <UpvoteIcon />
                </IconButton>
              </Tooltip>
            </Box>

            <Box alignItems="center" display="flex" ml={1}>
              1k
              <Tooltip title="Thumbs Down" placement="top">
                <IconButton onClick={toggleDownvote}>
                  <DownvoteIcon />
                </IconButton>
              </Tooltip>
            </Box>

            <Box alignItems="center" display="flex" ml={1}>
              60
              <Tooltip title="Found Funny" placement="top">
                <IconButton onClick={toggleFoundFunny}>
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
