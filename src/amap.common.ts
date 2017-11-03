import { View, Property, booleanConverter } from "tns-core-modules/ui/core/view";

export interface AMap {
  /**
   * 定义Amap组件可用接口
   */
  getUiSettings(): UiSettings;
  
}

export interface UiSettings {
  // 获取“高德地图”Logo的位置
  getLogoPosition(): number;                               
  // N 设置“高德地图”Logo的位置
  setLogoPosition(position: 'LOGO_POSITION_BOTTOM_CENTER' | 'LOGO_POSITION_BOTTOM_LEFT' | 'LOGO_POSITION_BOTTOM_RIGHT'): void;
  // 获取设置的缩放按钮位置
  getZoomPosition(): number;
  // 设置缩放按钮的位置
  setZoomPosition(position: 'ZOOM_POSITION_RIGHT_CENTER'|'ZOOM_POSITION_RIGHT_BUTTOM'): void;
  // 这个方法设置了地图是否允许显示缩放按钮。如果允许，则在地图上显示。默认缩放按钮为显示。
  setZoomControlsEnabled(enabled: boolean): void;
  // 获取指南针状态 可用/不可用。
  isCompassEnabled(): boolean;
  // 这个方法设置了地图是否允许显示指南针
  setCompassEnabled(enabled: boolean): void;
  // 返回当前地图是否显示了定位按钮
  isMyLocationButtonEnabled(): boolean;
  // 设置定位按钮是否显示
  setMyLocationButtonEnabled(enabled: boolean): void;
  // 返回比例尺功能是否可用
  isScaleControlsEnabled(): boolean;
  // 返回当前地图是否允许通过手势移动地图
  isScrollGesturesEnabled(): boolean;
  // 返回当前地图是否显示了缩放按钮
  isZoomControlsEnabled(): boolean;
}

export interface AMapOnReadyData {
  eventName: string;
  object: any;
  map: AMap;
  android: any;
}

export interface AMapViewApi {

}

export abstract class AMapViewCommonBase extends View implements AMapViewApi {
  protected map: AMap;
}

// 设置Logo位置
export const logoPositionProperty = new Property<AMapViewCommonBase, number>({ name: "logoPosition" });
logoPositionProperty.register(AMapViewCommonBase);

// 设置一个地图显示类型以改变初始的类型。
export const mapTypeProperty = new Property<AMapViewCommonBase, number>({ name: "mapType" });
mapTypeProperty.register(AMapViewCommonBase);

// 设置比例尺功能是否可用
export const scaleControlsEnabledProperty = new Property<AMapViewCommonBase, boolean>({ name: "	scaleControlsEnabled" });
scaleControlsEnabledProperty.register(AMapViewCommonBase);

// 设置指南针是否可用。
export const scrollGesturesEnabledProperty = new Property<AMapViewCommonBase, boolean>({ name: "scrollGesturesEnabled" });
scrollGesturesEnabledProperty.register(AMapViewCommonBase);

// 设置地图是否允许缩放。
export const zoomControlsEnabledProperty = new Property<AMapViewCommonBase, boolean>({ name: "zoomControlsEnabled" });
zoomControlsEnabledProperty.register(AMapViewCommonBase);

// 设置地图是否可以通过手势进行缩放。
export const zoomGesturesEnabledProperty = new Property<AMapViewCommonBase, boolean>({ name: "zoomGesturesEnabled" });
zoomGesturesEnabledProperty.register(AMapViewCommonBase);

// 设置Z轴排序是否被允许。
export const 	zOrderOnTopProperty = new Property<AMapViewCommonBase, boolean>({ name: "zOrderOnTop" });
zOrderOnTopProperty.register(AMapViewCommonBase);


export abstract class AMapViewBase extends AMapViewCommonBase {

    static mapReadyEvent: string = "mapReady";
  
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

    [logoPositionProperty.setNative](value: number) {
      this.config.logoPosition = value;
    }

    [mapTypeProperty.setNative](value: number) {
      this.config.mapType = value;
    }

    [scaleControlsEnabledProperty.setNative](value: boolean) {
      this.config.scaleControlsEnabled = value;
    }

    [scrollGesturesEnabledProperty.setNative](value: boolean) {
      this.config.scrollGesturesEnabled = value;
    }

    [zoomControlsEnabledProperty.setNative](value: boolean) {
      this.config.zoomControlsEnabled = value;
    }

    [zoomGesturesEnabledProperty.setNative](value: boolean) {
      this.config.zoomGesturesEnabled = value;
    }

    [zOrderOnTopProperty.setNative](value: boolean) {
      this.config.zOrderOnTop = value;
    }
  
  }

  
  export abstract class AMapCommon {
    
  }