jQuery('body').on('click', function(event) {
    jQuery(this).find('.searchbox form input').fadeOut();
    console.log("sfhdhf");
});
jQuery('.searchbox form .search-icon').on('click', function(event) {
    console.log("fjrjtire");
    jQuery(this).parent().find('input').fadeToggle();
    event.stopPropagation();
});
jQuery('.searchbox form input').on('click', function(event) {
    jQuery(this).fadeIn();
    event.stopPropagation();
});

jQuery('.hamburger').on("click", function() {
    jQuery(this).toggleClass("is-active");
    jQuery('.navigation').slideToggle(200, 'linear');
});