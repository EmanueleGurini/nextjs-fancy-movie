import Carousel from "./components/Carousel/Carousel";
import HeroComponent from "./components/HeroComponent/HeroComponent";
import styles from './page.module.scss'
import { v4 as uuidv4 } from 'uuid';


const popMovies = Array.from({ length: 10 }, (_, i) => {
  return {
    id: uuidv4(),
    title: 'Topolino alla conquista del west',
    imageUrl: 'https://image.tmdb.org/t/p/w500/wNAhuOZ3Zf84jCIlrcI6JhgmY5q.jpg'
  }
})
const homeData = {
  filmOfTheWeek: {
    id: 1,
    title: 'Titanic',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1714674732106-1c00baa1c904?q=80&w=2970&auto=format&fit=crop&=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  popMovies: popMovies
}


export default function Home() {

  return (
    <main >
      <HeroComponent movie={homeData.filmOfTheWeek} />
      <section className={styles.carouselSection}>
        <Carousel movies={homeData.popMovies} />
      </section>
    </main >
  );
}
