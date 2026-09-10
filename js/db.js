// js/db.js
window.FreshCartDB = {
  products: [
    {
      id: "prod-1",
      name: "Fresh Farm Tomatoes (1 kg)",
      category: "produce",
      price: 45.00,
      oldPrice: 55.00,
      badge: "Locally Sourced",
      image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=800",
      description: "Plump, juicy, and farm-fresh tomatoes harvested at peak ripeness, perfect for curries, salads, and gravies.",
      origin: "Local Farm Co-op, IN",
      stock: 50
    },
    {
      id: "prod-2",
      name: "Amul Butter - Pasteurized (500g)",
      category: "dairy",
      price: 275.00,
      oldPrice: 285.00,
      badge: "Best Seller",
      image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=80&w=800",
      description: "Classic rich, creamy butter made from pure milk fat, ideal for spreading on warm toast or cooking.",
      origin: "Anand, GJ, IN",
      stock: 40
    },
    {
      id: "prod-3",
      name: "India Gate Basmati Rice - (5 kg)",
      category: "pantry",
      price: 399.00,
      oldPrice: 480.00,
      badge: "Aged Rice",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800",
      description: "Naturally aged premium basmati rice grains that elongate perfectly and offer an aromatic, non-sticky texture.",
      origin: "Haryana, IN",
      stock: 30
    },
    {
      id: "prod-4",
      name: "Aashirvaad Shudh Chakki Atta (10 kg)",
      category: "pantry",
      price: 420.00,
      oldPrice: 450.00,
      badge: "100% Whole Wheat",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=800",
      description: "Traditional stone-ground whole wheat flour that locks in natural dietary fibers and nutrients for soft rotis.",
      origin: "Madhya Pradesh, IN",
      stock: 25
    },
    {
      id: "prod-5",
      name: "Tata Salt - Vacuum Evaporated Iodized (1 kg)",
      category: "pantry",
      price: 28.00,
      oldPrice: 30.00,
      badge: "Essential",
      image: "https://imgs.search.brave.com/cYc3YEP4JXUG8Ko4c-MUWqGMiu1nlFz-aDnnwrNh3E8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzgwMC8xMDcwL3hp/ZjBxL3NhbHQvNS9j/L2UvLWVucmljaGVk/LXRyYW5zcGFyZW50/LW9yaWdpbmFsLWlt/YWduOXJhaHRkZHhw/dXQucG5nP3E9ODA",
      description: "Clean, vacuum-evaporated iodized salt ensuring uniform crystal consistency and daily health support.",
      origin: "Mumbai, MH, IN",
      stock: 100
    },
    {
      id: "prod-6",
      name: "Fresh Cavendish yellow Bananas (6 pcs)",
      category: "produce",
      price: 40.00,
      oldPrice: 50.00,
      badge: "Naturally Ripened",
      image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&q=80&w=800",
      description: "Sweet, energy-boosting sweet bananas packed with potassium and natural dietary fiber.",
      origin: "Tamil Nadu, IN",
      stock: 60
    },
    {
      id: "prod-7",
      name: "Fortune Sunlite Sunflower Oil (1 Litre Pouch)",
      category: "pantry",
      price: 135.00,
      oldPrice: 150.00,
      badge: "Light & Healthy",
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=800",
      description: "Light, cholesterol-free cooking oil enriched with vitamins A and D, perfect for daily Indian cooking.",
      origin: "Ahmedabad, GJ, IN",
      stock: 45
    },
    {
      id: "prod-8",
      name: "Toor Dal / Split Yellow Pigeon Peas (1 kg)",
      category: "pantry",
      price: 145.00,
      oldPrice: 160.00,
      badge: "High Protein",
      image: "https://imgs.search.brave.com/I_mJ5-fs71E0s13BzNdfT7QQKv0479JgMAoyED-DS9U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2VyaW91c2VhdHMu/Y29tL3RobWIveVNv/OE84WUF6bGgxeUNC/MlRxamhKdk4tUk9Z/PS8xNTAweDAvZmls/dGVyczpub191cHNj/YWxlKCk6bWF4X2J5/dGVzKDE1MDAwMCk6/c3RyaXBfaWNjKCkv/MjAyNDEwMjgtVG9v/ckRhbC1LYW5pa2Fh/bmRKYXRpblNoYXJt/YS1zdGVwMS05NTQz/NDNhNThlZTU0Mjg3/YmY2NTkxMjI2MjVi/MGFjMS5qcGc",
      description: "Cleaned, high-protein split yellow lentils that cook down to a rich consistency for wholesome dal dishes.",
      origin: "Karnataka, IN",
      stock: 35
    },
    {
      id: "prod-9",
      name: "Cadbury Dairy Milk Chocolate Bar (110g)",
      category: "snacks",
      price: 99.00,
      oldPrice: 110.00,
      badge: "Sweet Treat",
      image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&q=80&w=800",
      description: "Classic smooth and creamy milk chocolate bar offering a rich melt-in-the-mouth experience.",
      origin: "Mumbai, MH, IN",
      stock: 75
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
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
        content: `
          <p>In modern metropolitan grocery distribution, maintaining strict thermal integrity from farm gate to consumer doorstep represents one of the most complex logistical challenges in supply chain engineering. Traditional wholesale pathways often suffer from multi-tiered transit delays.</p>
          <h2>The 15-Minute Micro-Fulfillment Paradigm</h2>
          <p>By decentralizing inventory into neighborhood micro-fulfillment outposts equipped with IoT telemetry sensors, operators eliminate long-haul transit bottlenecks. Electric delivery vans ensure items never deviate outside strict 2.4°C thresholds.</p>
          <div class="highlight-box">
            <h4>Key Insight</h4>
            <p class="!mb-0">Automated real-time telemetry protocols form the mandatory backbone of all elite direct-to-table supermarket networks.</p>
          </div>
          <h3>Optimizing Fleet Telemetry</h3>
          <p>Our autonomous routing algorithms dynamically adjust delivery paths based on live traffic congestion and micro-climate forecasts, ensuring peak freshness upon arrival.</p>
        `
      },
      {
        slug: "ancient-grains-nutrition",
        title: "Nutritional Integrity in Ancient Grain Sourdoughs",
        category: "Bakery",
        date: "July 2026",
        readTime: "4 Min Read",
        excerpt: "Deep dive into wild yeast fermentation and bioavailability of mineral nutrients.",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800",
        content: `
          <p>Ancient grains such as spelt, emmer, and einkorn possess complex gluten matrices and rich mineral profiles that are systematically degraded by commercial rapid-yeast processing.</p>
          <h2>Wild Yeast Bioavailability</h2>
          <p>Through a 36-hour wild fermentation cycle, naturally occurring lactobacilli break down phytic acid. This process unlocks crucial bioavailable iron, zinc, and magnesium.</p>
          <div class="highlight-box">
            <h4>Baker's Note</h4>
            <p class="!mb-0">Long fermentation sourdoughs offer significantly lower glycemic indices compared to conventional industrial sandwich loaves.</p>
          </div>
          <h3>The Stone-Milling Advantage</h3>
          <p>Traditional slow stone-milling prevents the wheat germ from overheating, preserving essential Vitamin E and natural essential fatty acids.</p>
        `
      },
      {
        slug: "regenerative-soil-health",
        title: "Regenerative Agriculture: Restoring Soil Microbiomes",
        category: "Agriculture",
        date: "June 2026",
        readTime: "6 Min Read",
        excerpt: "Examining how cover cropping and no-till cultivation increase crop density and lock carbon back into local farm earth.",
        image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=800",
        content: `
          <p>Industrial monoculture farming has steadily depleted topsoil organic matter over the past century. Regenerative agriculture flips this trajectory by restoring subterranean fungal networks.</p>
          <h2>No-Till Cultivation Mechanics</h2>
          <p>By avoiding mechanical tilling, soil aggregates remain intact, trapping atmospheric carbon dioxide securely within the root systems of cover crops like crimson clover and daikon radish.</p>
          <div class="highlight-box">
            <h4>Ecological Impact</h4>
            <p class="!mb-0">Farms utilizing diversified cover cropping show a 300% increase in earthworm populations and vastly superior drought resilience.</p>
          </div>
          <h3>Mycorrhizal Symbiosis</h3>
          <p>Healthy soil microbiomes facilitate direct nutrient exchange between plant roots and beneficial fungi, yielding produce with exceptional phytonutrient density.</p>
        `
      },
      {
        slug: "iot-sensor-telemetry",
        title: "Deploying Real-Time IoT Sensors for Perishables",
        category: "Technology",
        date: "May 2026",
        readTime: "4 Min Read",
        excerpt: "A technical overview of BLE temperature logging hardware used across our electric refrigerated transport fleet.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
        content: `
          <p>Visibility is everything when moving ultra-fresh seafood and dairy provisions. Our custom-engineered BLE telemetry tags transmit live micro-climate metrics every 30 seconds.</p>
          <h2>Sub-Zero Precision Hardware</h2>
          <p>Encased in food-grade silicone pods, these sensors track shock, humidity, and temperature variance with sub-0.1°C accuracy directly tied to automated cloud dispatch triggers.</p>
          <div class="highlight-box">
            <h4>Engineering Specs</h4>
            <p class="!mb-0">Powered by ultra-low-power Bluetooth 5.2 chipsets rated for 5 years of continuous battery life across cryogenic storage environments.</p>
          </div>
          <h3>Automated Compliance Reporting</h3>
          <p>All temperature logs are cryptographically hashed and stored on immutable ledgers, providing instant audit compliance for health and safety standards.</p>
        `
      },
      {
        slug: "ethical-dairy-farming",
        title: "Pasture-Raised Heritage: The Future of Ethical Dairy",
        category: "Dairy",
        date: "April 2026",
        readTime: "5 Min Read",
        excerpt: "Why grass-fed heritage cows roaming free on organic green pastures yield higher omega-3 fatty acid profiles.",
        image: "https://imgs.search.brave.com/LVmbBSPxnarPfu9YwiMmVkuR8LqOMbdvMMUatr88Fn4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDEyOTE4/OTEwLmpwZw",
        content: `
          <p>Heritage dairy breeds raised on multi-species perennial pastures produce milk with dramatically enhanced nutritional profiles compared to confinement-system cattle.</p>
          <h2>The Omega-3 Advantage</h2>
          <p>Fresh forage rich in clover and alfalfa directly increases conjugated linoleic acid (CLA) and omega-3 concentrations in whole milk fats.</p>
          <div class="highlight-box">
            <h4>Animal Welfare Standard</h4>
            <p class="!mb-0">Our partner herds experience zero confinement housing, roaming freely across rotational pastures under certified humane guidelines.</p>
          </div>
          <h3>Traditional Barrel Curing</h3>
          <p>Our artisan cheeses are aged in traditional wooden brine barrels, encouraging wild microflora growth that imparts a signature sharp, complex finish.</p>
        `
      },
      {
        slug: "sustainable-seafood-catch",
        title: "Hook-and-Line vs Trawling: Sustainable Seafood Standards",
        category: "Seafood",
        date: "March 2026",
        readTime: "3 Min Read",
        excerpt: "Protecting marine ecosystems and deep-sea coral reefs through strict hook-and-line fishing cooperatives.",
        image: "https://imgs.search.brave.com/_A3Jzrj45BzONQMn_xNBn6QrtcWnub9Ky_QHKqt9ci8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXM0LmFscGhhY29k/ZXJzLmNvbS84MzQv/dGh1bWJiaWctODM0/Njg5LndlYnA",
        content: `
          <p>Industrial bottom trawling leaves a trail of ecological destruction across fragile benthic habitats. In contrast, artisanal hook-and-line cooperatives target specific pelagic species selectively.</p>
          <h2>Preserving Marine Biodiversity</h2>
          <p>By working exclusively with certified coastal day-boats, we ensure zero destructive bycatch and preserve ocean habitats for generations to come.</p>
          <div class="highlight-box">
            <h4>Catch-to-Cold Timelines</h4>
            <p class="!mb-0">Fishes are flash-frozen at sea within 4 hours of landing, locking in immaculate cellular texture and delicate oceanic aroma.</p>
          </div>
          <h3>Traceability Protocols</h3>
          <p>Scan any seafood package label to view the exact vessel, captain name, and GPS coordinates of where your dinner was sustainably harvested.</p>
        `
    },
    {
          slug: "autonomous-delivery-drones",
          title: "Autonomous Delivery Drones in Urban Micro-Fleets",
          category: "Technology",
          date: "September 2026",
          readTime: "4 Min Read",
          excerpt: "Integrating electric aerial delivery pods for instant rural and suburban rooftop drop-offs.",
          image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&q=80&w=800",
          content: `
            <p>As airspace regulations evolve and battery energy densities improve, autonomous aerial drones are transforming the final mile of grocery distribution, enabling sub-10-minute deliveries to suburban and rural households.</p>
            <h2>Precision Rooftop Docking</h2>
            <p>Using RTK-GPS guidance and computer vision landing arrays, our autonomous pods secure precision placement on designated home delivery pads within centimeter-level accuracy.</p>
            <div class="highlight-box">
              <h4>Future Outlook</h4>
              <p class="!mb-0">Aerial micro-fleets reduce carbon emissions by 84% compared to traditional combustion-engine delivery vehicles on low-density routes.</p>
            </div>
          `
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
