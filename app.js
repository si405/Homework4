$(document).ready(function() {

  // Reveal the contents of the page that are initially hidden
  var $container = $("#container");

  $container
    .fadeIn(2000);

  // Highlight each paragraph with yellow when hovered over

  $("p").hover(
      function() {
          $($(this)).css("background","yellow");
        },
      function() {
        $($(this)).css("background","none");
      });

  // Set up a click event on every `<h2>` element that simultaneously fades it
  // to 25 percent opacity while growing its left-hand margin to 20px. Then,
  // when this animation is complete, fade the speech text to 50 percent
  // opacity.

  $(document).on("click","h2", function() {
    $($(this))
        .animate({
            "opacity": "0.25",
            "margin-left": "+=20px"},1000, function() {
                $(".speech").fadeTo(1000,0.5)
    });
  });

  // **Bonus:** Make the style switcher work.

  $(document).on("click","#switcher-large", function() {
    $("body").css("fontSize","80%");
  });

  $(document).on("click","#switcher-small", function() {
    $("body").css("fontSize","50%");
  });

  $(document).on("click","#switcher-default", function() {
    $("body").css("fontSize","62.5%");
  });

  // **Challenge:** React to presses of the arrow keys by smoothly moving
  // the switcher box 20 pixels in the corresponding direction. The key codes
  // for the arrow keys are: 37 (left), 38 (up), 39 (right), and 40 (down).

  $(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        $("#switcher")
          .animate({
              "margin-left": "-=20px"},1000
            );
        break;

        case 38: // up
        $("#switcher")
          .animate({
              "margin-top": "-=20px"},1000
            );
        break;

        case 39: // right
        $("#switcher")
          .animate({
              "margin-left": "+=20px"},1000
            );
        break;

        case 40: // down
        $("#switcher")
          .animate({
              "margin-top": "+=20px"},1000
            );
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
  });

});
