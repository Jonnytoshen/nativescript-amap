import { View, Property, booleanConverter } from "tns-core-modules/ui/core/view";

export enum LogoPosition {
  LOGO_POSITION_BOTTOM_LEFT = 0,
  LOGO_POSITION_BOTTOM_CENTER = 1,
  LOGO_POSITION_BOTTOM_RIGHT = 2
}

export enum LogoMargin {
  LOGO_MARGIN_LEFT = 0,
  LOGO_MARGIN_RIGHT = 1,
  LOGO_MARGIN_BOTTOM = 2
}

export enum ZoomPosition {
  ZOOM_POSITION_RIGHT_CENTER = 1,
  ZOOM_POSITION_RIGHT_BUTTOM = 2
}

export interface AMap {
  /**
   * 定义Amap组件可用接口
   */

  // 从地图上删除所有的Marker，Overlay，Polyline 等覆盖物
  clear(): void;
  // 返回当前的地图显示类型
  getMapType(): number;
  // 返回地图的用户界面设置对象
  getUiSettings(): UiSettings;
  
}

export interface UiSettings {
  // 获取“高德地图”Logo的位置
  getLogoPosition(): number;                               
  // 获取设置的缩放按钮位置
  getZoomPosition(): number;
  // 获取指南针状态 可用/不可用。
  isCompassEnabled(): boolean;
  // 返回是否以地图中心点缩放
  isGestureScaleByMapCenter(): boolean;
  // 返回室内地图楼层切换控件是否显示。
  isIndoorSwitchEnabled(): boolean;
  // 返回当前地图是否显示了定位按钮
  isMyLocationButtonEnabled(): boolean;
  // 返回旋转手势是否可用
  isRotateGesturesEnabled(): boolean;
  // 返回比例尺功能是否可用
  isScaleControlsEnabled(): boolean;
  // 返回当前地图是否允许通过手势移动地图
  isScrollGesturesEnabled(): boolean;
  // 返回倾斜手势是否可用
  isTiltGesturesEnabled(): boolean;
  // 返回当前地图是否显示了缩放按钮
  isZoomControlsEnabled(): boolean;
  // 返回当前地图是否允许通过手势缩放地图
  isZoomGesturesEnabled(): boolean;
  // 设置当前地图是否支持所有手势
  setAllGesturesEnabled(enabled: boolean): void;
  // 这个方法设置了地图是否允许显示指南针
  setCompassEnabled(enabled: boolean): void;
  // 设置是否以地图中心点缩放
  setGestureScaleByMapCenter(isGestureScaleByMapCenter: boolean): void;
  // 设置室内地图楼层切换控件是否可见
  setIndoorSwitchEnabled(isIndoorSwitchEnabled: boolean): void;
  // 设置Logo下边界距离屏幕底部的边距
  setLogoBottomMargin(pixels: number): void;
  // 设置Logo左边界距离屏幕左侧的边距
  setLogoLeftMargin(pixels: number): void;
  // N 设置“高德地图”Logo的位置
  setLogoPosition(position: LogoPosition): void;
  // 设置定位按钮是否显示
  setMyLocationButtonEnabled(enabled: boolean): void;
  // 设置旋转手势是否可用
  setRotateGesturesEnabled(enabled: boolean): void;
  // 设置比例尺功能是否可用
  setScaleControlsEnabled(enabled: boolean): void;
  // 这个方法设置了地图是否允许通过手势来移动
  setScrollGesturesEnabled(enabled: boolean): void;
  // 设置倾斜手势是否可用
  setTiltGesturesEnabled(enabled: boolean): void;
  // 这个方法设置了地图是否允许显示缩放按钮。如果允许，则在地图上显示。默认缩放按钮为显示。
  setZoomControlsEnabled(enabled: boolean): void;
  // 这个方法设置了地图是否允许通过手势来缩放
  setZoomGesturesEnabled(enabled: boolean): void;
  // 设置缩放按钮的位置
  setZoomPosition(position: ZoomPosition): void;
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