/*eslint-disable*/
import React from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';
import Icon from '@material-ui/core/Icon';

import Button from 'components/CustomButtons/Button.js';

import styles from 'assets/jss/nextjs-material-kit/components/headerLinksStyle.js';

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Tooltip id='linkedin' title='Sekite mane Linkedin' placement={'top'} classes={{ tooltip: classes.tooltip }}>
          <Button
            href='https://www.linkedin.com/in/j%C5%ABrat%C4%97-lajauskait%C4%97-0b077b87/'
            target='_blank'
            color='transparent'
            className={classes.navLink}>
            <i className={classes.socialIcons + ' fab fa-linkedin'} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip id='email' title='Susisiekite email' placement={'top'} classes={{ tooltip: classes.tooltip }}>
          <Button
            href='mailto:jurate.lajauskaite@gmail.com'
            target='_blank'
            color='transparent'
            className={classes.navLink}>
            <i className={classes.socialIcons + ' fa fa-envelope'} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id='instagram-facebook'
          title='Sekite mane facebook'
          placement={'top'}
          classes={{ tooltip: classes.tooltip }}>
          <Button
            color='transparent'
            href='https://www.facebook.com/Paaugli%C5%B3-ir-Jaunimo-kou%C4%8Dingas-105354724995982'
            target='_blank'
            className={classes.navLink}>
            <i className={classes.socialIcons + ' fab fa-facebook'} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip id='Messenger' title='Susira??ykime' placement={'top'} classes={{ tooltip: classes.tooltip }}>
          <Button
            color='transparent'
            href='https://m.me/jurate.lajauskaite'
            target='_blank'
            className={classes.navLink}>
            <i className={classes.socialIcons + ' fa fa-comments'} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip id='Call' title='+37061280062' placement={'top'} classes={{ tooltip: classes.tooltip }}>
          <Button color='transparent' href='tel:+37061280062' className={classes.navLink}>
            <i className={classes.socialIcons + ' fa fa-phone-square'} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
