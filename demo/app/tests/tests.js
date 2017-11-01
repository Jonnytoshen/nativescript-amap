var Amap = require("nativescript-amap").Amap;
var amap = new Amap();

describe("greet function", function() {
    it("exists", function() {
        expect(amap.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(amap.greet()).toEqual("Hello, NS");
    });
});