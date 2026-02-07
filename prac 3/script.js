document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Responsive Navbar Toggle ---
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // --- 2. Dynamic Price Updates ---
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach(card => {
        const qtyInput = card.querySelector(".qty-input");
        const priceDisplay = card.querySelector(".price-display");
        const basePrice = parseFloat(card.getAttribute("data-base-price"));
        const addToCartBtn = card.querySelector(".add-to-cart-btn");

        // Listen for input changes in quantity
        qtyInput.addEventListener("input", (e) => {
            const quantity = parseInt(e.target.value);
            if (quantity >= 1) {
                // Calculate new price
                const newPrice = (basePrice * quantity).toFixed(2);
                priceDisplay.textContent = newPrice;
            }
        });

        // --- 3. Add to Cart Functionality ---
        addToCartBtn.addEventListener("click", () => {
            const quantity = parseInt(qtyInput.value);
            if (quantity > 0) {
                addToCart(quantity);
                
                // Visual feedback (Button animation)
                const originalText = addToCartBtn.textContent;
                addToCartBtn.textContent = "Added!";
                addToCartBtn.style.backgroundColor = "#2c3e50";
                setTimeout(() => {
                    addToCartBtn.textContent = originalText;
                    addToCartBtn.style.backgroundColor = "#27ae60";
                }, 1000);
            }
        });
    });

    // --- Cart Counter Logic ---
    let cartTotal = 0;
    const cartCountElement = document.getElementById("cart-count");

    function addToCart(qty) {
        cartTotal += qty;
        cartCountElement.textContent = cartTotal;
    }
});