export class Todo {
  _id: string;
  text:string;
  completed = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
