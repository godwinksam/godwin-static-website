function validateForm(){
    var valid = true;
    if($("#contact_name").val() == ''){
        valid = false;
    }
    if($("#contact_email").val() == ''){
        valid = false;
    }
    if($("#contact_message").val() == ''){
        valid = false;
    }
    return valid;
}