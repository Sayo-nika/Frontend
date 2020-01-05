import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  FacebookBox,
  LinkVariant,
  ShareVariant,
  Twitter
} from 'mdi-material-ui';
import React from 'react';

import { copy, m } from '../../utils';
import useGlobalStyles from '../../utils/globalStyles';

const useShareableStyles = makeStyles(theme => ({
  spacing: {
    marginRight: theme.spacing(1)
  },
  spacingBottom: {
    marginBottom: theme.spacing(1)
  }
}));

const shares = {
  facebook: {
    Icon: FacebookBox,
    text: 'Facebook',
    construct: ({ url }) =>
      `https://www.facebook.com/sharer/sharer.php?${new URLSearchParams({
        u: url
      })}`
  },
  twitter: {
    Icon: Twitter,
    text: 'Twitter',
    construct: ({ url, title }) =>
      `https://twitter.com/intent/tweet?${new URLSearchParams({
        url,
        text: title,
        hashtags: 'sayonika',
        via: 'SayonikaDDLC'
      })}`
  },
  copy: {
    Icon: LinkVariant,
    text: 'Copy Link',
    construct: ({ url }) => url
  },
  share: {
    Icon: ShareVariant,
    text: 'Share',
    construct: ({ url, title }) => ({
      url,
      title,
      text: `View ${title} on Sayonika!`
    })
  }
};

const Shareable = ({ type, title }) => {
  const { buttonReset } = useGlobalStyles();
  const { spacingBottom, spacing } = useShareableStyles();
  const root = m(buttonReset, spacingBottom);
  const { Icon, text, construct } = shares[type];
  const url = construct({ title, url: window.location.href });

  const onClick = React.useCallback(
    ev => {
      ev.preventDefault();
      if (type === 'copy') return copy(url);
      else if (type === 'share') return navigator.share(url);
      else
        window.open(
          url,
          `sayonika-share-${type}`,
          'toolbar=0,menubar=0,location=0,width=670,height=600,noreferrer,noopener'
        );
    },
    [type, url]
  );

  const base = (
    <Box display="flex" alignItems="center">
      <Icon fontSize="large" className={spacing} />
      <Typography variant="subtitle1">{text}</Typography>
    </Box>
  );

  if (type === 'copy' || type === 'share')
    return (
      <button className={root} onClick={onClick}>
        {base}
      </button>
    );
  else
    return (
      <a className={root} href={url} onClick={onClick}>
        {base}
      </a>
    );
};

export const ShareList = ({ title }) => (
  <>
    {navigator.share &&
      navigator.canShare &&
      navigator.canShare(
        shares.share.construct({ title, url: window.location.href })
      ) && <Shareable type="share" title={title} />}
    <Shareable type="copy" title={title} />
    <Shareable type="facebook" title={title} />
    <Shareable type="twitter" title={title} />
  </>
);

export default Shareable;
