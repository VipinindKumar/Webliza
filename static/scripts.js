
$(document).ready(function(){
    $('#form-box').submit(function(event){
        $('#box').append('<div class="user"><p>' + $('#message-box').val() + '</p></div><p class="space"></p>');
        
        var parameters = {
            message: $('#message-box').val()
        };
        
        $.when( $.post('/message', parameters, function(data) {
            $('#box').append('<div class="eliza"><p>' + data + '</p></div><p></p>');
        }, 'text')).done(function reset() {
                $("#box").animate({scrollTop:$("#box")[0].scrollHeight}, 1000);
                $('#message-box').val('').focus();
            });
        
        
        return false;
    });
});