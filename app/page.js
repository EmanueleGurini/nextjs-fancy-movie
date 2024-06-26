import Carousel from "./components/Carousel/Carousel";
import HeroComponent from "./components/HeroComponent/HeroComponent";
import styles from './page.module.scss'

export default function Home() {
  return (
    <main >
      <HeroComponent />

      <section className={styles.carouselSection}>
        <Carousel />
      </section>
    </main>
  );
}
