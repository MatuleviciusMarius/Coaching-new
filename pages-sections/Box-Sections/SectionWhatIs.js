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

import styles from 'assets/jss/nextjs-material-kit/pages/BoxSections/sectionWhatIs.js';

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
          <h3 className={classes.mainText}>
            Paauglių ir Jaunimo <span className={classes.orangeFont}>koučingas</span>
          </h3>
          <div className={classes.buttonContainer}>
            <Button className={classes.buttonText} color='transparent' onClick={() => setClassicModal(true)}>
              Daugiau
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
              <h4 className={classes.modalTitle}>
                <b>Paauglių ir Jaunimo koučingas </b>
              </h4>
            </DialogTitle>
            <DialogContent id='classic-modal-slide-description' className={classes.modalBody}>
              <p>
                Norite, kad šie metai būtų dar geresni? Tėvams sunku bendrauti su paaugliais, o paaugliams su tėvais?
                Sunku pasiekti tikslą, išsiaiškinti karjeros kelią ar tikėti savimi? O gal tiesiog ieškote būdų, kaip
                nuo gero gyvenimo pereiti prie puikaus?
              </p>
              <p>
                <b>Kas yra paauglių ir jaunimo koučingas? </b> <br />
                Tėvai pas paauglių koučingo specialistus kreipiasi dėl įvairiausių priežasčių, tačiau esmė visuomet
                išlieka ta pati, tai <b>pokyčiai. </b>
              </p>
              <p>
                <b>Kaip vyksta pokyčiai gyvenime, kaip pagerinti bendrą laimės ir gerovės lygį? </b>
              </p>
              <p>
                <b>Koučingas įgalina:</b> <br />
                <p className={classes.paddingLeft}>
                  - praplėsti <b>savo</b> vizijas ir galimybes, <br />
                  - daryti proveržį <b>savo</b> gyvenime, <br />
                  - nustatyti <b>savo</b> tikslus, <br />
                  - numatyti <b>savo</b> galimas kliūtis siekiant SAVO tikslų,<br />
                  - susikurti <b>savo</b> veiksmų planą, <br />
                  - susidėlioti <b>savo</b> prioritetus, <br />
                  - išsiaiškinti <b>savo</b> vertybes, <br />
                  - rasti <b>savo</b> kursą į savo sėkmę, <br />
                  - siekti <b>savo</b> svajonių.
                </p>
              </p>
              <p>
                Kas savaitę vykstančių koučingo sesijų metu koučeris padeda
                <b>atrakinti jaunuolio/ės viduje slypinčią jėgą ir galią.</b> Koučeris aktyviai
                <b>klauso ir užduoda klausimus</b>, kurie padeda sukurti naują perspektyvą ir įžvalgas. Koučeris talkina
                apmąstant pirmuosius žingsnius kaip pasirinkus nenukrypstant eiti pasirinktuoju keliu, atrasti sėkmės
                įrankius, padeda atskleisti paaugliuose esančias neribotas galimybes. Sesijų metu sužinoma apie kliūtis,
                trukdančias pasiekti tikslų, aptariami galimi žingsniai, kurie padės jas pašalinti arba jų išvengti.
              </p>
              <p>
                <b>Kas nėra koučingas?</b> <br />
                Koučingas nėra terapija, psichoterapija ar konsultavimas. Koučingas orientuotas į jaunimo stipriąsias
                puses, o ne į silpnąsias, orientuotas į ateitį, o ne į praeitį, priešingai nei terapijoje. Koučingas tai
                visuomet mąstymas į priekį, planai ir veiksmai į ateitį. Priešingai nei konsultavime, koučeris nepasako
                ką daryti, o ko nedaryti, neduoda “teisingų“ atsakymų nei jaunuoliams, nei jų tėvams.
              </p>
              <p>
                <b>Paauglių ir jaunimo koučingas:</b> <br />
                <div className={classes.paddingLeft}>
                  - patikima investicija į Jūsų paauglio sėkmingesnę ir laimingesnę ateitį, <br />
                  - idealiai tinka paaugliams ir jauniems 14-21 metų žmonėms, <br />
                  - reguliarūs kassavaitiniai skambučiai arba susitikimai, <br />
                  - galimi vaizdo arba telefoniniai skambučiai, puikiai galima prisiderinti prie dienotvarkės, <br />
                  - pirmasis pokalbis nemokamas, <br />
                  - koučingo sesijų ciklas: 12 kassavaitinių sesijų per 3 mėnesius, <br />
                  - viena sesija 45 minutės. <br />
                </div>
                <span>
                  <b>Pateikite savo klausimus, rūpesčius, užklausą.</b> <br />
                  Atskleiskime sėkmingo ir laimingo jaunimo paslaptis.
                </span>
              </p>
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
