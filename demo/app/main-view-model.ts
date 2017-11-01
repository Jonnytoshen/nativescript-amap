import { Observable } from 'tns-core-modules/data/observable';
import { Amap } from 'nativescript-amap';

export class HelloWorldModel extends Observable {
  public message: string;
  private amap: Amap;

  constructor() {
    super();

    this.amap = new Amap();
    this.message = this.amap.message;
  }
}
