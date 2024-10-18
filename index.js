document.addEventListener("DOMContentLoaded", formFunction);


function formFunction (){
  const firstName = document.getElementById("firstname");
  const lastName = document.getElementById("lastname");
  const email = document.getElementById("email");
  const message = document.querySelector("textarea");
  const checkBox = document.getElementById("checkbox");
  const form = document.getElementById("form");
  const errorMessages = document.getElementById("errorMessages"); // Error div
  const submitted = document.getElementById("submitted");
  
    form.addEventListener("submit" , (e) => {
        e.preventDefault();

        let isValid = true
        let messages = []
  
        errorMessages.innerHTML = "";
        submitted.innerHTML = "";
//first name validation
        firstName.value;
        if(!firstName.value.trim()){
        isValid =false;
             messages.push("Please type in your first name");
        }else if (firstName.value.trim().length<3){
            messages.push("First name is too short. It should be at least 3 characters long.");
        }
//last name validation
            lastName.value;
          if(!lastName.value.trim()){
            isValid = false;
            messages.push("Please type in your first name ");
          }else if (lastName.value.trim().length<3){
            messages.push("Last name is too short. It should be at least 3 characters long.")
          }
////email validation 
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!email.value.trim()){
              isValid = false;
              messages.push(" Email is required");
              }else if (!emailPattern.test(email.value.trim())){
                isValid = false;
                messages.push("Please enter a valid email address")
              }
//radio validation
             const radio = document.querySelector(`input[name="queryType"]:checked`);
           if(!radio){
            isValid= false;
            messages.push("please select from the options in the Query Type Field")
           }

//message validation
            if (!message.value.trim()) {
            isValid = false;
            messages.push("Please leave a message");
  }
//checkbox validation
              if(!checkBox.checked){
                isValid = false;
                messages.push("You must consent to being contacted")
              }         

//overall validation
              if(isValid){
                 submitted.innerHTML = "Form submitted successfully!"
                 submitted.style.color = "green";
                 submitted.style.backgroundColor = "hsl(0, 0%, 100%)"
                 submitted.style.border = "2px solid hsl(169, 82%, 27%)"
                 submitted.style.borderRadius =  "8px"
                 submitted.style.maxWidth = "500px"
                 submitted.style.margin = "20px auto"
                 submitted.style.textAlign = "center"
                 submitted.style.padding ="15px"
                 errorMessages.style.display = "none"
              }else{
               errorMessages.innerHTML = messages.join("<br>");
               errorMessages.style.display = "block"

              }
    })
}
