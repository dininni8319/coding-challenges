export interface User {
  email?: string;
  password?: string;
  password_repeat?: string;
  first_name?: string;
  last_name?: string;
  company?: string;
  phone?: string;
}

export const cleanUser= (user: User) => Object.keys(user)
  .filter((key: string) => user[key as keyof User] !== undefined)
  .reduce((acc, key) => {
    acc[key as keyof User] = user[key as keyof User];
    return acc;
  }, {} as Partial<User>); //We are saying that the object User is type Partial
