class User
{
    constructor(email, password)
    {
        this.email = email;
        this.password = password;
    }
}

function AddToLocalStorage()
{
   localStorage.setItem("email", document.getElementById("exampleInputEmail1").value);
   localStorage.setItem(document.getElementById("exampleInputPassword1").value);

}