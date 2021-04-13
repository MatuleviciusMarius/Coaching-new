import { container } from 'assets/jss/nextjs-material-kit.js';
import juratePhoto from 'assets/img/Jurate/Jurate-4.png';

const textPosition = {
  textAlign: 'center',
  padding: '0 15% 0 0',
};

const tabsStyle = {
  section: {
    background: '#d9d9d9',
    backgroundImage: 'url(' + juratePhoto + ')',
    backgroundPosition: 'right bottom',
    backgroundSize: '60%',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    padding: '70px 0',
    '@media (max-width: 800px)': {
      backgroundSize: '70%',
    },
    '@media (max-width: 500px)': {
      backgroundSize: '80%',
    },
  },
  container,
  mainText: {
    ...textPosition,
    fontSize: '5rem',
    fontFamily: '"GreatVibes", "Helvetica", "Arial", sans-serif',
    '@media (max-width: 800px)': {
      fontSize: '4rem',
    },
    '@media (max-width: 500px)': {
      fontSize: '4rem',
    },
  },
  buttonContainer: {
    ...textPosition,
  },
  buttonText: {
    textDecoration: 'underline',
  },
  orangeFont: {
    color: '#f19953',
  },
  paddingLeft: {
    paddingLeft: '7%',
  },
};

export default tabsStyle;
