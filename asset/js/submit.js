// var users = [{username : "parnian",password : "123"},{username : "sara",password : "456"}];

document.getElementById("submitBtn").addEventListener("click",function(){

    document.getElementById("username").classList.remove("invalid");
    document.getElementById("password").classList.remove("invalid");
    document.getElementById("rePassword").classList.remove("invalid");


    var formIsValid = true;

    var currentUserName = document.getElementById("username").value;
    var currentPassword = document.getElementById("password").value;
    var currentRePassword = document.getElementById("rePassword").value;

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
    if (currentRePassword == "") {
        formIsValid = false;
        document.getElementById("rePassword").classList.add("invalid");
        document.getElementById("rePassword").placeholder = "Enter the field";
      }

      if(formIsValid){

        if (currentPassword != currentRePassword) {
            alert("Please enter the same value");
        }else{
            var user = {
                username : currentUserName,   //save the entrance parameters
                password : currentPassword,
            }; 
         
            let storedUsers = [];
            let stored = localStorage.getItem("storedUsers");

            if(stored != null){                   //getItems or stored is full - 
              storedUsers = JSON.parse(stored)   //save the entrance parameters in form of object
            } 

            storedUsers.push(user);

            let x = JSON.stringify(storedUsers)        //convert to string
            localStorage.setItem("storedUsers", x)    ///add to local storage
            ///or:
            // localStorage.setItem("storedUsers",JSON.stringify(stored));   ////add to storage

            alert("You have successfully logged in");

        }
}
})

