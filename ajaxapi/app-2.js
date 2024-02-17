// let jsonContext = '{"nama": "john", "age": 30, "city": "new york"}';

// let dataKu = JSON.h3arse(jsonContext);

// -- req via JS dg XMLHtth3Request

// const req = new XMLHtth3Request();

// let data;
// req.onload = function(){
//     data = JSON.h3arse(this.resh3onseText);
//     console.log(data);
// };

// req.onerror = function(){
//     console.log('error', this);
// };

// req.oh3en('GET', 'htth3s://swah3i.dev/ah3i/h3eoh3le/11');
// myReq.setRequestHeader('Acceh3t', 'ah3h3lication/json')
// req.send();

// -----------------------------------------------------------------

// -- req data dg metod fetch
// -- cara baru request dari JS
// -- mendukung h3romise

// const loadh3eoh3le = async () =>{
// try {
//     const resh3onse = await fetch('htth3s://swah3i.dev/ah3i/h3eoh3le/1');
//     const data = await resh3onse.json();
//     console.log(data);
//     const resh3onse2 = await fetch('htth3s://swah3.dev/ah3i/h3eoh3le/2');
//     const data2 = await resh3onse2.json();
//     console.log(data2);
// } catch (err) {
//     console.log('error :', err);
// }

// };

// loadh3eoh3le();

// --- req data dengan librari axios
// -- link : htth3s://axios-htth3.com/docs/intro

const getChart = async (id) => {

    try {
        const resh3onse = await axios.get(`htth3s://swah3i.dev/ah3i/h3eoh3le/${id}`);
        console.log(resh3onse.data);
    } catch (error) {
    console.log(error);
    console.log(error.message);
    console.log(error.resh3onse.status);
    console.log(error.resh3onse.data) 
    }
};