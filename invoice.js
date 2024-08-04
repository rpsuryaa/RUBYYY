let billItems = [];

function addItem() {
    const product = document.getElementById('product').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const price = parseFloat(document.getElementById('price').value);

    if (product && quantity && price) {
        const total = quantity * price;
        const item = { product, quantity, price, total };
        billItems.push(item);

        displayBillItems();
        calculateTotalAmount();

        document.getElementById('product').value = '';
        document.getElementById('quantity').value = '';
        document.getElementById('price').value = '';
    }
}

function removeItem(index) {
    billItems.splice(index, 1);
    displayBillItems();
    calculateTotalAmount();
}

function displayBillItems() {
    const billBody = document.getElementById('billBody');
    billBody.innerHTML = '';

    for (let i = 0; i < billItems.length; i++) {
        const row = document.createElement('tr');
        const item = billItems[i];

        const productCell = document.createElement('td');
        productCell.textContent = item.product;
        row.appendChild(productCell);

        const quantityCell = document.createElement('td');
        quantityCell.textContent = item.quantity;
        row.appendChild(quantityCell);

        const priceCell = document.createElement('td');
        priceCell.textContent = item.price.toFixed(2);
        row.appendChild(priceCell); 

        const totalCell = document.createElement('td');
        totalCell.textContent = item.total.toFixed(2);
        row.appendChild(totalCell);

        const removeCell = document.createElement('td');
        const removeButton = document.createElement('button');
        removeButton.textContent = 'X';

        removeButton.addEventListener('click', () => removeItem(i));
        removeCell.appendChild(removeButton);
        row.appendChild(removeCell);

        billBody.appendChild(row);
    }
}

function calculateTotalAmount() {
    let totalAmount = 0;

    for (let i = 0; i < billItems.length; i++) {
        totalAmount += billItems[i].total;
    }
    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
}

function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    let y = 10;

    doc.text('INVOICE :', 10, y);
    y += 10;

    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const address = document.getElementById('add').value;

    if (name) {
        doc.text(`Name: ${name}`, 10, y);
        y += 10;
    }
    if (date) {
        doc.text(`Date: ${date}`, 10, y);
        y += 10;
    }
    if (address) {
        doc.text(`Address: ${address}`, 10, y);
        y += 10;
    }

    y += 10; // Add some space before the items table

    doc.text(`Product`, 10, y);
    doc.text(`Quantity`, 60, y);
    doc.text(`Price`, 110, y);
    doc.text(`Total`, 160, y);
    y += 10;

    billItems.forEach((item) => {
        doc.text(item.product, 10, y);
        doc.text(item.quantity.toString(), 60, y);
        doc.text(item.price.toFixed(2), 110, y);
        doc.text(item.total.toFixed(2), 160, y);
        y += 10;
    });

    doc.text(`Total Bill: ${document.getElementById('totalAmount').textContent}`, 10, y + 10);

    doc.save('invoice.pdf');
}
