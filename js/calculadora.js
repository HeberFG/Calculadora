const sumar = () =>{
    console.log('Entró a sumar');
    if(document.getElementById('num1').value == '' || document.getElementById('num2').value == ''){
        alert('No se aceptan valores vacios')
    }else{
        let num1 = parseInt(document.getElementById('num1').value);
        let num2 = parseInt(document.getElementById('num2').value);
        document.getElementById('resultado').value = (num1 + num2);
    }
}

const restar = () =>{
    console.log('Entró a restar');
    if(document.getElementById('num1').value == '' || document.getElementById('num2').value == ''){
        alert('No se aceptan valores vacios')
    }else{
        let num1 = parseInt(document.getElementById('num1').value);
        let num2 = parseInt(document.getElementById('num2').value);
        document.getElementById('resultado').value = (num1 - num2);
    }
}

const dividir = () =>{
    console.log('Entró a dividir');
    if(document.getElementById('num1').value == '' || document.getElementById('num2').value == ''){
        alert('No se aceptan valores vacios')
    }else{
        let num1 = parseInt(document.getElementById('num1').value);
        let num2 = parseInt(document.getElementById('num2').value);
        document.getElementById('resultado').value = (num1 / num2);
    }
}

const multiplicar = () =>{
    console.log('Entró a multiplicar');
    if(document.getElementById('num1').value == '' || document.getElementById('num2').value == ''){
        alert('No se aceptan valores vacios')
    }else{
        let num1 = parseInt(document.getElementById('num1').value);
        let num2 = parseInt(document.getElementById('num2').value);
        document.getElementById('resultado').value = (num1 * num2);
    }
}
