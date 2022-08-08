// window.addEventListener('DOMContentLoaded', function(){
//     let products = document.querySelectorAll('.product'),
//         buttons = document.querySelectorAll('button'),
//         btnOpen = document.querySelector('.open')

//         function createCart() {
//             let cart = document.createElement('div'),
//             field = document.createElement('div'),
//             heading = document.createElement('h2'),
//             closeBtn = document.createElement('button')

//             cart.classList.add('cart')
//             field.classList.add('cart-field')
//             closeBtn.classList.add('close')

//             heading.textContent = 'V nashey korzine'
//             closeBtn.textContent =  'Zakrit'

//             document.body.appendChild(cart)
//             cart.appendChild(heading)
//             cart.appendChild(field)
//             cart.appendChild(closeBtn)

//         }
//         createCart();
//         let cart = document.querySelector('.cart')
//         let closeBtn = document.querySelector('.close')
//         let field = document.querySelector('.cart-field')

//         btnOpen.addEventListener('click', function () {
//             cart.style.display = 'block'

//         })
//         closeBtn.addEventListener('click',function() {
//             cart.style.display = 'none'

//        })

//        buttons.forEach(function (item, i){
//            item.addEventListener('click', function () {
//                let cloneItem = products[i].cloneNode(true),
//                     btn = cloneItem.querySelector('button');

//                     // btn.remove()
//                     field.appendChild(cloneItem)
//                     products[i].remove()
//            })
//        })

// })

// window.addEventListener("DOMContentLoaded", function () {
//   let openBtn = document.querySelector(".open");
//   let buttons = document.querySelectorAll("button");
//   let products = document.querySelectorAll(".product");
//   let main = document.querySelector(".shop");

//   function cartMain() {
//     let cart = document.createElement("div");
//     let cartField = document.createElement("div");
//     let heading = document.createElement("h2");
//     let closeBtn = document.createElement("button");

//     cart.classList.add("cart");
//     cartField.classList.add("cart-field");
//     closeBtn.classList.add("close");

//     heading.textContent = "V nashey korzine";
//     closeBtn.textContent = "zakrit";

//     document.body.appendChild(cart);
//     cart.appendChild(heading);
//     cart.appendChild(cartField);
//     cart.appendChild(closeBtn);
//   }
//   cartMain();

//   let cart = document.querySelector(".cart");
//   let cartField = document.querySelector(".cart-field");
//   let closeBtn = document.querySelector(".close");

//   openBtn.addEventListener("click", function () {
//     cart.style.display = "block";
//   });

//   closeBtn.addEventListener("click", function () {
//     cart.style.display = "none";
//   });

//   buttons.forEach((item, i) => {
//     item.addEventListener("click", () => {
//       let cloneItem = products[i].cloneNode(true);
//       let btn = cloneItem.querySelector("button");

//       btn.innerHTML = "Bekor qilish";
//       cartField.appendChild(cloneItem);
//       products[i].remove();

//       btn.addEventListener("click", () => {
//         cloneItem.remove();
//         main.appendChild(cloneItem);
//       });
//     });
//   });
// });

window.addEventListener("DOMContentLoaded", () => {
  let openBtn = document.querySelector(".open");
  let products = document.querySelectorAll(".product");
  let buttons = document.querySelectorAll("button");
  let main = document.querySelector(".shop");

  function mainCard() {
    let cart = document.createElement("div");
    let heading = document.createElement("h2");
    let cartField = document.createElement("div");
    let button = document.createElement("button");

    cart.classList.add("cart");
    cartField.classList.add("cart-field");
    button.classList.add("close");

    heading.textContent = "Korzina";
    button.textContent = "Close";

    document.body.appendChild(cart);
    cart.appendChild(heading);
    cart.appendChild(cartField);
    cart.appendChild(button);
  }
  mainCard();

  let cart = document.querySelector(".cart");
  let close = document.querySelector(".close");
  let cartField = document.querySelector(".cart-field");

  openBtn.addEventListener("click", () => {
    cart.style.display = "block";
  });
  close.addEventListener("click", () => {
    cart.style.display = "none";
  });
  buttons.forEach((item, i) => {
    item.addEventListener("click", () => {
      let cloneItem = products[i].cloneNode(true);
      let btn = cloneItem.querySelector("button");

      btn.innerHTML = "bekor";
      cartField.appendChild(cloneItem);
      products[i].remove();

      btn.addEventListener("click", () => {
        cloneItem.remove();
        main.appendChild(cloneItem);
      });
    });
  });
});
