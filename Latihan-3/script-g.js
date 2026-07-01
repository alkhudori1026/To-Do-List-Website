// 1. Array Data (Biar nggak pusing hapus elemen HTML satu-satu)
let daftarTransaksi = [];

const inputNama = document.getElementById('nm-tran');
const inputDesc = document.getElementById('desc-keperluan');
const inputNominal = document.getElementById('nominal');
const inputJenisTran = document.getElementById('jenis-tran');
const btnSimpan = document.getElementById('btn-simpan');

// Fungsi Tombol Simpan
btnSimpan.addEventListener('click', function() {
    const nama = inputNama.value.trim();
    const desc = inputDesc.value.trim();
    const nominal = Number(inputNominal.value.trim());
    const jenis = inputJenisTran.value;
    
    if (nama === "" || nominal === 0 || jenis === "") {
        alert("Isi data dengan lengkap!"); return;
    }

    // Ambil tanggal
    const tanggalSekarang = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });

    // Masukkan ke Array
    daftarTransaksi.push({
        id: Date.now(),
        nama: nama,
        desc: desc,
        nominal: nominal,
        jenis: jenis,
        tanggal: tanggalSekarang
    });

    // Bersihkan form
    inputNama.value = ""; inputDesc.value = ""; 
    inputNominal.value = ""; inputJenisTran.value = "";

    // Panggil fungsi pembangun layar
    bangunUlangLayar();
});

function bangunUlangLayar() {
    // 1. Kosongkan dulu isi HTML kedua kotak riwayat
    const isiPemasukan = document.getElementById('isi-pemasukan');
    const isiPengeluaran = document.getElementById('isi-pengeluaran');
    isiPemasukan.innerHTML = "";
    isiPengeluaran.innerHTML = "";

    let totalPemasukan = 0;
    let totalPengeluaran = 0;
    
    // Untuk mengecek apakah kolomnya kosong atau tidak
    let adaPemasukan = false;
    let adaPengeluaran = false;

    // 2. Cek setiap data di Array
    daftarTransaksi.forEach(function(trx) {
        
        // Atur Kelas Warna dan Simbol sesuai desain Anais
        let warnaNominal = trx.jenis === "pemasukan" ? "bg-hijau" : "bg-oren";
        let simbol = trx.jenis === "pemasukan" ? "+ Rp" : "- Rp";

        // Template HTML asli buatan Anais
        const templateKartu = `
            <div class="kotak-riwayat">
                <div class="judul-ds">
                    <h4 class="teks-judul-ds">${trx.nama}</h4>
                    <span class="tgl-riwayat">${trx.tanggal}</span>
                </div>
                <span class="desc-riwayat">${trx.desc}</span>
                <span class="nominal-riwayat ${warnaNominal}">${simbol} ${trx.nominal}</span>
                <div class="aksi-btn">
                    <button class="btn-kecil edit" onclick="editData(${trx.id})">Edit</button>
                    <button class="btn-kecil hapus" onclick="hapusData(${trx.id})">Hapus</button>
                </div>
            </div>
        `;

        // 3. Masukkan ke kotak yang TEPAT dan hitung statistiknya
        if (trx.jenis === "pemasukan") {
            isiPemasukan.innerHTML += templateKartu;
            totalPemasukan += trx.nominal;
            adaPemasukan = true;
        } else {
            isiPengeluaran.innerHTML += templateKartu;
            totalPengeluaran += trx.nominal;
            adaPengeluaran = true;
        }
    });

    // 4. Kembalikan Teks Default JIKA kolomnya kosong
    if (!adaPemasukan) isiPemasukan.innerHTML = '<p class="teks-default">Belum ada pemasukan.</p>';
    if (!adaPengeluaran) isiPengeluaran.innerHTML = '<p class="teks-default">Belum ada pengeluaran.</p>';

    // 5. Update Statistik HTML
    document.getElementById('pemasukan').innerText = `+ Rp ${totalPemasukan}`;
    document.getElementById('pengeluaran').innerText = `- Rp ${totalPengeluaran}`;
    document.getElementById('saldo').innerText = `Rp ${totalPemasukan - totalPengeluaran}`;
}

// Fitur Hapus
function hapusData(idData) {
    daftarTransaksi = daftarTransaksi.filter(trx => trx.id !== idData);
    bangunUlangLayar();
}

// Fitur Edit
function editData(idData) {
    const trx = daftarTransaksi.find(trx => trx.id === idData);
    inputNama.value = trx.nama;
    inputDesc.value = trx.desc;
    inputNominal.value = trx.nominal;
    inputJenisTran.value = trx.jenis;
    hapusData(idData);
}