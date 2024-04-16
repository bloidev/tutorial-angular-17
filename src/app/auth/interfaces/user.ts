export interface User {
  id:   number
  email:   string
  name:   String
  pass:   String
}

class UserDTO implements User{
  public id!: number;
  public email!: string
  public name!: String
  public pass!: String

  

}