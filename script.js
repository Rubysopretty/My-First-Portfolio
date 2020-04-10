const navSlide = () => {
	const burger = document.querySelector(".burger");
	const nav = document.querySelector(".nav-links");
	const navlinks = document.querySelectorAll('.navlinks li');

burger.addEventlistener('click', () => {
	nav.classlist.toggle('nav-active');
});

navLinks.forEach ((link,index) => {

   link.style.animation ='navLinkFade 0.5 ease forwards $ {index /7+1.5}s';
}

	)

}

const app = () => {

	navSlide ();
	navSlide ();
	navSlide ();
	navSlide ();
}

navSlide ();