//membuat variabel penyimpan nilai masing-masing data
let totalSaldo = 0;
let totalPengeluaran = 0;
let totalPemasukan = 0;

//panggil elemen-elemen input
const inputNama = document.getElementById('nm-tran');
const inputDesc = document.getElementById('desc-keperluan');
const inputNominal = document.getElementById('nominal')
const inputJenisTran = document.getElementById('jenis-tran');
//element tombol
const btnSimpan = document.getElementById('btn-simpan');

//membuat fungsi tombol simpan pada laporan keuangan
btnSimpan.addEventListener('click', function() {
    const namaTran = inputNama.value.trim();
    const descKeperluan = inputDesc.value.trim();
    const nominal = inputNominal.value.trim();
    const jenisTran = inputJenisTran.value.trim();
    
    //menghapus tulisan default ketika pertamakali membuat laporan
    const kotakIsiDefault = document.getElementById(`kotak-${jenisTran}`);
    const kotakDefault = document.getElementById(`riw-${jenisTran}`);
    
    if(kotakIsiDefault.contains(kotakDefault)) {kotakDefault.remove()};
    
    const kotakRiwayat = document.createElement('div');
    kotakRiwayat.classList.add('kotak-riwayat');
    
    kotakRiwayat.innerHTML = `
    <div class="judul-ds b-${jenisTran}">
    <h4 class="teks-judul-ds">${namaTran}</h4>
    </div>
    <div class="isi-kotak-riwayat">
    <span class="nominal-riwayat">Rp ${nominal}</span>
    <span class="desc-riwayat">${descKeperluan}</span>
    </div>
        `;
        document.getElementById(`kotak-${jenisTran}`).appendChild(kotakRiwayat);
            
        //element statistik
    const inputSaldo = document.getElementById('saldo');
    const inputPemasukan = document.getElementById('pemasukan');
    const inputPengeluaran = document.getElementById('pengeluaran');
    
    //membuat fungsi kalkulasi statistik keuangan
    let valueNominal = inputNominal.value;

    if(jenisTran === "pengeluaran") {
        totalPengeluaran += Number(valueNominal);
        inputPengeluaran.innerText = `- Rp ${totalPengeluaran}`;
        console.log(totalPengeluaran);
    }
    else if (jenisTran === "pemasukan") {
        totalPemasukan += Number(valueNominal);
        inputPemasukan.innerText = `+ Rp ${totalPemasukan}`;
        console.log(totalPemasukan);
    }
    else {alert("tentukan jenis transaksi!")};
    
    //menghitung saldo
    totalSaldo = totalPemasukan - totalPengeluaran;
    
    //menampilkan STATISTIK
    inputSaldo.innerText = `Rp ${totalSaldo}`;
    //membersihkan bekas tulisannya
    inputNama.value = "";
    inputDesc.value = "";
    inputNominal.value = "";
    inputJenisTran.value = "";
})