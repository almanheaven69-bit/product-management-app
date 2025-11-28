import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [products, setProducts] = useState([
    // Samsung Products (10 total)
    {
      id: 1,
      name: "Samsung Galaxy A15",
      category: "Samsung",
      price: 8999,
      quantity: 5,
      image: "https://gscs.lge.com/gscs/lgecat/PLAN/PLANS/1580/1580-01.jpg",
      description: "Affordable Samsung Android phone with excellent performance and long-lasting battery life.",
      spec: "6.5-inch display, Snapdragon 6100+, 5000mAh battery, 50MP camera, 90Hz refresh rate",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      category: "Samsung",
      price: 129999,
      quantity: 2,
      image: "https://images.samsung.com/us/smartphones/galaxy-s24-ultra/gallery/01_S24Ultra_Titanium-Black_1P_mo.jpg",
      description: "Premium Samsung flagship with titanium design and advanced AI features.",
      spec: "6.8-inch Dynamic AMOLED, Snapdragon 8 Gen 3, 5000mAh battery, 200MP main camera",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Samsung Galaxy A54",
      category: "Samsung",
      price: 26999,
      quantity: 7,
      image: "https://images.samsung.com/us/smartphones/galaxy-a54/gallery/01_GalaxyA54_SM-A540_Awesome_Black_Front.jpg",
      description: "Mid-range Samsung phone with great camera and long battery life.",
      spec: "6.4-inch AMOLED, Exynos 1280, 5000mAh battery, 50MP triple camera",
      rating: 4.4,
    },
    {
      id: 4,
      name: "Samsung Galaxy Z Fold 5",
      category: "Samsung",
      price: 149999,
      quantity: 3,
      image: "https://images.samsung.com/us/smartphones/galaxy-z-fold5/gallery/SM-F946B_Gallery_Icy_Blue_01.jpg",
      description: "Innovative foldable smartphone with premium design.",
      spec: "7.6-inch inner AMOLED, Snapdragon 8 Gen 2, 4400mAh battery, AI powered camera",
      rating: 4.7,
    },
    {
      id: 5,
      name: "Samsung Galaxy M34",
      category: "Samsung",
      price: 15999,
      quantity: 8,
      image: "https://images.samsung.com/us/smartphones/galaxy-m34/gallery/Galaxy_M34_Midnight_Blue.jpg",
      description: "Budget-friendly Samsung with excellent battery endurance.",
      spec: "6.5-inch IPS LCD, Exynos 1280, 6000mAh battery, 50MP main camera",
      rating: 4.3,
    },
    {
      id: 6,
      name: "Samsung Galaxy S24",
      category: "Samsung",
      price: 89999,
      quantity: 4,
      image: "https://images.samsung.com/us/smartphones/galaxy-s24/gallery/01_GalaxyS24_Onyx_SM-S921_Front_mo.jpg",
      description: "Flagship Samsung with excellent performance and sleek design.",
      spec: "6.2-inch Dynamic AMOLED, Snapdragon 8 Gen 3, 4000mAh battery, 50MP main camera",
      rating: 4.8,
    },
    {
      id: 7,
      name: "Samsung Galaxy Z Flip 5",
      category: "Samsung",
      price: 99999,
      quantity: 2,
      image: "https://images.samsung.com/us/smartphones/galaxy-z-flip5/gallery/SM-F731B_Gallery_Mint_01.jpg",
      description: "Compact foldable phone with unique flip design.",
      spec: "6.7-inch AMOLED inner display, Snapdragon 8 Gen 2, 3700mAh battery, 12MP dual camera",
      rating: 4.6,
    },
    {
      id: 8,
      name: "Samsung Galaxy A05",
      category: "Samsung",
      price: 6999,
      quantity: 10,
      image: "https://images.samsung.com/us/smartphones/galaxy-a05/gallery/Galaxy_A05_Black_Front_Desktop.jpg",
      description: "Entry-level Samsung with reliable performance.",
      spec: "6.5-inch LCD, MediaTek Helio G85, 5000mAh battery, 50MP main camera",
      rating: 4.1,
    },
    {
      id: 9,
      name: "Samsung Galaxy Tab S9",
      category: "Samsung",
      price: 34999,
      quantity: 3,
      image: "https://images.samsung.com/us/tablets/galaxy-tab-s9/gallery/SM-X710_Gallery_Beige_01.jpg",
      description: "Premium tablet experience with stylus support.",
      spec: "11-inch AMOLED, Snapdragon 8 Gen 2, 8000mAh battery, S Pen included",
      rating: 4.7,
    },
    {
      id: 10,
      name: "Samsung Galaxy Note 20",
      category: "Samsung",
      price: 39999,
      quantity: 5,
      image: "https://images.samsung.com/us/smartphones/galaxy-note20/gallery/SM-N981B_Gallery_Mystic_Black_01.jpg",
      description: "Productivity-focused phone with S Pen stylus.",
      spec: "6.7-inch AMOLED, Snapdragon 865, 4300mAh battery, 108MP main camera",
      rating: 4.5,
    },

    // Google Pixel Products (10 total)
    {
      id: 11,
      name: "Google Pixel 8",
      category: "Google",
      price: 79999,
      quantity: 3,
      image: "https://lh3.googleusercontent.com/E4aFzJ0DkWvWxj-JRjjreKiMQj90H4ciuNWt89ieCXiGSLTtKyhMFGeWIh0n38CJqw=w600",
      description: "Premium Google Android phone with advanced AI features and computational photography.",
      spec: "6.2-inch OLED display, Google Tensor G3, 4700mAh battery, Pixel Camera with Magic Eraser",
      rating: 4.8,
    },
    {
      id: 12,
      name: "Google Pixel 8 Pro",
      category: "Google",
      price: 99999,
      quantity: 2,
      image: "https://lh3.googleusercontent.com/E4aFzJ0DkWvWxj-JRjjreKiMQj90H4ciuNWt89ieCXiGSLTtKyhMFGeWIh0n38CJqw=w600",
      description: "Flagship Google Pixel with enhanced AI and professional camera capabilities.",
      spec: "6.7-inch QHD+ OLED, Tensor G3, 5050mAh battery, advanced camera system with zoom",
      rating: 4.9,
    },
    {
      id: 13,
      name: "Google Pixel 8a",
      category: "Google",
      price: 39999,
      quantity: 6,
      image: "https://lh3.googleusercontent.com/b-DvZWxg-MHN8kzWDSQQ0-7M7PZmXnhKv5X4eVeO5lJzEY-Fk6qNJEiH6mB3cVyUjd0=w600",
      description: "Affordable Pixel with pure Android and excellent camera AI.",
      spec: "6.1-inch OLED, Tensor G3, 4410mAh battery, flagship camera experience at lower price",
      rating: 4.6,
    },
    {
      id: 14,
      name: "Google Pixel Fold",
      category: "Google",
      price: 159999,
      quantity: 1,
      image: "https://lh3.googleusercontent.com/fq0rJsH5WaOHTiBXKuCwhpVF7sJxNJGLnBh9J3x4hScZmJ8P1fG4JkKhTBDEqWXoVQ=w600",
      description: "Google's premium foldable smartphone with large inner display.",
      spec: "7.6-inch inner OLED, Tensor G3, 4650mAh battery, unique foldable form factor",
      rating: 4.7,
    },
    {
      id: 15,
      name: "Google Pixel 7a",
      category: "Google",
      price: 29999,
      quantity: 4,
      image: "https://lh3.googleusercontent.com/YUTdW-HBQrsLZnPOOQO3Kf1hK1nXuD8JG8mP4dV7F6B8A6VKn8jWqI5F5dE0cWVjfA=w600",
      description: "Budget Pixel with solid performance and great software support.",
      spec: "6.1-inch OLED, Tensor, 4410mAh battery, clean Android experience",
      rating: 4.5,
    },
    {
      id: 16,
      name: "Google Pixel 7",
      category: "Google",
      price: 49999,
      quantity: 5,
      image: "https://lh3.googleusercontent.com/KYnPdJOvEpA3pAObjcx6tTWEKGy6B6-jyJPJz4V_Ec3WBqOjhVP_rKJxjEW8HFhZYg=w600",
      description: "Previous generation Pixel with excellent value.",
      spec: "6.3-inch OLED, Tensor, 4003mAh battery, dual rear camera",
      rating: 4.6,
    },
    {
      id: 17,
      name: "Google Pixel Tablet",
      category: "Google",
      price: 44999,
      quantity: 3,
      image: "https://lh3.googleusercontent.com/Ou8FbKMYqiYp1yXpPKHcvl8tQ_mQMVbpQ-CzZE-l7kbHxKH9a5gUvYMR7p5tS6tWHQ=w600",
      description: "Google's first tablet with clean Android experience.",
      spec: "11-inch LCD, Tensor, 8000mAh battery, included stand",
      rating: 4.5,
    },
    {
      id: 18,
      name: "Google Pixel 6",
      category: "Google",
      price: 39999,
      quantity: 4,
      image: "https://lh3.googleusercontent.com/AjyYHtMknx3rPYcxzlNKGJJvB4rOvqKUIQGBcVWf2fE_JVCBLZlMfJy5NhGDChKcHQ=w600",
      description: "Older Pixel with custom Google chip.",
      spec: "6.4-inch AMOLED, Tensor, 4614mAh battery, dual rear camera",
      rating: 4.4,
    },
    {
      id: 19,
      name: "Google Pixel 6 Pro",
      category: "Google",
      price: 49999,
      quantity: 2,
      image: "https://lh3.googleusercontent.com/NrEpw0x6E9bvJhGNx9vfMDSrKKvGLfcH1eXhEZcOH4_9dXvWgLO6R_gW4jM5aTNyTw=w600",
      description: "Premium variant with larger display and better camera.",
      spec: "6.7-inch AMOLED, Tensor, 5003mAh battery, triple rear camera",
      rating: 4.5,
    },
    {
      id: 20,
      name: "Google Pixel 5a",
      category: "Google",
      price: 24999,
      quantity: 6,
      image: "https://lh3.googleusercontent.com/pI6EZB-7ErsL3pxrX4PQa5_Fq1M0F3X_Ug6LJxsH2cY_JU7SLQ0FgHj8H5Jj8jgDfQ=w600",
      description: "Compact and affordable Pixel phone.",
      spec: "6.34-inch OLED, Snapdragon 765G, 4680mAh battery, dual rear camera",
      rating: 4.3,
    },

    // OnePlus Products (10 total)
    {
      id: 21,
      name: "OnePlus 12",
      category: "OnePlus",
      price: 64999,
      quantity: 4,
      image: "https://image.oppo.com/content/dam/oppo/cn/v2/product/find/find-x7u/gallery/3-1920x1080.jpg",
      description: "Fast and smooth OnePlus Android phone with premium design and ultra-fast charging.",
      spec: "6.7-inch AMOLED display, Snapdragon 8 Gen 3, 5400mAh battery, 50MP Hasselblad camera, 100W charging",
      rating: 4.6,
    },
    {
      id: 22,
      name: "OnePlus 12R",
      category: "OnePlus",
      price: 39999,
      quantity: 5,
      image: "https://image.oppo.com/content/dam/oppo/cn/v2/product/find/find-x7/gallery/3-1920x1080.jpg",
      description: "OnePlus 12R with great value for performance.",
      spec: "6.7-inch AMOLED, Snapdragon 8 Gen 2, 5500mAh battery, 50MP main camera, 100W charging",
      rating: 4.5,
    },
    {
      id: 23,
      name: "OnePlus Nord N30",
      category: "OnePlus",
      price: 19999,
      quantity: 7,
      image: "https://image.oppo.com/content/dam/oppo/common/product/oneplus/nord/gallery/1-1920x1080.jpg",
      description: "Budget-friendly OnePlus with good performance and battery life.",
      spec: "6.72-inch LCD, MediaTek Dimensity 6020, 5100mAh battery, 108MP main camera",
      rating: 4.3,
    },
    {
      id: 24,
      name: "OnePlus 11 Pro",
      category: "OnePlus",
      price: 74999,
      quantity: 3,
      image: "https://image.oppo.com/content/dam/oppo/common/product/oneplus/11pro/gallery/1-1920x1080.jpg",
      description: "Previous flagship with excellent performance and Hasselblad camera.",
      spec: "6.7-inch AMOLED, Snapdragon 8 Gen 2, 5000mAh battery, 50MP Hasselblad camera",
      rating: 4.7,
    },
    {
      id: 25,
      name: "OnePlus Ace 3",
      category: "OnePlus",
      price: 44999,
      quantity: 5,
      image: "https://image.oppo.com/content/dam/oppo/common/product/oneplus/ace/gallery/1-1920x1080.jpg",
      description: "Powerful mid-range OnePlus with gaming performance.",
      spec: "6.78-inch AMOLED, Snapdragon 8 Gen 2, 5500mAh battery, 50MP main camera, 100W charging",
      rating: 4.4,
    },
    {
      id: 26,
      name: "OnePlus 11",
      category: "OnePlus",
      price: 54999,
      quantity: 4,
      image: "https://image.oppo.com/content/dam/oppo/common/product/oneplus/11/gallery/1-1920x1080.jpg",
      description: "Solid flagship with smooth performance.",
      spec: "6.7-inch AMOLED, Snapdragon 8 Gen 2, 5000mAh battery, 50MP Hasselblad camera",
      rating: 4.6,
    },
    {
      id: 27,
      name: "OnePlus Nord CE 3",
      category: "OnePlus",
      price: 24999,
      quantity: 6,
      image: "https://image.oppo.com/content/dam/oppo/common/product/oneplus/nord/ce/gallery/1-1920x1080.jpg",
      description: "Mid-range Nord phone with good specs.",
      spec: "6.7-inch AMOLED, Snapdragon 782G, 5000mAh battery, 50MP main camera, 100W charging",
      rating: 4.4,
    },
    {
      id: 28,
      name: "OnePlus 10 Pro",
      category: "OnePlus",
      price: 69999,
      quantity: 2,
      image: "https://image.oppo.com/content/dam/oppo/common/product/oneplus/10pro/gallery/1-1920x1080.jpg",
      description: "Previous generation flagship with premium features.",
      spec: "6.7-inch AMOLED, Snapdragon 8 Gen 1, 5000mAh battery, 48MP Hasselblad camera, 80W charging",
      rating: 4.5,
    },
    {
      id: 29,
      name: "OnePlus Nord 2",
      category: "OnePlus",
      price: 29999,
      quantity: 4,
      image: "https://image.oppo.com/content/dam/oppo/common/product/oneplus/nord/2/gallery/1-1920x1080.jpg",
      description: "Older mid-range phone with good performance.",
      spec: "6.43-inch AMOLED, Snapdragon 778G, 4500mAh battery, 50MP main camera, 65W charging",
      rating: 4.3,
    },
    {
      id: 30,
      name: "OnePlus Ace",
      category: "OnePlus",
      price: 34999,
      quantity: 5,
      image: "https://image.oppo.com/content/dam/oppo/common/product/oneplus/ace/2/gallery/1-1920x1080.jpg",
      description: "Gaming-focused OnePlus with excellent performance.",
      spec: "6.7-inch AMOLED, Snapdragon 8 Gen 1, 4500mAh battery, 50MP main camera, 150W charging",
      rating: 4.4,
    },

    // Xiaomi Products (10 total)
    {
      id: 31,
      name: "Xiaomi 14",
      category: "Xiaomi",
      price: 54999,
      quantity: 6,
      image: "https://i01.mifile.cn/f/i/2024/xiaomi_14/specs_01_m.png",
      description: "Powerful Xiaomi Android phone with excellent camera system and premium build quality.",
      spec: "6.36-inch AMOLED display, Snapdragon 8 Gen 3, 4610mAh battery, Leica camera system",
      rating: 4.7,
    },
    {
      id: 32,
      name: "Xiaomi 14 Ultra",
      category: "Xiaomi",
      price: 74999,
      quantity: 2,
      image: "https://i01.mifile.cn/f/i/2024/xiaomi_14_ultra/specs_01_m.png",
      description: "Ultra premium Xiaomi with advanced Leica camera and titanium body.",
      spec: "6.73-inch LTPO AMOLED, Snapdragon 8 Gen 3, 5300mAh battery, quad Leica camera setup",
      rating: 4.9,
    },
    {
      id: 33,
      name: "Xiaomi Redmi Note 13",
      category: "Xiaomi",
      price: 15999,
      quantity: 9,
      image: "https://i01.mifile.cn/f/i/2023/redmi_note_13/specs_01_m.png",
      description: "Budget Xiaomi with reliable performance and excellent battery.",
      spec: "6.67-inch AMOLED, Snapdragon 685, 5000mAh battery, 50MP main camera",
      rating: 4.4,
    },
    {
      id: 34,
      name: "Xiaomi 13",
      category: "Xiaomi",
      price: 44999,
      quantity: 4,
      image: "https://i01.mifile.cn/f/i/2023/xiaomi_13/specs_01_m.png",
      description: "Previous flagship with compact design and great camera performance.",
      spec: "6.36-inch AMOLED, Snapdragon 8 Gen 2, 4500mAh battery, Leica camera",
      rating: 4.6,
    },
    {
      id: 35,
      name: "Xiaomi Poco X6 Pro",
      category: "Xiaomi",
      price: 27999,
      quantity: 5,
      image: "https://i01.mifile.cn/f/i/2024/poco_x6_pro/specs_01_m.png",
      description: "Gaming-focused Xiaomi phone with smooth performance.",
      spec: "6.67-inch AMOLED, Snapdragon 8 Gen 2 Leading Version, 5100mAh battery, 50MP main camera",
      rating: 4.5,
    },
    {
      id: 36,
      name: "Xiaomi 13 Ultra",
      category: "Xiaomi",
      price: 69999,
      quantity: 3,
      image: "https://i01.mifile.cn/f/i/2023/xiaomi_13_ultra/specs_01_m.png",
      description: "Premium Xiaomi with exceptional camera capabilities.",
      spec: "6.73-inch AMOLED, Snapdragon 8 Gen 2, 5300mAh battery, Leica quad camera",
      rating: 4.8,
    },
    {
      id: 37,
      name: "Xiaomi Redmi Note 12",
      category: "Xiaomi",
      price: 12999,
      quantity: 8,
      image: "https://i01.mifile.cn/f/i/2023/redmi_note_12/specs_01_m.png",
      description: "Budget-friendly Redmi with good specs.",
      spec: "6.67-inch AMOLED, Snapdragon 685, 5000mAh battery, 50MP main camera",
      rating: 4.2,
    },
    {
      id: 38,
      name: "Xiaomi 12T Pro",
      category: "Xiaomi",
      price: 39999,
      quantity: 5,
      image: "https://i01.mifile.cn/f/i/2022/xiaomi_12t_pro/specs_01_m.png",
      description: "Older flagship with great camera and performance.",
      spec: "6.67-inch AMOLED, Snapdragon 8 Gen 1, 5000mAh battery, 108MP main camera, 120W charging",
      rating: 4.5,
    },
    {
      id: 39,
      name: "Xiaomi Poco F5",
      category: "Xiaomi",
      price: 24999,
      quantity: 6,
      image: "https://i01.mifile.cn/f/i/2023/poco_f5/specs_01_m.png",
      description: "Value-for-money phone with good processor.",
      spec: "6.67-inch AMOLED, Snapdragon 7+ Gen 2, 5100mAh battery, 64MP main camera, 67W charging",
      rating: 4.4,
    },
    {
      id: 40,
      name: "Xiaomi Mix Fold 3",
      category: "Xiaomi",
      price: 84999,
      quantity: 1,
      image: "https://i01.mifile.cn/f/i/2023/xiaomi_mix_fold_3/specs_01_m.png",
      description: "Premium foldable Xiaomi with unique design.",
      spec: "8.02-inch inner AMOLED, Snapdragon 8 Gen 2 Ultra, 5160mAh battery, Leica camera",
      rating: 4.7,
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showInventory, setShowInventory] = useState(false);

  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
    image: "",
    description: "",
    spec: "",
    rating: "",
  });

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm({ ...form, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const addProduct = () => {
    for (let key in form) if (!form[key]) return alert("Please fill out all fields.");
    const newProduct = {
      id: products.length + 1,
      ...form,
      price: Number(form.price),
      quantity: Number(form.quantity),
      rating: Number(form.rating),
    };
    setProducts([...products, newProduct]);
    setForm({
      name: "",
      category: "",
      price: "",
      quantity: "",
      image: "",
      description: "",
      spec: "",
      rating: "",
    });
  };

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const updateQuantity = (id, amount) => {
    setProducts(
      products.map((p) =>
        p.id === id
          ? { ...p, quantity: Math.max(0, p.quantity + amount) }
          : p
      )
    );
  };

  const total = products.reduce(
    (sum, p) => sum + p.price * p.quantity,
    0
  );

  return (
    <div className="container">
      <h1>📱 Manlangit - Android Phone Management System</h1>

      {/* Category Filter */}
      <div className="filter-section">
        <label>Filter by Brand: </label>
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="filter"
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Product List */}
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <div
              key={p.id}
              className={`product-card ${
                p.quantity < 5 ? "low-stock" : ""
              }`}
            >
              <img src={p.image} alt={p.name} className="product-image" />
              <h3 onClick={() => setSelectedProduct(p)} className="link">
                {p.name}
              </h3>
              <p className="category-badge">{p.category}</p>
              <p className="price">₱ {p.price.toLocaleString()}</p>
              <p className="quantity">Qty: <span>{p.quantity}</span></p>
              <p className="subtotal">Subtotal: ₱ {(p.price * p.quantity).toLocaleString()}</p>

              <div className="button-group">
                <button className="btn-add" onClick={() => updateQuantity(p.id, 1)}>+ Add</button>
                <button className="btn-remove" onClick={() => updateQuantity(p.id, -1)}>- Remove</button>
              </div>
              {p.quantity < 5 && <p className="low-stock-warning">⚠️ Low Stock</p>}
            </div>
          ))
        ) : (
          <p className="no-products">No products found in this category.</p>
        )}
      </div>

      {/* Product Detail Page */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="details" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedProduct(null)}>✕</button>
            <h2>{selectedProduct.name}</h2>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="detail-image" />
            <p className="detail-description">{selectedProduct.description}</p>
            <p><b>📋 Specs:</b> {selectedProduct.spec}</p>
            <p><b>⭐ Rating:</b> {selectedProduct.rating} / 5.0</p>
            <p className="detail-price"><b>Price:</b> ₱ {selectedProduct.price.toLocaleString()}</p>
          </div>
        </div>
      )}

      {/* Add Product Form */}
      <div className="form">
        <h2>➕ Add New Android Phone to Manlangit Inventory</h2>
        <div className="form-grid">
          {["name","category","price","quantity","description","spec","rating"].map((field)=>(
            <input 
              key={field} 
              name={field} 
              placeholder={field.charAt(0).toUpperCase()+field.slice(1)} 
              onChange={handleFormChange} 
              value={form[field]} 
              type={field==="price"||field==="quantity"||field==="rating"?"number":"text"}
              className="form-input"
            />
          ))}
        </div>
        <div className="image-upload-section">
          <label htmlFor="image-upload" className="image-label">📷 Upload Product Image:</label>
          <input 
            id="image-upload"
            type="file" 
            accept="image/*"
            onChange={handleImageUpload}
            className="image-input"
          />
          {form.image && (
            <div className="image-preview">
              <p className="preview-label">Preview:</p>
              <img src={form.image} alt="Preview" className="preview-image" />
            </div>
          )}
        </div>
        <button onClick={addProduct} className="btn-submit">Add Phone to Inventory</button>
      </div>

      {/* Collapsible Inventory Section */}
      <div className="inventory-section">
        <button 
          className="inventory-toggle"
          onClick={() => setShowInventory(!showInventory)}
        >
          💰 MANLANGIT INVENTORY {showInventory ? '▼' : '▶'}
        </button>
        {showInventory && (
          <div className="inventory-details">
            <h2 className="total">💰 TOTAL INVENTORY VALUE: ₱ {total.toLocaleString()}</h2>
            <div className="inventory-summary">
              <p><strong>Total Products:</strong> {products.length}</p>
              <p><strong>Total Units in Stock:</strong> {products.reduce((sum, p) => sum + p.quantity, 0)}</p>
              <p><strong>Total Inventory Value:</strong> ₱ {total.toLocaleString()}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
