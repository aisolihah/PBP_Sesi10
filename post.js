const newMahasiswaData = {
    nim: '20040075',
    nama: 'Kania',
    gender: 'P',
    prodi: 'TE',
    alamat: 'Bandung'
};

fetch('http://localhost:3000/mahasiswa', {
    method: 'POST',
    headers: {
        'content-Type': 'appLication/json'
    },
    body: JSON.stringify(newMahasiswaData)
})

    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));