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