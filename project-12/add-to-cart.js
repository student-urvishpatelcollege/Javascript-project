document.addEventListener("DOMContentLoaded", () => {
    const cartItems = document.querySelector(".cart-items");
    const cartTotal = document.querySelector(".cart-total span:last-child");
    const cartCount = document.getElementById("total");
    const closeBtn = document.querySelector(".close-btn");
    const cartPanel = document.querySelector(".cart");
    const cartToggle = document.querySelector("label[for='checkbox']");
    const buyButton = document.getElementById("buy-button");

    let cart = [];

    function renderCart() {
        cartItems.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <span>${item.name}</span>
                <span>₹${item.price.toLocaleString()}</span>
                <div>
                    <button class="decrease">-</button>
                    <span>${item.quantity}</span>
                    <button class="increase">+</button>
                </div>
                <span>Subtotal: ₹${(item.price * item.quantity).toLocaleString()}</span>
                <i class="fa fa-trash" style="cursor:pointer;color:red"></i>
            `;

            // Delete item
            li.querySelector("i").onclick = () => {
                cart.splice(index, 1);
                renderCart();
            };

            // Increase quantity
            li.querySelector(".increase").onclick = () => {
                item.quantity++;
                renderCart();
            };

            // Decrease quantity
            li.querySelector(".decrease").onclick = () => {
                if (item.quantity > 1) {
                    item.quantity--;
                } else {
                    cart.splice(index, 1); // Remove item if quantity goes below 1
                }
                renderCart();
            };

            cartItems.appendChild(li);
            total += item.price * item.quantity;
        });

        cartTotal.textContent = `₹${total.toLocaleString()}`;
        cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    }

    document.querySelectorAll(".product-card button").forEach(button => {
        button.onclick = () => {
            const card = button.closest(".product-card");
            const name = card.querySelector("h3").textContent;
            const price = parseInt(card.querySelector("p").textContent.replace(/[₹,]/g, ""));
            const image = card.querySelector("img").src;

            const existingItem = cart.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ name, price, image, quantity: 1 });
            }

            renderCart();
        };
    });
    buyButton.onclick = () => {
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }
    
        alert("Thank you for your purchase!");
        cart = [];
        renderCart();
        cartPanel.style.display = "none"; // optional: close the cart after purchase
    };    
    closeBtn.onclick = () => cartPanel.style.display = "none";
    cartToggle.onclick = () => cartPanel.style.display = "block";
});
