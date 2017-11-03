import { AMap, UiSettings, AMapCommon, AMapViewBase, AMapOnReadyData } from './amap.common';

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
        this.map = new AMapAPI(this.mapView.getMap());
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


/**
 * AMapAPI
 * 定义AMap 地图对象的操作方法与接口。
 * http://a.amap.com/lbs/static/unzip/Android_Map_Doc/index.html
 */
export class AMapAPI extends AMapCommon implements AMap {

    private _UiSettings: UiSettings;
    
    constructor(private _map: any) {
        super();
    }

    /**
     * getUiSettings
     * 返回地图的用户界面设置对象。
     * @returns UiSettings
     */
    getUiSettings(): UiSettings {
        if(!this._UiSettings) {
            this._UiSettings = new UiSettingsAPI(this._map);
        }
        return this._UiSettings;
    }




    

}

/**
 * UiSettingsAPI
 * 返回地图的用户界面设置对象(UiSettings)
 * http://a.amap.com/lbs/static/unzip/Android_Map_Doc/index.html
 */
export class UiSettingsAPI implements UiSettings {
    
        private uiSettings: any;
    
        constructor(private map: any) { 
            this.uiSettings = map.getUiSettings();
        }
    
        getLogoPosition(): number {
            return this.uiSettings.getLogoPosition();
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
    
        isMyLocationButtonEnabled(): boolean {
            return this.uiSettings.isMyLocationButtonEnabled();
        }
    
        isScaleControlsEnabled(): boolean {
            return this.uiSettings.isScaleControlsEnabled();
        }

        isScrollGesturesEnabled(): boolean {
            return this.uiSettings.isScrollGesturesEnabled();
        }

        isZoomControlsEnabled(): boolean {
            return this.uiSettings.isZoomControlsEnabled();
        }

        isZoomGesturesEnabled(): boolean {
            return this.uiSettings.isZoomGesturesEnabled();
        }

        setAllGesturesEnabled(enabled: boolean): void {
            this.uiSettings.setAllGesturesEnabled(enabled);
        }

        setCompassEnabled(enabled: boolean): void {
            this.uiSettings.setCompassEnabled(enabled);
        }

        setLogoPosition(position: 'LOGO_POSITION_BOTTOM_CENTER' | 'LOGO_POSITION_BOTTOM_LEFT' | 'LOGO_POSITION_BOTTOM_RIGHT'): void {
            this.uiSettings.setLogoPosition(com.amap.api.maps2d.AMapOptions[position]);
        }

        setMyLocationButtonEnabled(enabled: boolean): void {
            this.uiSettings.setMyLocationButtonEnabled(enabled);
        }

        setScaleControlsEnabled(enabled: boolean): void {
            this.uiSettings.setScaleControlsEnabled(enabled);
        }

        setScrollGesturesEnabled(enabled: boolean): void {
            this.uiSettings.setScrollGesturesEnabled(enabled);
        }

    
    }
