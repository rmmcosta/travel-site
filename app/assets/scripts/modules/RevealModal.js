import $ from "jquery";

class RevealModal {
    constructor(btnClass, contentClass, visibleClass) {
        this.content = $("."+contentClass);
        this.btn = $("."+btnClass);
        this.visibleClass = visibleClass;
        this.events();
    }

    events(){
        this.btn.click(this.openModal.bind(this));

        this.content.click(this.closeModal.bind(this));
        
        $(document).keyup(this.keyUpHandler.bind(this));
    }

    keyUpHandler(evt) {
        if(evt.keyCode == 27)
            this.closeModal();
    }

    openModal(){
        this.content.addClass(this.visibleClass);
        return false;
    }

    closeModal(){
        this.content.removeClass(this.visibleClass);
    }
}

export default RevealModal;