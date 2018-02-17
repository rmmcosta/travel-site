import $ from "jquery";

class RevealModal {
    constructor(btnId, contentClass, visibleClass) {
        this.content = $("."+contentClass);
        this.btn = $("#"+btnId);
        this.action(this.content, visibleClass);
    }

    action(content, visibleClass){
        this.btn.click(function(){
            content.addClass(visibleClass);
        });

        content.click(function(){
            content.removeClass(visibleClass);
        });
    }
}

export default RevealModal;