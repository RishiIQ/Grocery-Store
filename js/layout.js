// js/layout.js - Sage & Earth-Tone Layout & Navigation Engine
document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const userSession = JSON.parse(localStorage.getItem('freshcart_user'));
  const isLoggedIn = userSession && userSession.email;

  // ============================================
  // SAGE-ACCENT MARKETPLACE HEADER
  // ============================================
  const headerHTML = `
    <header class="nixon-header" id="nixonHeader" role="banner">
      <div class="nixon-header-inner">
        
        <!-- Brand Logo -->
        <a href="index.html" class="nixon-logo" aria-label="FreshCart Home">
          <div class="w-10">
            <img src="assets/images/grossary-logo.png" alt="FreshCart Logo">
          </div>
          <span class="nixon-logo-text">Fresh<span class="nixon-red">Cart</span></span>
        </a>

        <!-- Navigation -->
        <nav class="nixon-nav" id="nixonNav" role="navigation" aria-label="Main Navigation">
          <a href="index.html" class="nixon-nav-link ${currentPath === 'index.html' || currentPath === '' ? 'active' : ''}">Home</a>
          <a href="index-saas.html" class="nixon-nav-link ${currentPath === 'index-saas.html' ? 'active' : ''}">SaaS</a>
          <a href="shop.html" class="nixon-nav-link ${currentPath === 'shop.html' ? 'active' : ''}">Shop</a>
          <a href="services.html" class="nixon-nav-link ${currentPath === 'services.html' ? 'active' : ''}">Services</a>
          <a href="about.html" class="nixon-nav-link ${currentPath === 'about.html' ? 'active' : ''}">About</a>
          <a href="blog.html" class="nixon-nav-link ${currentPath === 'blog.html' || currentPath === 'blog-detail.html' ? 'active' : ''}">Journal</a>
          <a href="pricing.html" class="nixon-nav-link ${currentPath === 'pricing.html' ? 'active' : ''}">Pricing</a>
          <a href="contact.html" class="nixon-nav-link ${currentPath === 'contact.html' ? 'active' : ''}">Contact</a>
        </nav>

        <!-- Right Actions -->
        <div class="nixon-actions">
          <button id="nixonThemeToggle" class="nixon-action-btn" title="Toggle Theme" aria-label="Toggle theme">
            <svg class="nixon-icon-dark" width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
            </svg>
            <svg class="nixon-icon-light" width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>
          </button>

          <button id="nixonRTLToggle" class="nixon-action-btn" title="Toggle Text Direction" aria-label="Toggle text direction">
            <svg class="nixon-icon-ltr" width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 6h12M6 12h8M6 18h10"/>
            </svg>
            <svg class="nixon-icon-rtl" width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="display:none;">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6H6m12 6H10m12 6H8"/>
            </svg>
          </button>

          <a href="cart.html" class="nixon-cart-btn ${currentPath === 'cart.html' ? 'active' : ''}" aria-label="Shopping cart">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
            </svg>
            <span class="nixon-cart-badge" id="nixonCartBadge">0</span>
          </a>

          <div id="nixonAuthContainer">
            ${isLoggedIn ? `
              <div class="auth-dropdown">
                <button class="nixon-auth-btn dashboard-btn" id="authUserBtn">
                  ${userSession.name || 'Account'}
                 
                </button>
                <div class="auth-dropdown-menu">
                  <a href="account.html">Dashboard</a>
                  <button id="signOutBtn" class="auth-dropdown-signout">Sign Out</button>
                </div>
              </div>
            ` : `
              <a href="login.html" class="nixon-auth-btn">Sign In</a>
            `}
            
          </div>
        </div>

        <!-- Mobile Hamburger -->
        <button class="nixon-hamburger" id="nixonHamburger" aria-label="Toggle menu" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  `;

  // ============================================
  // SAGE-TONE FOOTER WITH BRAND LOGO & NAME
  // ============================================
  const footerHTML = `
    <footer class="nixon-footer" role="contentinfo">
      <div class="nixon-footer-inner">
        
        <!-- Brand Column -->
        <div class="nixon-footer-brand">
          <a href="index.html" class="brand-logo">
            <div class="logo-icon">
              <img src="assets/images/grossary-logo.png" alt="FreshCart Logo">
            </div>
            <span class="brand-name">Fresh<span class="highlight">Cart</span></span>
          </a>
          <p class="brand-description">
            Certified organic provisions and zero-fluctuation cold-chain telemetry delivered in 15 minutes.
          </p>
        </div>

        <!-- Links Grid -->
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

        <!-- Footer Bottom -->
        <div class="nixon-footer-bottom">
          <p>© 2026 FreshCart Marketplace. All rights reserved.</p>
        </div>

      </div>
    </footer>
  `;

  document.body.insertAdjacentHTML('afterbegin', headerHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // ============================================
  // SIGN OUT FUNCTIONALITY
  // ============================================
  function handleSignOut() {
    localStorage.removeItem('freshcart_user');
    // Clear any other user data if needed
    window.location.reload();
  }

  // Add sign out event listeners
  function initSignOutButtons() {
    // Sign out button in desktop dropdown
    const signOutBtn = document.getElementById('signOutBtn');
    if (signOutBtn) {
      signOutBtn.addEventListener('click', function(e) {
        e.preventDefault();
        handleSignOut();
      });
    }

    // Sign out button in mobile nav
    const navSignOutBtn = document.getElementById('navSignOutBtn');
    if (navSignOutBtn) {
      navSignOutBtn.addEventListener('click', function(e) {
        e.preventDefault();
        handleSignOut();
      });
    }
  }

  // ============================================
  // ENHANCED MOBILE MENU
  // ============================================
  function initMobileMenu() {
    const hamburger = document.getElementById('nixonHamburger');
    const nav = document.getElementById('nixonNav');
    const body = document.body;
    
    if (!hamburger || !nav) return;

    function toggleMenu(forceState) {
      const isOpen = forceState !== undefined ? forceState : !nav.classList.contains('open');
      
      if (isOpen) {
        nav.classList.add('open');
        hamburger.classList.add('active');
        hamburger.setAttribute('aria-expanded', 'true');
        body.style.overflow = 'hidden';
      } else {
        nav.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        body.style.overflow = '';
      }
    }

    // Hamburger click
    hamburger.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleMenu();
    });

    // Close on link click (except sign out)
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 1024) {
          toggleMenu(false);
        }
      });
    });

    // Close on outside click
    document.addEventListener('click', function(e) {
      if (nav.classList.contains('open')) {
        const isClickInside = nav.contains(e.target) || hamburger.contains(e.target);
        if (!isClickInside) {
          toggleMenu(false);
        }
      }
    });

    // Close on Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        toggleMenu(false);
      }
    });

    // Handle resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (window.innerWidth > 1024 && nav.classList.contains('open')) {
          toggleMenu(false);
        }
      }, 250);
    });
  }
  initMobileMenu();

  // ============================================
  // THEME TOGGLE
  // ============================================
  function initThemeToggle() {
    const themeBtn = document.getElementById('nixonThemeToggle');
    if (!themeBtn) return;

    const applyTheme = (theme) => {
      document.documentElement.classList.toggle('dark', theme === 'dark');
      localStorage.setItem('theme', theme);
      updateThemeIcons(theme);
    };

    const updateThemeIcons = (theme) => {
      const isDark = document.documentElement.classList.contains('dark');
      document.querySelectorAll('.nixon-icon-dark').forEach(icon => icon.style.display = isDark ? 'none' : 'block');
      document.querySelectorAll('.nixon-icon-light').forEach(icon => icon.style.display = isDark ? 'block' : 'none');
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
  // CART BADGE
  // ============================================
  function updateCartBadge() {
    const badge = document.getElementById('nixonCartBadge');
    if (!badge) return;

    try {
      const cart = window.FreshCartDB ? FreshCartDB.getCart() : JSON.parse(localStorage.getItem('freshcart_cart')) || [];
      const totalQty = cart.reduce((sum, item) => sum + (item.qty || 0), 0);
      badge.textContent = totalQty;
      badge.style.display = totalQty > 0 ? 'flex' : 'none';
    } catch (e) {
      badge.textContent = '0';
      badge.style.display = 'none';
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

    // Initialize sign out buttons after DOM update
    setTimeout(initSignOutButtons, 100);
  }
  initAuthState();

  // ============================================
  // PAGE TRANSITIONS (Skip on shop)
  // ============================================
  const isShopPage = currentPath === 'shop.html' || currentPath === 'shop';
  
  if (!isShopPage) {
    let isTransitioning = false;

    document.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      
      if (isTransitioning) {
        e.preventDefault();
        return;
      }
      
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
        const currentUrl = window.location.pathname;
        const targetUrl = new URL(link.href).pathname;
        
        if (currentUrl === targetUrl) return;
        
        e.preventDefault();
        isTransitioning = true;
        
        const targetHref = link.href;
        document.body.classList.add('cinematic-exit');

        setTimeout(() => {
          window.location.href = targetHref;
        }, 750);
      }
    });

    window.addEventListener('pageshow', () => {
      isTransitioning = false;
    });
  }

  window.NixonLayout = {
    updateCartBadge,
    refreshAuth: initAuthState,
    refreshTheme: initThemeToggle
  };
});