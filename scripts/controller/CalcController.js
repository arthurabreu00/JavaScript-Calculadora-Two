class CalcController {

    constructor(display, buttons) {

        this.display = document.querySelector(display);
        this.buttons = document.querySelectorAll(buttons);
        this.getButtons();
        this.operacao = [];
        this.cont = [];
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
                this.cont
            }

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
                this.mostrarTela(this.conversaoTxt(this.cont));
                break;
            case '←':
                this.cont.pop();
                break;
            case '%':
                break;
            case 'x²':
                break;
            case '¹/x':
                break;
            case 'CE':
                break;
            case 'C':
                break;
            case '÷':
                break;
            case '-':
                break;
            case '±':
                break;
            case '=':
                break;

        }


        


    }

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
        this.display.innerHTML = val;
    }

}