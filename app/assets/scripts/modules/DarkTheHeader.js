import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class DarkTheHeader {
    constructor(elem,trigger,mClass,direction,isAdd, oSet) {
        this.pageHeader = $(elem);
        this.theTrigger = $(trigger);
        this.modifyClass(this.pageHeader, this.theTrigger, mClass, direction, isAdd, oSet);
    }

    modifyClass(theHeader, theTrigger, mClass, dir, isAdd, oSet) {
        if(theTrigger[0])
            new Waypoint({
                element: theTrigger[0],
                handler: function(direction) {
                    if(direction == dir) {
                        if(isAdd)
                            theHeader.addClass(mClass);
                        else
                            theHeader.removeClass(mClass);
                    }
                },
                offset: oSet
            });
    }
}

export default DarkTheHeader;