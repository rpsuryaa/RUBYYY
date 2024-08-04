document.getElementById('add-item').addEventListener('click', function() {
    const tableBody = document.querySelector('#invoice-items tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td><input type="text" class="item-name" required></td>
        <td><input type="number" class="item-quantity" required></td>
        <td><input type="number" class="item-price" required></td>
        <td class="item-total">0</td>
    `;
    tableBody.appendChild(newRow);
});

document.getElementById('invoice-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const customerName = document.getElementById('customer-name').value;
    const invoiceDate = document.getElementById('invoice-date').value;
    const items = [];
    const rows = document.querySelectorAll('#invoice-items tbody tr');

    rows.forEach(row => {
        const itemName = row.querySelector('.item-name').value;
        const itemQuantity = parseInt(row.querySelector('.item-quantity').value);
        const itemPrice = parseFloat(row.querySelector('.item-price').value);
        const itemTotal = itemQuantity * itemPrice;

        row.querySelector('.item-total').textContent = itemTotal.toFixed(2);

        items.push({
            name: itemName,
            quantity: itemQuantity,
            price: itemPrice,
            total: itemTotal
        });
    });

    const invoiceDetails = document.getElementById('invoice-details');
    invoiceDetails.innerHTML = `
        <p><strong>Customer Name:</strong> ${customerName}</p>
        <p><strong>Date:</strong> ${invoiceDate}</p>
        <table>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                ${items.map(item => `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.quantity}</td>
                        <td>${item.price.toFixed(2)}</td>
                        <td>${item.total.toFixed(2)}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
        <p><strong>Total:</strong> ${items.reduce((sum, item) => sum + item.total, 0).toFixed(2)}</p>
    `;

    document.getElementById('invoice-output').style.display = 'block';
});

document.getElementById('download-pdf').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const customerName = document.getElementById('customer-name').value;
    const invoiceDate = document.getElementById('invoice-date').value;
    const items = [];
    const rows = document.querySelectorAll('#invoice-items tbody tr');

    rows.forEach(row => {
        const itemName = row.querySelector('.item-name').value;
        const itemQuantity = parseInt(row.querySelector('.item-quantity').value);
        const itemPrice = parseFloat(row.querySelector('.item-price').value);
        const itemTotal = itemQuantity * itemPrice;

        items.push({
            name: itemName,
            quantity: itemQuantity,
            price: itemPrice,
            total: itemTotal
        });
    });

    doc.text(`Customer Name: ${customerName}`, 10, 10);
    doc.text(`Date: ${invoiceDate}`, 10, 20);

    let yPosition = 30;
    items.forEach(item => {
        doc.text(`Item: ${item.name}`, 10, yPosition);
        doc.text(`Quantity: ${item.quantity}`, 60, yPosition);
        doc.text(`Price: ${item.price.toFixed(2)}`, 110, yPosition);
        doc.text(`Total: ${item.total.toFixed(2)}`, 160, yPosition);
        yPosition += 10;
    });

    const total = items.reduce((sum, item) => sum + item.total, 0).toFixed(2);
    doc.text(`Total: ${total}`, 10, yPosition + 10);

    doc.save('invoice.pdf');
});
