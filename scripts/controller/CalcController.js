class CalcController {
        constructor(display, buttons) {
    
            this.display = document.querySelector(display);
            this.buttons = document.querySelectorAll(buttons);
            this.initEvents();
            this.contSimb = 0;
            this.verificar = "";
            this.lastOperation = "";
        }

        isNumber(e){

            let tecla = e.keyCode;

            if(!isNaN(tecla)){
                return true;
            }

            if(tecla >= 65 && tecla <= 90){
                return false;
            }

            return false;

        }
    
    
        initEvents(){
            this.buttons.forEach(element => {
                element.addEventListener("click", ()=>{
                    this.txtButton(element.innerHTML);
                })
            });

            this.display.addEventListener('keyup',e =>{
                if(this.isNumber(e)){

                    console.log("--------------------")
                    console.log("Código", e.keyCode)
                    console.log("Tecla", e.key)
                
                    this.txtKeyBord(e.key);
                };

                
            })
        }

        observer(){
            if(this.lastOperation == "x²"){
                this.removeOneCaract();
            }
        }
    
        txtButton(txt){

            let num = Number(this.display.value);
            this.observer();
    
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
                        case 'x':
                            this.display.value += '*';
                            break;
                        case '=':
                            this.calculate();
                            break;
                        case 'x²':
                            this.lastOperation = "x²";
                            this.display.value = Math.pow(num, 2);
                        
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
                case '=':
                    this.removeOneCaract();
                    this.calculate();
                break;
                case 'X':
                case 'x':
                    this.removeOneCaract();
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
        }
    
        removeOneCaract(){
            let str = this.display.value;
            str = str.substring(0,(str.length - 1));
            this.display.value = str;
        }
    
    }