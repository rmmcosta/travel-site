import $ from "jquery";

class RevealOnScroll {
    constructor() {
        this.largeHero = $(".large-hero");
        this.itemsToReveal = $(".feature-item");
        this.events();
    }

    events() {
        //this.itemsToReveal.hide();
        $(window).scroll(function(){
            // This is then function used to detect if the element is scrolled into view
            function elementScrolled(elem)
            {
                var docViewTop = $(window).scrollTop();
                var docViewBottom = docViewTop + $(window).height();
                var elemTop = $(elem).offset().top;
                console.log(elemTop, docViewTop, docViewBottom);
                return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
            }
             
            // This is where we use the function to detect if ".box2" is scrolled into view, and when it is add the class ".animated" to the <p> child element
            if(elementScrolled('.feature-item')) {
                var els = $('.feature-item'),
                    i = 0,
                    f = function () {
                        els.addClass('feature-item--is-visible');
                        //$(els[i++]).addClass('feature-item--is-visible');
                        //if(i < els.length) setTimeout(f, 100);
                    };
                f();
            } else {
                var els = $('.feature-item'),
                    i = 0,
                    f = function () {
                        els.removeClass('feature-item--is-visible');
                        //$(els[i++]).removeClass('feature-item--is-visible');
                        //if(i < els.length) setTimeout(f, 100);
                    };
                f();
            }
        });
    }

    toggleReveal(){
        alert(this.itemsToReveal.offset().top);
        this.itemsToReveal.show();
    }
}

export default RevealOnScroll;