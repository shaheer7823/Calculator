var input = document.getElementById('inp')
console.log(input)

function setANumber(num){
    console.log('number', num)
    input.value += num
}

function allClear(){
    input.value = ""
}

function deleteLast() {
    const display = document.getElementById("inp");
    display.value = display.value.slice(0, -1) || "0";
}

function calc(){
    console.log(input.value)
    var output = eval(input.value)
    console.log(output)
    input.value = output
}
