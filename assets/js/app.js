/* query vista splash*/
$(document).ready(function() {
        $("#splash").fadeIn(500).fadeOut(2000);
      });
/* query filtro restaurantes*/
$(document).ready(function(e){
    $('.search-panel .dropdown-menu').find('a').click(function(e) {
		e.preventDefault();
		var param = $(this).attr("href").replace("#","");
		var concept = $(this).text();
		$('.search-panel span#search_concept').text(concept);
		$('.input-group #search_param').val(param);
	});
});

/* query galeria comida*/

$(document).ready(function(){
	$(".filter-button").click(function(){
    var value = $(this).attr('data-filter');
        
    if(value == "all")
        {
//$('.filter').removeClass('hidden');
      $('.filter').show('1000');
    }
    else
    {
//$('.filter[filter-item="'+value+'"]').removeClass('hidden');
//$(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
      $(".filter").not('.'+value).hide('3000');
      $('.filter').filter('.'+value).show('3000');
            
    }
	});
    
  if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

/* efecto mouseover sobre las fotos*/


