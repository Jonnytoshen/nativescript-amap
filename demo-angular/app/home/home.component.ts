import { Component, OnInit } from "@angular/core";
import { AMap, UiSettings, AMapOnReadyData, AMapOptionsForAndroid, MapType } from 'nativescript-amap';

declare var com;

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    aMapOptions: AMapOptionsForAndroid;

    constructor() {
    }

    ngOnInit(): void {
        this.aMapOptions = new AMapOptionsForAndroid();
        this.aMapOptions.rotateGesturesEnabled(false);
        this.aMapOptions.mapType(MapType.MAP_TYPE_BUS);
    }

    onMapReady(args: AMapOnReadyData): void {
        let map: AMap = args.map;
        let uiSettings: UiSettings = map.getUiSettings();
        uiSettings.setZoomControlsEnabled(false);
    }
}
