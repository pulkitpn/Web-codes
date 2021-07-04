function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}


$(document).ready(function() {
  $(".btn").click(function() {
      var val = parseInt($('#cnt').find('.badge').text());

      // Check for the button clicked
      if ($(this).hasClass('btn-danger')) {
          $('#cnt').find('.badge').text(val - 1);
      } else if ($(this).hasClass('btn-success')) {
          $('#cnt').find('.badge').text(val + 1);
      }
  });
});

