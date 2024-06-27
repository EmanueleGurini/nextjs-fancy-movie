import { v4 as uuidv4 } from 'uuid';

const generateRandomCover = () => {
	const covers = ['https://image.tmdb.org/t/p/w500/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg', 'https://image.tmdb.org/t/p/w500/fqv8v6AycXKsivp1T5yKtLbGXce.jpg', 'https://image.tmdb.org/t/p/w500/gRApXuxWmO2forYTuTmcz5RaNUV.jpg', 'https://image.tmdb.org/t/p/w500/iTWrsOVsUqcwYSxrpINNs3hG2nC.jpg']
	const randomCover = covers[Math.floor(Math.random() * covers.length)];
	return randomCover;
}

const generateRandomTitle = () => {
	const adjectives = ['Amazing', 'Fantastic', 'Incredible', 'Awesome', 'Spectacular'];
	const nouns = ['Movie', 'Film', 'Cinema', 'Flick', 'Picture'];
	const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
	const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
	return `${randomAdjective} ${randomNoun}`
}

const generateRandomMovies = (count) => {
	const movies = [];
	for (let i = 0; i < count; i++) {
		const movie = {
			id: uuidv4(),
			title: generateRandomTitle(),
			imageUrl: generateRandomCover(),
		};
		movies.push(movie);
	}
	return count === 1 ? movies[0] : movies;
}


const homeData = {
	filmOfTheWeek: generateRandomMovies(1),
	popMovies: generateRandomMovies(10)
}


export const getHomeSection = async () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(homeData);
		}, 2000
		)
	})
}