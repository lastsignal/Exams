let counters = new Counters();

$(document).ready(function() {

    $('#check').click(function() {

        let equation = new Equation({
            operand1: $('#operand1').html(),
            operator: $('#operator').html(),
            operand2: $('#operand2').html(),
            answer: $('#answer').val()
        });

        updateResults(equation);
        setup();
        updateButtonStatus();
    });

    $('input').keypress(function(e) {
        if (e.keyCode == 13)
            $('#check').click();
    });

    $('input').keyup(function(e) {
        updateButtonStatus();
    });

    setup();
});

function updateButtonStatus() {
    $('#check').prop("disabled", $('#answer').val() === "");
}

function updateResults(equation) {
    let message = '';

    $li = $("<li class=list-group-item>");

    if (equation.isCorrect) {
        $li.addClass('list-group-item-success');
        message = equation.fullEnteredEquation;
        counters.correctAnswers++;
    } else {
        $li.addClass('list-group-item-danger');
        message = equation.fullEnteredEquation + ". Correct answer is: " + equation.fullCorrectEquation;
        counters.incorrectAnswers++;
    }

    $li.html(message);

    $("#result-ul").prepend($li);

    $("#test-total").html(counters.correctAnswers + counters.incorrectAnswers);
    $("#test-passed").html(counters.correctAnswers);
    $("#test-failed").html(counters.incorrectAnswers);
}

function setup() {

    let equationFactory;

    if (typeof configure === 'function') {
        equationFactory = configure();
    } else {
        equationFactory = new EquationFactory();
    }

    $('#operand1').html(equationFactory.operand1);
    $('#operand2').html(equationFactory.operand2);
    $('#operator').html(equationFactory.operator);
    $('#answer').val('');
    $('#answer').focus();
}