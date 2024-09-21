export interface IClientUser {
  id: string;
  avatar: string;
  age: number;
  email: string;
  name: string;
  role: 'admin' | 'user';
  surname: string;
}

export interface IServerUser extends IClientUser {
  password: string;
}
