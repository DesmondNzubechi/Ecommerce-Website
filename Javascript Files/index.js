

let open = document.querySelector('#open');
let close = document.querySelector('#close');
let nav = document.querySelector('#nav');
let search = document.querySelector('.search');
let form = document.querySelector('#form');
let cartBar = document.querySelector('.cartBar');
let carty = document.querySelector('.carty');
let hideCartBtn = document.querySelector('.closecart');


//DISPLAY CART ITEMS

function displayCart(argument) {
	// body...
carty.style.top = '0';
};

cartBar.addEventListener('click', displayCart);

//HIDE CART

function hideCart(argument) {
	// body...
carty.style.top = '-4000px';
};

hideCartBtn.addEventListener('click', hideCart);


open.addEventListener('click', openBar);

function openBar(argument) {
	// body...
nav.style.left = '0';
close.style.display = 'block';
open.style.display = 'none';
};



open.addEventListener('click', openBar);
function closeBar(argument) {
	// body...



nav.style.left = '-1000px';
open.style.display = 'block';
close.style.display = 'none';
};

close.addEventListener('click', closeBar)

function searchDrop(argument) {
 
	if (form.style.top === '-300px') {
     form.style.top = '100px';
	} else {
      form.style.top = '-300px';
	};
};


search.addEventListener('click', searchDrop);





//ADD TO CART FUNCTIONALITY
/*

let addCart = document.querySelectorAll('.addCart');
let cartItems = document.querySelector('.topy');
let cartQuantity = document.querySelector('.number');
let total = document.querySelector('.total');

for (var i = 0; i < addCart.length; i++) {
	addCart[i].addEventListener('click', (event) => {
    let abs = event.target.parentElement;
    let getImg = abs.parentElement.parentElement.children[0].src;
    let getProductName = abs.parentElement.children[1].innerText;
    let getProductPrice = abs.parentElement.children[2].children[0].innerText.replace('$', '');

    if (cartItems.innerHTML.includes(`<div class="itemCart bg-light">
			<div class="productDetails ">
				<img src="${getImg}" class="">

				<h3 class="text-center">${getProductName}</h3>

			</div>
			<div class="increament">
				<button class="btn  btn-dark">+</button>
				<p class="quan">
					<span class="times">
						<span>x</span><span>1</span>
					</span>

					<span class="pricy">
						<span>$</span><span>${getProductPrice}</span>
					</span>
				</p>
				<button class="btn  btn-dark">-</button>
			</div>
			<div class="re"><button class="btn btn-danger">Remove</button></div>
	</div>`)) {
    	alert(${getProductName} + ' Already Added To The Cart')
	} else {
		cartItems.innerHTML += `<div class="itemCart bg-light">
			<div class="productDetails ">
				<img src="${getImg}" class="">

				<h3 class="text-center">${getProductName}</h3>

			</div>
			<div class="increament">
				<button class="btn  btn-dark">+</button>
				<p class="quan">
					<span class="times">
						<span>x</span><span>1</span>
					</span>

					<span class="pricy">
						<span>$</span><span>${getProductPrice}</span>
					</span>
				</p>
				<button class="btn  btn-dark">-</button>
			</div>
			<div class="re"><button class="btn btn-danger">Remove</button></div>
	</div>`
	}
   
};
}
*/


//ADD TO CART

let addCart = document.querySelectorAll('.addCart');
let cartItems = document.querySelector('.topy');
let cartQuantity = document.querySelector('.number');
let total = document.querySelector('.total');
let insideCartQuantity = document.querySelector('.numbe');

for (var i = 0; i < addCart.length; i++) {
	addCart[i].addEventListener('click', (event) => {

 let abs = event.target.parentElement;
    let getImg = abs.parentElement.parentElement.children[0].src;
    let getProductName = abs.parentElement.children[1].innerText;
    let getProductPrice = abs.parentElement.children[2].children[0].innerText.replace('$', '');
    let amounty = 1;
    let amountY = amounty * getProductPrice;

//RENDER ITEMS IN CART



if (cartItems.innerHTML.includes(`<div class="itemCart bg-ligh">
			<div class="productDetails ">
				<img src="${getImg}" class="">

				<h3 class="text-center">${getProductName}</h3>

			</div>
			<div class="increament">
				<button class="btn plus btn-dark">+</button>
				<p class="quan">
					<span class="times">
						<span>x</span><span class="q">${amounty}</span>
					</span>

					<span class="pricy">
						<span>$</span><span class="lastPrice">${amountY}</span>
					</span>
				</p>
				<button class="btn minus btn-dark">-</button>
			</div>
			<div class="re"><button class="btn remove btn-danger">Remove</button></div>
	</div>`) ) { 
	alert( `${getProductName}` + ' Already Added To The Cart');
	} else {
		cartItems.innerHTML += `<div class="itemCart bg-ligh">
			<div class="productDetails ">
				<img src="${getImg}" class="">

				<h3 class="text-center">${getProductName}</h3>

			</div>
			<div class="increament">
				<button class="btn plus btn-dark">+</button>
				<p class="quan">
					<span class="times">
						<span>x</span><span class="q">${amounty}</span>
					</span>

					<span class="pricy">
						<span>$</span><span class="lastPrice">${amountY}</span>
					</span>
				</p>
				<button class="btn minus btn-dark">-</button>
			</div>
			<div class="re"><button class="btn remove btn-danger">Remove</button></div>
	</div>`;
	cartQuantity.innerText++;
	cartQuantity.style.right =  '0';
	insideCartQuantity.innerText++;
	rendeP();

	//INCREASE QUANTITY OF ITEM IN THE CART

let plus = document.querySelectorAll('.plus');

for (var i = 0; i < plus.length; i++) {
	plus[i].addEventListener('click', (e) => {
		let check = e.target.parentElement;
		let multiplyPrice = check.children[1].children[1].children[1];
		let addQuantity = check.children[1].children[0].children[1].innerText++;
	   let quantityIncre = addQuantity;
	 let amounty = check.querySelector('.q').innerText;
    multiplyPrice.innerText = amounty * amountY;

	rendeP();
	});
};


//DECREASE THE QUANTITY OF ITEM IN THE CART
let minus = document.querySelectorAll('.minus');
for (var i = 0; i < minus.length; i++) {
	minus[i].addEventListener('click', (ev) => {
		let tar = ev.target.parentElement;
		if (tar.children[1].children[0].children[1].innerText > 1) {
			tar.children[1].children[0].children[1].innerText--;

		} else {
			tar.children[1].children[0].children[1].innerText = 1;
		}
		;
		let reducePrice = tar.children[1].children[1].children[1];
		let val = tar.querySelector('.q').innerText;
		reducePrice.innerText = val * amountY;
		rendeP();

		//let multipPrice = check.children[1].children[1].children[1].innerText * reduceQuantity;
		
	})
};


	};

	//REMOVE ITEM IN THE CART

let removeBtn = document.querySelectorAll('.remove');

	for (var i = 0; i < removeBtn.length; i++) {
		removeBtn[i].addEventListener('click', (evt) => {
			let removing = evt.target.parentElement.parentElement.remove();
			//let renderTotalZero = evt.target.parentElement.parentElement.parentElement.parentElement.children[3].children[0].children[0];

			if (cartQuantity.innerText  <= 0) {
             renderTotalZero.innerText = 0;
				cartQuantity.innerText = 0;
				insideCartQuantity.innerText = 0;
							} else {
				cartQuantity.innerText--;
				insideCartQuantity.innerText--;
				rendeP();

			};
		});
	};


//RENDER TOTAL PRICE

function rendeP(argument) {
	// body...
	let totaly = 0;
	let numberr = document.querySelector('.total');
   let pricy = document.querySelectorAll('.lastPrice');
	for (var i = 0; i < pricy.length; i++) {
		let pric = Number(pricy[i].innerText);
			totaly += pric;
			numberr.innerText = totaly;
	};
};

	});
};


//PLACE ORDER

let placeOrder = document.querySelector('.orderr');

placeOrder.addEventListener('click', (evv) => {
	let checking = evv.target;
 let getTotalPrice = checking.parentElement.children[0].children[0];
 let accessInnerHtml = checking.parentElement.parentElement.children[2];
 let getPrice = getTotalPrice.innerText;
//alert('Order Succefully Placed. Total Cost Of Order Place = $' + getPrice + '.' + 'Thanks For Shopping At B2R COLLECTIONs');
if (accessInnerHtml.innerHTML === '') {
	alert('Dear Valued Customer Can You Please Add Products To cart Before Placing Any Order')
} else {
	alert('Order Succefully Placed. Total Cost Of Order Placed = $' + getPrice + '.' +  'Thanks For Shopping With Us');
	accessInnerHtml.innerHTML = '';
	getTotalPrice.innerText = 0;
	insideCartQuantity.innerText = 0;
	cartQuantity.innerText = 0;
  
}

})

