let glass = document.querySelector('.glass');

let glassType = [
   {
imgSrc: 'glasses/black.png',
name: 'Black Sunglass',
price: '$20',
discount: '$25',
},
{
imgSrc: 'glasses/blue.png',
name: 'Blue Sunglass',
price: '$15',
discount: '$20',
},
{
imgSrc: 'glasses/red.png',
name: 'Red Sunglass',
price: '$25',
discount: '$35',
},
{
imgSrc: 'glasses/reading1.png',
name: 'Plain Glass',
price: '$30',
discount: '$35',
},
{
imgSrc: 'glasses/reading2.png',
name: 'Reading Glass',
price: '$20',
discount: '$25',
},
{
imgSrc: 'glasses/reading3.png',
name: 'Pure Glass',
price: '$14',
discount: '$20',
},
];


function renderGlass(argument) {
	glassType.forEach( gls => {
		glass.innerHTML += `<div class="col-sm-12 col-lg-4 col-md-6">
			<div class="row items rounded bg-white" data-aos="fade-up" data-aos-duration="1000">
				<img src="${gls.imgSrc}" class="  col-6 pics">
				<div class="col-6 description">
					<div class="star">
						<i class="fa-sharp text-dark fa-solid fa-star"></i>
					<i class="fa-sharp  text-dark fa-solid fa-star"></i>
					<i class="fa-sharp  text-dark  fa-solid fa-star"></i>
					<i class="fa-sharp  text-dark  fa-solid  text-info  fa-star"></i>
					<i class="fa-sharp  text-dark  fa-solid fa-star"></i>
				</div>
              <h3 class="name">${gls.name}</h3>
              <div class="amount">
              	<span class="price">${gls.price}</span> <span class="discount">${gls.discount}</span>
              </div>
              <div class="addy">
              	<!--<i class="fa-sharp fa-solid love fa-heart"></i>
              	<i class="fa-sharp addToCart   fa-solid fa-cart-plus"></i>
              -->
              <button class="btn btn-dark addCart">Add to Cart</button>
</div>
				</div>

			</div>
		</div>`
	})
};

renderGlass();