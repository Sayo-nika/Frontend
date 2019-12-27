import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  MenuItem,
  TextField,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { Camera, Close } from 'mdi-material-ui';
import { darken, rgba } from 'polished';
import React from 'react';

import { Root, Spacer } from '../components/common';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { m, makeColorStyles, transition, useEventState } from '../utils';
import useGlobalStyles from '../utils/globalStyles';
import { categories, statuses } from '../utils/maps';

import { useStyles as useModPageStyles } from './mod';

const OutlinedTextField = props => <TextField {...props} variant="outlined" />;

const blobToUri = blob => {
  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.addEventListener('loadend', () => resolve(reader.result));
    reader.addEventListener('error', reject);

    reader.readAsDataURL(blob);
  });
};

/* eslint-disable no-await-in-loop */
async function* blobsToUris(blobs) {
  for (const blob of blobs) yield await blobToUri(blob);
}
/* eslint-enable */

const useStyles = makeStyles(
  ({
    palette: {
      primary: { main },
      ...palette
    }
  }) => ({
    picturePicker: {
      ...makeColorStyles(main, { palette }),
      transition: transition('background-color'),
      cursor: 'pointer',
      '&:hover': makeColorStyles(darken(0.25, main), { palette })
    },
    descriptionField: {
      padding: 0,
      resize: 'vertical'
    },
    media: {
      position: 'relative',
      height: 0,
      paddingBottom: '75%',
      borderRadius: 4,
      '& > *': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      },
      '& > img': {
        height: 'initial'
      }
    },
    addMedia: {
      ...makeColorStyles(main, { palette }),
      transition: transition('background-color'),
      cursor: 'pointer',
      '&:hover': makeColorStyles(darken(0.25, main), { palette })
    },
    hidden: {
      display: 'none'
    }
  })
);

const useAddedMediaStyles = makeStyles(
  ({
    palette: {
      primary: { main }
    }
  }) => ({
    root: {
      paddingBottom: 'calc(75% - 8px)',
      border: [['solid 4px', main]],
      overflow: 'hidden',
      '&>img': {
        width: '100%',
        objectPosition: 'center',
        transform: 'translateY(-25%)'
      }
    },
    addedMediaRemover: {
      color: '#FFF',
      background: rgba(0, 0, 0, 0.5),
      opacity: 0,
      transition: transition('opacity'),
      '&:hover': {
        opacity: 1,
        cursor: 'pointer'
      }
    },
    img: {
      width: '100%',
      height: '100%',
      backgroundImage: ({ img }) => `url(${img})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }
  })
);

const AddedMedia = ({ onRemove, img: _img }) => {
  const { media } = useStyles();
  const { addedMediaRemover, img, root } = useAddedMediaStyles({ img: _img });

  return (
    <Grid xs={2} item>
      <Box title="Remove media" className={m(media, root)} onClick={onRemove}>
        {/* <img src={img} /> */}
        <div className={img} />
        <Box
          alignItems="center"
          display="flex"
          justifyContent="center"
          className={addedMediaRemover}
        >
          <Close fontSize="large" />
        </Box>
      </Box>
    </Grid>
  );
};

const AddModPage = () => {
  // TODO: make a reducer like one?
  // todo: set media on backend
  const [media, setMedia] = React.useState([]);
  const [category, setCategory] = useEventState('');
  const [status, setStatus] = useEventState('');
  const [nsfw, setNsfw] = useEventState(false);
  const [releaseDate, setReleaseDate] = React.useState(null);

  const ref = React.useRef(null);
  const addMedia = async () => {
    // Temporarily clone media so that we can do a bunch of operations on it at once.
    const mediaClone = media.slice();

    for await (const img of blobsToUris(ref.current.files))
      mediaClone.push({ index: mediaClone.length, img });

    setMedia(mediaClone);
  };

  const removeMedia = index => () =>
    setMedia(
      media
        .filter(x => x.index !== index)
        .map(({ img }, index) => ({ img, index }))
    );

  const { pageContent } = useGlobalStyles();
  const { fullWidth, headerIcon } = useModPageStyles();
  const {
    addMedia: addMediaBox,
    descriptionField,
    hidden,
    media: mediaBox,
    picturePicker
  } = useStyles();

  return (
    <Root>
      <Navbar />

      <Container className={pageContent}>
        <Box display="flex" alignItems="center">
          <Avatar alt="mod icon" className={m(headerIcon, picturePicker)}>
            <Camera />
          </Avatar>

          <Box width={500} clone>
            <TextField label="Mod Title" variant="outlined" required />
          </Box>

          <Spacer />
        </Box>

        <Box my={1}>
          <FormControlLabel
            label="Is NSFW"
            control={<Checkbox checked={nsfw} onChange={setNsfw} />}
          />
        </Box>

        <Box mb={2}>
          <Box mb={2}>
            <Typography component="h2" variant="h5">
              Media
            </Typography>
          </Box>

          <input
            ref={ref}
            accept="image/png,image/jpeg"
            id="mediaPicker"
            type="file"
            className={hidden}
            multiple
            onChange={addMedia}
          />

          {/* probably abstract to component */}
          <Grid spacing={2} container>
            {media.map(({ index, img }) => (
              <AddedMedia key={index} img={img} onRemove={removeMedia(index)} />
            ))}

            <Grid xs={2} item>
              <Box
                title="Add media"
                className={m(mediaBox, addMediaBox)}
                onClick={() => ref.current.click()}
              >
                <Box alignItems="center" display="flex" justifyContent="center">
                  <Camera />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Grid spacing={3} container>
          <Grid xs={8} item>
            <Grid spacing={2} container>
              <Grid xs={12} item>
                <TextField
                  helperText="A short description to display on your mod's card."
                  label="Tagline"
                  variant="outlined"
                  className={fullWidth}
                  required
                />
              </Grid>

              <Grid xs={12} item>
                <TextField
                  label="Description"
                  variant="outlined"
                  className={fullWidth}
                  InputProps={{ classes: { inputMultiline: descriptionField } }}
                  rows={4}
                  multiline
                  required
                />
              </Grid>

              {status === 'released' && (
                <Grid xs={12} item>
                  <Box py={2}>
                    <Typography component="h2" variant="h5">
                      Release Details
                    </Typography>
                  </Box>

                  <Grid spacing={2} container>
                    <Grid xs={6} item>
                      <KeyboardDatePicker
                        format="yyyy-MM-dd"
                        label="Release Date"
                        placeholder="2019-10-31"
                        // maxDate={new Date()}
                        minDate={new Date('2017-09-22Z')} // DDLC release date
                        TextFieldComponent={OutlinedTextField}
                        value={releaseDate}
                        required
                        onChange={date => setReleaseDate(date)}
                      />
                    </Grid>
                    <Grid xs={6} item>
                      <TextField
                        label="Download URL"
                        variant="outlined"
                        required
                      />
                    </Grid>
                  </Grid>
                </Grid>
              )}

              {status === 'playtesting' && (
                <Grid xs={12} item>
                  <Box py={2}>
                    <Typography component="h2" variant="h5">
                      Playtesting Details
                    </Typography>
                  </Box>

                  <Grid spacing={2} container>
                    <Grid xs={6} item>
                      <KeyboardDatePicker
                        format="yyyy-MM-dd"
                        label="Release Date"
                        // placeholder="2019-10-31"
                        // maxDate={new Date()}
                        minDate={new Date('2017-09-22Z')} // DDLC release date
                        TextFieldComponent={OutlinedTextField}
                        value={releaseDate}
                        required
                        onChange={date => setReleaseDate(date)}
                      />
                    </Grid>
                    <Grid xs={6} item>
                      <TextField
                        label="Download URL"
                        variant="outlined"
                        required
                      />
                    </Grid>
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>

          <Grid xs={4} item>
            <Grid spacing={2} container>
              <Grid xs={12} item>
                <TextField
                  id="modCategory"
                  label="Category"
                  variant="filled"
                  className={fullWidth}
                  value={category}
                  required
                  select
                  onChange={setCategory}
                >
                  {Object.entries(categories).map(([value, text]) => (
                    <MenuItem key={value} value={value}>
                      {text}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid xs={12} item>
                <TextField
                  id="modStatus"
                  label="Status"
                  variant="filled"
                  className={fullWidth}
                  value={status}
                  required
                  select
                  onChange={setStatus}
                >
                  {Object.entries(statuses).map(([value, text]) => (
                    <MenuItem key={value} value={value}>
                      {text}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid xs={12} item>
                <TextField
                  id="modWebsite"
                  label="Website"
                  variant="filled"
                  className={fullWidth}
                />
              </Grid>
              {/* <Typography variant="h5" component="h2" paragraph>
              <u>Other Authors</u>
            </Typography>

            <Box display="flex" flexDirection="column" mb={2}>
              <Developer id={1} />
              <Developer id={2} />
              <Developer id={3} /> */}
              {/* </Box> */}
            </Grid>
          </Grid>
        </Grid>

        <Box display="flex" justifyContent="flex-end" mt={2}>
          <Button color="primary" size="large" variant="contained">
            Submit
          </Button>
        </Box>
      </Container>

      <Footer />
    </Root>
  );
};

export default AddModPage;
