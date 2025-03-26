function showCustomerMenu() {
    document.querySelector('.role-selection').style.display = 'none';
    document.getElementById('customer-menu').style.display = 'block';
}

function goBack() {
    document.getElementById('customer-menu').style.display = 'none';
    document.querySelector('.role-selection').style.display = 'block';
}
