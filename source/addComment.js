$(document).ready(function(){
  $("#new_comment_button").on("click", function() {
    $("#new_comment_button").css('display', 'none')
    $("#new_comment").css('display', 'block')
  });

  $("#submit-button").on("click", function() {
    event.preventDefault()
    const comment = $("#comment-text").val()
    const author = $("#authorName").val()
    console.log(comment);
    console.log(author);
    $(`<li>${comment}<span class="author">${author}</li>`).appendTo("#comment_list")
  })
})
