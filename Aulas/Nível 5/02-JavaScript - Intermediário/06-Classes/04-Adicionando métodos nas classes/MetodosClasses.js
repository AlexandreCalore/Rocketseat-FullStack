class User {
  constructor(name,email){
    this.name = name
    this.email = email
  }

  sendEmail(){
    console.log("E-mail enviado para", this.name, "no o endereço", this.email)
  }
}

const user = new User("Alexandre", "alexandre@email.com")
user.sendEmail()