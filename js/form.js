function feedbackFunction()
{  
    var name=document.forms.myform.name.value; 
    var address=document.forms.myform.address.value; 
    var password=document.forms.myform.password.value;
    var email=document.forms.myform.email.value;  
    var gender=document.forms.myform.gender.value;
    var comment=document.forms.myform.comment.value;

    if (name==null || name=="")
    {  
        alert("Name can't be blank");  
        return false;  
    }
    if(address==null || address=="")
    {
        alert("Address can't be empty.");
        return false;
    }
    if(email==null || email=="")
    {
        alert("Email must be provided");
        return false;
    }
    if(password.length<6)
    {  
        alert("Password must be at least 6 characters long.");  
        return false;  
    }  
    if(comment==null||comment=="")
    {
        alert("type some comment.");
        return false;
    }
} 