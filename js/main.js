document.getElementById("vid").volume = 0.09
$("pre").click( function(){
  $("a").fadeTo(500, 1,function(){
    $(this).css({
      visibility:"visible",
    })
    vid.play();vid
  });
});
  setTimeout(function(){
    $("pre").dblclick( function(){
      $("a").fadeTo(500,0,function(){
        $(this).css("visibility","hidden")
      })
    });
  });

