class Smoothie {
    constructor(flavor, extras) {
        this.flavor = flavor;
        this.extras = extras;
        this.prices = {
            'strawberry': 5,
            'banana': 4,
            'mango': 6,
            'blueberry': 6,
            'pineapple': 5,
            'chocolate': 7,
            'Protein Powder': 2,
            'Chia Seeds': 1,
            'Flax Seeds': 1,
            'Spinach': 1.5,
            'Honey': 1
        };
    }

    calculatePrice() {
        let total = this.prices[this.flavor];
        this.extras.forEach(extra => {
            total += this.prices[extra];
        });
        return total;
    }

    describe() {
        return `Smoothie with ${this.flavor} flavor and extras: ${this.extras.join(', ')}.`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const orderButton = document.getElementById('order-button');
    const orderSummary = document.getElementById('order-summary');

    orderButton.addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const flavor = document.getElementById('flavor').value;
        const extras = Array.from(document.querySelectorAll('input[name="extras"]:checked'))
                            .map(checkbox => checkbox.value);
        const tip = parseFloat(document.getElementById('tip').value) || 0;
        const comments = document.getElementById('comments').value;

        const smoothie = new Smoothie(flavor, extras);
        const basePrice = smoothie.calculatePrice();
        const totalPrice = basePrice + tip;

        let summary = `<h2>Order Summary</h2>`;
        summary += `<p><strong>Name:</strong> ${name}</p>`;
        summary += `<p>${smoothie.describe()}</p>`;
        summary += `<p><strong>Base Price:</strong> $${basePrice.toFixed(2)}</p>`;
        summary += `<p><strong>Tip:</strong> $${tip.toFixed(2)}</p>`;
        summary += `<p><strong>Total Price:</strong> $${totalPrice.toFixed(2)}</p>`;
        summary += `<p><strong>Comments:</strong> ${comments || 'None'}</p>`;

        orderSummary.innerHTML = summary;
    });
});
