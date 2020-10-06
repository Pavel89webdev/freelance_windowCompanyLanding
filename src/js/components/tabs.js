
const tabs = (tabsButtonsWrapperSelector,tabsButtonSelector, tabContentSelector, activeClass, display = 'block') => {

    const tabButtonsWrapper = document.querySelector(tabsButtonsWrapperSelector),
          tabButtons = document.querySelectorAll(tabsButtonSelector),
          tabContent = document.querySelectorAll(tabContentSelector);

    function hideAllTabs(){
        tabContent.forEach( item => {
            item.style.display = 'none';
        });

        tabButtons.forEach( item => {
            item.classList.remove(activeClass);
            item.lastElementChild.classList.remove(activeClass);
        });
    }

    function showTab(i = 0){
        tabContent[i].style.display = display;

        tabButtons[i].classList.add(activeClass);
        tabButtons[i].lastElementChild.classList.add(activeClass);
    }

    hideAllTabs();
    showTab();

    tabButtonsWrapper.addEventListener('click', (e) => {
        const target = e.target;

        if( target.classList.contains(tabsButtonSelector.replace(/\./, '')) ||
            target.parentNode.classList.contains( tabsButtonSelector.replace(/\./, '') ))
            {
                hideAllTabs();
                tabButtons.forEach( (item, i) => {
                    if( item == target || item == target.parentNode ){
                        showTab(i);
                    }
                });
            }
    });
    
};

export default tabs;