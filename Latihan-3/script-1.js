// membuat variabel penyimpan nilai masing-masing data
let totalSaldo = 0;
let totalPengeluaran = 0;
let totalPemasukan = 0;

// panggil elemen-elemen input
const inputNama = document.getElementById('nm-tran');
const inputDesc = document.getElementById('desc-keperluan');
const inputNominal = document.getElementById('nominal');
const inputJenisTran = document.getElementById('jenis-tran');
// element tombol
const btnSimpan = document.getElementById('btn-simpan');

// membuat fungsi tombol simpan pada laporan keuangan
btnSimpan.addEventListener('click', function() {
    const namaTran = inputNama.value.trim();
    const descKeperluan = inputDesc.value.trim();
    const nominal = inputNominal.value.trim();
    const jenisTran = inputJenisTran.value.trim();
    
    // 🚨 1. REM UTAMA (VALIDASI): Taruh di paling atas!
    // Jika nama, nominal, atau jenis transaksi kosong, langsung STOP kodenya di sini.
    if (jenisTran === "" || namaTran === "" || nominal === "") {
        alert("Mohon isi semua data dan tentukan jenis transaksi!");
        return; // Menghentikan fungsi agar kode di bawah tidak crash
    }
    
    // menghapus tulisan default ketika pertamakali membuat laporan
    const kotakIsiDefault = document.getElementById(`kotak-${jenisTran}`);
    const kotakDefault = document.getElementById(`riw-${jenisTran}`);
    
    // Ditambah proteksi && agar memastikan elemennya memang ada sebelum dicek
    if(kotakIsiDefault && kotakDefault && kotakIsiDefault.contains(kotakDefault)) {
        kotakDefault.remove();
    }
    
    // Membuat komponen kartu riwayat baru
    const kotakRiwayat = document.createElement('div');
    kotakRiwayat.classList.add('kotak-riwayat');
    
    kotakRiwayat.innerHTML = `
        <div class="judul-ds b-${jenisTran}">
            <h4 class="teks-judul-ds">${namaTran}</h4>
        </div>
        <div>
            <span class="nominal-riwayat">Rp ${nominal}</span>
            <span class="desc-riwayat">${descKeperluan}</span>
        </div>
    `;
    
    // Di sini sudah dijamin aman karena jenisTran pasti berisi 'pemasukan' atau 'pengeluaran'
    document.getElementById(`kotak-${jenisTran}`).appendChild(kotakRiwayat);
            
    // element statistik HTML
    const inputSaldo = document.getElementById('saldo');
    const inputPemasukan = document.getElementById('pemasukan');
    const inputPengeluaran = document.getElementById('pengeluaran');
    
    // 🚨 2. LOGIKA KALKULASI STATISTIK
    // Rina langsung pakai variabel 'nominal' yang sudah di-trim di atas ya, biar gak mubazir
    if(jenisTran === "pengeluaran") {
        totalPengeluaran += Number(nominal);
        inputPengeluaran.innerText = `- Rp ${totalPengeluaran}`;
        console.log("Total Pengeluaran:", totalPengeluaran);
    }
    else if (jenisTran === "pemasukan") {
        totalPemasukan += Number(nominal);
        inputPemasukan.innerText = `+ Rp ${totalPemasukan}`;
        console.log("Total Pemasukan:", totalPemasukan);
    }
    
    // menghitung saldo akhir
    totalSaldo = totalPemasukan - totalPengeluaran;
    
    // menampilkan total saldo ke layar HTML
    inputSaldo.innerText = `Rp ${totalSaldo}`;
    
    // 🚨 3. BERSIHKAN FORM (Selalu taruh di paling akhir fungsi)
    inputNama.value = "";
    inputDesc.value = "";
    inputNominal.value = "";
    inputJenisTran.value = "";
});