import { AMapViewBase } from './amap.common';

declare const android, com, java, org: any;

export class AMapView extends AMapViewBase {

    private mapView: any;

    public createNativeView(): object {
        let nativeView = new android.widget.FrameLayout(this._context);
        setTimeout(() => {
            this.initMap();
        }, 0);
        return nativeView;
    }

    initMap(): void {
        if(this.mapView) return;
        let mapOptions = new com.amap.api.maps2d.AMapOptions();
        this.mapView = new com.amap.api.maps2d.MapView(this._context, mapOptions);
        this.mapView.onCreate(null);
        this.nativeView.addView(this.mapView);
    }

    getMapView(): any {
        return this.mapView;
    }
}
