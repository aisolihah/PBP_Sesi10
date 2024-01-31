const mahasiswaNim = '220040034';

fetch(`http:localhost:3000/mahasiswa/$(mahasiswaNim)`, {
    method: 'DELETE',
    headers: {
        'content-Type': 'application/json'
    }
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));