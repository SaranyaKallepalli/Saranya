const temp = document.getElementById("limit");

$( document ).ready(function() {
  var userinput=0;
  var count=0;
  var total =0;
  
  var i=1;
  document.querySelector('#btn').style.display = 'none'; 
  document.querySelector('#clr').style.display = 'none'; 
  document.querySelector('#btncount').addEventListener('click',showBtn);
 
  function showBtn(e) { 
  document.querySelector('#btn').style.display = 'block'; 
  document.querySelector('#clr').style.display = 'block'; 
  e.preventDefault(); 
  } 

  $('#btncount').click(function (){
    userinput= $('#txtcount').val();
    total=userinput-1;
    tmepInput = userinput;
   temp.innerHTML = "<h4 style='dispaly:flex;margin-right:-685px;font-size: 19px;margin-top: -181px;'> your count is: "+tmepInput+"</h4>"
   if(total>0)
   {
   document.getElementById('btncount').style.visibility= 'hidden';
   //console.count(userinput);
   document.getElementById('txtcount').style.visibility= 'hidden';
   $('#btncount').prop('disabled', true);
    console.count(userinput);
   }
  //  alert("Count Submitted Successfully...Press 👉Joke")          
  //  }
  //  else
  //  {
  //   alert("Please enter the value");
  //  }
  $.ajax({
 
    type: 'GET',

    url: 'https://dad-jokes.p.rapidapi.com/random/joke',

    dataType: 'json',

    headers: {

                       'content-type': "application/json",

          
                         'X-RapidAPI-Key': '9f7ca612b1mshc2ba703209ff753p1b16c5jsne4f89ac34cbe',
                         'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
                    

                    },


    success: function (data)

    {
      $('#joke1').html(i+". "+data.body[0].setup);

      console.log(data.body[0].setup);

      $('#joke2').html(data.body[0].punchline);

      console.log(data.body[0].punchline);
    i++;
    }

  });
  count=1;
   console.log(count);
   $('#btn').click(function (){
     
     count=count+1;
    
      if(count==userinput){
 
       $('#btn').prop('disabled', true);
 
       document.getElementById('btn').style.visibility= 'hidden';
     }
       
    console.log(count);
    
    $.ajax({
 
     type: 'GET',
 
     url: 'https://dad-jokes.p.rapidapi.com/random/joke',
 
     dataType: 'json',
 
     headers: {
 
                        'content-type': "application/json",

                       'X-RapidAPI-Key': '9f7ca612b1mshc2ba703209ff753p1b16c5jsne4f89ac34cbe',

                       'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
 
                     },
 
 
     success: function (data)
 
     {
       $('#joke1').html(i+". "+data.body[0].setup);
 
       console.log(data.body[0].setup);
 
       $('#joke2').html(data.body[0].punchline);
 
       console.log(data.body[0].punchline);
     i++;
     }
 
   });
 });
  });
   


});