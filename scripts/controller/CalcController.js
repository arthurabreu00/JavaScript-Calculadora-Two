class CalcController {

    constructor(display, buttons) {

        this.display = document.querySelector(display);
        this.buttons = document.querySelectorAll(buttons);
        this.getButtons();
        this.operacao = [0,0];
        this.cont = [];
        this.contador = 0;
        this.result = 0;
    }


    getButtons() {

        this.buttons.forEach((btn) => {

            btn.addEventListener('click', () => {

                let txtBtn = btn.innerHTML;
                this.calc(txtBtn);

            })

        })

    }


    calc(btn) {


        if (isNaN(btn)) {
            if(this.cont == 0){
                if (btn == '.') {
                    this.cont.push("0");
                } else if (btn != '←' || btn != 'C' || btn != 'CE') {
                    console.error("Digite um número antes de simbolos")
                }
            } else{
                this.operacao[this.contador] =(this.conversaoNum(this.cont));
                this.contador++;
                this.cont = [];
                console.log(this.operacao)
            }


        }
        console.log('cont ', this.contador )
        if(this.contador  >= 2 ){
            this.contador = 0;
        }




        switch (btn) {
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
            case '.':
                this.cont.push(btn);
                this.result = this.conversaoTxt(this.cont)
                break;
            case '←':
                this.cont.pop();
                break;
            case '%':
                this.percent();
                break;
            case 'x²':
                this.elevado();
                break;
            case '¹/x':

                break;
            case 'CE':
                this.operacao = [0,0];
                this.cont = [];
                break;
            case 'C':
                this.operacao[1] = 0;
                this.cont = [];
                break;
            case '÷':
                break;
            case '-':
                break;
            case '±':
                break;
            case '=':
                this.mostrarTela(this.result);
                break;

        }

        this.mostrarTela(this.result);

    }


    percent(){

        let x = this.operacao[0];
        let y = this.operacao[1];


        let res = (x*100) / y 


    };

    
    elevado(){

        let x = this.operacao[0];
        let y = this.operacao[1];


        let res = Math.pow(x,y); 

        this.mostrarTela(res)

    };


    conversaoNum(str) {

        let num = this.conversaoTxt(str);

        return parseFloat(num);
    }

    conversaoTxt(array, int = null) {

        if (int != null)
            return int;

        let conv = array.toString().split(",").join("")

        return conv;

    }


    mostrarTela(val) {
        console.log(val)
        this.display.innerHTML = val;
    }

}