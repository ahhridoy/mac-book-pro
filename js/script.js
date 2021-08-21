// Extra Memory
const memory8Gb = document.getElementById('memory-8gb');
const memory16Gb = document.getElementById('memory-16gb');
const extraMemory = document.getElementById('extra-memory');

memory8Gb.addEventListener('click', function() {
    extraMemory.innerText = '0';
    updateTotal();
});

memory16Gb.addEventListener('click', function() {
    extraMemory.innerText = '180';
    updateTotal();
});

// Extra Storage
const storage256Gb = document.getElementById('storage-256gb');
const storage512Gb = document.getElementById('storage-512gb');
const storage1Tb = document.getElementById('storage-1tb');
const extraStorage = document.getElementById('extra-storage');

storage256Gb.addEventListener('click', function() {
    extraStorage.innerText = '0';
    updateTotal();
});

storage512Gb.addEventListener('click', function() {
    extraStorage.innerText = '100';
    updateTotal();
});

storage1Tb.addEventListener('click', function() {
    extraStorage.innerText = '180';
    updateTotal();
});

// Shipping Charge
const shippingFree = document.getElementById('shipping-free');
const shippingCharge = document.getElementById('shipping-charge');
const deliveryCharge = document.getElementById('delivery-charge');
// Best Price & Total
const bestPrice = document.getElementById('best-price');
const total = document.getElementById('total');
const totalAll = document.getElementById('total-all');

shippingFree.addEventListener('click', function() {
    deliveryCharge.innerText = '0';
    updateTotal();
});

shippingCharge.addEventListener('click', function() {
    deliveryCharge.innerText = '20';
    updateTotal();
});

// Update Price Total
function updateTotal() {
    const bestPriceCharged = parseInt(bestPrice.innerText);
    const extraMemoryCharged = parseInt(extraMemory.innerText);
    const extraStorageCharged = parseInt(extraStorage.innerText);
    const deliveryCharged = parseInt(deliveryCharge.innerText);
    const grandTotal = bestPriceCharged + extraMemoryCharged + extraStorageCharged + deliveryCharged;
    total.innerText = grandTotal;
    totalAll.innerText = grandTotal;
};

// Promo Code Apply
const inputBox = document.getElementById('input-box')

inputBox.addEventListener('keyup', function(event) {
    const applyButton = document.getElementById('apply-button');
    if(event.target.value == 'stevekaku') {
        applyButton.removeAttribute('disabled');
    }
    else {
        applyButton.setAttribute('disabled', true);
    }
});
