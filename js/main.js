---
---
{% include js/Core/Kube.js %}
{% include js/Core/Kube.Plugin.js %}
{% include js/Core/Kube.Animation.js %}
{% include js/Sticky/Kube.Sticky.js %}
{% include js/Tabs/Kube.Tabs.js %}
{% include js/Toggleme/Kube.Toggleme.js %}

function changeSiteNavActive(newActive){
  $('#siteNav .active').removeClass('active');
  newActive.addClass('active');
}

$(function(){

  /*Add bottom border under nav when scrolled down*/
  $('#siteNav').on('fixed.sticky', function()
  {
      $('#siteNav').addClass("scrolled");
  });

  $('#siteNav').on('unfixed.sticky', function()
  {
      $('#siteNav').removeClass("scrolled");
  });

  /*Smooth scroll all anchor links*/
  /*$("a[href*='#']").not("#livetabs ul li a").click(function(e) {
      e.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top-$(siteNav).innerHeight()
      }, "slow", function(){
        window.location.hash = hash;
      });
  });*/

})
