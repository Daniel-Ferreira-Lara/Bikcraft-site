/*new SimpleSlide({
  slide: "name", // nome do atributo data-slide="principal"
  nav: true, // se deve ou não mostrar a navegação
  auto: true, // se o slide deve passar automaticamente
  time: 5000, // tempo de transição dos slides
  pauseOnHover: true, // pausa a transição automática
});*/
if(window.SimpleSlide){
   new SimpleSlide({
   slide: "quote", // nome do atributo data-slide="principal"
   time: 5000, // tempo de transição dos slides
   });
   new SimpleSlide({
   slide: "portifolio",
      nav: true,
   time: 5000, 
   });
}
if(window.SimpleAnime){
   new SimpleAnime();
}
if(window.SimpleForm){
   new SimpleForm({
   form: ".formphp", // seletor do formulário
   button: "#enviar", // seletor do botão
   erro: "<div id='form-erro'><h2>Algo de errado por aqui :-(</h2><p>Um erro ocorreu, tente para o email <strong>example@example.com</strong></p></div>",//erro
   sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve eu entro em contato com você.</p></div>", //sucesso
   });
}