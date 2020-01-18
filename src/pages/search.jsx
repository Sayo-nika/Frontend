import {
  Box,
  Collapse,
  IconButton,
  InputAdornment,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  ChevronLeft,
  ChevronRight,
  Close,
  FilterVariant,
  MenuDown,
  Star
} from 'mdi-material-ui';
import React from 'react';
import { useToggle } from 'react-use';

import Showcase from '../components/Showcase';
import { useEventState } from '../utils';
import { categories, statuses } from '../utils/maps';

const useStyles = makeStyles(theme => ({
  fullWidth: {
    width: '100%'
  },
  dropdown: {
    width: '100%'
  },
  reducedButton: {
    padding: 6
  },
  collapseButton: {
    padding: 6,
    marginRight: theme.spacing(1)
  }
}));

const sortings = {
  title: 'Title',
  rating: 'Rating',
  last_updated: 'Last Updated', // eslint-disable-line camelcase
  release_date: 'Release Date', // eslint-disable-line camelcase
  downloads: 'Downloads'
};

// So we don't have to keep repeating ourselves
const makeSelectProps = dropdown => (label, endAdornment, value, onChange) => ({
  id: `search${label.replace(' ', '')}`,
  label,
  variant: 'filled',
  className: dropdown,
  InputProps: { endAdornment },
  SelectProps: { IconComponent: value ? 'div' : MenuDown },
  value,
  select: true,
  onChange
});

const data = x => ({
  id: x.toString(),
  title: 'Dolor Sit Amet',
  icon: 'https://images.unsplash.com/photo-1572226372001-f4880374b677',
  banner: 'https://images.unsplash.com/photo-1536890992765-f42a1ee1e2a8',
  tagline: 'Lorem ipsum amsicit de alit. What will they do now?',
  status: 'planning',
  category: 'comedy',
  theme_color: 'deep_purple' // eslint-disable-line camelcase
});

const SearchPage = () => {
  const [category, setCategory, _directSetCategory] = useEventState('');
  const [status, setStatus, _directSetStatus] = useEventState('');
  const [rating, setRating, _directSetRating] = useEventState('');
  const [sort, setSort, _directSetSort] = useEventState('');
  const [limit, setLimit] = useEventState(10);

  const [filtersCollapsed, toggleCollapsed] = useToggle();

  const [mods] = React.useState(
    Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], data)
  );

  const { collapseButton, dropdown, fullWidth, reducedButton } = useStyles();

  const makeAdornment = (value, set) =>
    !!value && (
      <InputAdornment position="end">
        <IconButton className={reducedButton} onClick={() => set('')}>
          <Close />
        </IconButton>
      </InputAdornment>
    );
  const selectProps = makeSelectProps(dropdown);

  const categoryAdornment = makeAdornment(category, _directSetCategory);
  const statusAdornment = makeAdornment(status, _directSetStatus);
  const ratingAdornment = makeAdornment(rating, _directSetRating);
  const sortAdornment = makeAdornment(sort, _directSetSort);

  return (
    <>
      <Typography component="h2" variant="h4" paragraph>
        Browse
      </Typography>
      <TextField label="Search" className={fullWidth} />

      <Box alignItems="center" display="flex" mt={2}>
        <IconButton
          className={collapseButton}
          color={filtersCollapsed ? 'primary' : 'default'}
          onClick={toggleCollapsed}
        >
          <FilterVariant />
        </IconButton>

        <Typography component="h3" variant="subtitle1">
          Filters
        </Typography>
      </Box>

      <Collapse in={filtersCollapsed}>
        <Box mb={3} mt={1}>
          <Grid spacing={2} container>
            <Grid lg={3} xs={12} item>
              <TextField
                {...selectProps(
                  'Category',
                  categoryAdornment,
                  category,
                  setCategory
                )}
              >
                {Object.entries(categories).map(([value, text]) => (
                  <MenuItem key={value} value={value}>
                    {text}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid lg={3} xs={12} item>
              <TextField
                {...selectProps('Status', statusAdornment, status, setStatus)}
              >
                {Object.entries(statuses).map(([value, text]) => (
                  <MenuItem key={value} value={value}>
                    {text}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid lg={3} xs={12} item>
              <TextField
                {...selectProps('Rating', ratingAdornment, rating, setRating)}
              >
                <MenuItem value={1}>
                  <Star />
                </MenuItem>
                <MenuItem value={2}>
                  <Star />
                  <Star />
                </MenuItem>
                <MenuItem value={3}>
                  <Star />
                  <Star />
                  <Star />
                </MenuItem>
                <MenuItem value={4}>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </MenuItem>
                <MenuItem value={5}>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </MenuItem>
              </TextField>
            </Grid>

            <Grid lg={3} xs={12} item>
              <TextField {...selectProps('Sort', sortAdornment, sort, setSort)}>
                {Object.entries(sortings).map(([value, text]) => (
                  <MenuItem key={value} value={value}>
                    {text}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </Box>
      </Collapse>

      <Box mt={2} clone>
        <Showcase mods={mods} />
      </Box>
      <Box
        alignItems="center"
        display="flex"
        justifyContent="flex-end"
        width="100%"
      >
        <Box pr={1} clone>
          <Typography color="textSecondary" component="p" variant="subtitle2">
            Results per page:
          </Typography>
        </Box>

        <Select value={limit} onChange={setLimit}>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={100}>100</MenuItem>
        </Select>

        <Box pl={3} pr={1} clone>
          <Typography color="textSecondary" component="p" variant="subtitle2">
            1-10 of 100
          </Typography>
        </Box>

        <IconButton className={reducedButton} disabled>
          <ChevronLeft />
        </IconButton>
        <IconButton className={reducedButton}>
          <ChevronRight />
        </IconButton>
      </Box>
    </>
  );
};

export default SearchPage;
