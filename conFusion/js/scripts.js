<!-- Script usage des boutons play et pause du carousel  -->
$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carousel-button").click(function(){
        if ($("#carousel-button").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carousel-button").children("span").removeClass('fa-pause');
            $("#carousel-button").children("span").addClass('fa-play');
        }
        else if ($("#carousel-button").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carousel-button").children("span").removeClass('fa-play');
            $("#carousel-button").children("span").addClass('fa-pause');                    
        }
    });
});
<!-- Script appel manuel du formulaire de login  -->
$(this).click(function(){
    $("#lnkLogin").children("a").first()
        .attr("data-toggle","modal")
        .attr("data-target","#loginModal" )
});
<!-- Script appel manuel du formulaire de réservation  -->
$("#btnReserver").click(function(){
    $(this).children("a").first()
        .attr("data-html","true" )
        .attr("data-placement","bottom" )
        .attr("data-toggle","modal" )
        .attr("data-target","#reservationModal" )
});