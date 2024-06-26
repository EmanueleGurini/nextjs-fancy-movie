import styles from './hero.module.scss';

const HeroComponent = () => {
	return (
		<div className={styles.heroContainer}>
			<h2>Titolo film</h2>
			<img src={'https://plus.unsplash.com/premium_photo-1714674732106-1c00baa1c904?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="hero-img" />
			<button className={styles.heroBtn}>Discover more</button>
		</div>
	);
};

export default HeroComponent;