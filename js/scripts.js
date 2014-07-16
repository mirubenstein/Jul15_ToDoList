$(document).ready(function(){

  var currentList;

  $( "input#list" ).on( "keydown", function( event ) {
    if(event.which === 13) {
      var userList = $('input#list').val();
      var list = {name:userList, task:{}};
      $(':input').val('');
      $("#listContainer").append('<li class="list-entry items">'+list.name+'</li>');

      $('li.list-entry').last().click(function() {
        $("#list-title").text(list.name);
        $('.hider').show();
        currentList = list;
      });
    }
  });

  $( "input#task" ).on( "keydown", function( event ) {
    if(event.which === 13) {
      var userTask = $('input#task').val();
      $(':input').val('');
      $("#taskContainer").append('<li class="task-entry items">'+userTask+'</li>');
      currentList.task = {name: userTask, status: true};

      $('li.task-entry').last().click(function() {
        $(this).remove();
        $('ul#taskComplete').append(this);

      });
    }
  });

});
