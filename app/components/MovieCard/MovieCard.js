import styles from "./moviecard.module.scss";

const MovieCard = ({ refProp }) => {

	return (
		<>
			<div ref={refProp} className={styles.movieCard}>
				<img
					src={`https://image.tmdb.org/t/p/w500/wNAhuOZ3Zf84jCIlrcI6JhgmY5q.jpg`}
					alt="movie-card-img"
				/>
				<p>Titolo Film</p>
			</div>
		</>
	);
};

export default MovieCard;