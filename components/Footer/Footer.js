/*eslint-disable*/
import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// nodejs library that concatenates classes
import classNames from 'classnames';
// material-ui core components
import { List, ListItem, Popover, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite';

import styles from 'assets/jss/nextjs-material-kit/components/footerStyle.js';
import stylesPopOver from 'assets/jss/nextjs-material-kit/popoverStyles.js';

const useStyles = makeStyles(styles);
const usePopoverStyles = makeStyles(stylesPopOver);

export default function Footer(props) {
  const classes = useStyles();
  const classesPopover = usePopoverStyles();
  const { whiteFont } = props;
  const [anchorElTop, setAnchorElTop] = React.useState(null);

  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href='https://www.creative-tim.com/presentation?ref=njsmk-footer'
                className={classes.block}
                target='_blank'>
                Apie
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href='http://blog.creative-tim.com/?ref=njsmk-footer' className={classes.block} target='_blank'>
                LinkedIn
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href='https://www.creative-tim.com/license?ref=njsmk-footer' className={classes.block} target='_blank'>
                Email
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href='https://www.creative-tim.com/license?ref=njsmk-footer' className={classes.block} target='_blank'>
                Facebook
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Button className={classes.block} onClick={(event) => setAnchorElTop(event.currentTarget)}>
                telefonas
              </Button>
              <Popover
                classes={{
                  paper: classesPopover.popover,
                }}
                open={Boolean(anchorElTop)}
                anchorEl={anchorElTop}
                onClose={() => setAnchorElTop(null)}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}>
                <div className={classesPopover.popoverBody}>+37061280062</div>
              </Popover>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} made with <Favorite className={classes.icon} /> by Marius Matulevičius{' '}
          for a better life.
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
