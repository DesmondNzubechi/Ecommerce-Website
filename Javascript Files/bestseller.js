//BEST SELLER

let seler = document.querySelector('.seller');

let bestSeller = [
{
imgSrc: 'clothes/shirts/shirt2.jpg',
name: 'Plain Shirt',
price: '$200',
discount: '$250',
},
{
imgSrc: 'wristwatch/3.jpg',
name: 'Italian Watch',
price: '$100',
discount: '$120',
},
{
imgSrc: 'shoes/shoe4.jpg',
name: 'White shoe',
price: '$150',
discount: '$180',
},
{
imgSrc: 'clothes/shorts/short1.jpg',
name: 'Shorts',
price: '$300',
discount: '$400',
},
{
imgSrc: 'cap/blue1.jpeg',
name: 'Blue Cap',
price: '$40',
discount: '$60',
},
{
imgSrc: 'bags/bag4.png',
name: 'School Bag',
price: '$300',
discount: '$350',
}
];


function sellerBest() {
	bestSeller.forEach((se) => {
		seler.innerHTML += `
		<div class="col-sm-12 col-lg-4 col-md-6">
			<div class="row items rounded bg-light" data-aos="fade-up" data-aos-duration="1000">
				<img src="${se.imgSrc}" class="  col-6 pics">
				<div class="col-6 description">
					<div class="star">
						<i class="fa-sharp text-dark fa-solid fa-star"></i>
					<i class="fa-sharp  text-dark  fa-solid fa-star"></i>
					<i class="fa-sharp  text-dark  fa-solid fa-star"></i>
					<i class="fa-sharp text-dark  fa-solid  text-info  fa-star"></i>
					<i class="fa-sharp  text-dark  fa-solid fa-star"></i>
				</div>
              <h3 class="name">${se.name}</h3>
              <div class="amount">
              	<span class="price">${se.price}</span> <span class="discount">${se.discount}</span>
              </div>
              <div class="addy">
              	<!--<i class="fa-sharp fa-solid love fa-heart"></i>
              	<i class="fa-sharp addToCart   fa-solid fa-cart-plus"></i>
              -->
              <button class="btn btn-dark addCart">Add to Cart</button>
</div>
				</div>

			</div>
		</div>
		`
	});
};

sellerBest();




