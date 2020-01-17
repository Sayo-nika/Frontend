import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from 'material-ui-flat-pagination';
import { ChevronDown, ChevronLeft, ChevronRight, Star } from 'mdi-material-ui';
import React from 'react';

import DropdownButton from '../../components/DropdownButton';
import LoaderView from '../../components/LoaderView';
import { getModReviews } from '../../utils/api';

import Review from './Review';

const reviewSorting = [
  { value: 'best', text: 'Best' },
  { value: 'newest', text: 'Newest' },
  { value: 'oldest', text: 'Oldest' },
  { value: 'highest', text: 'Highest Rating' },
  { value: 'lowest', text: 'Lowest Rating' },
  { value: 'funniest', text: 'Funniest' }
];

const reviewRatings = [
  { value: 'all', text: 'All Ratings' },
  { value: 1, text: <Star /> },
  {
    value: 2,
    text: (
      <>
        <Star />
        <Star />
      </>
    )
  },
  {
    value: 3,
    text: (
      <>
        <Star />
        <Star />
        <Star />
      </>
    )
  },
  {
    value: 4,
    text: (
      <>
        <Star />
        <Star />
        <Star />
        <Star />
      </>
    )
  },
  {
    value: 5,
    text: (
      <>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </>
    )
  }
];

const get = (item, key = 'text') =>
  typeof item === 'object' ? item[key] : item;

const useStyles = makeStyles({
  filterButton: {
    width: '100%'
  },
  pager: {
    justifyContent: 'center'
  }
});

const ReviewsModal = ({ history, id }) => {
  const [page, setPage] = React.useState(0);
  const [sort, setSort] = React.useState(0);
  const [rating, setRating] = React.useState(0);

  const { filterButton, pager } = useStyles();

  return (
    <Box alignItems="center" display="flex" justifyContent="center" clone>
      <Dialog
        maxWidth="md"
        aria-labelledby="reviews-title"
        fullWidth
        open
        onClose={() => history.push(`/mods/${id}`)}
      >
        <DialogTitle id="reviews-title">
          Reviews
          <Box mb={1} mt={2}>
            <Grid spacing={2} container>
              <Grid md={3} sm={6} xs={12} item>
                <DropdownButton
                  buttonProps={{
                    variant: 'outlined',
                    className: filterButton,
                    endIcon: <ChevronDown />,
                    children: get(reviewSorting[sort])
                  }}
                  data={reviewSorting}
                  initial={0}
                  menuProps={{ id: 'sort-by-menu' }}
                  onChange={i => setSort(i)}
                />
              </Grid>
              <Grid md={3} sm={6} xs={12} item>
                <DropdownButton
                  buttonProps={{
                    variant: 'outlined',
                    className: filterButton,
                    endIcon: <ChevronDown />,
                    children: get(reviewRatings[rating])
                  }}
                  data={reviewRatings}
                  initial={0}
                  menuProps={{ id: 'filter-by-menu' }}
                  onChange={i => setRating(i)}
                />
              </Grid>
            </Grid>
          </Box>
        </DialogTitle>
        <LoaderView
          fetcher={() =>
            getModReviews(id, {
              page,
              limit: 10,
              rating: get(reviewRatings[rating]),
              sort: get(reviewSorting[sort])
            })
          }
          watch={[page, rating, sort]}
        >
          {({ value: { total, results: reviews } }) => (
            <>
              <DialogContent>
                {reviews.map(r => (
                  <Review key={r.id} {...r} flat />
                ))}
              </DialogContent>

              <DialogActions className={pager}>
                <Pagination
                  currentPageColor="primary"
                  limit={10}
                  nextPageLabel={<ChevronRight />}
                  offset={page}
                  otherPageColor="default"
                  previousPageLabel={<ChevronLeft />}
                  total={total}
                  onClick={(_, page) => setPage(page)}
                />
              </DialogActions>
            </>
          )}
        </LoaderView>
      </Dialog>
    </Box>
  );
};

export default ReviewsModal;
