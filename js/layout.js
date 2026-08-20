// js/layout.js - Nixon Style Header & Footer with Full Functionality
document.addEventListener('DOMContentLoaded', () => {
  // Get current active filename to highlight current page
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  // ============================================
  // CHECK USER AUTH STATUS FOR DYNAMIC NAV
  // ============================================
  const userSession = JSON.parse(localStorage.getItem('freshcart_user'));
  const isLoggedIn = userSession && userSession.email;

  // ============================================
  // NIXON-STYLE HEADER
  // ============================================
  const headerHTML = `
    <header class="nixon-header" id="nixonHeader">
      <div class="nixon-header-inner">
        
        <!-- Logo with Reliable SVG Grocery Basket Icon -->
        <a href="index.html" class="nixon-logo flex items-center gap-2.5">
          <div class="w-8 h-8 bg-[#E31837]/10 border border-[#E31837]/30 flex items-center justify-center text-[#E31837] rounded-sm">
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
            </svg>
          </div>
          <span class="nixon-logo-text">Fresh<span class="nixon-red">Cart</span></span>
        </a>

        <!-- Navigation -->
        <nav class="nixon-nav">
          <a href="index.html" class="nixon-nav-link ${currentPath === 'index.html' || currentPath === '' ? 'active' : ''}">Home</a>
          <a href="index-saas.html" class="nixon-nav-link ${currentPath === 'index-saas.html' ? 'active' : ''}">SaaS</a>
          <a href="shop.html" class="nixon-nav-link ${currentPath === 'shop.html' ? 'active' : ''}">Shop</a>
          <a href="services.html" class="nixon-nav-link ${currentPath === 'services.html' ? 'active' : ''}">Services</a>
          <a href="about.html" class="nixon-nav-link ${currentPath === 'about.html' ? 'active' : ''}">About</a>
          <a href="blog.html" class="nixon-nav-link ${currentPath === 'blog.html' || currentPath === 'blog-detail.html' ? 'active' : ''}">Journal</a>
          <a href="pricing.html" class="nixon-nav-link ${currentPath === 'pricing.html' ? 'active' : ''}">Pricing</a>
          <a href="contact.html" class="nixon-nav-link ${currentPath === 'contact.html' ? 'active' : ''}">Contact</a>
          ${isLoggedIn ? `<a href="account.html" class="nixon-nav-link text-[#E31837] ${currentPath === 'account.html' || currentPath === 'dashboard.html' ? 'active' : ''}">Dashboard</a>` : ''}
        </nav>

        <!-- Right Actions -->
        <div class="nixon-actions">
          <!-- Theme Toggle -->
          <button id="nixonThemeToggle" class="nixon-action-btn" title="Toggle Theme">
            <svg class="nixon-icon-dark" width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
            </svg>
            <svg class="nixon-icon-light" width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>
          </button>

          <!-- RTL Toggle -->
          <button id="nixonRTLToggle" class="nixon-action-btn" title="Toggle Text Direction">
            <svg class="nixon-icon-ltr" width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 6h12M6 12h8M6 18h10"/>
            </svg>
            <svg class="nixon-icon-rtl" width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="display:none;">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6H6m12 6H10m12 6H8"/>
            </svg>
          </button>

          <!-- Cart -->
          <a href="cart.html" class="nixon-cart-btn ${currentPath === 'cart.html' ? 'active' : ''}">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
            </svg>
            <span class="nixon-cart-badge" id="nixonCartBadge">0</span>
          </a>

          <!-- Auth -->
          <div id="nixonAuthContainer">
            <a href="login.html" class="nixon-auth-btn">Sign In</a>
          </div>
        </div>

        <!-- Mobile Hamburger -->
        <button class="nixon-hamburger" id="nixonHamburger" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  `;

  // ============================================
  // NIXON-STYLE FOOTER
  // ============================================
  const footerHTML = `
    <footer class="nixon-footer">
      <div class="nixon-footer-inner">
        <div class="nixon-footer-grid">
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="about.html">About</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="pricing.html">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li><a href="blog.html">Journal</a></li>
              <li><a href="index-saas.html">API Docs</a></li>
              <li><a href="contact.html">Support</a></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><a href="privacy.html">Privacy</a></li>
              <li><a href="terms.html">Terms</a></li>
              <li><a href="cookies.html">Cookies</a></li>
            </ul>
          </div>
          <div>
            <h4>Connect</h4>
            <ul>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div class="nixon-footer-bottom">
          <p>© 2026 FreshCart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;

  // ============================================
  // INJECT HEADER & FOOTER
  // ============================================
  document.body.insertAdjacentHTML('afterbegin', headerHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // ============================================
  // THEME TOGGLE
  // ============================================
  function initThemeToggle() {
    const themeBtn = document.getElementById('nixonThemeToggle');
    if (!themeBtn) return;

    const applyTheme = (theme) => {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('theme', theme);
      updateThemeIcons(theme);
    };

    const updateThemeIcons = (theme) => {
      const isDark = document.documentElement.classList.contains('dark');
      const darkIcons = document.querySelectorAll('.nixon-icon-dark');
      const lightIcons = document.querySelectorAll('.nixon-icon-light');
      
      darkIcons.forEach(icon => { icon.style.display = isDark ? 'none' : 'block'; });
      lightIcons.forEach(icon => { icon.style.display = isDark ? 'block' : 'none'; });
    };

    const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    updateThemeIcons(currentTheme);

    themeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const isDark = document.documentElement.classList.contains('dark');
      const newTheme = isDark ? 'light' : 'dark';
      applyTheme(newTheme);
      
      if (window.FreshCartUI) {
        window.FreshCartUI.showToast(newTheme === 'dark' ? '🌙 Dark mode enabled' : '☀️ Light mode enabled');
      }
    });
  }
  initThemeToggle();

  // ============================================
  // RTL TOGGLE
  // ============================================
  function initRTLToggle() {
    const rtlBtn = document.getElementById('nixonRTLToggle');
    if (!rtlBtn) return;

    const applyDir = (dir) => {
      document.documentElement.setAttribute('dir', dir);
      localStorage.setItem('dir', dir);
      
      const ltrIcon = rtlBtn.querySelector('.nixon-icon-ltr');
      const rtlIcon = rtlBtn.querySelector('.nixon-icon-rtl');

      if (dir === 'rtl') {
        if (ltrIcon) ltrIcon.style.display = 'none';
        if (rtlIcon) rtlIcon.style.display = 'block';
        rtlBtn.setAttribute('title', 'Switch to LTR Layout');
      } else {
        if (ltrIcon) ltrIcon.style.display = 'block';
        if (rtlIcon) rtlIcon.style.display = 'none';
        rtlBtn.setAttribute('title', 'Switch to RTL Layout');
      }
    };

    const savedDir = localStorage.getItem('dir') || 'ltr';
    applyDir(savedDir);

    rtlBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const currentDir = document.documentElement.getAttribute('dir');
      const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      applyDir(newDir);
      
      if (window.FreshCartUI) {
        window.FreshCartUI.showToast(newDir === 'rtl' ? '📖 RTL mode enabled' : '📖 LTR mode enabled');
      }
    });
  }
  initRTLToggle();

  // ============================================
  // MOBILE HAMBURGER MENU
  // ============================================
  function initMobileMenu() {
    const hamburger = document.getElementById('nixonHamburger');
    const nav = document.querySelector('.nixon-nav');
    if (!hamburger || !nav) return;

    hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      nav.classList.toggle('open');
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        nav.classList.remove('open');
      });
    });
  }
  initMobileMenu();

  // ============================================
  // CART BADGE
  // ============================================
  function updateCartBadge() {
    const badge = document.getElementById('nixonCartBadge');
    if (!badge) return;

    if (window.FreshCartDB) {
      const cart = FreshCartDB.getCart();
      const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
      badge.textContent = totalQty;
    } else {
      try {
        const cart = JSON.parse(localStorage.getItem('freshcart_cart')) || [];
        const totalQty = cart.reduce((sum, item) => sum + (item.qty || 0), 0);
        badge.textContent = totalQty;
      } catch (e) {
        badge.textContent = '0';
      }
    }
  }

  updateCartBadge();
  window.addEventListener('cartUpdated', updateCartBadge);

  // ============================================
  // AUTH STATE
  // ============================================
  function initAuthState() {
    const container = document.getElementById('nixonAuthContainer');
    if (!container) return;

    if (userSession && userSession.email) {
      container.innerHTML = `
        <div class="nixon-auth-dropdown">
          <button class="nixon-auth-btn" id="nixonUserBtn">
            ${userSession.name || 'Account'}
          </button>
          <div class="nixon-auth-dropdown-menu">
            <a href="account.html">Dashboard</a>
            <a href="#" id="nixonLogoutBtn">Sign Out</a>
          </div>
        </div>
      `;

      const logoutBtn = document.getElementById('nixonLogoutBtn');
      if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
          e.preventDefault();
          localStorage.removeItem('freshcart_user');
          window.location.reload();
        });
      }
    }
  }
  initAuthState();

  window.NixonLayout = {
    updateCartBadge: updateCartBadge,
    refreshAuth: initAuthState,
    refreshTheme: initThemeToggle
  };
});
// ============================================
  // SPIN & ZOOM TRANSITION HANDLER
  // ============================================
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    
    if (
      link &&
      link.href &&
      link.hostname === window.location.hostname &&
      !link.getAttribute('target') &&
      !link.getAttribute('download') &&
      link.getAttribute('href') !== '#' &&
      !link.getAttribute('href').startsWith('javascript') &&
      !link.getAttribute('href').startsWith('#')
    ) {
      e.preventDefault();
      const targetUrl = link.href;

      document.body.classList.add('cinematic-exit');

      setTimeout(() => {
        window.location.href = targetUrl;
      }, 750); // Matches exit animation duration
    }
  });