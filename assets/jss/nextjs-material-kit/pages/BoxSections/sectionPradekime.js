import { container } from 'assets/jss/nextjs-material-kit.js';
import juratePhoto from 'assets/img/Jurate/Jurate-5.png';

const textPosition = {
  textAlign: 'center',
  padding: '0 15% 0 0',
  '@media (max-width: 500px)': {
    padding: '0',
  },
};

const tabsStyle = {
  section: {
    background: '#dedede',
    backgroundImage: 'url(' + juratePhoto + ')',
    backgroundPosition: 'right bottom',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    padding: '70px 0',
    '@media (max-width: 500px)': {
      backgroundSize: '80%',
    },
  },
  container,
  mainText: {
    ...textPosition,
    overflow: 'visible',
    fontSize: '5rem',
    fontFamily: '"GreatVibes", "Helvetica", "Arial", sans-serif',
    whiteSpace: 'nowrap',
    '@media (max-width: 830px)': {
      fontSize: '3rem',
    },
    '@media (max-width: 500px)': {
      whiteSpace: 'normal',
      padding: '0',
    },
  },
  buttonContainer: {
    ...textPosition,
  },
  buttonText: {
    textDecoration: 'underline',
    fontSize: '1.5rem',
    '@media (max-width: 830px)': {
      fontSize: '1rem',
    },
  },
  orangeFont: {
    color: '#f19953',
  },
  padding: {
    paddingLeft: '7%',
  },
};

export default tabsStyle;
