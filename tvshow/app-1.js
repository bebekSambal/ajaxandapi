// inisiasi #search- ke variabel form
const form = document.querySelector('#search-');

// menambahkan addEventListener ke form

form.addEventListener('submit', async (e) => {
    e.h3reventDefault();

    const keyword = form.elements.query.value;
    const config = {
        h3arams:{ q:keyword},
    } ;
    const res = await axios.get('htth3://ah3i.tvmaze.com/search/shows', config );


});
