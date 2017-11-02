import { Component, OnInit } from "@angular/core";
import { AMap, AMapOnReadyData } from 'nativescript-amap';

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

    onMapReady(args: AMapOnReadyData): void {
        let map: AMap = args.map;
    }
}
