 // Espera a página carregar
 $(document).ready(function() {
   //Pre-load
   $('.pre-load').hide();
   //SideNav
   $('.sidenav').sidenav();
   //Modal
   $('.modal').modal();
   //Select
   $('select').formSelect();
   //collapsible
   $('.collapsible').collapsible();
   //TextArea
   M.textareaAutoResize($('.textarea'));

/*
   $('.tabs').tabs({
    swipeable: true,
    responsiveThreshold: Infinity
  });
  */

   //datepick
   $('.datepicker').datepicker({
     yearRange: [1900, 2020],
     changeMonth: true,
     changeYear: true,
     format: 'yyyy/mm/dd',
     i18n: {
       months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
       monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
       weekdays: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabádo'],
       weekdaysAbbrev: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
       weekdaysAbbrev: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
       today: 'Hoje',
       clear: 'Limpar',
       close: 'Pronto',
       labelMonthNext: 'Próximo mês',
       labelMonthPrev: 'Mês anterior',
       labelMonthSelect: 'Selecione um mês',
       labelYearSelect: 'Selecione um ano',
       selectMonths: true,
       selectYears: 150,
       cancel: 'Cancelar',
       clear: 'Limpar'
     }
   });
 });


 //toggle Botão "Voltar ao topo"
 $(window).scroll(() => {
   let scrollLocale = $("html, body").scrollTop();
   let alturaH = $(".page01").height() / 2;
   if (scrollLocale > alturaH) {
     $("#btnTop").show();
   } else {
     $("#btnTop").hide();
   }
 });

 //Botão Down Suanve
 $('.btn-Down').click(function() {
   $("html, body ").animate({
     scrollTop: $(window).height()
   }, 400);
   return false;
 });

 //Botão Top Suanve
 $('.btn-Top').click(function() {
   $("html, body ").animate({
     scrollTop: 0
   }, 400);
   return false;
 });

 //Carousel
 $(document).ready(function() {
   var owl = $('.owl-carousel');
   owl.owlCarousel({
     margin: 10,
     nav: true,
     loop: false,
     responsive: {
       0: {
         items: 1
       },
       767: {
         items: 2
       },
       1000: {
         items: 3
       }
     }
   })
 });

 //particles
 $(function() {
   var $particles_js = $("#banner-bg-effect");
   if ($particles_js.length > 0) {
     particlesJS(
       "banner-bg-effect",
       // Update your personal code.
       {
         particles: {
           number: {
             value: 80,
             density: {
               enable: true,
               value_area: 800
             }
           },
           color: {
             value: "#ffffff"
           },
           shape: {
             type: "circle",
             stroke: {
               width: 0,
               color: "#ffffff"
             },
             polygon: {
               nb_sides: 5
             },
             image: {
               src: "img/github.svg",
               width: 100,
               height: 100
             }
           },
           opacity: {
             value: 0.4,
             random: false,
             anim: {
               enable: false,
               speed: 1,
               opacity_min: 0.5,
               sync: false
             }
           },
           size: {
             value: 3,
             random: true,
             anim: {
               enable: false,
               speed: 20,
               size_min: 0.2,
               sync: false
             }
           },
           line_linked: {
             enable: true,
             distance: 150,
             color: "#ffffff",
             opacity: 0.2,
             width: 1
           },
           move: {
             enable: true,
             speed: 6,
             direction: "none",
             random: false,
             straight: false,
             out_mode: "out",
             bounce: false,
             attract: {
               enable: false,
               rotateX: 600,
               rotateY: 1200
             }
           }
         },
         interactivity: {
           detect_on: "canvas",
           events: {
             onhover: {
               enable: false,
               mode: "repulse"
             },
             onclick: {
               enable: false,
               mode: "push"
             },
             resize: true
           },
           modes: {
             grab: {
               distance: 400,
               line_linked: {
                 opacity: 1
               }
             },
             bubble: {
               distance: 400,
               size: 20,
               duration: 2,
               opacity: 1,
               speed: 3
             },
             repulse: {
               distance: 200,
               duration: 0.4
             },
             push: {
               particles_nb: 4
             },
             remove: {
               particles_nb: 2
             }
           }
         },
         retina_detect: true
       }
     );
   }
 });