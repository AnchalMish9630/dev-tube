// validation logic 
export const ValidateData = (email, password)=>{
    let emailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    let passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    if(!emailValid) return "Email not valid, Please enter valid mail id";
    if(!passwordValid) return "Password validation failed,put correct password";

    return null;
}