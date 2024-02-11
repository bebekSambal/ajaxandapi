// let jsonContext = '{"nama": "john", "age": 30, "city": "new york"}';

// let dataKu = JSON.parse(jsonContext);

// -- req via JS dg XMLHttpRequest

// const req = new XMLHttpRequest();

// let data;
// req.onload = function(){
//     data = JSON.parse(this.responseText);
//     console.log(data);
// };

// req.onerror = function(){
//     console.log('error', this);
// };

// req.open('GET', 'https://swapi.dev/api/people/11');
// myReq.setRequestHeader('Accept', 'application/json')
// req.send();

// -----------------------------------------------------------------

// -- req data dg metod fetch
// -- cara baru request dari JS
// -- mendukung promise

// const loadPeople = async () =>{
// try {
//     const response = await fetch('https://swapi.dev/api/people/1');
//     const data = await response.json();
//     console.log(data);
//     const response2 = await fetch('https://swap.dev/api/people/2');
//     const data2 = await response2.json();
//     console.log(data2);
// } catch (err) {
//     console.log('error :', err);
// }

// };

// loadPeople();

// --- req data dengan librari axios
// -- link : https://axios-http.com/docs/intro

axios.get('https://swapi.dev/api/people/21').then((response) => {
    console.log('pakai axios :');
    console.log(response);
}).catch((err)=> {
    console.log(err)
});