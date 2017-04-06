class EquationFactory {

    constructor(options) {

        let defaults = {
            operand1Maker: this.randomGenerator,
            operand2Maker: this.randomGenerator,
            operatorMaker: function() { return Math.random() > 0.5 ? "-" : "+"; }
        };

        this._settings = Object.assign({}, defaults, options);

        this.operand1 = this._settings.operand1Maker();
        this.operand2 = this._settings.operand2Maker();
        this.operator = this._settings.operatorMaker();

        if (this.operator == "-" && this.operand1 < this.operand2) {
            // swap operands
            this.operand1 = [this.operand2, this.operand2 = this.operand1][0];
        }
    }

    randomGenerator() {
        return Math.floor(Math.random() * 120);
    }
}