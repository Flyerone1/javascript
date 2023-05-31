function openMenu(){
    document.getElementById("mainMenu").style.width="480px";//vista en celular js //
    document.getElementById("mainMenu").style.display="flex";//vista en celular js //
    document.getElementById("mainMenu").style.height="1000px";//vista en celular js //
    document.getElementById("openmenu").style.display="none";//vista en celular js //
    }
    
    function closeNav(){
    document.getElementById("mainMenu").style.width="0";//cerrar vista en celular js //
    document.getElementById("mainMenu").style.transition="0.9s all";//cerrar vista en celular js //
    window.location.reload()// es lo mismo de pulsar tecla F5
    }
