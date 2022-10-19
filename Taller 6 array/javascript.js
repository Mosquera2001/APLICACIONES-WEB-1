function Meses(){
    var meses = new Array('Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre',
    'Octubre','Noviembre','Diciembre');
    for(var i=0;i<12;i++){
        alert(meses[i]);
    }
}
function Producto(){
    function
    Producto_Alimenticio(codigoproducto,nombreproducto,precioproducto){
        this.codigo=codigoproducto;
        this.nombre=nombreproducto;
        this.precio=precioproducto;
    }
    var product1 =new Producto_Alimenticio('000045','Jamon',4.00);
    var product2 =new Producto_Alimenticio('001340','Leche',2.25);
    var product3 =new Producto_Alimenticio('0000134','Pan de pascua',3.75);
    var productos =new Array(product1,product2,product3);
    imprimirDatos(productos);
}

function imprimirDatos(productos){
    var conta=1;
    for(var i=0;i<3;i++){
        
        alert("-----------"+"Producto "+conta+"-----------"+"\n|||||||||||||||||||||||||||||||||||||||||||||||||||||||||"+" \n Código: "+productos[i].codigo+
        "\n Nombre: "+productos[i].nombre+ "\n Precio: $"+productos[i].precio ) 
        conta++;
    }
    }
    