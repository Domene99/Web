$(document).ready(function() {
$(".agregar").click(function(event) {
    event.preventDefault();
    var text = $("#newText").val();
    
    $("#newText").val("");
    var item = $(
	`<div class="item">
	    <li>
		<p class="item">${text}</p>
		<button class="check-button">check</button>
		<button class="delete-button">delete</button>
	    </li>
	</div>`);
    $(".Lista").append(item);
});

$(".Lista").on('click', '.check-button', function(event) {
    event.preventDefault();
    
    var item = $(this).parent().children(".item");

    if (item.hasClass("checked"))
        item.css("text-decoration", "none");       
    else
        item.css("text-decoration", "line-through");

    item.toggleClass("checked");
});

$(".Lista").on('click', '.delete-button', function(event) {
    var item = $(this).parent().parent();
    item.remove();
});
});
