function start(){
    

    const canvas=
    document.querySelector("#glCanvas");

    const gl = canvas.getContext("webgl");
    if(!gl){
        altert("El navegador no es compatible");
        return;
    }
    gl.clearColor(1.0, 1.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}