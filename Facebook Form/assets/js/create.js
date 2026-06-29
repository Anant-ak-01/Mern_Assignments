function CreateAccount(){
    let fname , lname,day,month,year,gender,email,password;
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    day = document.getElementById("day").value;
    month = document.getElementById("month").value;
    year = document.getElementById("year").value;
    gender = document.getElementById("gender").value;
    email = document.getElementById("email").value;
    password = document.getElementById("pass").value;
    console.log(`First Name : ${fname}`);
    console.log(`Surname Name : ${lname}`);
    console.log(`Date of birth`);
    console.log(`Day : ${day}`);
    console.log(`Month : ${month}`);
    console.log(`Year : ${year}`);
    console.log(`Gender : ${gender}`);
    console.log(`Email Or Mobile Number : ${email}`);
    console.log(`password : ${password}`);
}
function login(){
    let email , password;
    email = document.getElementById("email").value;
    password = document.getElementById("pass").value;
    console.log(`Email Or Mobile Number : ${email}`);
    console.log(`password : ${password}`);
}