<p align="center">
  <img src="assets/icons/logoNoBG.png" alt="Logo SetorIn" width="88">
</p>

# SetorIn - Platform Bank Sampah Digital & Daur Ulang Terintegrasi

Platform web interaktif yang dikembangkan oleh PT Setor Inovasi Nusantara untuk mendigitalkan ekosistem bank sampah, memfasilitasi pemilahan sampah anorganik dari rumah tangga, memberikan transparansi estimasi nilai ekonomi, serta menghubungkan masyarakat dengan jaringan bank sampah mitra resmi di seluruh Indonesia.

---

## Ringkasan Eksekutif

SetorIn dirancang sebagai solusi terpadu atas permasalahan timbulan sampah perkotaan yang sebagian besar langsung berakhir di Tempat Pemrosesan Akhir (TPA) tanpa pemilahan sejak dari sumbernya. Melalui integrasi teknologi web modern, SetorIn menghadirkan tiga pilar fungsional utama:
1. **Transparansi Nilai:** Memungkinkan nasabah menghitung estimasi rupiah dan dampak reduksi emisi karbon secara akurat sebelum menyetorkan material.
2. **Keterjangkauan Fasilitas:** Memetakan titik bank sampah terdekat dengan navigasi geospasial berbasis OpenStreetMap.
3. **Standarisasi Mutu:** Mengedukasi masyarakat mengenai tata cara pemilahan 3 kategori (Organik, Anorganik Bernilai, dan Limbah B3) sesuai spesifikasi industri daur ulang.

---

## Modul & Fitur Utama

### 1. Kalkulator Nilai Sampah & Dampak Lingkungan (`fitur.html#kalkulator`)
- Menghitung akumulasi nominal rupiah dari 10 komoditas daur ulang (botol PET, plastik tebal HDPE, gelas PP, kardus karton box, kertas HVS arsip, kaleng aluminium, kaleng besi, botol kaca, minyak jelantah, dan limbah elektronik kecil).
- Menampilkan estimasi ekuivalen reduksi emisi karbon (kg CO2 eq), volume penghematan ruang TPA (liter), jam operasional lampu hemat energi, jarak tempuh motor listrik, dan serapan pohon per tahun.
- Menyediakan simulasi cepat berdasarkan profil: Rumah Tangga Kecil, Rumah Tangga Menengah, dan Perkantoran & Usaha.
- Dilengkapi sistem toleransi lokal (in-memory failover) yang memastikan kalkulasi tetap berjalan normal baik saat diakses via web server maupun secara langsung melalui protokol berkas lokal.

### 2. Peta Digital Jaringan Bank Sampah (`fitur.html#peta`)
- Menggunakan pustaka pemetaan Leaflet.js dengan ubin peta terbuka OpenStreetMap tanpa dependensi kunci API berbayar.
- Fitur pencarian multi-kriteria berdasarkan nama unit, jalan/wilayah, kategori material yang diterima, serta filter ketersediaan layanan jemput sampah (pickup service).
- Sinkronisasi interaktif dua arah antara daftar bank sampah dan penanda pada peta.
- Integrasi tombol rute petunjuk arah langsung ke Google Maps dan pemanggil kontak penanggung jawab unit.
- Fitur pendeteksi koordinat pengguna berbasis HTML5 Geolocation API.

### 3. Panduan Pemilahan Standar Industri (`konten.html`)
- Panduan terperinci 3 kategori: Organik, Anorganik Bernilai, dan Bahan Berbahaya & Beracun (B3).
- Implementasi protokol 3B: Bersihkan sisa isi, Bilas material berminyak, dan Bongkar/Pipihkan kemasan.
- Modul kuis uji pemahaman interaktif untuk melatih ketepatan identifikasi sampah.
- Kumpulan artikel edukasi mengenai alur rantai pasok daur ulang dan ekonomi sirkular.

### 4. Pusat Komunikasi & Pendaftaran Unit Baru (`contact.html`)
- Formulir pesan dan pertanyaan umum pengguna.
- Formulir pendaftaran dan usulan bank sampah baru bagi pengurus komunitas, RT/RW, dan pengelola bank sampah lokal untuk diverifikasi ke dalam direktori publik SetorIn.

---

## Standar Desain & Palet Warna (Eco-Green Palette)

Sistem antarmuka dibangun dengan pendekatan visual ramah lingkungan yang mengedepankan keterbacaan tinggi dan kepatuhan kontras aksesibilitas:

| Elemen | Kode HEX | Peran Fungsional |
| :--- | :--- | :--- |
| Primary Green | #15803D | Tombol aksi utama (CTA), header aktif, indikator navigasi |
| Primary Hover | #166534 | Keadaan hover tombol, latar belakang footer, aksen kontras |
| Accent Green | #22C55E | Lencana status aktif, indikator dampak positif |
| Mint Surface | #F0FDF4 | Latar belakang modul kartu dan container kalkulator |
| Background Ivory | #FAFAF9 | Latar belakang dasar halaman yang nyaman bagi mata |
| Charcoal Text | #14261C | Tipografi judul dan teks paragraf berbobot |
| Sage Slate | #4B6356 | Tipografi sekunder, subjudul, dan keterangan pendukung |

---

## Struktur Direktori

```text
setorin-platform/
├── index.html              # Halaman Beranda Perusahaan
├── about.html              # Halaman Profil Perusahaan & Tata Kelola
├── konten.html             # Halaman Standar Pemilahan & Edukasi
├── fitur.html              # Halaman Kalkulator & Peta Digital
├── contact.html            # Halaman Hubungi Kami & Usulan Mitra
├── README.md               # Dokumentasi Teknis Sistem
├── css/
│   └── style.css           # Lembar Gaya Kustom & Utilitas Peta
├── js/
│   ├── main.js             # Skrip Global, Navigasi Mobile, & Notifikasi Toast
│   ├── kalkulator.js       # Logika Perhitungan Nilai Sampah & Jejak Emisi
│   └── peta.js             # Integrasi Leaflet.js & Filter Geospasial
├── data/
│   ├── harga-sampah.json   # Katalog Komoditas, Harga Referensi, & Faktor Emisi
│   └── lokasi.json         # Basis Data Titik & Profil Bank Sampah
└── assets/
    ├── img/                # Aset Gambar
    └── icons/              # Aset Ikon
```

---

## Spesifikasi Teknologi

- **Kerangka Frontend:** HTML5 Semantik, CSS3 murni, dan Tailwind CSS via CDN.
- **Bahasa Pemrograman:** Javascript
- **Pustaka Geospasial:** Leaflet.js versi 1.9.4 dan OpenStreetMap Tiles.
- **Ikonografi:** Font Awesome Free 6.5.1 (format SVG/CSS).
- **Tipografi:** Google Fonts (Plus Jakarta Sans dan Outfit).

---

## Panduan Menjalankan

Website ini dirancang secara modular dan dapat langsung dijalankan tanpa tahapan kompilasi:

1. **Akses Langsung Berkas Lokal:**
   Buka berkas `index.html` langsung menggunakan peramban modern (Google Chrome, Microsoft Edge, Mozilla Firefox, atau Safari).
   
2. **Menggunakan Web Server Lokal (Opsional):**
   Jalankan server HTTP sederhana melalui terminal:
   ```bash
   python -m http.server 8000
   ```
   Akses `http://localhost:8000` pada peramban.

---

## Hak Cipta & Informasi Pengembang

Hak Cipta (c) 2026 **SetorIn** — Dikembangkan oleh **Tim Eh Ada Wargalab**.  

### Susunan Pengembang (Tim Eh Ada Wargalab)

| No. | Nama Lengkap | Peran / Fokus |
| :---: | :--- | :--- |
| 1 | **Nanggala Yuda Pratama** | Frontend & Logic Engineering |
| 2 | **Moh. Nafis Muzadi** | UI/UX & Visual Design |
| 3 | **Perdiyanto** | Content & Environmental Research |

### Informasi Instansi & Operasional

- **Instansi:** Universitas Trunojoyo Madura (UTM)
- **Fakultas / Lokasi:** Gedung Inkubator Bisnis & Inovasi, Universitas Trunojoyo Madura  
  Jl. Raya Telang, PO. BOX 2, Kec. Kamal, Kab. Bangkalan, Madura, Jawa Timur 69162
- **Kontak Perusahaan:** kontak@setorin.id | +62 857-5547-1944
