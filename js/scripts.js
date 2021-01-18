$(document).ready(function() {
  let currID = "";

  $(".clickable").click(function() {
    newID = $(this).attr('id');
    if(!(currID === "" )){ 
      $("#" + currID + "-front").toggle();
      $("#" + currID + "-back").toggle();
      
    }
    if (!(currID === newID)){
      $("#" + newID + "-front").toggle();
      $("#" + newID + "-back").toggle();
      currID = newID;
    }
    else{
      currID = "";
    }
    
  });
});

