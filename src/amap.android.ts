import { AMap, AMapCommon, AMapViewBase, AMapOnReadyData } from './amap.common';

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
        let mapOptions = this.mapOptions();
        this.mapView = new com.amap.api.maps2d.MapView(this._context, mapOptions);
        this.mapView.onCreate(null);
        this.nativeView.addView(this.mapView);
        this.map = new AMapSource(this.mapView.getMap());
        this.notify(<AMapOnReadyData>{
            eventName: AMapViewBase.mapReadyEvent,
            object: this,
            map: this.map,
            android: this.mapView
        });
    }

    mapOptions(): any {
        let mapOptions = new com.amap.api.maps2d.AMapOptions();
        if(this.config.logoPosition !== undefined) {
            mapOptions.logoPosition(this.config.logoPosition);
        }
        if(this.config.mapType !== undefined) {
            mapOptions.mapType(this.config.mapType);
        }
        if(this.config.scaleControlsEnabled !== undefined) {
            mapOptions.scaleControlsEnabled(this.config.scaleControlsEnabled);
        }
        if(this.config.scrollGesturesEnabled !== undefined) {
            mapOptions.scrollGesturesEnabled(this.config.scrollGesturesEnabled);
        }
        if(this.config.zoomControlsEnabled !== undefined) {
            mapOptions.zoomControlsEnabled(this.config.zoomControlsEnabled);
        }
        if(this.config.zoomGesturesEnabled !== undefined) {
            mapOptions.zoomGesturesEnabled(this.config.zoomGesturesEnabled);
        }
        if(this.config.zOrderOnTop !== undefined) {
            mapOptions.zOrderOnTop(this.config.zOrderOnTop);
        }
        return mapOptions;
    }

    getMapView(): any {
        return this.mapView;
    }
}

export class AMapSource extends AMapCommon implements AMap {
    
    uiSettings: any;
    
    constructor(private map: any) {
        super();
        this.uiSettings = map.getUiSettings();
    }

    getLogoPosition(): number {
        return this.uiSettings.getLogoPosition();
    }

    setLogoPosition(position: 'LOGO_POSITION_BOTTOM_CENTER' | 'LOGO_POSITION_BOTTOM_LEFT' | 'LOGO_POSITION_BOTTOM_RIGHT'): void {
        this.uiSettings.setLogoPosition(com.amap.api.maps2d.AMapOptions[position]);
    }

    getZoomPosition(): number {
        return this.uiSettings.getZoomPosition();
    }

    setZoomPosition(position: 'ZOOM_POSITION_RIGHT_CENTER'|'ZOOM_POSITION_RIGHT_BUTTOM'): void {
        this.uiSettings.setZoomPosition(com.amap.api.maps2d.AMapOptions[position]);
    }

    setZoomControlsEnabled(enabled: boolean): void {
        this.uiSettings.setZoomControlsEnabled(enabled);
    }

    isCompassEnabled(): boolean {
        return this.uiSettings.isCompassEnabled();
    }

}
