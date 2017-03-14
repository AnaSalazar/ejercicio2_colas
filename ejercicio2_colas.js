var nombres = [];

function Persona() {
 var elementos = [];

  this.push = function(elemento){
    elementos.push(elemento);
  }
  this.isEmpty = function(){
    return elementos.length == 0;
  }

}

var personaNombre = new Persona();
var nombre = [];
nombre.push("Ana ");
nombre.push("Edith ");
nombre.push("Sue ");
nombre.push("Vale ");
nombre.push("Mimi ");


var personaApellido = new Persona();
var apellido = [];
apellido.push("Salazar");
apellido.push("Mandujano");
apellido.push("Martinez");
apellido.push("de Leon");
apellido.push("Arizmendi");

for(var i = 0; i < 5 ; i++ ){
nombres.push("<br>" + nombre.shift() + apellido.shift());
}
document.write(nombres);
