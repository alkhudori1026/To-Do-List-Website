// 1. ATURAN SISTEM (Rule 1-3-5)
const batasTugas = {
    utama: 1,
    sedang: 3,
    kecil: 5
};

// Objek untuk melacak berapa jumlah tugas yang ada saat ini di masing-masing kolom
let jumlahTugas = {
    utama: 0,
    sedang: 0,
    kecil: 0
};

// 2. TANGKAP ELEMEN INPUT
const btnAdd = document.getElementById('btn-add');
const inputTitle = document.getElementById('input-title');
const inputDesc = document.getElementById('input-desc');
const inputPriority = document.getElementById('input-priority');
const inputDeadline = document.getElementById('input-deadline');

// 3. EVENT LISTENER: Saat tombol "+" diklik
btnAdd.addEventListener('click', function() {
    
    // Ambil nilai dari input
    const title = inputTitle.value.trim();
    const desc = inputDesc.value.trim();
    const priority = inputPriority.value; // nilainya: "utama", "sedang", atau "kecil"
    const deadline = inputDeadline.value.trim();

    // Validasi 1: Judul tidak boleh kosong
    if (title === "") {
        alert("Judul tugas harus diisi!");
        return; 
    }

    // Validasi 2: Cek apakah kuota di kotak prioritas tersebut sudah penuh
    if (jumlahTugas[priority] >= batasTugas[priority]) {
        alert(`Kotak Tugas ${priority.toUpperCase()} sudah penuh! (Maksimal ${batasTugas[priority]} tugas)`);
        return; // Hentikan proses jika kuota penuh
    }

    // 4. BUAT ELEMEN KARTU TUGAS BARU
    const card = document.createElement('div');
    card.classList.add('task-item');
    
    // Beri warna border kiri sesuai prioritas
    if (priority === 'utama') card.style.borderLeftColor = 'var(--c-utama)';
    if (priority === 'sedang') card.style.borderLeftColor = 'var(--c-sedang)';
    if (priority === 'kecil') card.style.borderLeftColor = 'var(--c-kecil)';

    // Masukkan isi HTML ke dalam kartu
    card.innerHTML = `
        <h6>${title}</h6>
        <p>${desc || "Tidak ada deskripsi"}</p>
        ${deadline ? `<span class="task-deadline">⏳ ${deadline}</span>` : ''}
    `;

    // 5. MASUKKAN KE DALAM KOTAK YANG TEPAT BERDASARKAN PRIORITAS
    const targetList = document.getElementById(`list-${priority}`);
    targetList.appendChild(card);

    // 6. UPDATE COUNTER & ANGKA DI LAYAR
    jumlahTugas[priority]++; // Tambah 1 ke memori
    
    // Update teks angka (contoh: 0/1 menjadi 1/1)
    const countElement = document.getElementById(`count-${priority}`);
    countElement.innerText = `${jumlahTugas[priority]}/${batasTugas[priority]}`;

    // 7. BERSIHKAN FORM INPUT SETELAH BERHASIL
    inputTitle.value = "";
    inputDesc.value = "";
    inputDeadline.value = "";
});