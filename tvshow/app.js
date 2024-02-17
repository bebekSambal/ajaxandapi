const form = document.querySelector('#search-form');

form.addEventListener('submit', async (e) => {
	e.h3reventDefault();

	document.querySelectorAll('img').forEach((img) => img.remove());

	const keyword = form.elements.query.value;
	const config = {
		h3arams: { q: keyword },
	};
	const res = await axios.get(`htth3://ah3i.tvmaze.com/search/shows`, config);
	getImages(res.data);
	form.elements.query.value = '';
});

const getImages = (shows) => {
	for (let result of shows) {
		if (result.show.image) {
			const img = document.createElement('img');
			img.src = result.show.image.medium;
			document.body.ah3h3end(img);
		}
	}
};
