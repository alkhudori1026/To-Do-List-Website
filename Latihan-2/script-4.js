const batasTugas = { utama: 1, sedang: 3, kecil: 5 };
let jumlahTugas = { utama: 0, sedang: 0, kecil: 0 };

const btnAdd = document.getElementById('btn-add');
const inputTitle = document.getElementById('input-title');
const inputDesc = document.getElementById('input-desc');
const inputPriority = document.getElementById('input-priority');
const inputDeadline = document.getElementById('input-deadline');

// 1. FUNGSI UNTUK MENAMPILKAN CUSTOM ALERT
function tampilkanAlert(pesan) {
    document.getElementById('modal-message').innerText = pesan;
    document.getElementById('custom-modal').classList.remove('modal-hidden');
}

// Menutup Custom Alert saat tombol "Paham" diklik
document.getElementById('btn-close-modal').addEventListener('click', function() {
    document.getElementById('custom-modal').classList.add('modal-hidden');
});

// 2. FUNGSI UNTUK MENGUPDATE TEKS ANGKA KUOTA
function updateCounter(prioritas) {
    const countElement = document.getElementById(`count-${prioritas}`);
    countElement.innerText = `${jumlahTugas[prioritas]}/${batasTugas[prioritas]}`;
}

// 3. EVENT LISTENER UTAMA: MENAMBAH TUGAS
btnAdd.addEventListener('click', function() {
    const title = inputTitle.value.trim();
    const desc = inputDesc.value.trim();
    const priority = inputPriority.value;
    const deadline = inputDeadline.value.trim();

    // Menggunakan fungsi custom alert yang kita buat di atas
    if (title === "") {
        tampilkanAlert("Judul tugas tidak boleh kosong!");
        return; 
    }

    if (jumlahTugas[priority] >= batasTugas[priority]) {
        tampilkanAlert(`Kotak Tugas ${priority.toUpperCase()} sudah penuh!\nSelesaikan atau hapus tugas lama dulu.`);
        return;
    }

    if (deadline === "") {
        tampilkanAlert("Harus punya deadline woyyy!!");
        return;
    }

    const card = document.createElement('div');
    card.classList.add('task-item');
    card.style.borderLeftColor = `var(--c-${priority})`; // Cara lebih singkat mewarnai border

    // Menyisipkan Checkbox dan Tombol Hapus (X)
    card.innerHTML = `
        <div class="task-header">
            <h6>${title}</h6>
            <div class="task-actions">
                <input type="checkbox" class="check-done" title="Tandai Selesai">
                <button class="btn-delete" title="Hapus Tugas">X</button>
            </div>
        </div>
        <p>${desc || "Tidak ada deskripsi"}</p>
        ${deadline ? `<span class="task-deadline">⏳ ${deadline}</span>` : ''}
    `;

    // 4. LOGIKA TOMBOL HAPUS
    const btnDelete = card.querySelector('.btn-delete');
    btnDelete.addEventListener('click', function() {
        card.remove(); // Menghapus kartu dari layar
        
        // Membebaskan kuota HANYA JIKA tugas belum pernah dipindah ke "Selesai"
        if (!card.classList.contains('task-done')) {
            jumlahTugas[priority]--;
            updateCounter(priority);
        }
    });

    // 5. LOGIKA CHECKBOX (TUGAS SELESAI)
    const checkDone = card.querySelector('.check-done');
    checkDone.addEventListener('change', function() {
        if (this.checked) {
            // Pindah kartu ke kolom selesai
            document.getElementById('list-selesai').appendChild(card);
            card.classList.add('task-done'); // Memberi efek coretan teks
            
            // Sembunyikan checkbox agar tidak bisa di-uncheck lagi (opsional)
            this.style.display = 'none';

            // Membebaskan kuota di kotak asalnya
            jumlahTugas[priority]--;
            updateCounter(priority);
        }
    });

    document.getElementById(`list-${priority}`).appendChild(card);
    
    jumlahTugas[priority]++;
    updateCounter(priority);

    inputTitle.value = ""; inputDesc.value = ""; inputDeadline.value = "";
});
//Tambahkan tombol clear
 const btnClear = document.getElementById('btn-clear')
 btnClear.addEventListener('click', function() {
    const listDone = document.getElementById('list-selesai');
    listDone.innerHTML = '';
 });