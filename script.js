function selectJob(job) {
    document.getElementById('order-form').style.display = 'block';
}

function publishOrder() {
    let title = document.getElementById('order-title').value;
    let description = document.getElementById('order-description').value;
    let price = document.getElementById('order-price').value;
    
    if (title && description && price) {
        localStorage.setItem('order', JSON.stringify({ title, description, price }));
        alert('Заказ опубликован!');
    } else {
        alert('Заполните все поля');
    }
}
