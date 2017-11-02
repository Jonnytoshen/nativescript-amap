import { View, Property, booleanConverter } from "tns-core-modules/ui/core/view";

export interface AMap {
  /**
   * 定义Amap组件可用接口
   */
}

export interface AMapOnReadyData {
  eventName: string;
  object: AMap;
  map: AMap;
  android: any;
}

export interface AMapViewApi {

}

export abstract class AMapViewCommonBase extends View implements AMapViewApi {
  
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