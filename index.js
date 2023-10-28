
powerflag = false;

function addToCalculator(value) {

    document.getElementById('displayResult').value += value;

    if (powerflag) {
        var numbers = document.getElementById('displayResult').value.split('^')
        document.getElementById('displayResult').value = Math.pow(numbers[0], numbers[1])
        powerflag = false;
    }
}
function finilize() {
    document.getElementById('displayResult').value = eval(document.getElementById('displayResult').value)
}
function reset() {
    document.getElementById('displayResult').value = '';
}
function mathCalculator(mathfunc) {
    if (mathfunc == 'pow') {
        powerflag = true;
        document.getElementById('displayResult').value += '^';
    } else {
        var val = document.getElementById('displayResult').value;
        document.getElementById('displayResult').value = Math[mathfunc](val)

    }
}
// .......................
function clacRuner() {
    var d = new Date();
    var hour = d.getHours();
    var min = d.getMinutes();
    var second = d.getSeconds();

    var P = 'AM';
    if (hour > 12) {
        hour = hour - 12;
        P = "PM"
    }
    if(hour< 10){
      hour= '0'+ hour;
    }
    if(min< 10){
        min= '0'+ min;
      }
      if(second< 10){
        second= '0'+ second;
      }
    var clock = hour + ':' + min + ":" + second + '' + P
    document.getElementById('MyClock').innerHTML = clock
    setTimeout(clacRuner, 1000);
}
clacRuner()