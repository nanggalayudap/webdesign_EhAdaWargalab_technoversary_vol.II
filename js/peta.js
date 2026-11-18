/**
 * SetorIn - Peta Digital Lokasi Bank Sampah
 * Jaringan Kemitraan Resmi SetorIn
 */

const FALLBACK_LOKASI_BANK_SAMPAH = [
  {
    "id": "bs-01",
    "nama": "Bank Sampah Kampus Hijau UTM",
    "kategori": ["Plastik", "Kertas", "Logam", "Elektronik"],
    "alamat": "Kawasan Terpadu Universitas Trunojoyo Madura, Jl. Raya Telang, Kamal, Bangkalan",
    "lat": -7.1278,
    "lng": 112.7231,
    "jamBuka": "Senin - Jumat: 08.00 - 16.00 WIB",
    "telepon": "+62 857-5547-1944",
    "email": "hijau.utm@setorin.id",
    "pj": "Ahmad Fauzi, S.T. (Unit Lingkungan UTM)",
    "rating": 4.9,
    "reviewCount": 142,
    "layananJemput": true,
    "catatan": "Pusat penampungan sampah anorganik kawasan kampus UTM, melayani mahasiswa, sivitas akademika, serta warga Telang."
  },
  {
    "id": "bs-02",
    "nama": "Bank Sampah Telang Asri Mandiri",
    "kategori": ["Plastik", "Kertas", "Minyak Jelantah"],
    "alamat": "Perumahan Telang Asri Blok B No. 14, Desa Telang, Kec. Kamal, Bangkalan",
    "lat": -7.1255,
    "lng": 112.7270,
    "jamBuka": "Selasa, Kamis, Sabtu: 09.00 - 15.00 WIB",
    "telepon": "+62 857-5547-1944",
    "email": "telang.asri@setorin.id",
    "pj": "Ibu Hj. Maimunah",
    "rating": 4.8,
    "reviewCount": 98,
    "layananJemput": true,
    "catatan": "Menerima setoran rutin dari perumahan warga dan kos-kosan mahasiswa di timur kampus UTM."
  },
  {
    "id": "bs-03",
    "nama": "Bank Sampah Graha Cendikia Telang Indah",
    "kategori": ["Plastik", "Kertas", "Logam", "Kaca"],
    "alamat": "Jl. Telang Indah Barat No. 8, Desa Telang, Kec. Kamal, Bangkalan",
    "lat": -7.1220,
    "lng": 112.7200,
    "jamBuka": "Senin - Sabtu: 08.30 - 16.30 WIB",
    "telepon": "+62 857-5547-1944",
    "email": "cendikia.telang@setorin.id",
    "pj": "Bpk. Choirul Umam",
    "rating": 4.9,
    "reviewCount": 115,
    "layananJemput": false,
    "catatan": "Drop point favorit mahasiswa untuk kardus paket pengiriman barang, botol plastik PET, dan kertas arsip."
  },
  {
    "id": "bs-04",
    "nama": "Bank Sampah Melati Kamal Sejahtera",
    "kategori": ["Plastik", "Kertas", "Minyak Jelantah", "Kaca"],
    "alamat": "Jl. Raya Kamal No. 42, Banyuajuh, Kec. Kamal, Bangkalan",
    "lat": -7.1685,
    "lng": 112.7215,
    "jamBuka": "Senin - Sabtu: 08.00 - 15.00 WIB",
    "telepon": "+62 857-5547-1944",
    "email": "melati.kamal@setorin.id",
    "pj": "Ibu Siti Romlah",
    "rating": 4.7,
    "reviewCount": 86,
    "layananJemput": true,
    "catatan": "Spesialisasi pengumpulan minyak jelantah rumah tangga dan botol plastik kemasan area sentra Kamal."
  },
  {
    "id": "bs-05",
    "nama": "Bank Sampah Sakera Lestari Socah",
    "kategori": ["Plastik", "Logam", "Kertas"],
    "alamat": "Jl. Raya Socah No. 28, Kec. Socah, Bangkalan",
    "lat": -7.0850,
    "lng": 112.7150,
    "jamBuka": "Rabu, Jumat, Minggu: 08.30 - 14.30 WIB",
    "telepon": "+62 857-5547-1944",
    "email": "sakera.socah@setorin.id",
    "pj": "Bpk. H. Abdurrahman",
    "rating": 4.8,
    "reviewCount": 79,
    "layananJemput": false,
    "catatan": "Unit bank sampah warga Socah dengan tabungan sembako dan uang tunai langsung."
  },
  {
    "id": "bs-06",
    "nama": "Bank Sampah Induk Bangkalan Berseri",
    "kategori": ["Plastik", "Kertas", "Logam", "Kaca", "Minyak Jelantah", "Elektronik"],
    "alamat": "Jl. Soekarno Hatta No. 15, Mlajah, Kec. Bangkalan, Madura",
    "lat": -7.0350,
    "lng": 112.7420,
    "jamBuka": "Senin - Sabtu: 08.00 - 16.30 WIB",
    "telepon": "+62 857-5547-1944",
    "email": "induk.bangkalan@setorin.id",
    "pj": "Drs. Mohammad Subhan, M.Si.",
    "rating": 4.9,
    "reviewCount": 164,
    "layananJemput": true,
    "catatan": "Pusat induk pengolahan dan penampungan bank sampah resmi wilayah Bangkalan perkotaan, menerima kapasitas besar."
  },
  {
    "id": "bs-07",
    "nama": "Bank Sampah Sumber Barokah Burneh",
    "kategori": ["Plastik", "Kertas", "Logam"],
    "alamat": "Jl. Raya Burneh No. 50, Kec. Burneh, Bangkalan",
    "lat": -7.0620,
    "lng": 112.7680,
    "jamBuka": "Senin - Jumat: 08.30 - 16.00 WIB",
    "telepon": "+62 857-5547-1944",
    "email": "barokah.burneh@setorin.id",
    "pj": "Bpk. Masykur",
    "rating": 4.7,
    "reviewCount": 92,
    "layananJemput": true,
    "catatan": "Mitra penjemputan kardus toko, kaleng minuman, dan plastik daur ulang kawasan poros Burneh."
  },
  {
    "id": "bs-08",
    "nama": "Bank Sampah Kenanga Kraton Bangkalan",
    "kategori": ["Plastik", "Kertas", "Minyak Jelantah", "Kaca"],
    "alamat": "Jl. Veteran No. 19, Kraton, Bangkalan Kota",
    "lat": -7.0292,
    "lng": 112.7462,
    "jamBuka": "Setiap Hari: 09.00 - 17.00 WIB",
    "telepon": "+62 857-5547-1944",
    "email": "kenanga.kraton@setorin.id",
    "pj": "Ibu Nur Fatimah",
    "rating": 4.8,
    "reviewCount": 108,
    "layananJemput": false,
    "catatan": "Pusat drop-off dekat kawasan Alun-Alun Bangkalan dan pusat perkantoran daerah."
  },
  {
    "id": "bs-09",
    "nama": "Bank Sampah Pesisir Kamal Dermaga",
    "kategori": ["Plastik", "Logam", "Kaca"],
    "alamat": "Jl. Raya Pelabuhan No. 12, Tanjung Jati, Kec. Kamal, Bangkalan",
    "lat": -7.1736,
    "lng": 112.7242,
    "jamBuka": "Senin - Sabtu: 08.00 - 15.00 WIB",
    "telepon": "+62 857-5547-1944",
    "email": "pesisir.kamal@setorin.id",
    "pj": "Bpk. Rusdianto",
    "rating": 4.6,
    "reviewCount": 71,
    "layananJemput": true,
    "catatan": "Fokus pada pembersihan limbah plastik pesisir pelabuhan Kamal selat Madura dan botol kaca kemasan."
  },
  {
    "id": "bs-10",
    "nama": "Bank Sampah Berkah Martajasah",
    "kategori": ["Plastik", "Kertas", "Logam", "Elektronik", "Kaca"],
    "alamat": "Jl. Raya Martajasah No. 33, Martajasah, Bangkalan",
    "lat": -7.0180,
    "lng": 112.7300,
    "jamBuka": "Senin - Sabtu: 08.00 - 16.30 WIB",
    "telepon": "+62 857-5547-1944",
    "email": "berkah.martajasah@setorin.id",
    "pj": "Bpk. Kholilur Rahman",
    "rating": 4.9,
    "reviewCount": 124,
    "layananJemput": true,
    "catatan": "Menerima seluruh jenis sampah anorganik terpilah kawasan wisata religi dan pemukiman Martajasah."
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

  // Initialize Leaflet Map centered on Universitas Trunojoyo Madura (Telang, Bangkalan)
  leafletMap = L.map('map', {
    scrollWheelZoom: false
  }).setView([-7.1278, 112.7231], 12);

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

