$(document).ready(function(){
// Getting all the data from AWS link
  $.ajax(
  {
      url: 'https://data.cityofnewyork.us/resource/n4ac-3636.json',
      cache: false,
      dataType: 'json',
      type: 'GET',
      data: ({ 'events' : [] }),
      success: volops,
      var xhr= new XMLHttpRequest();
      xhr.open("GET","https://data.cityofnewyork.us/resource/n4ac-3636.json", false);
      xhr.send();
      error: function(e, xhr)
      
      {
          console.log(e);
      }

  });

 function volops(data)
  {
  console.log(xhr.status);
  console.log(xhr.statusText);

    }
});