import $ from "jquery";

class MobileMenu  {
    constructor () {
        this.pageHeader = $(".page-header");
        this.menuBg = $(".page-header__menu-bg")
        this.menuIcon = $(".page-header__menu-icon");
        this.menuLinks = $(".page-header__menu-container");
        this.pNav = $(".primary-nav");
        this.events();
    }

    events() {
        this.menuBg.click(this.toggleMenu.bind(this)); //bind is used to change the this context inside the called function
    }

    toggleMenu(){
        this.menuLinks.toggleClass("page-header__menu-container--is-visible");
        this.pageHeader.toggleClass("page-header--is-expanded");
        this.pNav.toggleClass("primary-nav--pull-right");
        this.menuIcon.toggleClass("page-header__menu-icon--close-x");
    }
}

export default MobileMenu;