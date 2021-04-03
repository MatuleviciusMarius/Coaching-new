import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import CustomTabs from 'components/CustomTabs/CustomTabs.js';
import Button from 'components/CustomButtons/Button.js';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import styles from 'assets/jss/nextjs-material-kit/pages/BoxSections/sectionPradekime.js';

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='down' ref={ref} {...props} />;
});

export default function SectionPradekime() {
  const classes = useStyles();
  const [classicModal, setClassicModal] = React.useState(false);

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id='nav-tabs'>
          <h3 className={classes.textCenter}>Mielieji, aš labai džiaugiuosi, kad Jūs esate čia</h3>
          <Button color='transparent' onClick={() => setClassicModal(true)}>
            Straipsnis
          </Button>
          <Dialog
            classes={{
              root: classes.center,
              paper: classes.modal,
            }}
            open={classicModal}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => setClassicModal(false)}
            aria-labelledby='classic-modal-slide-title'
            aria-describedby='classic-modal-slide-description'>
            <DialogTitle id='classic-modal-slide-title' disableTypography className={classes.modalHeader}>
              <IconButton
                className={classes.modalCloseButton}
                key='close'
                aria-label='Close'
                color='inherit'
                onClick={() => setClassicModal(false)}>
                <Close className={classes.modalClose} />
              </IconButton>
              <h4 className={classes.modalTitle}>Modal title</h4>
            </DialogTitle>
            <DialogContent id='classic-modal-slide-description' className={classes.modalBody}>
              <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It
                is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the
                all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day
                however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of
                Grammar.
              </p>
            </DialogContent>
            <DialogActions className={classes.modalFooter}>
              <Button onClick={() => setClassicModal(false)} color='danger' simple>
                Uždaryti
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
