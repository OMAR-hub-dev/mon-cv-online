//navbar
let lastScrollTop = 0;
navbar= document.getElementById('navbar');

window.addEventListener('scroll', function (){
    const scrollTop = window.pageYOffset || 
    this.document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop){
        navbar.style.top="-50px";
    }else{
        navbar.style.top="0";
    }
    lastScrollTop = scrollTop;
})


//typed
var typed = new Typed('.typed', {
    strings: [
        'Bonjour à toutes et à tous, je me presente je m\'apelle Omar, aprés une carière m\'ayant fait découvrir plusieurs milieux professionels et exercer plus de 4 metiers différentes . j\ai décidé de me reconvertir en développement web, depuis prés de 8 mois je me forme a plein temps aux langages front tel que CSS, Javascript et son framework React aussi qu\'aux langages back end tel que php et son framework Symfony afin de devenir plus rapidement développeur .plus qu\'un avenir professionnel, je me suis découvert une vraie passion, celle de coder '

    //   'My strings are: <i>strings</i> with',
    //   'My strings are: <strong>HTML</strong>',
    //   'My strings are: Chars &times; &copy;'
    ],
    typeSpeed: 30,
    
  });

  //compteur live
  let compteur =0;
  $(window).scroll(function(){
      const top =$('.counter').offset().top - window.innerHeight;

      if (compteur==0 && $(window).scrollTop()> top){
          $('.data-value').each(function(){
              let $this = $(this),
              countTo= $this.attr('data-count');
              $({
                  countNum:$this.text()
              }).animate({
                  countNum: countTo
              },
              {
                  duration:10000,
                  easing:'swing',
                  step: function(){
                      $this.text(Math.floor(this.countNum));
                  },
                  complete:function(){
                      $this.text(this.countNum)
                  }
              });
          });
          compteur = 0;
      }
  });


  //AOS
  AOS.init();