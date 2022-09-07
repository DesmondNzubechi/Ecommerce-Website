let shoe = document.querySelector('.shoe');

let shoeType = [
   {
imgSrc: 'shoes/shoe6.jpg',
name: 'Outstanding',
price: '$70',
discount: '$100',
},
{
imgSrc:'shoes/shoe11.png',
name: 'Black Sneaker',
price: '$45',
discount: '$60',
},
{
imgSrc: 'shoes/shoe12.png',
name: 'White sneaker',
price: '$100',
discount: '$120',
},
{
imgSrc: 'shoes/shoe13.png',
name: 'Italian Shoe',
price: '$50',
discount: '$60',
},
{
imgSrc: 'shoes/shoe14.png',
name: 'Blue Sneaker',
price: '$100',
discount: '$121',
},
{
imgSrc: 'shoes/shoe3.jpg',
name: 'Pure White',
price: '$90',
discount: '$100',
},
];


function renderShoes(argument) {
	shoeType.forEach( sho => {
		shoe.innerHTML += `<div class="col-sm-12 col-lg-4 col-md-6">
			<div class="row items rounded bg-white" data-aos="fade-up" data-aos-duration="1000">
				<img src="${sho.imgSrc}" class="  col-6 pics">
				<div class="col-6 description">
					<div class="star">
						<i class="fa-sharp text-dark fa-solid fa-star"></i>
					<i class="fa-sharp  text-dark  fa-solid fa-star"></i>
					<i class="fa-sharp  text-dark fa-solid fa-star"></i>
					<i class="fa-sharp  text-dark  fa-solid  text-info  fa-star"></i>
					<i class="fa-sharp  text-dark  fa-solid fa-star"></i>
				</div>
              <h3 class="name">${sho.name}</h3>
              <div class="amount">
              	<span class="price">${sho.price}</span> <span class="discount">${sho.discount}</span>
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

renderShoes();