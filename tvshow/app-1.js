// inisiasi #search- ke variabel form
const form = document.querySelector('#search-');

// menambahkan addEventListener ke form

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const keyword = form.elements.query.value;
    const config = {
        params:{ q:keyword},
    } ;
    const res = await axios.get('http://api.tvmaze.com/search/shows', config );


});
