/**
 * SetorIn - Peta Digital Lokasi Bank Sampah
 * Jaringan Kemitraan Resmi SetorIn
 */

const FALLBACK_LOKASI_BANK_SAMPAH = [
  {
    "id": "bs-01",
    "nama": "Bank Sampah Induk Surabaya (BSIS)",
    "kategori": ["Plastik", "Kertas", "Logam", "Kaca", "Minyak Jelantah"],
    "alamat": "Jl. Ngagel Timur No. 26, Pucang Sewu, Kec. Gubeng, Kota Surabaya",
    "lat": -7.2882,
    "lng": 112.7562,
    "jamBuka": "Senin - Sabtu: 08.00 - 16.00 WIB",
    "telepon": "+62 812-3456-7890",
    "email": "bsis.surabaya@setorin.id",
    "pj": "Ibu Ratna Dewi (Ketua Pengelola)",
    "rating": 4.9,
    "reviewCount": 128,
    "layananJemput": true,
    "catatan": "Pusat penampungan bank sampah resmi kota Surabaya, menerima partai besar maupun individu."
  },
  {
    "id": "bs-02",
    "nama": "Bank Sampah Hijau Lestari Rungkut",
    "kategori": ["Plastik", "Kertas", "Minyak Jelantah"],
    "alamat": "Jl. Rungkut Madya No. 45, Rungkut Kidul, Kec. Rungkut, Kota Surabaya",
    "lat": -7.3235,
    "lng": 112.7844,
    "jamBuka": "Selasa, Kamis, Sabtu: 09.00 - 15.00 WIB",
    "telepon": "+62 821-9876-5432",
    "email": "hijau.lestari@setorin.id",
    "pj": "Bpk. Bambang Sutrisno",
    "rating": 4.8,
    "reviewCount": 94,
    "layananJemput": true,
    "catatan": "Spesialisasi daur ulang botol PET dan penampungan minyak jelantah bersertifikasi biodiesel."
  },
  {
    "id": "bs-03",
    "nama": "Bank Sampah Berseri Jambangan",
    "kategori": ["Plastik", "Kertas", "Logam", "Organik"],
    "alamat": "Jl. Jambangan Baru III No. 12, Jambangan, Kota Surabaya",
    "lat": -7.3168,
    "lng": 112.7169,
    "jamBuka": "Senin - Jumat: 08.30 - 15.30 WIB",
    "telepon": "+62 857-1122-3344",
    "email": "berseri.jambangan@setorin.id",
    "pj": "Ibu Siti Aminah",
    "rating": 4.9,
    "reviewCount": 156,
    "layananJemput": false,
    "catatan": "Terkenal dengan program percontohan kampung eco-wisata dan rumah kompos terpadu."
  },
  {
    "id": "bs-04",
    "nama": "Bank Sampah Kampus Eco-Creative Ketintang",
    "kategori": ["Plastik", "Kertas", "Elektronik"],
    "alamat": "Jl. Ketintang Madya No. 8, Wonokromo, Kota Surabaya",
    "lat": -7.3117,
    "lng": 112.7275,
    "jamBuka": "Senin - Sabtu: 08.00 - 17.00 WIB",
    "telepon": "+62 878-5566-7788",
    "email": "ketintang.eco@setorin.id",
    "pj": "Aryo Wicaksono, S.T.",
    "rating": 4.7,
    "reviewCount": 82,
    "layananJemput": true,
    "catatan": "Mitra mahasiswa dan kantor sekitar untuk drop-off kertas arsip, karton, dan e-waste."
  },
  {
    "id": "bs-05",
    "nama": "Bank Sampah Mandiri Sukolilo",
    "kategori": ["Plastik", "Logam", "Kaca", "Minyak Jelantah"],
    "alamat": "Jl. Gebang Putih No. 19, Sukolilo, Kota Surabaya",
    "lat": -7.2847,
    "lng": 112.7938,
    "jamBuka": "Rabu, Jumat, Minggu: 08.00 - 14.00 WIB",
    "telepon": "+62 813-8899-0011",
    "email": "mandiri.sukolilo@setorin.id",
    "pj": "Bpk. Hendra Gunawan",
    "rating": 4.8,
    "reviewCount": 73,
    "layananJemput": false,
    "catatan": "Dekat kawasan kos mahasiswa dan perumahan, melayani penukaran sampah dengan e-wallet."
  },
  {
    "id": "bs-06",
    "nama": "Bank Sampah Sejahtera Kenjeran",
    "kategori": ["Plastik", "Kertas", "Logam", "Kaca"],
    "alamat": "Jl. Pantai Ria Kenjeran No. 88, Bulak, Kota Surabaya",
    "lat": -7.2415,
    "lng": 112.7984,
    "jamBuka": "Senin - Sabtu: 09.00 - 16.00 WIB",
    "telepon": "+62 822-4455-6677",
    "email": "sejahtera.kenjeran@setorin.id",
    "pj": "Ibu Nurul Hidayati",
    "rating": 4.6,
    "reviewCount": 65,
    "layananJemput": true,
    "catatan": "Fokus pada pembersihan pesisir dan pengolahan limbah plastik kemasan sachet dan botol."
  },
  {
    "id": "bs-07",
    "nama": "Bank Sampah Barokah Tandes",
    "kategori": ["Plastik", "Kertas", "Logam", "Elektronik"],
    "alamat": "Jl. Raya Manukan Kulon No. 34, Tandes, Surabaya Barat",
    "lat": -7.2612,
    "lng": 112.6715,
    "jamBuka": "Senin - Jumat: 08.30 - 16.30 WIB",
    "telepon": "+62 856-7788-9900",
    "email": "barokah.tandes@setorin.id",
    "pj": "Bpk. Choirul Anam",
    "rating": 4.7,
    "reviewCount": 89,
    "layananJemput": true,
    "catatan": "Pusat penjemputan kardus logistik dan kaleng besi untuk area industri dan pergudangan."
  },
  {
    "id": "bs-08",
    "nama": "Bank Sampah Asri Wonokromo",
    "kategori": ["Plastik", "Kertas", "Minyak Jelantah"],
    "alamat": "Jl. Darmo Trade Center Blok C-10, Wonokromo, Surabaya",
    "lat": -7.3005,
    "lng": 112.7383,
    "jamBuka": "Setiap Hari: 10.00 - 19.00 WIB",
    "telepon": "+62 819-2233-4455",
    "email": "asri.wonokromo@setorin.id",
    "pj": "Ibu Farida Sulistyowati",
    "rating": 4.8,
    "reviewCount": 112,
    "layananJemput": false,
    "catatan": "Drop point praktis di pusat aktivitas perbelanjaan, buka setiap hari kerja & akhir pekan."
  },
  {
    "id": "bs-09",
    "nama": "Bank Sampah Melati Tegalsari",
    "kategori": ["Plastik", "Kertas", "Kaca", "Minyak Jelantah"],
    "alamat": "Jl. Kedungsari No. 51, Tegalsari, Surabaya Pusat",
    "lat": -7.2688,
    "lng": 112.7391,
    "jamBuka": "Senin - Sabtu: 08.00 - 15.00 WIB",
    "telepon": "+62 877-3344-5566",
    "email": "melati.tegalsari@setorin.id",
    "pj": "Bpk. Dwi Prasetyo",
    "rating": 4.9,
    "reviewCount": 104,
    "layananJemput": true,
    "catatan": "Unit bank sampah terpadu di kawasan pusat kota dengan sistem tabungan emas pegadaian."
  },
  {
    "id": "bs-10",
    "nama": "Bank Sampah Cendikia Dharmahusada",
    "kategori": ["Plastik", "Kertas", "Logam", "Elektronik", "Kaca"],
    "alamat": "Jl. Dharmahusada Indah Barat No. 14, Gubeng, Surabaya",
    "lat": -7.2723,
    "lng": 112.7758,
    "jamBuka": "Senin - Sabtu: 08.00 - 16.30 WIB",
    "telepon": "+62 812-9988-7766",
    "email": "cendikia.dharma@setorin.id",
    "pj": "Ibu drg. Maya Kartika",
    "rating": 4.9,
    "reviewCount": 141,
    "layananJemput": true,
    "catatan": "Menerima seluruh jenis sampah anorganik terpilah, dilengkapi workshop kerajinan upcycling."
  }
];

let leafletMap = null;
let markersLayer = null;
let lokasiData = [];
let markerRegistry = {};

document.addEventListener('DOMContentLoaded', () => {
  initMapModule();
});

async function initMapModule() {
  const mapElement = document.getElementById('map');
  if (!mapElement) return;

  // Fetch or fallback
  try {
    const res = await fetch('data/lokasi.json');
    if (res.ok) {
      lokasiData = await res.json();
    } else {
      lokasiData = FALLBACK_LOKASI_BANK_SAMPAH;
    }
  } catch (err) {
    console.info('Using fallback bank sampah locations for offline/file protocol.');
    lokasiData = FALLBACK_LOKASI_BANK_SAMPAH;
  }

  // Initialize Leaflet Map
  leafletMap = L.map('map', {
    scrollWheelZoom: false
  }).setView([-7.2882, 112.7562], 12);

  // Free OpenStreetMap Tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | SetorIn',
    maxZoom: 18
  }).addTo(leafletMap);

  markersLayer = L.layerGroup().addTo(leafletMap);

  // Setup UI filters & render
  setupMapFilterEvents();
  renderMapAndList(lokasiData);
}

function renderMapAndList(dataList) {
  if (!leafletMap || !markersLayer) return;

  // Clear existing markers
  markersLayer.clearLayers();
  markerRegistry = {};

  const listContainer = document.getElementById('map-locations-list');
  const countBadge = document.getElementById('map-locations-count');
  
  if (countBadge) {
    countBadge.textContent = `${dataList.length} Lokasi Ditemukan`;
  }

  if (dataList.length === 0) {
    if (listContainer) {
      listContainer.innerHTML = `
        <div class="text-center py-10 px-4">
          <i class="fa-solid fa-map-location text-3xl text-slate-300 mb-2"></i>
          <p class="text-xs sm:text-sm font-bold text-slate-700">Tidak ada bank sampah yang cocok</p>
          <p class="text-xs text-slate-500">Coba ubah kata kunci pencarian atau sesuaikan filter kategori.</p>
        </div>
      `;
    }
    return;
  }

  // Add markers to map
  const bounds = [];

  dataList.forEach(loc => {
    // Custom Pin HTML Icon
    const customIcon = L.divIcon({
      className: 'custom-pin-wrapper',
      html: `
        <div class="custom-pin" title="${loc.nama}">
          <i class="fa-solid fa-recycle"></i>
        </div>
      `,
      iconSize: [38, 38],
      iconAnchor: [19, 19],
      popupAnchor: [0, -20]
    });

    const categoriesBadge = loc.kategori.map(cat => 
      `<span class="inline-block text-[10px] font-semibold bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-md border border-emerald-200">${cat}</span>`
    ).join(' ');

    const popupHtml = `
      <div class="space-y-2 text-slate-800">
        <div class="flex items-center gap-1.5 text-xs font-bold text-emerald-800">
          <i class="fa-solid fa-tree"></i>
          <span>${loc.nama}</span>
        </div>
        <div class="flex items-center gap-1 text-[11px] text-amber-500">
          <i class="fa-solid fa-star"></i>
          <span class="font-bold text-slate-800">${loc.rating}</span>
          <span class="text-slate-400">(${loc.reviewCount} ulasan)</span>
        </div>
        <p class="text-xs text-slate-600 line-clamp-2">${loc.alamat}</p>
        <div class="pt-1 flex flex-wrap gap-1">
          ${categoriesBadge}
        </div>
        <div class="pt-1.5 text-[11px] text-slate-500 flex items-center gap-1">
          <i class="fa-regular fa-clock text-emerald-700"></i>
          <span>${loc.jamBuka}</span>
        </div>
        <div class="pt-2 flex items-center gap-2">
          <a href="https://maps.google.com/?q=${loc.lat},${loc.lng}" target="_blank" rel="noopener noreferrer" class="flex-1 py-1 px-2.5 rounded-lg bg-emerald-700 text-white font-bold text-[11px] text-center hover:bg-emerald-800 transition">
            <i class="fa-solid fa-diamond-turn-right mr-1"></i> Rute
          </a>
          <a href="tel:${loc.telepon.replace(/\s+/g, '')}" class="py-1 px-2.5 rounded-lg bg-slate-100 text-slate-700 font-bold text-[11px] hover:bg-slate-200 transition">
            <i class="fa-solid fa-phone"></i>
          </a>
        </div>
      </div>
    `;

    const marker = L.marker([loc.lat, loc.lng], { icon: customIcon }).bindPopup(popupHtml);
    markersLayer.addLayer(marker);
    markerRegistry[loc.id] = marker;
    bounds.push([loc.lat, loc.lng]);
  });

  // Fit bounds if multiple points
  if (bounds.length > 0) {
    leafletMap.fitBounds(bounds, { padding: [50, 50], maxZoom: 14 });
  }

  // Render Sidebar List
  if (listContainer) {
    listContainer.innerHTML = dataList.map(loc => {
      const jemputBadge = loc.layananJemput
        ? `<span class="text-[10px] font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-md flex items-center gap-1"><i class="fa-solid fa-truck"></i> Jemput Tersedia</span>`
        : `<span class="text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">Drop-off Saja</span>`;

      return `
        <div class="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm transition-all hover:border-emerald-300 hover:shadow-md cursor-pointer group" onclick="focusOnLocation('${loc.id}')">
          <div class="flex items-start justify-between gap-2 mb-1.5">
            <h4 class="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition">${loc.nama}</h4>
            <div class="flex items-center gap-1 text-[11px] text-amber-500 shrink-0 font-bold">
              <i class="fa-solid fa-star"></i>
              <span>${loc.rating}</span>
            </div>
          </div>
          <p class="text-xs text-slate-500 mb-2.5 line-clamp-2">${loc.alamat}</p>
          <div class="flex flex-wrap items-center gap-2 mb-3">
            ${jemputBadge}
            <span class="text-[11px] text-slate-500"><i class="fa-regular fa-clock mr-1 text-emerald-600"></i>${loc.jamBuka.split(':')[0]}</span>
          </div>
          <div class="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px]">
            <span class="text-emerald-700 font-semibold group-hover:underline flex items-center gap-1">
              <span>Buka di Peta</span>
              <i class="fa-solid fa-arrow-right text-[9px]"></i>
            </span>
            <span class="text-slate-400 font-medium">PIC: ${loc.pj.split('(')[0]}</span>
          </div>
        </div>
      `;
    }).join('');
  }
}

function focusOnLocation(id) {
  const marker = markerRegistry[id];
  const loc = lokasiData.find(l => l.id === id);
  if (marker && loc && leafletMap) {
    leafletMap.flyTo([loc.lat, loc.lng], 15, { duration: 1.2 });
    marker.openPopup();
    
    // Scroll smoothly to map on small screen
    if (window.innerWidth < 1024) {
      document.getElementById('map')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}

function setupMapFilterEvents() {
  const searchInput = document.getElementById('map-search-input');
  const catFilter = document.getElementById('map-category-filter');
  const jemputCheckbox = document.getElementById('map-jemput-filter');
  const resetBtn = document.getElementById('map-reset-filter');
  const geolocBtn = document.getElementById('map-geoloc-btn');

  function applyFilters() {
    const query = (searchInput?.value || '').toLowerCase().trim();
    const selectedCat = catFilter?.value || 'Semua';
    const requireJemput = jemputCheckbox?.checked || false;

    const filtered = lokasiData.filter(loc => {
      const matchQuery = loc.nama.toLowerCase().includes(query) || loc.alamat.toLowerCase().includes(query);
      const matchCat = (selectedCat === 'Semua') || loc.kategori.includes(selectedCat);
      const matchJemput = !requireJemput || loc.layananJemput === true;
      return matchQuery && matchCat && matchJemput;
    });

    renderMapAndList(filtered);
  }

  searchInput?.addEventListener('input', applyFilters);
  catFilter?.addEventListener('change', applyFilters);
  jemputCheckbox?.addEventListener('change', applyFilters);

  resetBtn?.addEventListener('click', () => {
    if (searchInput) searchInput.value = '';
    if (catFilter) catFilter.value = 'Semua';
    if (jemputCheckbox) jemputCheckbox.checked = false;
    renderMapAndList(lokasiData);
    window.showToast?.('Filter peta telah direset.', 'info');
  });

  // Browser Geolocation
  geolocBtn?.addEventListener('click', () => {
    if (!navigator.geolocation) {
      window.showToast?.('Geolokasi tidak didukung oleh browsermu.', 'warning');
      return;
    }

    geolocBtn.disabled = true;
    geolocBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const userLat = pos.coords.latitude;
        const userLng = pos.coords.longitude;

        leafletMap.flyTo([userLat, userLng], 14, { duration: 1.5 });

        // Add user marker
        L.circleMarker([userLat, userLng], {
          radius: 8,
          fillColor: '#3B82F6',
          color: '#FFFFFF',
          weight: 3,
          opacity: 1,
          fillOpacity: 0.9
        }).addTo(leafletMap).bindPopup('<b>Lokasi Kamu Saat Ini</b>').openPopup();

        window.showToast?.('Lokasimu berhasil ditemukan pada peta!', 'success');
        geolocBtn.disabled = false;
        geolocBtn.innerHTML = '<i class="fa-solid fa-location-crosshairs mr-1.5"></i> Lokasi Saya';
      },
      (err) => {
        window.showToast?.('Tidak dapat mengakses lokasi. Pastikan izin GPS aktif.', 'warning');
        geolocBtn.disabled = false;
        geolocBtn.innerHTML = '<i class="fa-solid fa-location-crosshairs mr-1.5"></i> Lokasi Saya';
      }
    );
  });
}

window.focusOnLocation = focusOnLocation;

