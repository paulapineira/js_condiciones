//Visualización

const hideAndShow = (id) =>{
    const element = document.getElementsByClassName('item');
    for (i=0; i < element.length; i++){
        if (element[i].id === id && id != "item3"){
            element[i].style.display = "flex";
            element[i].style.justifyContent = "center"

        }else if(element[i].id === id && id === "item3"){
            element[i].style.display = "block";
        }
        else{
            element[i].style.display = "none";
        }
    }
}


//Ejercicio 1

const hideAndShowBorder = () =>{
    const image = document.querySelector('#image');
    if (image.style.border === "")
        image.style.border = '2px solid red';
    else
        image.style.border = "";
}
//Ejercicio 2

const checkSum = () => {
    const cantidad = document.getElementsByTagName('input');
    let total = 0;
        for (inp=0; inp < cantidad.length; inp++){
        total += parseInt(cantidad[inp].value);
        }

    if (0 < total && total <= 10){
        document.querySelector('#message').textContent = "Llevas " + total + " stickers";
    }else if (total > 10){
        document.querySelector('#message').textContent = "Llevas demasiados stickers";
    }else if (total < 0){
        document.querySelector('#message').textContent = "No puedes agregar números negativos";
    }else{
        document.querySelector('#message').textContent = "Por favor agrega stickers";
    }
}

//Ejercicio 3

const checkPass = () => {
    const numb1 = document.querySelector('#num1').value;
    const numb2 = document.querySelector('#num2').value;
    const numb3 = document.querySelector('#num3').value;
    if (numb1 === '9' && numb2 ==='1' && numb3 === '1'){
        document.getElementById('passMensaje').textContent = "Password 1 correcto";
    }else if (numb1 === '7' && numb2 ==='1' && numb3 === '4'){
        document.getElementById('passMensaje').textContent = "Password 2 es correcto";
    }else{
        document.getElementById('passMensaje').textContent = "Password incorrecto";
    }
}

