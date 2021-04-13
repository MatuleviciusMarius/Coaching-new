import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// core components
import Button from 'components/CustomButtons/Button.js';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Slide from '@material-ui/core/Slide';

import styles from 'assets/jss/nextjs-material-kit/pages/BoxSections/sectionAbout.js';

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
          <h3 className={classes.mainText}>Jūratė Lajauskaitė</h3>
          <div className={classes.buttonContainer}>
            <Button className={classes.buttonText} color='transparent' onClick={() => setClassicModal(true)}>
              Apie mane
            </Button>
          </div>
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
              <h4 className={classes.modalTitle}>Jūratė Lajauskaitė</h4>
            </DialogTitle>
            <DialogContent id='classic-modal-slide-description' className={classes.modalBody}>
              <p>
                Esu sertifikuota profesionali Erickson Coaching International koučerė. <br />
                Nuo 2019 m. dirbu paauglių ir jaunimo koučere.
              </p>
              <p>
                Esu ICF - International Coaching Federation - Global ir ICF - International Coaching Federation -
                Lietuva narė.
              </p>
              <p>
                Turiu Vilniaus Universiteto ekonomikos magistro laipsnį. <br />
                2019-2020 m. LUMA Lietuvos universitetų moterų asociacijos narė. <br />
                Nuo 2020 m. siekiu ACC - Associate Certified Coach - akreditacijos.
              </p>
              <p>
                Ankstesnė patirtis. Darbas žmogiškųjų išteklių srityje, vadovavimas pardavimų grupėms ir projektams
                tarptautinėse kompanijose.
              </p>
              <p>Esu dviejų (1996 ir 2011 m.) vaikų mama.</p>
            </DialogContent>
            <DialogActions className={classes.modalFooter}>
              <Button onClick={() => setClassicModal(false)} color='primary' simple>
                Uždaryti
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
