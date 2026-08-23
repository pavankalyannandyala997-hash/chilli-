/**
 * శ్రీ కపోతేశ్వర కారం – మన తెలుగు ఇంటి కారం
 * 
 * SECURITY & CONFIGURATION:
 * STORE_WHATSAPP_NUMBER: Fixed store recipient number (9000077543).
 * ADMIN_PASSWORD: Admin panel password.
 */
const STORE_WHATSAPP_NUMBER = "919000077543";
const ADMIN_PASSWORD = "pavan123";

// Weight Options from 250g up to 50 kg (Including 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 KG)
const WEIGHT_OPTIONS = [
    { code: "250g", labelTe: "250 గ్రాములు (250g)", labelEn: "250 Grams (250g)", multiplier: 0.25 },
    { code: "500g", labelTe: "500 గ్రాములు (500g)", labelEn: "500 Grams (500g)", multiplier: 0.5 },
    { code: "1kg",  labelTe: "1 కిలో (1 kg)",        labelEn: "1 KG (1 kg)",        multiplier: 1 },
    { code: "2kg",  labelTe: "2 కిలోలు (2 kg)",      labelEn: "2 KG (2 kg)",        multiplier: 2 },
    { code: "3kg",  labelTe: "3 కిలోలు (3 kg)",      labelEn: "3 KG (3 kg)",        multiplier: 3 },
    { code: "4kg",  labelTe: "4 కిలోలు (4 kg)",      labelEn: "4 KG (4 kg)",        multiplier: 4 },
    { code: "5kg",  labelTe: "5 కిలోలు (5 kg)",      labelEn: "5 KG (5 kg)",        multiplier: 5 },
    { code: "6kg",  labelTe: "6 కిలోలు (6 kg)",      labelEn: "6 KG (6 kg)",        multiplier: 6 },
    { code: "7kg",  labelTe: "7 కిలోలు (7 kg)",      labelEn: "7 KG (7 kg)",        multiplier: 7 },
    { code: "8kg",  labelTe: "8 కిలోలు (8 kg)",      labelEn: "8 KG (8 kg)",        multiplier: 8 },
    { code: "9kg",  labelTe: "9 కిలోలు (9 kg)",      labelEn: "9 KG (9 kg)",        multiplier: 9 },
    { code: "10kg", labelTe: "10 కిలోలు (10 kg)",    labelEn: "10 KG (10 kg)",      multiplier: 10 },
    { code: "15kg", labelTe: "15 కిలోలు (15 kg)",    labelEn: "15 KG (15 kg)",      multiplier: 15 },
    { code: "20kg", labelTe: "20 కిలోలు (20 kg)",    labelEn: "20 KG (20 kg)",      multiplier: 20 },
    { code: "25kg", labelTe: "25 కిలోలు (25 kg)",    labelEn: "25 KG (25 kg)",      multiplier: 25 },
    { code: "50kg", labelTe: "50 కిలోలు (50 kg)",    labelEn: "50 KG (50 kg)",      multiplier: 50 }
];

// Default Initial Product Data Structure (Base Prices for 1 KG)
const DEFAULT_PRODUCTS = [
    {
        id: 1,
        nameTe: "గొడ్డు కారం",
        nameEn: "Goddu Karam (Guntur Red Chilli Powder)",
        price: 500, // Base price for 1 KG
        weightLabel: "1 కిలో వరకు",
        image: "images/guntur_karam.jpg",
        available: true,
        descTe: "సాంప్రదాయ పద్ధతిలో తయారైన తాజా మరియు స్వచ్ఛమైన గొడ్డు కారం పొడి.",
        descEn: "Traditional pure homemade Guntur red chilli powder."
    },
    {
        id: 2,
        nameTe: "సాంబార్ కారం",
        nameEn: "Sambar Karam (Spice Masala Powder)",
        price: 600, // Base price for 1 KG
        weightLabel: "1 కిలో వరకు",
        image: "images/special_masala_karam.jpg",
        available: true,
        descTe: "సువాసనల గరం మసాలాలు, ధనియాలు మరియు దినుసులతో చేసిన ప్రసిద్ధ సాంబార్ కారం.",
        descEn: "Aromatic masala chilli spice blend for Sambar and curries."
    },
    {
        id: 3,
        nameTe: "ఉత్పత్తి 3",
        nameEn: "Product 3",
        price: 0,
        weightLabel: "1 కిలో వరకు",
        image: "",
        available: false,
        descTe: "త్వరలో అందుబాటులో ఉంటుంది",
        descEn: "Coming Soon"
    },
    {
        id: 4,
        nameTe: "ఉత్పత్తి 4",
        nameEn: "Product 4",
        price: 0,
        weightLabel: "1 కిలో వరకు",
        image: "",
        available: false,
        descTe: "త్వరలో అందుబాటులో ఉంటుంది",
        descEn: "Coming Soon"
    },
    {
        id: 5,
        nameTe: "ఉత్పత్తి 5",
        nameEn: "Product 5",
        price: 0,
        weightLabel: "1 కిలో వరకు",
        image: "",
        available: false,
        descTe: "త్వరలో అందుబాటులో ఉంటుంది",
        descEn: "Coming Soon"
    },
    {
        id: 6,
        nameTe: "ఉత్పత్తి 6",
        nameEn: "Product 6",
        price: 0,
        weightLabel: "1 కిలో వరకు",
        image: "",
        available: false,
        descTe: "త్వరలో అందుబాటులో ఉంటుంది",
        descEn: "Coming Soon"
    }
];

// App State
let currentLang = "te"; // 'te' for Telugu, 'en' for English
let cart = [];
let deliveryMethod = "delivery"; // 'delivery' or 'pickup'
let isAdminLoggedIn = false;
let editingProductId = null;
let selectedWeights = { 1: "1kg", 2: "1kg" }; // Default selected weight 1kg // Track weight choice per product card

// DOM Initialization
document.addEventListener("DOMContentLoaded", () => {
    loadCartFromLocalStorage();
    renderProducts();
    updateCartUI();
    setupEventListeners();
    updatePageLanguageText();
});

// Product Data Storage Logic (localStorage)
function getProducts() {
    const saved = localStorage.getItem("kapoteswara_products");
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed) && parsed.length === 6) {
                return parsed;
            }
        } catch (e) {
            console.error("Failed to parse saved products, using defaults", e);
        }
    }
    return JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
}

function saveProducts(products) {
    localStorage.setItem("kapoteswara_products", JSON.stringify(products));
    renderProducts();
    updateCartUI();
    if (isAdminLoggedIn) {
        renderAdminTable();
    }
}

function resetToDefaultProducts() {
    const msg = currentLang === 'te' 
        ? "డిఫాల్ట్ ధరలకు మార్చాలా? (గొడ్డు కారం: ₹500, సాంబార్ కారం: ₹600)"
        : "Reset to default prices? (Goddu Karam: ₹500, Sambar Karam: ₹600)";
    if (confirm(msg)) {
        localStorage.removeItem("kapoteswara_products");
        renderProducts();
        updateCartUI();
        if (isAdminLoggedIn) {
            renderAdminTable();
        }
        showToast(currentLang === 'te' ? "డిఫాల్ట్ ధరలు విజయవంతంగా పునరుద్ధరించబడ్డాయి." : "Default prices successfully restored.");
    }
}

// Cart Storage
function saveCartToLocalStorage() {
    localStorage.setItem("kapoteswara_cart", JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const saved = localStorage.getItem("kapoteswara_cart");
    if (saved) {
        try {
            cart = JSON.parse(saved);
        } catch (e) {
            cart = [];
        }
    }
}

// Language Toggle Function
function toggleLanguage() {
    currentLang = currentLang === "te" ? "en" : "te";
    updatePageLanguageText();
    renderProducts();
    updateCartUI();
    if (isAdminLoggedIn) {
        renderAdminTable();
    }
    showToast(currentLang === "en" ? "Language switched to English" : "భాష తెలుగులోకి మార్చబడింది");
}

function updatePageLanguageText() {
    const isTe = currentLang === "te";
    
    const langBtnText = document.getElementById("langBtnText");
    if (langBtnText) langBtnText.textContent = isTe ? "English" : "తెలుగు";

    // Text elements with data-te / data-en attributes
    document.querySelectorAll("[data-te]").forEach(el => {
        const te = el.getAttribute("data-te");
        const en = el.getAttribute("data-en");
        if (isTe && te) el.textContent = te;
        if (!isTe && en) el.textContent = en;
    });

    // Inputs with placeholders
    document.querySelectorAll("[data-te-placeholder]").forEach(el => {
        const te = el.getAttribute("data-te-placeholder");
        const en = el.getAttribute("data-en-placeholder");
        if (isTe && te) el.placeholder = te;
        if (!isTe && en) el.placeholder = en;
    });
}

// Render Product Cards (Customer Side - Only Available Products 1 & 2)
function renderProducts() {
    const grid = document.getElementById("productsGrid");
    if (!grid) return;

    const products = getProducts();
    const isTe = currentLang === "te";
    const availableProducts = products.filter(p => p.available && p.price > 0);

    if (availableProducts.length === 0) {
        grid.innerHTML = `
            <div class="empty-cart-state" style="grid-column: 1 / -1;">
                <i class="fa-solid fa-pepper-hot"></i>
                <p>${isTe ? 'ప్రస్తుతం ఉత్పత్తులు అందుబాటులో లేవు' : 'No products available currently'}</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = availableProducts.map(product => {
        const prodName = isTe ? (product.nameTe || product.name) : (product.nameEn || product.name);
        const prodDesc = isTe ? (product.descTe || product.description || '') : (product.descEn || product.description || '');
        const currentWeightCode = selectedWeights[product.id] || "250g";
        const weightObj = WEIGHT_OPTIONS.find(w => w.code === currentWeightCode) || WEIGHT_OPTIONS[0];
        
        // Calculated price based on weight multiplier
        const basePrice = product.price; // Price for 250g
        const calculatedPrice = basePrice * weightObj.multiplier;
        const weightLabelText = isTe ? weightObj.labelTe : weightObj.labelEn;

        return `
            <div class="product-card" data-id="${product.id}">
                <div class="product-image-container">
                    <img src="${product.image}" alt="${prodName}" class="product-image" loading="lazy">
                    <span class="product-badge badge-active">${isTe ? 'అందుబాటులో ఉంది' : 'In Stock'}</span>
                </div>
                <div class="product-info">
                    <h3 class="product-title">${prodName}</h3>
                    <p class="product-desc">${prodDesc}</p>
                    
                    <div class="weight-selection-box">
                        <label class="weight-select-label">
                            <i class="fa-solid fa-scale-balanced"></i> ${isTe ? 'పరిమాణం (Weight):' : 'Select Weight:'}
                        </label>
                        <select class="weight-dropdown" onchange="onProductWeightChange(${product.id}, this.value)">
                            ${WEIGHT_OPTIONS.map(w => `
                                <option value="${w.code}" ${w.code === currentWeightCode ? 'selected' : ''}>
                                    ${isTe ? w.labelTe : w.labelEn} — ₹${basePrice * w.multiplier}
                                </option>
                            `).join('')}
                        </select>
                    </div>

                    <div class="product-footer">
                        <div class="product-price">
                            <span class="currency">₹</span>
                            <span class="price-value" id="price-display-${product.id}">${calculatedPrice}</span>
                            <span class="price-unit">/ ${weightLabelText}</span>
                        </div>
                        
                        <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                            <i class="fa-solid fa-cart-plus"></i> ${isTe ? 'కార్ట్‌కు జోడించు' : 'Add to Cart'}
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Handle weight selection change on product card
function onProductWeightChange(productId, weightCode) {
    selectedWeights[productId] = weightCode;
    renderProducts();
}

// Add Item to Cart with chosen Weight
function addToCart(productId) {
    const products = getProducts();
    const product = products.find(p => p.id === productId);

    if (!product || !product.available) {
        alert(currentLang === 'te' ? "ఈ ఉత్పత్తి ప్రస్తుతం అందుబాటులో లేదు." : "Product is not available.");
        return;
    }

    const isTe = currentLang === "te";
    const prodName = isTe ? (product.nameTe || product.name) : (product.nameEn || product.name);
    const weightCode = selectedWeights[productId] || "250g";
    const weightObj = WEIGHT_OPTIONS.find(w => w.code === weightCode) || WEIGHT_OPTIONS[0];
    
    const weightLabel = isTe ? weightObj.labelTe : weightObj.labelEn;
    const unitPrice = product.price * weightObj.multiplier; // Price for this weight

    // Unique cart item identifier based on product ID and weight choice
    const cartItemId = `${product.id}_${weightCode}`;
    const existingIndex = cart.findIndex(item => item.cartItemId === cartItemId);

    if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({
            cartItemId: cartItemId,
            id: product.id,
            nameTe: product.nameTe || product.name,
            nameEn: product.nameEn || product.name,
            weightCode: weightCode,
            weightLabelTe: weightObj.labelTe,
            weightLabelEn: weightObj.labelEn,
            unitPrice: unitPrice,
            quantity: 1,
            image: product.image
        });
    }

    saveCartToLocalStorage();
    updateCartUI();
    showToast(isTe ? `"${prodName} (${weightLabel})" కార్ట్‌కి జోడించబడింది!` : `"${prodName} (${weightLabel})" added to cart!`);
}

function updateCartQuantity(index, delta) {
    if (cart[index]) {
        cart[index].quantity += delta;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
        saveCartToLocalStorage();
        updateCartUI();
    }
}

function removeFromCart(index) {
    if (cart[index]) {
        const isTe = currentLang === "te";
        const name = isTe ? cart[index].nameTe : cart[index].nameEn;
        cart.splice(index, 1);
        saveCartToLocalStorage();
        updateCartUI();
        showToast(isTe ? `"${name}" కార్ట్ నుండి తొలగించబడింది.` : `"${name}" removed from cart.`);
    }
}

// Calculate Totals dynamically
function calculateTotals() {
    const products = getProducts();

    const subtotal = cart.reduce((sum, item) => {
        const liveProduct = products.find(p => p.id === item.id);
        const basePrice = liveProduct ? liveProduct.price : 0;
        const weightObj = WEIGHT_OPTIONS.find(w => w.code === item.weightCode) || WEIGHT_OPTIONS[0];
        const currentUnitPrice = basePrice * weightObj.multiplier;
        return sum + (currentUnitPrice * item.quantity);
    }, 0);

    let deliveryCharge = 0;
    if (deliveryMethod === 'delivery') {
        if (subtotal > 0 && subtotal < 500) {
            deliveryCharge = 40;
        } else {
            deliveryCharge = 0;
        }
    } else {
        deliveryCharge = 0;
    }

    const grandTotal = subtotal + deliveryCharge;
    return { subtotal, deliveryCharge, grandTotal };
}

// Update Cart UI Drawer
function updateCartUI() {
    const isTe = currentLang === "te";
    const countBadge = document.getElementById("cartCountBadge");
    const cartItemsContainer = document.getElementById("cartItemsContainer");
    const subtotalEl = document.getElementById("cartSubtotal");
    const deliveryEl = document.getElementById("cartDeliveryCharge");
    const grandTotalEl = document.getElementById("cartGrandTotal");
    const freeDeliveryNotice = document.getElementById("freeDeliveryNotice");

    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (countBadge) countBadge.textContent = totalCount;

    const { subtotal, deliveryCharge, grandTotal } = calculateTotals();
    const products = getProducts();

    if (subtotalEl) subtotalEl.textContent = subtotal;
    if (deliveryEl) deliveryEl.textContent = deliveryCharge;
    if (grandTotalEl) grandTotalEl.textContent = grandTotal;

    if (freeDeliveryNotice) {
        if (deliveryMethod === 'pickup') {
            freeDeliveryNotice.textContent = isTe ? "🏪 షాపు నందు స్వీకరణ (Store Pickup) - డెలివరీ ఛార్జ్ ఉచితం" : "🏪 Store Pickup - Free Delivery";
            freeDeliveryNotice.className = "free-delivery-badge info";
        } else if (subtotal >= 500) {
            freeDeliveryNotice.textContent = isTe ? "🎉 అభినందనలు! ₹500 పైన కొనుగోలుపై ఉచిత డెలివరీ" : "🎉 Congratulations! Free Delivery on orders above ₹500";
            freeDeliveryNotice.className = "free-delivery-badge success";
        } else if (subtotal > 0) {
            const needed = 500 - subtotal;
            freeDeliveryNotice.textContent = isTe ? `🚚 ఇంకా ₹${needed} కొనుగోలు చేస్తే ఉచిత డెలివరీ!` : `🚚 Add ₹${needed} more for Free Delivery!`;
            freeDeliveryNotice.className = "free-delivery-badge warning";
        } else {
            freeDeliveryNotice.textContent = isTe ? "🚚 ₹500 పైన ఆర్డర్‌లపై ఉచిత డెలివరీ" : "🚚 Free Delivery on orders above ₹500";
            freeDeliveryNotice.className = "free-delivery-badge info";
        }
    }

    if (!cartItemsContainer) return;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart-state">
                <i class="fa-solid fa-cart-flatbed"></i>
                <p>${isTe ? 'మీ కార్ట్ ఖాళీగా ఉంది' : 'Your cart is empty'}</p>
                <button class="btn btn-secondary" onclick="closeCartDrawer()">${isTe ? 'ఉత్పత్తులు చూడండి' : 'View Products'}</button>
            </div>
        `;
        return;
    }

    cartItemsContainer.innerHTML = cart.map((item, index) => {
        const liveProduct = products.find(p => p.id === item.id);
        const basePrice = liveProduct ? liveProduct.price : 0;
        const weightObj = WEIGHT_OPTIONS.find(w => w.code === item.weightCode) || WEIGHT_OPTIONS[0];
        const unitPrice = basePrice * weightObj.multiplier;
        const itemTotal = unitPrice * item.quantity;

        const prodName = isTe ? (item.nameTe || liveProduct?.nameTe) : (item.nameEn || liveProduct?.nameEn);
        const weightText = isTe ? weightObj.labelTe : weightObj.labelEn;

        return `
            <div class="cart-item">
                <img src="${item.image}" alt="${prodName}" class="cart-item-img">
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${prodName}</h4>
                    <div class="cart-item-meta">
                        <span class="cart-item-weight">${isTe ? 'బరువు:' : 'Weight:'} <strong>${weightText}</strong></span>
                        <span class="cart-item-price">₹${unitPrice}</span>
                    </div>
                    <div class="cart-item-controls">
                        <div class="qty-btn-group">
                            <button class="qty-btn" onclick="updateCartQuantity(${index}, -1)">-</button>
                            <span class="qty-number">${item.quantity}</span>
                            <button class="qty-btn" onclick="updateCartQuantity(${index}, 1)">+</button>
                        </div>
                        <span class="item-total-price">₹${itemTotal}</span>
                        <button class="cart-item-remove" onclick="removeFromCart(${index})" title="${isTe ? 'తొలగించు' : 'Remove'}">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// WhatsApp Order Submit Logic & Thank You Modal Trigger
function submitWhatsAppOrder() {
    const isTe = currentLang === "te";
    if (cart.length === 0) {
        alert(isTe ? "మీ కార్ట్‌లో ఎటువంటి ఉత్పత్తులు లేవు!" : "Your cart is empty!");
        return;
    }

    const nameInput = document.getElementById("custName");
    const mobileInput = document.getElementById("custMobile");
    const addressInput = document.getElementById("custAddress");
    const notesInput = document.getElementById("custNotes");
    const methodDeliveryRadio = document.getElementById("methodDelivery");

    const name = nameInput ? nameInput.value.trim() : "";
    const mobile = mobileInput ? mobileInput.value.trim() : "";
    const address = addressInput ? addressInput.value.trim() : "";
    const notes = notesInput ? notesInput.value.trim() : "";
    const isDelivery = methodDeliveryRadio ? methodDeliveryRadio.checked : true;

    if (!name) {
        alert(isTe ? "దయచేసి మీ పేరు నమోదు చేయండి." : "Please enter your name.");
        if (nameInput) nameInput.focus();
        return;
    }

    if (!mobile || mobile.length < 10) {
        alert(isTe ? "దయచేసి సరైన 10 అంకెల మొబైల్ నంబర్ నమోదు చేయండి." : "Please enter a valid 10-digit mobile number.");
        if (mobileInput) mobileInput.focus();
        return;
    }

    if (isDelivery && !address) {
        alert(isTe ? "దయచేసి డెలివరీ చిరునామా నమోదు చేయండి." : "Please enter delivery address.");
        if (addressInput) addressInput.focus();
        return;
    }

    const { subtotal, deliveryCharge, grandTotal } = calculateTotals();
    const orderMethodText = isDelivery ? (isTe ? "డెలివరీ (Home Delivery)" : "Home Delivery") : (isTe ? "పిక్ అప్ (Store Pickup)" : "Store Pickup");
    const products = getProducts();

    // Generate random Order ID
    const orderId = "SKK-" + Math.floor(1000 + Math.random() * 9000);

    // Construct formatted Telugu message
    let message = `🌶️ శ్రీ కపోతేశ్వర కారం\nమన తెలుగు ఇంటి కారం\n\n`;
    message += `*కొత్త ఆర్డర్ (Order ID: #${orderId})*\n\n`;
    message += `కస్టమర్ పేరు: ${name}\n`;
    message += `మొబైల్ నంబర్: ${mobile}\n`;
    message += `డెలివరీ చిరునామా: ${isDelivery ? address : "స్వీకరణ స్థలం (Store Pickup)"}\n`;
    message += `ఆర్డర్ విధానం: ${orderMethodText}\n\n`;
    message += `*ఉత్పత్తులు:*\n\n`;

    cart.forEach(item => {
        const liveProduct = products.find(p => p.id === item.id);
        const basePrice = liveProduct ? liveProduct.price : 0;
        const weightObj = WEIGHT_OPTIONS.find(w => w.code === item.weightCode) || WEIGHT_OPTIONS[0];
        const unitPrice = basePrice * weightObj.multiplier;
        const itemTotal = unitPrice * item.quantity;
        const prodName = isTe ? (item.nameTe || liveProduct?.nameTe) : (item.nameEn || liveProduct?.nameEn);
        const weightText = isTe ? weightObj.labelTe : weightObj.labelEn;

        message += `${prodName}\n`;
        message += `బరువు: ${weightText}\n`;
        message += `పరిమాణం: ${item.quantity}\n`;
        message += `ధర: ₹${itemTotal}\n\n`;
    });

    message += `ఉప మొత్తం: ₹${subtotal}\n`;
    message += `డెలివరీ ఛార్జ్: ₹${deliveryCharge}\n`;
    message += `*మొత్తం: ₹${grandTotal}*\n\n`;
    message += `*ఆర్డర్ గమనికలు:* ${notes ? notes : (isTe ? 'ఏమీ లేవు' : 'None')}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Store order summary for thank you modal
    const lastOrder = {
        orderId: orderId,
        name: name,
        mobile: mobile,
        address: isDelivery ? address : "Store Pickup",
        grandTotal: grandTotal,
        itemsCount: cart.reduce((s, i) => s + i.quantity, 0),
        whatsappUrl: whatsappUrl
    };

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    // Close cart drawer & clear cart
    closeCartDrawer();
    cart = [];
    saveCartToLocalStorage();
    updateCartUI();

    // Reset customer form
    if (nameInput) nameInput.value = "";
    if (mobileInput) mobileInput.value = "";
    if (addressInput) addressInput.value = "";
    if (notesInput) notesInput.value = "";

    // Show Thank You Status Modal
    showThankYouOrderModal(lastOrder);
}

// Thank You Order Status Modal Controls & Auto-Refresh
let autoRefreshTimer = null;

function showThankYouOrderModal(order) {
    const isTe = currentLang === "te";
    const modal = document.getElementById("thankYouOrderModal");
    if (!modal) return;

    document.getElementById("thankOrderId").textContent = "#" + order.orderId;
    document.getElementById("thankCustName").textContent = order.name;
    document.getElementById("thankCustMobile").textContent = order.mobile;
    document.getElementById("thankGrandTotal").textContent = "₹" + order.grandTotal;
    
    const wsBtn = document.getElementById("reopenWhatsAppBtn");
    if (wsBtn) {
        wsBtn.onclick = () => window.open(order.whatsappUrl, "_blank");
    }

    modal.classList.add("active");

    // Auto-refresh page after 10 seconds to restore clean state
    if (autoRefreshTimer) clearTimeout(autoRefreshTimer);
    autoRefreshTimer = setTimeout(() => {
        window.location.reload();
    }, 10000);
}

function closeThankYouOrderModal() {
    if (autoRefreshTimer) clearTimeout(autoRefreshTimer);
    const modal = document.getElementById("thankYouOrderModal");
    if (modal) modal.classList.remove("active");
    
    // Refresh page automatically to clean initial state
    window.location.reload();
}

// ADMIN PANEL LOGIC
function openAdminLoginModal() {
    if (isAdminLoggedIn) {
        openAdminDashboardModal();
        return;
    }
    const modal = document.getElementById("adminLoginModal");
    if (modal) modal.classList.add("active");
}

function closeAdminLoginModal() {
    const modal = document.getElementById("adminLoginModal");
    if (modal) modal.classList.remove("active");
}

function handleAdminLogin(e) {
    if (e) e.preventDefault();
    const passInput = document.getElementById("adminPasswordInput");
    const entered = passInput ? passInput.value : "";

    if (entered === ADMIN_PASSWORD) {
        isAdminLoggedIn = true;
        if (passInput) passInput.value = "";
        closeAdminLoginModal();
        openAdminDashboardModal();
        showToast(currentLang === 'te' ? "అడ్మిన్ లాగిన్ విజయవంతమైంది." : "Admin Login successful.");
    } else {
        alert(currentLang === 'te' ? "తప్పు పాస్‌వర్డ్! దయచేసి సరైన పాస్‌వర్డ్ ఎంటర్ చేయండి." : "Invalid Password!");
    }
}

function adminLogout() {
    isAdminLoggedIn = false;
    closeAdminDashboardModal();
    showToast(currentLang === 'te' ? "అడ్మిన్ లాగౌట్ అయ్యారు." : "Logged out.");
}

function openAdminDashboardModal() {
    const modal = document.getElementById("adminDashboardModal");
    if (modal) {
        renderAdminTable();
        modal.classList.add("active");
    }
}

function closeAdminDashboardModal() {
    const modal = document.getElementById("adminDashboardModal");
    if (modal) modal.classList.remove("active");
}

function renderAdminTable() {
    const tbody = document.getElementById("adminProductTableBody");
    if (!tbody) return;

    const products = getProducts();
    const isTe = currentLang === "te";

    tbody.innerHTML = products.map(product => `
        <tr>
            <td>
                <div class="admin-table-prod">
                    <img src="${product.image || 'images/placeholder.jpg'}" class="admin-thumb" onError="this.src='images/placeholder.jpg'">
                    <div>
                        <strong>${isTe ? product.nameTe : product.nameEn}</strong>
                        <div class="admin-subtext">ID: #${product.id}</div>
                    </div>
                </div>
            </td>
            <td><strong>₹${product.price}</strong> <small>/ 1 kg</small></td>
            <td>${product.weightLabel || '1 కిలో వరకు'}</td>
            <td>
                <span class="status-pill ${product.available ? 'status-yes' : 'status-no'}">
                    ${product.available ? (isTe ? 'అవును (Yes)' : 'Yes') : (isTe ? 'కాదు (No)' : 'No')}
                </span>
            </td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="openEditProductModal(${product.id})">
                    <i class="fa-solid fa-pen-to-square"></i> ${isTe ? 'ఎడిట్' : 'Edit'}
                </button>
            </td>
        </tr>
    `).join('');
}

function openEditProductModal(productId) {
    const products = getProducts();
    const product = products.find(p => p.id === productId);
    if (!product) return;

    editingProductId = productId;

    document.getElementById("editProdName").value = product.nameTe || product.name;
    document.getElementById("editProdPrice").value = product.price;
    document.getElementById("editProdWeight").value = product.weightLabel || "250 గ్రాముల వరకు";
    document.getElementById("editProdImage").value = product.image || "";
    document.getElementById("editProdAvailable").checked = product.available;

    const modal = document.getElementById("adminEditModal");
    if (modal) modal.classList.add("active");
}

function closeEditProductModal() {
    const modal = document.getElementById("adminEditModal");
    if (modal) modal.classList.remove("active");
    editingProductId = null;
}

function saveEditedProduct(e) {
    if (e) e.preventDefault();
    if (!editingProductId) return;

    const products = getProducts();
    const index = products.findIndex(p => p.id === editingProductId);

    if (index > -1) {
        const name = document.getElementById("editProdName").value.trim();
        const price = parseFloat(document.getElementById("editProdPrice").value) || 0;
        const weightLabel = document.getElementById("editProdWeight").value.trim();
        const image = document.getElementById("editProdImage").value.trim() || "images/placeholder.jpg";
        const available = document.getElementById("editProdAvailable").checked;

        if (!name) {
            alert("Please enter product name");
            return;
        }

        products[index] = {
            ...products[index],
            nameTe: name,
            nameEn: name,
            name: name,
            price,
            weightLabel,
            image,
            available
        };

        saveProducts(products);
        closeEditProductModal();
        showToast(currentLang === 'te' ? "ధర విజయవంతంగా మార్చబడింది" : "Price updated successfully");
    }
}

// Drawer Controls & Toast
function openCartDrawer() {
    const drawer = document.getElementById("cartDrawer");
    const overlay = document.getElementById("cartOverlay");
    if (drawer) drawer.classList.add("active");
    if (overlay) overlay.classList.add("active");
}

function closeCartDrawer() {
    const drawer = document.getElementById("cartDrawer");
    const overlay = document.getElementById("cartOverlay");
    if (drawer) drawer.classList.remove("active");
    if (overlay) overlay.classList.remove("active");
}

function showToast(message) {
    const toast = document.getElementById("toastNotification");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3500);
}

// Event Listeners Setup
function setupEventListeners() {
    const methodDelivery = document.getElementById("methodDelivery");
    const methodPickup = document.getElementById("methodPickup");
    const addressGroup = document.getElementById("addressGroup");

    if (methodDelivery && methodPickup) {
        methodDelivery.addEventListener("change", () => {
            deliveryMethod = "delivery";
            if (addressGroup) addressGroup.style.display = "block";
            updateCartUI();
        });
        methodPickup.addEventListener("change", () => {
            deliveryMethod = "pickup";
            if (addressGroup) addressGroup.style.display = "none";
            updateCartUI();
        });
    }

    const cartToggleBtn = document.getElementById("cartToggleBtn");
    const closeCartBtn = document.getElementById("closeCartBtn");
    const cartOverlay = document.getElementById("cartOverlay");

    if (cartToggleBtn) cartToggleBtn.addEventListener("click", openCartDrawer);
    if (closeCartBtn) closeCartBtn.addEventListener("click", closeCartDrawer);
    if (cartOverlay) cartOverlay.addEventListener("click", closeCartDrawer);

    const checkoutSubmitBtn = document.getElementById("checkoutSubmitBtn");
    if (checkoutSubmitBtn) {
        checkoutSubmitBtn.addEventListener("click", (e) => {
            e.preventDefault();
            submitWhatsAppOrder();
        });
    }

    const adminLoginForm = document.getElementById("adminLoginForm");
    if (adminLoginForm) {
        adminLoginForm.addEventListener("submit", handleAdminLogin);
    }

    const editProductForm = document.getElementById("editProductForm");
    if (editProductForm) {
        editProductForm.addEventListener("submit", saveEditedProduct);
    }
}
