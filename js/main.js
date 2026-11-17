/**
 * SetorIn - Main JavaScript
 * Lomba Web Design Techno Versary Vol. II
 * Tim: Eh Ada Wargalab
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initBackToTop();
  initToastContainer();
  initActiveNav();
  initNewsletter();
});

/* ==========================================================================
   1. Navbar & Mobile Drawer
   ========================================================================== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  // Sticky navbar shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar?.classList.add('shadow-md', 'bg-white/95', 'backdrop-blur-md');
      navbar?.classList.remove('bg-white');
    } else {
      navbar?.classList.remove('shadow-md', 'bg-white/95', 'backdrop-blur-md');
      navbar?.classList.add('bg-white');
    }
  });

  // Mobile menu toggle
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');

      // Change icon
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        if (!isExpanded) {
          icon.className = 'fa-solid fa-xmark text-2xl';
        } else {
          icon.className = 'fa-solid fa-bars text-2xl';
        }
      }
    });

    // Close menu when clicking links
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars text-2xl';
      });
    });
  }
}

/* ==========================================================================
   2. Active Nav Link Detection
   ========================================================================== */
function initActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active', 'text-green-700', 'font-semibold');
      link.classList.remove('text-slate-600');
    }
  });
}

/* ==========================================================================
   3. Back to Top Button
   ========================================================================== */
function initBackToTop() {
  let bttBtn = document.getElementById('back-to-top');
  if (!bttBtn) {
    bttBtn = document.createElement('button');
    bttBtn.id = 'back-to-top';
    bttBtn.setAttribute('aria-label', 'Kembali ke atas');
    bttBtn.className = 'fixed bottom-6 left-6 z-40 bg-emerald-700 hover:bg-emerald-800 text-white w-11 h-11 rounded-full shadow-lg flex items-center justify-center opacity-0 pointer-events-none transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-emerald-500';
    bttBtn.innerHTML = '<i class="fa-solid fa-arrow-up text-lg"></i>';
    document.body.appendChild(bttBtn);
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      bttBtn.classList.remove('opacity-0', 'pointer-events-none');
      bttBtn.classList.add('opacity-100');
    } else {
      bttBtn.classList.add('opacity-0', 'pointer-events-none');
      bttBtn.classList.remove('opacity-100');
    }
  });

  bttBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==========================================================================
   4. Custom Toast Notification
   ========================================================================== */
function initToastContainer() {
  if (!document.getElementById('toast-container')) {
    const container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }
}

function showToast(message, type = 'success', duration = 3500) {
  const container = document.getElementById('toast-container') || document.body;
  
  const toast = document.createElement('div');
  const icon = type === 'success' 
    ? 'fa-circle-check text-emerald-500' 
    : type === 'warning' 
    ? 'fa-triangle-exclamation text-amber-500' 
    : 'fa-circle-info text-blue-500';
  
  const border = type === 'success' 
    ? 'border-emerald-200 bg-white' 
    : type === 'warning' 
    ? 'border-amber-200 bg-white' 
    : 'border-blue-200 bg-white';

  toast.className = `toast max-w-sm flex items-start gap-3 p-4 rounded-xl border shadow-xl ${border} text-slate-800 text-sm font-medium z-50`;
  toast.innerHTML = `
    <i class="fa-solid ${icon} text-lg mt-0.5"></i>
    <div class="flex-1 pr-2">${message}</div>
    <button class="text-slate-400 hover:text-slate-600 focus:outline-none" onclick="this.parentElement.remove()">
      <i class="fa-solid fa-xmark"></i>
    </button>
  `;

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// Expose globally
window.showToast = showToast;

/* ==========================================================================
   5. Newsletter Form Simulation
   ========================================================================== */
function initNewsletter() {
  const forms = document.querySelectorAll('.newsletter-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value) {
        showToast(`Terima kasih! Buletin berkala SetorIn akan dikirimkan ke <b>${input.value}</b>`, 'success');
        input.value = '';
      }
    });
  });
}
