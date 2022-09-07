let watchy = document.querySelector('.watchman');

let watchtyping = [
   {
imgSrc: 'wristwatch/1.jpg',
name: 'Black Leather',
price: '$50',
discount: '$65',
},
{
imgSrc: 'wristwatch/2.jpg',
name: 'Plain Watch',
price: '$15',
discount: '$20',
},
{
imgSrc: 'wristwatch/3.jpg',
name: 'Silver Watch',
price: '$70',
discount: '$80',
},
{
imgSrc: 'wristwatch/4.jpg',
name: 'Smart Black',
price: '$40',
discount: '$50',
},
{
imgSrc: 'wristwatch/pink watch.jpg',
name: 'Pink Watch',
price: '$75',
discount: '$105',
},
{
imgSrc: 'wristwatch/product 10.jpg',
name: 'Phone Watch',
price: '$77',
discount: '$100',
}
];


function renderWatch(argument) {
	// body...

watchtyping.forEach( wh => {
	watchy.innerHTML += `<div class="col-sm-12 col-lg-4 col-md-6">
			<div class="row items rounded bg-light" data-aos="fade-up" data-aos-duration="1000">
				<img src="${wh.imgSrc}" class="  col-6 pics">
				<div class="col-6 description">
					<div class="star">
						<i class="fa-sharp text-dark fa-solid fa-star"></i>
					<i class="fa-sharp  text-dark  fa-solid fa-star"></i>
					<i class="fa-sharp  text-dark fa-solid fa-star"></i>
					<i class="fa-sharp  text-dark  fa-solid  text-info  fa-star"></i>
					<i class="fa-sharp  text-dark  fa-solid fa-star"></i>
				</div>
              <h3 class="name">${wh.name}</h3>
              <div class="amount">
              	<span class="price">${wh.price}</span> <span class="discount">${wh.discount}</span>
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

renderWatch();