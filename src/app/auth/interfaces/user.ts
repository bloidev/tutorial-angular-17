export interface IUser {
  id:   number
  email:   string
  name:   String 
  pass:   String
}

//generate a interface only with name and pass using User
export interface IUserCredentials {
  token:   string
}


class UserDTO implements IUser{
  public id!: number;
  public email!: string
  public name!: String
  public pass!: String 
}

