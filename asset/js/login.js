// var users = [{username : "parnian",password : "123"},{username : "sara",password : "456"}]

document.getElementById("signIn").addEventListener("click",function(){

    document.getElementById("username").classList.remove("invalid");
    document.getElementById("password").classList.remove("invalid");
    
    var formIsValid = true;

    var currentUserName = document.getElementById("username").value;
    var currentPassword = document.getElementById("password").value;

    if(currentUserName == ""){
        formIsValid = false;
        document.getElementById("username").classList.add("invalid");  //add invalid style
        document.getElementById("username").placeholder = "Enter the field";
     }

   if (currentPassword == "") {
       formIsValid = false;
       document.getElementById("password").classList.add("invalid");
       document.getElementById("password").placeholder = "Enter the field";
     }
 
     if(formIsValid){
        let stored = localStorage.getItem("storedUsers");
        let storedUsers = [];
        storedUsers = JSON.parse(stored); 

        if( stored != null){
            for (let item of storedUsers) {
                
                if (item.username == currentUserName && item.password == currentPassword) {
                    alert(item.username + " Welcome ");
                }
                
            }
        }else{
            alert("Username or Password is not correct");
        }
        
    }
});