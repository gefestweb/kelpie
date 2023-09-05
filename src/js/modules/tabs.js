const tabs = () => {

    const tabsBinder = (tabSelector, contentSelector, activeClass, activeContent, displayProperty) => {
        let tabs = document.querySelectorAll(tabSelector),
            content = document.querySelectorAll(contentSelector),
            activeTab = activeContent - 1;

        if (tabs && content) {

            function removeActiveTabClass() {
                tabs.forEach(tab => {
                    tab.classList.remove(activeClass);
                });
            }

            function hideContent() {
                content.forEach(contentItem => {
                    contentItem.style.display = 'none';
                });
            }
            tabs[activeTab].classList.add(activeClass);
            hideContent();
            content[activeTab].style.display = displayProperty;
            tabs.forEach((tab, tabIndex) => {

                tab.addEventListener('click', () => {
                    removeActiveTabClass();
                    hideContent();
                    tab.classList.add(activeClass);
                    content[tabIndex].style.display = displayProperty;
                });
            });
        } else {
        }


    }

    tabsBinder('.six-screen__tab', '.rent-content__tab-content', 'rent-content__tab--active', 1, 'flex');
    tabsBinder('.four-screen__button', '.four-screen__rama-item', 'four-screen__button--active', 1, 'block');
    tabsBinder('.dop-screen2__tab', '.dop-screen2__tab-content', 'rent-content__tab--active', 1, 'block');

}

export default tabs;