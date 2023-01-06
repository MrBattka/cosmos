import styles from './App.module.css';
import background from './img/background.jpg'
import price from './img/price_list.jpg'

function App() {
  return (
    <div className={styles.app__wrapper}>
      <div className={styles.title__wrapper}>
        <a name='top' alt="#" href='/'></a>
        <img className={styles.img__background} src={background} alt="#/" />
        <header className={styles.header}>
          <ul>
            <a className={styles.skip__link} href='#top'><li>Home</li></a>
            <a><li>About us</li></a>
            <a href='#media'><li>Photos / Vidos</li></a>
            <a href='#price'><li>Price</li></a>
            <a><li>Contacts</li></a>
          </ul>
        </header>
        <div className={styles.title__header}>
          <h2>Cosmos Hall</h2>
        </div>
      </div>
      <a name='media' alt="#" href='/'></a>
      <div className={styles.media__wrapper}>
        <p>Photos / Videos</p>
      </div>
      <a name='price' alt="#" href='/'></a>
      <div className={styles.price__wrapper}>
        <img className={styles.img__price} src={price} alt="#" />
      </div>
    </div>
  );
}

export default App;
