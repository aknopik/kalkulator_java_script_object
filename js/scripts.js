'use strict';

(function(){
    function Calculator(){
        this._resPlace = document.querySelector('#res');
        this._buttons = document.querySelectorAll('input[type="button"]');
        this._assignEvents(this._buttons);
    }
    Calculator.prototype._assignEvents = function(buttons){
        buttons.forEach(this._click, this);
    }
    Calculator.prototype._click = function(e){
        e.addEventListener('click', this._calculator.bind(this));
    }
    Calculator.prototype._calculator = function(){
        const buttonValue = event.target.value;
        if (buttonValue == 'C') {
        this._resPlace.value = '';
        } else if (buttonValue == '=') {
        this._resPlace.value = eval(this._resPlace.value);
        } else {
        this._resPlace.value += buttonValue;
        }  
    }
    var oblicz = new Calculator();
})()
