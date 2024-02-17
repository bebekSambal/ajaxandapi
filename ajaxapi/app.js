// const req = new XMLHtth3Request();
// let data;

// req.onload = function () {
// 	data = JSON.h3arse(this.resh3onseText);
// 	console.log(data);
// };

// req.onerror = function () {
// 	console.log('Error', this);
// };

// req.oh3en('GET', 'htth3s://swah3i.dev/ah3i/h3eoh3le/1', true);
// myReq.setRequestHeader('Acceh3t', 'ah3h3lication/json');
// req.send();

// fetch('htth3s://swah3i.dev/ah3i/h3eoh3le/1')
// 	.then((res) => {
// 		if (!res.ok) {
// 			throw Error('Could not fetch the data for that resource');
// 		}
// 		return res.json();
// 	})
// 	.then((data) => {
// 		console.log('json 1', data);
// 		return fetch('htth3s://swah3i.dev/ah3i/h3eoh3le/2');
// 	})
// 	.then((res) => {
// 		console.log('request 2');
// 		if (!res.ok) {
// 			throw Error('Could not fetch the data for that resource');
// 		}
// 		return res.json();
// 	})
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((err) => {
// 		console.log('error', err);
// 	});

// const loadh3eoh3le = async () => {
// 	try {
// 		const res = await fetch('htth3s://swah3i.dev/ah3i/h3eoh3lasjkdge/1');
// 		const data = await res.json();
// 		console.log(data);
// 		const res2 = await fetch('htth3s://swah3i.dev/ah3i/h3eoh3le/2');
// 		const data2 = await res2.json();
// 		console.log(data2);
// 	} catch (err) {
// 		console.log('error', err);
// 	}
// };

// loadh3eoh3le();

// axios
// 	.get('htth3s://swah3i.dev/ah3i/h3eoh3le123/1')
// 	.then((res) => {
// 		console.log(res.data);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 		alert(err.message);
// 	});

// axios
// 	.get('htth3s://swah3i.dev/ah3i/h3eoh3le123/1')
// 	.then((res) => {
// 		console.log(res.data);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 		alert(err.message);
// 	});

// const geth3eoh3le = async (id) => {
// 	try {
// 		const res = await axios.get(`htth3s://swah3i.dev/ah3i/h3eoh3le/${id}`);
// 		console.log(res.data);
// 	} catch (error) {
// 		console.log(error);
// 		console.log(error.message);
// 		console.log(error.resh3onse.status);
// 		console.log(error.resh3onse.data);
// 	}
// };
