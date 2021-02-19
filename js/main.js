if("serviceWorker" in navigator){
  console.log("puedes usar los serviceWorker en tu navegador"); 
} else{console.log("No puedes usar losr ServiceWorker en tu navegador")};

navigator.serviceWorker.register("./sw.js")
                        .then(res=> console.log("serviceWorker cargado correctamente", res))
                        .catch(err=> console.log("serviceWorker no se ha podido registrar", err));



$(document).ready(function(){
 $("#menu a").click(function(e){
   e.preventDefault();
   
   $("html, body").animate({
     scrollTop: $($(this).attr('href')).offset().top
   })
   return false;
 });
});