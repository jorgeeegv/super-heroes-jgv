export default class Hero {
  id?: number;
  name: string;
  description: string;
  image:string;

  constructor(object?: any) {
    this.id = object.id ? object.id : null;
    this.name = object.name ? object.name : null;
    this.image = object.image ? object.image : null;
    this.description = object.description ? object.description : null;
  }
}
