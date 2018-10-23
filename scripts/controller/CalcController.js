class CalcController {
        constructor(display, buttons) {
    
            this.display = document.querySelector(display);
            this.buttons = document.querySelectorAll(buttons);
            this.initEvents();
            this.contSimb = 0;
            this.verificar = "";
        }
    
    
        initEvents(){
            this.buttons.forEach(element => {
                element.addEventListener("click", ()=>{
                    this.txtButton(element.innerHTML);
                })
            });

            this.display.addEventListener('keyup',e =>{

                // this.txtKeyBord(e.key)
                console.log(e.key)

            })


        }
    
        txtButton(txt){

            let num = Number(this.display.value);
    
    
            if(!isNaN(txt))
                this.display.value += txt;
            else{
                switch (txt) {
                        case '.':
                            if(this.display.value.length == 0){
                                this.display.value += 0 + txt;
                            }else{
                                this.display.value += txt;
                            }
                            break;
                        case 'X':
                            this.display.value += '*';
                            break;
                        case '=':
                            this.calculate();
                            break;
                        case 'x²':{
                            this.display.value = Math.pow(num, 2);
                        }
                        case '÷':
                            this.display.value += '/';
                            break;
                        case 'CE':
                            this.display.value = "";
                            break;
                        case '←':
                            this.removeOneCaract();
                            break;
                        case '%':
                            this.display.value+="/100 *";
                        break;

                        default:
                            
                            this.display.value += txt;
                            break;
                    }
                
            }
        }


        txtKeyBord(txt){

            switch(txt){
                case 'Enter':
                    this.calculate();
                break;

                case 'X':
                case 'x':
                    this.display.value += '*';
                break;
                case '%':
                this.display.value+="/100 *";
            break;
            }

    
        }

        
    
        calculate(){
            let calc = eval(this.display.value);
            this.display.value = calc;
            this.contSimb = 0;
            this.verificar = '';
            console.log(this.display.value);
        }
    
        removeOneCaract(){
            let str = this.display.value;
            str = str.substring(0,(str.length - 1));
            this.display.value = str;
        }
    
    }