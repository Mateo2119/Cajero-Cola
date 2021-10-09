let cola = null;
let aux = 1;
const clientes_iniciales = 5;

function iniciar(){
    cola = new Cola();
    let procesos = null;
    let nombre = null;
    for(let i=0;i<clientes_iniciales ;i++){
        procesos = Math.floor(Math.random()*9)+1;
        nombre = "Cliente "+(i+1);
        console.log(nombre+", Procesos: "+procesos);
        cola.insertar(nombre,procesos);
    }
    imprimirCola();
};

function atender(){    
    if (cola != null){
        if (cola.getSize() != 0) {
            //ATENDER COLA
            console.log("atendiendo a: "+cola.head.value);
            cola.atender();
            imprimirCliente(cola.head.value,cola.head.procesos);
            imprimirColaMenos();         
        } else {
            console.log("Cola vacia");
        }
    } else {
        console.log("No existe una cola");
    }
};

function añadir(){
    let procesos = null;
    let nombre = null;    
    procesos = Math.floor(Math.random()*9)+1;
    nombre = "Cliente "+(clientes_iniciales + aux);
    aux++;
    console.log(nombre+", Procesos: "+procesos);
    cola.insertar(nombre,procesos);
    imprimirCola();
}