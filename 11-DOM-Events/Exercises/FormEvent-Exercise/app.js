const form = document.querySelector('form');
const list = document.querySelector('#list');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const prodName = form.elements.product;
  const qty = form.elements.qty;
  // console.log(prodName.value, qty.value);

  addProduct(prodName.value, qty.value)
  prodName.value = '';
  qty.value = '';
});

const addProduct = (prodName, q) => {
  const newProd = document.createElement('li');
  newProd.textContent = (`${q} ${prodName}`);
  list.appendChild(newProd);
};