
function NuevaVentana() {
    myWindow = window.open("", "", "width=300,height=200");
        myWindow.document.write(
            '<body bgcolor="#808080">',
                '<h3><p style="color: white">Jean Carlos Mosquera Parraga</p></h3>'
                );
                myWindow.document.write(
                    '<input type=button onClick=window.close() value="Cerrar Ventana Secundaria" > ',
                    
                    );
}
