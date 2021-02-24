/*Search Input*/
$("#search").click( e => {
    $(".icon-cancel").css("display","block")
})

$("#clear").click( e => {
    $("#clear").css("display","none")
    $("#search").val('');
});




$(document).mouseup( e => {
	
    myremove('.drop-down', 'active')
    myremove('.bg-F8F8FA', 'bg-blackk'),
    myremove('.icon-sort','icon-whitesort'),
    myremove('.color-616875', 'color-white'),


    $('#sort').on('click', e => {
        mytoggle('.bg-F8F8FA', 'bg-blackk'),
        mytoggle('.icon-sort','icon-whitesort'),
        mytoggle('.color-616875', 'color-white')
    
    });

    $('.js-dropdown').click( e => {
	
    myDropDown = $(e.target).siblings('.drop-down').toggleClass('active');
    myDropDown = $(e.target).find('.drop-down').toggleClass('active');
    });
    
});

    

const myremove=(selector, el) => {
    if( $(selector).hasClass(el) ) {
        $(selector).removeClass(el)
    }
  
}

const mytoggle=(selector, el) => {
    $(selector).toggleClass(el);
}


$('.tags').click( e => {
    $('.top2').css('top','50%');

})

$('.tags,.upload,.plus').on('click', e => {
    $('.bg-black').css('left','0');

})

$('.upload,.plus').click( e => {
    $('.top').css('top','50%');

})

$('.icon-delete').click( e => {
    $('.top').css('top','-100%');
    $('.top2').css('top','-100%');
    $('.bg-black').css('left','-100%')
})




 







    
