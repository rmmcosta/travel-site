import $ from "jquery";
import smoothScroll from "jquery-smooth-scroll";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class HighLightLinks {
    constructor() {
        this.pageSections = $(".page-section");
        this.links = $(".primary-nav a");
        this.largeHero = $(".large-hero");
        this.highLightLinks();
        this.smoothLinks();
    }

    smoothLinks() {
        this.links.smoothScroll(
            {   easing: 'swing',
                speed: 800,
                autoFocus: true
            }  
        ); 
    }

    highLightLinks() {
        var links = this.links;
        var oSet = '0%';
        var stop = this.largeHero;

        this.pageSections.each(function(){
            var currElem = this;

            new Waypoint({
                element: currElem,
                handler: function(direction){
                    if(direction == 'down') {
                        var linkId = $(currElem).attr("data-matching-link");
                        links.removeClass("is-current-link");
                        $(linkId).addClass("is-current-link");
                    }
                },
                offset: '20%'
            });

            new Waypoint({
                element: currElem,
                handler: function(direction){
                    if(direction == 'up') {
                        var linkId = $(currElem).attr("data-matching-link");
                        links.removeClass("is-current-link");
                        $(linkId).addClass("is-current-link");
                    }
                },
                offset: 'bottom-in-view'
            });
        });

        new Waypoint({
            element: stop[0],
            handler: function(direction){
                if(direction == 'up') {
                    links.removeClass("is-current-link");
                }
            },
            offset: 'bottom-in-view'
        });
    }
}

export default HighLightLinks;