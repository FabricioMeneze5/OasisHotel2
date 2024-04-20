document.addEventListener('DOMContentLoaded', function() {
    const navButtons = this.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < navButtons.length; i++) {
        navButtons[i].addEventListener('click', function(clickedButton) {
            const tabTarget = clickedButton.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${tabTarget}]`);

            hideTabs();
            tab.classList.add('amenities__list--is-active');
            removeButtonActive();
            clickedButton.target.classList.add('navButton--is-active');
        });
    }
})

function removeButtonActive() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('navButton--is-active');
    }
}

function hideTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('amenities__list--is-active');
    }
}