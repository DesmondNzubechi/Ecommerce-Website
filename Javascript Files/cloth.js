let clothes = document.querySelector('.clothes');

let clothDetail = [
{
imgSrc: 'clothes/shirts/shirt1.jpg',
name: 'Vintage',
price: '$150',
discount: '$280',
},
{
imgSrc: 'clothes/shirts/shirt2.jpg',
name: 'Plain Shirt',
price: '$200',
discount: '$250',
},
{
imgSrc: 'clothes/shirts/shirt3.jpg',
name: 'Fancy Shirt',
price: '$100',
discount: '$150',
},
{
imgSrc: 'clothes/shirts/shirt4.jpg',
name: 'Flower Shirt',
price: '$200',
discount: '$210',
},
{
imgSrc: 'clothes/shirts/shirt5.jpg',
name: 'White Shirt',
price: '$200',
discount: '$250',
},
{
imgSrc: 'clothes/shirts/shirt6.jpg',
name: 'Packet Shirt',
price: '$100',
discount: '$200',
},
{
imgSrc: 'clothes/polo/cloth1.jpg',
name: 'Nice Polo',
price: '$50',
discount: '$70',
},
{
imgSrc: 'clothes/polo/cloth12.jpg',
name: 'White Polo',
price: '$40',
discount: '$50',
},
{
imgSrc: 'clothes/polo/cloth13.jpg',
name: 'Dark-red Polo',
price: '$100',
discount: '$120',
},
{
imgSrc: 'clothes/polo/cloth14.jpg',
name: 'Misoni',
price: '$110',
discount: '$150',
},
{
imgSrc: 'clothes/polo/cloth3.jpg',
name: 'Kenzo Paris',
price: '$80',
discount: '$100',
},
{
imgSrc: 'clothes/polo/cloth42.png',
name: 'Martine Rose',
price: '$150',
discount: '$160',
},

{
imgSrc: 'clothes/hoodie/yellow.png',
name: 'Yellow Hoodie',
price: '$150',
discount: '$200',
},
{
imgSrc: 'clothes/hoodie/red2.png',
name: 'Red Hoodie',
price: '$150',
discount: '$200',
},
{
imgSrc: 'clothes/hoodie/white2.png',
name: 'White Hoodie',
price: '$160',
discount: '$170',
},
{
imgSrc: 'clothes/hoodie/blue.png',
name: 'Blue Hoodie',
price: '$100',
discount: '$120',
},
{
imgSrc: 'clothes/hoodie/black.png',
name: 'Black Hoodie',
price: '$100',
discount: '$120',
},
{
imgSrc: 'clothes/hoodie/white1.png',
name: 'Plain White',
price: '$50',
discount: '$70',
},
{
imgSrc: 'clothes/shorts/short1.jpg',
name: 'Fancy Shorts',
price: '$30',
discount: '$50',
},
{
imgSrc: 'clothes/shorts/short2.jpg',
name: 'Ash Short',
price: '$20',
discount: '$70',
},
{
imgSrc: 'clothes/shorts/short3.jpg',
name: 'Plain Shorts',
price: '$65',
discount: '$80',
},
{
imgSrc: 'clothes/shorts/jean.png',
name: 'Lady Short',
price: '$20',
discount: '$30',
},
{
imgSrc: 'clothes/shorts/short6.jpg',
name: 'Ruged Jean',
price: '$150',
discount: '$200',
},
{
imgSrc: 'clothes/shorts/short4.jpeg',
name: 'Jamaican Short',
price: '$200',
discount: '$230',
},
{
imgSrc: 'clothes/trouser/cloth25.jpeg',
name: 'Blue Trouser',
price: '$100',
discount: '$150',
},
{
imgSrc: 'clothes/trouser/cloth26.jpeg',
name: 'Brown Trouser',
price: '$120',
discount: '$150',
},
{
imgSrc: 'clothes/trouser/cloth28.jpeg',
name: 'Blue Jean',
price: '$150',
discount: '$160',
},
{
imgSrc: 'clothes/trouser/cloth15.jpg',
name: 'Artist Trouser',
price: '$250',
discount: '$300',
},
{
imgSrc: 'clothes/trouser/cloth27.jpeg',
name: 'Jean Trouser',
price: '$100',
discount: '$150',
},
{
imgSrc: 'clothes/trouser/classic.png',
name: 'Classic Trouser',
price: '$100',
discount: '$130',
}, 
{
imgSrc: 'clothes/slives/cloth32.jpg',
name: 'Plain Longsleeve',
price: '$30',
discount: '$50',
}, 
{
imgSrc: 'clothes/slives/cloth33.jpg',
name: 'Affordable Longsleeve',
price: '$10',
discount: '$20',
}, 
{
imgSrc: 'clothes/slives/cloth34.jpg',
name: 'White  Longsleeve',
price: '$50',
discount: '$80',
}, 
{
imgSrc: 'clothes/slives/cloth36.jpg',
name: 'Top Jean',
price: '60',
discount: '$70',
}, 
{
imgSrc: 'clothes/slives/cloth38.jpg',
name: 'Brown Longsleeve',
price: '$50',
discount: '$50',
}, 
{
imgSrc: 'clothes/slives/cloth40.jpeg',
name: 'Nice Top',
price: '$100',
discount: '$130',
}, 
];


function renderCloth() {
	// body...
clothDetail.forEach((cloths) =>{
	clothes.innerHTML += `<div class="col-sm-12 col-lg-4 col-md-6">
			<div class="row items rounded bg-light" data-aos="fade-up" data-aos-duration="1000">
				<img src="${cloths.imgSrc}" class="  col-6 pics">
				<div class="col-6 description">
					<div class="star">
						<i class="fa-sharp text-dark fa-solid fa-star"></i>
					<i class="fa-sharp text-dark fa-solid fa-star"></i>
					<i class="fa-sharp  text-dark fa-solid fa-star"></i>
					<i class="fa-sharp  text-dark  fa-solid  text-info  fa-star"></i>
					<i class="fa-sharp  text-dark fa-solid fa-star"></i>
				</div>
              <h3 class="name">${cloths.name}</h3>
              <div class="amount">
              	<span class="price">${cloths.price}</span> <span class="discount">${cloths.discount}</span>
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

renderCloth();