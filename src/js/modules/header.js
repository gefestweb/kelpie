const header = () => {
	const headerDesc = document.querySelector(".header");
	const headerContent = document.querySelector(".header__desc");
	const headerLogo = document.querySelector(".header__logo--mob-top");

	window.addEventListener("scroll", function () {
		if (window.scrollY > 0) {
			headerDesc.classList.add("active");
			if (window.matchMedia("(max-width: 1000px)").matches) {
				headerContent.style.backgroundColor = "white";
				headerLogo.classList.remove("header__logo--mob-top");
				headerLogo.classList.add("header__logo--mob-scroll");
			}
		} else {
			headerDesc.classList.remove("active");
			if (window.matchMedia("(max-width: 1000px)").matches) {
				headerContent.style.backgroundColor = "unset";
				headerLogo.classList.remove("header__logo--mob-scroll");
				headerLogo.classList.add("header__logo--mob-top");
			}
		}
	});
};
export default header;
