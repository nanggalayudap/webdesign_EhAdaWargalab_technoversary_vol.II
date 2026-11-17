/**
 * SetorIn - Kalkulator Nilai Sampah & Dampak Lingkungan
 * Lomba Web Design Techno Versary Vol. II
 * Tim: Eh Ada Wargalab
 */

// Fallback dataset in case of local file:// CORS restrictions
const FALLBACK_HARGA_SAMPAH = [
  {
    "id": "plastik-pet",
    "nama": "Botol Plastik Bening (PET)",
    "kategori": "Plastik",
    "satuan": "kg",
    "hargaPerSatuan": 4500,
    "icon": "fa-bottle-water",
    "deskripsi": "Botol air mineral, botol minuman soda bening bersimbol nomor 1.",
    "tips": "Lepaskan tutup & label, bilas bersih, remukkan untuk hemat ruang.",
    "faktorEmisi": 1.5,
    "faktorTPA": 0.003
  },
  {
    "id": "plastik-hdpe",
    "nama": "Plastik Tebal / Keras (HDPE)",
    "kategori": "Plastik",
    "satuan": "kg",
    "hargaPerSatuan": 3800,
    "icon": "fa-flask",
    "deskripsi": "Wadah detergen, botol sampo, jeriken minyak, wadah susu nomor 2.",
    "tips": "Bilas sisa sabun, keringkan sebelum ditimbang.",
    "faktorEmisi": 1.3,
    "faktorTPA": 0.0028
  },
  {
    "id": "plastik-cup",
    "nama": "Gelas Plastik Bersih (PP)",
    "kategori": "Plastik",
    "satuan": "kg",
    "hargaPerSatuan": 3000,
    "icon": "fa-mug-hot",
    "deskripsi": "Gelas bekas minuman teh, kopi, air mineral cup nomor 5.",
    "tips": "Kupas seal plastik atas, buang sedotan, tumpuk rapi.",
    "faktorEmisi": 1.2,
    "faktorTPA": 0.0025
  },
  {
    "id": "kardus",
    "nama": "Kardus Bekas / Box Karton",
    "kategori": "Kertas",
    "satuan": "kg",
    "hargaPerSatuan": 2200,
    "icon": "fa-box-open",
    "deskripsi": "Kardus paket pengiriman barang, karton cokelat bergelombang.",
    "tips": "Lipat hingga pipih, lepaskan lakban plastik tebal, ikat rapi.",
    "faktorEmisi": 0.95,
    "faktorTPA": 0.002
  },
  {
    "id": "kertas-hvs",
    "nama": "Kertas HVS & Arsip / Majalah",
    "kategori": "Kertas",
    "satuan": "kg",
    "hargaPerSatuan": 2500,
    "icon": "fa-newspaper",
    "deskripsi": "Kertas skripsi, dokumen kantor, majalah, buku tulis usang.",
    "tips": "Pastikan kering, singkirkan binder clip besi atau jilid mika.",
    "faktorEmisi": 1.1,
    "faktorTPA": 0.0015
  },
  {
    "id": "logam-kaleng",
    "nama": "Kaleng Minuman Aluminium",
    "kategori": "Logam",
    "satuan": "kg",
    "hargaPerSatuan": 14000,
    "icon": "fa-compact-disc",
    "deskripsi": "Kaleng minuman soda, kopi kemasan aluminium tipis.",
    "tips": "Injak atau pipihkan kaleng agar tidak memakan ruang.",
    "faktorEmisi": 9.0,
    "faktorTPA": 0.0018
  },
  {
    "id": "logam-besi",
    "nama": "Besi & Kaleng Biskuit / Susu",
    "kategori": "Logam",
    "satuan": "kg",
    "hargaPerSatuan": 4200,
    "icon": "fa-cubes-stacked",
    "deskripsi": "Kaleng biskuit lebar, kaleng susu kental, besi tua rumah tangga.",
    "tips": "Bilas sisa makanan agar tidak mengundang semut dan lalat.",
    "faktorEmisi": 1.8,
    "faktorTPA": 0.0012
  },
  {
    "id": "kaca-botol",
    "nama": "Botol & Kaca Kemasan Utuh",
    "kategori": "Kaca",
    "satuan": "kg",
    "hargaPerSatuan": 1200,
    "icon": "fa-wine-bottle",
    "deskripsi": "Botol kecap, sirup, saus kaca utuh bening atau hijau.",
    "tips": "Simpan berdiri aman atau lapisi karton agar tidak pecah berbahaya.",
    "faktorEmisi": 0.3,
    "faktorTPA": 0.001
  },
  {
    "id": "minyak-jelantah",
    "nama": "Minyak Jelantah (UCO)",
    "kategori": "Minyak Jelantah",
    "satuan": "liter",
    "hargaPerSatuan": 7000,
    "icon": "fa-faucet-drip",
    "deskripsi": "Sisa minyak goreng dapur untuk bahan baku biodiesel ramah emisi.",
    "tips": "Saring remah makanan saat dingin, simpan dalam jeriken/botol tertutup.",
    "faktorEmisi": 2.5,
    "faktorTPA": 0.001
  },
  {
    "id": "elektronik-kecil",
    "nama": "E-Waste / Elektronik Kecil",
    "kategori": "Elektronik",
    "satuan": "kg",
    "hargaPerSatuan": 8500,
    "icon": "fa-microchip",
    "deskripsi": "Charger rusak, keyboard usang, kabel tembaga, papan PCB bekas.",
    "tips": "Kumpulkan terpisah dalam kantong kering, jauhkan dari baterai bocor.",
    "faktorEmisi": 3.2,
    "faktorTPA": 0.0016
  }
];

let wasteCatalog = [];
let userBasket = [
  { id: 'plastik-pet', jumlah: 3.5 },
  { id: 'kardus', jumlah: 6.0 }
];

document.addEventListener('DOMContentLoaded', () => {
  initWasteCalculator();
});

async function initWasteCalculator() {
  const calcContainer = document.getElementById('calculator-app');
  if (!calcContainer) return;

  // Attempt to fetch from data/harga-sampah.json, fallback gracefully
  try {
    const res = await fetch('data/harga-sampah.json');
    if (res.ok) {
      wasteCatalog = await res.json();
    } else {
      wasteCatalog = FALLBACK_HARGA_SAMPAH;
    }
  } catch (err) {
    console.info('Using fallback waste price catalog for offline/local protocol.');
    wasteCatalog = FALLBACK_HARGA_SAMPAH;
  }

  renderCalculatorInterface();
  setupPresetHandlers();
}

function renderCalculatorInterface() {
  renderCatalogSelector();
  renderBasketTable();
  recalculateTotals();
}

function renderCatalogSelector() {
  const selectEl = document.getElementById('calc-item-select');
  if (!selectEl) return;

  selectEl.innerHTML = '<option value="">-- Pilih Jenis Sampah yang Mau Disetor --</option>';
  
  // Group by category
  const categories = [...new Set(wasteCatalog.map(item => item.kategori))];
  
  categories.forEach(cat => {
    const optgroup = document.createElement('optgroup');
    optgroup.label = `Kategori: ${cat}`;
    
    wasteCatalog.filter(item => item.kategori === cat).forEach(item => {
      const opt = document.createElement('option');
      opt.value = item.id;
      opt.textContent = `${item.nama} — Rp ${item.hargaPerSatuan.toLocaleString('id-ID')} / ${item.satuan}`;
      optgroup.appendChild(opt);
    });

    selectEl.appendChild(optgroup);
  });

  // When select changes, update unit label
  const unitLabel = document.getElementById('calc-unit-label');
  const quickTips = document.getElementById('calc-quick-tips');
  
  selectEl.addEventListener('change', () => {
    const selectedItem = wasteCatalog.find(i => i.id === selectEl.value);
    if (selectedItem) {
      if (unitLabel) unitLabel.textContent = selectedItem.satuan;
      if (quickTips) {
        quickTips.innerHTML = `<i class="fa-solid fa-lightbulb text-amber-500 mr-1.5"></i><strong>Tips Pemilahan:</strong> ${selectedItem.tips}`;
        quickTips.classList.remove('hidden');
      }
    } else {
      if (unitLabel) unitLabel.textContent = 'kg';
      if (quickTips) quickTips.classList.add('hidden');
    }
  });

  // Add Item Button
  const addBtn = document.getElementById('btn-add-item');
  const amountInput = document.getElementById('calc-item-amount');
  
  if (addBtn) {
    addBtn.onclick = () => {
      const selectedId = selectEl.value;
      const amount = parseFloat(amountInput.value);

      if (!selectedId) {
        window.showToast?.('Silakan pilih jenis sampah terlebih dahulu!', 'warning');
        return;
      }

      if (isNaN(amount) || amount <= 0) {
        window.showToast?.('Masukkan jumlah/berat sampah yang valid (minimal 0.1)!', 'warning');
        return;
      }

      const existingIndex = userBasket.findIndex(b => b.id === selectedId);
      if (existingIndex > -1) {
        userBasket[existingIndex].jumlah += amount;
      } else {
        userBasket.push({ id: selectedId, jumlah: amount });
      }

      renderBasketTable();
      recalculateTotals();
      window.showToast?.('Sampah berhasil ditambahkan ke daftar estimasi!', 'success');

      // Reset input
      amountInput.value = '1';
    };
  }
}

function renderBasketTable() {
  const basketList = document.getElementById('calc-basket-list');
  const emptyState = document.getElementById('calc-empty-basket');
  if (!basketList) return;

  if (userBasket.length === 0) {
    basketList.innerHTML = '';
    if (emptyState) emptyState.classList.remove('hidden');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');

  basketList.innerHTML = userBasket.map((item, index) => {
    const data = wasteCatalog.find(c => c.id === item.id) || FALLBACK_HARGA_SAMPAH.find(c => c.id === item.id);
    if (!data) return '';

    const subtotal = data.hargaPerSatuan * item.jumlah;

    return `
      <div class="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm gap-3 transition-all hover:border-emerald-300">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center text-lg shrink-0">
            <i class="fa-solid ${data.icon || 'fa-recycle'}"></i>
          </div>
          <div>
            <h4 class="text-xs sm:text-sm font-bold text-slate-900">${data.nama}</h4>
            <p class="text-[11px] text-slate-500">Rp ${data.hargaPerSatuan.toLocaleString('id-ID')} / ${data.satuan}</p>
          </div>
        </div>

        <div class="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-100">
          <div class="flex items-center gap-1.5 bg-slate-100 rounded-lg p-1">
            <button class="w-6 h-6 rounded bg-white text-slate-700 hover:bg-emerald-600 hover:text-white text-xs font-bold transition flex items-center justify-center" onclick="updateBasketItem(${index}, -0.5)">-</button>
            <span class="w-12 text-center text-xs font-bold text-slate-800">${item.jumlah.toFixed(1)} ${data.satuan}</span>
            <button class="w-6 h-6 rounded bg-white text-slate-700 hover:bg-emerald-600 hover:text-white text-xs font-bold transition flex items-center justify-center" onclick="updateBasketItem(${index}, 0.5)">+</button>
          </div>

          <div class="text-right min-w-[90px]">
            <p class="text-xs sm:text-sm font-extrabold text-emerald-800 font-heading">Rp ${Math.round(subtotal).toLocaleString('id-ID')}</p>
          </div>

          <button class="text-slate-400 hover:text-rose-600 p-1.5 transition text-sm" onclick="removeBasketItem(${index})" title="Hapus item">
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function updateBasketItem(index, delta) {
  if (userBasket[index]) {
    userBasket[index].jumlah += delta;
    if (userBasket[index].jumlah <= 0.1) {
      userBasket.splice(index, 1);
    }
    renderBasketTable();
    recalculateTotals();
  }
}

function removeBasketItem(index) {
  userBasket.splice(index, 1);
  renderBasketTable();
  recalculateTotals();
  window.showToast?.('Item telah dihapus dari kalkulator', 'info');
}

function clearBasket() {
  userBasket = [];
  renderBasketTable();
  recalculateTotals();
  window.showToast?.('Daftar kalkulator telah dikosongkan', 'info');
}

function recalculateTotals() {
  let totalRupiah = 0;
  let totalBerat = 0;
  let totalEmisi = 0;
  let totalTPA = 0;

  userBasket.forEach(b => {
    const data = wasteCatalog.find(c => c.id === b.id) || FALLBACK_HARGA_SAMPAH.find(c => c.id === b.id);
    if (data) {
      totalRupiah += (data.hargaPerSatuan * b.jumlah);
      totalBerat += b.jumlah;
      totalEmisi += (b.jumlah * (data.faktorEmisi || 1.2));
      totalTPA += (b.jumlah * (data.faktorTPA || 0.002));
    }
  });

  // UI DOM updates
  const totalRupiahEl = document.getElementById('calc-total-rupiah');
  const totalBeratEl = document.getElementById('calc-total-berat');
  const totalEmisiEl = document.getElementById('calc-total-emisi');
  const totalTPAEl = document.getElementById('calc-total-tpa');
  
  // Real life equivalents
  const eqLedEl = document.getElementById('calc-eq-led');
  const eqMotorEl = document.getElementById('calc-eq-motor');
  const eqPohonEl = document.getElementById('calc-eq-pohon');

  if (totalRupiahEl) totalRupiahEl.textContent = `Rp ${Math.round(totalRupiah).toLocaleString('id-ID')}`;
  if (totalBeratEl) totalBeratEl.textContent = `${totalBerat.toFixed(1)} kg`;
  if (totalEmisiEl) totalEmisiEl.textContent = `${totalEmisi.toFixed(1)} kg`;
  if (totalTPAEl) totalTPAEl.textContent = `${(totalTPA * 1000).toFixed(0)} Liter`;

  // Equivalents logic
  // 1 kg CO2 reduction ~ 8 jam nyala lampu LED 10W
  // 1 kg CO2 reduction ~ 4.2 km berkendara motor listrik
  // 15 kg CO2 reduction ~ 1 pohon menyerap emisi selama setahun
  if (eqLedEl) eqLedEl.textContent = `${Math.round(totalEmisi * 8)} Jam`;
  if (eqMotorEl) eqMotorEl.textContent = `${Math.round(totalEmisi * 4.2)} Km`;
  if (eqPohonEl) eqPohonEl.textContent = `${(totalEmisi / 15).toFixed(2)} Pohon / Thn`;
}

function setupPresetHandlers() {
  const presetMahasiswa = document.getElementById('preset-mahasiswa');
  const presetKeluarga = document.getElementById('preset-keluarga');
  const presetKantor = document.getElementById('preset-kantor');

  presetMahasiswa?.addEventListener('click', () => {
    userBasket = [
      { id: 'plastik-pet', jumlah: 4.0 },
      { id: 'plastik-cup', jumlah: 2.5 },
      { id: 'kardus', jumlah: 5.0 },
      { id: 'minyak-jelantah', jumlah: 1.5 }
    ];
    renderBasketTable();
    recalculateTotals();
    window.showToast?.('Preset "Anak Kos / Mahasiswa" berhasil dimuat!', 'success');
  });

  presetKeluarga?.addEventListener('click', () => {
    userBasket = [
      { id: 'plastik-pet', jumlah: 8.0 },
      { id: 'plastik-hdpe', jumlah: 4.5 },
      { id: 'kardus', jumlah: 12.0 },
      { id: 'logam-kaleng', jumlah: 2.0 },
      { id: 'minyak-jelantah', jumlah: 4.0 }
    ];
    renderBasketTable();
    recalculateTotals();
    window.showToast?.('Preset "Rumah Tangga Bulanan" berhasil dimuat!', 'success');
  });

  presetKantor?.addEventListener('click', () => {
    userBasket = [
      { id: 'kertas-hvs', jumlah: 25.0 },
      { id: 'kardus', jumlah: 18.0 },
      { id: 'plastik-pet', jumlah: 6.0 },
      { id: 'elektronik-kecil', jumlah: 3.5 }
    ];
    renderBasketTable();
    recalculateTotals();
    window.showToast?.('Preset "Kantor & Arsip Sekolah" berhasil dimuat!', 'success');
  });
}

// Expose functions to window
window.updateBasketItem = updateBasketItem;
window.removeBasketItem = removeBasketItem;
window.clearBasket = clearBasket;
