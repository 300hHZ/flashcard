$(document).ready(function() {
  let currID = "";

  $(".clickable").click(function() {
    newID = $(this).attr('id');
    console.log(currID + "1" + newID);
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
    
    console.log(currID + "2" + newID);
  });
});

