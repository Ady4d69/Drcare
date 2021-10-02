$(document).ready(function(){
    $('#navbarText .nav-item').click(function(event){
        $('.activated').removeClass('activated');
        $(this).addClass('activated');     
        event.preventDefault();
    });
});