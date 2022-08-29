$(`.icon2`).click(function () {
  var type = $("input").attr("type");

  if (type == "password") {
    $("input").attr("type", "text");
    $(".icon2").html(`<i class="fa-solid fa-lock-open"></i>`);
  } else {
    $("input").attr("type", "password");
    $(".icon2").html(`<img src="images/hide.ico" alt="">`);
  }
});

$(`input`).click(function () {
  $(this).attr(`style`, `border-bottom: 2px solid #03cafc;`);
});
