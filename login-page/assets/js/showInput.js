$('#togle-password').click(function()
{
    $('.show-password').toggleClass('hidden-password');

    switch ($('#password').attr('type'))
    {
        case "password":
            $('#password').attr('type', 'text');
        break;

        case "text":
            $('#password').attr('type', 'password');
        break;
    }
});