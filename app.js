/* ==========================================================================
   Lumina E-Commerce Application Script
   Full State Management, Interactive Page Views, Real-time Operations
   ========================================================================== */

// --- EXPANDED SAMPLE INITIAL DATA ---
const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: "Aura Noise-Canceling Wireless Headphones",
    category: "Electronics",
    price: 249.99,
    oldPrice: 299.99,
    rating: 4.8,
    reviewsCount: 142,
    badge: "Bestseller",
    badgeType: "primary",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Immerse yourself in pure audio perfection with Aura's industry-leading active noise cancellation and custom 40mm acoustic drivers engineered for crystal-clear highs and deep bass.",
    specs: {
      "Battery Life": "Up to 30 Hours",
      "Connectivity": "Bluetooth 5.3 & 3.5mm",
      "Noise Cancellation": "Hybrid Active NC (4 Microphones)",
      "Weight": "250g",
      "Warranty": "2 Years Manufacturer Warranty"
    },
    inStock: true,
    stockCount: 18,
    isFeatured: true,
    isNew: false,
    isBestseller: true
  },
  {
    id: 2,
    name: "Minimalist Chronograph Leather Watch",
    category: "Fashion",
    price: 189.00,
    oldPrice: 220.00,
    rating: 4.9,
    reviewsCount: 89,
    badge: "Sale",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Crafted with Italian full-grain leather strap and anti-reflective sapphire crystal glass, this timepiece balances classic horological tradition with modern geometric minimalism.",
    specs: {
      "Case Diameter": "40mm",
      "Strap Material": "Genuine Italian Leather",
      "Movement": "Japanese Quartz Movement",
      "Water Resistance": "5 ATM (50 Meters)"
    },
    inStock: true,
    stockCount: 12,
    isFeatured: true,
    isNew: true,
    isBestseller: false
  },
  {
    id: 3,
    name: "Ergonomic Ceramic Coffee Mug Set",
    category: "Home & Living",
    price: 45.00,
    oldPrice: 55.00,
    rating: 4.7,
    reviewsCount: 64,
    badge: "New",
    badgeType: "primary",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Handcrafted ceramic mugs designed for natural palm comfort, optimal heat retention, and a satisfying tactile satin glaze finish.",
    specs: {
      "Capacity": "350ml / 12oz per mug",
      "Dishwasher Safe": "Yes",
      "Microwave Safe": "Yes",
      "Material": "Stoneware Ceramic"
    },
    inStock: true,
    stockCount: 25,
    isFeatured: true,
    isNew: true,
    isBestseller: false
  },
  {
    id: 4,
    name: "Urban Explorer Waterproof Backpack",
    category: "Accessories",
    price: 119.50,
    oldPrice: 140.00,
    rating: 4.6,
    reviewsCount: 112,
    badge: "Bestseller",
    badgeType: "primary",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Featuring dedicated padded laptop protection, weatherproof YKK zippers, hidden anti-theft back pockets, and ergonomic breathable lumbar support.",
    specs: {
      "Capacity": "22 Liters",
      "Laptop Sleeve": "Fits up to 16\" MacBook / PC",
      "Fabric": "900D Recycled Water-Resistant Polyester",
      "Weight": "850g"
    },
    inStock: true,
    stockCount: 15,
    isFeatured: false,
    isNew: false,
    isBestseller: true
  },
  {
    id: 5,
    name: "Ultra-Fast Magnetic Wireless Charger",
    category: "Electronics",
    price: 49.99,
    oldPrice: 65.00,
    rating: 4.5,
    reviewsCount: 78,
    badge: "Sale",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1622445268121-ac11f17a2834?auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1622445268121-ac11f17a2834?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Snap-and-charge magnetic alignment with up to 15W peak output, aircraft-grade aluminum casing, and intelligent temperature safety management.",
    specs: {
      "Output": "15W Fast Charge",
      "Compatibility": "MagSafe & Qi Devices",
      "Cable": "1.5m Braided Nylon Type-C Included"
    },
    inStock: true,
    stockCount: 30,
    isFeatured: false,
    isNew: true,
    isBestseller: false
  },
  {
    id: 6,
    name: "Nordic Ceramic Desk Plant Pot",
    category: "Home & Living",
    price: 32.00,
    oldPrice: 40.00,
    rating: 4.9,
    reviewsCount: 53,
    badge: "Trending",
    badgeType: "trending",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Infuse Scandinavian architectural serenity into your office workspace or living area with this handcrafted terracotta plant vessel.",
    specs: {
      "Dimensions": "15cm x 15cm",
      "Drainage": "Includes removable silicone plug",
      "Material": "Glazed Stoneware"
    },
    inStock: true,
    stockCount: 20,
    isFeatured: true,
    isNew: false,
    isBestseller: false
  },
  {
    id: 7,
    name: "Lumina Smart Fitness Tracker Band",
    category: "Electronics",
    price: 129.00,
    oldPrice: 159.00,
    rating: 4.7,
    reviewsCount: 96,
    badge: "New",
    badgeType: "primary",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Track continuous heart rate, SpO2 blood oxygen, sleep cycles, and over 40 workout modes with an ultra-bright 1.4-inch AMOLED curved display.",
    specs: {
      "Display": "1.4\" AMOLED Curved Touchscreen",
      "Battery": "14 Days Typical Usage",
      "Waterproofing": "5 ATM Water Resistant",
      "Sensors": "Optical Heart Rate, SpO2, Accelerometer"
    },
    inStock: true,
    stockCount: 22,
    isFeatured: false,
    isNew: true,
    isBestseller: false
  },
  {
    id: 8,
    name: "Artisan Italian Mulberry Silk Scarf",
    category: "Fashion",
    price: 75.00,
    oldPrice: 95.00,
    rating: 4.8,
    reviewsCount: 41,
    badge: "Sale",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Printed on 100% pure 19 momme Mulberry silk, this luxuriously soft scarf features hand-rolled hems and timeless botanical motifs.",
    specs: {
      "Material": "100% Mulberry Silk (19 Momme)",
      "Dimensions": "90cm x 90cm",
      "Care": "Dry Clean or Gentle Hand Wash"
    },
    inStock: true,
    stockCount: 10,
    isFeatured: true,
    isNew: false,
    isBestseller: true
  },
  {
    id: 9,
    name: "Aromatherapy Ultrasonic Essential Oil Diffuser",
    category: "Home & Living",
    price: 58.00,
    oldPrice: 70.00,
    rating: 4.6,
    reviewsCount: 83,
    badge: "Trending",
    badgeType: "trending",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Whisper-quiet ultrasonic mist generator with ambient warm LED light ring, automatic shut-off safety sensor, and real wood finish.",
    specs: {
      "Capacity": "300ml Water Tank",
      "Coverage Area": "Up to 350 sq ft",
      "Timer Modes": "1H / 3H / 6H / Continuous ON"
    },
    inStock: true,
    stockCount: 16,
    isFeatured: false,
    isNew: false,
    isBestseller: true
  },
  {
    id: 10,
    name: "Polarized Titanium Sunglasses",
    category: "Fashion",
    price: 135.00,
    oldPrice: 160.00,
    rating: 4.8,
    reviewsCount: 52,
    badge: "Bestseller",
    badgeType: "primary",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Ultralight titanium alloy frames combined with Category 3 TAC polarized lenses offering 100% UV400 protection against intense sunlight glare.",
    specs: {
      "Frame": "Japanese Titanium Alloy",
      "Lenses": "Polarized Triacetate Cellulose (TAC)",
      "UV Rating": "100% UV400 Protection",
      "Weight": "19g"
    },
    inStock: true,
    stockCount: 14,
    isFeatured: false,
    isNew: false,
    isBestseller: true
  },
  {
    id: 11,
    name: "Compact Wireless Mechanical Keyboard",
    category: "Electronics",
    price: 110.00,
    oldPrice: 135.00,
    rating: 4.9,
    reviewsCount: 105,
    badge: "New",
    badgeType: "primary",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Hot-swappable tactile switches, per-key RGB lighting effects, aluminum top plate, and tri-mode connectivity (Bluetooth 5.0, 2.4GHz wireless, USB-C).",
    specs: {
      "Layout": "75% Compact (84 Keys)",
      "Switch Type": "Pre-lubed Tactile Brown Switches",
      "Battery": "4000mAh (Up to 200 Hours RGB Off)",
      "Compatibility": "macOS, Windows, iOS, Android"
    },
    inStock: true,
    stockCount: 19,
    isFeatured: true,
    isNew: true,
    isBestseller: false
  },
  {
    id: 12,
    name: "Handcrafted Leather Cardholder Wallet",
    category: "Accessories",
    price: 42.00,
    oldPrice: 50.00,
    rating: 4.7,
    reviewsCount: 39,
    badge: "Sale",
    badgeType: "sale",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Slim RFID-blocking cardholder crafted from vegetable-tanned full grain leather that develops a rich natural patina over time.",
    specs: {
      "Capacity": "Holds 6 Cards + Central Cash Pocket",
      "Protection": "Integrated RFID Shielding",
      "Material": "Full Grain Vegetable Tanned Leather"
    },
    inStock: true,
    stockCount: 28,
    isFeatured: false,
    isNew: false,
    isBestseller: false
  }
];

const INITIAL_REVIEWS = [
  { id: 1, name: "Sophia Reynolds", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80", rating: 5, date: "2 days ago", text: "The noise canceling on the Aura headphones is unbelievable! Build quality feels incredibly premium and battery easily lasts 3 full workdays." },
  { id: 2, name: "Marcus Chen", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80", rating: 5, date: "1 week ago", text: "Fast delivery, exquisite packaging, and the minimalist leather watch looks even better in person. 10/10 recommend Lumina store!" },
  { id: 3, name: "Emma Watson", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80", rating: 5, date: "2 weeks ago", text: "Customer service resolved my query within minutes. The ceramic coffee mugs are beautifully weighted and look gorgeous on my kitchen island." }
];

const INITIAL_FAQS = [
  { q: "What are your delivery times and shipping costs?", a: "We offer Free Express Global Shipping on all orders over $150. Standard shipping takes 3-5 business days ($15 fee for orders under $150), and Express Shipping takes 1-2 business days ($25)." },
  { q: "What is your return and exchange policy?", a: "We provide a 30-day hassle-free money-back guarantee. If you are not completely satisfied with your purchase, return it in original condition for a full refund or exchange." },
  { q: "Are all physical products covered by a warranty?", a: "Yes! Every hardware and lifestyle product sold on Lumina comes standard with a minimum 2-Year Manufacturer Warranty covering craftsmanship and defects." },
  { q: "How can I track my order status?", a: "Once your order is dispatched, you will receive an email confirmation with a direct tracking link and order reference number." }
];

// --- APPLICATION STATE CONTAINER ---
class AppState {
  constructor() {
    this.products = JSON.parse(localStorage.getItem('lumina_products')) || INITIAL_PRODUCTS;
    this.cart = JSON.parse(localStorage.getItem('lumina_cart')) || [];
    this.wishlist = JSON.parse(localStorage.getItem('lumina_wishlist')) || [];
    this.orders = JSON.parse(localStorage.getItem('lumina_orders')) || [
      { id: "ORD-9821", customer: "Jane Doe", email: "jane@example.com", address: "123 Market St, San Francisco, CA", date: "2026-09-27", itemsCount: 2, subtotal: 294.99, shipping: 0, total: 294.99, status: "Delivered", paymentMethod: "Credit Card" },
      { id: "ORD-9822", customer: "Alex Smith", email: "alex@example.com", address: "456 Pine Ave, New York, NY", date: "2026-09-28", itemsCount: 1, subtotal: 189.00, shipping: 15, total: 204.00, status: "Processing", paymentMethod: "PayPal" }
    ];
    this.appliedCoupon = JSON.parse(localStorage.getItem('lumina_coupon')) || null;
    
    // Page state
    this.currentPage = 'home'; // home, shop, product, cart, checkout, confirmation, about, contact, wishlist, admin
    this.selectedProductId = 1;
    this.searchQuery = '';
    this.selectedCategory = 'All';
    this.selectedRating = 0; // 0 for all, 4 for 4+ stars, 3 for 3+ stars
    this.inStockOnly = false;
    this.sortBy = 'featured'; // featured, newest, low-high, high-low, rating
    this.priceRange = 350;
    this.lastOrder = null;
    
    // UI state toggles
    this.mobileMenuOpen = false;
    this.accountModalOpen = false;
    this.adminTab = 'products'; // products, orders, stats
  }

  save() {
    localStorage.setItem('lumina_products', JSON.stringify(this.products));
    localStorage.setItem('lumina_cart', JSON.stringify(this.cart));
    localStorage.setItem('lumina_wishlist', JSON.stringify(this.wishlist));
    localStorage.setItem('lumina_orders', JSON.stringify(this.orders));
    localStorage.setItem('lumina_coupon', JSON.stringify(this.appliedCoupon));
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
    showToast("Product added to cart!");
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
      showToast("Removed from wishlist");
    } else {
      this.wishlist.push(productId);
      showToast("Added to wishlist!");
    }
    this.save();
  }

  applyCoupon(code) {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'LUMINA10') {
      this.appliedCoupon = { code: 'LUMINA10', discountPercent: 10 };
      this.save();
      showToast("10% Coupon applied successfully!");
      return true;
    } else if (cleanCode === 'WELCOME20') {
      this.appliedCoupon = { code: 'WELCOME20', discountPercent: 20 };
      this.save();
      showToast("20% Welcome Coupon applied!");
      return true;
    } else {
      showToast("Invalid coupon code. Try 'LUMINA10' or 'WELCOME20'", "error");
      return false;
    }
  }

  removeCoupon() {
    this.appliedCoupon = null;
    this.save();
    showToast("Coupon removed");
  }

  getCartTotals(shippingFee = null) {
    const subtotal = this.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const discount = this.appliedCoupon ? (subtotal * (this.appliedCoupon.discountPercent / 100)) : 0;
    
    let shipping = 0;
    if (subtotal > 0) {
      if (shippingFee !== null) {
        shipping = shippingFee;
      } else {
        shipping = subtotal >= 150 ? 0 : 15.00;
      }
    }
    const total = Math.max(0, subtotal - discount + shipping);
    return { subtotal, discount, shipping, total };
  }

  placeOrder(customerData) {
    const shippingFee = customerData.deliveryMethod === 'express' ? 25.00 : (this.getCartTotals().subtotal >= 150 ? 0 : 15.00);
    const totals = this.getCartTotals(shippingFee);
    
    const newOrder = {
      id: "ORD-" + Math.floor(1000 + Math.random() * 9000),
      customer: `${customerData.firstName} ${customerData.lastName}`,
      email: customerData.email,
      phone: customerData.phone || "+1 (555) 019-2834",
      address: `${customerData.address}, ${customerData.city}, ${customerData.zip}`,
      date: new Date().toISOString().split('T')[0],
      items: [...this.cart],
      itemsCount: this.cart.reduce((acc, item) => acc + item.quantity, 0),
      subtotal: totals.subtotal,
      discount: totals.discount,
      shipping: totals.shipping,
      total: totals.total,
      paymentMethod: customerData.payment === 'card' ? 'Credit Card' : (customerData.payment === 'paypal' ? 'PayPal' : 'Cash on Delivery'),
      status: "Processing"
    };

    this.orders.unshift(newOrder);
    this.lastOrder = newOrder;
    this.cart = [];
    this.appliedCoupon = null;
    this.save();
  }

  updateOrderStatus(orderId, status) {
    const ord = this.orders.find(o => o.id === orderId);
    if (ord) {
      ord.status = status;
      this.save();
      showToast(`Order ${orderId} updated to ${status}`);
    }
  }
}

const state = new AppState();

// --- HELPER UTILITIES ---
function formatPrice(amount) {
  return `$${parseFloat(amount || 0).toFixed(2)}`;
}

function renderStars(rating) {
  const fullStars = Math.floor(rating);
  let starsHtml = '';
  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      starsHtml += `<i data-lucide="star" style="fill: var(--accent); color: var(--accent); width: 14px; height: 14px;"></i>`;
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
      ✨ <span>AUTUMN OFFER:</span> Use coupon code <strong>LUMINA10</strong> for 10% OFF + Free Global Express Shipping on orders over $150!
    </div>
    <header class="site-header">
      <div class="container nav-wrapper">
        <button class="mobile-menu-toggle icon-btn" onclick="state.mobileMenuOpen = !state.mobileMenuOpen; renderApp();">
          <i data-lucide="${state.mobileMenuOpen ? 'x' : 'menu'}"></i>
        </button>

        <a href="#" onclick="navigateTo('home'); return false;" class="logo">
          LUMINA <span class="logo-badge">STORE</span>
        </a>

        <div class="search-bar-container">
          <i data-lucide="search" class="search-icon"></i>
          <input 
            type="text" 
            class="search-input" 
            placeholder="Search audio, watches, ceramics, accessories..." 
            value="${state.searchQuery}"
            oninput="state.searchQuery = this.value;"
            onkeydown="if(event.key === 'Enter'){ navigateTo('shop'); }"
          />
        </div>

        <nav>
          <ul class="nav-links">
            <li><a href="#" class="nav-link ${state.currentPage === 'home' ? 'active' : ''}" onclick="navigateTo('home'); return false;">Home</a></li>
            <li><a href="#" class="nav-link ${state.currentPage === 'shop' ? 'active' : ''}" onclick="navigateTo('shop'); return false;">Shop</a></li>
            <li><a href="#" class="nav-link ${state.currentPage === 'about' ? 'active' : ''}" onclick="navigateTo('about'); return false;">About</a></li>
            <li><a href="#" class="nav-link ${state.currentPage === 'contact' ? 'active' : ''}" onclick="navigateTo('contact'); return false;">Contact</a></li>
            <li><a href="#" class="nav-link ${state.currentPage === 'admin' ? 'active' : ''}" onclick="navigateTo('admin'); return false;">Dashboard</a></li>
          </ul>
        </nav>

        <div class="header-actions">
          <button class="icon-btn" title="Account Profile" onclick="toggleAccountModal();">
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

    <!-- Mobile Navigation Drawer -->
    <div class="mobile-drawer ${state.mobileMenuOpen ? 'active' : ''}">
      <div class="mobile-backdrop" onclick="state.mobileMenuOpen = false; renderApp();"></div>
      <div class="mobile-panel">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
          <a href="#" class="logo">LUMINA <span class="logo-badge">STORE</span></a>
          <button class="icon-btn" onclick="state.mobileMenuOpen = false; renderApp();"><i data-lucide="x"></i></button>
        </div>

        <div style="margin-bottom: 1.5rem;">
          <input 
            type="text" 
            class="search-input" 
            placeholder="Search products..." 
            value="${state.searchQuery}"
            oninput="state.searchQuery = this.value;"
            onkeydown="if(event.key === 'Enter'){ state.mobileMenuOpen = false; navigateTo('shop'); }"
          />
        </div>

        <ul class="filter-list" style="gap: 1rem; font-size: 1.05rem;">
          <li><a href="#" onclick="navigateTo('home'); return false;">🏠 Home</a></li>
          <li><a href="#" onclick="navigateTo('shop'); return false;">🛍️ Shop All Products</a></li>
          <li><a href="#" onclick="navigateTo('wishlist'); return false;">❤️ Saved Wishlist (${wishlistCount})</a></li>
          <li><a href="#" onclick="navigateTo('cart'); return false;">🛒 Shopping Bag (${cartCount})</a></li>
          <li><a href="#" onclick="navigateTo('about'); return false;">✨ About Us</a></li>
          <li><a href="#" onclick="navigateTo('contact'); return false;">💬 Contact & FAQ</a></li>
          <li><a href="#" onclick="navigateTo('admin'); return false;">⚙️ Admin Dashboard</a></li>
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
        ${product.badge ? `<span class="product-badge ${product.badgeType || ''}">${product.badge}</span>` : ''}
        ${discountPercent ? `<span class="product-badge sale" style="left: auto; right: 0.75rem;">-${discountPercent}%</span>` : ''}
        
        <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="event.stopPropagation(); state.toggleWishlist(${product.id}); renderApp();" title="Wishlist item">
          <i data-lucide="heart" style="${isWishlisted ? 'fill: var(--danger); color: var(--danger);' : ''}"></i>
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
            <span class="price">${formatPrice(product.price)}</span>
            ${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ''}
          </div>
          <button class="add-cart-btn" onclick="state.addToCart(${product.id}); renderApp();" title="Add to Cart">
            <i data-lucide="plus"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}

// --- HOME PAGE VIEW ---
function renderHomePage() {
  const featured = state.products.filter(p => p.isFeatured).slice(0, 4);
  const newArrivals = state.products.filter(p => p.isNew).slice(0, 4);
  const bestSellers = state.products.filter(p => p.isBestseller).slice(0, 4);

  return `
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container hero-grid">
        <div class="hero-content">
          <div class="hero-badges">
            <span class="hero-tag">✨ Autumn Collection 2026</span>
            <span class="hero-tag">Verified Craftsmanship</span>
          </div>
          <h1>Elevate Daily Living With <span>Curated Essentials</span></h1>
          <p>Discover high-performance noise cancelling audio, timeless leather watches, Scandinavian ceramics, and ergonomic daily carry gear.</p>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <button class="btn btn-primary btn-lg" onclick="navigateTo('shop');">
              Shop Collection <i data-lucide="arrow-right"></i>
            </button>
            <button class="btn btn-outline" style="background: transparent; color: white; border-color: rgba(255,255,255,0.3);" onclick="navigateTo('about');">
              Our Story
            </button>
          </div>
        </div>
        <div class="hero-image-wrapper">
          <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80" alt="Lumina Store Lifestyle" />
        </div>
      </div>
    </section>

    <div class="container">
      <!-- Key Features Grid -->
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon"><i data-lucide="truck"></i></div>
          <div class="feature-info">
            <h4>Free Global Express</h4>
            <p>On all orders over $150</p>
          </div>
        </div>
        <div class="feature-card">
          <div class="feature-icon"><i data-lucide="shield-check"></i></div>
          <div class="feature-info">
            <h4>2-Year Warranty</h4>
            <p>100% authentic product guarantee</p>
          </div>
        </div>
        <div class="feature-card">
          <div class="feature-icon"><i data-lucide="refresh-cw"></i></div>
          <div class="feature-info">
            <h4>30-Day Money Back</h4>
            <p>Hassle-free worldwide returns</p>
          </div>
        </div>
        <div class="feature-card">
          <div class="feature-icon"><i data-lucide="headphones"></i></div>
          <div class="feature-info">
            <h4>24/7 Concierge</h4>
            <p>Dedicated customer care team</p>
          </div>
        </div>
      </div>

      <!-- Categories Section -->
      <div class="section-header">
        <div>
          <h2 class="section-title">Shop by Category</h2>
          <p class="section-subtitle">Explore our handpicked physical products across core categories</p>
        </div>
      </div>
      <div class="categories-grid">
        <div class="category-card" onclick="state.selectedCategory='Electronics'; navigateTo('shop');">
          <img src="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=600&q=80" alt="Electronics" />
          <div class="category-overlay">
            <h3>Electronics</h3>
            <p>Audio, Smart Wearables & Keyboards</p>
          </div>
        </div>
        <div class="category-card" onclick="state.selectedCategory='Fashion'; navigateTo('shop');">
          <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80" alt="Fashion" />
          <div class="category-overlay">
            <h3>Fashion & Apparel</h3>
            <p>Chronographs, Silk & Titanium Specs</p>
          </div>
        </div>
        <div class="category-card" onclick="state.selectedCategory='Home & Living'; navigateTo('shop');">
          <img src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=600&q=80" alt="Home & Living" />
          <div class="category-overlay">
            <h3>Home & Living</h3>
            <p>Ceramics, Diffusers & Planters</p>
          </div>
        </div>
        <div class="category-card" onclick="state.selectedCategory='Accessories'; navigateTo('shop');">
          <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80" alt="Accessories" />
          <div class="category-overlay">
            <h3>Carry & Accessories</h3>
            <p>Waterproof Backpacks & Leather Wallets</p>
          </div>
        </div>
      </div>

      <!-- Featured Products -->
      <div class="section-header">
        <div>
          <h2 class="section-title">Featured Products</h2>
          <p class="section-subtitle">Top curated recommendations for this season</p>
        </div>
        <button class="btn btn-outline btn-sm" onclick="navigateTo('shop');">Explore All <i data-lucide="chevron-right"></i></button>
      </div>
      <div class="product-grid">
        ${featured.map(renderProductCard).join('')}
      </div>

      <!-- New Arrivals -->
      <div class="section-header">
        <div>
          <h2 class="section-title">New Arrivals</h2>
          <p class="section-subtitle">Freshly added physical products just in stock</p>
        </div>
      </div>
      <div class="product-grid">
        ${newArrivals.map(renderProductCard).join('')}
      </div>

      <!-- Promotional Spotlight Banner -->
      <div class="promo-banner">
        <div class="promo-content">
          <span style="background: rgba(255,255,255,0.2); color: white; padding: 0.25rem 0.75rem; border-radius: 99px; font-size: 0.8rem; font-weight: 700;">LIMITED OFFER</span>
          <h2 style="margin-top: 0.5rem;">Aura Wireless Headphones Pro</h2>
          <p>Get up to 15% discount + free velvet travel pouch on the Aura Active Noise Canceling headset.</p>
          <button class="btn btn-secondary" onclick="navigateTo('product', 1);">Shop Offer Now</button>
        </div>
        <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80" alt="Promo Product" style="border-radius: var(--radius-lg); max-width: 320px; box-shadow: var(--shadow-xl);" />
      </div>

      <!-- Best Sellers -->
      <div class="section-header">
        <div>
          <h2 class="section-title">Best Sellers</h2>
          <p class="section-subtitle">Most popular items loved by over 50,000 customers worldwide</p>
        </div>
      </div>
      <div class="product-grid">
        ${bestSellers.map(renderProductCard).join('')}
      </div>

      <!-- Reviews & Testimonials -->
      <div class="section-header">
        <div>
          <h2 class="section-title">Customer Feedback</h2>
          <p class="section-subtitle">Read authentic reviews from verified Lumina buyers</p>
        </div>
      </div>
      <div class="reviews-grid">
        ${INITIAL_REVIEWS.map(r => `
          <div class="review-card">
            <div class="review-header">
              <img src="${r.avatar}" alt="${r.name}" class="review-avatar" />
              <div>
                <div class="review-author">${r.name}</div>
                <div class="review-date">${r.date} • Verified Buyer</div>
              </div>
            </div>
            <div style="margin-bottom: 0.75rem;">${renderStars(r.rating)}</div>
            <p class="review-text">"${r.text}"</p>
          </div>
        `).join('')}
      </div>

      <!-- Newsletter Subscription -->
      <div class="newsletter-section">
        <div class="newsletter-content">
          <h2>Join the Lumina Insiders</h2>
          <p>Subscribe to receive secret drops, early sale invites, and 10% off your initial purchase.</p>
          <form class="newsletter-form" onsubmit="event.preventDefault(); showToast('Thank you for subscribing! Check your inbox for your 10% off code.'); this.reset();">
            <input type="email" placeholder="Enter your email address..." required />
            <button type="submit" class="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
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
    const matchesPrice = p.price <= state.priceRange;
    const matchesRating = state.selectedRating === 0 || p.rating >= state.selectedRating;
    const matchesStock = !state.inStockOnly || p.inStock;

    return matchesSearch && matchesCat && matchesPrice && matchesRating && matchesStock;
  });

  // Sorting logic
  if (state.sortBy === 'newest') filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
  if (state.sortBy === 'low-high') filtered.sort((a, b) => a.price - b.price);
  if (state.sortBy === 'high-low') filtered.sort((a, b) => b.price - a.price);
  if (state.sortBy === 'rating') filtered.sort((a, b) => b.rating - a.rating);

  const categories = ['All', 'Electronics', 'Fashion', 'Home & Living', 'Accessories'];

  return `
    <div class="container" style="padding-top: 2rem;">
      <div class="shop-layout">
        <!-- Sidebar Filter Panel -->
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

          <!-- Price Range Slider -->
          <div class="filter-group">
            <h3 class="filter-title">Max Price: ${formatPrice(state.priceRange)}</h3>
            <input 
              type="range" 
              min="30" 
              max="350" 
              step="10" 
              value="${state.priceRange}" 
              style="width: 100%; accent-color: var(--primary);"
              oninput="state.priceRange = Number(this.value); document.getElementById('price-val-label').innerText = formatPrice(this.value);"
              onchange="renderApp();"
            />
            <div style="display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--text-muted); margin-top: 0.5rem;">
              <span>$30</span>
              <span id="price-val-label">${formatPrice(state.priceRange)}</span>
            </div>
          </div>

          <!-- Rating Filter -->
          <div class="filter-group">
            <h3 class="filter-title">Minimum Rating</h3>
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
              <label style="font-size: 0.875rem; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
                <input type="radio" name="ratingFilter" ${state.selectedRating === 0 ? 'checked' : ''} onclick="state.selectedRating=0; renderApp();" /> All Ratings
              </label>
              <label style="font-size: 0.875rem; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
                <input type="radio" name="ratingFilter" ${state.selectedRating === 4.8 ? 'checked' : ''} onclick="state.selectedRating=4.8; renderApp();" /> 4.8★ & Above
              </label>
              <label style="font-size: 0.875rem; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
                <input type="radio" name="ratingFilter" ${state.selectedRating === 4.5 ? 'checked' : ''} onclick="state.selectedRating=4.5; renderApp();" /> 4.5★ & Above
              </label>
            </div>
          </div>

          <!-- In Stock Only -->
          <div class="filter-group">
            <label style="font-size: 0.875rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 0.5rem;">
              <input type="checkbox" ${state.inStockOnly ? 'checked' : ''} onchange="state.inStockOnly = this.checked; renderApp();" /> In-Stock Items Only
            </label>
          </div>

          <button class="btn btn-outline btn-full btn-sm" onclick="state.selectedCategory='All'; state.priceRange=350; state.selectedRating=0; state.inStockOnly=false; state.searchQuery=''; renderApp();">
            Reset All Filters
          </button>
        </aside>

        <!-- Main Product Results Grid -->
        <main>
          <div class="shop-topbar">
            <span style="font-size: 0.9rem; color: var(--text-muted);">
              Showing <strong>${filtered.length}</strong> physical product${filtered.length !== 1 ? 's' : ''}
              ${state.searchQuery ? `for "<strong>${state.searchQuery}</strong>"` : ''}
            </span>

            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <label style="font-size: 0.875rem; font-weight: 700;">Sort By:</label>
              <select class="sort-select" onchange="state.sortBy = this.value; renderApp();">
                <option value="featured" ${state.sortBy === 'featured' ? 'selected' : ''}>Featured</option>
                <option value="newest" ${state.sortBy === 'newest' ? 'selected' : ''}>Newest Arrivals</option>
                <option value="low-high" ${state.sortBy === 'low-high' ? 'selected' : ''}>Price: Low to High</option>
                <option value="high-low" ${state.sortBy === 'high-low' ? 'selected' : ''}>Price: High to Low</option>
                <option value="rating" ${state.sortBy === 'rating' ? 'selected' : ''}>Highest Customer Rating</option>
              </select>
            </div>
          </div>

          ${filtered.length === 0 ? `
            <div style="text-align: center; padding: 4rem 2rem; background: white; border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
              <i data-lucide="package-search" style="width: 56px; height: 56px; color: var(--text-light); margin-bottom: 1rem;"></i>
              <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 0.5rem;">No Matching Products Found</h3>
              <p style="color: var(--text-muted); margin-bottom: 1.5rem;">Try adjusting your search criteria, category filters, or price slider.</p>
              <button class="btn btn-primary" onclick="state.selectedCategory='All'; state.priceRange=350; state.selectedRating=0; state.inStockOnly=false; state.searchQuery=''; renderApp();">Reset All Filters</button>
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

// --- PRODUCT DETAILS PAGE VIEW ---
function renderProductDetailsPage() {
  const product = state.products.find(p => p.id === state.selectedProductId) || state.products[0];
  const isWishlisted = state.wishlist.includes(product.id);
  const related = state.products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);
  const discountPercent = product.oldPrice ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : null;

  return `
    <div class="container" style="padding-top: 2.5rem;">
      <div class="product-details-container">
        <!-- Gallery Section -->
        <div class="product-gallery">
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

        <!-- Details Info Section -->
        <div class="product-info">
          <div style="display: flex; justify-content: space-between; align-items: flex-start;">
            <span class="product-category">${product.category}</span>
            ${discountPercent ? `<span class="product-badge sale" style="position: static;">SAVE ${discountPercent}%</span>` : ''}
          </div>

          <h1 style="margin-top: 0.25rem;">${product.name}</h1>
          
          <div class="product-meta">
            ${renderStars(product.rating)}
            <span style="font-weight: 700; font-size: 0.95rem;">${product.rating}</span>
            <span style="color: var(--text-muted); font-size: 0.9rem;">(${product.reviewsCount} customer reviews)</span>
            <span style="color: var(--success); font-weight: 700; margin-left: auto; display: flex; align-items: center; gap: 0.25rem;">
              <i data-lucide="check-circle" style="width: 16px;"></i> In Stock (${product.stockCount || 15} available)
            </span>
          </div>

          <div class="price-group" style="margin-bottom: 1.5rem;">
            <span class="price" style="font-size: 2.25rem;">${formatPrice(product.price)}</span>
            ${product.oldPrice ? `<span class="old-price" style="font-size: 1.25rem;">${formatPrice(product.oldPrice)}</span>` : ''}
          </div>

          <p style="color: var(--text-muted); line-height: 1.65; margin-bottom: 1.5rem; font-size: 1rem;">${product.description}</p>

          <!-- Specifications Table -->
          <div class="product-specs">
            <h4 style="font-weight: 800; font-size: 0.95rem; margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.03em;">Product Specifications</h4>
            ${Object.entries(product.specs || {}).map(([key, val]) => `
              <div class="spec-row">
                <span class="spec-key">${key}</span>
                <span class="spec-val">${val}</span>
              </div>
            `).join('')}
          </div>

          <!-- Action Buttons -->
          <div style="display: flex; align-items: center; gap: 1rem; margin-top: 2rem; flex-wrap: wrap;">
            <div class="qty-selector">
              <button class="qty-btn" onclick="let el=document.getElementById('p-detail-qty'); el.innerText=Math.max(1, parseInt(el.innerText)-1);">-</button>
              <span id="p-detail-qty" class="qty-val">1</span>
              <button class="qty-btn" onclick="let el=document.getElementById('p-detail-qty'); el.innerText=parseInt(el.innerText)+1;">+</button>
            </div>
            
            <button class="btn btn-primary" style="flex: 1; min-width: 180px;" onclick="let qty=parseInt(document.getElementById('p-detail-qty').innerText); state.addToCart(${product.id}, qty); renderApp();">
              <i data-lucide="shopping-bag"></i> Add to Cart
            </button>

            <button class="btn btn-secondary" onclick="let qty=parseInt(document.getElementById('p-detail-qty').innerText); state.addToCart(${product.id}, qty); navigateTo('checkout');">
              Buy Now
            </button>

            <button class="btn btn-outline" onclick="state.toggleWishlist(${product.id}); renderApp();" title="Wishlist item">
              <i data-lucide="heart" style="${isWishlisted ? 'fill: var(--danger); color: var(--danger);' : ''}"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Customer Reviews & Submission -->
      <div style="background: white; padding: 2.5rem; border-radius: var(--radius-xl); border: 1px solid var(--border-color); margin-bottom: 4rem;">
        <h3 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 1.5rem;">Customer Reviews (${product.reviewsCount})</h3>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; margin-bottom: 2rem;">
          <div>
            ${INITIAL_REVIEWS.slice(0, 2).map(r => `
              <div style="border-bottom: 1px solid var(--border-color); padding-bottom: 1.25rem; margin-bottom: 1.25rem;">
                <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
                  <img src="${r.avatar}" style="width: 36px; height: 36px; border-radius: 50%;" />
                  <div>
                    <div style="font-weight: 700; font-size: 0.9rem;">${r.name}</div>
                    <div style="font-size: 0.75rem; color: var(--text-light);">${r.date}</div>
                  </div>
                </div>
                ${renderStars(r.rating)}
                <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 0.5rem;">"${r.text}"</p>
              </div>
            `).join('')}
          </div>

          <!-- Write a Review Form -->
          <div style="background: var(--bg-alt); padding: 1.5rem; border-radius: var(--radius-lg);">
            <h4 style="font-weight: 700; margin-bottom: 1rem;">Write a Review</h4>
            <form onsubmit="event.preventDefault(); showToast('Thank you! Your review has been submitted.'); this.reset();">
              <div class="form-group" style="margin-bottom: 0.75rem;">
                <label>Your Name</label>
                <input type="text" required placeholder="John Doe" />
              </div>
              <div class="form-group" style="margin-bottom: 0.75rem;">
                <label>Rating</label>
                <select required style="padding: 0.6rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
                  <option value="5">★★★★★ (5/5)</option>
                  <option value="4">★★★★☆ (4/5)</option>
                  <option value="3">★★★☆☆ (3/5)</option>
                </select>
              </div>
              <div class="form-group" style="margin-bottom: 1rem;">
                <label>Review Comment</label>
                <textarea rows="3" required placeholder="Share your experience with this product..."></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-sm">Submit Review</button>
            </form>
          </div>
        </div>
      </div>

      <!-- Related Products Section -->
      ${related.length > 0 ? `
        <div class="section-header">
          <div>
            <h2 class="section-title">Related Products</h2>
            <p class="section-subtitle">You might also be interested in these complementary items</p>
          </div>
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
  const freeShippingThreshold = 150;
  const amountNeeded = Math.max(0, freeShippingThreshold - totals.subtotal);
  const progressPercent = Math.min(100, (totals.subtotal / freeShippingThreshold) * 100);

  if (state.cart.length === 0) {
    return `
      <div class="container" style="padding: 5rem 1.5rem; text-align: center;">
        <div style="max-width: 440px; margin: 0 auto; background: white; padding: 3.5rem 2rem; border-radius: var(--radius-xl); border: 1px solid var(--border-color); box-shadow: var(--shadow-md);">
          <i data-lucide="shopping-bag" style="width: 64px; height: 64px; color: var(--text-light); margin-bottom: 1.5rem;"></i>
          <h2 style="font-size: 1.75rem; font-weight: 800; color: var(--secondary);">Your Shopping Bag is Empty</h2>
          <p style="color: var(--text-muted); margin: 0.75rem 0 2rem; font-size: 0.95rem;">Explore our curated physical collection and discover modern essentials designed for daily living.</p>
          <button class="btn btn-primary btn-full btn-lg" onclick="navigateTo('shop');">Start Shopping</button>
        </div>
      </div>
    `;
  }

  return `
    <div class="container" style="padding-top: 2.5rem;">
      <h1 style="font-size: 2.25rem; font-weight: 800; margin-bottom: 2rem;">Shopping Bag (${state.cart.length} item${state.cart.length > 1 ? 's' : ''})</h1>
      
      <div class="cart-layout">
        <!-- Cart Items List -->
        <div>
          <!-- Free Shipping Progress Tracker -->
          <div style="background: white; padding: 1.25rem; border-radius: var(--radius-lg); border: 1px solid var(--border-color); margin-bottom: 1.5rem;">
            <div style="display: flex; justify-content: space-between; font-size: 0.9rem; font-weight: 700;">
              <span>🚚 Free Worldwide Express Shipping</span>
              <span>${amountNeeded === 0 ? 'Qualified!' : `Add ${formatPrice(amountNeeded)} more`}</span>
            </div>
            <div class="shipping-progress">
              <div class="shipping-progress-bar" style="width: ${progressPercent}%;"></div>
            </div>
            <p style="font-size: 0.8rem; color: var(--text-muted);">Orders over $150 qualify for automatic zero shipping fees at checkout.</p>
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
                    <div class="cart-product-item">
                      <img src="${item.image}" alt="${item.name}" class="cart-product-img" />
                      <div>
                        <h4 style="font-size: 0.95rem; font-weight: 700; cursor: pointer;" onclick="navigateTo('product', ${item.id});">${item.name}</h4>
                        <span style="font-size: 0.8rem; color: var(--text-muted);">${item.category}</span>
                      </div>
                    </div>
                  </td>
                  <td style="font-weight: 700;">${formatPrice(item.price)}</td>
                  <td>
                    <div class="qty-selector">
                      <button class="qty-btn" onclick="state.updateQuantity(${item.id}, ${item.quantity - 1}); renderApp();">-</button>
                      <span class="qty-val">${item.quantity}</span>
                      <button class="qty-btn" onclick="state.updateQuantity(${item.id}, ${item.quantity + 1}); renderApp();">+</button>
                    </div>
                  </td>
                  <td style="font-weight: 800; color: var(--secondary);">${formatPrice(item.price * item.quantity)}</td>
                  <td>
                    <button class="icon-btn" onclick="state.removeFromCart(${item.id}); renderApp();" title="Remove item">
                      <i data-lucide="trash-2" style="color: var(--danger);"></i>
                    </button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <!-- Summary & Checkout Sidebar -->
        <div class="order-summary-card">
          <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 1.25rem;">Order Summary</h3>
          
          <div class="summary-row">
            <span>Subtotal</span>
            <span style="font-weight: 700; color: var(--secondary);">${formatPrice(totals.subtotal)}</span>
          </div>

          ${state.appliedCoupon ? `
            <div class="summary-row" style="color: var(--success);">
              <span>Discount (${state.appliedCoupon.code})</span>
              <span style="font-weight: 700;">-${formatPrice(totals.discount)}</span>
            </div>
          ` : ''}

          <div class="summary-row">
            <span>Shipping</span>
            <span style="font-weight: 700; color: var(--secondary);">${totals.shipping === 0 ? '<span style="color:var(--success)">FREE</span>' : formatPrice(totals.shipping)}</span>
          </div>

          <!-- Coupon Code Input Form -->
          <div style="margin: 1.25rem 0;">
            <div style="display: flex; gap: 0.5rem;">
              <input type="text" id="coupon-input" placeholder="Promo Code (LUMINA10)" style="flex: 1; padding: 0.6rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); font-size: 0.85rem;" />
              <button class="btn btn-outline btn-sm" onclick="state.applyCoupon(document.getElementById('coupon-input').value); renderApp();">Apply</button>
            </div>
            ${state.appliedCoupon ? `
              <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.5rem; font-size: 0.8rem; color: var(--success);">
                <span>✓ ${state.appliedCoupon.discountPercent}% Discount Applied</span>
                <a href="#" onclick="state.removeCoupon(); renderApp(); return false;" style="color: var(--danger); text-decoration: underline;">Remove</a>
              </div>
            ` : ''}
          </div>

          <div class="summary-row total">
            <span>Total Amount</span>
            <span>${formatPrice(totals.total)}</span>
          </div>

          <button class="btn btn-primary btn-full btn-lg" style="margin-top: 1.5rem;" onclick="navigateTo('checkout');">
            Proceed to Checkout <i data-lucide="arrow-right"></i>
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
      <h1 style="font-size: 2.25rem; font-weight: 800; margin-bottom: 2rem;">Secure Checkout</h1>

      <form onsubmit="event.preventDefault(); handleCheckoutSubmit(this);">
        <div class="checkout-layout">
          <div>
            <!-- Step 1: Customer Contact -->
            <div class="form-section">
              <h3 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.5rem;">
                <i data-lucide="user" style="color: var(--primary);"></i> 1. Customer Information
              </h3>
              
              <div class="form-grid">
                <div class="form-group">
                  <label>First Name *</label>
                  <input type="text" name="firstName" required placeholder="Jane" />
                </div>
                <div class="form-group">
                  <label>Last Name *</label>
                  <input type="text" name="lastName" required placeholder="Doe" />
                </div>
                <div class="form-group">
                  <label>Email Address *</label>
                  <input type="email" name="email" required placeholder="jane.doe@example.com" />
                </div>
                <div class="form-group">
                  <label>Phone Number *</label>
                  <input type="tel" name="phone" required placeholder="+1 (555) 019-2834" />
                </div>
              </div>
            </div>

            <!-- Step 2: Shipping Address -->
            <div class="form-section">
              <h3 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.5rem;">
                <i data-lucide="map-pin" style="color: var(--primary);"></i> 2. Shipping Address
              </h3>

              <div class="form-grid">
                <div class="form-group full">
                  <label>Street Address *</label>
                  <input type="text" name="address" required placeholder="742 Evergreen Terrace, Suite 400" />
                </div>
                <div class="form-group">
                  <label>City *</label>
                  <input type="text" name="city" required placeholder="San Francisco" />
                </div>
                <div class="form-group">
                  <label>Postal / Zip Code *</label>
                  <input type="text" name="zip" required placeholder="94107" />
                </div>
              </div>
            </div>

            <!-- Step 3: Delivery Options -->
            <div class="form-section">
              <h3 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.5rem;">
                <i data-lucide="truck" style="color: var(--primary);"></i> 3. Delivery Speed
              </h3>

              <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                <label class="radio-card">
                  <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <input type="radio" name="deliveryMethod" value="standard" checked />
                    <div>
                      <div style="font-weight: 700;">Standard Courier (3-5 Business Days)</div>
                      <div style="font-size: 0.8rem; color: var(--text-muted);">Delivered via FedEx / DHL</div>
                    </div>
                  </div>
                  <span style="font-weight: 800;">${totals.subtotal >= 150 ? 'FREE' : '$15.00'}</span>
                </label>

                <label class="radio-card">
                  <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <input type="radio" name="deliveryMethod" value="express" />
                    <div>
                      <div style="font-weight: 700;">Express Priority (1-2 Business Days)</div>
                      <div style="font-size: 0.8rem; color: var(--text-muted);">Guaranteed priority dispatch</div>
                    </div>
                  </div>
                  <span style="font-weight: 800;">$25.00</span>
                </label>
              </div>
            </div>

            <!-- Step 4: Payment Method -->
            <div class="form-section">
              <h3 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.5rem;">
                <i data-lucide="credit-card" style="color: var(--primary);"></i> 4. Payment Options
              </h3>

              <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem;">
                <label class="radio-card">
                  <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <input type="radio" name="payment" value="card" checked onclick="document.getElementById('card-inputs').style.display='block';" />
                    <span style="font-weight: 700;">Credit / Debit Card (Visa, Mastercard, Amex)</span>
                  </div>
                  <i data-lucide="shield-check" style="color: var(--success);"></i>
                </label>

                <div id="card-inputs" style="background: var(--bg-alt); padding: 1.25rem; border-radius: var(--radius-md); margin-top: -0.25rem;">
                  <div class="form-grid">
                    <div class="form-group full">
                      <label>Card Number</label>
                      <input type="text" placeholder="4532 •••• •••• 8892" />
                    </div>
                    <div class="form-group">
                      <label>Expiry Date</label>
                      <input type="text" placeholder="08 / 28" />
                    </div>
                    <div class="form-group">
                      <label>CVC / CVV</label>
                      <input type="password" placeholder="•••" maxlength="4" />
                    </div>
                  </div>
                </div>

                <label class="radio-card">
                  <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <input type="radio" name="payment" value="paypal" onclick="document.getElementById('card-inputs').style.display='none';" />
                    <span style="font-weight: 700;">PayPal Express Checkout</span>
                  </div>
                </label>

                <label class="radio-card">
                  <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <input type="radio" name="payment" value="cod" onclick="document.getElementById('card-inputs').style.display='none';" />
                    <span style="font-weight: 700;">Cash on Delivery (COD)</span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <!-- Right Sidebar Order Summary -->
          <div>
            <div class="order-summary-card">
              <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 1.25rem;">Order Review</h3>

              <div style="max-height: 260px; overflow-y: auto; margin-bottom: 1.5rem; display: flex; flex-direction: column; gap: 1rem;">
                ${state.cart.map(item => `
                  <div style="display: flex; align-items: center; justify-content: space-between; gap: 0.75rem;">
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                      <img src="${item.image}" style="width: 48px; height: 48px; border-radius: var(--radius-sm); object-fit: cover;" />
                      <div>
                        <div style="font-size: 0.875rem; font-weight: 700; max-width: 180px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.name}</div>
                        <div style="font-size: 0.8rem; color: var(--text-muted);">Qty: ${item.quantity} × ${formatPrice(item.price)}</div>
                      </div>
                    </div>
                    <span style="font-weight: 800; font-size: 0.9rem;">${formatPrice(item.price * item.quantity)}</span>
                  </div>
                `).join('')}
              </div>

              <div class="summary-row">
                <span>Subtotal</span>
                <span>${formatPrice(totals.subtotal)}</span>
              </div>
              ${state.appliedCoupon ? `
                <div class="summary-row" style="color: var(--success);">
                  <span>Discount (${state.appliedCoupon.code})</span>
                  <span>-${formatPrice(totals.discount)}</span>
                </div>
              ` : ''}
              <div class="summary-row">
                <span>Estimated Shipping</span>
                <span>${totals.shipping === 0 ? 'FREE' : formatPrice(totals.shipping)}</span>
              </div>
              <div class="summary-row total">
                <span>Grand Total</span>
                <span>${formatPrice(totals.total)}</span>
              </div>

              <button type="submit" class="btn btn-primary btn-full btn-lg" style="margin-top: 1.5rem;">
                Place Order Now <i data-lucide="check-circle"></i>
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
    <div class="container" style="padding: 4rem 1.5rem; text-align: center;">
      <div style="max-width: 640px; margin: 0 auto; background: white; padding: 3.5rem 2.5rem; border-radius: var(--radius-xl); border: 1px solid var(--border-color); box-shadow: var(--shadow-lg);">
        <div style="width: 72px; height: 72px; background: var(--success-light); color: var(--success); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem;">
          <i data-lucide="check" style="width: 40px; height: 40px;"></i>
        </div>
        
        <h1 style="font-size: 2.25rem; font-weight: 800; color: var(--secondary); margin-bottom: 0.5rem;">Order Confirmed!</h1>
        <p style="color: var(--text-muted); font-size: 1rem; margin-bottom: 2rem;">Order reference <strong>#${order.id}</strong> has been successfully placed.</p>

        <div style="background: var(--bg-alt); padding: 1.75rem; border-radius: var(--radius-lg); text-align: left; margin-bottom: 2rem;">
          <h4 style="margin-bottom: 1rem; font-weight: 800; font-size: 1.05rem;">Order Summary Details</h4>
          
          <div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 0.5rem;">
            <span style="color: var(--text-muted);">Customer:</span>
            <strong>${order.customer}</strong>
          </div>
          <div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 0.5rem;">
            <span style="color: var(--text-muted);">Delivery Address:</span>
            <strong>${order.address}</strong>
          </div>
          <div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 0.5rem;">
            <span style="color: var(--text-muted);">Payment Method:</span>
            <strong>${order.paymentMethod || 'Credit Card'}</strong>
          </div>
          <div style="display: flex; justify-content: space-between; font-size: 0.9rem; border-top: 1px dashed var(--border-color); padding-top: 0.75rem; margin-top: 0.75rem;">
            <span style="color: var(--text-muted);">Total Paid:</span>
            <strong style="color: var(--primary); font-size: 1.1rem;">${formatPrice(order.total)}</strong>
          </div>
        </div>

        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <button class="btn btn-primary" onclick="navigateTo('home');">Continue Shopping</button>
          <button class="btn btn-outline" onclick="navigateTo('admin');">View in Dashboard</button>
        </div>
      </div>
    </div>
  `;
}

// --- WISHLIST VIEW ---
function renderWishlistPage() {
  const wishlistedProducts = state.products.filter(p => state.wishlist.includes(p.id));

  return `
    <div class="container" style="padding-top: 2.5rem;">
      <h1 style="font-size: 2.25rem; font-weight: 800; margin-bottom: 0.5rem;">My Saved Wishlist (${wishlistedProducts.length})</h1>
      <p style="color: var(--text-muted); margin-bottom: 2rem;">Save your favorite physical items and move them to your bag anytime.</p>

      ${wishlistedProducts.length === 0 ? `
        <div style="text-align: center; padding: 5rem 2rem; background: white; border-radius: var(--radius-xl); border: 1px solid var(--border-color); max-width: 500px; margin: 0 auto;">
          <i data-lucide="heart" style="width: 56px; height: 56px; color: var(--text-light); margin-bottom: 1.25rem;"></i>
          <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 0.5rem;">Your Wishlist is Empty</h3>
          <p style="color: var(--text-muted); margin-bottom: 2rem;">Tap the heart icon on any product card while browsing to save it here.</p>
          <button class="btn btn-primary" onclick="navigateTo('shop');">Explore Shop</button>
        </div>
      ` : `
        <div class="product-grid">
          ${wishlistedProducts.map(renderProductCard).join('')}
        </div>
      `}
    </div>
  `;
}

// --- ABOUT PAGE VIEW ---
function renderAboutPage() {
  return `
    <div class="container" style="padding-top: 3rem;">
      <div style="max-width: 840px; margin: 0 auto; text-align: center; margin-bottom: 4rem;">
        <span class="hero-tag" style="background: var(--primary-light); color: var(--primary);">OUR BRAND STORY</span>
        <h1 style="font-size: 3rem; font-weight: 800; margin: 0.75rem 0 1rem; line-height: 1.15;">Crafting Everyday Elegance & Perfection</h1>
        <p style="font-size: 1.15rem; color: var(--text-muted); line-height: 1.7;">
          Lumina was founded on a simple principle: physical items in our daily lives should combine functional perfection with timeless, modern aesthetic minimalism.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3.5rem; align-items: center; margin-bottom: 5rem;">
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" style="border-radius: var(--radius-xl); width: 100%; box-shadow: var(--shadow-xl);" />
        <div>
          <h2 style="font-size: 2rem; font-weight: 800; margin-bottom: 1rem;">Our Mission & Values</h2>
          <p style="color: var(--text-muted); line-height: 1.7; margin-bottom: 1.5rem;">
            Every single hardware device, ceramic set, or leather accessory hosted in our catalog undergoes rigorous 50-point durability and material safety checks. We source directly from ethical artisans and precision factories.
          </p>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
            <div style="background: white; padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
              <h3 style="font-size: 1.75rem; font-weight: 800; color: var(--primary);">50,000+</h3>
              <p style="font-size: 0.85rem; color: var(--text-muted);">Delighted Worldwide Buyers</p>
            </div>
            <div style="background: white; padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
              <h3 style="font-size: 1.75rem; font-weight: 800; color: var(--primary);">99.4%</h3>
              <p style="font-size: 0.85rem; color: var(--text-muted);">5-Star Satisfaction Rate</p>
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
      <div style="max-width: 960px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 3.5rem;">
          <h1 style="font-size: 2.75rem; font-weight: 800;">Get in Touch With Us</h1>
          <p style="color: var(--text-muted); font-size: 1.05rem;">We are here to assist with product inquiries, order tracking, and custom requests.</p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1.8fr; gap: 2.5rem; margin-bottom: 4rem;">
          <!-- Contact Info Column -->
          <div style="background: white; padding: 2rem; border-radius: var(--radius-xl); border: 1px solid var(--border-color);">
            <div style="margin-bottom: 1.75rem;">
              <div style="width: 40px; height: 40px; background: var(--primary-light); color: var(--primary); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; margin-bottom: 0.75rem;">
                <i data-lucide="mail"></i>
              </div>
              <h4 style="font-weight: 700; margin-bottom: 0.25rem;">Email Support</h4>
              <p style="font-size: 0.9rem; color: var(--text-muted);">support@luminastore.com</p>
            </div>

            <div style="margin-bottom: 1.75rem;">
              <div style="width: 40px; height: 40px; background: var(--primary-light); color: var(--primary); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; margin-bottom: 0.75rem;">
                <i data-lucide="phone"></i>
              </div>
              <h4 style="font-weight: 700; margin-bottom: 0.25rem;">Customer Hotline</h4>
              <p style="font-size: 0.9rem; color: var(--text-muted);">+1 (800) 555-0199 (Mon-Fri 9am-6pm PST)</p>
            </div>

            <div>
              <div style="width: 40px; height: 40px; background: var(--primary-light); color: var(--primary); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; margin-bottom: 0.75rem;">
                <i data-lucide="map-pin"></i>
              </div>
              <h4 style="font-weight: 700; margin-bottom: 0.25rem;">Global Flagship HQ</h4>
              <p style="font-size: 0.9rem; color: var(--text-muted);">742 Evergreen Terrace, San Francisco, CA 94107</p>
            </div>
          </div>

          <!-- Contact Form -->
          <form style="background: white; padding: 2rem; border-radius: var(--radius-xl); border: 1px solid var(--border-color);" onsubmit="event.preventDefault(); showToast('Message received! Our team will respond within 24 hours.'); this.reset();">
            <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 1.25rem;">Send Us a Message</h3>
            <div class="form-grid">
              <div class="form-group">
                <label>Your Name *</label>
                <input type="text" required placeholder="Alex Morgan" />
              </div>
              <div class="form-group">
                <label>Your Email *</label>
                <input type="email" required placeholder="alex@example.com" />
              </div>
              <div class="form-group full">
                <label>Subject</label>
                <input type="text" placeholder="Question regarding order or product" />
              </div>
              <div class="form-group full">
                <label>Message *</label>
                <textarea rows="4" required placeholder="How can our support team assist you today?"></textarea>
              </div>
            </div>
            <button class="btn btn-primary" style="margin-top: 1.25rem;" type="submit">Send Message</button>
          </form>
        </div>

        <!-- FAQ Section -->
        <div style="margin-bottom: 4rem;">
          <h2 style="font-size: 2rem; font-weight: 800; text-align: center;">Frequently Asked Questions</h2>
          <div class="faq-container">
            ${INITIAL_FAQS.map((faq, i) => `
              <div class="faq-item ${i === 0 ? 'open' : ''}">
                <div class="faq-question" onclick="this.parentElement.classList.toggle('open');">
                  <span>${faq.q}</span>
                  <i data-lucide="chevron-down" style="width: 18px;"></i>
                </div>
                <div class="faq-answer">
                  <p>${faq.a}</p>
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
      <h1 style="font-size: 2.25rem; font-weight: 800; margin-bottom: 2rem;">Store Admin Dashboard</h1>

      <div class="admin-layout">
        <!-- Sidebar Navigation -->
        <aside class="admin-sidebar">
          <ul class="admin-menu">
            <li class="admin-menu-item ${state.adminTab === 'products' ? 'active' : ''}" onclick="state.adminTab='products'; renderApp();">
              <i data-lucide="box"></i> Catalog Management
            </li>
            <li class="admin-menu-item ${state.adminTab === 'orders' ? 'active' : ''}" onclick="state.adminTab='orders'; renderApp();">
              <i data-lucide="shopping-bag"></i> Customer Orders
            </li>
          </ul>
        </aside>

        <!-- Main Content View -->
        <main>
          <!-- Sales Overview Cards -->
          <div class="stats-grid">
            <div class="stat-card">
              <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 600;">Total Store Revenue</span>
              <div class="stat-val" style="color: var(--primary);">${formatPrice(totalRevenue)}</div>
            </div>
            <div class="stat-card">
              <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 600;">Total Orders</span>
              <div class="stat-val">${state.orders.length}</div>
            </div>
            <div class="stat-card">
              <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 600;">Products in Catalog</span>
              <div class="stat-val">${state.products.length}</div>
            </div>
            <div class="stat-card">
              <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 600;">Avg Order Value</span>
              <div class="stat-val">${formatPrice(avgOrderVal)}</div>
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
    <div style="background: white; padding: 1.75rem; border-radius: var(--radius-xl); border: 1px solid var(--border-color);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
        <div>
          <h3 style="font-size: 1.25rem; font-weight: 800;">Catalog Management</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted);">Add, edit, or remove physical storefront inventory.</p>
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
              <th>Stock Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${state.products.map(p => `
              <tr>
                <td>#${p.id}</td>
                <td style="font-weight: 700;">
                  <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <img src="${p.image}" style="width: 36px; height: 36px; border-radius: var(--radius-sm); object-fit: cover;" />
                    <span>${p.name}</span>
                  </div>
                </td>
                <td><span style="background: var(--bg-alt); padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.8rem; font-weight: 600;">${p.category}</span></td>
                <td style="font-weight: 800;">${formatPrice(p.price)}</td>
                <td>
                  <span style="color: ${p.inStock ? 'var(--success)' : 'var(--danger)'}; font-weight: 700; font-size: 0.85rem;">
                    ${p.inStock ? `In Stock (${p.stockCount || 10})` : 'Out of Stock'}
                  </span>
                </td>
                <td>
                  <div style="display: flex; gap: 0.5rem;">
                    <button class="icon-btn" onclick="showEditProductModal(${p.id});" title="Edit Product"><i data-lucide="edit-2" style="width: 16px;"></i></button>
                    <button class="icon-btn" onclick="deleteProduct(${p.id});" title="Delete Product"><i data-lucide="trash-2" style="width: 16px; color: var(--danger);"></i></button>
                  </div>
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
    <div style="background: white; padding: 1.75rem; border-radius: var(--radius-xl); border: 1px solid var(--border-color);">
      <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 0.25rem;">Customer Orders Management</h3>
      <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.5rem;">View order activity and update fulfillment status.</p>

      <div style="overflow-x: auto;">
        <table class="cart-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Items</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${state.orders.map(o => `
              <tr>
                <td style="font-weight: 800; color: var(--primary);">${o.id}</td>
                <td>
                  <div style="font-weight: 700;">${o.customer}</div>
                  <div style="font-size: 0.75rem; color: var(--text-muted);">${o.email || ''}</div>
                </td>
                <td>${o.date}</td>
                <td>${o.itemsCount || 1} item(s)</td>
                <td style="font-weight: 800;">${formatPrice(o.total)}</td>
                <td><span style="font-size: 0.8rem; font-weight: 600;">${o.paymentMethod || 'Credit Card'}</span></td>
                <td>
                  <select 
                    style="padding: 0.35rem 0.5rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color); font-size: 0.8rem; font-weight: 700; background: var(--bg-alt);"
                    onchange="state.updateOrderStatus('${o.id}', this.value);"
                  >
                    <option value="Processing" ${o.status === 'Processing' ? 'selected' : ''}>Processing</option>
                    <option value="Shipped" ${o.status === 'Shipped' ? 'selected' : ''}>Shipped</option>
                    <option value="Delivered" ${o.status === 'Delivered' ? 'selected' : ''}>Delivered</option>
                    <option value="Cancelled" ${o.status === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
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

// --- ADMIN PRODUCT MODALS & ACTIONS ---
function deleteProduct(id) {
  if (confirm("Are you sure you want to delete this product from the storefront?")) {
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
      <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 1.25rem;">Add New Store Product</h3>
      <form onsubmit="event.preventDefault(); handleAddProductForm(this); modal.remove();">
        <div class="form-group" style="margin-bottom: 1rem;">
          <label>Product Title *</label>
          <input type="text" name="name" required placeholder="e.g. Smart Watch Pro" />
        </div>
        <div class="form-group" style="margin-bottom: 1rem;">
          <label>Category *</label>
          <select name="category" required style="padding: 0.75rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Home & Living">Home & Living</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>
        <div class="form-grid" style="margin-bottom: 1rem;">
          <div class="form-group">
            <label>Price ($) *</label>
            <input type="number" step="0.01" name="price" required placeholder="99.99" />
          </div>
          <div class="form-group">
            <label>Original Price ($)</label>
            <input type="number" step="0.01" name="oldPrice" placeholder="120.00" />
          </div>
        </div>
        <div class="form-group" style="margin-bottom: 1rem;">
          <label>Image URL *</label>
          <input type="url" name="image" required value="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80" />
        </div>
        <div class="form-group" style="margin-bottom: 1.5rem;">
          <label>Description *</label>
          <textarea name="description" rows="3" required placeholder="Provide physical product highlights..."></textarea>
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
    price: parseFloat(data.price),
    oldPrice: data.oldPrice ? parseFloat(data.oldPrice) : null,
    rating: 5.0,
    reviewsCount: 1,
    badge: "New",
    badgeType: "primary",
    image: data.image,
    thumbnails: [data.image],
    description: data.description,
    specs: { "Warranty": "1 Year Manufacturer Warranty" },
    inStock: true,
    stockCount: 15,
    isFeatured: true
  };
  state.products.unshift(newProd);
  state.save();
  renderApp();
  showToast("New physical product added to catalog!");
}

function showEditProductModal(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  const modal = document.createElement('div');
  modal.className = 'modal-backdrop';
  modal.innerHTML = `
    <div class="modal-card">
      <h3 style="font-size: 1.35rem; font-weight: 800; margin-bottom: 1.25rem;">Edit Product #${product.id}</h3>
      <form onsubmit="event.preventDefault(); handleEditProductForm(this, ${product.id}); modal.remove();">
        <div class="form-group" style="margin-bottom: 1rem;">
          <label>Product Title *</label>
          <input type="text" name="name" required value="${product.name}" />
        </div>
        <div class="form-group" style="margin-bottom: 1rem;">
          <label>Category *</label>
          <select name="category" required style="padding: 0.75rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
            <option value="Electronics" ${product.category === 'Electronics' ? 'selected' : ''}>Electronics</option>
            <option value="Fashion" ${product.category === 'Fashion' ? 'selected' : ''}>Fashion</option>
            <option value="Home & Living" ${product.category === 'Home & Living' ? 'selected' : ''}>Home & Living</option>
            <option value="Accessories" ${product.category === 'Accessories' ? 'selected' : ''}>Accessories</option>
          </select>
        </div>
        <div class="form-grid" style="margin-bottom: 1rem;">
          <div class="form-group">
            <label>Price ($) *</label>
            <input type="number" step="0.01" name="price" required value="${product.price}" />
          </div>
          <div class="form-group">
            <label>Original Price ($)</label>
            <input type="number" step="0.01" name="oldPrice" value="${product.oldPrice || ''}" />
          </div>
        </div>
        <div class="form-group" style="margin-bottom: 1.5rem;">
          <label>Description *</label>
          <textarea name="description" rows="3" required>${product.description}</textarea>
        </div>
        <div style="display: flex; gap: 1rem; justify-content: flex-end;">
          <button type="button" class="btn btn-outline btn-sm" onclick="this.closest('.modal-backdrop').remove();">Cancel</button>
          <button type="submit" class="btn btn-primary btn-sm">Update Product</button>
        </div>
      </form>
    </div>
  `;
  document.body.appendChild(modal);
}

function handleEditProductForm(form, productId) {
  const data = Object.fromEntries(new FormData(form).entries());
  const prod = state.products.find(p => p.id === productId);
  if (prod) {
    prod.name = data.name;
    prod.category = data.category;
    prod.price = parseFloat(data.price);
    prod.oldPrice = data.oldPrice ? parseFloat(data.oldPrice) : null;
    prod.description = data.description;
    state.save();
    renderApp();
    showToast("Product updated successfully!");
  }
}

function toggleAccountModal() {
  const modal = document.createElement('div');
  modal.className = 'modal-backdrop';
  modal.innerHTML = `
    <div class="modal-card">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
        <h3 style="font-size: 1.25rem; font-weight: 800;">My Account Profile</h3>
        <button class="icon-btn" onclick="this.closest('.modal-backdrop').remove();"><i data-lucide="x"></i></button>
      </div>

      <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; background: var(--bg-alt); padding: 1rem; border-radius: var(--radius-lg);">
        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" style="width: 54px; height: 54px; border-radius: 50%; object-fit: cover;" />
        <div>
          <h4 style="font-weight: 800; font-size: 1rem;">Jane Doe</h4>
          <p style="font-size: 0.85rem; color: var(--text-muted);">VIP Lumina Rewards Member</p>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem;">
        <div style="display: flex; justify-content: space-between; font-size: 0.9rem; padding: 0.5rem 0; border-bottom: 1px solid var(--border-color);">
          <span style="color: var(--text-muted);">Email:</span>
          <strong>jane.doe@example.com</strong>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 0.9rem; padding: 0.5rem 0; border-bottom: 1px solid var(--border-color);">
          <span style="color: var(--text-muted);">Total Orders Placed:</span>
          <strong>${state.orders.length} orders</strong>
        </div>
        <div style="display: flex; justify-content: space-between; font-size: 0.9rem; padding: 0.5rem 0;">
          <span style="color: var(--text-muted);">Saved Wishlist Items:</span>
          <strong>${state.wishlist.length} items</strong>
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
              LUMINA <span class="logo-badge">STORE</span>
            </a>
            <p style="color: #94A3B8; font-size: 0.9rem; line-height: 1.65; max-width: 320px;">
              Premium modern physical product storefront engineered for effortless shopping, fast worldwide shipping, and verified quality assurance.
            </p>
          </div>

          <div class="footer-col">
            <h4>Physical Catalog</h4>
            <ul class="footer-links">
              <li><a href="#" onclick="navigateTo('shop'); return false;">All Physical Items</a></li>
              <li><a href="#" onclick="state.selectedCategory='Electronics'; navigateTo('shop'); return false;">Electronics & Audio</a></li>
              <li><a href="#" onclick="state.selectedCategory='Fashion'; navigateTo('shop'); return false;">Fashion & Watches</a></li>
              <li><a href="#" onclick="state.selectedCategory='Home & Living'; navigateTo('shop'); return false;">Home & Living</a></li>
              <li><a href="#" onclick="state.selectedCategory='Accessories'; navigateTo('shop'); return false;">Travel Gear & Bags</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Customer Concierge</h4>
            <ul class="footer-links">
              <li><a href="#" onclick="navigateTo('contact'); return false;">Help Center & FAQ</a></li>
              <li><a href="#" onclick="navigateTo('about'); return false;">About Our Brand</a></li>
              <li><a href="#" onclick="navigateTo('wishlist'); return false;">Saved Wishlist</a></li>
              <li><a href="#" onclick="navigateTo('cart'); return false;">Shopping Bag</a></li>
              <li><a href="#" onclick="navigateTo('admin'); return false;">Store Dashboard</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4>Trust & Guarantee</h4>
            <p style="font-size: 0.85rem; color: #94A3B8; margin-bottom: 1rem;">256-Bit Encrypted Secure SSL Checkout</p>
            <div style="display: flex; gap: 0.75rem; color: white;">
              <i data-lucide="shield-check"></i>
              <i data-lucide="lock"></i>
              <i data-lucide="truck"></i>
              <i data-lucide="award"></i>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <span>&copy; 2026 Lumina Store Inc. All rights reserved.</span>
          <span>Crafted with precision, quality & performance</span>
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

  // Re-initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }
}

// Initialize application on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
});
