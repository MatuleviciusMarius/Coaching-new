import { container } from 'assets/jss/nextjs-material-kit.js';
import juratePhoto from 'assets/img/Jurate/Jurate-5.png';

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
  textCenter: {
    textAlign: 'center',
    fontSize: '6rem',
    fontFamily: '"GreatVibes", "Helvetica", "Arial", sans-serif',
  },
};

export default tabsStyle;
