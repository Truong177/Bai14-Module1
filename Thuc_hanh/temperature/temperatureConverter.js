function temperatureConverter(valnum) {
    valnum = document.getElementById("fahrenheit").value;
    let celsius = (valnum-32) / 1.8
    document.getElementById("celsius").innerHTML = celsius;
}