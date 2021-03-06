import { 
    AMap, 
    UiSettings, 
    AMapCommon, 
    AMapViewBase, 
    AMapOnReadyData,
    LogoMargin,
    LogoPosition,
    ZoomPosition,
    MapType
} from './amap.common';

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
        let mapOptions = this.aMapOptions.getAMapOptions();
        this.mapView = new com.amap.api.maps.MapView(this._context, mapOptions);
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
     * clear()
     * 从地图上删除所有的Marker，Overlay，Polyline 等覆盖物
     */
    clear(isKeepMyLocationOverlay: boolean): void {
        this._map.clear(isKeepMyLocationOverlay);
    }

    /**
     * getMapType
     * 返回当前的地图显示类型。可以参考MAP_TYPE_NORMAL, MAP_TYPE_SATELLITE。
     * @returns number
     */
    getMapType(): number {
        return this._map.getMapType();
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

    isCompassEnabled(): boolean {
        return this.uiSettings.isCompassEnabled();
    }

    isGestureScaleByMapCenter(): boolean {
        return this.uiSettings.isGestureScaleByMapCenter();
    }

    isIndoorSwitchEnabled(): boolean {
        return this.uiSettings.isIndoorSwitchEnabled();
    }

    isMyLocationButtonEnabled(): boolean {
        return this.uiSettings.isMyLocationButtonEnabled();
    }

    isRotateGesturesEnabled(): boolean {
        return this.uiSettings.isRotateGesturesEnabled();
    }

    isScaleControlsEnabled(): boolean {
        return this.uiSettings.isScaleControlsEnabled();
    }

    isScrollGesturesEnabled(): boolean {
        return this.uiSettings.isScrollGesturesEnabled();
    }

    isTiltGesturesEnabled(): boolean {
        return this.uiSettings.isTiltGesturesEnabled();
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

    setGestureScaleByMapCenter(isGestureScaleByMapCenter: boolean): void {
        this.uiSettings.setGestureScaleByMapCenter(isGestureScaleByMapCenter);
    }

    setIndoorSwitchEnabled(isIndoorSwitchEnabled: boolean): void {
        this.uiSettings.setIndoorSwitchEnabled(isIndoorSwitchEnabled);
    }

    setLogoBottomMargin(pixels: number): void {
        this.uiSettings.setLogoBottomMargin(pixels);
    }
    setLogoLeftMargin(pixels: number): void {
        this.uiSettings.setLogoLeftMargin(pixels);
    }

    setLogoPosition(position: LogoPosition): void {
        this.uiSettings.setLogoPosition(com.amap.api.maps.AMapOptions[position]);
    }

    setMyLocationButtonEnabled(enabled: boolean): void {
        this.uiSettings.setMyLocationButtonEnabled(enabled);
    }

    setRotateGesturesEnabled(enabled: boolean): void {
        this.uiSettings.setRotateGesturesEnabled(enabled);
    }

    setScaleControlsEnabled(enabled: boolean): void {
        this.uiSettings.setScaleControlsEnabled(enabled);
    }

    setScrollGesturesEnabled(enabled: boolean): void {
        this.uiSettings.setScrollGesturesEnabled(enabled);
    }

    setTiltGesturesEnabled(enabled: boolean): void {
        this.uiSettings.setTiltGesturesEnabled(enabled);
    }
    
    setZoomControlsEnabled(enabled: boolean): void {
        this.uiSettings.setZoomControlsEnabled(enabled);
    }

    setZoomGesturesEnabled(enabled: boolean): void {
        this.uiSettings.setZoomGesturesEnabled(enabled);
    }
    
    setZoomPosition(position: ZoomPosition): void {
        this.uiSettings.setZoomPosition(com.amap.api.maps.AMapOptions[position]);
    }
}


export { AMapOptionsForAndroid, LogoMargin, LogoPosition, ZoomPosition, MapType } from './amap.common';

