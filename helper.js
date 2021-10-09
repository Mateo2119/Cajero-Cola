function imprimirCola(){
    divCola = document.getElementById("queue");
    divCola.innerHTML = "";
    let actual = cola.head; 
    while(actual){
        divCola.innerHTML += actual.value+": Procesos: "+actual.procesos+"<br>";
        actual = actual.next;
    }    
}

function imprimirColaMenos(){
    divCola = document.getElementById("queue");
    divCola.innerHTML = "";
    let actual = cola.head.next; 
    while(actual){
        divCola.innerHTML += actual.value+": Procesos: "+actual.procesos+"<br>";
        actual = actual.next;
    }    
}

function imprimirCliente(nombre,procesos){
    divCajero = document.getElementById("cajero");
    divCajero.innerHTML = nombre+"<br>Procesos: "+procesos;
}

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}
