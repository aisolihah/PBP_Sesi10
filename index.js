const mahasiswaNim = '220040033';
const updatedData = {
    nama: 'anjel',
    gender: 'P',
    prodi: 'SI',
    alamat: 'Jl. Cicurug'
};

fetch(`http://localhost:3000/mahasiswa/${mahasiswaNim}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },

    body: JSON.stringify(updatedData)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error)); 
