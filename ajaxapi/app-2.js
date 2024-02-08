// let jsonContext = '{"nama": "john", "age": 30, "city": "new york"}';

// let dataKu = JSON.parse(jsonContext);

// -- req via JS dg XMLHttpRequest

const req = new XMLHttpRequest();

let data;
req.onload = function(){
    data = JSON.parse(this.responseText);
    console.log(data);
};

req.onerror = function(){
    console.log('error', this);
};

req.open('GET', 'https://swapi.dev/api/people/11');
req.send();