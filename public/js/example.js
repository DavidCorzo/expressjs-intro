$(document).ready(function() {
    $('.send').click(function() {
        let newName = $('#nombre').val()
        console.log(newName);
        if (newName && newName.length > 0) {
            $.post('/save-user', {name:newName}, function(data, status) {
                console.log(`${data.message} and status is ${status}`)
                alert(data.message)
                setTimeout(function() {
                    location.reload();
                }, 2000);
            })
        }
    })
})

$(document).ready(function() {
    // declare eliminate point
    $('.send-delete-button').click(function() {
        // declaration of varibles
        let Nname = $(this).closest('#target').clone().children().remove().end().text();
        // 
        let name = Nname.replace(" ","");
        console.log(Nname);
        $(this).closest('#target').remove();
        $.post('/eliminate', {name:Nname}, function(data, status){
            //log the message to console
            console.log(`${data.message} and status is ${status}`);
        alert(data.message + " eliminated");
        });
    });
});

