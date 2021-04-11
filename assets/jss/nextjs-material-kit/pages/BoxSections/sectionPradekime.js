import { container } from 'assets/jss/nextjs-material-kit.js';
import juratePhoto from 'assets/img/Jurate/Jurate-5.png';

const textPosition = {
  textAlign: 'center',
  padding: '0 15% 0 0',
};

const tabsStyle = {
  section: {
    background: '#dedede',
    backgroundImage: 'url(' + juratePhoto + ')',
    backgroundPosition: 'right bottom',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    padding: '70px 0',
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
    textDecoration: 'underline',
  },
  orangeFont: {
    color: '#f19953',
  },
  padding: {
    paddingLeft: '7%',
  },
};

export default tabsStyle;
