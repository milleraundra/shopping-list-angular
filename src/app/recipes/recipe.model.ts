/**
 * Created by aundra on 5/10/17.
 */
export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, desc: string, image: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = image;
  }
}
