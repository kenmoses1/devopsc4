//let userform = document.getElementById("form")
//let formcontainer = document.getElementById("formcontainer")
//let firstdiv =document.getElementById("firstdiv")


let userform = document.getElementById("form")
//let password = document.getElementById("password")
//let username = document.getElementById("username")

userform.addEventListener("submit" , (e) =>{
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    console.log(username)
    console.log(password)

})

let submitdata = () =>{

}

submitdata();

