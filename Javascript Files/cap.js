let cap = document.querySelector('.cap');


let capType = [
{
	imgSrc: 'cap/black.jpeg',
name: 'Bobmarley cap',
price: '$24',
discount: '$30',
},
{
	imgSrc: 'cap/blue.jpeg',
name: 'Blue Face Cap',
price: '$15',
discount: '$20',
},
{
	imgSrc: 'cap/red.jpeg',
name: 'Red Face Cap',
price: '$25',
discount: '$35',
},
{
	imgSrc: 'cap/yellow.jpeg',
name: 'Yellow Face Cap',
price: '$10',
discount: '$15',
},
{
	imgSrc: 'cap/yellow1.jpeg',
name: 'Yellow Round Cap',
price: '$17',
discount: '$23',
},
{
	imgSrc: 'cap/white.jpeg',
name: 'White Face Cap',
price: '$30',
discount: '$40',
},
];


 function renderCap(argument) {
 	capType.forEach((caps) => {
 		cap.innerHTML += `<div class="col-sm-12 col-lg-4 col-md-6">
			<div class="row items rounded bg-white" data-aos="fade-up" data-aos-duration="1000">
				<img src="${caps.imgSrc}" class="  col-6 pics">
				<div class="col-6 description">
					<div class="star">
						<i class="fa-sharp text-dark fa-solid fa-star"></i>
					<i class="fa-sharp  text-dark  fa-solid fa-star"></i>
					<i class="fa-sharp  text-dark  fa-solid fa-star"></i>
					<i class="fa-sharp  text-dark fa-solid  text-info  fa-star"></i>
					<i class="fa-sharp  text-dark  fa-solid fa-star"></i>
				</div>
              <h3 class="name">${caps.name}</h3>
              <div class="amount">
              	<span class="price">${caps.price}</span> <span class="discount">${caps.discount}</span>
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
 	});
 }

renderCap();