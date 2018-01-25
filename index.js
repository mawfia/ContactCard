
$(document).ready(function(){

    $(document).on("click", "button", function(){
        var contact = {"name": null, "description": null};
        $("input, textarea").each(function(index){
            if(index === 0) contact.name = $(this).val();
            else if(index === 1) contact.name += " " + $(this).val();
            else contact.description = $(this).val();
            $(this).val(null);
        });
        updateContacts(contact);
    });
    showDescriptionOrContact();
});

function updateContacts(contact){
    var newContact = $("<div class='contact'></div>");
    $(newContact).append("<h2>"+contact.name+"</h2><h4>Click for description!</h4><p class='description'>"+contact.description+"</p>");
    $("#contacts").append(newContact);
}

function showDescriptionOrContact(){
    $(document).on("click", ".contact", function(){
        if( $(this).children(".description").css("display") == "none" ){
            $(this).children("h2, h4").css("display", "none");
            $(this).children(".description").css("display", "block");
        }
        else{
            $(this).children("h2, h4").css("display", "block");
            $(this).children(".description").css("display", "none");
        }
    });
}
