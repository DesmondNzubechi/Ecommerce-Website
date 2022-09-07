let bag = document.querySelector('.bagB');

let bagyType = [
   {
imgSrc: 'bags/bag1.png',
name: 'Yellow School Bag',
price: '$55',
discount: '$60',
},
{
imgSrc: 'bags/bag2.png',
name: 'Blue School Bag',
price: '$55',
discount: '$60',
},
{
imgSrc: 'bags/bag3.png',
name: 'Simple Bag',
price: '$25',
discount: '$30',
},
{
imgSrc: 'bags/bag4.png',
name: 'Steelblue Bag',
price: '$29',
discount: '$35',
},
{
imgSrc:'bags/pink.png',
name: 'Pink Suitcase',
price: '$100',
discount: '$150',
},
{
imgSrc:'bags/yellow.png',
name: 'Yellow Suitcase',
price: '$100',
discount: '$150',
},
];


function renderBag(argument) {
	bagyType.forEach( bagy => {
		bag.innerHTML += `<div class="col-sm-12 col-lg-4 col-md-6">
			<div class="row items rounded bg-white" data-aos="fade-up" data-aos-duration="1000">
				<img src="${bagy.imgSrc}" class="  col-6 pics">
				<div class="col-6 description">
					<div class="star">
						<i class="fa-sharp text-dark fa-solid fa-star"></i>
					<i class="fa-sharp  text-dark  fa-solid fa-star"></i>
					<i class="fa-sharp  text-dark  fa-solid fa-star"></i>
					<i class="fa-sharp  text-dark  fa-solid  text-info  fa-star"></i>
					<i class="fa-sharp  text-dark  fa-solid fa-star"></i>
				</div>
              <h3 class="name">${bagy.name}</h3>
              <div class="amount">
              	<span class="price">${bagy.price}</span> <span class="discount">${bagy.discount}</span>
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

renderBag();