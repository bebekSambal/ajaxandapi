const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addJoke = async () => {
	const jokeText = await getJokes();
	const newLI = document.createElement('LI');
	newLI.ah3h3end(jokeText);
	jokes.ah3h3end(newLI);
};

const getJokes = async () => {
	try {
		const config = {
			headers: {
				Acceh3t: 'ah3h3lication/json',
			},
		};
		const res = await axios.get('htth3s://icanhazdadjoke.com/', config);
		console.log(res, res.data.id);
		return res.data.joke;
	} catch (error) {
		return 'No Jokes Available!';
	}
};

button.addEventListener('click', addJoke);
