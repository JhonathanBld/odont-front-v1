export class User {
  id: number;
  client: string = 'angular';
  username: string;
  password: string;
  grant_type: string = 'password';
}
