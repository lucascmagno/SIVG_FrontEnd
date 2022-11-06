/*Menu hamburger*/

//quando o botao, menu hamburger, for clickado
function clickMenu() {
    var itens = document.getElementById('itens');
    if(itens.style.display == 'block'){
        itens.style.display = 'none';
    }else{
        itens.style.display = 'block';
    }
}
//caso mude o tamanho da tela para maior que 768
function mudouTamanho(){
    if(window.innerWidth >= 768){
        itens.style.display =  'block';
    }else{
        itens.style.display = 'none';
    }
}