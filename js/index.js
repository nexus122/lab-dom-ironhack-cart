// ITERATION 1

function updateSubtotal(product) {
  // Estan pasando toda la fila de la tabla como parametro.

  // Conseguimos el precio y la cantidad de productos de la fila.
  const price = product.querySelector('.price span').textContent;
  const quantity = product.querySelector(".quantity input").value;

  // Calculamos el total del precio multiplicado por la cantiddad
  const total = price * quantity;

  // Actualizamos el DOM con el subtotal.
  let subtotal = product.querySelector(".subtotal span")
  subtotal.innerHTML = total;
  return total;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.


  // end of test

  // ITERATION 2  
  const products = document.getElementsByClassName('product');
  let total = 0;
  for (var i = 0; i < products.length; i++) {
    total += updateSubtotal(products[i])
  }
  // ITERATION 3
  document.querySelector("#total-value span").innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {  
  const target = event.currentTarget;  

  //... your code goes here
  // Procedemos a eliminar buscando al padre t desde el padre al hijo
  target.parentNode.parentNode.remove();//removeChild(target.parentNode.parentNode);

  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  console.log("Vamos a crear un producto aqui");
  let name = document.querySelector(".create-product input[type='text']").value;
  let price = document.querySelector(".create-product input[type='number']").value;
  console.log(name, price);

  let cart = document.querySelector("#cart");
  cart.insertAdjacentHTML('beforeend',`
  <tr class="product">
  <td class="name">
    <span>${name}</span>
  </td>
  <td class="price">$<span>${price}</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>
</tr>
  `);

  // Eliminar elementos.
  let deleteButtons = document.querySelectorAll(".btn-remove");
  deleteButtons[deleteButtons.length-1].addEventListener("click", function (event) {
    removeProduct(event);
  })

}

// Unico codigo que se ejecuta, un lisener a todo el window.
// El evento load salta cuando se ha renderizado toda la pagina HTML
window.addEventListener('load', () => {

  // Obtenemos el boton y le aplicamos un addEventListener.
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  //... your code goes here

  // Eliminar elementos.
  let deleteButtons = document.querySelectorAll(".btn-remove");
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", function (event) {
      removeProduct(event);
    })
  }

  // Añadimos un listener a el btn de crear productos
  document.querySelector("#create").addEventListener("click", function(){
    createProduct();
  })
});
