class Nodo{
    constructor(value,procesos){
    this.value = value;
    this.procesos = procesos;
    this.next = null;
    }
}

class Cola{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
        this.restantes = 5;
    }

    insertar(value, procesos){
        const nodo = new Nodo(value, procesos);

        if(this.head){
            this.tail.next = nodo;
            this.tail = nodo;
        }else{
            this.head = nodo;
            this.tail = nodo;
        }
        this.length++;
    }

    eliminar(){
        const actual = this.head;
        this.head = this.head.next;
        this.length--;
        console.log("Nodo eliminado");
        return actual.value;
    }

    async atender() {
        let actual = this.head;
        console.log("Restan: " + this.restantes + " Transacciones");
        if (actual.procesos != 0) { //SI SE ACABAN LOS PROCESOS ELIMINA EL NODO 
            if (this.restantes != 0) {//Si no ha agotado las 5 transacciones 
                await delay(2);
                actual.procesos--;
                this.restantes--;                
                atender();
                console.log("procesos: " + actual.procesos);
            }else{ //Si se supera el limite de transacciones
                console.log("no se puede atender más");
                this.insertar(actual.value,actual.procesos);
                this.eliminar();
                this.restantes = 5;              
                atender();
            }
        } else { //ATIENDE AL SIGUIENTE
            this.restantes = 5;
            this.eliminar();
            atender();
        }
    }

    mostrar(){
        let actual = this.head;
        while(actual){
            console.log("Nombre: "+actual.value+" Procesos: "+actual.procesos);
            actual = actual.next;
        }
    }

    isEmpty(){
        return this.length === 0;
    }

    getSize(){
        return this.length;
    }
}