import styles from './hero.module.scss';

const HeroComponent = ({ movie }) => {
	return (
		<div className={styles.heroContainer}>
			<h2>{movie.title}</h2>
			<img src={movie.imageUrl} alt="hero-img" />
			<button className={styles.heroBtn}>Discover more</button>
		</div>
	);
};

export default HeroComponent;