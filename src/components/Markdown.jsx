import { styles as paperStyles } from '@material-ui/core/Paper/Paper';
import { styles as tableStyles } from '@material-ui/core/Table/Table';
import { styles as tableBodyStyles } from '@material-ui/core/TableBody/TableBody';
import { styles as tableCellStyles } from '@material-ui/core/TableCell/TableCell';
import { styles as tableContainerStyles } from '@material-ui/core/TableContainer/TableContainer';
import { styles as tableHeadStyles } from '@material-ui/core/TableHead/TableHead';
import { makeStyles } from '@material-ui/core/styles';
import marked from 'marked';
import { rgba } from 'polished';
import React from 'react';
import xss from 'xss';

const renderer = new marked.Renderer();
renderer.html = html => xss(html, { whiteList: {} });
renderer.table = (head, body) => `<div class="sayo-md-table-container">
<table>
<thead>
${head}
</thead>
<tbody>
${body}
</tbody>
</table>
</div>`;

const useStyles = makeStyles(theme => {
  const paper = paperStyles(theme);
  const tableCell = tableCellStyles(theme);

  return {
    root: {
      ...theme.typography.body1,
      '& h1': theme.typography.h2,
      '& h2': theme.typography.h3,
      '& h3': theme.typography.h4,
      '& h4': theme.typography.h5,
      '& h5': theme.typography.h6,
      '& h6': theme.typography.subtitle1,
      '& p': theme.typography.body1,
      '& blockquote': {
        ...theme.typography.body1,
        background: theme.palette.background.paper,
        marginLeft: 0,
        padding: [[theme.spacing(0.5), theme.spacing(2)]],
        borderLeft: [['solid', '8px', theme.palette.primary.main]],
        boxShadow: theme.shadows[1],
        borderRadius: 2
      },
      '& code': {
        background: rgba(0, 0, 0, 0.05),
        padding: [[0, theme.spacing(0.75)]],
        borderRadius: 2,
        fontFamily: [
          'Noto Sans Mono',
          'Inconsolata',
          'Ubuntu Mono',
          'sans-serif'
        ]
      },
      '& pre': {
        background: rgba(0, 0, 0, 0.05),
        borderRadius: 2,
        padding: theme.spacing(2)
      },
      '& pre > code': {
        background: 'transparent',
        padding: 0
      },
      '& img': {
        maxHeight: 300
      },
      '& hr': {
        border: 0,
        height: 1,
        background: rgba(0, 0, 0, 0.25)
      },

      // Tables
      '& .sayo-md-table-container': {
        ...tableContainerStyles.root,
        ...paper.root,
        ...paper.elevation1
      },
      '& table': tableStyles(theme).root,
      '& thead': tableHeadStyles.root,
      '& tbody': tableBodyStyles.root,
      '& th': {
        ...tableCell.root,
        ...tableCell.head,
        fontWeight: 700
      },
      '& td': {
        ...tableCell.root,
        ...tableCell.body
      }
    }
  };
});

/* eslint-disable react/no-danger */
const Markdown = ({ text }) => {
  const rendered = React.useMemo(
    () => ({
      __html: marked(text, { renderer, smartypants: true, smartLists: true })
    }),
    [text]
  );
  const { root } = useStyles();

  return <div className={root} dangerouslySetInnerHTML={rendered} />;
};
/* eslint-enable */

export default Markdown;
