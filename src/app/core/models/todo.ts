export class Todo {
  id: number = 0;
  task: string = '';
}

export class User {
  id!: number;
  login!: string;
  password!: string;
}
