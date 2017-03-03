"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var demo1_service_1 = require("./demo1.service");
describe('Demo1Service', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [demo1_service_1.Demo1Service]
        });
    });
    it('should ...', testing_1.inject([demo1_service_1.Demo1Service], function (service) {
        expect(service).toBeTruthy();
    }));
});
