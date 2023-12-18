const header = () => {
	const headerToggle = () => {
		const headerDesc = document.querySelector(".header");
		const headerContent = document.querySelector(".header__desc");
		const headerLogo = document.querySelector(".header__logo--mob-top");

		window.addEventListener("scroll", function () {
			if (window.matchMedia("(max-width: 1000px)").matches) {
				if (window.scrollY > 0) {
					headerDesc.classList.add("active");
					headerContent.style.backgroundColor = "white";
					headerLogo.classList.remove("header__logo--mob-top");
					headerLogo.classList.add("header__logo--mob-scroll");
				} else {
					headerDesc.classList.remove("active");
					headerContent.style.backgroundColor = "unset";
					headerLogo.classList.remove("header__logo--mob-scroll");
					headerLogo.classList.add("header__logo--mob-top");
				}
			} else {
				if (window.scrollY > 0) {
					headerDesc.classList.add("active");
				} else {
					headerDesc.classList.remove("active");
				}
			}
		});
	}
	// headerToggle();

	const submenuToggle = () => {

		const subNavigation = {
			'Kelpie holostand': {
				'holostand': 'Описание',
				'characteristics': 'Характеристики',
				'video': 'Видео',
				'rent': 'Аренда и контент',
				'portfolio': 'Портфолио',
				'feedback': 'Связаться'
			}, 'Технологии': {
				'1': '111',
				'11': '111',
				'111': '111'
			}, 'Сценарии использования': {
				'2': '222',
				'22': '222',
				'222': '222'
			}, 'Портфолио': {
				'3': '333',
				'33': '333',
				'333': '333'
			}, 'Контакты': {
				'4': '444',
				'44': '444',
				'444': '444',
			}
		}

		function createSubmenu(menuItem) {
			const submenu = document.querySelector('.header__submenu');
			const mobMenuItems = document.querySelector('.mob-menu__nav').querySelectorAll('.mob-menu__items');
			submenu.innerHTML = '';
			const submenuItems = subNavigation[menuItem];
			let mobSubMenu;
			mobMenuItems.forEach(mobItem => {
				if (mobItem.textContent == menuItem) {
					mobSubMenu = mobItem.nextElementSibling;
				}
			})
			for (let key in submenuItems) {
				const a = document.createElement('a');
				a.href = '#' + key;
				const li = document.createElement('li');
				li.className = 'sub-mob-menu__item';
				li.textContent = submenuItems[key];
				a.appendChild(li);
				submenu.appendChild(a);
				if (mobSubMenu) {
					const aCopy = a.cloneNode(true);
					mobSubMenu.appendChild(aCopy);
				}
			}
		}

		function checkURL() {
			const currentURL = window.location.pathname;

			switch (currentURL) {
				case '/':
					// createSubmenu('Kelpie holostand');
					break;
				case '/1':
					// createSubmenu('Технологии');
					break;
				case '/2':
					// createSubmenu('Сценарии использования');
					break;
				case '/3':
					// createSubmenu('Портфолио');
					break;
				case '/4':
					// createSubmenu('Контакты');
					break;
			}
		}
		window.onload = checkURL;
	}
	// submenuToggle();

	function activeSection() {
		const headerSubnav = document.querySelector('.header__subnav');
		let activeItemDefault = null;
		const getSubmenuItem = setInterval(() => {

			activeItemDefault = document.querySelector(".header__submenu").firstChild;
			if (activeItemDefault) {
				activeItemDefault.classList.add('active');
				clearInterval(getSubmenuItem);
			}
		}, 100)


		window.addEventListener("scroll", function () {
			if (window.scrollY > 10) {
				headerSubnav.classList.add('active');
			} else {
				headerSubnav.classList.remove('active');
			}
			let sections = document.querySelectorAll("section[id]");
			let currentSection = null;
			let activeItemDefault = document
				.querySelector(".header__submenu")
				.querySelectorAll('a');

			sections.forEach(function (section) {
				let rect = section.getBoundingClientRect();
				if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
					currentSection = section;
					// console.log(currentSection);

				}
			});

			// Удалите класс активности из всех пунктов меню
			let menuItems = document
				.querySelector(".header__submenu")
				.querySelectorAll('a');
			menuItems.forEach(function (item) {
				item.classList.remove("active");
			});

			// Добавьте класс активности к соответствующему пункту меню
			if (currentSection) {
				// console.log(currentSection);
				let menuItem = document.querySelector('a[href="#' + currentSection.id + '"]');
				// console.log(menuItem);
				menuItem.classList.add("active");
			}
		});
	}

	// activeSection();

};
export default header;


