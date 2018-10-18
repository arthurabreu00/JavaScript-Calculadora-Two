class CalcController {

    constructor(display, buttons) {

        this.display = document.querySelector(display);
        this.buttons = document.querySelectorAll(buttons);
        this.initEvents();
    }


    initEvents(){
        this.buttons.forEach(element => {
            element.addEventListener("click", ()=>{

                this.txtButton(element.innerHTML);
            })
        });
    }

    txtButton(txt){

        if(!isNaN(txt))
            this.display.value += txt;
        else{
            switch (txt) {
                case '%':
                    break;
                case '.':
                    if(this.display.value.length == 0){
                        this.display.value += 0 + txt;
                    }else{
                        this.display.value += txt;
                    }
                    break;
                case 'x²':
                    break;
                case 'CE':
                    this.display.value = "";
                    break;
                case '←':
                    this.display.value = this.removeOneCaract();
                    break;
                default:
                    this.display.value += txt;
                    break;
            }
        }
    }

    removeOneCaract(){
        let str = this.display.value;
        str = str.substring(0,(str.length - 1));
        return str;

        


    }




}