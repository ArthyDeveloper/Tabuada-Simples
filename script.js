const calcularbtn = document.querySelector('.Calcular');
var C1 = document.getElementById('C1')
var C2 = document.getElementById('C2')
var C3 = document.getElementById('C3')
var C4 = document.getElementById('C4')
var C5 = document.getElementById('C5')
var C6 = document.getElementById('C6')
var C7 = document.getElementById('C7')
var C8 = document.getElementById('C8')
var C9 = document.getElementById('C9')
var C10 = document.getElementById('C10')



calcularbtn.addEventListener('click', function(){
    var numeroInput = document.getElementById('num').value;
    var x1 = 1 * numeroInput
    var x2 = 2 * numeroInput
    var x3 = 3 * numeroInput 
    var x4 = 4 * numeroInput 
    var x5 = 5 * numeroInput 
    var x6 = 6 * numeroInput 
    var x7 = 7 * numeroInput 
    var x8 = 8 * numeroInput 
    var x9 = 9 * numeroInput 
    var x10 = 10 * numeroInput
    calcular();
    function calcular() {
        C1.innerHTML = "1 x " + numeroInput + " = " + x1
        C2.innerHTML = "2 x " + numeroInput + " = " + x2
        C3.innerHTML = "3 x " + numeroInput + " = " + x3
        C4.innerHTML = "4 x " + numeroInput + " = " + x4
        C5.innerHTML = "5 x " + numeroInput + " = " + x5
        C6.innerHTML = "6 x " + numeroInput + " = " + x6
        C7.innerHTML = "7 x " + numeroInput + " = " + x7
        C8.innerHTML = "8 x " + numeroInput + " = " + x8
        C9.innerHTML = "9 x " + numeroInput + " = " + x9
        C10.innerHTML = "10 x " + numeroInput + " = " + x10
    }
})
