import { View } from "tns-core-modules/ui/core/view";

export interface AMapViewApi {

}

export abstract class AMapViewCommonBase extends View implements AMapViewApi {
  
}

export abstract class AMapViewBase extends AMapViewCommonBase {

  protected config: any = {};

  get ios(): any {
    return this.nativeView;
  }

  set ios(value) {
    this.nativeView = value;
  }

  get android(): any {
    return this.nativeView;
  }

  set android(value) {
    this.nativeView = value;
  }

}


