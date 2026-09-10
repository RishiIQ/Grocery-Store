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
          <a href="index.html" class="nixon-nav-link ${currentPath === 'index.html' || currentPath === '' ? 'active' : ''}">Home 1</a>
          <a href="index-saas.html" class="nixon-nav-link ${currentPath === 'index-saas.html' ? 'active' : ''}">Home 2</a>
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
            <!-- Custom LTR Icon -->
            <svg class="nixon-icon-ltr" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 4.75C6 4.33579 6.33579 4 6.75 4H14.25C14.6642 4 15 4.33579 15 4.75C15 5.16421 14.6642 5.5 14.25 5.5H6.75C6.33579 5.5 6 5.16421 6 4.75ZM6.75 9C6.33579 9 6 9.33579 6 9.75C6 10.1642 6.33579 10.5 6.75 10.5H17.25C17.6642 10.5 18 10.1642 18 9.75C18 9.33579 17.6642 9 17.25 9H6.75ZM6.75 14C6.33579 14 6 14.3358 6 14.75C6 15.1642 6.33579 15.5 6.75 15.5H12.25C12.6642 15.5 13 15.1642 13 14.75C13 14.3358 12.6642 14 12.25 14H6.75ZM3.46967 11.7803C3.76256 12.0732 4.23744 12.0732 4.53033 11.7803C4.82322 11.4874 4.82322 11.0126 4.53033 10.7197L3.56066 9.75L4.53033 8.78033C4.82322 8.48744 4.82322 8.01256 4.53033 7.71967C4.23744 7.42678 3.76256 7.42678 3.46967 7.71967L1.96967 9.21967C1.67678 9.51256 1.67678 9.98744 1.96967 10.2803L3.46967 11.7803Z" fill="currentColor"/>
            </svg>
            <!-- Custom RTL Icon -->
            <svg class="nixon-icon-rtl" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:none;">
              <path d="M15 16H6.5C5.94772 16 5.5 16.4477 5.5 17C5.5 17.5128 5.88604 17.9355 6.38338 17.9933L6.5 18H15C15.5523 18 16 17.5523 16 17C16 16.4872 15.614 16.0645 15.1166 16.0067L15 16H6.5H15ZM21.7071 11.2929L19.7071 9.29289C19.3166 8.90237 18.6834 8.90237 18.2929 9.29289C17.9324 9.65338 17.9047 10.2206 18.2097 10.6129L18.2929 10.7071L19.5858 12L18.2929 13.2929C17.9024 13.6834 17.9024 14.3166 18.2929 14.7071C18.6534 15.0676 19.2206 15.0953 19.6129 14.7903L19.7071 14.7071L21.7071 12.7071C22.0676 12.3466 22.0953 11.7794 21.7903 11.3871L21.7071 11.2929L19.7071 9.29289L21.7071 11.2929ZM15.0001 11L3.50009 10.9989C2.94781 10.9989 2.5 11.4465 2.5 11.9988C2.5 12.5117 2.88596 12.9344 3.38329 12.9922L3.49991 12.9989L14.9999 13C15.5522 13.0001 16 12.5524 16 12.0001C16 11.4873 15.614 11.0646 15.1167 11.0067L15.0001 11L3.50009 10.9989L15.0001 11ZM15 6H6.5C5.94772 6 5.5 6.44772 5.5 7C5.5 7.51284 5.88604 7.93551 6.38338 7.99327L6.5 8H15C15.5523 8 16 7.55228 16 7C16 6.48716 15.614 6.06449 15.1166 6.00673L15 6H6.5H15Z" fill="currentColor"/>
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
              <div class="auth-dropdown" id="authDropdown">
                <button class="nixon-auth-btn dashboard-btn" id="authUserBtn" type="button" aria-expanded="false">
                  ${userSession.name || 'Account'}
                </button>
                <div class="auth-dropdown-menu" id="authDropdownMenu">
                  <a href="account.html">Dashboard</a>
                  <button id="signOutBtn" class="auth-dropdown-signout">Sign Out</button>
                </div>
              </div>
            ` : `
              <a href="login.html" class="nixon-auth-btn" style="background-color: #35ea11;">Sign In</a>
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
        
        <!-- Footer Grid Container -->
        <div class="nixon-footer-grid">
          
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

          <!-- Company Links -->
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="about.html">About</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="pricing.html">Pricing</a></li>
            </ul>
          </div>

          <!-- Resources Links -->
          <div>
            <h4>Resources</h4>
            <ul>
              <li><a href="blog.html">Journal</a></li>
              <li><a href="index-saas.html">API Docs</a></li>
              <li><a href="contact.html">Support</a></li>
            </ul>
          </div>

          <!-- Contact & Address Details -->
          <div class="nixon-footer-contact">
            <h4>Headquarters</h4>
            <ul class="contact-details-list">
              <li><span>124 Botanical Way, Suite 400</span></li>
              <li><span>Coimbatore, Tamil Nadu 641001</span></li>
              <li><a href="tel:+914225550199">+91 (422) 555-0199</a></li>
              <li><a href="mailto:support@freshcart.example">support@freshcart.example</a></li>
            </ul>
          </div>

          <!-- Social Icons Column -->
          <div class="nixon-footer-social-col">
            <h4>Connect</h4>
            <div class="nixon-social-icons">
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://in.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>

        </div>

        <!-- Footer Bottom -->
        <div class="nixon-footer-bottom">
          <p>© 2026 FreshCart Marketplace. All rights reserved.</p>
          <div class="footer-legal">
            <a href="privacy.html">Privacy</a>
            <a href="terms.html">Terms</a>
            <a href="cookies.html">Cookies</a>
          </div>
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
    window.location.reload();
  }

  function initSignOutButtons() {
    const signOutBtn = document.getElementById('signOutBtn');
    if (signOutBtn) {
      signOutBtn.addEventListener('click', function(e) {
        e.preventDefault();
        handleSignOut();
      });
    }

    const navSignOutBtn = document.getElementById('navSignOutBtn');
    if (navSignOutBtn) {
      navSignOutBtn.addEventListener('click', function(e) {
        e.preventDefault();
        handleSignOut();
      });
    }
  }

  // ============================================
  // AUTH DROPDOWN TOGGLE FIX (CLICK ONLY)
  // ============================================
  function initAuthDropdown() {
    const dropdown = document.getElementById('authDropdown');
    const authUserBtn = document.getElementById('authUserBtn');
    
    if (!dropdown || !authUserBtn) return;

    authUserBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      const isOpen = dropdown.classList.toggle('active');
      authUserBtn.setAttribute('aria-expanded', isOpen);
    });

    document.addEventListener('click', function(e) {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
        authUserBtn.setAttribute('aria-expanded', 'false');
      }
    });
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

    hamburger.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleMenu();
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 1024) {
          toggleMenu(false);
        }
      });
    });

    document.addEventListener('click', function(e) {
      if (nav.classList.contains('open')) {
        const isClickInside = nav.contains(e.target) || hamburger.contains(e.target);
        if (!isClickInside) {
          toggleMenu(false);
        }
      }
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        toggleMenu(false);
      }
    });

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

    setTimeout(() => {
      initSignOutButtons();
      initAuthDropdown();
    }, 100);
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