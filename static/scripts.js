
$(document).ready(function(){
    $('#form-box').submit(function(event){
        
        //make the typed message show in the box
        $('#box').append('<div class="user"><p>' + $('#message-box').val() + '</p></div><p class="space"></p>');
        
        var parameters = {
            message: $('#message-box').val()
        };
        
        //ajax is used to get the reply via post, after the completion of the ajax request reset function is called
        $.when( $.post('/message', parameters, function(data) {
            
            //show the reply in the box
            $('#box').append('<div class="eliza"><p>' + data + '</p></div><p></p>');
        }, 'text')).done(function reset() {
                
                // scroll to bottom using animation
                $("#box").animate({scrollTop:$("#box")[0].scrollHeight}, 1000);
                
                // empty the input box
                $('#message-box').val('').focus();
            });
            
        return false;
    });
});