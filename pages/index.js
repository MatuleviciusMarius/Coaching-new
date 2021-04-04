import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// react components for routing our app without refresh
import Link from 'next/link';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
// core components
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import Footer from 'components/Footer/Footer.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
import Parallax from 'components/Parallax/Parallax.js';
// sections for this page
import SectionBasics from 'pages-sections/Components-Sections/SectionBasics.js';
import SectionNavbars from 'pages-sections/Components-Sections/SectionNavbars.js';
import SectionTabs from 'pages-sections/Components-Sections/SectionTabs.js';
import SectionPradekime from 'pages-sections/Box-Sections/SectionPradekime.js';
import SectionWhatIs from 'pages-sections/Box-Sections/SectionWhatIs.js';
import SectionAbout from 'pages-sections/Box-Sections/SectionAbout.js';
import SectionPills from 'pages-sections/Components-Sections/SectionPills.js';
import SectionNotifications from 'pages-sections/Components-Sections/SectionNotifications.js';
import SectionTypography from 'pages-sections/Components-Sections/SectionTypography.js';
import SectionJavascript from 'pages-sections/Components-Sections/SectionJavascript.js';
import SectionCarousel from 'pages-sections/Components-Sections/SectionCarousel.js';
import SectionCompletedExamples from 'pages-sections/Components-Sections/SectionCompletedExamples.js';
import SectionLogin from 'pages-sections/Components-Sections/SectionLogin.js';
import SectionExamples from 'pages-sections/Components-Sections/SectionExamples.js';
import SectionDownload from 'pages-sections/Components-Sections/SectionDownload.js';

import styles from 'assets/jss/nextjs-material-kit/pages/components.js';

const useStyles = makeStyles(styles);

export default function Home(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand='Jūrate Lajauskaitė'
        rightLinks={<HeaderLinks />}
        fixed
        color='transparent'
        changeColorOnScroll={{
          height: 400,
          color: 'white',
        }}
        {...rest}
      />
      <Parallax image={require('assets/img/header-min.jpg')}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Paauglių ir Jaunimo koučingas</h1>
                <h3 className={classes.subtitle}>Aiškumo, atsakymų ir sprendimų linkme</h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionPradekime />
        <SectionWhatIs />
        <SectionAbout />
      </div>
      <Footer />
    </div>
  );
}
