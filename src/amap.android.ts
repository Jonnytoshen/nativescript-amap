import { AMapViewBase } from './amap.common';

declare const android, com, java, org: any;

export class AMapView extends AMapViewBase {

    public createNativeView(): object {
        let nativeView = new android.widget.FrameLayout(this._context);
        return native;
    }
}
