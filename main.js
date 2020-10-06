$(document).ready(function(){

    var clientId ="163573641257-alipv5jjrbmgn1toa5p05b95i4f6eh86.apps.googleusercontent.com" //ENTER YOUR CLIENT ID FROM THE GOOGLE DEVELOPER CONSOLE

    var redirect_uri="http://localhost/OAuthProject/upload.html"

    var scope="https://www.googleapis.com/auth/drive"

    var url=""


    $("#login").click(function(){

        signIn(clientId,redirect_uri,scope,url);
    
    
    })


    function signIn(clientId,redirect_uri,scope,url){

        url = "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri="+redirect_uri
        +"&prompt=consent&response_type=code&client_id="+clientId+"&scope="+scope
        +"&access_type=offline";

        window.location = url;
        
    }


});

