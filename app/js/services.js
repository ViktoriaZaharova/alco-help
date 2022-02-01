// show list all
$('.btn-toggle').on('click', function(e){
    e.preventDefault();

    var
        $this = $(this),
        content = $(this).parents().find('.list-areas');


    if(!$this.hasClass('trigger')){
        $this.addClass('trigger');
        $this.find('.btn-text').html('Скрыть');

        content.slideDown();
    } else {
        $this.removeClass('trigger');
        $this.find('.btn-text').html('Весь список');

        content.slice(1).slideUp();
    }
});
// show list all