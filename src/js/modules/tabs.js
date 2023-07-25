const tabs = () => {

    const tabsBinder = (tabSelector, contentSelector, active, displayProperty) => {
        let tabs = document.querySelectorAll(tabSelector),
            content = document.querySelectorAll(contentSelector),
            activeTab = active - 1;

        function removeActiveTabClass() {
            tabs.forEach(tab => {
                tab.classList.remove('rent-content__tab--active');
            });
        }

        function hideContent() {
            content.forEach(contentItem => {
                contentItem.style.display = 'none';
            });
        }

        tabs[activeTab].classList.add('rent-content__tab--active');
        hideContent();
        content[activeTab].style.display = displayProperty;

        tabs.forEach((tab, tabIndex) => {

            tab.addEventListener('click', () => {
                removeActiveTabClass();
                hideContent();
                tab.classList.add('rent-content__tab--active');
                content[tabIndex].style.display = displayProperty
            });
        });
    }

    tabsBinder('.rent-content__tab', '.rent-content__tab-content', 1, 'flex');

}

export default tabs;