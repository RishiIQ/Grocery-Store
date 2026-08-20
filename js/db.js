// js/db.js
window.FreshCartDB = {
  products: [
    { 
      id: "prod-1", 
      name: "Organic Hass Avocados (Pack of 4)", 
      category: "produce", 
      price: 5.99, 
      oldPrice: 7.99, 
      badge: "Harvested Today", 
      image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=800", 
      description: "Hand-picked, perfectly ripe organic Hass avocados loaded with healthy fats and creamy texture, sourced directly from regenerative orchards.",
      origin: "Michoacán Valleys, MX",
      stock: 45
    },
    { 
      id: "prod-2", 
      name: "Artisanal Sourdough Country Loaf", 
      category: "bakery", 
      price: 4.50, 
      oldPrice: 5.50, 
      badge: "Baked Hourly", 
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800", 
      description: "Naturally fermented for 36 hours with wild stone-ground sourdough starter, featuring a crisp caramelized crust and an airy crumb.",
      origin: "Parisian Artisan Mill, FR",
      stock: 20
    },
    { 
      id: "prod-3", 
      name: "Grass-Fed Whole Organic Milk (1L)", 
      category: "dairy", 
      price: 2.89, 
      oldPrice: 3.49, 
      badge: "Pasture Raised", 
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=800", 
      description: "Sourced from heritage cows roaming free on certified organic green valleys with zero synthetic hormones.",
      origin: "Normandy Pastures, FR",
      stock: 60
    },
    { 
      id: "prod-4", 
      name: "Wild-Caught Atlantic Salmon Fillet", 
      category: "seafood", 
      price: 12.99, 
      oldPrice: 15.99, 
      badge: "Sustainable", 
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800", 
      description: "Premium omega-3 rich salmon fillets, sustainable hook-and-line caught and flash-frozen at sea within 4 hours.",
      origin: "Lofoten Archipelago, NO",
      stock: 15
    },
    { 
      id: "prod-5", 
      name: "Heirloom Rainbow Baby Carrots", 
      category: "produce", 
      price: 3.49, 
      oldPrice: 4.29, 
      badge: "Regenerative", 
      image: "https://images.unsplash.com/photo-1447175008436-054170c2e979?auto=format&fit=crop&q=80&w=800", 
      description: "Crunchy, sweet heirloom variety carrots harvested at peak sweetness across purple, yellow, and orange colorways.",
      origin: "Loire Valley Organic Farms, FR",
      stock: 30
    },
    { 
      id: "prod-6", 
      name: "Single-Origin Peruvian Dark Chocolate", 
      category: "pantry", 
      price: 6.50, 
      oldPrice: 7.99, 
      badge: "Fair Trade", 
      image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&q=80&w=800", 
      description: "72% cacao single-origin dark chocolate bar crafted with unrefined coconut blossom sugar and subtle notes of wild berries.",
      origin: "Piura Valley, PE",
      stock: 50
    },
    { 
      id: "prod-7", 
      name: "Organic Greek Feta Cheese Block", 
      category: "dairy", 
      price: 5.20, 
      oldPrice: 6.50, 
      badge: "Protected Origin", 
      image: "https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&q=80&w=800", 
      description: "Authentic sheep and goat milk feta cured in traditional wooden brine barrels for a sharp, tangy finish.",
      origin: "Thessaly Mountains, GR",
      stock: 25
    },
    { 
      id: "prod-8", 
      name: "Fresh Atlantic Sea Scallops (250g)", 
      category: "seafood", 
      price: 16.50, 
      oldPrice: 19.99, 
      badge: "Diver Caught", 
      image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&q=80&w=800", 
      description: "Sweet, buttery diver-caught sea scallops with a delicate oceanic aroma and immaculate tender texture.",
      origin: "Brittany Coast, FR",
      stock: 12
    },
    { 
      id: "prod-9", 
      name: "Stone-Ground Organic Rolled Oats", 
      category: "pantry", 
      price: 4.10, 
      oldPrice: 4.99, 
      badge: "Whole Grain", 
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800", 
      description: "Slow-kilned whole grain oats rich in beta-glucan soluble fiber for wholesome morning nourishment.",
      origin: "Highland Farms, SCT",
      stock: 40
    }
  ],
  blogPosts: [
    { 
      slug: "cold-chain-logistics", 
      title: "The 15-Minute Cold-Chain Logistics Revolution", 
      category: "Supply Chain", 
      date: "August 2026", 
      readTime: "5 Min Read",
      excerpt: "How decentralized micro-fulfillment hubs ensure zero thermal fluctuation during transit.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
    },
    { 
      slug: "ancient-grains-nutrition", 
      title: "Nutritional Integrity in Ancient Grain Sourdoughs", 
      category: "Bakery", 
      date: "July 2026", 
      readTime: "4 Min Read",
      excerpt: "Deep dive into wild yeast fermentation and bioavailability of mineral nutrients.",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800"
    },
    { 
      slug: "regenerative-soil-health", 
      title: "Regenerative Agriculture: Restoring Soil Microbiomes", 
      category: "Agriculture", 
      date: "June 2026", 
      readTime: "6 Min Read",
      excerpt: "Examining how cover cropping and no-till cultivation increase crop density and lock carbon back into local farm earth.",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=800"
    },
    { 
      slug: "iot-sensor-telemetry", 
      title: "Deploying Real-Time IoT Sensors for Perishables", 
      category: "Technology", 
      date: "May 2026", 
      readTime: "4 Min Read",
      excerpt: "A technical overview of BLE temperature logging hardware used across our electric refrigerated transport fleet.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
    },
    { 
      slug: "ethical-dairy-farming", 
      title: "Pasture-Raised Heritage: The Future of Ethical Dairy", 
      category: "Dairy", 
      date: "April 2026", 
      readTime: "5 Min Read",
      excerpt: "Why grass-fed heritage cows roaming free on organic green pastures yield higher omega-3 fatty acid profiles.",
      image: "https://imgs.search.brave.com/LVmbBSPxnarPfu9YwiMmVkuR8LqOMbdvMMUatr88Fn4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDEyOTE4/OTEwLmpwZw"
    },
    { 
      slug: "sustainable-seafood-catch", 
      title: "Hook-and-Line vs Trawling: Sustainable Seafood Standards", 
      category: "Seafood", 
      date: "March 2026", 
      readTime: "3 Min Read",
      excerpt: "Protecting marine ecosystems and deep-sea coral reefs through strict hook-and-line fishing cooperatives.",
      image: "https://imgs.search.brave.com/_A3Jzrj45BzONQMn_xNBn6QrtcWnub9Ky_QHKqt9ci8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXM0LmFscGhhY29k/ZXJzLmNvbS84MzQv/dGh1bWJiaWctODM0/Njg5LndlYnA"
    }
  ],
  getCart() { return JSON.parse(localStorage.getItem('freshcart_cart')) || []; },
  saveCart(cart) {
    localStorage.setItem('freshcart_cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));
  },
  addToCart(productId, qty = 1) {
    const cart = this.getCart();
    const existing = cart.find(item => item.id === productId);
    if (existing) { existing.qty += qty; } else { cart.push({ id: productId, qty }); }
    this.saveCart(cart);
    window.FreshCartUI.showToast("Item securely added to your shopping bag.");
  }
};

window.FreshCartUI = {
  showToast(message) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'fixed bottom-8 right-8 z-50 flex flex-col gap-3 pointer-events-none';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'pointer-events-auto bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-6 py-3.5 rounded-2xl text-xs font-mono uppercase tracking-widest shadow-2xl transform translate-y-4 opacity-0 transition-all duration-300 flex items-center gap-3 border border-white/10 dark:border-black/10 backdrop-blur-xl';
    toast.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>${message}`;
    container.appendChild(toast);
    setTimeout(() => { toast.classList.remove('translate-y-4', 'opacity-0'); }, 10);
    setTimeout(() => {
      toast.classList.add('translate-y-4', 'opacity-0');
      setTimeout(() => toast.remove(), 400);
    }, 3500);
  }
};