$(document).ready(function(){
  $('#get_color').on('click', function(e){
    e.preventDefault();
    $.ajax({
      type: 'post',
      url: this.href,
      dataType: "JSON"

    }).done(function(server_data) {
    $("#color_me li:nth-child("+server_data.cell+")").css('background-color', server_data.color);
    });
  });
});