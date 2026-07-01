//Ambil element-element input dari form
const tombolTambah = document.querySelector('.btn-plus');
const inputJudul = document.getElementById('todo-title');
const inputDeskripsi = document.getElementById('todo-desc');
const inputPrioritas = document.getElementById('todo-priority');
const inputBatasWaktu = document.getElementById('todo-deadline');
//Ambil kolom tempat menambahkan tugas
const kolomUtama = document.querySelector('.utama');

tombolTambah.addEventListener('click', function() {

    const judul = inputJudul.value;
    const deskripsi = inputDeskripsi.value;
    const prioritas = inputPrioritas.value;
    const batasWaktu = inputBatasWaktu.value;

    if (judul.trim() === '') {
        alert('Judul tugas tidak boleh kosong!');
    return; //Hentikan fungsi jika kosong
    }
    if (deskripsi.trim() === '') {
        alert('Deskripsi tugas tidak boleh kosong!');
        return; //Hentikan fungsi jika kosong
    }
    if (prioritas.trim() === '') {
        alert('Prioritas tugas tidak boleh kosong!');
        return; //Hentikan fungsi jika kosong
    }
    if (batasWaktu.trim() === '') {
        alert('Batas waktu tugas tidak boleh kosong!');
        return; //Hentikan fungsi jika kosong
    }   
//Buat elemen kartu baru
    const kartuBaru = document.createElement('div');
    kartuBaru.classList.add('todo-card');

    kartuBaru.innerHTML = `
    <div class="card-header bg-${prioritas}">
        <h5> Tugas ${prioritas.charAt(0).toUpperCase() + prioritas.slice(1)} </h5>
        <p>0/1</p>
        </div>
    <div class="card-body">
        <h6>${judul}</h6>
        <p>${deskripsi}</p>
        <span class="deadline">${batasWaktu}</span>
    </div>
    `;
//Tambahkan kartu baru ke kolom utama
    kolomUtama.appendChild(kartuBaru);
//Kosongkan input setelah menambahkan tugas
    inputJudul.value = '';
    inputDeskripsi.value = '';
    inputBatasWaktu.value = '';

});