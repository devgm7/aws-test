function validate_input(identifier) {
   try {
      var data_val = document.getElementById("tra-auth-" + identifier + "-field").value;
   }
   catch (TypeError) {
      console.log("No", identifier)
   }
   if (data_val == "") {
      document.getElementById("tra-auth-" + identifier + "-field-error").innerHTML = "This field cannot be empty"
   }
}

function validate_batch_input() {
   const identifiers = ['email', 'password', 'name', 'dob']
   identifiers.forEach(identifier => {
      validate_input(identifier)
   });
}

const default_email = "gokul.manohar@caio.com"
const default_password = "gokul"

function autofill() {
   document.getElementById("tra-auth-email-field").value = default_email
   document.getElementById("tra-auth-password-field").value = default_password;

}

function validate_login_and_redirect() {
   var data_email = document.getElementById("tra-auth-email-field").value;
   var data_pass = document.getElementById("tra-auth-password-field").value;
   console.log(`Email: ${data_email} Password: ${data_pass}`)
   if (data_email === default_email & data_pass === default_password) {
      console.log("Login Successful")
      window.location = "welcome.htm?uname=" + data_email
   }
   else if (data_email == "" || data_pass == "") {
      document.getElementById("tra-auth-email-field-error").innerHTML = "This field cannot be empty"
      document.getElementById("tra-auth-password-field-error").innerHTML = "This field cannot be empty"
   }
   else {
      console.warn("Login Unsuccessful")

   }
}

