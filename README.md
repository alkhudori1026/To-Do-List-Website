# To-Do-List Website
Latihan logika javascript

# 📚 Catatan Developer: Fondasi Arsitektur HTML & CSS

## 1. Filosofi Pembungkus HTML (Prinsip Lemari)
Sebelum memberi *style*, struktur HTML harus logis dan punya tujuan yang jelas.

*   **`section` (Laci Utama):** Digunakan untuk membagi area besar yang punya tema/fungsi spesifik (misal: area input form, area daftar tugas).
*   **`div` (Sekat Pengatur):** Tidak punya arti semantik. Murni digunakan sebagai "kotak transparan" untuk membungkus elemen agar mudah diatur tata letaknya (misal: untuk di-Flexbox-kan).
*   **`id` vs `class`:**
    *   **`id` (`#`):** Nomor KTP. Unik, hanya boleh ada satu di satu halaman (contoh: `#todo-form`).
    *   **`class` (`.`):** Seragam. Bisa dipakai berulang-ulang untuk elemen dengan bentuk/peran yang sama (contoh: `.todo-list`, `.btn-plus`).

---

## 2. Alur Berpikir Menulis CSS (Makro ke Mikro)
Bangunlah CSS seperti membangun rumah, jangan terbalik-balik:

1.  **Struktur & Ukuran:** Tentukan `display` (flex/block), `width`, `height`.
2.  **Arsitektur & Jarak:** Atur `padding` (jarak dinding ke dalam) dan `margin` / `gap` (jarak ke luar/tetangga).
3.  **Kosmetik:** Warnai dengan `background`, beri `border`, atau `box-shadow`.
4.  **Tipografi:** Rapikan isi teks dengan `color`, `font-size`, `text-align`.

---

## 3. Menaklukkan Flexbox & Posisi Tengah
Flexbox adalah senjata utama untuk menyusun tata letak.

*   **`justify-content`:** Mengatur posisi elemen secara **Horizontal** (Kiri - Kanan / Sumbu Utama).
*   **`align-items`:** Mengatur posisi elemen secara **Vertikal** (Atas - Bawah / Sumbu Silang).
*   **Solusi Kotak Menciut:** Secara *default*, `align-items: center` membuat elemen anak menciut mengikuti panjang teks. Ganti menjadi **`align-items: stretch`** agar elemen anak dipaksa membentang penuh 100% ke kiri dan kanan.
*   **Membuat Kontainer di Tengah Layar:** 
    *   Gunakan `margin: 0 auto;` pada elemen yang sudah memiliki batas `max-width`.

---

## 4. Manajemen Warna Profesional (`:root`)
Jangan kelompokkan variabel warna berdasarkan nama elemen (seperti `--header-bg`), karena akan merepotkan jika tema desain diubah.

*   **Gunakan Gaya Semantik (Peran/Fungsi):** Kelompokkan menjadi:
    *   *Brand Colors* (contoh: `--primary`, `--primary-light`)
    *   *Background Colors* (contoh: `--bg-main`, `--bg-card`)
    *   *Text Colors* (contoh: `--text-main`, `--text-muted`)
*   **Functional Colors:** Sediakan warna khusus untuk status aplikasi (misal: `--color-task-utama` untuk merah/prioritas tinggi, `--color-task-sedang` untuk oranye).

---

## 5. Senjata Rahasia Developer: Sketsa Kertas
Tidak perlu langsung menggunakan alat digital. Sketsa kotak-kotak kasar menggunakan pensil dan kertas adalah metode paling efektif untuk memetakan mana elemen *Parent* dan mana elemen *Child* sebelum menyentuh kode sama sekali.

---

> **💡 Insight: Menuju Dunia JavaScript**
> HTML dan CSS ibarat membangun sebuah **Robot Mainan**. HTML adalah kerangka besinya, dan CSS adalah cat serta bodinya. Robotnya sudah berdiri gagah, tapi belum bisa bergerak. JavaScript (JS) adalah **Mesin dan Otaknya**. Dengan JS, kita merakit sistem saraf agar tombol yang diklik bisa memberikan respons secara *real-time*!