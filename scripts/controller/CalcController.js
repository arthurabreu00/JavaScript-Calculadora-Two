class CalcController {
    // Teste
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
        }
    
        txtButton(txt){
    
    
            if(!isNaN(txt))
                this.display.value += txt;
            else{
                this.contSimb++;
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
                        case 'X':
                            this.display.value += '*';
                            break;
                        case '=':
                            this.calculo();
                            break;
                        case 'x²':{
                            this.display.value += this.display.value * this.display.value;
                        }
                        case '÷':
                            this.display.value += '/';
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
    
        calculo(){
            let calc = eval(this.display.value);
            this.display.value = calc;
            this.contSimb = 0;
            this.verificar = '';
        }
    
        removeOneCaract(){
            let str = this.display.value;
            str = str.substring(0,(str.length - 1));
            return str;
    
            
    
    
        }
    
    
    
    
    }