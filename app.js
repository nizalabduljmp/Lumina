/* ==========================================================================
   LOLO LMT - Trendy & Colorful Mobile Accessories Storefront
   Full State Engine, Interactive Shopping Flow, rupee formatting, coupons & admin
   ========================================================================== */

// --- SAMPLE INITIAL PRODUCTS DATA (Priced ₹99 to ₹499) ---
const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: "Premium Type-C Nylon Braided Cable (1.5m)",
    category: "Charging Cables",
    price: 199,
    oldPrice: 299,
    rating: 4.8,
    reviewsCount: 128,
    badge: "Bestseller",
    badgeType: "bestseller",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1622445268121-ac11f17a2834?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Ultra-durable 3A fast charging Type-C cable with reinforced aluminum connector joints and tangle-free nylon braiding.",
    specs: {
      "Length": "1.5 Meters",
      "Current Output": "3.0A Fast Charge",
      "Data Sync": "480 Mbps Speed",
      "Warranty": "6 Months Replacement Warranty"
    },
    inStock: true,
    stockCount: 45,
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    isFlashSale: true
  },
  {
    id: 2,
    name: "True Wireless Stereo Earbuds Pro (BassBoost)",
    category: "Earphones & Earbuds",
    price: 399,
    oldPrice: 599,
    rating: 4.9,
    reviewsCount: 210,
    badge: "Hot Deal",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Crystal clear audio with 13mm dynamic drivers, environmental noise cancellation (ENC), 24-hour total playback case, and IPX5 splash resistance.",
    specs: {
      "Playtime": "up to 24 Hours with Case",
      "Bluetooth": "v5.3 Instant Pairing",
      "Water Resistance": "IPX5 Splash & Sweatproof",
      "Latency": "45ms Low Latency Gaming Mode"
    },
    inStock: true,
    stockCount: 30,
    isFeatured: true,
    isNew: true,
    isBestseller: true,
    isFlashSale: true
  },
  {
    id: 3,
    name: "Shockproof Clear Armour Phone Case",
    category: "Phone Cases",
    price: 149,
    oldPrice: 249,
    rating: 4.7,
    reviewsCount: 95,
    badge: "40% OFF",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Military-grade drop protection case with anti-yellowing acrylic back, air-cushioned corners, and raised camera lip bumpers.",
    specs: {
      "Protection": "10ft Drop Tested Armour",
      "Material": "Hybrid TPU & Anti-Yellow Acrylic",
      "Compatibility": "Universal iPhone & Android Models"
    },
    inStock: true,
    stockCount: 60,
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    isFlashSale: false
  },
  {
    id: 4,
    name: "20W Dual Port PD Fast Charger Adapter",
    category: "Chargers",
    price: 299,
    oldPrice: 449,
    rating: 4.8,
    reviewsCount: 175,
    badge: "New",
    badgeType: "new",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Compact Dual-output charger featuring Power Delivery 3.0 Type-C & Quick Charge 3.0 USB-A ports to charge phones 50% in 30 mins.",
    specs: {
      "Power Output": "20W Peak Fast Charge",
      "Ports": "1x USB-C PD + 1x USB-A QC",
      "Safety": "Over-heat & Short Circuit Protection"
    },
    inStock: true,
    stockCount: 25,
    isFeatured: true,
    isNew: true,
    isBestseller: true,
    isFlashSale: true
  },
  {
    id: 5,
    name: "Foldable Ergonomic Mobile Desktop Stand",
    category: "Phone Stands",
    price: 99,
    oldPrice: 149,
    rating: 4.9,
    reviewsCount: 310,
    badge: "Under ₹99",
    badgeType: "deal",
    image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Pocket-sized multi-angle adjustable phone holder stand with non-slip silicone pads for desk study, video calls, and movie watching.",
    specs: {
      "Adjustability": "0° to 120° Dual Angle",
      "Weight": "45g Ultra Lightweight",
      "Material": "ABS Polycarbonate & Anti-Skid Rubber"
    },
    inStock: true,
    stockCount: 80,
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    isFlashSale: false
  },
  {
    id: 6,
    name: "360° Magnetic Car Dashboard Holder",
    category: "Phone Stands",
    price: 199,
    oldPrice: 299,
    rating: 4.6,
    reviewsCount: 88,
    badge: "33% OFF",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Heavy-duty N52 neodymium magnetic phone mount with 3M adhesive gel pad for car dashboards and windshields.",
    specs: {
      "Magnet Strength": "6x N52 Neodymium Magnets",
      "Rotation": "360-Degree Ball Joint",
      "Adhesive": "High-Bond Washable 3M Suction"
    },
    inStock: true,
    stockCount: 35,
    isFeatured: false,
    isNew: false,
    isBestseller: true,
    isFlashSale: false
  },
  {
    id: 7,
    name: "RGB Bass Mobile Gaming Wired Earphones",
    category: "Gaming Accessories",
    price: 499,
    oldPrice: 699,
    rating: 4.9,
    reviewsCount: 142,
    badge: "Gamer Choice",
    badgeType: "bestseller",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80"
    ],
    description: "In-ear gaming earphones featuring dual drivers, detachable HD microphone, L-shaped 3.5mm jack for comfortable hand grip, and RGB breathing light.",
    specs: {
      "Drivers": "10mm Dual Dynamic Drivers",
      "Microphone": "Detachable Boom Mic + Inline Mic",
      "Jack": "Gold-Plated L-Shape 3.5mm Audio Plug"
    },
    inStock: true,
    stockCount: 20,
    isFeatured: true,
    isNew: true,
    isBestseller: true,
    isFlashSale: true
  },
  {
    id: 8,
    name: "3D Holographic Phone Pop Grip & Socket",
    category: "Mobile Gadgets",
    price: 99,
    oldPrice: 149,
    rating: 4.8,
    reviewsCount: 420,
    badge: "Under ₹99",
    badgeType: "deal",
    image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Collapsible expandable pop grip handle socket providing secure one-handed phone hold, texting support, and media kickstand function.",
    specs: {
      "Function": "Grip Holder & Tabletop Stand",
      "Adhesive": "Reusable Washable Gel Pad",
      "Design": "Glossy Holographic Print"
    },
    inStock: true,
    stockCount: 120,
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    isFlashSale: false
  },
  {
    id: 9,
    name: "Super Bass Compact Wireless Bluetooth Speaker",
    category: "Speakers",
    price: 449,
    oldPrice: 649,
    rating: 4.7,
    reviewsCount: 115,
    badge: "Top Rated",
    badgeType: "bestseller",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Pocket-sized 5W portable Bluetooth speaker with passive radiator bass diaphragm, TF card slot, and built-in lanyard strap.",
    specs: {
      "Battery": "1200mAh (up to 8 hours music playback)",
      "Output": "5W HD Loud Bass",
      "Wireless Range": "10 Meters Bluetooth 5.0"
    },
    inStock: true,
    stockCount: 18,
    isFeatured: false,
    isNew: true,
    isBestseller: false,
    isFlashSale: true
  },
  {
    id: 10,
    name: "Fast Type-C to Lightning Braided Cable (1m)",
    category: "Charging Cables",
    price: 249,
    oldPrice: 349,
    rating: 4.8,
    reviewsCount: 64,
    badge: "Sale",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1609692814858-f7cd2f0afd1f?auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1609692814858-f7cd2f0afd1f?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Apple MFi certified chipset fast charging cable supporting 20W Power Delivery for iPhone 11/12/13/14 models.",
    specs: {
      "Length": "1 Meter",
      "Connector": "USB-C to Lightning",
      "Material": "Double Braided Nylon Thread"
    },
    inStock: true,
    stockCount: 32,
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    isFlashSale: false
  },
  {
    id: 11,
    name: "Sweatproof Gaming Finger Sleeves (Set of 4)",
    category: "Gaming Accessories",
    price: 129,
    oldPrice: 199,
    rating: 4.9,
    reviewsCount: 190,
    badge: "Under ₹199",
    badgeType: "deal",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Ultra-thin carbon fiber conductive touchscreen finger sleeves designed for zero friction BGMI, Free Fire, and COD Mobile gameplay.",
    specs: {
      "Material": "Carbon Fiber & Conductive Spandex",
      "Pack": "4 Finger Sleeves Included",
      "Thickness": "0.3mm Ultra Breathable"
    },
    inStock: true,
    stockCount: 90,
    isFeatured: false,
    isNew: true,
    isBestseller: true,
    isFlashSale: false
  },
  {
    id: 12,
    name: "Multipurpose Cleaning Kit & Phone Stand",
    category: "Mobile Gadgets",
    price: 199,
    oldPrice: 299,
    rating: 4.7,
    reviewsCount: 74,
    badge: "Sale",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=800&q=80"
    ],
    description: "7-in-1 mobile & earbuds cleaning pen brush tool with keycap puller, screen spray mist bottle, and phone stand base.",
    specs: {
      "Tools": "Earbud Brush, Microfiber Sponge, Screen Spray, Key Puller",
      "Compactness": "All-in-one Cylindrical Case"
    },
    inStock: true,
    stockCount: 40,
    isFeatured: false,
    isNew: false,
    isBestseller: false,
    isFlashSale: false
  }
];

const INITIAL_REVIEWS = [
  { id: 1, name: "Aarav Sharma", avatar: "A", rating: 5, date: "Yesterday", text: "Really good quality for the price! The Shockproof case fits my phone perfectly and looks super stylish." },
  { id: 2, name: "Priya Patel", avatar: "P", rating: 5, date: "3 days ago", text: "Fast delivery and affordable mobile accessories. The TWS earbuds sound amazingly punchy for ₹399!" },
  { id: 3, name: "Rohan Verma", avatar: "R", rating: 5, date: "1 week ago", text: "LOLO LMT has some really cool mobile gadgets! Got the mobile stand for ₹99 and it's extremely sturdy." }
];

const INITIAL_FAQS = [
  { q: "What is the price range of products on LOLO LMT?", a: "Everything on LOLO LMT is super affordable, priced strictly between ₹99 and ₹499 without sacrificing style or quality!" },
  { q: "How fast is delivery across India?", a: "We ship all orders within 24 hours. Delivery typically takes 2-4 business days for major metro cities and 4-6 days for rest of India." },
  { q: "What payment options are available?", a: "We support UPI (Google Pay, PhonePe, Paytm), Credit & Debit Cards, Net Banking, and Cash on Delivery (COD)." },
  { q: "Is there free shipping on orders?", a: "Yes! All orders above ₹499 qualify for FREE Standard Delivery across India." },
  { q: "What is your return & replacement policy?", a: "We provide an easy 7-day hassle-free replacement policy if you receive a damaged or defective item." }
];

// --- APP STATE CONTAINER ---
class AppState {
  constructor() {
    this.products = JSON.parse(localStorage.getItem('lolo_products')) || INITIAL_PRODUCTS;
    this.cart = JSON.parse(localStorage.getItem('lolo_cart')) || [];
    this.wishlist = JSON.parse(localStorage.getItem('lolo_wishlist')) || [];
    this.orders = JSON.parse(localStorage.getItem('lolo_orders')) || [
      { id: "LOLO-9821", customer: "Aarav Sharma", phone: "9876543210", address: "Block B, Connaught Place, New Delhi - 110001", date: "2026-09-27", itemsCount: 2, subtotal: 498, shipping: 0, total: 498, status: "Delivered", paymentMethod: "UPI (Google Pay)" },
      { id: "LOLO-9822", customer: "Priya Patel", phone: "9812345678", address: "MG Road, Indiranagar, Bengaluru, Karnataka - 560038", date: "2026-09-28", itemsCount: 1, subtotal: 399, shipping: 49, total: 448, status: "Processing", paymentMethod: "Cash on Delivery" }
    ];
    this.appliedCoupon = JSON.parse(localStorage.getItem('lolo_coupon')) || null;
    
    // Page state
    this.currentPage = 'home'; // home, shop, product, cart, checkout, confirmation, offers, wishlist, about, contact, admin
    this.selectedProductId = 1;
    this.searchQuery = '';
    this.selectedCategory = 'All';
    this.priceRangeFilter = 'All'; // All, under99, 99-199, 199-299, 299-399, 399-499
    this.selectedRating = 0;
    this.sortBy = 'popular'; // popular, newest, low-high, high-low, rating
    this.offersTierFilter = 'all'; // all, under99, under199, under299, under499
    
    this.mobileMenuOpen = false;
    this.accountModalOpen = false;
    this.adminTab = 'products'; // products, orders, stats
    this.lastOrder = null;
  }

  save() {
    localStorage.setItem('lolo_products', JSON.stringify(this.products));
    localStorage.setItem('lolo_cart', JSON.stringify(this.cart));
    localStorage.setItem('lolo_wishlist', JSON.stringify(this.wishlist));
    localStorage.setItem('lolo_orders', JSON.stringify(this.orders));
    localStorage.setItem('lolo_coupon', JSON.stringify(this.appliedCoupon));
  }

  addToCart(productId, qty = 1) {
    const existing = this.cart.find(item => item.id === productId);
    if (existing) {
      existing.quantity += qty;
    } else {
      const prod = this.products.find(p => p.id === productId);
      if (prod) {
        this.cart.push({ ...prod, quantity: qty });
      }
    }
    this.save();
    showToast("Added to your cart! 🛒");
  }

  removeFromCart(productId) {
    this.cart = this.cart.filter(item => item.id !== productId);
    this.save();
    showToast("Item removed from cart");
  }

  updateQuantity(productId, qty) {
    const item = this.cart.find(i => i.id === productId);
    if (item) {
      item.quantity = Math.max(1, qty);
      this.save();
    }
  }

  toggleWishlist(productId) {
    const index = this.wishlist.indexOf(productId);
    if (index > -1) {
      this.wishlist.splice(index, 1);
      showToast("Removed from Wishlist");
    } else {
      this.wishlist.push(productId);
      showToast("Saved to Wishlist! ❤️");
    }
    this.save();
  }

  applyCoupon(code) {
    const clean = code.trim().toUpperCase();
    if (clean === 'LOLO10') {
      this.appliedCoupon = { code: 'LOLO10', type: 'percent', value: 10 };
      this.save();
      showToast("10% Coupon LOLO10 Applied! 🎉");
      return true;
    } else if (clean === 'WELCOME50') {
      const sub = this.cart.reduce((a, i) => a + i.price * i.quantity, 0);
      if (sub < 299) {
        showToast("WELCOME50 requires min order of ₹299", "error");
        return false;
      }
      this.appliedCoupon = { code: 'WELCOME50', type: 'flat', value: 50 };
      this.save();
      showToast("₹50 Flat OFF Applied! 💥");
      return true;
    } else {
      showToast("Invalid coupon code. Try 'LOLO10' or 'WELCOME50'", "error");
      return false;
    }
  }

  removeCoupon() {
    this.appliedCoupon = null;
    this.save();
    showToast("Coupon removed");
  }

  getCartTotals(shippingFeeOverride = null) {
    const subtotal = this.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    
    // Tier discount check (Buy 2 -> 5%, Buy 3 -> 10%, Buy 5+ -> 15%)
    const totalQty = this.cart.reduce((a, i) => a + i.quantity, 0);
    let tierDiscountPercent = 0;
    if (totalQty >= 5) tierDiscountPercent = 15;
    else if (totalQty >= 3) tierDiscountPercent = 10;
    else if (totalQty >= 2) tierDiscountPercent = 5;

    const tierDiscount = subtotal * (tierDiscountPercent / 100);

    let couponDiscount = 0;
    if (this.appliedCoupon) {
      if (this.appliedCoupon.type === 'percent') {
        couponDiscount = (subtotal - tierDiscount) * (this.appliedCoupon.value / 100);
      } else if (this.appliedCoupon.type === 'flat') {
        couponDiscount = this.appliedCoupon.value;
      }
    }

    const totalDiscount = tierDiscount + couponDiscount;

    let shipping = 0;
    if (subtotal > 0) {
      if (shippingFeeOverride !== null) {
        shipping = shippingFeeOverride;
      } else {
        shipping = subtotal >= 499 ? 0 : 49;
      }
    }

    const total = Math.max(0, subtotal - totalDiscount + shipping);
    return { subtotal, tierDiscountPercent, totalDiscount, shipping, total };
  }

  placeOrder(customerData) {
    const shippingFee = customerData.deliveryMethod === 'express' ? 99 : (this.getCartTotals().subtotal >= 499 ? 0 : 49);
    const totals = this.getCartTotals(shippingFee);

    const newOrder = {
      id: "LOLO-" + Math.floor(1000 + Math.random() * 9000),
      customer: customerData.fullName,
      phone: customerData.phone,
      email: customerData.email || 'customer@lolo.in',
      address: `${customerData.address}, ${customerData.city}, ${customerData.state} - ${customerData.pin}`,
      date: new Date().toISOString().split('T')[0],
      items: [...this.cart],
      itemsCount: this.cart.reduce((acc, item) => acc + item.quantity, 0),
      subtotal: totals.subtotal,
      discount: totals.totalDiscount,
      shipping: totals.shipping,
      total: totals.total,
      paymentMethod: customerData.payment === 'upi' ? 'UPI (GPay/PhonePe)' : (customerData.payment === 'card' ? 'Credit/Debit Card' : 'Cash on Delivery (COD)'),
      status: "Processing"
    };

    this.orders.unshift(newOrder);
    this.lastOrder = newOrder;
    this.cart = [];
    this.appliedCoupon = null;
    this.save();
  }
}

const state = new AppState();

// --- HELPER UTILITIES ---
function formatRupee(amount) {
  return `₹${Math.round(amount || 0)}`;
}

function renderStars(rating) {
  const fullStars = Math.floor(rating);
  let starsHtml = '';
  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      starsHtml += `<i data-lucide="star" style="fill: var(--yellow-accent); color: var(--yellow-accent); width: 14px; height: 14px;"></i>`;
    } else {
      starsHtml += `<i data-lucide="star" style="color: #CBD5E1; width: 14px; height: 14px;"></i>`;
    }
  }
  return `<span class="stars">${starsHtml}</span>`;
}

function showToast(message, type = "success") {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type === 'error' ? 'toast-error' : ''}`;
  toast.innerHTML = `
    <i data-lucide="${type === 'success' ? 'check-circle' : 'alert-circle'}" class="toast-icon"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  lucide.createIcons();

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

function navigateTo(page, paramId = null) {
  state.currentPage = page;
  if (paramId) state.selectedProductId = paramId;
  state.mobileMenuOpen = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderApp();
}

// --- HEADER & NAVIGATION ---
function renderHeader() {
  const cartCount = state.cart.reduce((acc, item) => acc + item.quantity, 0);
  const wishlistCount = state.wishlist.length;

  return `
    <div class="announcement-bar">
      ⚡ <span>LOLO FESTIVAL SALE:</span> Flat ₹50 OFF with code <strong>WELCOME50</strong> + Free Shipping over ₹499! 🚀
    </div>
    <header class="site-header">
      <div class="container nav-wrapper">
        <button class="mobile-menu-toggle icon-btn" onclick="state.mobileMenuOpen = !state.mobileMenuOpen; renderApp();">
          <i data-lucide="${state.mobileMenuOpen ? 'x' : 'menu'}"></i>
        </button>

        <a href="#" onclick="navigateTo('home'); return false;" class="logo">
          LOLO <span class="logo-badge">LMT</span>
        </a>

        <div class="search-bar-container">
          <i data-lucide="search" class="search-icon"></i>
          <input 
            type="text" 
            class="search-input" 
            placeholder="Search cables, earbuds, cases, pop grips..." 
            value="${state.searchQuery}"
            oninput="state.searchQuery = this.value;"
            onkeydown="if(event.key === 'Enter'){ navigateTo('shop'); }"
          />
        </div>

        <nav>
          <ul class="nav-links">
            <li><a href="#" class="nav-link ${state.currentPage === 'home' ? 'active' : ''}" onclick="navigateTo('home'); return false;">Home</a></li>
            <li><a href="#" class="nav-link ${state.currentPage === 'shop' ? 'active' : ''}" onclick="navigateTo('shop'); return false;">Shop</a></li>
            <li><a href="#" class="nav-link offers-link ${state.currentPage === 'offers' ? 'active' : ''}" onclick="navigateTo('offers'); return false;">🔥 Offers</a></li>
            <li><a href="#" class="nav-link ${state.currentPage === 'about' ? 'active' : ''}" onclick="navigateTo('about'); return false;">About</a></li>
            <li><a href="#" class="nav-link ${state.currentPage === 'contact' ? 'active' : ''}" onclick="navigateTo('contact'); return false;">Contact</a></li>
          </ul>
        </nav>

        <div class="header-actions">
          <button class="icon-btn" title="Search" onclick="navigateTo('shop');">
            <i data-lucide="search"></i>
          </button>
          
          <button class="icon-btn" title="Account" onclick="toggleAccountModal();">
            <i data-lucide="user"></i>
          </button>

          <button class="icon-btn" title="Wishlist" onclick="navigateTo('wishlist');">
            <i data-lucide="heart"></i>
            ${wishlistCount > 0 ? `<span class="badge">${wishlistCount}</span>` : ''}
          </button>

          <button class="icon-btn" title="Shopping Cart" onclick="navigateTo('cart');">
            <i data-lucide="shopping-bag"></i>
            ${cartCount > 0 ? `<span class="badge">${cartCount}</span>` : ''}
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Drawer Overlay -->
    <div class="mobile-drawer ${state.mobileMenuOpen ? 'active' : ''}">
      <div class="mobile-backdrop" onclick="state.mobileMenuOpen = false; renderApp();"></div>
      <div class="mobile-panel">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
          <a href="#" class="logo">LOLO <span class="logo-badge">LMT</span></a>
          <button class="icon-btn" onclick="state.mobileMenuOpen = false; renderApp();"><i data-lucide="x"></i></button>
        </div>

        <div style="margin-bottom: 1.25rem;">
          <input 
            type="text" 
            class="search-input" 
            placeholder="Search mobile accessories..." 
            value="${state.searchQuery}"
            oninput="state.searchQuery = this.value;"
            onkeydown="if(event.key === 'Enter'){ state.mobileMenuOpen = false; navigateTo('shop'); }"
          />
        </div>

        <ul class="filter-list" style="gap: 0.85rem; font-size: 1rem;">
          <li><a href="#" onclick="navigateTo('home'); return false;">🏠 Home</a></li>
          <li><a href="#" onclick="navigateTo('shop'); return false;">🛍️ Shop All Accessories</a></li>
          <li><a href="#" onclick="navigateTo('offers'); return false;">🔥 Crazy Offers & Deals</a></li>
          <li><a href="#" onclick="navigateTo('wishlist'); return false;">❤️ My Wishlist (${wishlistCount})</a></li>
          <li><a href="#" onclick="navigateTo('cart'); return false;">🛒 Shopping Cart (${cartCount})</a></li>
          <li><a href="#" onclick="navigateTo('about'); return false;">✨ About LOLO LMT</a></li>
          <li><a href="#" onclick="navigateTo('contact'); return false;">💬 Contact & Support</a></li>
          <li><a href="#" onclick="navigateTo('admin'); return false;">⚙️ Store Dashboard</a></li>
        </ul>
      </div>
    </div>
  `;
}

// --- PRODUCT CARD COMPONENT ---
function renderProductCard(product) {
  const isWishlisted = state.wishlist.includes(product.id);
  const discountPercent = product.oldPrice ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : null;

  return `
    <div class="product-card">
      <div class="product-thumb" onclick="navigateTo('product', ${product.id});" style="cursor: pointer;">
        ${product.badge ? `<span class="product-badge ${product.badgeType || 'bestseller'}">${product.badge}</span>` : ''}
        
        <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="event.stopPropagation(); state.toggleWishlist(${product.id}); renderApp();" title="Wishlist item">
          <i data-lucide="heart" style="${isWishlisted ? 'fill: var(--pink); color: var(--pink);' : ''}"></i>
        </button>

        <img src="${product.image}" alt="${product.name}" loading="lazy" />
      </div>

      <div class="product-details">
        <span class="product-category">${product.category}</span>
        <h3 class="product-title" onclick="navigateTo('product', ${product.id});" style="cursor: pointer;" title="${product.name}">${product.name}</h3>
        
        <div class="product-rating">
          ${renderStars(product.rating)}
          <span>(${product.reviewsCount})</span>
        </div>

        <div class="product-price-row">
          <div class="price-group">
            <span class="price">${formatRupee(product.price)}</span>
            ${product.oldPrice ? `<span class="old-price">${formatRupee(product.oldPrice)}</span>` : ''}
            ${discountPercent ? `<span class="discount-tag">${discountPercent}% OFF</span>` : ''}
          </div>
          
          <button class="add-cart-btn" onclick="state.addToCart(${product.id}); renderApp();">
            <i data-lucide="shopping-bag" style="width: 14px;"></i> Add
          </button>
        </div>
      </div>
    </div>
  `;
}

// --- HOME PAGE VIEW ---
function renderHomePage() {
  const bestSellers = state.products.filter(p => p.isBestseller);
  const flashSaleItems = state.products.filter(p => p.isFlashSale);

  const categories = [
    { title: "📱 Phone Cases", desc: "Stylish & shockproof cases", img: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=600&q=80", cat: "Phone Cases" },
    { title: "🔌 Chargers", desc: "Fast PD adapters & docks", img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80", cat: "Chargers" },
    { title: "⚡ Charging Cables", desc: "Type-C, Lightning & Micro USB", img: "https://images.unsplash.com/photo-1622445268121-ac11f17a2834?auto=format&fit=crop&w=600&q=80", cat: "Charging Cables" },
    { title: "🎧 Earphones & Earbuds", desc: "Deep bass TWS & wired audio", img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80", cat: "Earphones & Earbuds" },
    { title: "🎮 Gaming Accessories", desc: "Finger sleeves & gaming gear", img: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80", cat: "Gaming Accessories" },
    { title: "📱 Phone Stands", desc: "Desk & car magnetic holders", img: "https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=600&q=80", cat: "Phone Stands" },
    { title: "🔊 Speakers", desc: "Compact Bluetooth speakers", img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80", cat: "Speakers" },
    { title: "✨ Mobile Gadgets", desc: "Pop grips, cleaners & gear", img: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=600&q=80", cat: "Mobile Gadgets" }
  ];

  return `
    <!-- Hero Banner Section -->
    <section class="hero-section">
      <div class="container hero-grid">
        <div class="hero-content">
          <span class="hero-tag">🔥 India's Coolest Mobile Accessories Store</span>
          <h1>Upgrade Your Mobile. <br/>Upgrade Your Style. 🔥</h1>
          <p>Trendy mobile accessories at prices you'll love — Starting from just ₹99!</p>
          
          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <button class="btn btn-primary btn-lg" onclick="navigateTo('shop');">
              SHOP NOW <i data-lucide="arrow-right"></i>
            </button>
            <button class="btn btn-outline" style="border-color: white; color: white; background: transparent;" onclick="navigateTo('offers');">
              View ₹99 Deals ✨
            </button>
          </div>
        </div>

        <div class="hero-image-wrapper">
          <img src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=1000&q=80" alt="LOLO LMT Mobile Accessories" />
        </div>
      </div>
    </section>

    <div class="container">
      <!-- Special Offer Section -->
      <section class="special-deals-banner">
        <div class="deals-grid">
          <div>
            <span class="deals-badge">LIMITED TIME FESTIVAL OFFER</span>
            <h2 class="deals-title">🔥 CRAZY DEALS STARTING AT ₹99 🔥</h2>
            
            <div class="deals-list">
              <div class="deal-item">⚡ Accessories Starting @ ₹99</div>
              <div class="deal-item">🛍️ Buy 2 & Get Extra 5% OFF</div>
              <div class="deal-item">🎉 Flat 10% OFF Code LOLO10</div>
              <div class="deal-item">🚚 Free Delivery Above ₹499</div>
            </div>

            <button class="btn btn-orange btn-lg" onclick="navigateTo('offers');">
              CLAIM DEALS NOW <i data-lucide="zap"></i>
            </button>
          </div>

          <div class="countdown-box">
            <span style="font-weight: 800; font-size: 0.95rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--yellow-accent);">
              ⏰ Hurry! Offer Ends In:
            </span>
            <div class="timer-units">
              <div class="timer-num">05</div>
              <div class="timer-sep">:</div>
              <div class="timer-num">42</div>
              <div class="timer-sep">:</div>
              <div class="timer-num">18</div>
            </div>
            <span style="font-size: 0.8rem; color: #CBD5E1;">Hours : Minutes : Seconds</span>
          </div>
        </div>
      </section>

      <!-- Category Section -->
      <div class="section-header">
        <div>
          <h2 class="section-title">Explore Categories</h2>
          <p class="section-subtitle">Discover accessories tailored for your smartphone lifestyle</p>
        </div>
      </div>

      <div class="categories-grid">
        ${categories.map(c => `
          <div class="category-card" onclick="state.selectedCategory='${c.cat}'; navigateTo('shop');">
            <img src="${c.img}" alt="${c.title}" />
            <div class="category-overlay">
              <h3>${c.title}</h3>
              <p>${c.desc}</p>
              <span class="btn btn-sm btn-primary" style="align-self: flex-start;">Shop Now →</span>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Best Sellers Section -->
      <div class="section-header">
        <div>
          <h2 class="section-title">🔥 Best Sellers</h2>
          <p class="section-subtitle">Most popular accessories trending this week</p>
        </div>
        <button class="btn btn-outline btn-sm" onclick="navigateTo('shop');">View All <i data-lucide="chevron-right"></i></button>
      </div>

      <div class="product-grid">
        ${bestSellers.map(renderProductCard).join('')}
      </div>

      <!-- Flash Sale Section -->
      <section class="flash-sale-section">
        <div class="flash-header">
          <div>
            <span style="background: rgba(255,255,255,0.25); color: white; padding: 0.25rem 0.75rem; border-radius: 99px; font-weight: 800; font-size: 0.8rem;">LIMITED QUANTITY</span>
            <h2 class="flash-title" style="margin-top: 0.5rem;">FLASH SALE ⚡ – EVERYTHING LESS THAN ₹499!</h2>
          </div>

          <div style="background: rgba(0,0,0,0.2); padding: 0.75rem 1.25rem; border-radius: var(--radius-lg); text-align: center;">
            <div style="font-size: 0.8rem; font-weight: 700;">Hurry! Claim Before Stock Runs Out</div>
            <div class="flash-progress" style="width: 220px;">
              <div class="flash-progress-bar" style="width: 78%;"></div>
            </div>
            <div style="font-size: 0.75rem; font-weight: 800; color: var(--yellow-accent); margin-top: 0.25rem;">🔥 78% SOLD OUT</div>
          </div>
        </div>

        <div class="product-grid" style="margin-bottom: 0;">
          ${flashSaleItems.map(renderProductCard).join('')}
        </div>
      </section>

      <!-- Trust Bar Section -->
      <div class="trust-grid">
        <div class="trust-card">
          <div class="trust-icon">🚚</div>
          <h4>Fast Delivery</h4>
          <p style="font-size: 0.75rem; color: var(--text-muted);">2-4 Business Days</p>
        </div>
        <div class="trust-card">
          <div class="trust-icon">💳</div>
          <h4>Secure Payments</h4>
          <p style="font-size: 0.75rem; color: var(--text-muted);">UPI, Cards & COD</p>
        </div>
        <div class="trust-card">
          <div class="trust-icon">🔄</div>
          <h4>Easy Returns</h4>
          <p style="font-size: 0.75rem; color: var(--text-muted);">7-Day Replacement</p>
        </div>
        <div class="trust-card">
          <div class="trust-icon">⭐</div>
          <h4>Quality Tested</h4>
          <p style="font-size: 0.75rem; color: var(--text-muted);">100% Authentic</p>
        </div>
        <div class="trust-card">
          <div class="trust-icon">💰</div>
          <h4>Affordable Prices</h4>
          <p style="font-size: 0.75rem; color: var(--text-muted);">₹99 – ₹499 Range</p>
        </div>
        <div class="trust-card">
          <div class="trust-icon">📞</div>
          <h4>24/7 Support</h4>
          <p style="font-size: 0.75rem; color: var(--text-muted);">WhatsApp & Call</p>
        </div>
      </div>

      <!-- Customer Reviews -->
      <div class="section-header">
        <div>
          <h2 class="section-title">Happy LOLO Customers ⭐</h2>
          <p class="section-subtitle">Read real reviews from young buyers across India</p>
        </div>
      </div>

      <div class="reviews-grid">
        ${INITIAL_REVIEWS.map(r => `
          <div class="review-card">
            <div class="review-header">
              <div class="review-avatar-initial">${r.avatar}</div>
              <div>
                <div class="review-author">${r.name}</div>
                <div style="font-size: 0.75rem; color: var(--text-light);">${r.date} • Verified Buyer</div>
              </div>
            </div>
            <div style="margin-bottom: 0.75rem;">${renderStars(r.rating)}</div>
            <p class="review-text">"${r.text}"</p>
          </div>
        `).join('')}
      </div>

      <!-- Newsletter -->
      <section class="newsletter-section">
        <div class="newsletter-content">
          <h2>Get LOLO Deals First! 🎁</h2>
          <p>Subscribe to get secret ₹99 drops, flash sale alerts, and exclusive coupon codes.</p>
          
          <form class="newsletter-form" onsubmit="event.preventDefault(); showToast('Subscribed! Use code WELCOME50 for ₹50 OFF'); this.reset();">
            <input type="email" placeholder="Enter your email address..." required />
            <button type="submit" class="btn btn-orange">GET DEALS →</button>
          </form>
        </div>
      </section>
    </div>
  `;
}

// --- SHOP PAGE VIEW ---
function renderShopPage() {
  let filtered = state.products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(state.searchQuery.toLowerCase()) || 
                          p.category.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                          p.description.toLowerCase().includes(state.searchQuery.toLowerCase());
    
    const matchesCat = state.selectedCategory === 'All' || p.category === state.selectedCategory;
    
    // Price filter: All, under99, 99-199, 199-299, 299-399, 399-499
    let matchesPrice = true;
    if (state.priceRangeFilter === 'under99') matchesPrice = p.price <= 99;
    else if (state.priceRangeFilter === '99-199') matchesPrice = p.price >= 99 && p.price <= 199;
    else if (state.priceRangeFilter === '199-299') matchesPrice = p.price >= 199 && p.price <= 299;
    else if (state.priceRangeFilter === '299-399') matchesPrice = p.price >= 299 && p.price <= 399;
    else if (state.priceRangeFilter === '399-499') matchesPrice = p.price >= 399 && p.price <= 499;

    const matchesRating = state.selectedRating === 0 || p.rating >= state.selectedRating;

    return matchesSearch && matchesCat && matchesPrice && matchesRating;
  });

  // Sorting
  if (state.sortBy === 'newest') filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
  if (state.sortBy === 'low-high') filtered.sort((a, b) => a.price - b.price);
  if (state.sortBy === 'high-low') filtered.sort((a, b) => b.price - a.price);
  if (state.sortBy === 'rating') filtered.sort((a, b) => b.rating - a.rating);

  const categories = ['All', 'Phone Cases', 'Chargers', 'Charging Cables', 'Earphones & Earbuds', 'Gaming Accessories', 'Phone Stands', 'Speakers', 'Mobile Gadgets'];

  return `
    <div class="container" style="padding-top: 2rem;">
      <div class="shop-layout">
        <!-- Sidebar Filter -->
        <aside class="sidebar-filter">
          <div class="filter-group">
            <h3 class="filter-title">Categories</h3>
            <ul class="filter-list">
              ${categories.map(c => `
                <li class="filter-item ${state.selectedCategory === c ? 'active' : ''}" onclick="state.selectedCategory='${c}'; renderApp();">
                  <span>${c}</span>
                  <i data-lucide="chevron-right" style="width: 14px;"></i>
                </li>
              `).join('')}
            </ul>
          </div>

          <!-- Price Range Filter -->
          <div class="filter-group">
            <h3 class="filter-title">Price Range</h3>
            <div style="display: flex; flex-direction: column; gap: 0.4rem;">
              <label style="font-size: 0.85rem; font-weight: 700; cursor: pointer;">
                <input type="radio" name="priceRange" ${state.priceRangeFilter === 'All' ? 'checked' : ''} onclick="state.priceRangeFilter='All'; renderApp();" /> All Prices
              </label>
              <label style="font-size: 0.85rem; font-weight: 700; cursor: pointer;">
                <input type="radio" name="priceRange" ${state.priceRangeFilter === 'under99' ? 'checked' : ''} onclick="state.priceRangeFilter='under99'; renderApp();" /> Under ₹99 🔥
              </label>
              <label style="font-size: 0.85rem; font-weight: 700; cursor: pointer;">
                <input type="radio" name="priceRange" ${state.priceRangeFilter === '99-199' ? 'checked' : ''} onclick="state.priceRangeFilter='99-199'; renderApp();" /> ₹99 – ₹199
              </label>
              <label style="font-size: 0.85rem; font-weight: 700; cursor: pointer;">
                <input type="radio" name="priceRange" ${state.priceRangeFilter === '199-299' ? 'checked' : ''} onclick="state.priceRangeFilter='199-299'; renderApp();" /> ₹199 – ₹299
              </label>
              <label style="font-size: 0.85rem; font-weight: 700; cursor: pointer;">
                <input type="radio" name="priceRange" ${state.priceRangeFilter === '299-399' ? 'checked' : ''} onclick="state.priceRangeFilter='299-399'; renderApp();" /> ₹299 – ₹399
              </label>
              <label style="font-size: 0.85rem; font-weight: 700; cursor: pointer;">
                <input type="radio" name="priceRange" ${state.priceRangeFilter === '399-499' ? 'checked' : ''} onclick="state.priceRangeFilter='399-499'; renderApp();" /> ₹399 – ₹499
              </label>
            </div>
          </div>

          <!-- Rating Filter -->
          <div class="filter-group">
            <h3 class="filter-title">Customer Rating</h3>
            <div style="display: flex; flex-direction: column; gap: 0.4rem;">
              <label style="font-size: 0.85rem; font-weight: 700; cursor: pointer;">
                <input type="radio" name="ratingFilter" ${state.selectedRating === 0 ? 'checked' : ''} onclick="state.selectedRating=0; renderApp();" /> All Ratings
              </label>
              <label style="font-size: 0.85rem; font-weight: 700; cursor: pointer;">
                <input type="radio" name="ratingFilter" ${state.selectedRating === 4.8 ? 'checked' : ''} onclick="state.selectedRating=4.8; renderApp();" /> 4.8★ & Above
              </label>
            </div>
          </div>

          <button class="btn btn-outline btn-full btn-sm" onclick="state.selectedCategory='All'; state.priceRangeFilter='All'; state.selectedRating=0; state.searchQuery=''; renderApp();">
            Reset Filters
          </button>
        </aside>

        <!-- Main Product Grid -->
        <main>
          <div class="shop-topbar">
            <span style="font-size: 0.9rem; color: var(--text-muted); font-weight: 700;">
              Showing <strong>${filtered.length}</strong> items
              ${state.searchQuery ? `for "<strong>${state.searchQuery}</strong>"` : ''}
            </span>

            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <label style="font-size: 0.875rem; font-weight: 800;">Sort By:</label>
              <select class="sort-select" onchange="state.sortBy = this.value; renderApp();">
                <option value="popular" ${state.sortBy === 'popular' ? 'selected' : ''}>Popular</option>
                <option value="newest" ${state.sortBy === 'newest' ? 'selected' : ''}>New Arrivals</option>
                <option value="low-high" ${state.sortBy === 'low-high' ? 'selected' : ''}>Price: Low to High</option>
                <option value="high-low" ${state.sortBy === 'high-low' ? 'selected' : ''}>Price: High to Low</option>
                <option value="rating" ${state.sortBy === 'rating' ? 'selected' : ''}>Highest Rated</option>
              </select>
            </div>
          </div>

          ${filtered.length === 0 ? `
            <div style="text-align: center; padding: 4rem 2rem; background: white; border-radius: var(--radius-xl); border: 2px solid #F1F5F9;">
              <i data-lucide="package-search" style="width: 56px; height: 56px; color: var(--text-light); margin-bottom: 1rem;"></i>
              <h3 style="font-size: 1.35rem; font-weight: 900; margin-bottom: 0.5rem;">No Matching Mobile Accessories</h3>
              <p style="color: var(--text-muted); margin-bottom: 1.5rem;">Try adjusting your price range or category filters.</p>
              <button class="btn btn-primary" onclick="state.selectedCategory='All'; state.priceRangeFilter='All'; state.selectedRating=0; state.searchQuery=''; renderApp();">Reset All Filters</button>
            </div>
          ` : `
            <div class="product-grid">
              ${filtered.map(renderProductCard).join('')}
            </div>
          `}
        </main>
      </div>
    </div>
  `;
}

// --- OFFERS PAGE VIEW ---
function renderOffersPage() {
  let displayedProducts = state.products;
  if (state.offersTierFilter === 'under99') displayedProducts = state.products.filter(p => p.price <= 99);
  else if (state.offersTierFilter === 'under199') displayedProducts = state.products.filter(p => p.price <= 199);
  else if (state.offersTierFilter === 'under299') displayedProducts = state.products.filter(p => p.price <= 299);
  else if (state.offersTierFilter === 'under499') displayedProducts = state.products.filter(p => p.price <= 499);

  return `
    <div class="container" style="padding-top: 2.5rem;">
      <div style="text-align: center; max-width: 700px; margin: 0 auto 3rem;">
        <span class="hero-tag" style="background: var(--grad-orange-pink);">🔥 LOLO DEALS ZONE</span>
        <h1 style="font-size: 3rem; font-weight: 900; margin-bottom: 0.75rem;">Budget Deals & Bulk Savings</h1>
        <p style="font-size: 1.1rem; color: var(--text-muted); font-weight: 600;">
          Explore budget price tiers and stack extra discount coupons on checkout!
        </p>
      </div>

      <!-- Offer Tiers Selector -->
      <div class="offer-tiers-grid">
        <div class="offer-tier-card ${state.offersTierFilter === 'under99' ? 'active' : ''}" onclick="state.offersTierFilter='under99'; renderApp();">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔥</div>
          <h3 style="font-size: 1.35rem; font-weight: 900; color: var(--pink);">Under ₹99</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted);">Pop grips & desktop stands</p>
        </div>

        <div class="offer-tier-card ${state.offersTierFilter === 'under199' ? 'active' : ''}" onclick="state.offersTierFilter='under199'; renderApp();">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">💥</div>
          <h3 style="font-size: 1.35rem; font-weight: 900; color: var(--purple);">Under ₹199</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted);">Cables, cases & car mounts</p>
        </div>

        <div class="offer-tier-card ${state.offersTierFilter === 'under299' ? 'active' : ''}" onclick="state.offersTierFilter='under299'; renderApp();">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">⚡</div>
          <h3 style="font-size: 1.35rem; font-weight: 900; color: var(--electric-blue);">Under ₹299</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted);">Fast PD chargers & Lightning cables</p>
        </div>

        <div class="offer-tier-card ${state.offersTierFilter === 'under499' ? 'active' : ''}" onclick="state.offersTierFilter='under499'; renderApp();">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🚀</div>
          <h3 style="font-size: 1.35rem; font-weight: 900; color: var(--orange);">Under ₹499</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted);">TWS earbuds, RGB earphones & speakers</p>
        </div>
      </div>

      <!-- Buy More Save More Banner -->
      <div style="background: var(--grad-purple-pink); color: white; padding: 2.5rem; border-radius: var(--radius-xl); margin-bottom: 4rem; display: flex; align-items: center; justify-content: space-between; gap: 2rem; flex-wrap: wrap;">
        <div>
          <h3 style="font-size: 1.85rem; font-weight: 900;">BUY MORE, SAVE MORE! 🛍️</h3>
          <p style="font-size: 1.05rem; opacity: 0.95;">Automatic extra discount applied directly in cart when buying multiple items!</p>
        </div>

        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <div style="background: rgba(255,255,255,0.2); padding: 0.75rem 1.25rem; border-radius: var(--radius-lg); text-align: center; font-weight: 800;">
            Buy 2 Items → 5% OFF
          </div>
          <div style="background: rgba(255,255,255,0.2); padding: 0.75rem 1.25rem; border-radius: var(--radius-lg); text-align: center; font-weight: 800;">
            Buy 3 Items → 10% OFF
          </div>
          <div style="background: rgba(255,255,255,0.2); padding: 0.75rem 1.25rem; border-radius: var(--radius-lg); text-align: center; font-weight: 800;">
            Buy 5+ Items → 15% OFF
          </div>
        </div>
      </div>

      <div class="section-header">
        <h2 class="section-title">Special Offer Deals</h2>
      </div>

      <div class="product-grid">
        ${displayedProducts.map(renderProductCard).join('')}
      </div>
    </div>
  `;
}

// --- PRODUCT DETAILS PAGE VIEW ---
function renderProductDetailsPage() {
  const product = state.products.find(p => p.id === state.selectedProductId) || state.products[0];
  const isWishlisted = state.wishlist.includes(product.id);
  const related = state.products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);
  const discountPercent = product.oldPrice ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : null;

  return `
    <div class="container" style="padding-top: 2.5rem;">
      <div class="product-details-container">
        <!-- Gallery -->
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <img id="main-prod-img" src="${product.image}" alt="${product.name}" class="main-image" />
          <div class="thumbnail-list">
            ${(product.thumbnails || [product.image]).map((img, idx) => `
              <img 
                src="${img}" 
                class="thumbnail ${idx === 0 ? 'active' : ''}" 
                onclick="document.getElementById('main-prod-img').src='${img}'; document.querySelectorAll('.thumbnail').forEach(t=>t.classList.remove('active')); this.classList.add('active');" 
              />
            `).join('')}
          </div>
        </div>

        <!-- Details Info -->
        <div>
          <div style="display: flex; justify-content: space-between; align-items: flex-start;">
            <span class="product-category">${product.category}</span>
            ${discountPercent ? `<span class="product-badge sale" style="position: static;">${discountPercent}% OFF</span>` : ''}
          </div>

          <h1 style="font-size: 2.25rem; font-weight: 900; line-height: 1.25; margin-bottom: 0.75rem;">${product.name}</h1>
          
          <div style="display: flex; align-items: center; gap: 0.75rem; padding-bottom: 1.25rem; margin-bottom: 1.25rem; border-bottom: 2px dashed #F1F5F9;">
            ${renderStars(product.rating)}
            <span style="font-weight: 800; font-size: 0.95rem;">${product.rating}</span>
            <span style="color: var(--text-muted); font-size: 0.9rem; font-weight: 600;">(${product.reviewsCount} customer reviews)</span>
            <span style="color: #10B981; font-weight: 800; margin-left: auto;">In Stock (${product.stockCount || 20} units left)</span>
          </div>

          <div class="price-group" style="margin-bottom: 1.5rem;">
            <span class="price" style="font-size: 2.5rem;">${formatRupee(product.price)}</span>
            ${product.oldPrice ? `<span class="old-price" style="font-size: 1.35rem;">${formatRupee(product.oldPrice)}</span>` : ''}
          </div>

          <p style="color: var(--text-muted); font-size: 1.05rem; line-height: 1.65; margin-bottom: 1.75rem; font-weight: 600;">${product.description}</p>

          <!-- Specifications Table -->
          <div style="background: #F8FAFC; padding: 1.25rem; border-radius: var(--radius-lg); margin-bottom: 2rem;">
            <h4 style="font-weight: 900; font-size: 0.9rem; margin-bottom: 0.75rem; text-transform: uppercase;">Specifications</h4>
            ${Object.entries(product.specs || {}).map(([k, v]) => `
              <div style="display: flex; justify-content: space-between; padding: 0.4rem 0; border-bottom: 1px solid #E2E8F0; font-size: 0.875rem;">
                <span style="color: var(--text-muted); font-weight: 600;">${k}</span>
                <span style="font-weight: 800; color: var(--dark-navy);">${v}</span>
              </div>
            `).join('')}
          </div>

          <!-- Quantity & Action Buttons -->
          <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
            <div class="qty-selector">
              <button class="qty-btn" onclick="let el=document.getElementById('p-detail-qty'); el.innerText=Math.max(1, parseInt(el.innerText)-1);">-</button>
              <span id="p-detail-qty" class="qty-val">1</span>
              <button class="qty-btn" onclick="let el=document.getElementById('p-detail-qty'); el.innerText=parseInt(el.innerText)+1;">+</button>
            </div>
            
            <button class="btn btn-primary" style="flex: 1; min-width: 180px;" onclick="let qty=parseInt(document.getElementById('p-detail-qty').innerText); state.addToCart(${product.id}, qty); renderApp();">
              <i data-lucide="shopping-bag"></i> ADD TO CART
            </button>

            <button class="btn btn-orange" onclick="let qty=parseInt(document.getElementById('p-detail-qty').innerText); state.addToCart(${product.id}, qty); navigateTo('checkout');">
              BUY NOW 🔥
            </button>

            <button class="btn btn-outline" onclick="state.toggleWishlist(${product.id}); renderApp();">
              <i data-lucide="heart" style="${isWishlisted ? 'fill: var(--pink); color: var(--pink);' : ''}"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Customer Reviews & Submission -->
      <div style="background: white; padding: 2.5rem; border-radius: var(--radius-xl); border: 2px solid #F1F5F9; margin-bottom: 4rem;">
        <h3 style="font-size: 1.6rem; font-weight: 900; margin-bottom: 1.5rem;">Customer Reviews (${product.reviewsCount})</h3>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem;">
          <div>
            ${INITIAL_REVIEWS.map(r => `
              <div style="border-bottom: 2px dashed #F1F5F9; padding-bottom: 1rem; margin-bottom: 1rem;">
                <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.4rem;">
                  <div class="review-avatar-initial" style="width: 36px; height: 36px; font-size: 0.9rem;">${r.avatar}</div>
                  <div>
                    <div style="font-weight: 800; font-size: 0.9rem;">${r.name}</div>
                    <div style="font-size: 0.75rem; color: var(--text-light);">${r.date}</div>
                  </div>
                </div>
                ${renderStars(r.rating)}
                <p style="font-size: 0.9rem; color: var(--text-muted); font-weight: 600; margin-top: 0.4rem;">"${r.text}"</p>
              </div>
            `).join('')}
          </div>

          <div style="background: #F8FAFC; padding: 1.5rem; border-radius: var(--radius-lg);">
            <h4 style="font-weight: 800; margin-bottom: 1rem;">Write a Review</h4>
            <form onsubmit="event.preventDefault(); showToast('Thank you! Your review has been submitted.'); this.reset();">
              <div class="form-group" style="margin-bottom: 0.75rem;">
                <label>Your Name</label>
                <input type="text" required placeholder="Aarav Sharma" />
              </div>
              <div class="form-group" style="margin-bottom: 0.75rem;">
                <label>Rating</label>
                <select required style="padding: 0.6rem; border-radius: var(--radius-md); border: 2px solid var(--border-color);">
                  <option value="5">★★★★★ (5/5)</option>
                  <option value="4">★★★★☆ (4/5)</option>
                </select>
              </div>
              <div class="form-group" style="margin-bottom: 1rem;">
                <label>Comment</label>
                <textarea rows="3" required placeholder="Share your experience..."></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-sm">Submit Review</button>
            </form>
          </div>
        </div>
      </div>

      <!-- Related Products -->
      ${related.length > 0 ? `
        <div class="section-header">
          <h2 class="section-title">You May Also Like ❤️</h2>
        </div>
        <div class="product-grid">
          ${related.map(renderProductCard).join('')}
        </div>
      ` : ''}
    </div>
  `;
}

// --- SHOPPING CART PAGE VIEW ---
function renderCartPage() {
  const totals = state.getCartTotals();
  const freeShippingThreshold = 499;
  const amountNeeded = Math.max(0, freeShippingThreshold - totals.subtotal);
  const progressPercent = Math.min(100, (totals.subtotal / freeShippingThreshold) * 100);

  if (state.cart.length === 0) {
    return `
      <div class="container" style="padding: 5rem 1.25rem; text-align: center;">
        <div style="max-width: 440px; margin: 0 auto; background: white; padding: 3.5rem 2rem; border-radius: var(--radius-xl); border: 2px solid #F1F5F9; box-shadow: var(--shadow-sm);">
          <i data-lucide="shopping-bag" style="width: 64px; height: 64px; color: var(--text-light); margin-bottom: 1.5rem;"></i>
          <h2 style="font-size: 1.85rem; font-weight: 900; color: var(--dark-navy);">Your Cart is Empty! 🛒</h2>
          <p style="color: var(--text-muted); margin: 0.75rem 0 2rem; font-weight: 600;">Upgrade your phone style with trendy accessories starting from just ₹99!</p>
          <button class="btn btn-primary btn-full btn-lg" onclick="navigateTo('shop');">EXPLORE PRODUCTS NOW</button>
        </div>
      </div>
    `;
  }

  return `
    <div class="container" style="padding-top: 2.5rem;">
      <h1 style="font-size: 2.25rem; font-weight: 900; margin-bottom: 2rem;">Shopping Cart (${state.cart.length} item${state.cart.length > 1 ? 's' : ''})</h1>

      <div class="cart-layout">
        <div>
          <!-- Free Shipping Tracker -->
          <div style="background: white; padding: 1.25rem; border-radius: var(--radius-xl); border: 2px solid #F1F5F9; margin-bottom: 1.5rem;">
            <div style="display: flex; justify-content: space-between; font-size: 0.9rem; font-weight: 800;">
              <span>🚚 Free Express Shipping</span>
              <span>${amountNeeded === 0 ? 'Qualified!' : `Add ${formatRupee(amountNeeded)} more`}</span>
            </div>
            <div style="background: #F1F5F9; border-radius: var(--radius-full); height: 8px; overflow: hidden; margin-top: 0.5rem;">
              <div style="background: var(--grad-purple-pink); width: ${progressPercent}%; height: 100%;"></div>
            </div>
            <p style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600; margin-top: 0.35rem;">Orders over ₹499 qualify for FREE Delivery across India.</p>
          </div>

          <table class="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              ${state.cart.map(item => `
                <tr>
                  <td>
                    <div style="display: flex; align-items: center; gap: 0.85rem;">
                      <img src="${item.image}" style="width: 56px; height: 56px; border-radius: var(--radius-md); object-fit: cover;" />
                      <div>
                        <h4 style="font-size: 0.95rem; font-weight: 800; cursor: pointer;" onclick="navigateTo('product', ${item.id});">${item.name}</h4>
                        <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">${item.category}</span>
                      </div>
                    </div>
                  </td>
                  <td style="font-weight: 800;">${formatRupee(item.price)}</td>
                  <td>
                    <div class="qty-selector">
                      <button class="qty-btn" onclick="state.updateQuantity(${item.id}, ${item.quantity - 1}); renderApp();">-</button>
                      <span class="qty-val">${item.quantity}</span>
                      <button class="qty-btn" onclick="state.updateQuantity(${item.id}, ${item.quantity + 1}); renderApp();">+</button>
                    </div>
                  </td>
                  <td style="font-weight: 900; color: var(--purple);">${formatRupee(item.price * item.quantity)}</td>
                  <td>
                    <button class="icon-btn" onclick="state.removeFromCart(${item.id}); renderApp();"><i data-lucide="trash-2" style="color: #EF4444;"></i></button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <!-- Summary -->
        <div class="order-summary-card">
          <h3 style="font-size: 1.35rem; font-weight: 900; margin-bottom: 1.25rem;">Order Summary</h3>
          
          <div class="summary-row">
            <span>Subtotal</span>
            <span style="font-weight: 800; color: var(--dark-navy);">${formatRupee(totals.subtotal)}</span>
          </div>

          ${totals.tierDiscountPercent > 0 ? `
            <div class="summary-row" style="color: #10B981;">
              <span>Multi-Buy Discount (${totals.tierDiscountPercent}%)</span>
              <span style="font-weight: 800;">-${formatRupee(totals.totalDiscount)}</span>
            </div>
          ` : ''}

          ${state.appliedCoupon ? `
            <div class="summary-row" style="color: var(--pink);">
              <span>Coupon (${state.appliedCoupon.code})</span>
              <span style="font-weight: 800;">-${formatRupee(totals.totalDiscount)}</span>
            </div>
          ` : ''}

          <div class="summary-row">
            <span>Shipping Fee</span>
            <span style="font-weight: 800; color: var(--dark-navy);">${totals.shipping === 0 ? '<span style="color:#10B981;">FREE</span>' : formatRupee(totals.shipping)}</span>
          </div>

          <!-- Coupon Input Form -->
          <div style="margin: 1.25rem 0;">
            <div style="display: flex; gap: 0.5rem;">
              <input type="text" id="coupon-input" placeholder="Promo Code (LOLO10)" style="flex: 1; padding: 0.6rem; border-radius: var(--radius-md); border: 2px solid var(--border-color); font-size: 0.85rem; font-weight: 700;" />
              <button class="btn btn-outline btn-sm" onclick="state.applyCoupon(document.getElementById('coupon-input').value); renderApp();">Apply</button>
            </div>
            ${state.appliedCoupon ? `
              <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.5rem; font-size: 0.8rem; color: var(--pink); font-weight: 800;">
                <span>✓ ${state.appliedCoupon.code} Active</span>
                <a href="#" onclick="state.removeCoupon(); renderApp(); return false;" style="color: #EF4444; text-decoration: underline;">Remove</a>
              </div>
            ` : ''}
          </div>

          <div class="summary-row total">
            <span>Total Payable</span>
            <span>${formatRupee(totals.total)}</span>
          </div>

          <button class="btn btn-primary btn-full btn-lg" style="margin-top: 1.5rem;" onclick="navigateTo('checkout');">
            PROCEED TO CHECKOUT →
          </button>
        </div>
      </div>
    </div>
  `;
}

// --- CHECKOUT PAGE VIEW ---
function renderCheckoutPage() {
  const totals = state.getCartTotals();

  if (state.cart.length === 0) {
    navigateTo('cart');
    return '';
  }

  return `
    <div class="container" style="padding-top: 2.5rem;">
      <h1 style="font-size: 2.25rem; font-weight: 900; margin-bottom: 2rem;">Express Checkout</h1>

      <form onsubmit="event.preventDefault(); handleCheckoutSubmit(this);">
        <div class="checkout-layout">
          <div>
            <!-- Step 1: Customer Details -->
            <div class="form-section">
              <h3 style="font-size: 1.15rem; font-weight: 900; margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.5rem;">
                <i data-lucide="user" style="color: var(--purple);"></i> 1. Customer Information
              </h3>
              
              <div class="form-grid">
                <div class="form-group full">
                  <label>Full Name *</label>
                  <input type="text" name="fullName" required placeholder="Aarav Sharma" />
                </div>
                <div class="form-group">
                  <label>Mobile Number (+91) *</label>
                  <input type="tel" name="phone" required placeholder="9876543210" pattern="[0-9]{10}" />
                </div>
                <div class="form-group">
                  <label>Email Address</label>
                  <input type="email" name="email" placeholder="aarav@example.com" />
                </div>
              </div>
            </div>

            <!-- Step 2: Shipping Address -->
            <div class="form-section">
              <h3 style="font-size: 1.15rem; font-weight: 900; margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.5rem;">
                <i data-lucide="map-pin" style="color: var(--purple);"></i> 2. Delivery Address
              </h3>

              <div class="form-grid">
                <div class="form-group full">
                  <label>Flat / House / Street Address *</label>
                  <input type="text" name="address" required placeholder="House 42, Sector 15" />
                </div>
                <div class="form-group">
                  <label>City *</label>
                  <input type="text" name="city" required placeholder="New Delhi" />
                </div>
                <div class="form-group">
                  <label>State *</label>
                  <input type="text" name="state" required placeholder="Delhi" />
                </div>
                <div class="form-group full">
                  <label>PIN Code *</label>
                  <input type="text" name="pin" required placeholder="110001" pattern="[0-9]{6}" />
                </div>
              </div>
            </div>

            <!-- Step 3: Delivery Option -->
            <div class="form-section">
              <h3 style="font-size: 1.15rem; font-weight: 900; margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.5rem;">
                <i data-lucide="truck" style="color: var(--purple);"></i> 3. Shipping Speed
              </h3>

              <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                <label class="radio-card">
                  <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <input type="radio" name="deliveryMethod" value="standard" checked />
                    <div>
                      <div style="font-weight: 800;">Standard Delivery (3-5 Business Days)</div>
                      <div style="font-size: 0.8rem; color: var(--text-muted);">Shipped via Bluedart / Delhivery</div>
                    </div>
                  </div>
                  <span style="font-weight: 900;">${totals.subtotal >= 499 ? 'FREE' : '₹49'}</span>
                </label>

                <label class="radio-card">
                  <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <input type="radio" name="deliveryMethod" value="express" />
                    <div>
                      <div style="font-weight: 800;">Express Priority (1-2 Days Dispatch)</div>
                      <div style="font-size: 0.8rem; color: var(--text-muted);">Priority courier packing</div>
                    </div>
                  </div>
                  <span style="font-weight: 900;">₹99</span>
                </label>
              </div>
            </div>

            <!-- Step 4: Payment Option -->
            <div class="form-section">
              <h3 style="font-size: 1.15rem; font-weight: 900; margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.5rem;">
                <i data-lucide="credit-card" style="color: var(--purple);"></i> 4. Payment Method
              </h3>

              <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                <label class="radio-card">
                  <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <input type="radio" name="payment" value="upi" checked />
                    <span style="font-weight: 800;">UPI (Google Pay, PhonePe, Paytm, BHIM)</span>
                  </div>
                  <span style="background: #D1FAE5; color: #10B981; padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.75rem; font-weight: 800;">FASTEST</span>
                </label>

                <label class="radio-card">
                  <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <input type="radio" name="payment" value="card" />
                    <span style="font-weight: 800;">Credit / Debit Card (Visa, Mastercard, RuPay)</span>
                  </div>
                </label>

                <label class="radio-card">
                  <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <input type="radio" name="payment" value="cod" />
                    <span style="font-weight: 800;">Cash on Delivery (COD)</span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <!-- Order Summary Sidebar -->
          <div>
            <div class="order-summary-card">
              <h3 style="font-size: 1.35rem; font-weight: 900; margin-bottom: 1.25rem;">Order Review</h3>

              <div style="max-height: 250px; overflow-y: auto; margin-bottom: 1.25rem; display: flex; flex-direction: column; gap: 0.85rem;">
                ${state.cart.map(item => `
                  <div style="display: flex; align-items: center; justify-content: space-between;">
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                      <img src="${item.image}" style="width: 44px; height: 44px; border-radius: var(--radius-sm); object-fit: cover;" />
                      <div>
                        <div style="font-size: 0.875rem; font-weight: 800; max-width: 170px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.name}</div>
                        <div style="font-size: 0.78rem; color: var(--text-muted);">Qty: ${item.quantity} × ${formatRupee(item.price)}</div>
                      </div>
                    </div>
                    <span style="font-weight: 900; font-size: 0.9rem;">${formatRupee(item.price * item.quantity)}</span>
                  </div>
                `).join('')}
              </div>

              <div class="summary-row">
                <span>Subtotal</span>
                <span>${formatRupee(totals.subtotal)}</span>
              </div>
              <div class="summary-row">
                <span>Shipping</span>
                <span>${totals.shipping === 0 ? 'FREE' : formatRupee(totals.shipping)}</span>
              </div>
              <div class="summary-row total">
                <span>Grand Total</span>
                <span>${formatRupee(totals.total)}</span>
              </div>

              <button type="submit" class="btn btn-orange btn-full btn-lg" style="margin-top: 1.5rem;">
                PLACE ORDER →
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  `;
}

function handleCheckoutSubmit(form) {
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  state.placeOrder(data);
  navigateTo('confirmation');
}

// --- ORDER CONFIRMATION VIEW ---
function renderConfirmationPage() {
  const order = state.lastOrder || state.orders[0];

  return `
    <div class="container" style="padding: 4rem 1.25rem; text-align: center;">
      <div style="max-width: 620px; margin: 0 auto; background: white; padding: 3.5rem 2rem; border-radius: var(--radius-xl); border: 3px solid var(--purple-light); box-shadow: var(--shadow-lg);">
        <div style="width: 76px; height: 76px; background: var(--grad-purple-pink); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; font-size: 2.25rem;">
          🎉
        </div>
        
        <h1 style="font-size: 2.35rem; font-weight: 900; color: var(--dark-navy); margin-bottom: 0.5rem;">Order Placed Successfully!</h1>
        <p style="color: var(--text-muted); font-size: 1.05rem; font-weight: 600; margin-bottom: 2rem;">Thank you for shopping with <strong>LOLO LMT</strong>.</p>

        <div style="background: #F8FAFC; padding: 1.5rem; border-radius: var(--radius-lg); text-align: left; margin-bottom: 2rem;">
          <h4 style="margin-bottom: 1rem; font-weight: 900; font-size: 1.05rem;">Order Summary Breakdown</h4>
          
          <div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 0.5rem;">
            <span style="color: var(--text-muted);">Order Number:</span>
            <strong>#${order.id}</strong>
          </div>
          <div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 0.5rem;">
            <span style="color: var(--text-muted);">Customer:</span>
            <strong>${order.customer} (${order.phone})</strong>
          </div>
          <div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 0.5rem;">
            <span style="color: var(--text-muted);">Delivery Address:</span>
            <strong>${order.address}</strong>
          </div>
          <div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 0.5rem;">
            <span style="color: var(--text-muted);">Estimated Delivery:</span>
            <strong style="color: #10B981;">2-4 Business Days</strong>
          </div>
          <div style="display: flex; justify-content: space-between; font-size: 0.95rem; border-top: 2px dashed #E2E8F0; padding-top: 0.75rem; margin-top: 0.75rem;">
            <span style="color: var(--text-muted);">Total Amount Paid:</span>
            <strong style="color: var(--purple); font-size: 1.25rem;">${formatRupee(order.total)}</strong>
          </div>
        </div>

        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <button class="btn btn-primary btn-lg" onclick="navigateTo('home');">Continue Shopping 🛍️</button>
          <button class="btn btn-outline" onclick="navigateTo('admin');">View Store Dashboard</button>
        </div>
      </div>
    </div>
  `;
}

// --- SAVED WISHLIST VIEW ---
function renderWishlistPage() {
  const wishlistedProducts = state.products.filter(p => state.wishlist.includes(p.id));

  return `
    <div class="container" style="padding-top: 2.5rem;">
      <h1 style="font-size: 2.25rem; font-weight: 900; margin-bottom: 0.5rem;">My Saved Wishlist ❤️ (${wishlistedProducts.length})</h1>
      <p style="color: var(--text-muted); font-size: 1rem; margin-bottom: 2rem; font-weight: 600;">Your bookmarked mobile accessories. Move them to your cart anytime!</p>

      ${wishlistedProducts.length === 0 ? `
        <div style="text-align: center; padding: 5rem 2rem; background: white; border-radius: var(--radius-xl); border: 2px solid #F1F5F9; max-width: 480px; margin: 0 auto;">
          <i data-lucide="heart" style="width: 56px; height: 56px; color: var(--text-light); margin-bottom: 1.25rem;"></i>
          <h3 style="font-size: 1.35rem; font-weight: 900; margin-bottom: 0.5rem;">Your Wishlist is Empty</h3>
          <p style="color: var(--text-muted); margin-bottom: 2rem;">Tap the heart icon on any product card while shopping to save it here.</p>
          <button class="btn btn-primary" onclick="navigateTo('shop');">EXPLORE PRODUCTS</button>
        </div>
      ` : `
        <div class="product-grid">
          ${wishlistedProducts.map(renderProductCard).join('')}
        </div>
      `}
    </div>
  `;
}

// --- ABOUT US PAGE VIEW ---
function renderAboutPage() {
  return `
    <div class="container" style="padding-top: 3rem;">
      <div style="max-width: 840px; margin: 0 auto; text-align: center; margin-bottom: 4rem;">
        <span class="hero-tag">ABOUT LOLO LMT</span>
        <h1 style="font-size: 3.25rem; font-weight: 900; margin: 0.75rem 0 1rem;">Affordable Accessories. Maximum Style. ⚡</h1>
        <p style="font-size: 1.2rem; color: var(--text-muted); font-weight: 600; line-height: 1.7;">
          LOLO LMT is India’s youth-favorite destination for trendy, ultra-durable mobile accessories. We believe everyone deserves high-style tech gear without breaking the bank — everything priced strictly between ₹99 and ₹499!
        </p>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3.5rem; align-items: center; margin-bottom: 5rem;">
        <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80" style="border-radius: var(--radius-xl); width: 100%; box-shadow: var(--shadow-lg);" />
        <div>
          <h2 style="font-size: 2rem; font-weight: 900; margin-bottom: 1rem;">Why India Loves LOLO LMT</h2>
          <p style="color: var(--text-muted); line-height: 1.7; font-weight: 600; margin-bottom: 1.5rem;">
            From reinforced fast-charging Type-C cables and military-grade drop cases to bass-heavy wireless earbuds and custom pop grips, every item is tested for 100% durability and style.
          </p>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem;">
            <div style="background: white; padding: 1.25rem; border-radius: var(--radius-lg); border: 2px solid #F1F5F9;">
              <h3 style="font-size: 1.75rem; font-weight: 900; color: var(--purple);">1,00,000+</h3>
              <p style="font-size: 0.85rem; color: var(--text-muted); font-weight: 600;">Happy Youth Customers</p>
            </div>
            <div style="background: white; padding: 1.25rem; border-radius: var(--radius-lg); border: 2px solid #F1F5F9;">
              <h3 style="font-size: 1.75rem; font-weight: 900; color: var(--pink);">₹99 – ₹499</h3>
              <p style="font-size: 0.85rem; color: var(--text-muted); font-weight: 600;">Guaranteed Price Range</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// --- CONTACT & FAQ PAGE VIEW ---
function renderContactPage() {
  return `
    <div class="container" style="padding-top: 3rem;">
      <div style="max-width: 900px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 3.5rem;">
          <h1 style="font-size: 2.75rem; font-weight: 900;">Get in Touch With LOLO LMT</h1>
          <p style="color: var(--text-muted); font-size: 1.05rem; font-weight: 600;">Have a question about your order or accessories? We are here to help 24/7!</p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1.8fr; gap: 2.5rem; margin-bottom: 4rem;">
          <div style="background: white; padding: 2rem; border-radius: var(--radius-xl); border: 2px solid #F1F5F9;">
            <div style="margin-bottom: 1.75rem;">
              <div style="font-size: 1.75rem; margin-bottom: 0.5rem;">📧</div>
              <h4 style="font-weight: 800;">Email Support</h4>
              <p style="font-size: 0.9rem; color: var(--text-muted);">support@lololmt.in</p>
            </div>

            <div style="margin-bottom: 1.75rem;">
              <div style="font-size: 1.75rem; margin-bottom: 0.5rem;">💬</div>
              <h4 style="font-weight: 800;">WhatsApp & Helpline</h4>
              <p style="font-size: 0.9rem; color: var(--text-muted);">+91 98765 43210 (24x7 Active)</p>
            </div>

            <div>
              <div style="font-size: 1.75rem; margin-bottom: 0.5rem;">📍</div>
              <h4 style="font-weight: 800;">LOLO HQ</h4>
              <p style="font-size: 0.9rem; color: var(--text-muted);">Sector 62, Cyber City, Gurugram, Haryana - 122002</p>
            </div>
          </div>

          <form style="background: white; padding: 2rem; border-radius: var(--radius-xl); border: 2px solid #F1F5F9;" onsubmit="event.preventDefault(); showToast('Message received! Our team will respond shortly.'); this.reset();">
            <h3 style="font-size: 1.25rem; font-weight: 900; margin-bottom: 1.25rem;">Send Us a Quick Message</h3>
            <div class="form-grid">
              <div class="form-group">
                <label>Your Name *</label>
                <input type="text" required placeholder="Aarav Sharma" />
              </div>
              <div class="form-group">
                <label>Mobile Number *</label>
                <input type="tel" required placeholder="9876543210" />
              </div>
              <div class="form-group full">
                <label>Message *</label>
                <textarea rows="4" required placeholder="How can we assist you today?"></textarea>
              </div>
            </div>
            <button class="btn btn-primary" style="margin-top: 1.25rem;" type="submit">SEND MESSAGE →</button>
          </form>
        </div>

        <!-- FAQ Section -->
        <div style="margin-bottom: 4rem;">
          <h2 style="font-size: 2rem; font-weight: 900; text-align: center; margin-bottom: 1.5rem;">Frequently Asked Questions</h2>
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            ${INITIAL_FAQS.map((faq, i) => `
              <div style="background: white; border: 2px solid #F1F5F9; border-radius: var(--radius-lg); padding: 1.25rem; cursor: pointer;" onclick="this.querySelector('.faq-ans').style.display = (this.querySelector('.faq-ans').style.display === 'block' ? 'none' : 'block');">
                <div style="font-weight: 800; font-size: 1.05rem; display: flex; justify-content: space-between; align-items: center;">
                  <span>${faq.q}</span>
                  <span>▼</span>
                </div>
                <div class="faq-ans" style="display: ${i === 0 ? 'block' : 'none'}; margin-top: 0.75rem; color: var(--text-muted); font-weight: 600; font-size: 0.925rem; border-top: 1px dashed #E2E8F0; padding-top: 0.75rem;">
                  ${faq.a}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

// --- STORE ADMIN DASHBOARD VIEW ---
function renderAdminDashboard() {
  const totalRevenue = state.orders.reduce((acc, o) => acc + (o.total || 0), 0);
  const avgOrderVal = state.orders.length ? (totalRevenue / state.orders.length) : 0;

  return `
    <div class="container" style="padding-top: 2.5rem;">
      <h1 style="font-size: 2.25rem; font-weight: 900; margin-bottom: 2rem;">LOLO LMT Store Admin</h1>

      <div style="display: grid; grid-template-columns: 240px 1fr; gap: 2rem;">
        <aside style="background: white; padding: 1.25rem; border-radius: var(--radius-xl); border: 2px solid #F1F5F9; height: fit-content;">
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem;">
            <li class="filter-item ${state.adminTab === 'products' ? 'active' : ''}" onclick="state.adminTab='products'; renderApp();">
              📦 Catalog (${state.products.length})
            </li>
            <li class="filter-item ${state.adminTab === 'orders' ? 'active' : ''}" onclick="state.adminTab='orders'; renderApp();">
              🛒 Orders (${state.orders.length})
            </li>
          </ul>
        </aside>

        <main>
          <!-- Sales Overview -->
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.25rem; margin-bottom: 2rem;">
            <div style="background: white; padding: 1.25rem; border-radius: var(--radius-lg); border: 2px solid #F1F5F9;">
              <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 700;">Total Revenue</span>
              <div style="font-size: 1.6rem; font-weight: 900; color: var(--purple); margin-top: 0.25rem;">${formatRupee(totalRevenue)}</div>
            </div>
            <div style="background: white; padding: 1.25rem; border-radius: var(--radius-lg); border: 2px solid #F1F5F9;">
              <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 700;">Total Orders</span>
              <div style="font-size: 1.6rem; font-weight: 900; margin-top: 0.25rem;">${state.orders.length}</div>
            </div>
            <div style="background: white; padding: 1.25rem; border-radius: var(--radius-lg); border: 2px solid #F1F5F9;">
              <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 700;">Active Products</span>
              <div style="font-size: 1.6rem; font-weight: 900; margin-top: 0.25rem;">${state.products.length}</div>
            </div>
            <div style="background: white; padding: 1.25rem; border-radius: var(--radius-lg); border: 2px solid #F1F5F9;">
              <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 700;">Avg Order Value</span>
              <div style="font-size: 1.6rem; font-weight: 900; margin-top: 0.25rem;">${formatRupee(avgOrderVal)}</div>
            </div>
          </div>

          ${state.adminTab === 'products' ? renderAdminProducts() : renderAdminOrders()}
        </main>
      </div>
    </div>
  `;
}

function renderAdminProducts() {
  return `
    <div style="background: white; padding: 1.75rem; border-radius: var(--radius-xl); border: 2px solid #F1F5F9;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
        <div>
          <h3 style="font-size: 1.25rem; font-weight: 900;">Accessories Catalog</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted); font-weight: 600;">Manage product inventory and ₹99-₹499 pricing.</p>
        </div>
        <button class="btn btn-primary btn-sm" onclick="showAddProductModal();">+ Add New Product</button>
      </div>

      <div style="overflow-x: auto;">
        <table class="cart-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${state.products.map(p => `
              <tr>
                <td>#${p.id}</td>
                <td style="font-weight: 800;">
                  <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <img src="${p.image}" style="width: 36px; height: 36px; border-radius: var(--radius-sm); object-fit: cover;" />
                    <span>${p.name}</span>
                  </div>
                </td>
                <td><span style="background: var(--purple-light); color: var(--purple); padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.8rem; font-weight: 800;">${p.category}</span></td>
                <td style="font-weight: 900; color: var(--dark-navy);">${formatRupee(p.price)}</td>
                <td>
                  <button class="icon-btn" onclick="deleteProduct(${p.id});"><i data-lucide="trash-2" style="color: #EF4444; width: 16px;"></i></button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderAdminOrders() {
  return `
    <div style="background: white; padding: 1.75rem; border-radius: var(--radius-xl); border: 2px solid #F1F5F9;">
      <h3 style="font-size: 1.25rem; font-weight: 900; margin-bottom: 1.5rem;">Customer Orders</h3>

      <div style="overflow-x: auto;">
        <table class="cart-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Items</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${state.orders.map(o => `
              <tr>
                <td style="font-weight: 900; color: var(--purple);">${o.id}</td>
                <td>
                  <div style="font-weight: 800;">${o.customer}</div>
                  <div style="font-size: 0.75rem; color: var(--text-muted);">${o.phone}</div>
                </td>
                <td>${o.date}</td>
                <td>${o.itemsCount || 1} item(s)</td>
                <td style="font-weight: 900;">${formatRupee(o.total)}</td>
                <td>
                  <select 
                    style="padding: 0.35rem; border-radius: 6px; border: 1px solid var(--border-color); font-size: 0.8rem; font-weight: 800;"
                    onchange="let ord=state.orders.find(x=>x.id==='${o.id}'); if(ord){ord.status=this.value; state.save(); showToast('Status updated');}"
                  >
                    <option value="Processing" ${o.status === 'Processing' ? 'selected' : ''}>Processing</option>
                    <option value="Shipped" ${o.status === 'Shipped' ? 'selected' : ''}>Shipped</option>
                    <option value="Delivered" ${o.status === 'Delivered' ? 'selected' : ''}>Delivered</option>
                  </select>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function deleteProduct(id) {
  if (confirm("Are you sure you want to delete this product?")) {
    state.products = state.products.filter(p => p.id !== id);
    state.save();
    renderApp();
    showToast("Product deleted");
  }
}

function showAddProductModal() {
  const modal = document.createElement('div');
  modal.className = 'modal-backdrop';
  modal.innerHTML = `
    <div class="modal-card">
      <h3 style="font-size: 1.35rem; font-weight: 900; margin-bottom: 1.25rem;">Add New LOLO Product</h3>
      <form onsubmit="event.preventDefault(); handleAddProductForm(this); modal.remove();">
        <div class="form-group" style="margin-bottom: 1rem;">
          <label>Product Name *</label>
          <input type="text" name="name" required placeholder="e.g. RGB Gaming Earphones" />
        </div>
        <div class="form-group" style="margin-bottom: 1rem;">
          <label>Category *</label>
          <select name="category" required style="padding: 0.75rem; border-radius: var(--radius-md); border: 2px solid var(--border-color);">
            <option value="Phone Cases">Phone Cases</option>
            <option value="Chargers">Chargers</option>
            <option value="Charging Cables">Charging Cables</option>
            <option value="Earphones & Earbuds">Earphones & Earbuds</option>
            <option value="Gaming Accessories">Gaming Accessories</option>
            <option value="Phone Stands">Phone Stands</option>
            <option value="Speakers">Speakers</option>
            <option value="Mobile Gadgets">Mobile Gadgets</option>
          </select>
        </div>
        <div class="form-grid" style="margin-bottom: 1rem;">
          <div class="form-group">
            <label>Price (₹) *</label>
            <input type="number" name="price" required min="99" max="499" value="199" />
          </div>
          <div class="form-group">
            <label>Original Price (₹)</label>
            <input type="number" name="oldPrice" value="299" />
          </div>
        </div>
        <div class="form-group" style="margin-bottom: 1rem;">
          <label>Image URL *</label>
          <input type="url" name="image" required value="https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80" />
        </div>
        <div class="form-group" style="margin-bottom: 1.5rem;">
          <label>Description *</label>
          <textarea name="description" rows="3" required placeholder="Short highlights..."></textarea>
        </div>
        <div style="display: flex; gap: 1rem; justify-content: flex-end;">
          <button type="button" class="btn btn-outline btn-sm" onclick="this.closest('.modal-backdrop').remove();">Cancel</button>
          <button type="submit" class="btn btn-primary btn-sm">Save Product</button>
        </div>
      </form>
    </div>
  `;
  document.body.appendChild(modal);
}

function handleAddProductForm(form) {
  const data = Object.fromEntries(new FormData(form).entries());
  const newProd = {
    id: Date.now(),
    name: data.name,
    category: data.category,
    price: parseInt(data.price),
    oldPrice: data.oldPrice ? parseInt(data.oldPrice) : null,
    rating: 4.8,
    reviewsCount: 1,
    badge: "New",
    badgeType: "new",
    image: data.image,
    thumbnails: [data.image],
    description: data.description,
    specs: { "Warranty": "6 Months Replacement Warranty" },
    inStock: true,
    stockCount: 30,
    isFeatured: true,
    isBestseller: true
  };
  state.products.unshift(newProd);
  state.save();
  renderApp();
  showToast("New product added to catalog!");
}

function toggleAccountModal() {
  const modal = document.createElement('div');
  modal.className = 'modal-backdrop';
  modal.innerHTML = `
    <div class="modal-card">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
        <h3 style="font-size: 1.35rem; font-weight: 900;">My LOLO Account</h3>
        <button class="icon-btn" onclick="this.closest('.modal-backdrop').remove();"><i data-lucide="x"></i></button>
      </div>

      <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; background: var(--purple-light); padding: 1.25rem; border-radius: var(--radius-lg);">
        <div class="review-avatar-initial" style="width: 52px; height: 52px; font-size: 1.25rem;">A</div>
        <div>
          <h4 style="font-weight: 900; font-size: 1.05rem;">Aarav Sharma</h4>
          <p style="font-size: 0.85rem; color: var(--purple); font-weight: 800;">⚡ LOLO VIP Member</p>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem; font-weight: 700; font-size: 0.9rem;">
        <div style="display: flex; justify-content: space-between; padding-bottom: 0.5rem; border-bottom: 1px solid #E2E8F0;">
          <span style="color: var(--text-muted);">Mobile:</span>
          <span>+91 98765 43210</span>
        </div>
        <div style="display: flex; justify-content: space-between; padding-bottom: 0.5rem; border-bottom: 1px solid #E2E8F0;">
          <span style="color: var(--text-muted);">Saved Wishlist Items:</span>
          <span>${state.wishlist.length} items</span>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <span style="color: var(--text-muted);">Completed Orders:</span>
          <span>${state.orders.length} orders</span>
        </div>
      </div>

      <div style="display: flex; gap: 1rem;">
        <button class="btn btn-primary btn-full" onclick="this.closest('.modal-backdrop').remove(); navigateTo('admin');">Store Dashboard</button>
        <button class="btn btn-outline btn-full" onclick="this.closest('.modal-backdrop').remove(); showToast('Logged out');">Sign Out</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  lucide.createIcons();
}

// --- FOOTER COMPONENT ---
function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <a href="#" class="logo" style="color: white; margin-bottom: 1rem; display: inline-flex;">
              LOLO <span class="logo-badge">LMT</span>
            </a>
            <p style="color: #94A3B8; font-size: 0.9rem; line-height: 1.65; max-width: 320px; font-weight: 600;">
              India's favorite online store for affordable, trendy, and high-style mobile accessories. Quality guaranteed between ₹99 and ₹499.
            </p>
          </div>

          <div class="footer-col">
            <h4>Quick Links</h4>
            <ul class="footer-links">
              <li><a href="#" onclick="navigateTo('home'); return false;">Home</a></li>
              <li><a href="#" onclick="navigateTo('shop'); return false;">Shop All</a></li>
              <li><a href="#" onclick="navigateTo('offers'); return false;">🔥 Crazy Offers</a></li>
              <li><a href="#" onclick="navigateTo('about'); return false;">About Us</a></li>
              <li><a href="#" onclick="navigateTo('contact'); return false;">Contact Us</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Popular Categories</h4>
            <ul class="footer-links">
              <li><a href="#" onclick="state.selectedCategory='Phone Cases'; navigateTo('shop'); return false;">Phone Cases</a></li>
              <li><a href="#" onclick="state.selectedCategory='Earphones & Earbuds'; navigateTo('shop'); return false;">TWS Earbuds</a></li>
              <li><a href="#" onclick="state.selectedCategory='Charging Cables'; navigateTo('shop'); return false;">Type-C Cables</a></li>
              <li><a href="#" onclick="state.selectedCategory='Gaming Accessories'; navigateTo('shop'); return false;">Gaming Accessories</a></li>
              <li><a href="#" onclick="navigateTo('admin'); return false;">Store Dashboard</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Follow & Connect</h4>
            <p style="font-size: 0.85rem; color: #94A3B8; margin-bottom: 1rem;">Join 1,00,000+ happy LOLO shoppers!</p>
            <div style="display: flex; gap: 0.85rem; color: white; font-size: 1.25rem;">
              <a href="#" title="Instagram">📸</a>
              <a href="#" title="Facebook">📘</a>
              <a href="#" title="YouTube">📺</a>
              <a href="#" title="WhatsApp">💬</a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <span>&copy; 2026 LOLO LMT Inc. All Rights Reserved.</span>
          <span>Affordable Accessories. Maximum Style. ⚡</span>
        </div>
      </div>
    </footer>
  `;
}

// --- MAIN APPLICATION RENDER ENGINE ---
function renderApp() {
  const app = document.getElementById('app');
  let contentHtml = '';

  switch (state.currentPage) {
    case 'home': contentHtml = renderHomePage(); break;
    case 'shop': contentHtml = renderShopPage(); break;
    case 'product': contentHtml = renderProductDetailsPage(); break;
    case 'cart': contentHtml = renderCartPage(); break;
    case 'checkout': contentHtml = renderCheckoutPage(); break;
    case 'confirmation': contentHtml = renderConfirmationPage(); break;
    case 'offers': contentHtml = renderOffersPage(); break;
    case 'wishlist': contentHtml = renderWishlistPage(); break;
    case 'about': contentHtml = renderAboutPage(); break;
    case 'contact': contentHtml = renderContactPage(); break;
    case 'admin': contentHtml = renderAdminDashboard(); break;
    default: contentHtml = renderHomePage();
  }

  app.innerHTML = `
    ${renderHeader()}
    ${contentHtml}
    ${renderFooter()}
  `;

  if (window.lucide) {
    lucide.createIcons();
  }
}

// Initialize application on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
});
