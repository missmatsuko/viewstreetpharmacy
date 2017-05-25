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
