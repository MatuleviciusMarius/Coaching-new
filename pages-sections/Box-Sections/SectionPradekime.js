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
          <h3 className={classes.mainText}>
            Mielieji, aš labai džiaugiuosi, <br /> kad <span className={classes.orangeFont}>Jūs</span> esate čia
          </h3>
          <div className={classes.buttonContainer}>
            <Button className={classes.buttonText} color='transparent' onClick={() => setClassicModal(true)}>
              Kaip koučingas gali padėti tapti laimingesniais?
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
              <h4 className={classes.modalTitle}>Kaip koučingas gali padėti tapti laimingesniais?</h4>
            </DialogTitle>
            <DialogContent id='classic-modal-slide-description' className={classes.modalBody}>
              <p>
                Taigi, kaip aš koučingo pagalba galiu padėti tėvams ruošti savo paauglius savarankiškam gyvenimui ir
                prisidėti prie jų gerovės puoselėjimo? Štai keletas pagrindinių sričių:
              </p>
              <p className={classes.padding}>
                <b>Savarankiškumo skatinimas.</b> Koučingo (ugdomojo vadovavimo) santykių esmė yra ne patarti, o ugdyti.
                Savo jauniesiems klientams/ėms aš nesakau nei ką daryti, nei ko nedaryti. Pokalbio metu padedu atrasti
                naujų vidinių ir išorinių išteklių, kurių pagalba jie patys gali spręsti įvairias problemas, užduotis,
                įveikti kliūtis, siekti tikslų, priimti sprendimus. Užuot pateikusi atsakymus, aš juos kviečiu į
                pokalbį, kurio metu atsakymai ateina iš jų pačių. Jaunuoliai/ės patys atsako už savo pasirinktus
                žingsnius ir jų vykdymą. Norėdami kurti pokyčius ar siekti tikslų, jie patys turi imtis veiksmų ir
                niekas kitas už juos to nepadarys.
              </p>
              <p className={classes.padding}>
                <b>Pasitikėjimo savimi kūrimas.</b> Koučingo metodas skirtas pabrėžti jaunimo stipriąsias puses, sėkmes,
                prigimtinius talentus ir gebėjimus. Daug dėmesio skiriu tam, kas jau sėkmingai veikia ir kaip tai galima
                auginti. Jaunuoliai/ės pradeda suprasti ką jie gali, kokių turi unikalių būdo bruožų ir kaip juos
                panaudoti, kaip išgyventi sunkius momentus, kaip pasirinkti gyvenimo kryptį ir daryti pažangą, siekti
                tikslų. Bet vien tik stipriosiomis pusėmis neapsiriboju, ieškome ir tų sričių, kuriose augimas yra
                naudingas ir būtinas, orientuojamės į savęs tobulinimą.
              </p>
              <p className={classes.padding}>
                <b>Tapti savimi.</b> Koučingas yra mokymasis apie save. Grįžtamojo ryšio metu jaunuoliai/ės per savo
                mintis, įsitikinimus, patirtis ir norus pradeda geriau ir giliau pažinti save. Norint pasitikėti savimi
                ir turėti tvirtą vidinį stuburą, būtina pažinti save, kad sužinoti kas esi iš tiesų ir kokiu gyvenimo
                keliu eiti prasmingiau. Kuo labiau jaunuoliai pažįsta save, tuo labiau jie pasitiki savimi, o tai mažina
                nerimą, didina motyvaciją, labiau pasitikima savimi priimant ir paprastus ir reikšmingus sprendimus,
                kurie nulems jų gyvenimą.
              </p>
              <p className={classes.padding}>
                <b>Sveikų įpročių kūrimas.</b> Koučingas padeda rasti labiausiai tinkamus ir geriausius būdus kaip
                pasirūpinti savo kūnu, protu ir siela.
              </p>
              <p className={classes.padding}>
                <b>Pagarba sau.</b> Paauglių ir jaunimo koučingas padeda puoselėti savigarbą, įžvelgti ir auginti savo
                vertę, gerbti savo artimuosius ir aplinkinius.
              </p>
              <p className={classes.padding}>
                <b>Santykiai, bendravimo įgūdžiai.</b> Jaunimo gerovė ir laimė, fizinė ir psichinė sveikata, profesinė
                ir asmeninė sėkmė stipriai susiję su santykių kokybe. Koučingas padeda mokytis bendravimo, kaip
                puoselėti sveikus santykius, spręsti konfliktus, nustatyti ribas santykiuose ir mažinti stresą bei
                nerimą.
              </p>
              <p className={classes.padding}>
                <b>Ateities kūrimas.</b> Koučingo metodo dėka padedu savo jauniesiems klientams/ėms suformuluoti ir
                vizualizuoti savo norimą ateitį bei tai, ką jie turi padaryti, kad ją pasiektų. Kuo labiau paaugliai yra
                emociškai susieti su savo tikslais ir svajonėmis, tuo didesnė tikimybė, kad jų pasieks.
              </p>

              <p>
                Koučingo pokalbio metu kuriu jaukią ir saugią erdvę, kurioje mano jaunieji klientai/ės gali nevaržomai
                reikšti savo mintis, jausmus, įsitikinimus, norus ir svajones, nesibaiminant kritikos ar nepriėmimo.
                Kuriu gilų prasminį ryšį ir pasitikėjimą, užtikrinu konfidencialumą.
              </p>
              <p>
                Taigi, jei norite savo paaugliui/ei padėti atrasti naujas galimybes tapti savarankišku, pasitikinčiu
                savimi, sąmoningu, sveiku, garbingu, motyvuotu, puikiai bendraujančiu ir susitelkusiu į pilnavertės
                ateities kūrimą, kodėl Jums nepagalvojus apie paauglių koučingą.
              </p>
              <p>
                Norite sužinoti ar bendradarbiavimas su manimi Jums yra tinkamas? Pirmasis 45 minučių pokalbis yra
                nemokamas. Nėra jokių įsipareigojimų. Tai tik galimybė susitikti, pasimatyti (arba pasikalbėti telefonu)
                ir tuomet nuspręsti.
              </p>
              <p>
                Tikiuosi netrukus susisiekti su Jumis!
                <br />
                Jūratė <br />
                Tel. <a href='tel:+37061280062'>+37061280062</a>
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
