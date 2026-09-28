# 🛍️ Lumina - Modern E-Commerce Platform for Physical Products

[![Lumina Store Banner](https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80)](https://github.com/nizalabduljmp/Lumina)

**Lumina Store** is a modern, responsive e-commerce web application designed for selling physical products. Built with Vanilla JavaScript, HTML5, CSS3, Google Fonts (*Plus Jakarta Sans*), and Lucide Icons.

---

## ✨ Features

- **🏠 Home Page**: Hero section, value propositions, category grid, featured products, new arrivals, best sellers, promotional banner, customer reviews, and newsletter subscription.
- **🛍️ Shop Page**: Responsive product grid with real-time text search, category filtering, max price range slider, rating filters, in-stock toggle, and sorting options.
- **🔍 Product Details**: Thumbnail image gallery selector, price & discount badges (`SAVE 17%`), detailed specifications table, quantity selector, `Add to Cart`, `Buy Now`, `Wishlist` heart toggle, customer reviews list, and write-a-review form.
- **🛒 Shopping Bag**: Quantity modifiers (`+`/`-`), free shipping progress tracker ($150 threshold), coupon code engine (`LUMINA10` & `WELCOME20`), subtotal/discount/shipping calculation, and empty cart state.
- **💳 Multi-Step Checkout & Order Confirmation**: Form validation for customer info, shipping address, delivery options (*Standard* vs *Express*), payment options (*Credit Card*, *PayPal*, *COD*), and order confirmation page with order reference IDs.
- **❤️ Wishlist View**: Saved items grid with move-to-bag and removal options.
- **💬 About & Contact Pages**: Brand story, mission, company statistics, contact form, and interactive **FAQ Accordion**.
- **⚙️ Store Admin Dashboard**: Sales stats overview cards, Catalog Management (**Add Product** & **Edit Product** modals, delete product), and Customer Orders table with real-time status updates (*Processing*, *Shipped*, *Delivered*, *Cancelled*).

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3 (Vanilla design system with CSS custom properties, glassmorphism, responsive grid), JavaScript (ES6+ state engine)
- **Typography**: Google Fonts (*Plus Jakarta Sans*)
- **Icons**: Lucide Icons (SVG)
- **Persistence**: `localStorage` (Cart, Wishlist, Products, Orders, Coupons)

---

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/nizalabduljmp/Lumina.git
   cd Lumina
   ```

2. Open `index.html` directly in your browser, or start the local PowerShell server:
   ```powershell
   powershell -ExecutionPolicy Bypass -File server.ps1
   ```

3. Visit `http://localhost:8080/` in your browser.

---

## 📄 License

MIT License &copy; 2026 Lumina Store Inc.
