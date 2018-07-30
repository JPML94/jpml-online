$('#form1').submit(function(e){
    e.preventDefault();
    $.ajax({
        url:'https://hooks.zapier.com/hooks/catch/3590026/g13ol3/silent/',
        type:'post',
        data:$('#form1').serialize(),
        success:function(){
          // Redirect to another success page
          window.location = "https://jpml.online";
        }
    });
});
