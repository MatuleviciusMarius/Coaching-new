import { container } from 'assets/jss/nextjs-material-kit.js';
import juratePhoto from 'assets/img/Jurate/Jurate-1.png';

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
    backgroundSize: '50%',
    height: '100vh',
    padding: '70px 0',
    '@media (max-width: 800px)': {
      backgroundSize: '70%',
    },
    '@media (max-width: 500px)': {
      backgroundSize: '100%',
    },
  },
  container,
  mainText: {
    ...textPosition,
    fontSize: '5rem',
    fontFamily: '"GreatVibes", "Helvetica", "Arial", sans-serif',
  },
  buttonContainer: {
    ...textPosition,
  },
  buttonText: {
    fontSize: '1.5rem',
    textDecoration: 'underline',
  },
  orangeFont: {
    color: '#f19953',
  },
};

export default tabsStyle;
