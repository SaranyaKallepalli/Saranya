$( document ).ready(function() {

  var userinput=0;

  var count=1;

 $('#btncount').click(function(){



  userinput= $('#txtcount').val();

  count=0;

 console.log(userinput);

 })

  $('#btn').click(function(){

    count=count+1;

    if(count>=userinput){

      $('#btn').prop('disabled', true);

    }

    console.log(count);

    $.ajax({

    type: 'GET',

    url: 'https://dad-jokes.p.rapidapi.com/random/joke',

    //data: {get_param: 'value'},

    dataType: 'json',

    headers: {

                       'content-type': "application/json",

                       'X-RapidAPI-Key': '1367946f6emsha1c90732ea00fa6p1cd02ajsnb4bc2e53b73f',

                       'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'

                    },

    success: function (data)

    {

      //  debugger;

      $('#joke1').html(data.body[0].setup);

      console.log(data.body[0].setup);

       $('#joke2').html(data.body[0].punchline);

      console.log(data.body[0].punchline);

    }

  });

  })

});