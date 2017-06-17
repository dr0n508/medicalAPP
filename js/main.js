$(document).ready(function () {

    $('.btn-info').click(function () {
        $(this).parent().next('.tooltip').show();
        $(this).hide();
    })

});