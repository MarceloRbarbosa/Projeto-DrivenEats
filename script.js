    
       function selecionarPrato(prato) {
         const botaoMarcado = document.querySelector(".pf .corselecionado");
         if (botaoMarcado !== null) {
             botaoMarcado.classList.remove("corselecionado");
         }
         prato.classList.add("corselecionado");

         confirmar();
      }
      
      function selecionarBebida(bebida) {
         const botaoMarcado = document.querySelector(".drinks .corselecionado");
         if (botaoMarcado !== null) {
             botaoMarcado.classList.remove("corselecionado");
         }
         bebida.classList.add("corselecionado");
      
         confirmar();
      }
      
      function selecionarSobremesa(doce) {

         const botaoMarcado = document.querySelector(".sobremesa .corselecionado");
         if (botaoMarcado !== null) {
             botaoMarcado.classList.remove("corselecionado");
         }
         doce.classList.add("corselecionado");
         confirmar();
      }
      
      function confirmar() {
         const pratoSelecionado = document.querySelector(".pf .corselecionado");
         const bebidaSelecionada = document.querySelector(".drinks .corselecionado");
         const sobremesaSelecionada = document.querySelector(".sobremesa .corselecionado");
         
         if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada) {
             document.querySelector(".confirmacao").classList.add("escondido");
             document.querySelector(".confirmar-pedido").classList.remove("escondido");
         }
   
      } 


    function finalizar(){
    document.querySelector(".trasnparente").classList.remove("escondido");

       const saborPrato = document.querySelector(".pf .corselecionado h4").innerText;
       document.querySelector(".itens .prato").innerHTML = saborPrato;
       const valorPrato = parseFloat(document.querySelector(".pf .corselecionado h5").innerText);
       document.querySelector(".itens .preco-prato").innerHTML = ": " + valorPrato.toFixed(2);  
       
       const saborBebida = document.querySelector(".drinks .corselecionado h4").innerText;
       document.querySelector(".itens .bebida").innerHTML = saborBebida;
       const valorBebida = parseFloat(document.querySelector(".drinks .corselecionado h5").innerText);
       document.querySelector(".itens .preco-bebida").innerHTML = ": " + valorBebida.toFixed(2);
       
       const saborSobremesa = document.querySelector(".sobremesa .corselecionado h4").innerText;
       document.querySelector(".itens .doce").innerHTML = saborSobremesa;
       const valorSobremesa = parseFloat(document.querySelector(".sobremesa .corselecionado h5").innerText);
       document.querySelector(".itens .preco-sobremesa").innerHTML = ": " + valorSobremesa.toFixed(2);
     
       const somaFinal = valorPrato + valorBebida + valorSobremesa;
       document.querySelector(".itens .preco-total" ).innerHTML = "R$" + somaFinal.toFixed(2);

    }

    function cancelar(){
      document.querySelector(".trasnparente").classList.add("escondido");
    }

    function mandarmsg(){
      

      const cliente = prompt("Olá, qual é seu nome?");
      const msg = encodeURI(
        "Olá, gostaria de fazer o pedido: \nPrato: " + document.querySelector(".itens .prato").innerHTML + 
        "\nBebida: " + document.querySelector(".itens .bebida").innerHTML + 
        "\nSobremesa: " + document.querySelector(".itens .doce").innerHTML +
        "\nTotal: " + document.querySelector(".preco-total").innerHTML +
        "\n\nCliente: " + cliente +  "\n Obrigado pela preferencia !"); 
        const link = "https://wa.me/5522997796773?text=" + msg;
        open(link);
    }