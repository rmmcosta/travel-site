import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class RevealOnScroll {
    constructor(item, oSet) {
        this.itemsToReveal = $(item);
        this.hideInitially();
        this.createWaypoints(oSet);
    }

    hideInitially() {
        this.itemsToReveal.addClass('reveal-item');
    };

    createWaypoints(oSet) {
        var elem = this.itemsToReveal;
        elem.each(function(){
            var currElem = this;
            var waypoint = new Waypoint({
                element: currElem,
                handler: function(direction) {
                console.log(direction);
                if(direction == 'down')
                    $(currElem).addClass('reveal-item--is-visible');
                else
                    $(currElem).removeClass('reveal-item--is-visible');
                },
                offset: oSet
              });
        });
    }
}

export default RevealOnScroll;