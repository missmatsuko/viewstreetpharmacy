---
---
{% include js/Core/Kube.js %}
{% include js/Core/Kube.Plugin.js %}
{% include js/Sticky/Kube.Sticky.js %}

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
$("a[href*='#']").click(function(e) {
    e.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, "slow", function(){
      window.location.hash = hash;
    });
});
