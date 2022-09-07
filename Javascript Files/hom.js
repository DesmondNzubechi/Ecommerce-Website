
let home = document.querySelector('.homy');
let heady = document.querySelector('.heady');


let navLinks = [{
    logo: 'logo.png',
    index: 'Home',
    bag: 'Bags',
    cloth:"Clothes",
    glass: 'Eyeglasses',
    cap: 'Caps',
    shoe: 'Shoes',
    watch: 'WristWatch',
}]	;

let renderHeader = () => {
	navLinks.forEach((navs) =>{
		heady.innerHTML =`
		<div class="bars">
		<div id="open">
		<i class="fa-solid fa-bars"></i>
	</div>
		<div id="close">
		<i class="fa-regular fa-x"></i>
	</div>
	</div>
	<div class="logo">
		<a href="index.html" class="text-light "><!--<img class="" src="${navs.logo}">--><h1>SHOPPY</h1></a>
	</div>
	<div id="form">
		<form>
			<i class="fa-solid fa-magnifying-glass"></i>
			<input type="search" name="" placeholder="Search For Product">
		</form>
	</div>
	<div id="nav" class="bg-dark">
		<ul class="text-light">
			<li><a href="index.html">${navs.index}</a></li>
			<li><a href="#cloth">${navs.cloth}</a></li>
			<!--<li class="pr">
				<a>products</a><i class="fa-solid fa-down-long"></i>
		</li>-->
			<li><a href="#shoe">${navs.shoe}</a></li>
			<li><a href="#watch">${navs.watch}</a></li>
			<li><a href="#bag">${navs.bag}</a></li>
			<li><a href="#cap">${navs.cap}</a></li>
			<li><a href="#glass">${navs.glass}</a></li>
		</ul>
	</div>
	<div id="users">
		<div class="search"><i class="   fa-solid fa-magnifying-glass"></i>
		</div>
		<!--<div class="user">
			<i class="fa-solid fa-user"></i>
		</div>-->
		<div class="cart">
			<i class="fa-solid cartBar fa-cart-shopping"><span class="number">0</span></i>

		</div>
	</div>
		`
	})
}	
renderHeader();
let hom = [
{
	welcome: 'Home Of Affordable Quality Products',
	explain: 'The Best Place To Buy All Kinds Of Quality Clothes, Shoes, Wristwatch and many more at Affordable Price.',
	bt: 'Start Shopping',
	imgSrc: 'bg/bg4.png'
}
        ];


        function myHome(argument) {
	hom.forEach( (hom) => {
		home.innerHTML += `
		<div class="welcome col-md-6 col-sm-12 col-lg-6">
		<div class="text-justify">
		<h1 class="text-dark text-justify">${hom.welcome}</h1>
		<p class="text-justify">
			<!--B2R-COLLECTION have come to serve you better with the best quality outfit.-->
			${hom.explain}</p>
		
		<a href="#cloth" class="btn btn-dark btn-lg " >${hom.bt}</a>
	</div>
</div>
<div class="col-md-6 col-sm-12 col-lg-6">
	<img src="${hom.imgSrc}" class=" im img-fluid ">

</div>
		`;
	} );
}

myHome();






