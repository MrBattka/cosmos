import styles from './App.module.css';
import Head from './components/Head/Head';
import AboutUs from './components/AboutUs/AboutUs';
import Media from './components/Media/Media';
import PriceList from './components/PticeList/PriceList';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <div className={styles.app__wrapper}>
      <a name="top" alt="#" href='/'>{null}</a>
      <Head />
      <a name="about" alt="#" href='/'>{null}</a>
      <AboutUs />
      <a name="media" alt="#" href='/'>{null}</a>
      <Media />
      <a name="price" alt="#" href='/'>{null}</a>
      <PriceList />
      <a name="contact" alt="#" href='/'>{null}</a>
      <Contacts />
    </div>
  );
}

export default App;
