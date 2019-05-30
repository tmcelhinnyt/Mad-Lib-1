$(document).ready(function() {
    $("#blanks form").submit(function(event) {
      var place1Input = $("input#place1").val();
      var thing1Input = $("input#thing1").val();
      var belongingInput = $("input#belonging").val();
      var place2Input = $("input#place2").val();
      var verb1Input = $("input#verb1").val();
      var feelingInput = $("input#feeling").val();

      $(".place1").text(place1Input);
      $(".thing1").text(thing1Input);
      $(".belonging").text(belongingInput);
      $(".place2").text(place2Input);
      $(".verb1").text(verb1Input);
      $(".feeling").text(feelingInput);
  
      $("#story").show();
      $("#form").hide();

      event.preventDefault();

    // $(button#another).click(function() {
    //   $("#form").show();
    //   $("#story").hide();
    //   )};
    });
 });

// $(document).ready(function() {
//   $(button#another).click(function(event) {
//     $("#form").show();
//     $("#story").hide();
    
//     event.preventDefault();
//     )};
//   });