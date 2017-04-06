class Equation {

    constructor(options = { operand1, operand2, operator, answer }) {

        let defaults = {
            operand1: "1000",
            operand2: "",
            operator: "+",
            answer: ""
        };

        this._settings = Object.assign({}, defaults, options);
        this._setup();
    }

    _setup() {
        this.operand1 = Number(this._settings.operand1);
        this.operand2 = Number(this._settings.operand2);
        this.operator = this._settings.operator;
        this.answer = Number(this._settings.answer);
    }

    get operand1() {
        return this._operand1;
    }

    set operand1(value) {
        this._operand1 = Number(value);
    }

    get operand2() {
        return this._operand2;
    }

    set operand2(value) {
        this._operand2 = Number(value);
    }

    get operator() {
        return this._operator;
    }

    set operator(value) {
        this._operator = value;
    }

    get answer() {
        return this._answer;
    }

    set answer(value) {
        this._answer = Number(value);
    }

    get computedAnswer() {
        switch (this._operator) {
            case "+":
                return this._operand1 + this._operand2;

            case "-":
                return this._operand1 - this._operand2;
        }
    }

    get isCorrect() {
        return this._answer === this.computedAnswer;
    }

    get fullEnteredEquation() {
        return `${this._operand1} ${this._operator} ${this._operand2} = ${this._answer}`
    }

    get fullCorrectEquation() {
        return `${this._operand1} ${this._operator} ${this._operand2} = ${this.computedAnswer}`
    }
}