System.register(['@angular/core', '@angular/http', '../../jwt/jwt.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, jwt_service_1;
    var ApiService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (jwt_service_1_1) {
                jwt_service_1 = jwt_service_1_1;
            }],
        execute: function() {
            ApiService = (function () {
                function ApiService(_jwtService, http) {
                    this._jwtService = _jwtService;
                    this.http = http;
                }
                ApiService.prototype.setGlobalHeaders = function (headers, request) {
                    headers.forEach(function (header) {
                        var key = Object.keys(header)[0];
                        var headerValue = header[key];
                        request.headers.set(key, headerValue);
                    });
                };
                ApiService.prototype.request = function (url, options) {
                    var request;
                    var reqOpts = {};
                    reqOpts.headers = new http_1.Headers();
                    reqOpts.headers.set('Content-Type', 'application/json');
                    reqOpts.headers.set("Authorization", "Bearer " + this._jwtService.get());
                    request = this.http.request(url, reqOpts);
                    return request;
                };
                ApiService.prototype.requestHelper = function (requestArgs, additionalOptions) {
                    var options = new http_1.RequestOptions(requestArgs);
                    if (additionalOptions) {
                        options = options.merge(additionalOptions);
                    }
                    return this.request(new http_1.Request(options));
                };
                ApiService.prototype.get = function (url, options) {
                    return this.requestHelper({ url: url, method: http_1.RequestMethod.Get }, options);
                };
                ApiService.prototype.post = function (url, body, options) {
                    return this.requestHelper({ url: url, body: body, method: http_1.RequestMethod.Post }, options);
                };
                ApiService.prototype.put = function (url, body, options) {
                    return this.requestHelper({ url: url, body: body, method: http_1.RequestMethod.Put }, options);
                };
                ApiService.prototype.delete = function (url, options) {
                    return this.requestHelper({ url: url, method: http_1.RequestMethod.Delete }, options);
                };
                ApiService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [jwt_service_1.JwtService, http_1.Http])
                ], ApiService);
                return ApiService;
            }());
            exports_1("ApiService", ApiService);
        }
    }
});
//# sourceMappingURL=api.service.js.map