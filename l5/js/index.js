$(document).ready(function(){
	$("#post").click(function(){
		
		var text = $("#taskText").val();
    
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		    
		var taskName = document.createElement("label");
		taskName.innerText = text;
		taskName.style.padding = "0px 5px";
		    
		$("#tasks").append(checkbox);
		$("#tasks").append(taskName);
		$("#tasks").append(document.createElement("br"));
		    
		$("#taskText").value = "";

	});

	$("#deleteAll").click(function(){
		$("#tasks").html("");
	});

	$("#clearAll").click(function(){
		checkboxes = $("input")
    		for(const checkbox of checkboxes) {
			if (checkbox.type == "checkbox")
            			checkbox.checked = false;
    		}
	});
	
	$("#markAll").click(function(){
		checkboxes = $("input")
    		for(const checkbox of checkboxes) {
			if (checkbox.type == "checkbox")
            			checkbox.checked = true;
    		}
	});
});
