let total = 0;

const btnTambah = document.getElementById('btn-tambah');



btnTambah.addEventListener('click', function() {

    let nama = document.getElementById('nama-jajan').value;
    let harga = document.getElementById('harga-jajan').value;
    let qty = document.getElementById('quantity').value;

    // Menghitung total pengeluaran
    let jumlah = harga*qty
    total += parseInt(jumlah);
    let hasil = document.getElementById('total-pengeluaran')
    hasil.innerText = `${total}`;

    // Membuat elemen HTML untuk kartu list jajan
    const kartuHtml = document.createElement('div');

    let namaBarang = nama.charAt(0).toUpperCase() + nama.slice(1);

    kartuHtml.className = 'list-item';
    kartuHtml.innerHTML = `
        <span class="nama-jajan">${namaBarang}</span>
        <span class="harga-jajan">Rp ${jumlah}</span>
    `;

    // Memasukkan kartu ke dalam list pengeluaran di HTML
    document.getElementById('list-pengeluaran').appendChild(kartuHtml);

    // Mengosongkan form
    document.getElementById('nama-jajan').value = ''
    document.getElementById('harga-jajan').value = ''
    document.getElementById('quantity').value = ''

});