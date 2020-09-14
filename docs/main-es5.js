function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/art/art.component.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/art/art.component.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppArtArtComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"scroll-up\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12 col-md-12 col-lg-12\">\n                <i class=\"fas fa-arrow-alt-circle-up\" (click)=\"goToTop()\" id=\"button\" *ngIf=\"scrolled == 1\"></i>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"tableOfContentContainer\">\n    <div class=\"tableOfContent docs-toc-container\">\n        <div class=\"docs-toc-heading\">Art Videos:</div>\n        <nav>\n            <a pageScroll href=\"#drawing\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Drawing\n            </a>\n            <br>\n            <a pageScroll href=\"#painting\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Painting\n            </a>\n            <br>\n            <a pageScroll href=\"#mixed\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Mixed Medium\n            </a>\n            <br>\n            <a pageScroll href=\"#misc\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Miscellaneous\n            </a>\n            <br>\n        </nav>\n    </div>\n</div>\n\n<div class=\"container page-container\">\n    <hr class=\"titlehr\" />\n    <h1>Art Videos</h1>\n    <p class=\"text-center\">Scroll down to the desired art medium or use the navigation menu on the right.</p>\n    <hr class=titlehr />\n\n\n    <hr id=\"drawing\" class=\"lesspadding\" />\n    <h3>Drawing Videos:</h3>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/wy2-3BxdtYY\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/oQmDk8Z2IMs\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/fGqtZbdjhNU\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/lIOjk00njxM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/2zbAoBwLHLM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/NLD3QQSVUZE\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/CC7uQrO-t-A\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Yu2OZt7sPG4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/848wWAEHWHM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/kLtvcUEo2UE\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/kjNiPvpD3gI\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/kX2g3AMmjHw\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/r6cJl89axqY\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/_J_9aZ75vM8\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/WON1uJcpTPQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/gYKV5P5rs_s\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/OAq2X-0FbGM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/v368l7nAltE\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n        </div>\n    </div>\n\n    <hr id=\"painting\" class=\"lesspadding\" />\n    <h3>Painting Videos:</h3>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/EJPuP50_ZqM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/cIjUwedQAZo\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/76wb5re9TK0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/4hmoBKYMk54\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/ZjFEtBtAgLg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/csuNORlCYYE\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/swu28u4l3Fo\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/kjjO36l7gYo\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/g6OCxzvZx8c\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/1K1nVGdIaMI\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/quTXTSC4BkA\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Mg2O2kpg4tU\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/FVCXD92ECtg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/u4c9SMP-cVQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/GcsZCPiOxo8\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/v1H9Tnv2xUI\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/SBggWM4TMA4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/LWJkdm1QHEw\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n        </div>\n    </div>\n\n    <hr id=\"mixed\" class=\"lesspadding\" />\n    <h3>Mixed Medium Videos:</h3>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/SgBkeFkBPUE\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Aa7x8kvnS5c\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/4AmYnPTDgW8\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/0-wFMH_wbRw\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/xJwNmAfMFqU\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/H3VqNm4jW6o\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/WxU48bKqq-M\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/o4rJk134rqM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n        </div>\n    </div>\n\n    <hr id=\"misc\" class=\"lesspadding\" />\n    <h3>Miscellaneous Art Videos:</h3>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/ClFpZS-Xxco\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/uF-D3LNmuJE\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/-PBlIXq54gU\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Njl-uqnmBGA\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/EmmaiRFYiuE\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/qPP3ptNKsQM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/9pxX7-NHYfg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/ws6BR741ios\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/SKGDXyi6pko\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/EdJwrkJXhAA\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/50sq5PWfai0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/yqC4ryoM-Bg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container page-container\">\n    <hr class=\"titlehr\" />\n    <h1>Contact Us</h1>\n    <hr class=titlehr />\n\n    <p id=\"firstp\">Have questions or concerns? Want to chat about teaching? We would love to talk to you!</p>\n    <br>\n    <p id=\"secondp\">Feel free to contact us by email at example@elementaryeducationhub.com.</p>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/fifthgrade/fifthgrade.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fifthgrade/fifthgrade.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFifthgradeFifthgradeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"scroll-up\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12 col-md-12 col-lg-12\">\n                <i class=\"fas fa-arrow-alt-circle-up\" (click)=\"goToTop()\" id=\"button\" *ngIf=\"scrolled == 1\"></i>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"tableOfContentContainer\">\n    <div class=\"tableOfContent docs-toc-container\">\n        <div class=\"docs-toc-heading\">Grade 5 Videos:</div>\n        <nav>\n            <a pageScroll href=\"#math\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Math\n            </a>\n            <br>\n            <a pageScroll href=\"#reading\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Reading\n            </a>\n            <br>\n            <a pageScroll href=\"#history\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Social Studies\n            </a>\n            <br>\n            <a pageScroll href=\"#science\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Science\n            </a>\n        </nav>\n    </div>\n</div>\n\n<div class=\"container page-container\">\n    <hr class=\"titlehr\" />\n    <h1>Fifth Grade Videos</h1>\n    <p class=\"text-center\">Scroll down to the desired subject or use the navigation menu on the right.</p>\n    <hr class=titlehr />\n\n\n    <hr id=\"math\" class=\"lesspadding\" />\n    <h3>Math Videos</h3>\n    <h5>Operations and Algebraic Thinking:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/v0bg2GWCbRo\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Ay5vpsieXb4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Nv8njymFuVM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/kg4b1DOtcN8\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Number and Operations:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/yfmEojlt4_A\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/RHUl4kZDD6c\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/FZhWVy8INyk\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/V16QulRkp_o\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/32gDF10ZXOA\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/6SCROCbSGts\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/tDQipFjAoT8\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/AwSMewrnQXg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/cARsEw-s8Fg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/7x1IP_v-ADQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Measurement and Data:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/mJrSUJ57H30\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/RxkRlIAucMk\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/3lbMvKtT-6w\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/dAKAfcqi3x4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Geometry:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/qcb-mcREIi0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/v4vXkDHYDyk\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/mApnNks5Oag\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/d6vhjpnfd3c\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n\n\n    <hr class=\"normalhr\" id=\"reading\" />\n    <h3>Reading Videos</h3>\n    <hr class=\"normalhr\" />\n\n    <hr class=\"lesspadding\" />\n    <h5>Standard English Conventions:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/8c8yiwrPS0U\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/R74Ly00UygU\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/QFcaUTd8DgY\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/p50_yNQLj5c\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/jjrwi_FCQS4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/s74XA3tCPt8\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/p4JHsbF_rwg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Z5ISJUxKOpk\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr id=\"history\" class=\"normalhr\" />\n    <h3>Social Studies Videos</h3>\n    <hr class=\"normalhr\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/o2XjXFvruIM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Ht0FW7RwRmc\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/z_u54Vgv6Z0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/4DlNhbkPiYY\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/2isPkhtCcbM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/0bW51Jnu9tQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/C6rHSiN0vKk\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/BWtW0gmh3kg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/1Q5Z4UUitdU\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Zt57rFcpnr4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/1htD6sv2M1E\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/0bf3CwYCxXw\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n\n    <hr id=\"science\" class=\"normalhr\" />\n    <h3>Science Videos</h3>\n    <hr class=\"normalhr\" />\n\n    <hr class=\"lesspadding\" />\n    <h5>Earth's Place in the Universe:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Zo-sKzMWYFA\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/a5nhIUFTjcs\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Earth's Systems:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/VMxjzWHbyFM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/QYm4ZmReT2g\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/6j5iHvYBIcg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/uJmfY19sTGk\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Matter and Its Interactions:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/HmzFG_xOeaQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/CqjxAYZ13QA\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/firstgrade/firstgrade.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/firstgrade/firstgrade.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFirstgradeFirstgradeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"scroll-up\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12 col-md-12 col-lg-12\">\n                <i class=\"fas fa-arrow-alt-circle-up\" (click)=\"goToTop()\" id=\"button\" *ngIf=\"scrolled == 1\"></i>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"tableOfContentContainer\">\n    <div class=\"tableOfContent docs-toc-container\">\n        <div class=\"docs-toc-heading\">Grade 1 Videos:</div>\n        <nav>\n            <a pageScroll href=\"#math\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Math\n            </a>\n            <br>\n            <a pageScroll href=\"#reading\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Reading\n            </a>\n            <br>\n            <a pageScroll href=\"#history\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Social Studies\n            </a>\n            <br>\n            <a pageScroll href=\"#science\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Science\n            </a>\n        </nav>\n    </div>\n</div>\n\n<div class=\"container page-container\">\n    <hr class=\"titlehr\" />\n    <h1>First Grade Videos</h1>\n    <p class=\"text-center\">Scroll down to the desired subject or use the navigation menu on the right.</p>\n    <hr class=titlehr />\n\n\n    <hr id=\"math\" class=\"lesspadding\" />\n    <h3>Math Videos</h3>\n    <h5>Counting:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/MA9BhxGwGMs\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/r_h7YMgMdao\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/EFP6JwOWrlg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/uDSWMjtMff4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/yQSdKlNvrmw\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/kGBu6OY81Mw\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Money:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/pnXJGNo08v0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/MbtmucV-U2c\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Addition and Subtraction:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/6gfIvbkaCAA\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/facfD3bkPjI\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Mvm0y1Qr_JQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/wCgbVIA01N4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/zau4jtSA_kY\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/M2O8uhq5lLg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/WDZoZytc94Q\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/4OIks496ya8\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/FtjkzSnZ4G4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/81NfQ350vw8\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n\n    <hr class=\"lesspadding\" />\n    <h5>Shapes:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/24Uv8Cl5hvI\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/9OlcnbZ3uO8\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/ZnZYK83utu0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/3-QwWFkz5hw\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n\n    <hr class=\"lesspadding\" />\n    <h5>Comparing Numbers:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/M6Efzu2slaI\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/ka9zbPcqXBI\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/oMFUa5XxeHw\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/llqTVVXzPPY\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Measurement and Data:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/X_97AO2SkGU\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Yx_Lcp9tkmE\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/pgbX4J7cWBU\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/q8o7n-A0SC0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/GHb9ZGTDzV4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/jxhL1DyfQZY\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n\n    <hr class=\"lesspadding\" />\n    <h5>Telling Time:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/5xRoBx7iVGI\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/TaFQslk37xg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/g6tJAy_7AL4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/n_daAYx6krg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"normalhr\" id=\"reading\" />\n    <h3>Reading Videos</h3>\n    <hr class=\"normalhr\" />\n\n    <hr class=\"lesspadding\" />\n    <h5>Print Concepts:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/0Wrv_ZviMEc\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/LdCOswMeXFQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/ppbjDRtLxB8\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/2gxvF2X5ANo\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Phonological Awareness, Phonics, and Word Recognition:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/4TjcT7Gto3U\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/pQgJnpE7IL8\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/1OgDU6Ww3CE\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/dcMK1bqpGHk\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/NK8_Tvu6bJk\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/zpcgZTPMgHY\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/8fc_pnz1sh0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/V-cvlZLNEBM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/9zzq9wy6wXI\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/_Nawc37HyTQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/eqigJZm5aa4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/k-n_LHGseNk\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/uS2XUGBmcn4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/zCnIaD-1kVE\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/3gFsszNp5RM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/bp8arskkcXg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/lIGDpEVPzCw\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/9S7DY2lgJlU\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/vlBc703kYMg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/epk-hnVC10k\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/5j5g5xThho4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/6IyuhZUhLcY\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/gubPH3WEurg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/5xE-vw2ctqo\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n\n\n    <hr class=\"lesspadding\" />\n    <h5>Understanding Literature:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/k8muSkXjPHE\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/NpWHZJZQDSE\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/lo-JrF-c110\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/12CNNORawk8\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/0Bz4-1YKI1M\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/vXWK1-L41f0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/0wpByvesEMU\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/3mAl9QMJJTo\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr id=\"history\" class=\"normalhr\" />\n    <h3>Social Studies Videos</h3>\n    <hr class=\"normalhr\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/S2bxkt3Nbpk\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Jd4kD9TicbA\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Umq76iNkhx0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/YrT5jcnu8NA\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/q-up6zuCQQg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/DSnVCV4uGGQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/CJLGw0lkcdE\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/jsTB7gSfDPI\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/d0ySC2tzlZI\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/ICcwbmDmit0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/1lJmmxj0W_A\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/4Icao42RALg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n\n    <hr id=\"science\" class=\"normalhr\" />\n    <h3>Science Videos</h3>\n    <hr class=\"normalhr\" />\n\n    <hr class=\"lesspadding\" />\n    <h5>Structure and Function:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/V2GvQXvjhLA\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/j6XVVrukmmc\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/xZ6v_J4I5Uw\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/dN_au2KHffk\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Space Systems:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/ftLtDzpUcBA\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/1SN1BOpLZAs\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Waves: Light and Sound</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/AGjxfx8sy6s\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/3yqB2KFwJCo\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"links\" class=\"container flex-container\">\n    <a routerLink=\"\" routerLinkActive=\"active\">Home</a>\n    <a routerLink=\"/mission\">Our Mission</a>\n    <a routerLink=\"/contact\">Contact Us</a>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/fourthgrade/fourthgrade.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fourthgrade/fourthgrade.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFourthgradeFourthgradeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"scroll-up\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12 col-md-12 col-lg-12\">\n                <i class=\"fas fa-arrow-alt-circle-up\" (click)=\"goToTop()\" id=\"button\" *ngIf=\"scrolled == 1\"></i>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"tableOfContentContainer\">\n    <div class=\"tableOfContent docs-toc-container\">\n        <div class=\"docs-toc-heading\">Grade 4 Videos:</div>\n        <nav>\n            <a pageScroll href=\"#math\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Math\n            </a>\n            <br>\n            <a pageScroll href=\"#reading\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Reading\n            </a>\n            <br>\n            <a pageScroll href=\"#history\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Social Studies\n            </a>\n            <br>\n            <a pageScroll href=\"#science\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Science\n            </a>\n        </nav>\n    </div>\n</div>\n\n<div class=\"container page-container\">\n    <hr class=\"titlehr\" />\n    <h1>Fourth Grade Videos</h1>\n    <p class=\"text-center\">Scroll down to the desired subject or use the navigation menu on the right.</p>\n    <hr class=titlehr />\n\n\n    <hr id=\"math\" class=\"lesspadding\" />\n    <h3>Math Videos</h3>\n    <h5>Operations and Algebraic Thinking:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/2o0Mw_GbRdo\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/N_8srGGX0kk\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Kq4Gyoh7lGg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/4rWy0sWWQVc\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/41eVMYPCWTQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/2hVQLG-QTfI\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/0IZyGB1qQmM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/tW97UU01ShY\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Number and Operations:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/U8hZae6hYpw\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/8H4ydRhelH0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/9dYXfZZsbzc\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/-E3BXA___XA\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/47lajakFQlQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/qcHHhd6HizI\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/9Gt5MGIxCgQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Egjm6KpP2Bw\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/2FH6YiLWIuE\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/WV5VY76Pf5U\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Measurement and Data:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/t8hUCYFS36I\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/kOJFSH_Bn9U\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/ImVe0ed4fVM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/UgfSwlqi4Qg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/AuJQZ8Pusdg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Z3nGySo3HWo\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Geometry:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/jXczCSpWqdg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/k5etrWdIY6o\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/P3AOoLbA3us\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Q1sLyqSEEr0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"normalhr\" id=\"reading\" />\n    <h3>Reading Videos</h3>\n    <hr class=\"normalhr\" />\n\n    <hr class=\"lesspadding\" />\n    <h5>Phonics, Word Recognition, and Word Structure:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/SdnNlQcAfaI\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/AVPacOzaZr4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/k5niBOyRS8I\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/L5x-HzUcppQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/5Ub0Qu4uxpc\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/-PhyqbvnoCg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Z97V5bYcrKo\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/7sHbB9VQBgo\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/j54a9uBQx-4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/eSDuxQjwUPM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/fo839aHCPr8\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/WgDuM63qqsA\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Understanding Literature:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/6OGMlrRSALY\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/fb33WQTGXPk\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/FgD-mrTEol8\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/NapYdbAwdIQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr id=\"history\" class=\"normalhr\" />\n    <h3>Social Studies Videos</h3>\n    <hr class=\"normalhr\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/swKBi6hHHMA\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/WQaWFEjTcVc\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/d_2_MmqCxmo\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/vd0fMpAIs1s\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/t0kr8_E6Va0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/VqntE4RBmoQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/iydRkC0gMZI\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/QxekRM5-uMU\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/E7AXuxcUleY\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/A-SHnPA6AIw\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/mrQdEHJ_dJA\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/LQ6dkIW051M\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n\n    <hr id=\"science\" class=\"normalhr\" />\n    <h3>Science Videos</h3>\n    <hr class=\"normalhr\" />\n\n    <hr class=\"lesspadding\" />\n    <h5>Fossils:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/xQBkawjFVIA\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/tyOjxjFHW-c\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n    <hr class=\"lesspadding\" />\n    <h5>Weathering and Erosion:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/exS9gFXgib0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/jyh9wNIxy2o\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Energy Resources:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/dPXoZclyFrw\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Giek094C_l4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Waves:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/KWzyQKcJBYg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/1NJHHA9bp5Y\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHistoryHistoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"scroll-up\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12 col-md-12 col-lg-12\">\n                <i class=\"fas fa-arrow-alt-circle-up\" (click)=\"goToTop()\" id=\"button\" *ngIf=\"scrolled == 1\"></i>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"tableOfContentContainer\">\n    <div class=\"tableOfContent docs-toc-container\">\n        <div class=\"docs-toc-heading\">Social Studies Videos:</div>\n        <nav>\n            <a pageScroll href=\"#kindergarten\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Kindergarten\n            </a>\n            <br>\n            <a pageScroll href=\"#first\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                First Grade\n            </a>\n            <br>\n            <a pageScroll href=\"#second\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Second Grade\n            </a>\n            <br>\n            <a pageScroll href=\"#third\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Third Grade\n            </a>\n            <br>\n            <a pageScroll href=\"#fourth\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Fourth Grade\n            </a>\n            <br>\n            <a pageScroll href=\"#fifth\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Fifth Grade\n            </a>\n            <br>\n        </nav>\n    </div>\n</div>\n\n<div class=\"container page-container\">\n    <hr class=\"titlehr\" />\n    <h1>Social Studies Videos</h1>\n    <p class=\"text-center\">Scroll down to the desired grade or use the navigation menu on the right.</p>\n    <hr class=titlehr />\n\n    <hr id=\"kindergarten\" class=\"lesspadding\" />\n    <h3>Kindergarten Social Studies Videos</h3>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/RyLzsQKFpB0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/wP_IbZSxhEs\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/NR7z9FbUf5k\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/xL4uetrD3Hc\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/LKCtzuvBZPc\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/U-r-xHln6nE\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/TyP09S0UEzA\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/o3ihZRdSFWo\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/7Km5ecRCedU\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/_NeEF1fwT4k\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/8ZjpI6fgYSY\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/6MGRkUlFZws\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr id=\"first\" class=\"normalhr\" />\n    <h3>First Grade Social Studies Videos</h3>\n    <hr class=\"normalhr\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/S2bxkt3Nbpk\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Jd4kD9TicbA\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Umq76iNkhx0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/YrT5jcnu8NA\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/q-up6zuCQQg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/DSnVCV4uGGQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/CJLGw0lkcdE\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/jsTB7gSfDPI\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/d0ySC2tzlZI\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/ICcwbmDmit0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/1lJmmxj0W_A\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/4Icao42RALg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr id=\"second\" class=\"normalhr\" />\n    <h3>Second Grade Social Studies Videos</h3>\n    <hr class=\"normalhr\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/r8kOZkiJI8M\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/-BlDJ8-9JRE\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/OvwlRTYvU8o\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/BOTybVw8GXo\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/X9Xyw43cC7M\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/v23V-cHPpz4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/dmwcfaythY4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Pxt_uA8w-t4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Bu_8d70seIY\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/X9Xyw43cC7M\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/ZKnpuHQS0lM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/wMMwBhkxBv0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr id=\"third\" class=\"normalhr\" />\n    <h3>Third Grade Social Studies Videos</h3>\n    <hr class=\"normalhr\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/H6WY-5u3dIc\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/j7hrjz8IWwk\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/QV2HOfcCJaM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/E2YidQrQuec\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/XS8DEjd2QBg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/4UV6_AMpoyU\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/a8hDKU_bAec\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/a2-QL59pVRo\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/GrG7zBUDiqQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/o2WRP-U7630\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr id=\"fourth\" class=\"normalhr\" />\n    <h3>Fourth Grade Social Studies Videos</h3>\n    <hr class=\"normalhr\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/swKBi6hHHMA\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/WQaWFEjTcVc\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/d_2_MmqCxmo\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/vd0fMpAIs1s\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/t0kr8_E6Va0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/VqntE4RBmoQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/iydRkC0gMZI\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/QxekRM5-uMU\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/E7AXuxcUleY\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/A-SHnPA6AIw\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/mrQdEHJ_dJA\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/LQ6dkIW051M\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr id=\"fifth\" class=\"normalhr\" />\n    <h3>Fifth Grade Social Studies Videos</h3>\n    <hr class=\"normalhr\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/o2XjXFvruIM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Ht0FW7RwRmc\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/z_u54Vgv6Z0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/4DlNhbkPiYY\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/2isPkhtCcbM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/0bW51Jnu9tQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/C6rHSiN0vKk\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/BWtW0gmh3kg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/1Q5Z4UUitdU\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Zt57rFcpnr4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/1htD6sv2M1E\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/0bf3CwYCxXw\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomepageHomepageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-container\">\n    <div class=\"main\">\n        <section>\n            <h1 class=\"float-container\"> Welcome to the Elementary Education Hub!</h1>\n            <div class=\"float-child\">\n                <p class=\"paraone\"> Here you'll find a comprehensive source of free educational videos and more to\n                    assist you in\n                    teaching\n                    your\n                    students or childen. All of the videos are free, student-focused, and highly engaging. </p>\n            </div>\n            <div class=\"float-child\">\n                <p class=\"paratwo\"> Whether you are a parent or a teacher, our desire is to support you by providing\n                    high quality,\n                    engaging, and safe videos for your student or child. Get started by choosing a grade level or\n                    subject\n                    above!\n                </p>\n            </div>\n        </section>\n        <hr class=\"mainhr\" />\n\n        <section>\n            <div>\n                <h1 class=\"teacherFavorites\"> Teacher Favorites: </h1>\n                <div class=\"forLargeScreens\">\n                    <ng-image-slider #nav [images]=\"imageObject\" [infinite]=\"true\"\n                        [autoSlide]=\"{interval: 1, stopOnHover: true}\" [showVideoControls]=\"true\" [imagePopup]=\"true\"\n                        [videoAutoPlay]=\"true\" [imageSize]=\"{width: '50%', height: '40%'}\" slideImage=\"1\">\n                    </ng-image-slider>\n                </div>\n                <div class=\"forLargeScreens\">\n                    <div class=\"container\">\n                        <div class=\"row\">\n                            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/NpWHZJZQDSE\"\n                                    frameborder=\"0\"\n                                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                                    allowfullscreen></iframe>\n                            </div>\n                            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/xyMrLQ4ZI-4\"\n                                    frameborder=\"0\"\n                                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                                    allowfullscreen></iframe>\n                            </div>\n                            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/EzzQ8x-9HTo\"\n                                    frameborder=\"0\"\n                                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                                    allowfullscreen></iframe>\n                            </div>\n                            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/xUCYFof8QyA\"\n                                    frameborder=\"0\"\n                                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                                    allowfullscreen></iframe>\n                            </div>\n                            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/UgfSwlqi4Qg\"\n                                    frameborder=\"0\"\n                                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                                    allowfullscreen></iframe>\n                            </div>\n                            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/DR9w4koW2EA\"\n                                    frameborder=\"0\"\n                                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                                    allowfullscreen></iframe>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n            <hr class=\"sliderhr\" />\n        </section>\n\n        <section>\n            <div class=\"response\">\n                <h4 class=\"responsetext\"> Do you have educational videos that you would like shared on this site? Email\n                    us at\n                    example@example.com\n                    to share content. </h4>\n            </div>\n        </section>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/kindergarten/kindergarten.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/kindergarten/kindergarten.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppKindergartenKindergartenComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"scroll-up\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12 col-md-12 col-lg-12\">\n                <i class=\"fas fa-arrow-alt-circle-up\" (click)=\"goToTop()\" id=\"button\" *ngIf=\"scrolled == 1\"></i>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"tableOfContentContainer\">\n    <div class=\"tableOfContent docs-toc-container\">\n        <div class=\"docs-toc-heading\">Kindergarten Videos:</div>\n        <nav>\n            <a pageScroll href=\"#math\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Math\n            </a>\n            <br>\n            <a pageScroll href=\"#reading\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Reading\n            </a>\n            <br>\n            <a pageScroll href=\"#history\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Social Studies\n            </a>\n            <br>\n            <a pageScroll href=\"#science\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Science\n            </a>\n        </nav>\n    </div>\n</div>\n\n<div class=\"container page-container\">\n    <hr class=\"titlehr\" />\n    <h1>Kindergarten Videos</h1>\n    <p class=\"text-center\">Scroll down to the desired subject or use the navigation menu on the right.</p>\n    <hr class=titlehr />\n\n\n    <hr id=\"math\" class=\"lesspadding\" />\n    <h3>Math Videos</h3>\n    <h5>Number Bonds:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/LFki4BENvcw\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/BLuoYNmxkkU\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/YfzLt3oFev0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/vh481gFiqQk\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/lD9tjBUiXs0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/ch7KzI3n2Zk\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Counting:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/RLiwP_hxdQc\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/lAQ2HTqTl2w\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/_MVzXKfr6e8\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/tLzOkpH2zyM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/YBkpC29_GaI\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/GvTcpfSnOMQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/tIxk5NeiTck\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/VHwlKl5SsHc\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n    <hr class=\"lesspadding\" />\n    <h5>Money:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/pnXJGNo08v0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/aajLkveG750\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Addition and Subtraction:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/p2W0I06Nq5s\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/WwlrbMWcTtQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/scvwSXku0HQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/GdXClek-05I\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Shapes:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/OEbRDtCAFdU\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/svrkthG2950\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Patterns:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/MBjjxSx45-Q\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/a9wt4K5Zup0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/b7UufX_bZlg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Jl7EwPp6HQ0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Comparing Objects:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/HO8UvN2DV4A\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/E34PAOGYRNk\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n        </div>\n    </div>\n\n    <hr class=\"normalhr\" id=\"reading\" />\n    <h3>Reading Videos</h3>\n    <hr class=\"normalhr\" />\n\n    <hr class=\"lesspadding\" />\n    <h5>Print Concepts:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/7HOCobwTq1A\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/7dhW9I2xbFg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Phonological Awareness, Phonics, and Word Recognition:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/vwxNBQnhRrM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/neItURLvyIQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/ii18uH36ySU\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/3ovJIxTQpsU\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/xIBjAWkPzNA\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/rVuWKBFkZcU\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/RVophT8naUM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/U2DgOGLMz14\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/e2dx65u59aw\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/ri4u0TjAZ38\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/g3eUZAI8bTU\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/arQxkdRYyE4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/dEbaEXf6BqM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/0Au0bE0WxBc\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n\n    <hr class=\"lesspadding\" />\n    <h5>Understanding Literature:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/IdCQKwOmfkk\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/-_nePjWXecQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Aq4jnZfnKS4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/3BVOIyUnk6s\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/w33-m8-geuM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/oXLXXF7t0G8\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"normalhr\" id=\"history\" />\n    <h3>Social Studies Videos</h3>\n    <hr class=\"normalhr\">\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/RyLzsQKFpB0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/wP_IbZSxhEs\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/NR7z9FbUf5k\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/xL4uetrD3Hc\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/LKCtzuvBZPc\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/U-r-xHln6nE\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/TyP09S0UEzA\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/o3ihZRdSFWo\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/7Km5ecRCedU\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/_NeEF1fwT4k\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/8ZjpI6fgYSY\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/6MGRkUlFZws\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n\n    <hr class=\"normalhr\" id=\"science\" />\n    <h3>Science Videos</h3>\n    <hr class=\"normalhr\" />\n\n    <hr class=\"lesspadding\" />\n    <h5>Earth's Systems and Basic Needs:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Uo8lbeVVb4M\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/sn6GLgaTY0M\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/k4UDf3tF_O4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" width=\"500\" height=\"300\"\n                    src=\"https://www.youtube.com/embed/fLj260gsw60\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Forces and Energy:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/ZLDUrPaLQWE\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/tXhzHPUL6Vc\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/math/math.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/math/math.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMathMathComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"scroll-up\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12 col-md-12 col-lg-12\">\n                <i class=\"fas fa-arrow-alt-circle-up\" (click)=\"goToTop()\" id=\"button\" *ngIf=\"scrolled == 1\"></i>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"tableOfContentContainer\">\n    <div class=\"tableOfContent docs-toc-container\">\n        <div class=\"docs-toc-heading\">Math Videos:</div>\n        <nav>\n            <a pageScroll href=\"#kindergartenMath\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Kindergarten\n            </a>\n            <br>\n            <a pageScroll href=\"#firstMath\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                First Grade\n            </a>\n            <br>\n            <a pageScroll href=\"#secondMath\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Second Grade\n            </a>\n            <br>\n            <a pageScroll href=\"#thirdMath\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Third Grade\n            </a>\n            <br>\n            <a pageScroll href=\"#fourthMath\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Fourth Grade\n            </a>\n            <br>\n            <a pageScroll href=\"#fifthMath\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Fifth Grade\n            </a>\n            <br>\n        </nav>\n    </div>\n</div>\n\n<div class=\"container page-container\">\n    <hr class=\"titlehr\" />\n    <h1>Educational Math Videos</h1>\n    <p class=\"text-center\">Scroll down to the desired grade or use the navigation menu on the right.</p>\n    <hr class=titlehr />\n\n\n    <hr id=\"kindergartenMath\" class=\"lesspadding\" />\n    <h3>Kindergarten Math Videos</h3>\n    <h5>Number Bonds:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/LFki4BENvcw\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/BLuoYNmxkkU\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/YfzLt3oFev0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/vh481gFiqQk\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/lD9tjBUiXs0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/ch7KzI3n2Zk\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Counting:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/RLiwP_hxdQc\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/lAQ2HTqTl2w\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/_MVzXKfr6e8\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/tLzOkpH2zyM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/YBkpC29_GaI\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/GvTcpfSnOMQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/tIxk5NeiTck\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/VHwlKl5SsHc\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n    <hr class=\"lesspadding\" />\n    <h5>Money:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/pnXJGNo08v0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/aajLkveG750\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Addition and Subtraction:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/p2W0I06Nq5s\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/WwlrbMWcTtQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/scvwSXku0HQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/GdXClek-05I\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Shapes:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/OEbRDtCAFdU\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/svrkthG2950\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Patterns:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/MBjjxSx45-Q\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/a9wt4K5Zup0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/b7UufX_bZlg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Jl7EwPp6HQ0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Comparing Objects:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/HO8UvN2DV4A\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/E34PAOGYRNk\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n        </div>\n    </div>\n\n    <hr id=\"firstMath\" class=\"normalhr\" />\n    <h3>First Grade Math Videos</h3>\n    <hr class=\"normalhr\" />\n\n    <hr class=\"lesspadding\" />\n    <h5>Counting:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/MA9BhxGwGMs\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/r_h7YMgMdao\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/EFP6JwOWrlg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/uDSWMjtMff4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/yQSdKlNvrmw\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/kGBu6OY81Mw\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Money:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/pnXJGNo08v0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/MbtmucV-U2c\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Addition and Subtraction:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/6gfIvbkaCAA\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/facfD3bkPjI\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Mvm0y1Qr_JQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/wCgbVIA01N4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/zau4jtSA_kY\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/M2O8uhq5lLg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/WDZoZytc94Q\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/4OIks496ya8\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/FtjkzSnZ4G4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/81NfQ350vw8\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n\n    <hr class=\"lesspadding\" />\n    <h5>Shapes:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/24Uv8Cl5hvI\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/9OlcnbZ3uO8\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/ZnZYK83utu0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/3-QwWFkz5hw\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n\n    <hr class=\"lesspadding\" />\n    <h5>Comparing Numbers:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/M6Efzu2slaI\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/ka9zbPcqXBI\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/oMFUa5XxeHw\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/llqTVVXzPPY\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Measurement and Data:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/X_97AO2SkGU\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Yx_Lcp9tkmE\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/pgbX4J7cWBU\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/q8o7n-A0SC0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/GHb9ZGTDzV4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/jxhL1DyfQZY\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n\n    <hr class=\"lesspadding\" />\n    <h5>Telling Time:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/5xRoBx7iVGI\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/TaFQslk37xg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/g6tJAy_7AL4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/n_daAYx6krg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr id=\"secondMath\" class=\"normalhr\" />\n    <h3>Second Grade Math Videos</h3>\n    <hr class=\"normalhr\" />\n\n\n    <hr class=\"lesspadding\" />\n    <h5>Addition and Subtraction:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/akCX13BO05A\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/544k6p7NCPk\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/8hz0fAQV0ac\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/zyVliUqkths\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/I8QRZtOE67w\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/ul2ZpZT_byU\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/QAL8XxyGVow\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Buyaqe_L5-Y\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Place Value:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/a4FXl4zb3E4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/f35xvI8k93k\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Counting:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/PyzVG3xkONs\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/l3R6wdHs9n8\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/CJmCQs877dQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/wcxaDBbOR5U\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Telling Time:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/h6RNkQ7lU8Y\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/zVpqZSzoe5I\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Shapes:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Mn96drlCqyc\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/6ooKWyPI0i4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n        </div>\n    </div>\n\n\n    <hr id=\"thirdMath\" class=\"normalhr\" />\n    <h3>Third Grade Math Videos</h3>\n    <hr class=\"normalhr\" />\n\n    <hr class=\"lesspadding\" />\n    <h5>Multiplication and Division:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/dPksJHBZs4Q\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/LD4zp8ruvaI\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/C3PojOwjHcc\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/rGMecZ_aERo\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Rounding:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/VPdE5aOH52g\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/pNfz-JU2cKE\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Fractions:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/SZaXtOHNh6s\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/-YpEkExjq2E\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/jWWf1-zqnlM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/KlfxIbO-KJs\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Measurement and Data:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/iCnh6EL1Lmo\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/mHCBtKFhV8M\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/W9oidm-Tt24\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/MTSlKifo4js\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/8cz_IB65pZM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/_sQ3dqhLsIw\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr id=\"fourthMath\" class=\"normalhr\" />\n    <h3>Fourth Grade Math Videos</h3>\n    <hr class=\"normalhr\" />\n\n    <hr class=\"lesspadding\" />\n    <h5>Operations and Algebraic Thinking:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/2o0Mw_GbRdo\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/N_8srGGX0kk\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Kq4Gyoh7lGg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/4rWy0sWWQVc\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/41eVMYPCWTQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/2hVQLG-QTfI\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/0IZyGB1qQmM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/tW97UU01ShY\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Number and Operations:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/U8hZae6hYpw\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/8H4ydRhelH0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/9dYXfZZsbzc\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/-E3BXA___XA\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/47lajakFQlQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/qcHHhd6HizI\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/9Gt5MGIxCgQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Egjm6KpP2Bw\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/2FH6YiLWIuE\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/WV5VY76Pf5U\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Measurement and Data:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/t8hUCYFS36I\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/kOJFSH_Bn9U\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/ImVe0ed4fVM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/UgfSwlqi4Qg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/AuJQZ8Pusdg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Z3nGySo3HWo\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Geometry:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/jXczCSpWqdg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/k5etrWdIY6o\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/P3AOoLbA3us\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Q1sLyqSEEr0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr id=\"fifthMath\" class=\"normalhr\" />\n    <h3>Fifth Grade Math Videos</h3>\n    <hr class=\"normalhr\" />\n\n    <hr class=\"lesspadding\" />\n    <h5>Operations and Algebraic Thinking:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/v0bg2GWCbRo\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Ay5vpsieXb4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Nv8njymFuVM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/kg4b1DOtcN8\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Number and Operations:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/yfmEojlt4_A\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/RHUl4kZDD6c\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/FZhWVy8INyk\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/V16QulRkp_o\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/32gDF10ZXOA\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/6SCROCbSGts\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/tDQipFjAoT8\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/AwSMewrnQXg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/cARsEw-s8Fg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/7x1IP_v-ADQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Measurement and Data:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/mJrSUJ57H30\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/RxkRlIAucMk\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/3lbMvKtT-6w\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/dAKAfcqi3x4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Geometry:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/qcb-mcREIi0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/v4vXkDHYDyk\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/mApnNks5Oag\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/d6vhjpnfd3c\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/mission/mission.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mission/mission.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMissionMissionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container page-container\">\n    <hr class=\"titlehr\" />\n    <h1>Our Mission</h1>\n    <hr class=titlehr />\n\n    <p> We understand that education in a digital age due to COVID-19 can be frustrating at times and the content can be\n        tricky to teach virtually. With the large amount of teaching videos on the internet that range from poor quality\n        to high quality, it's easy to be overwhelmed in trying to find the perfect video for a particular standard.\n        Knowing\n        how frustrating that is, we created a website with high quality and easily accesible videos that correspond with\n        the individual teaching standards for each grade. Our mission is to be an easy-to-use resource for parents and\n        teachers as they educate students and children virtually. </p>\n\n    <hr class=\"lesspadding\" />\n\n    <p>All of the videos on this site have been personally sourced, watched, and analyzed for best teaching practices by\n        a certified and experienced elementary school teacher. Please feel free to use these videos however you would\n        prefer in order to assist in teaching or reviewing valuable elementary concepts.</p>\n\n    <hr class=\"lesspadding\" />\n\n    <p>Disclaimer: Elementary Education Hub does not produce or own any of the videos located on this site.</p>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header class=\"flex-container\">\n    <div class=\"row justify-content-between\">\n        <div class=\"tagline\">\n            <img src=\"../../assets/Screen Shot 2020-07-08 at 1.05.56 PM.png\">\n        </div>\n    </div>\n</header>\n\n<nav>\n    <!-- The navigation menu -->\n    <div class=\"navbar\" id=\"topNav\">\n        <!-- <span class=\"navbar-toggle\" id=\"js-navbar-toggle\">\n            <i class=\"fas fa-bars\"></i>\n        </span> -->\n        <a routerLink=\"\" routerLinkActive=\"active\">Home</a>\n        <div class=\"subnav\">\n            <button class=\"subnavbtn\">Resources By Grade </button>\n            <div id=\"subnav-content\" class=\"subnav-content\">\n                <a routerLink=\"/kindergarten\">Kindergarten</a>\n                <a routerLink=\"/firstgrade\">First Grade</a>\n                <a routerLink=\"/secondgrade\">Second Grade</a>\n                <a routerLink=\"/thirdgrade\">Third Grade</a>\n                <a routerLink=\"/fourthgrade\">Fourth Grade</a>\n                <a routerLink=\"/fifthgrade\">Fifth Grade</a>\n            </div>\n        </div>\n        <div class=\"subnav\">\n            <button class=\"subnavbtn\">Resources by Subject </button>\n            <div id=\"subnav-content\" class=\"subnav-content\">\n                <a routerLink=\"/math\">Math</a>\n                <a routerLink=\"/reading\">Reading</a>\n                <!-- Spelling component routing for Phase 2 add-on -->\n                <!-- <a routerLink=\"/spelling\">Spelling</a> -->\n                <!-- Writing Component routing for Phase 2 add-on -->\n                <!-- <a routerLink=\"/writing\">Writing</a> -->\n                <a routerLink=\"/history\">Social Studies</a>\n                <a routerLink=\"/science\">Science</a>\n\n                <a routerLink=\"/art\">Art</a>\n            </div>\n        </div>\n        <a routerLink=\"/specialneeds\">Special Education Resources</a>\n        <a routerLink=\"/mission\">Our Mission</a>\n    </div>\n</nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/reading/reading.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reading/reading.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppReadingReadingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"scroll-up\">\n    <div class=\"container\">\n        <div class=\"col-12 col-md-12 col-lg-12\">\n            <i class=\"fas fa-arrow-alt-circle-up\" (click)=\"goToTop()\" id=\"button\" *ngIf=\"scrolled == 1\"></i>\n        </div>\n    </div>\n</div>\n\n<div class=\"tableOfContentContainer\">\n    <div class=\"tableOfContent docs-toc-container\">\n        <div class=\"docs-toc-heading\">Reading Videos:</div>\n        <nav>\n            <a pageScroll href=\"#kindergartenReading\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Kindergarten\n            </a>\n            <br>\n            <a pageScroll href=\"#firstReading\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                First Grade\n            </a>\n            <br>\n            <a pageScroll href=\"#secondReading\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Second Grade\n            </a>\n            <br>\n            <a pageScroll href=\"#thirdReading\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Third Grade\n            </a>\n            <br>\n            <a pageScroll href=\"#fourthReading\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Fourth Grade\n            </a>\n            <br>\n            <a pageScroll href=\"#fifthReading\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Fifth Grade\n            </a>\n            <br>\n        </nav>\n    </div>\n</div>\n\n<div class=\"container page-container\">\n    <hr class=\"titlehr\" />\n    <h1>Educational Reading Videos</h1>\n    <p class=\"text-center\">Scroll down to the desired grade or use the navigation menu on the right.</p>\n    <hr class=titlehr />\n\n\n    <hr class=\"lesspadding\" id=\"kindergartenReading\" />\n    <h3>Kindergarten Reading Videos</h3>\n    <h5>Print Concepts:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/7HOCobwTq1A\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/7dhW9I2xbFg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Phonological Awareness, Phonics, and Word Recognition:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/vwxNBQnhRrM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/neItURLvyIQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/ii18uH36ySU\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/3ovJIxTQpsU\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/xIBjAWkPzNA\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/rVuWKBFkZcU\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/RVophT8naUM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/U2DgOGLMz14\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/e2dx65u59aw\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/ri4u0TjAZ38\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/g3eUZAI8bTU\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/arQxkdRYyE4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/dEbaEXf6BqM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/0Au0bE0WxBc\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n\n    <hr class=\"lesspadding\" />\n    <h5>Understanding Literature:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/IdCQKwOmfkk\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/-_nePjWXecQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Aq4jnZfnKS4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/3BVOIyUnk6s\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/w33-m8-geuM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/oXLXXF7t0G8\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"normalhr\" id=\"firstReading\" />\n    <h3>First Grade Reading Videos</h3>\n    <hr class=\"normalhr\" />\n\n    <hr class=\"lesspadding\" />\n    <h5>Print Concepts:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/0Wrv_ZviMEc\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/LdCOswMeXFQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/ppbjDRtLxB8\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/2gxvF2X5ANo\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Phonological Awareness, Phonics, and Word Recognition:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/4TjcT7Gto3U\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/pQgJnpE7IL8\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/1OgDU6Ww3CE\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/dcMK1bqpGHk\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/NK8_Tvu6bJk\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/zpcgZTPMgHY\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/8fc_pnz1sh0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/V-cvlZLNEBM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/9zzq9wy6wXI\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/_Nawc37HyTQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/eqigJZm5aa4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/k-n_LHGseNk\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/uS2XUGBmcn4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/zCnIaD-1kVE\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/3gFsszNp5RM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/bp8arskkcXg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/lIGDpEVPzCw\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/9S7DY2lgJlU\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/vlBc703kYMg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/epk-hnVC10k\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/5j5g5xThho4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/6IyuhZUhLcY\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/gubPH3WEurg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9  col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/5xE-vw2ctqo\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n\n\n    <hr class=\"lesspadding\" />\n    <h5>Understanding Literature:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/k8muSkXjPHE\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/NpWHZJZQDSE\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/lo-JrF-c110\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/12CNNORawk8\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/0Bz4-1YKI1M\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/vXWK1-L41f0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/0wpByvesEMU\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/3mAl9QMJJTo\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n\n    <hr class=\"normalhr\" id=\"secondReading\" />\n    <h3>Second Grade Reading Videos</h3>\n    <hr class=\"normalhr\" />\n\n    <hr class=\"lesspadding\" />\n    <h5>Phonological Awareness, Phonics, and Word Recognition:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/BGrIyCT7nK0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/l-UttUp6wCc\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/txNARc6bCxI\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/U_6mfwXe3Bo\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/ElyzuIrMXkI\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/pdzFF7HF_cU\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/DSkTdGjM5q8\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/CNMj-4giv6c\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/bBWm3-mxL1U\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/uEFqdj41kEQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/0uK65qs_kOs\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/0vZm6axAfJ0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Understanding Literature:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Xw1WZPdXmso\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/x3Pb2TQ-i_A\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/7JILMvfXgrU\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/mkZo2zVKJR4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Iekv6R9U1dM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/YK_LCjQQCPk\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"normalhr\" id=\"thirdReading\" />\n    <h3>Third Grade Reading Videos</h3>\n    <hr class=\"normalhr\" />\n\n    <hr class=\"lesspadding\" />\n    <h5>Phonics, Word Recognition, and Word Structure:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/L-8m7egfXwQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/4qe5SJf5jGg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/FSkgVDrLb5A\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/EnJItr8Sm_g\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/keqHlD-lGWQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/dqIpM6Smr04\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Understanding Literature:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/7C8CZjcnIq4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/gw42rShPd1s\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/d6EE_B3_T-E\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/em4SystWI2A\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/xKE_F_l5FzQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/tAjdk3-Q1qY\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"normalhr\" id=\"fourthReading\" />\n    <h3>Fourth Grade Reading Videos</h3>\n    <hr class=\"normalhr\" />\n\n    <hr class=\"lesspadding\" />\n    <h5>Phonics, Word Recognition, and Word Structure:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/SdnNlQcAfaI\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/AVPacOzaZr4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/k5niBOyRS8I\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/L5x-HzUcppQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/5Ub0Qu4uxpc\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/-PhyqbvnoCg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Z97V5bYcrKo\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/7sHbB9VQBgo\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/j54a9uBQx-4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/eSDuxQjwUPM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/fo839aHCPr8\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/WgDuM63qqsA\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Understanding Literature:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/6OGMlrRSALY\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/fb33WQTGXPk\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/FgD-mrTEol8\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/NapYdbAwdIQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"normalhr\" id=\"fifthReading\" />\n    <h3>Fifth Grade Reading Videos</h3>\n    <hr class=\"normalhr\" />\n\n    <hr class=\"lesspadding\" />\n    <h5>Standard English Conventions:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/8c8yiwrPS0U\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/R74Ly00UygU\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/QFcaUTd8DgY\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/p50_yNQLj5c\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/jjrwi_FCQS4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/s74XA3tCPt8\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/p4JHsbF_rwg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Z5ISJUxKOpk\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/science/science.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/science/science.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppScienceScienceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"scroll-up\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12 col-md-12 col-lg-12\">\n                <i class=\"fas fa-arrow-alt-circle-up\" (click)=\"goToTop()\" id=\"button\" *ngIf=\"scrolled == 1\"></i>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"tableOfContentContainer\">\n    <div class=\"tableOfContent docs-toc-container\">\n        <div class=\"docs-toc-heading\">Science Videos:</div>\n        <nav>\n            <a pageScroll href=\"#kindergartenScience\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Kindergarten\n            </a>\n            <br>\n            <a pageScroll href=\"#firstScience\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                First Grade\n            </a>\n            <br>\n            <a pageScroll href=\"#secondScience\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Second Grade\n            </a>\n            <br>\n            <a pageScroll href=\"#thirdScience\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Third Grade\n            </a>\n            <br>\n            <a pageScroll href=\"#fourthScience\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Fourth Grade\n            </a>\n            <br>\n            <a pageScroll href=\"#fifthScience\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Fifth Grade\n            </a>\n            <br>\n        </nav>\n    </div>\n</div>\n\n<div class=\"container page-container\">\n    <hr class=\"titlehr\" />\n    <h1>Educational Science Videos</h1>\n    <p class=\"text-center\">Scroll down to the desired grade or use the navigation menu on the right.</p>\n    <hr class=titlehr />\n\n\n    <hr id=\"kindergartenScience\" class=\"lesspadding\" />\n    <h3>Kindergarten Science Videos</h3>\n    <h5>Earth's Systems and Basic Needs:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Uo8lbeVVb4M\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/sn6GLgaTY0M\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/k4UDf3tF_O4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" width=\"500\" height=\"300\"\n                    src=\"https://www.youtube.com/embed/fLj260gsw60\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Forces and Energy:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/ZLDUrPaLQWE\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/tXhzHPUL6Vc\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr id=\"firstScience\" class=\"normalhr\" />\n    <h3>First Grade Science Videos</h3>\n    <hr class=\"normalhr\" />\n\n    <hr class=\"lesspadding\" />\n    <h5>Structure and Function:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/V2GvQXvjhLA\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/j6XVVrukmmc\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/xZ6v_J4I5Uw\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/dN_au2KHffk\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Space Systems:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/ftLtDzpUcBA\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/1SN1BOpLZAs\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Waves: Light and Sound</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/AGjxfx8sy6s\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/3yqB2KFwJCo\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr id=\"secondScience\" class=\"normalhr\" />\n    <h3>Second Grade Science Videos</h3>\n    <hr class=\"normalhr\" />\n\n    <hr class=\"lesspadding\" />\n    <h5>Interdependent Relationships:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/3yqB2KFwJCo\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/YGxzFBRBwpg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Landforms and Erosion:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/R-Iak3Wvh9c\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/BsqKTJtK_vw\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Physical and Chemical Changes:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/LnyrKebTnPc\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/37pir0ej_SE\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr id=\"thirdScience\" class=\"normalhr\" />\n    <h3>Third Grade Science Videos</h3>\n    <hr class=\"normalhr\" />\n\n    <hr class=\"lesspadding\" />\n    <h5>Growth and Development of Organisms:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/7hSnpkGyXx4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/tkFPyue5X3Q\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Ecosystems:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/P1X-WpfUvm4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/EXpX4mLocFA\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Vtb3I8Vzlfg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/pasB5FxhVUk\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Inherited Traits and Instincts:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/GqEConjFPvg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/SldwzOJ23J8\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/1eBn-73RE6c\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/IVNNkFvWBU8\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Forces and Interactions:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/rnlHxAYwCbg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/-Rjid6hQuww\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/DR9w4koW2EA\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Mp0Bu75MSj8\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr id=\"fourthScience\" class=\"normalhr\" />\n    <h3>Fourth Grade Science Videos</h3>\n    <hr class=\"normalhr\" />\n\n    <hr class=\"lesspadding\" />\n    <h5>Fossils:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/xQBkawjFVIA\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/tyOjxjFHW-c\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n    <hr class=\"lesspadding\" />\n    <h5>Weathering and Erosion:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/exS9gFXgib0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/jyh9wNIxy2o\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Energy Resources:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/dPXoZclyFrw\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Giek094C_l4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Waves:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/KWzyQKcJBYg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/1NJHHA9bp5Y\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr id=\"fifthScience\" class=\"normalhr\" />\n    <h3>Fifth Grade Science Videos</h3>\n    <hr class=\"normalhr\" />\n\n    <hr class=\"lesspadding\" />\n    <h5>Earth's Place in the Universe:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Zo-sKzMWYFA\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/a5nhIUFTjcs\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Earth's Systems:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/VMxjzWHbyFM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/QYm4ZmReT2g\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/6j5iHvYBIcg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/uJmfY19sTGk\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Matter and Its Interactions:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/HmzFG_xOeaQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/CqjxAYZ13QA\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/secondgrade/secondgrade.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/secondgrade/secondgrade.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSecondgradeSecondgradeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"scroll-up\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12 col-md-12 col-lg-12\">\n                <i class=\"fas fa-arrow-alt-circle-up\" (click)=\"goToTop()\" id=\"button\" *ngIf=\"scrolled == 1\"></i>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"tableOfContentContainer\">\n    <div class=\"tableOfContent docs-toc-container\">\n        <div class=\"docs-toc-heading\">Grade 2 Videos:</div>\n        <nav>\n            <a pageScroll href=\"#math\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Math\n            </a>\n            <br>\n            <a pageScroll href=\"#reading\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Reading\n            </a>\n            <br>\n            <a pageScroll href=\"#history\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Social Studies\n            </a>\n            <br>\n            <a pageScroll href=\"#science\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Science\n            </a>\n        </nav>\n    </div>\n</div>\n\n<div class=\"container page-container\">\n    <hr class=\"titlehr\" />\n    <h1>Second Grade Videos</h1>\n    <p class=\"text-center\">Scroll down to the desired subject or use the navigation menu on the right.</p>\n    <hr class=titlehr />\n\n\n    <hr id=\"math\" class=\"lesspadding\" />\n    <h3>Math Videos</h3>\n    <h5>Addition and Subtraction:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/akCX13BO05A\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/544k6p7NCPk\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/8hz0fAQV0ac\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/zyVliUqkths\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/I8QRZtOE67w\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/ul2ZpZT_byU\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/QAL8XxyGVow\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Buyaqe_L5-Y\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Place Value:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/a4FXl4zb3E4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/f35xvI8k93k\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Counting:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/PyzVG3xkONs\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/l3R6wdHs9n8\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/CJmCQs877dQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/wcxaDBbOR5U\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Telling Time:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/h6RNkQ7lU8Y\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/zVpqZSzoe5I\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Shapes:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Mn96drlCqyc\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/6ooKWyPI0i4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n        </div>\n    </div>\n\n    <hr class=\"normalhr\" id=\"reading\" />\n    <h3>Reading Videos</h3>\n    <hr class=\"normalhr\" />\n\n    <hr class=\"lesspadding\" />\n    <h5>Phonological Awareness, Phonics, and Word Recognition:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/BGrIyCT7nK0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/l-UttUp6wCc\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/txNARc6bCxI\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/U_6mfwXe3Bo\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/ElyzuIrMXkI\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/pdzFF7HF_cU\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/DSkTdGjM5q8\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/CNMj-4giv6c\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/bBWm3-mxL1U\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/uEFqdj41kEQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/0uK65qs_kOs\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/0vZm6axAfJ0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Understanding Literature:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Xw1WZPdXmso\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/x3Pb2TQ-i_A\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/7JILMvfXgrU\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/mkZo2zVKJR4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Iekv6R9U1dM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/YK_LCjQQCPk\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr id=\"history\" class=\"normalhr\" />\n    <h3>Social Studies Videos</h3>\n    <hr class=\"normalhr\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/r8kOZkiJI8M\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/-BlDJ8-9JRE\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/OvwlRTYvU8o\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/BOTybVw8GXo\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/X9Xyw43cC7M\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/v23V-cHPpz4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/dmwcfaythY4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Pxt_uA8w-t4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Bu_8d70seIY\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/X9Xyw43cC7M\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/ZKnpuHQS0lM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/wMMwBhkxBv0\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n\n    <hr id=\"science\" class=\"normalhr\" />\n    <h3>Science Videos</h3>\n    <hr class=\"normalhr\" />\n\n    <hr class=\"lesspadding\" />\n    <h5>Interdependent Relationships:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/3yqB2KFwJCo\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/YGxzFBRBwpg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Landforms and Erosion:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/R-Iak3Wvh9c\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/BsqKTJtK_vw\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Physical and Chemical Changes:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/LnyrKebTnPc\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/37pir0ej_SE\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/specialneeds/specialneeds.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/specialneeds/specialneeds.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSpecialneedsSpecialneedsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container page-container\">\n    <hr class=\"titlehr\" />\n    <h1>Special Education Resources</h1>\n    <p class=\"text-center\">Below are links to a selection of great resources to help parents and teachers with special\n        education students</p>\n    <hr class=titlehr />\n\n    <section class=\"float-container\">\n        <div class=\"float-child\" style=\"float: left\">\n            <ul>\n                <li><a href=\"https://www.activelylearn.com/\">Actively Learn</a>\n                    <br>\n                    Online curriculum with scaffolding\n                </li>\n\n                <li><a href=\"https://do2learn.com/\">Do2Learn</a>\n                    <br>\n                    Free activities for behavioral regulation and social skills\n                </li>\n\n                <li><a href=\"https://www.emotionalabcs.com/teachers/\">EmotionalABCs</a>\n                    <br>\n                    Social-emotional learning resources for early elementary grades\n                </li>\n\n                <li><a href=\"http://bit.ly/remoteaccess4all\">Equal Access to Distance Curriculum</a>\n                    <br>\n                    Distance Learning curriculum resources\n                </li>\n\n                <li><a href=\"https://www.ixl.com/\">IXL.com</a>\n                    <br>\n                    Free curriculum with diagnostics\n                </li>\n                <li>\n                    <a href=\"https://www.commonsense.org/education/app/skill-champ\">Skill Champ</a>\n                    <br>\n                    Foundational skills practice tool that supports specific learning needs\n                </li>\n                <li>\n                    <a href=\"https://www.commonsense.org/education/app/seeing-ai\">Seeing AI</a>\n                    <br>\n                    Free app for visually impaired students - uses AI to communicate the world to students\n\n                </li>\n                <li>\n                    <a href=\"https://www.commonsense.org/education/app/modmath\">ModMath</a>\n                    <br>\n                    Blank virtual grid sheets to assist students with mathmatical notation\n\n                </li>\n            </ul>\n        </div>\n        <div class=\"float-child\" style=\"float: right\">\n            <ul>\n                <li><a href=\"https://www.bookshare.org/cms/help-center/learning-center/learning-at-home\">BookShare</a>\n                    <br>\n                    For students that have barriers to reading - free access for remote learning\n                </li>\n\n                <li><a href=\"https://www.controlaltachieve.com/2016/10/special-needs-extensions.html\">Google Chrome\n                        Extensions for Students\n                        with Special Needs</a>\n                    <br>\n                    Help with text-to-speech, focus, comprehension, and readability\n                </li>\n\n                <li><a href=\"https://www.headsprout.com/\">Headsprout</a>\n                    <br>\n                    Reading resouces - free for rest of school year\n                </li>\n                <li><a href=\"https://www.interventioncentral.org/\">Intervention Central</a>\n                    <br>\n                    Clearinghouse for free RTI materials</li>\n                <li><a href=\"https://newsela.com/\">Newsela</a>\n                    <br>\n                    Leveled reading resources - free for rest of school year\n                </li>\n                <li><a href=\"https://www.nypl.org/about/remote-resources/kids-and-teens/homework-help-brainfuse\">New\n                        York Public Library\n                        Free Tutoring</a>\n                    <br>\n                    Offers live tutoring and homework help\n                </li>\n                <li>\n                    <a href=\"https://www.uft.org/teaching/students-disabilities/special-education-resources\">UFT's\n                        Students With\n                        Disabilities Resources</a>\n                    <br>\n                    Online materials for building literacy\n                </li>\n                <li>\n                    <a href=\"https://www.interventioncentral.org\">Intervention Central</a>\n                    <br>\n                    RTI resources including behavioral interventions\n                </li>\n            </ul>\n        </div>\n    </section>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/spelling/spelling.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/spelling/spelling.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSpellingSpellingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"scroll-up\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12 col-md-12 col-lg-12\">\n                <i class=\"fas fa-arrow-alt-circle-up\" (click)=\"goToTop()\" id=\"button\" *ngIf=\"scrolled == 1\"></i>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"page-container\">\n    <p>spelling works!</p>\n\n    <!-- Kindergarten -->\n\n\n    <!-- First Grade -->\n\n\n    <!-- Second Grade -->\n\n\n    <!-- Third Grade -->\n\n\n    <!-- Fourth Grade -->\n\n\n    <!-- Fifth Grade -->\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/thirdgrade/thirdgrade.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/thirdgrade/thirdgrade.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppThirdgradeThirdgradeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"scroll-up\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12 col-md-12 col-lg-12\">\n                <i class=\"fas fa-arrow-alt-circle-up\" (click)=\"goToTop()\" id=\"button\" *ngIf=\"scrolled == 1\"></i>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"tableOfContentContainer\">\n    <div class=\"tableOfContent docs-toc-container\">\n        <div class=\"docs-toc-heading\">Grade 3 Videos:</div>\n        <nav>\n            <a pageScroll href=\"#math\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Math\n            </a>\n            <br>\n            <a pageScroll href=\"#reading\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Reading\n            </a>\n            <br>\n            <a pageScroll href=\"#history\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Social Studies\n            </a>\n            <br>\n            <a pageScroll href=\"#science\" class=\"docs-level-h3 docs-link ng-star-inserted\">\n                Science\n            </a>\n        </nav>\n    </div>\n</div>\n\n<div class=\"container page-container\">\n    <hr class=\"titlehr\" />\n    <h1>Third Grade Videos</h1>\n    <p class=\"text-center\">Scroll down to the desired subject or use the navigation menu on the right.</p>\n    <hr class=titlehr />\n\n\n    <hr id=\"math\" class=\"lesspadding\" />\n    <h3>Math Videos</h3>\n    <h5>Multiplication and Division:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/dPksJHBZs4Q\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/LD4zp8ruvaI\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/C3PojOwjHcc\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/rGMecZ_aERo\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Rounding:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/VPdE5aOH52g\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/pNfz-JU2cKE\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Fractions:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/SZaXtOHNh6s\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/-YpEkExjq2E\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/jWWf1-zqnlM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/KlfxIbO-KJs\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Measurement and Data:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/iCnh6EL1Lmo\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/mHCBtKFhV8M\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/W9oidm-Tt24\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/MTSlKifo4js\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/8cz_IB65pZM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/_sQ3dqhLsIw\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"normalhr\" id=\"reading\" />\n    <h3>Reading Videos</h3>\n    <hr class=\"normalhr\" />\n\n    <hr class=\"lesspadding\" />\n    <h5>Phonics, Word Recognition, and Word Structure:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/L-8m7egfXwQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/4qe5SJf5jGg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/FSkgVDrLb5A\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/EnJItr8Sm_g\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/keqHlD-lGWQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/dqIpM6Smr04\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Understanding Literature:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/7C8CZjcnIq4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/gw42rShPd1s\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/d6EE_B3_T-E\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/em4SystWI2A\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/xKE_F_l5FzQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/tAjdk3-Q1qY\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr id=\"history\" class=\"normalhr\" />\n    <h3>Social Studies Videos</h3>\n    <hr class=\"normalhr\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/H6WY-5u3dIc\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/j7hrjz8IWwk\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/QV2HOfcCJaM\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/E2YidQrQuec\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/XS8DEjd2QBg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/4UV6_AMpoyU\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/a8hDKU_bAec\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/a2-QL59pVRo\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/GrG7zBUDiqQ\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/o2WRP-U7630\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr id=\"science\" class=\"normalhr\" />\n    <h3>Science Videos</h3>\n    <hr class=\"normalhr\" />\n\n    <hr class=\"lesspadding\" />\n    <h5>Growth and Development of Organisms:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/7hSnpkGyXx4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/tkFPyue5X3Q\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Ecosystems:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/P1X-WpfUvm4\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/EXpX4mLocFA\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Vtb3I8Vzlfg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/pasB5FxhVUk\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Inherited Traits and Instincts:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/GqEConjFPvg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/SldwzOJ23J8\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/1eBn-73RE6c\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/IVNNkFvWBU8\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>\n\n    <hr class=\"lesspadding\" />\n    <h5>Forces and Interactions:</h5>\n    <hr class=\"lesspadding\" />\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/rnlHxAYwCbg\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/-Rjid6hQuww\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/DR9w4koW2EA\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n            <div class=\"embed-responsive embed-responsive-16by9 col-12 col-md-12 col-lg-6\">\n                <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Mp0Bu75MSj8\" frameborder=\"0\"\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                    allowfullscreen></iframe>\n            </div>\n\n        </div>\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/writing/writing.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/writing/writing.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWritingWritingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"scroll-up\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12 col-md-12 col-lg-12\">\n                <i class=\"fas fa-arrow-alt-circle-up\" (click)=\"goToTop()\" id=\"button\" *ngIf=\"scrolled == 1\"></i>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"page-container\">\n    <p>grammar works!</p>\n\n    <!-- Kindergarten -->\n\n\n    <!-- First Grade -->\n\n\n    <!-- Second Grade -->\n\n\n    <!-- Third Grade -->\n\n\n    <!-- Fourth Grade -->\n\n\n    <!-- Fifth Grade -->\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./homepage/homepage.component */
    "./src/app/homepage/homepage.component.ts");
    /* harmony import */


    var _kindergarten_kindergarten_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./kindergarten/kindergarten.component */
    "./src/app/kindergarten/kindergarten.component.ts");
    /* harmony import */


    var _firstgrade_firstgrade_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./firstgrade/firstgrade.component */
    "./src/app/firstgrade/firstgrade.component.ts");
    /* harmony import */


    var _secondgrade_secondgrade_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./secondgrade/secondgrade.component */
    "./src/app/secondgrade/secondgrade.component.ts");
    /* harmony import */


    var _thirdgrade_thirdgrade_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./thirdgrade/thirdgrade.component */
    "./src/app/thirdgrade/thirdgrade.component.ts");
    /* harmony import */


    var _fourthgrade_fourthgrade_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./fourthgrade/fourthgrade.component */
    "./src/app/fourthgrade/fourthgrade.component.ts");
    /* harmony import */


    var _fifthgrade_fifthgrade_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./fifthgrade/fifthgrade.component */
    "./src/app/fifthgrade/fifthgrade.component.ts");
    /* harmony import */


    var _reading_reading_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./reading/reading.component */
    "./src/app/reading/reading.component.ts");
    /* harmony import */


    var _spelling_spelling_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./spelling/spelling.component */
    "./src/app/spelling/spelling.component.ts");
    /* harmony import */


    var _writing_writing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./writing/writing.component */
    "./src/app/writing/writing.component.ts");
    /* harmony import */


    var _math_math_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./math/math.component */
    "./src/app/math/math.component.ts");
    /* harmony import */


    var _science_science_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./science/science.component */
    "./src/app/science/science.component.ts");
    /* harmony import */


    var _history_history_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./history/history.component */
    "./src/app/history/history.component.ts");
    /* harmony import */


    var _art_art_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./art/art.component */
    "./src/app/art/art.component.ts");
    /* harmony import */


    var _specialneeds_specialneeds_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./specialneeds/specialneeds.component */
    "./src/app/specialneeds/specialneeds.component.ts");
    /* harmony import */


    var _mission_mission_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./mission/mission.component */
    "./src/app/mission/mission.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");

    var routes = [{
      path: "",
      component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"]
    }, {
      path: "kindergarten",
      component: _kindergarten_kindergarten_component__WEBPACK_IMPORTED_MODULE_4__["KindergartenComponent"]
    }, {
      path: "firstgrade",
      component: _firstgrade_firstgrade_component__WEBPACK_IMPORTED_MODULE_5__["FirstgradeComponent"]
    }, {
      path: "secondgrade",
      component: _secondgrade_secondgrade_component__WEBPACK_IMPORTED_MODULE_6__["SecondgradeComponent"]
    }, {
      path: "thirdgrade",
      component: _thirdgrade_thirdgrade_component__WEBPACK_IMPORTED_MODULE_7__["ThirdgradeComponent"]
    }, {
      path: "fourthgrade",
      component: _fourthgrade_fourthgrade_component__WEBPACK_IMPORTED_MODULE_8__["FourthgradeComponent"]
    }, {
      path: "fifthgrade",
      component: _fifthgrade_fifthgrade_component__WEBPACK_IMPORTED_MODULE_9__["FifthgradeComponent"]
    }, {
      path: "reading",
      component: _reading_reading_component__WEBPACK_IMPORTED_MODULE_10__["ReadingComponent"]
    }, {
      path: "spelling",
      component: _spelling_spelling_component__WEBPACK_IMPORTED_MODULE_11__["SpellingComponent"]
    }, {
      path: "writing",
      component: _writing_writing_component__WEBPACK_IMPORTED_MODULE_12__["WritingComponent"]
    }, {
      path: "math",
      component: _math_math_component__WEBPACK_IMPORTED_MODULE_13__["MathComponent"]
    }, {
      path: "science",
      component: _science_science_component__WEBPACK_IMPORTED_MODULE_14__["ScienceComponent"]
    }, {
      path: "history",
      component: _history_history_component__WEBPACK_IMPORTED_MODULE_15__["HistoryComponent"]
    }, {
      path: "art",
      component: _art_art_component__WEBPACK_IMPORTED_MODULE_16__["ArtComponent"]
    }, {
      path: "specialneeds",
      component: _specialneeds_specialneeds_component__WEBPACK_IMPORTED_MODULE_17__["SpecialneedsComponent"]
    }, {
      path: "mission",
      component: _mission_mission_component__WEBPACK_IMPORTED_MODULE_18__["MissionComponent"]
    }, {
      path: "contact",
      component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_19__["ContactComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        scrollPositionRestoration: "enabled",
        useHash: false
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = "ElementaryEducationHub";
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-root",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./homepage/homepage.component */
    "./src/app/homepage/homepage.component.ts");
    /* harmony import */


    var _kindergarten_kindergarten_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./kindergarten/kindergarten.component */
    "./src/app/kindergarten/kindergarten.component.ts");
    /* harmony import */


    var _firstgrade_firstgrade_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./firstgrade/firstgrade.component */
    "./src/app/firstgrade/firstgrade.component.ts");
    /* harmony import */


    var _secondgrade_secondgrade_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./secondgrade/secondgrade.component */
    "./src/app/secondgrade/secondgrade.component.ts");
    /* harmony import */


    var _thirdgrade_thirdgrade_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./thirdgrade/thirdgrade.component */
    "./src/app/thirdgrade/thirdgrade.component.ts");
    /* harmony import */


    var _fourthgrade_fourthgrade_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./fourthgrade/fourthgrade.component */
    "./src/app/fourthgrade/fourthgrade.component.ts");
    /* harmony import */


    var _fifthgrade_fifthgrade_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./fifthgrade/fifthgrade.component */
    "./src/app/fifthgrade/fifthgrade.component.ts");
    /* harmony import */


    var _reading_reading_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./reading/reading.component */
    "./src/app/reading/reading.component.ts");
    /* harmony import */


    var _spelling_spelling_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./spelling/spelling.component */
    "./src/app/spelling/spelling.component.ts");
    /* harmony import */


    var _writing_writing_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./writing/writing.component */
    "./src/app/writing/writing.component.ts");
    /* harmony import */


    var _math_math_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./math/math.component */
    "./src/app/math/math.component.ts");
    /* harmony import */


    var _science_science_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./science/science.component */
    "./src/app/science/science.component.ts");
    /* harmony import */


    var _history_history_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./history/history.component */
    "./src/app/history/history.component.ts");
    /* harmony import */


    var _art_art_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./art/art.component */
    "./src/app/art/art.component.ts");
    /* harmony import */


    var _specialneeds_specialneeds_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./specialneeds/specialneeds.component */
    "./src/app/specialneeds/specialneeds.component.ts");
    /* harmony import */


    var _mission_mission_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./mission/mission.component */
    "./src/app/mission/mission.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var ng2_go_top_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ng2-go-top-button */
    "./node_modules/ng2-go-top-button/dist/index.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var ng_image_slider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ng-image-slider */
    "./node_modules/ng-image-slider/fesm2015/ng-image-slider.js");
    /* harmony import */


    var ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ngx-page-scroll-core */
    "./node_modules/ngx-page-scroll-core/fesm2015/ngx-page-scroll-core.js");
    /* harmony import */


    var ngx_page_scroll__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ngx-page-scroll */
    "./node_modules/ngx-page-scroll/fesm2015/ngx-page-scroll.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"], _kindergarten_kindergarten_component__WEBPACK_IMPORTED_MODULE_7__["KindergartenComponent"], _firstgrade_firstgrade_component__WEBPACK_IMPORTED_MODULE_8__["FirstgradeComponent"], _secondgrade_secondgrade_component__WEBPACK_IMPORTED_MODULE_9__["SecondgradeComponent"], _thirdgrade_thirdgrade_component__WEBPACK_IMPORTED_MODULE_10__["ThirdgradeComponent"], _fourthgrade_fourthgrade_component__WEBPACK_IMPORTED_MODULE_11__["FourthgradeComponent"], _fifthgrade_fifthgrade_component__WEBPACK_IMPORTED_MODULE_12__["FifthgradeComponent"], _reading_reading_component__WEBPACK_IMPORTED_MODULE_13__["ReadingComponent"], _spelling_spelling_component__WEBPACK_IMPORTED_MODULE_14__["SpellingComponent"], _writing_writing_component__WEBPACK_IMPORTED_MODULE_15__["WritingComponent"], _math_math_component__WEBPACK_IMPORTED_MODULE_16__["MathComponent"], _science_science_component__WEBPACK_IMPORTED_MODULE_17__["ScienceComponent"], _history_history_component__WEBPACK_IMPORTED_MODULE_18__["HistoryComponent"], _art_art_component__WEBPACK_IMPORTED_MODULE_19__["ArtComponent"], _specialneeds_specialneeds_component__WEBPACK_IMPORTED_MODULE_20__["SpecialneedsComponent"], _mission_mission_component__WEBPACK_IMPORTED_MODULE_21__["MissionComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_22__["FooterComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_23__["ContactComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], ng2_go_top_button__WEBPACK_IMPORTED_MODULE_24__["GoTopButtonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__["BrowserAnimationsModule"], ng_image_slider__WEBPACK_IMPORTED_MODULE_26__["NgImageSliderModule"], ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_27__["NgxPageScrollCoreModule"], ngx_page_scroll__WEBPACK_IMPORTED_MODULE_28__["NgxPageScrollModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/art/art.component.css":
  /*!***************************************!*\
    !*** ./src/app/art/art.component.css ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppArtArtComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-container {\n  padding-top: 1em;\n  padding-bottom: 3em;\n  background-color: #ffffff;\n  border-left: 4px solid black;\n  border-right: 4px solid black;\n  z-index: 1;\n  position: relative;\n}\n\niframe {\n  padding: 2%;\n  margin: auto;\n}\n\n.title {\n  justify-self: center;\n}\n\n.titlehr {\n  border-top: 10px solid #333;\n  width: 95%;\n}\n\n.normalhr {\n  border-top: 10px solid #d6d6d6;\n  width: 95%;\n}\n\n.lesspadding {\n  border-top: 5px solid #d6d6d6;\n  width: 95%;\n  padding: 0%;\n}\n\nh1 {\n  text-decoration: underline;\n  padding-top: -2%;\n}\n\nh3 {\n  text-decoration: underline;\n}\n\nul.nav-pills {\n  right: 20px;\n  position: fixed;\n  color: black;\n}\n\n#button {\n  position: -webkit-sticky;\n  position: fixed;\n  z-index: 2;\n  top: 85%;\n  left: 93%;\n  color: #5d0c1d;\n  opacity: 0.5;\n  font-size: 40px;\n  cursor: pointer;\n}\n\nbutton {\n  background-color: #5d0c1d;\n}\n\nbutton.stick {\n  position: fixed;\n  top: 0;\n}\n\n.tableOfContentContainer {\n  position: -webkit-sticky; /* Safari */\n  position: sticky;\n  top: 10%;\n  height: 0;\n  padding-left: 91%;\n  /* display: none; */\n}\n\n.docs-toc-container {\n  border-left: 4px solid #5d0c1d;\n  font-weight: 700;\n}\n\na {\n  text-decoration: none;\n  color: #737373;\n  font-weight: 400 !important;\n}\n\na:hover {\n  color: #5d0c1d;\n}\n\n.tableOfContent {\n  position: static;\n  padding: 5px 0px 8px 10px;\n  font-size: 13px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0L2FydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLFVBQVU7RUFDVixRQUFRO0VBQ1IsU0FBUztFQUNULGNBQWM7RUFDZCxZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtBQUNSOztBQUVBO0VBQ0Usd0JBQXdCLEVBQUUsV0FBVztFQUNyQyxnQkFBZ0I7RUFDaEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FydC9hcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAxZW07XG4gIHBhZGRpbmctYm90dG9tOiAzZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIGJsYWNrO1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlmcmFtZSB7XG4gIHBhZGRpbmc6IDIlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi50aXRsZSB7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4udGl0bGVociB7XG4gIGJvcmRlci10b3A6IDEwcHggc29saWQgIzMzMztcbiAgd2lkdGg6IDk1JTtcbn1cblxuLm5vcm1hbGhyIHtcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjZDZkNmQ2O1xuICB3aWR0aDogOTUlO1xufVxuXG4ubGVzc3BhZGRpbmcge1xuICBib3JkZXItdG9wOiA1cHggc29saWQgI2Q2ZDZkNjtcbiAgd2lkdGg6IDk1JTtcbiAgcGFkZGluZzogMCU7XG59XG5cbmgxIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHBhZGRpbmctdG9wOiAtMiU7XG59XG5cbmgzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbnVsLm5hdi1waWxscyB7XG4gIHJpZ2h0OiAyMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuI2J1dHRvbiB7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IDg1JTtcbiAgbGVmdDogOTMlO1xuICBjb2xvcjogIzVkMGMxZDtcbiAgb3BhY2l0eTogMC41O1xuICBmb250LXNpemU6IDQwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVkMGMxZDtcbn1cblxuYnV0dG9uLnN0aWNrIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG59XG5cbi50YWJsZU9mQ29udGVudENvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTsgLyogU2FmYXJpICovXG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMTAlO1xuICBoZWlnaHQ6IDA7XG4gIHBhZGRpbmctbGVmdDogOTElO1xuICAvKiBkaXNwbGF5OiBub25lOyAqL1xufVxuXG4uZG9jcy10b2MtY29udGFpbmVyIHtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjNWQwYzFkO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzczNzM3MztcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6ICM1ZDBjMWQ7XG59XG5cbi50YWJsZU9mQ29udGVudCB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIHBhZGRpbmc6IDVweCAwcHggOHB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/art/art.component.ts":
  /*!**************************************!*\
    !*** ./src/app/art/art.component.ts ***!
    \**************************************/

  /*! exports provided: ArtComponent */

  /***/
  function srcAppArtArtComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArtComponent", function () {
      return ArtComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ArtComponent = /*#__PURE__*/function () {
      function ArtComponent() {
        _classCallCheck(this, ArtComponent);

        this.scrolled = 0;
      }

      _createClass(ArtComponent, [{
        key: "onScrollEvent",
        value: function onScrollEvent($event) {
          var number = window.pageYOffset;

          if (number >= 50) {
            this.scrolled = 1;
          } else {
            this.scrolled = 0;
          }
        }
      }, {
        key: "goToTop",
        value: function goToTop() {
          window.scrollTo(0, 0);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ArtComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:scroll", ["$event"])], ArtComponent.prototype, "onScrollEvent", null);
    ArtComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-art",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./art.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/art/art.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./art.component.css */
      "./src/app/art/art.component.css"))["default"]]
    })], ArtComponent);
    /***/
  },

  /***/
  "./src/app/contact/contact.component.css":
  /*!***********************************************!*\
    !*** ./src/app/contact/contact.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactContactComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-container {\n  padding-top: 1em;\n  padding-bottom: 3em;\n  width: 80%;\n  background-color: #ffffff;\n  border-left: 4px solid black;\n  border-right: 4px solid black;\n  z-index: 1;\n  position: relative;\n}\n\n.titlehr {\n  border-top: 10px solid #333;\n  width: 95%;\n}\n\n#firstp {\n  text-align: center;\n  padding-top: 2em;\n}\n\n#secondp {\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAxZW07XG4gIHBhZGRpbmctYm90dG9tOiAzZW07XG4gIHdpZHRoOiA4MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIGJsYWNrO1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50aXRsZWhyIHtcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjMzMzO1xuICB3aWR0aDogOTUlO1xufVxuXG4jZmlyc3RwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMmVtO1xufVxuXG4jc2Vjb25kcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.component.css */
      "./src/app/contact/contact.component.css"))["default"]]
    })], ContactComponent);
    /***/
  },

  /***/
  "./src/app/fifthgrade/fifthgrade.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/fifthgrade/fifthgrade.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFifthgradeFifthgradeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-container {\n  padding-top: 1em;\n  padding-bottom: 3em;\n  background-color: #ffffff;\n  border-left: 4px solid black;\n  border-right: 4px solid black;\n  z-index: 1;\n  position: relative;\n}\n\niframe {\n  padding: 2%;\n  margin: auto;\n}\n\n.title {\n  justify-self: center;\n}\n\n.titlehr {\n  border-top: 10px solid #333;\n  width: 95%;\n}\n\n.normalhr {\n  border-top: 10px solid #d6d6d6;\n  width: 95%;\n}\n\n.lesspadding {\n  border-top: 5px solid #d6d6d6;\n  width: 95%;\n  padding: 0%;\n}\n\nh1 {\n  text-decoration: underline;\n  padding-top: -2%;\n}\n\nh3 {\n  text-decoration: underline;\n}\n\nul.nav-pills {\n  right: 20px;\n  position: fixed;\n  color: black;\n}\n\n#button {\n  position: -webkit-sticky;\n  position: fixed;\n  z-index: 2;\n  top: 85%;\n  left: 93%;\n  color: #5d0c1d;\n  opacity: 0.5;\n  font-size: 40px;\n  cursor: pointer;\n}\n\nbutton {\n  background-color: #5d0c1d;\n}\n\n.tableOfContentContainer {\n  position: -webkit-sticky; /* Safari */\n  position: sticky;\n  top: 10%;\n  height: 0;\n  padding-left: 91%;\n  /* display: none; */\n}\n\n.docs-toc-container {\n  border-left: 4px solid #5d0c1d;\n  font-weight: 700;\n}\n\na {\n  text-decoration: none;\n  color: #737373;\n  font-weight: 400 !important;\n}\n\na:hover {\n  color: #5d0c1d;\n}\n\n.tableOfContent {\n  position: static;\n  padding: 5px 0px 8px 10px;\n  font-size: 13px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlmdGhncmFkZS9maWZ0aGdyYWRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsVUFBVTtFQUNWLFFBQVE7RUFDUixTQUFTO0VBQ1QsY0FBYztFQUNkLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHdCQUF3QixFQUFFLFdBQVc7RUFDckMsZ0JBQWdCO0VBQ2hCLFFBQVE7RUFDUixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9maWZ0aGdyYWRlL2ZpZnRoZ3JhZGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAxZW07XG4gIHBhZGRpbmctYm90dG9tOiAzZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIGJsYWNrO1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlmcmFtZSB7XG4gIHBhZGRpbmc6IDIlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi50aXRsZSB7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4udGl0bGVociB7XG4gIGJvcmRlci10b3A6IDEwcHggc29saWQgIzMzMztcbiAgd2lkdGg6IDk1JTtcbn1cblxuLm5vcm1hbGhyIHtcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjZDZkNmQ2O1xuICB3aWR0aDogOTUlO1xufVxuXG4ubGVzc3BhZGRpbmcge1xuICBib3JkZXItdG9wOiA1cHggc29saWQgI2Q2ZDZkNjtcbiAgd2lkdGg6IDk1JTtcbiAgcGFkZGluZzogMCU7XG59XG5cbmgxIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHBhZGRpbmctdG9wOiAtMiU7XG59XG5cbmgzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbnVsLm5hdi1waWxscyB7XG4gIHJpZ2h0OiAyMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuI2J1dHRvbiB7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IDg1JTtcbiAgbGVmdDogOTMlO1xuICBjb2xvcjogIzVkMGMxZDtcbiAgb3BhY2l0eTogMC41O1xuICBmb250LXNpemU6IDQwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVkMGMxZDtcbn1cblxuLnRhYmxlT2ZDb250ZW50Q29udGFpbmVyIHtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5OyAvKiBTYWZhcmkgKi9cbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAxMCU7XG4gIGhlaWdodDogMDtcbiAgcGFkZGluZy1sZWZ0OiA5MSU7XG4gIC8qIGRpc3BsYXk6IG5vbmU7ICovXG59XG5cbi5kb2NzLXRvYy1jb250YWluZXIge1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICM1ZDBjMWQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNzM3MzczO1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogIzVkMGMxZDtcbn1cblxuLnRhYmxlT2ZDb250ZW50IHtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgcGFkZGluZzogNXB4IDBweCA4cHggMTBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/fifthgrade/fifthgrade.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/fifthgrade/fifthgrade.component.ts ***!
    \****************************************************/

  /*! exports provided: FifthgradeComponent */

  /***/
  function srcAppFifthgradeFifthgradeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FifthgradeComponent", function () {
      return FifthgradeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FifthgradeComponent = /*#__PURE__*/function () {
      function FifthgradeComponent() {
        _classCallCheck(this, FifthgradeComponent);

        this.scrolled = 0;
      }

      _createClass(FifthgradeComponent, [{
        key: "onScrollEvent",
        value: function onScrollEvent($event) {
          var number = window.pageYOffset;

          if (number >= 50) {
            this.scrolled = 1;
          } else {
            this.scrolled = 0;
          }
        }
      }, {
        key: "goToTop",
        value: function goToTop() {
          window.scrollTo(0, 0);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FifthgradeComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:scroll", ["$event"])], FifthgradeComponent.prototype, "onScrollEvent", null);
    FifthgradeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-fifthgrade",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fifthgrade.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/fifthgrade/fifthgrade.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fifthgrade.component.css */
      "./src/app/fifthgrade/fifthgrade.component.css"))["default"]]
    })], FifthgradeComponent);
    /***/
  },

  /***/
  "./src/app/firstgrade/firstgrade.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/firstgrade/firstgrade.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFirstgradeFirstgradeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-container {\n  padding-top: 1em;\n  padding-bottom: 3em;\n  background-color: #ffffff;\n  border-left: 4px solid black;\n  border-right: 4px solid black;\n  z-index: 1;\n  position: relative;\n}\n\niframe {\n  padding: 2%;\n  margin: auto;\n}\n\n.title {\n  justify-self: center;\n}\n\n.titlehr {\n  border-top: 10px solid #333;\n  width: 95%;\n}\n\n.normalhr {\n  border-top: 10px solid #d6d6d6;\n  width: 95%;\n}\n\n.lesspadding {\n  border-top: 5px solid #d6d6d6;\n  width: 95%;\n  padding: 0%;\n}\n\nh1 {\n  text-decoration: underline;\n  padding-top: -2%;\n}\n\nh3 {\n  text-decoration: underline;\n}\n\nul.nav-pills {\n  right: 20px;\n  position: fixed;\n  color: black;\n}\n\n#button {\n  position: -webkit-sticky;\n  position: fixed;\n  z-index: 2;\n  top: 85%;\n  left: 93%;\n  color: #5d0c1d;\n  opacity: 0.5;\n  font-size: 40px;\n  cursor: pointer;\n}\n\nbutton {\n  background-color: #5d0c1d;\n}\n\n.tableOfContentContainer {\n  position: -webkit-sticky; /* Safari */\n  position: sticky;\n  top: 10%;\n  height: 0;\n  padding-left: 91%;\n  /* display: none; */\n}\n\n.docs-toc-container {\n  border-left: 4px solid #5d0c1d;\n  font-weight: 700;\n}\n\na {\n  text-decoration: none;\n  color: #737373;\n  font-weight: 400 !important;\n}\n\na:hover {\n  color: #5d0c1d;\n}\n\n.tableOfContent {\n  position: static;\n  padding: 5px 0px 8px 10px;\n  font-size: 13px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlyc3RncmFkZS9maXJzdGdyYWRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsVUFBVTtFQUNWLFFBQVE7RUFDUixTQUFTO0VBQ1QsY0FBYztFQUNkLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHdCQUF3QixFQUFFLFdBQVc7RUFDckMsZ0JBQWdCO0VBQ2hCLFFBQVE7RUFDUixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9maXJzdGdyYWRlL2ZpcnN0Z3JhZGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAxZW07XG4gIHBhZGRpbmctYm90dG9tOiAzZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIGJsYWNrO1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlmcmFtZSB7XG4gIHBhZGRpbmc6IDIlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi50aXRsZSB7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4udGl0bGVociB7XG4gIGJvcmRlci10b3A6IDEwcHggc29saWQgIzMzMztcbiAgd2lkdGg6IDk1JTtcbn1cblxuLm5vcm1hbGhyIHtcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjZDZkNmQ2O1xuICB3aWR0aDogOTUlO1xufVxuXG4ubGVzc3BhZGRpbmcge1xuICBib3JkZXItdG9wOiA1cHggc29saWQgI2Q2ZDZkNjtcbiAgd2lkdGg6IDk1JTtcbiAgcGFkZGluZzogMCU7XG59XG5cbmgxIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHBhZGRpbmctdG9wOiAtMiU7XG59XG5cbmgzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbnVsLm5hdi1waWxscyB7XG4gIHJpZ2h0OiAyMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuI2J1dHRvbiB7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IDg1JTtcbiAgbGVmdDogOTMlO1xuICBjb2xvcjogIzVkMGMxZDtcbiAgb3BhY2l0eTogMC41O1xuICBmb250LXNpemU6IDQwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVkMGMxZDtcbn1cblxuLnRhYmxlT2ZDb250ZW50Q29udGFpbmVyIHtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5OyAvKiBTYWZhcmkgKi9cbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAxMCU7XG4gIGhlaWdodDogMDtcbiAgcGFkZGluZy1sZWZ0OiA5MSU7XG4gIC8qIGRpc3BsYXk6IG5vbmU7ICovXG59XG5cbi5kb2NzLXRvYy1jb250YWluZXIge1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICM1ZDBjMWQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNzM3MzczO1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogIzVkMGMxZDtcbn1cblxuLnRhYmxlT2ZDb250ZW50IHtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgcGFkZGluZzogNXB4IDBweCA4cHggMTBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/firstgrade/firstgrade.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/firstgrade/firstgrade.component.ts ***!
    \****************************************************/

  /*! exports provided: FirstgradeComponent */

  /***/
  function srcAppFirstgradeFirstgradeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirstgradeComponent", function () {
      return FirstgradeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FirstgradeComponent = /*#__PURE__*/function () {
      function FirstgradeComponent() {
        _classCallCheck(this, FirstgradeComponent);

        this.scrolled = 0;
      }

      _createClass(FirstgradeComponent, [{
        key: "onScrollEvent",
        value: function onScrollEvent($event) {
          var number = window.pageYOffset;

          if (number >= 50) {
            this.scrolled = 1;
          } else {
            this.scrolled = 0;
          }
        }
      }, {
        key: "goToTop",
        value: function goToTop() {
          window.scrollTo(0, 0);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FirstgradeComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:scroll", ["$event"])], FirstgradeComponent.prototype, "onScrollEvent", null);
    FirstgradeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-firstgrade",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./firstgrade.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/firstgrade/firstgrade.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./firstgrade.component.css */
      "./src/app/firstgrade/firstgrade.component.css"))["default"]]
    })], FirstgradeComponent);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.css":
  /*!*********************************************!*\
    !*** ./src/app/footer/footer.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#links {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /* max-width: 100%; */\n  margin-bottom: auto;\n  height: 10%;\n  background-color: #d6d6d6;\n  border: 4px solid black;\n  overflow: hidden;\n}\n\na {\n  font-size: 16px;\n  color: black;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  position: relative;\n  display: inline-block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbGlua3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLyogbWF4LXdpZHRoOiAxMDAlOyAqL1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICBoZWlnaHQ6IDEwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDZkNjtcbiAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmEge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/footer/footer.component.css"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/fourthgrade/fourthgrade.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/fourthgrade/fourthgrade.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFourthgradeFourthgradeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-container {\n  padding-top: 1em;\n  padding-bottom: 3em;\n  background-color: #ffffff;\n  border-left: 4px solid black;\n  border-right: 4px solid black;\n  z-index: 1;\n  position: relative;\n}\n\niframe {\n  padding: 2%;\n  margin: auto;\n}\n\n.title {\n  justify-self: center;\n}\n\n.titlehr {\n  border-top: 10px solid #333;\n  width: 95%;\n}\n\n.normalhr {\n  border-top: 10px solid #d6d6d6;\n  width: 95%;\n}\n\n.lesspadding {\n  border-top: 5px solid #d6d6d6;\n  width: 95%;\n  padding: 0%;\n}\n\nh1 {\n  text-decoration: underline;\n  padding-top: -2%;\n}\n\nh3 {\n  text-decoration: underline;\n}\n\nul.nav-pills {\n  right: 20px;\n  position: fixed;\n  color: black;\n}\n\n#button {\n  position: -webkit-sticky;\n  position: fixed;\n  z-index: 2;\n  top: 85%;\n  left: 93%;\n  color: #5d0c1d;\n  opacity: 0.5;\n  font-size: 40px;\n  cursor: pointer;\n}\n\nbutton {\n  background-color: #5d0c1d;\n}\n\n.tableOfContentContainer {\n  position: -webkit-sticky; /* Safari */\n  position: sticky;\n  top: 10%;\n  height: 0;\n  padding-left: 91%;\n  /* display: none; */\n}\n\n.docs-toc-container {\n  border-left: 4px solid #5d0c1d;\n  font-weight: 700;\n}\n\na {\n  text-decoration: none;\n  color: #737373;\n  font-weight: 400 !important;\n}\n\na:hover {\n  color: #5d0c1d;\n}\n\n.tableOfContent {\n  position: static;\n  padding: 5px 0px 8px 10px;\n  font-size: 13px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91cnRoZ3JhZGUvZm91cnRoZ3JhZGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsVUFBVTtBQUNaOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixVQUFVO0VBQ1YsUUFBUTtFQUNSLFNBQVM7RUFDVCxjQUFjO0VBQ2QsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usd0JBQXdCLEVBQUUsV0FBVztFQUNyQyxnQkFBZ0I7RUFDaEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2ZvdXJ0aGdyYWRlL2ZvdXJ0aGdyYWRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMWVtO1xuICBwYWRkaW5nLWJvdHRvbTogM2VtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCBibGFjaztcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5pZnJhbWUge1xuICBwYWRkaW5nOiAyJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4udGl0bGUge1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuLnRpdGxlaHIge1xuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICMzMzM7XG4gIHdpZHRoOiA5NSU7XG59XG5cbi5ub3JtYWxociB7XG4gIGJvcmRlci10b3A6IDEwcHggc29saWQgI2Q2ZDZkNjtcbiAgd2lkdGg6IDk1JTtcbn1cblxuLmxlc3NwYWRkaW5nIHtcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICNkNmQ2ZDY7XG4gIHdpZHRoOiA5NSU7XG4gIHBhZGRpbmc6IDAlO1xufVxuXG5oMSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBwYWRkaW5nLXRvcDogLTIlO1xufVxuXG5oMyB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG51bC5uYXYtcGlsbHMge1xuICByaWdodDogMjBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbiNidXR0b24ge1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjtcbiAgdG9wOiA4NSU7XG4gIGxlZnQ6IDkzJTtcbiAgY29sb3I6ICM1ZDBjMWQ7XG4gIG9wYWNpdHk6IDAuNTtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZDBjMWQ7XG59XG5cbi50YWJsZU9mQ29udGVudENvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTsgLyogU2FmYXJpICovXG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMTAlO1xuICBoZWlnaHQ6IDA7XG4gIHBhZGRpbmctbGVmdDogOTElO1xuICAvKiBkaXNwbGF5OiBub25lOyAqL1xufVxuXG4uZG9jcy10b2MtY29udGFpbmVyIHtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjNWQwYzFkO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzczNzM3MztcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6ICM1ZDBjMWQ7XG59XG5cbi50YWJsZU9mQ29udGVudCB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIHBhZGRpbmc6IDVweCAwcHggOHB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/fourthgrade/fourthgrade.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/fourthgrade/fourthgrade.component.ts ***!
    \******************************************************/

  /*! exports provided: FourthgradeComponent */

  /***/
  function srcAppFourthgradeFourthgradeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FourthgradeComponent", function () {
      return FourthgradeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FourthgradeComponent = /*#__PURE__*/function () {
      function FourthgradeComponent() {
        _classCallCheck(this, FourthgradeComponent);

        this.scrolled = 0;
      }

      _createClass(FourthgradeComponent, [{
        key: "onScrollEvent",
        value: function onScrollEvent($event) {
          var number = window.pageYOffset;

          if (number >= 50) {
            this.scrolled = 1;
          } else {
            this.scrolled = 0;
          }
        }
      }, {
        key: "goToTop",
        value: function goToTop() {
          window.scrollTo(0, 0);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FourthgradeComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:scroll", ["$event"])], FourthgradeComponent.prototype, "onScrollEvent", null);
    FourthgradeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-fourthgrade",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fourthgrade.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/fourthgrade/fourthgrade.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fourthgrade.component.css */
      "./src/app/fourthgrade/fourthgrade.component.css"))["default"]]
    })], FourthgradeComponent);
    /***/
  },

  /***/
  "./src/app/history/history.component.css":
  /*!***********************************************!*\
    !*** ./src/app/history/history.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHistoryHistoryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-container {\n  padding-top: 1em;\n  padding-bottom: 1em;\n  background-color: #ffffff;\n  border-left: 4px solid black;\n  border-right: 4px solid black;\n  z-index: 1;\n  position: relative;\n  width: 80%;\n  margin: auto;\n}\n\niframe {\n  padding: 2%;\n  margin: auto;\n}\n\n.title {\n  justify-self: center;\n}\n\n.titlehr {\n  border-top: 10px solid #333;\n  width: 95%;\n}\n\n.normalhr {\n  border-top: 10px solid #d6d6d6;\n  width: 95%;\n}\n\n.lesspadding {\n  border-top: 5px solid #d6d6d6;\n  width: 95%;\n  padding: 0%;\n}\n\nh1 {\n  text-decoration: underline;\n  padding-top: -2%;\n}\n\nh3 {\n  text-decoration: underline;\n}\n\nul.nav-pills {\n  right: 20px;\n  position: fixed;\n  color: black;\n}\n\n#button {\n  position: -webkit-sticky;\n  position: fixed;\n  z-index: 2;\n  top: 85%;\n  left: 93%;\n  color: #5d0c1d;\n  opacity: 0.5;\n  font-size: 40px;\n  cursor: pointer;\n}\n\n.tableOfContentContainer {\n  position: -webkit-sticky; /* Safari */\n  position: sticky;\n  top: 10%;\n  height: 0;\n  padding-left: 91%;\n  /* display: none; */\n}\n\n.docs-toc-container {\n  border-left: 4px solid #5d0c1d;\n  font-weight: 700;\n}\n\na {\n  text-decoration: none;\n  color: #737373;\n  font-weight: 400 !important;\n}\n\na:hover {\n  color: #5d0c1d;\n}\n\n.tableOfContent {\n  position: static;\n  padding: 5px 0px 8px 10px;\n  font-size: 13px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsVUFBVTtBQUNaOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixVQUFVO0VBQ1YsUUFBUTtFQUNSLFNBQVM7RUFDVCxjQUFjO0VBQ2QsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usd0JBQXdCLEVBQUUsV0FBVztFQUNyQyxnQkFBZ0I7RUFDaEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDFlbTtcbiAgcGFkZGluZy1ib3R0b206IDFlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgYmxhY2s7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5pZnJhbWUge1xuICBwYWRkaW5nOiAyJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4udGl0bGUge1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuLnRpdGxlaHIge1xuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICMzMzM7XG4gIHdpZHRoOiA5NSU7XG59XG5cbi5ub3JtYWxociB7XG4gIGJvcmRlci10b3A6IDEwcHggc29saWQgI2Q2ZDZkNjtcbiAgd2lkdGg6IDk1JTtcbn1cblxuLmxlc3NwYWRkaW5nIHtcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICNkNmQ2ZDY7XG4gIHdpZHRoOiA5NSU7XG4gIHBhZGRpbmc6IDAlO1xufVxuXG5oMSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBwYWRkaW5nLXRvcDogLTIlO1xufVxuXG5oMyB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG51bC5uYXYtcGlsbHMge1xuICByaWdodDogMjBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbiNidXR0b24ge1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjtcbiAgdG9wOiA4NSU7XG4gIGxlZnQ6IDkzJTtcbiAgY29sb3I6ICM1ZDBjMWQ7XG4gIG9wYWNpdHk6IDAuNTtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YWJsZU9mQ29udGVudENvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTsgLyogU2FmYXJpICovXG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMTAlO1xuICBoZWlnaHQ6IDA7XG4gIHBhZGRpbmctbGVmdDogOTElO1xuICAvKiBkaXNwbGF5OiBub25lOyAqL1xufVxuXG4uZG9jcy10b2MtY29udGFpbmVyIHtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjNWQwYzFkO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzczNzM3MztcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6ICM1ZDBjMWQ7XG59XG5cbi50YWJsZU9mQ29udGVudCB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIHBhZGRpbmc6IDVweCAwcHggOHB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/history/history.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/history/history.component.ts ***!
    \**********************************************/

  /*! exports provided: HistoryComponent */

  /***/
  function srcAppHistoryHistoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoryComponent", function () {
      return HistoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HistoryComponent = /*#__PURE__*/function () {
      function HistoryComponent() {
        _classCallCheck(this, HistoryComponent);

        this.scrolled = 0;
      }

      _createClass(HistoryComponent, [{
        key: "onScrollEvent",
        value: function onScrollEvent($event) {
          var number = window.pageYOffset;

          if (number >= 50) {
            this.scrolled = 1;
          } else {
            this.scrolled = 0;
          }
        }
      }, {
        key: "goToTop",
        value: function goToTop() {
          window.scrollTo(0, 0);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HistoryComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:scroll", ["$event"])], HistoryComponent.prototype, "onScrollEvent", null);
    HistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-history",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./history.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./history.component.css */
      "./src/app/history/history.component.css"))["default"]]
    })], HistoryComponent);
    /***/
  },

  /***/
  "./src/app/homepage/homepage.component.css":
  /*!*************************************************!*\
    !*** ./src/app/homepage/homepage.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomepageHomepageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main {\n  margin: auto;\n  padding-top: 5em;\n  padding-bottom: 5em;\n  padding-left: 8%;\n  padding-right: 8%;\n  text-align: center;\n  /* width: 80%; */\n  background-color: #ffffff;\n  border-left: 4px solid black;\n  border-right: 4px solid black;\n  z-index: 1;\n}\n\n.float-container {\n  border: 3px solid #fff;\n}\n\n.float-child {\n  width: 50%;\n  float: left;\n  padding: 5%;\n}\n\nng-image-slider {\n  padding-top: 2%;\n  padding-bottom: 4%;\n}\n\n.teacherFavorites {\n  padding-bottom: 2.5%;\n}\n\n.mainhr {\n  border-top: 10px solid #d6d6d6;\n  width: 90%;\n  padding-top: 2%;\n  padding-bottom: 0%;\n}\n\n.sliderhr {\n  border-top: 10px solid #d6d6d6;\n  width: 90%;\n  padding-top: 2%;\n  padding-bottom: 2%;\n  margin-top: 7%;\n}\n\n.response {\n  padding-top: 2.5%;\n  padding-bottom: 2.5%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsVUFBVTtFQUNWLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsVUFBVTtFQUNWLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmctdG9wOiA1ZW07XG4gIHBhZGRpbmctYm90dG9tOiA1ZW07XG4gIHBhZGRpbmctbGVmdDogOCU7XG4gIHBhZGRpbmctcmlnaHQ6IDglO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8qIHdpZHRoOiA4MCU7ICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIGJsYWNrO1xuICB6LWluZGV4OiAxO1xufVxuXG4uZmxvYXQtY29udGFpbmVyIHtcbiAgYm9yZGVyOiAzcHggc29saWQgI2ZmZjtcbn1cblxuLmZsb2F0LWNoaWxkIHtcbiAgd2lkdGg6IDUwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDUlO1xufVxuXG5uZy1pbWFnZS1zbGlkZXIge1xuICBwYWRkaW5nLXRvcDogMiU7XG4gIHBhZGRpbmctYm90dG9tOiA0JTtcbn1cblxuLnRlYWNoZXJGYXZvcml0ZXMge1xuICBwYWRkaW5nLWJvdHRvbTogMi41JTtcbn1cblxuLm1haW5ociB7XG4gIGJvcmRlci10b3A6IDEwcHggc29saWQgI2Q2ZDZkNjtcbiAgd2lkdGg6IDkwJTtcbiAgcGFkZGluZy10b3A6IDIlO1xuICBwYWRkaW5nLWJvdHRvbTogMCU7XG59XG5cbi5zbGlkZXJociB7XG4gIGJvcmRlci10b3A6IDEwcHggc29saWQgI2Q2ZDZkNjtcbiAgd2lkdGg6IDkwJTtcbiAgcGFkZGluZy10b3A6IDIlO1xuICBwYWRkaW5nLWJvdHRvbTogMiU7XG4gIG1hcmdpbi10b3A6IDclO1xufVxuXG4ucmVzcG9uc2Uge1xuICBwYWRkaW5nLXRvcDogMi41JTtcbiAgcGFkZGluZy1ib3R0b206IDIuNSU7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/homepage/homepage.component.ts":
  /*!************************************************!*\
    !*** ./src/app/homepage/homepage.component.ts ***!
    \************************************************/

  /*! exports provided: HomepageComponent */

  /***/
  function srcAppHomepageHomepageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomepageComponent", function () {
      return HomepageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomepageComponent = /*#__PURE__*/function () {
      function HomepageComponent() {
        _classCallCheck(this, HomepageComponent);

        this.imageObject = [{
          video: "https://youtu.be/NpWHZJZQDSE",
          title: "Plot Structure"
        }, {
          video: "https://www.youtube.com/embed/xyMrLQ4ZI-4",
          title: "Prepositions"
        }, {
          video: "https://www.youtube.com/embed/EzzQ8x-9HTo",
          title: "Count to 120"
        }, {
          video: "https://www.youtube.com/embed/xUCYFof8QyA",
          title: "Force and Motion"
        }, {
          video: "https://www.youtube.com/embed/UgfSwlqi4Qg",
          title: "Types of Angles"
        }, {
          video: "https://www.youtube.com/embed/DR9w4koW2EA",
          title: "Magnetism"
        }];
      }

      _createClass(HomepageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomepageComponent;
    }();

    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-homepage",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./homepage.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./homepage.component.css */
      "./src/app/homepage/homepage.component.css"))["default"]]
    })], HomepageComponent);
    /***/
  },

  /***/
  "./src/app/kindergarten/kindergarten.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/kindergarten/kindergarten.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppKindergartenKindergartenComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-container {\n  padding-top: 1em;\n  padding-bottom: 3em;\n  background-color: #ffffff;\n  border-left: 4px solid black;\n  border-right: 4px solid black;\n  z-index: 1;\n  position: relative;\n}\n\niframe {\n  padding: 2%;\n  margin: auto;\n}\n\n.title {\n  justify-self: center;\n}\n\n.titlehr {\n  border-top: 10px solid #333;\n  width: 95%;\n}\n\n.normalhr {\n  border-top: 10px solid #d6d6d6;\n  width: 95%;\n}\n\n.lesspadding {\n  border-top: 5px solid #d6d6d6;\n  width: 95%;\n  padding: 0%;\n}\n\nh1 {\n  text-decoration: underline;\n  padding-top: -2%;\n}\n\nh3 {\n  text-decoration: underline;\n}\n\nul.nav-pills {\n  right: 20px;\n  position: fixed;\n  color: black;\n}\n\n#button {\n  position: -webkit-sticky;\n  position: fixed;\n  z-index: 2;\n  top: 85%;\n  left: 93%;\n  color: #5d0c1d;\n  opacity: 0.5;\n  font-size: 40px;\n  cursor: pointer;\n}\n\nbutton {\n  background-color: #5d0c1d;\n}\n\n.tableOfContentContainer {\n  position: -webkit-sticky; /* Safari */\n  position: sticky;\n  top: 10%;\n  height: 0;\n  padding-left: 91%;\n  /* display: none; */\n}\n\n.docs-toc-container {\n  border-left: 4px solid #5d0c1d;\n  font-weight: 700;\n}\n\na {\n  text-decoration: none;\n  color: #737373;\n  font-weight: 400 !important;\n}\n\na:hover {\n  color: #5d0c1d;\n}\n\n.tableOfContent {\n  position: static;\n  padding: 5px 0px 8px 10px;\n  font-size: 13px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2luZGVyZ2FydGVuL2tpbmRlcmdhcnRlbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLFVBQVU7RUFDVixRQUFRO0VBQ1IsU0FBUztFQUNULGNBQWM7RUFDZCxZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx3QkFBd0IsRUFBRSxXQUFXO0VBQ3JDLGdCQUFnQjtFQUNoQixRQUFRO0VBQ1IsU0FBUztFQUNULGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAva2luZGVyZ2FydGVuL2tpbmRlcmdhcnRlbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDFlbTtcbiAgcGFkZGluZy1ib3R0b206IDNlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgYmxhY2s7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaWZyYW1lIHtcbiAgcGFkZGluZzogMiU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnRpdGxlIHtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbi50aXRsZWhyIHtcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjMzMzO1xuICB3aWR0aDogOTUlO1xufVxuXG4ubm9ybWFsaHIge1xuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICNkNmQ2ZDY7XG4gIHdpZHRoOiA5NSU7XG59XG5cbi5sZXNzcGFkZGluZyB7XG4gIGJvcmRlci10b3A6IDVweCBzb2xpZCAjZDZkNmQ2O1xuICB3aWR0aDogOTUlO1xuICBwYWRkaW5nOiAwJTtcbn1cblxuaDEge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgcGFkZGluZy10b3A6IC0yJTtcbn1cblxuaDMge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxudWwubmF2LXBpbGxzIHtcbiAgcmlnaHQ6IDIwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4jYnV0dG9uIHtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogODUlO1xuICBsZWZ0OiA5MyU7XG4gIGNvbG9yOiAjNWQwYzFkO1xuICBvcGFjaXR5OiAwLjU7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWQwYzFkO1xufVxuXG4udGFibGVPZkNvbnRlbnRDb250YWluZXIge1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7IC8qIFNhZmFyaSAqL1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDEwJTtcbiAgaGVpZ2h0OiAwO1xuICBwYWRkaW5nLWxlZnQ6IDkxJTtcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cbn1cblxuLmRvY3MtdG9jLWNvbnRhaW5lciB7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzVkMGMxZDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM3MzczNzM7XG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbn1cblxuYTpob3ZlciB7XG4gIGNvbG9yOiAjNWQwYzFkO1xufVxuXG4udGFibGVPZkNvbnRlbnQge1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBwYWRkaW5nOiA1cHggMHB4IDhweCAxMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/kindergarten/kindergarten.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/kindergarten/kindergarten.component.ts ***!
    \********************************************************/

  /*! exports provided: KindergartenComponent */

  /***/
  function srcAppKindergartenKindergartenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KindergartenComponent", function () {
      return KindergartenComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var KindergartenComponent = /*#__PURE__*/function () {
      function KindergartenComponent() {
        _classCallCheck(this, KindergartenComponent);

        this.scrolled = 0;
      }

      _createClass(KindergartenComponent, [{
        key: "onScrollEvent",
        value: function onScrollEvent($event) {
          var number = window.pageYOffset;

          if (number >= 50) {
            this.scrolled = 1;
          } else {
            this.scrolled = 0;
          }
        }
      }, {
        key: "goToTop",
        value: function goToTop() {
          window.scrollTo(0, 0);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return KindergartenComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:scroll", ["$event"])], KindergartenComponent.prototype, "onScrollEvent", null);
    KindergartenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-kindergarten",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./kindergarten.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/kindergarten/kindergarten.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./kindergarten.component.css */
      "./src/app/kindergarten/kindergarten.component.css"))["default"]]
    })], KindergartenComponent);
    /***/
  },

  /***/
  "./src/app/math/math.component.css":
  /*!*****************************************!*\
    !*** ./src/app/math/math.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppMathMathComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-container {\n  padding-top: 1em;\n  padding-bottom: 3em;\n  background-color: #ffffff;\n  border-left: 4px solid black;\n  border-right: 4px solid black;\n  z-index: 1;\n  position: relative;\n}\n\niframe {\n  padding: 2%;\n  margin: auto;\n}\n\n.title {\n  justify-self: center;\n}\n\n.titlehr {\n  border-top: 10px solid #333;\n  width: 95%;\n}\n\n.normalhr {\n  border-top: 10px solid #d6d6d6;\n  width: 95%;\n}\n\n.lesspadding {\n  border-top: 5px solid #d6d6d6;\n  width: 95%;\n  padding: 0%;\n}\n\nh1 {\n  text-decoration: underline;\n  padding-top: -2%;\n}\n\nh3 {\n  text-decoration: underline;\n}\n\nul.nav-pills {\n  right: 20px;\n  position: fixed;\n  color: black;\n}\n\n#button {\n  position: -webkit-sticky;\n  position: fixed;\n  z-index: 2;\n  top: 85%;\n  left: 93%;\n  color: #5d0c1d;\n  opacity: 0.5;\n  font-size: 40px;\n  cursor: pointer;\n}\n\nbutton {\n  background-color: #5d0c1d;\n}\n\n.tableOfContentContainer {\n  position: -webkit-sticky; /* Safari */\n  position: sticky;\n  top: 10%;\n  height: 0;\n  padding-left: 91%;\n  /* display: none; */\n}\n\n.docs-toc-container {\n  border-left: 4px solid #5d0c1d;\n  font-weight: 700;\n}\n\na {\n  text-decoration: none;\n  color: #737373;\n  font-weight: 400 !important;\n}\n\na:hover {\n  color: #5d0c1d;\n}\n\n.tableOfContent {\n  position: static;\n  padding: 5px 0px 8px 10px;\n  font-size: 13px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0aC9tYXRoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsVUFBVTtFQUNWLFFBQVE7RUFDUixTQUFTO0VBQ1QsY0FBYztFQUNkLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHdCQUF3QixFQUFFLFdBQVc7RUFDckMsZ0JBQWdCO0VBQ2hCLFFBQVE7RUFDUixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9tYXRoL21hdGguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAxZW07XG4gIHBhZGRpbmctYm90dG9tOiAzZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIGJsYWNrO1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlmcmFtZSB7XG4gIHBhZGRpbmc6IDIlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi50aXRsZSB7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4udGl0bGVociB7XG4gIGJvcmRlci10b3A6IDEwcHggc29saWQgIzMzMztcbiAgd2lkdGg6IDk1JTtcbn1cblxuLm5vcm1hbGhyIHtcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjZDZkNmQ2O1xuICB3aWR0aDogOTUlO1xufVxuXG4ubGVzc3BhZGRpbmcge1xuICBib3JkZXItdG9wOiA1cHggc29saWQgI2Q2ZDZkNjtcbiAgd2lkdGg6IDk1JTtcbiAgcGFkZGluZzogMCU7XG59XG5cbmgxIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHBhZGRpbmctdG9wOiAtMiU7XG59XG5cbmgzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbnVsLm5hdi1waWxscyB7XG4gIHJpZ2h0OiAyMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuI2J1dHRvbiB7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IDg1JTtcbiAgbGVmdDogOTMlO1xuICBjb2xvcjogIzVkMGMxZDtcbiAgb3BhY2l0eTogMC41O1xuICBmb250LXNpemU6IDQwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVkMGMxZDtcbn1cblxuLnRhYmxlT2ZDb250ZW50Q29udGFpbmVyIHtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5OyAvKiBTYWZhcmkgKi9cbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAxMCU7XG4gIGhlaWdodDogMDtcbiAgcGFkZGluZy1sZWZ0OiA5MSU7XG4gIC8qIGRpc3BsYXk6IG5vbmU7ICovXG59XG5cbi5kb2NzLXRvYy1jb250YWluZXIge1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICM1ZDBjMWQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNzM3MzczO1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogIzVkMGMxZDtcbn1cblxuLnRhYmxlT2ZDb250ZW50IHtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgcGFkZGluZzogNXB4IDBweCA4cHggMTBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/math/math.component.ts":
  /*!****************************************!*\
    !*** ./src/app/math/math.component.ts ***!
    \****************************************/

  /*! exports provided: MathComponent */

  /***/
  function srcAppMathMathComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MathComponent", function () {
      return MathComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MathComponent = /*#__PURE__*/function () {
      function MathComponent() {
        _classCallCheck(this, MathComponent);

        this.scrolled = 0;
      }

      _createClass(MathComponent, [{
        key: "onScrollEvent",
        value: function onScrollEvent($event) {
          var number = window.pageYOffset;

          if (number >= 50) {
            this.scrolled = 1;
          } else {
            this.scrolled = 0;
          }
        }
      }, {
        key: "goToTop",
        value: function goToTop() {
          window.scrollTo(0, 0);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MathComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:scroll", ["$event"])], MathComponent.prototype, "onScrollEvent", null);
    MathComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-math",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./math.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/math/math.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./math.component.css */
      "./src/app/math/math.component.css"))["default"]]
    })], MathComponent);
    /***/
  },

  /***/
  "./src/app/mission/mission.component.css":
  /*!***********************************************!*\
    !*** ./src/app/mission/mission.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppMissionMissionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-container {\n  padding-top: 1em;\n  padding-bottom: 3em;\n  background-color: #ffffff;\n  border-left: 4px solid black;\n  border-right: 4px solid black;\n  z-index: 1;\n}\n\n.titlehr {\n  border-top: 10px solid #333;\n  width: 95%;\n}\n\n.lesspadding {\n  border-top: 5px solid #d6d6d6;\n  width: 95%;\n  padding: 0%;\n}\n\np {\n  margin: auto;\n  padding-top: 4em;\n  padding-bottom: 4em;\n  text-align: center;\n  padding-left: 8%;\n  padding-right: 8%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWlzc2lvbi9taXNzaW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbWlzc2lvbi9taXNzaW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMWVtO1xuICBwYWRkaW5nLWJvdHRvbTogM2VtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCBibGFjaztcbiAgei1pbmRleDogMTtcbn1cblxuLnRpdGxlaHIge1xuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICMzMzM7XG4gIHdpZHRoOiA5NSU7XG59XG5cbi5sZXNzcGFkZGluZyB7XG4gIGJvcmRlci10b3A6IDVweCBzb2xpZCAjZDZkNmQ2O1xuICB3aWR0aDogOTUlO1xuICBwYWRkaW5nOiAwJTtcbn1cblxucCB7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZy10b3A6IDRlbTtcbiAgcGFkZGluZy1ib3R0b206IDRlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDglO1xuICBwYWRkaW5nLXJpZ2h0OiA4JTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/mission/mission.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/mission/mission.component.ts ***!
    \**********************************************/

  /*! exports provided: MissionComponent */

  /***/
  function srcAppMissionMissionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MissionComponent", function () {
      return MissionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MissionComponent = /*#__PURE__*/function () {
      function MissionComponent() {
        _classCallCheck(this, MissionComponent);
      }

      _createClass(MissionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MissionComponent;
    }();

    MissionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mission',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mission.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/mission/mission.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mission.component.css */
      "./src/app/mission/mission.component.css"))["default"]]
    })], MissionComponent);
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.css":
  /*!*********************************************!*\
    !*** ./src/app/navbar/navbar.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavbarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "header {\n  width: 100%;\n  height: 7em;\n  padding-top: 0.3em;\n  border-top: 4px solid black;\n  background-color: #5d0c1d;\n}\n\n/* img {\n  width: 406px;\n  height: 104px;\n} */\n\n.flex-container {\n  display: flex;\n  justify-content: center;\n}\n\n/* The navigation menu */\n\n.navbar {\n  /* overflow: hidden; */\n  background-color: #333;\n  border-top: 4px solid black;\n  border-bottom: 4px solid black;\n  justify-content: space-evenly;\n  z-index: 999;\n}\n\n/* Navigation links */\n\n.navbar a {\n  float: left;\n  font-size: 16px;\n  color: #ffffff;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  z-index: 999;\n}\n\n/* a,\nbutton {\n  list-style-type: none;\n  display: none;\n} */\n\n/* The subnavigation menu */\n\n.subnav {\n  position: relative;\n  display: inline-block;\n}\n\n/* Subnav button */\n\n.subnav .subnavbtn {\n  font-size: 16px;\n  border: none;\n  outline: none;\n  color: #ffffff;\n  padding: 14px 16px;\n  background-color: inherit;\n  font-family: inherit;\n  margin: 0;\n}\n\n.navbar a:hover,\n.subnav:hover .subnavbtn {\n  background-color: #d6d6d6;\n  color: black;\n}\n\n/* Style the subnav content */\n\n.subnav-content {\n  display: none;\n  overflow: hidden;\n  margin-left: 0px;\n  background-color: #d6d6d6;\n  color: black;\n  position: absolute;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n}\n\n/* Style the subnav links */\n\n.subnav-content a {\n  float: left;\n  width: 100%;\n  background-color: #d6d6d6;\n  color: black;\n  text-align: left;\n  text-decoration: none;\n}\n\n/* Add a dark background color on hover */\n\n.subnav-content a:hover {\n  background-color: #333;\n  text-align: left;\n  width: 100%;\n  color: #ffffff;\n}\n\n.hover-state {\n  display: block;\n}\n\n/* .navbar-toggle {\n  position: absolute;\n  top: 10px;\n  left: 20px;\n  cursor: pointer;\n  font-size: 24px;\n}\n\n.active {\n  display: block;\n}\n\nfa-bars {\n  color: #d6d6d6;\n  justify-self: center;\n} */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLHlCQUF5QjtBQUMzQjs7QUFFQTs7O0dBR0c7O0FBRUg7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBLHdCQUF3Qjs7QUFDeEI7RUFDRSxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsNkJBQTZCO0VBQzdCLFlBQVk7QUFDZDs7QUFFQSxxQkFBcUI7O0FBQ3JCO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBOzs7O0dBSUc7O0FBRUgsMkJBQTJCOztBQUMzQjtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUEsa0JBQWtCOztBQUNsQjtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixTQUFTO0FBQ1g7O0FBRUE7O0VBRUUseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQSw2QkFBNkI7O0FBQzdCO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLCtDQUErQztBQUNqRDs7QUFFQSwyQkFBMkI7O0FBQzNCO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUEseUNBQXlDOztBQUN6QztFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRyIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDdlbTtcbiAgcGFkZGluZy10b3A6IDAuM2VtO1xuICBib3JkZXItdG9wOiA0cHggc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZDBjMWQ7XG59XG5cbi8qIGltZyB7XG4gIHdpZHRoOiA0MDZweDtcbiAgaGVpZ2h0OiAxMDRweDtcbn0gKi9cblxuLmZsZXgtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi8qIFRoZSBuYXZpZ2F0aW9uIG1lbnUgKi9cbi5uYXZiYXIge1xuICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBib3JkZXItdG9wOiA0cHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCBibGFjaztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuLyogTmF2aWdhdGlvbiBsaW5rcyAqL1xuLm5hdmJhciBhIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTRweCAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuLyogYSxcbmJ1dHRvbiB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZGlzcGxheTogbm9uZTtcbn0gKi9cblxuLyogVGhlIHN1Ym5hdmlnYXRpb24gbWVudSAqL1xuLnN1Ym5hdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4vKiBTdWJuYXYgYnV0dG9uICovXG4uc3VibmF2IC5zdWJuYXZidG4ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIG1hcmdpbjogMDtcbn1cblxuLm5hdmJhciBhOmhvdmVyLFxuLnN1Ym5hdjpob3ZlciAuc3VibmF2YnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDZkNjtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4vKiBTdHlsZSB0aGUgc3VibmF2IGNvbnRlbnQgKi9cbi5zdWJuYXYtY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNmQ2ZDY7XG4gIGNvbG9yOiBibGFjaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtaW4td2lkdGg6IDE2MHB4O1xuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLyogU3R5bGUgdGhlIHN1Ym5hdiBsaW5rcyAqL1xuLnN1Ym5hdi1jb250ZW50IGEge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkNmQ2ZDY7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKiBBZGQgYSBkYXJrIGJhY2tncm91bmQgY29sb3Igb24gaG92ZXIgKi9cbi5zdWJuYXYtY29udGVudCBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uaG92ZXItc3RhdGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogLm5hdmJhci10b2dnbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5hY3RpdmUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuZmEtYmFycyB7XG4gIGNvbG9yOiAjZDZkNmQ2O1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn0gKi9cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-navbar",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/navbar/navbar.component.css"))["default"]]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/reading/reading.component.css":
  /*!***********************************************!*\
    !*** ./src/app/reading/reading.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppReadingReadingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-container {\n  padding-top: 1em;\n  padding-bottom: 3em;\n  background-color: #ffffff;\n  border-left: 4px solid black;\n  border-right: 4px solid black;\n  z-index: 1;\n  position: relative;\n}\n\niframe {\n  padding: 2%;\n  margin: auto;\n}\n\n.container {\n  justify-self: center;\n}\n\n.title {\n  justify-self: center;\n}\n\n.titlehr {\n  border-top: 10px solid #333;\n  width: 95%;\n}\n\n.normalhr {\n  border-top: 10px solid #d6d6d6;\n  width: 95%;\n}\n\n.lesspadding {\n  border-top: 5px solid #d6d6d6;\n  width: 95%;\n  padding: 0%;\n}\n\nh1 {\n  text-decoration: underline;\n  padding-top: -2%;\n}\n\nh3 {\n  text-decoration: underline;\n}\n\nul.nav-pills {\n  right: 20px;\n  position: fixed;\n  color: black;\n}\n\n#button {\n  position: -webkit-sticky;\n  position: fixed;\n  z-index: 2;\n  top: 85%;\n  left: 93%;\n  color: #5d0c1d;\n  opacity: 0.5;\n  font-size: 40px;\n  cursor: pointer;\n}\n\n.tableOfContentContainer {\n  position: -webkit-sticky; /* Safari */\n  position: sticky;\n  top: 10%;\n  height: 0;\n  padding-left: 91%;\n  /* display: none; */\n}\n\n.docs-toc-container {\n  border-left: 4px solid #5d0c1d;\n  font-weight: 700;\n}\n\na {\n  text-decoration: none;\n  color: #737373;\n  font-weight: 400 !important;\n}\n\na:hover {\n  color: #5d0c1d;\n}\n\n.tableOfContent {\n  position: static;\n  padding: 5px 0px 8px 10px;\n  font-size: 13px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVhZGluZy9yZWFkaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsVUFBVTtFQUNWLFFBQVE7RUFDUixTQUFTO0VBQ1QsY0FBYztFQUNkLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHdCQUF3QixFQUFFLFdBQVc7RUFDckMsZ0JBQWdCO0VBQ2hCLFFBQVE7RUFDUixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9yZWFkaW5nL3JlYWRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAxZW07XG4gIHBhZGRpbmctYm90dG9tOiAzZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIGJsYWNrO1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlmcmFtZSB7XG4gIHBhZGRpbmc6IDIlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5jb250YWluZXIge1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuLnRpdGxlIHtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbi50aXRsZWhyIHtcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjMzMzO1xuICB3aWR0aDogOTUlO1xufVxuXG4ubm9ybWFsaHIge1xuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICNkNmQ2ZDY7XG4gIHdpZHRoOiA5NSU7XG59XG5cbi5sZXNzcGFkZGluZyB7XG4gIGJvcmRlci10b3A6IDVweCBzb2xpZCAjZDZkNmQ2O1xuICB3aWR0aDogOTUlO1xuICBwYWRkaW5nOiAwJTtcbn1cblxuaDEge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgcGFkZGluZy10b3A6IC0yJTtcbn1cblxuaDMge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxudWwubmF2LXBpbGxzIHtcbiAgcmlnaHQ6IDIwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4jYnV0dG9uIHtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogODUlO1xuICBsZWZ0OiA5MyU7XG4gIGNvbG9yOiAjNWQwYzFkO1xuICBvcGFjaXR5OiAwLjU7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFibGVPZkNvbnRlbnRDb250YWluZXIge1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7IC8qIFNhZmFyaSAqL1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDEwJTtcbiAgaGVpZ2h0OiAwO1xuICBwYWRkaW5nLWxlZnQ6IDkxJTtcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cbn1cblxuLmRvY3MtdG9jLWNvbnRhaW5lciB7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzVkMGMxZDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM3MzczNzM7XG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbn1cblxuYTpob3ZlciB7XG4gIGNvbG9yOiAjNWQwYzFkO1xufVxuXG4udGFibGVPZkNvbnRlbnQge1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBwYWRkaW5nOiA1cHggMHB4IDhweCAxMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/reading/reading.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/reading/reading.component.ts ***!
    \**********************************************/

  /*! exports provided: ReadingComponent */

  /***/
  function srcAppReadingReadingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReadingComponent", function () {
      return ReadingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ReadingComponent = /*#__PURE__*/function () {
      function ReadingComponent() {
        _classCallCheck(this, ReadingComponent);

        this.scrolled = 0;
      }

      _createClass(ReadingComponent, [{
        key: "onScrollEvent",
        value: function onScrollEvent($event) {
          var number = window.pageYOffset;

          if (number >= 50) {
            this.scrolled = 1;
          } else {
            this.scrolled = 0;
          }
        }
      }, {
        key: "goToTop",
        value: function goToTop() {
          window.scrollTo(0, 0);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ReadingComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:scroll", ["$event"])], ReadingComponent.prototype, "onScrollEvent", null);
    ReadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-reading",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./reading.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/reading/reading.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./reading.component.css */
      "./src/app/reading/reading.component.css"))["default"]]
    })], ReadingComponent);
    /***/
  },

  /***/
  "./src/app/science/science.component.css":
  /*!***********************************************!*\
    !*** ./src/app/science/science.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppScienceScienceComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-container {\n  padding-top: 1em;\n  padding-bottom: 3em;\n  background-color: #ffffff;\n  border-left: 4px solid black;\n  border-right: 4px solid black;\n  z-index: 1;\n  position: relative;\n}\n\niframe {\n  padding: 2%;\n  margin: auto;\n}\n\n.title {\n  justify-self: center;\n}\n\n.titlehr {\n  border-top: 10px solid #333;\n  width: 95%;\n}\n\n.normalhr {\n  border-top: 10px solid #d6d6d6;\n  width: 95%;\n}\n\n.lesspadding {\n  border-top: 5px solid #d6d6d6;\n  width: 95%;\n  padding: 0%;\n}\n\nh1 {\n  text-decoration: underline;\n  padding-top: -2%;\n}\n\nh3 {\n  text-decoration: underline;\n}\n\nul.nav-pills {\n  right: 20px;\n  position: fixed;\n  color: black;\n}\n\n#button {\n  position: -webkit-sticky;\n  position: fixed;\n  z-index: 2;\n  top: 85%;\n  left: 93%;\n  color: #5d0c1d;\n  opacity: 0.5;\n  font-size: 40px;\n  cursor: pointer;\n}\n\nbutton {\n  background-color: #5d0c1d;\n}\n\nbutton.stick {\n  position: fixed;\n  top: 0;\n}\n\n.tableOfContentContainer {\n  position: -webkit-sticky; /* Safari */\n  position: sticky;\n  top: 10%;\n  height: 0;\n  padding-left: 91%;\n  /* display: none; */\n}\n\n.docs-toc-container {\n  border-left: 4px solid #5d0c1d;\n  font-weight: 700;\n}\n\na {\n  text-decoration: none;\n  color: #737373;\n  font-weight: 400 !important;\n}\n\na:hover {\n  color: #5d0c1d;\n}\n\n.tableOfContent {\n  position: static;\n  padding: 5px 0px 8px 10px;\n  font-size: 13px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NpZW5jZS9zY2llbmNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsVUFBVTtFQUNWLFFBQVE7RUFDUixTQUFTO0VBQ1QsY0FBYztFQUNkLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0FBQ1I7O0FBRUE7RUFDRSx3QkFBd0IsRUFBRSxXQUFXO0VBQ3JDLGdCQUFnQjtFQUNoQixRQUFRO0VBQ1IsU0FBUztFQUNULGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvc2NpZW5jZS9zY2llbmNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMWVtO1xuICBwYWRkaW5nLWJvdHRvbTogM2VtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCBibGFjaztcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5pZnJhbWUge1xuICBwYWRkaW5nOiAyJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4udGl0bGUge1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuLnRpdGxlaHIge1xuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICMzMzM7XG4gIHdpZHRoOiA5NSU7XG59XG5cbi5ub3JtYWxociB7XG4gIGJvcmRlci10b3A6IDEwcHggc29saWQgI2Q2ZDZkNjtcbiAgd2lkdGg6IDk1JTtcbn1cblxuLmxlc3NwYWRkaW5nIHtcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICNkNmQ2ZDY7XG4gIHdpZHRoOiA5NSU7XG4gIHBhZGRpbmc6IDAlO1xufVxuXG5oMSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBwYWRkaW5nLXRvcDogLTIlO1xufVxuXG5oMyB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG51bC5uYXYtcGlsbHMge1xuICByaWdodDogMjBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbiNidXR0b24ge1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjtcbiAgdG9wOiA4NSU7XG4gIGxlZnQ6IDkzJTtcbiAgY29sb3I6ICM1ZDBjMWQ7XG4gIG9wYWNpdHk6IDAuNTtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZDBjMWQ7XG59XG5cbmJ1dHRvbi5zdGljayB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xufVxuXG4udGFibGVPZkNvbnRlbnRDb250YWluZXIge1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7IC8qIFNhZmFyaSAqL1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDEwJTtcbiAgaGVpZ2h0OiAwO1xuICBwYWRkaW5nLWxlZnQ6IDkxJTtcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cbn1cblxuLmRvY3MtdG9jLWNvbnRhaW5lciB7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzVkMGMxZDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM3MzczNzM7XG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbn1cblxuYTpob3ZlciB7XG4gIGNvbG9yOiAjNWQwYzFkO1xufVxuXG4udGFibGVPZkNvbnRlbnQge1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBwYWRkaW5nOiA1cHggMHB4IDhweCAxMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/science/science.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/science/science.component.ts ***!
    \**********************************************/

  /*! exports provided: ScienceComponent */

  /***/
  function srcAppScienceScienceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScienceComponent", function () {
      return ScienceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ScienceComponent = /*#__PURE__*/function () {
      function ScienceComponent() {
        _classCallCheck(this, ScienceComponent);

        this.scrolled = 0;
      }

      _createClass(ScienceComponent, [{
        key: "onScrollEvent",
        value: function onScrollEvent($event) {
          var number = window.pageYOffset;

          if (number >= 50) {
            this.scrolled = 1;
          } else {
            this.scrolled = 0;
          } // console.log($event, "Page Y-axis offset by:" + window.pageYOffset);

        }
      }, {
        key: "goToTop",
        value: function goToTop() {
          window.scrollTo(0, 0);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ScienceComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:scroll", ["$event"])], ScienceComponent.prototype, "onScrollEvent", null);
    ScienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-science",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./science.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/science/science.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./science.component.css */
      "./src/app/science/science.component.css"))["default"]]
    })], ScienceComponent);
    /***/
  },

  /***/
  "./src/app/secondgrade/secondgrade.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/secondgrade/secondgrade.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSecondgradeSecondgradeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-container {\n  padding-top: 1em;\n  padding-bottom: 3em;\n  background-color: #ffffff;\n  border-left: 4px solid black;\n  border-right: 4px solid black;\n  z-index: 1;\n  position: relative;\n}\n\niframe {\n  padding: 2%;\n  margin: auto;\n}\n\n.title {\n  justify-self: center;\n}\n\n.titlehr {\n  border-top: 10px solid #333;\n  width: 95%;\n}\n\n.normalhr {\n  border-top: 10px solid #d6d6d6;\n  width: 95%;\n}\n\n.lesspadding {\n  border-top: 5px solid #d6d6d6;\n  width: 95%;\n  padding: 0%;\n}\n\nh1 {\n  text-decoration: underline;\n  padding-top: -2%;\n}\n\nh3 {\n  text-decoration: underline;\n}\n\nul.nav-pills {\n  right: 20px;\n  position: fixed;\n  color: black;\n}\n\n#button {\n  position: -webkit-sticky;\n  position: fixed;\n  z-index: 2;\n  top: 85%;\n  left: 93%;\n  color: #5d0c1d;\n  opacity: 0.5;\n  font-size: 40px;\n  cursor: pointer;\n}\n\nbutton {\n  background-color: #5d0c1d;\n}\n\n.tableOfContentContainer {\n  position: -webkit-sticky; /* Safari */\n  position: sticky;\n  top: 10%;\n  height: 0;\n  padding-left: 91%;\n  /* display: none; */\n}\n\n.docs-toc-container {\n  border-left: 4px solid #5d0c1d;\n  font-weight: 700;\n}\n\na {\n  text-decoration: none;\n  color: #737373;\n  font-weight: 400 !important;\n}\n\na:hover {\n  color: #5d0c1d;\n}\n\n.tableOfContent {\n  position: static;\n  padding: 5px 0px 8px 10px;\n  font-size: 13px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Vjb25kZ3JhZGUvc2Vjb25kZ3JhZGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsVUFBVTtBQUNaOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixVQUFVO0VBQ1YsUUFBUTtFQUNSLFNBQVM7RUFDVCxjQUFjO0VBQ2QsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usd0JBQXdCLEVBQUUsV0FBVztFQUNyQyxnQkFBZ0I7RUFDaEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3NlY29uZGdyYWRlL3NlY29uZGdyYWRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMWVtO1xuICBwYWRkaW5nLWJvdHRvbTogM2VtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCBibGFjaztcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5pZnJhbWUge1xuICBwYWRkaW5nOiAyJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4udGl0bGUge1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuLnRpdGxlaHIge1xuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICMzMzM7XG4gIHdpZHRoOiA5NSU7XG59XG5cbi5ub3JtYWxociB7XG4gIGJvcmRlci10b3A6IDEwcHggc29saWQgI2Q2ZDZkNjtcbiAgd2lkdGg6IDk1JTtcbn1cblxuLmxlc3NwYWRkaW5nIHtcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICNkNmQ2ZDY7XG4gIHdpZHRoOiA5NSU7XG4gIHBhZGRpbmc6IDAlO1xufVxuXG5oMSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBwYWRkaW5nLXRvcDogLTIlO1xufVxuXG5oMyB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG51bC5uYXYtcGlsbHMge1xuICByaWdodDogMjBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbiNidXR0b24ge1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjtcbiAgdG9wOiA4NSU7XG4gIGxlZnQ6IDkzJTtcbiAgY29sb3I6ICM1ZDBjMWQ7XG4gIG9wYWNpdHk6IDAuNTtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZDBjMWQ7XG59XG5cbi50YWJsZU9mQ29udGVudENvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTsgLyogU2FmYXJpICovXG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMTAlO1xuICBoZWlnaHQ6IDA7XG4gIHBhZGRpbmctbGVmdDogOTElO1xuICAvKiBkaXNwbGF5OiBub25lOyAqL1xufVxuXG4uZG9jcy10b2MtY29udGFpbmVyIHtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjNWQwYzFkO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzczNzM3MztcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6ICM1ZDBjMWQ7XG59XG5cbi50YWJsZU9mQ29udGVudCB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIHBhZGRpbmc6IDVweCAwcHggOHB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/secondgrade/secondgrade.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/secondgrade/secondgrade.component.ts ***!
    \******************************************************/

  /*! exports provided: SecondgradeComponent */

  /***/
  function srcAppSecondgradeSecondgradeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SecondgradeComponent", function () {
      return SecondgradeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SecondgradeComponent = /*#__PURE__*/function () {
      function SecondgradeComponent() {
        _classCallCheck(this, SecondgradeComponent);

        this.scrolled = 0;
      }

      _createClass(SecondgradeComponent, [{
        key: "onScrollEvent",
        value: function onScrollEvent($event) {
          var number = window.pageYOffset;

          if (number >= 50) {
            this.scrolled = 1;
          } else {
            this.scrolled = 0;
          }
        }
      }, {
        key: "goToTop",
        value: function goToTop() {
          window.scrollTo(0, 0);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SecondgradeComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:scroll", ["$event"])], SecondgradeComponent.prototype, "onScrollEvent", null);
    SecondgradeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-secondgrade",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./secondgrade.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/secondgrade/secondgrade.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./secondgrade.component.css */
      "./src/app/secondgrade/secondgrade.component.css"))["default"]]
    })], SecondgradeComponent);
    /***/
  },

  /***/
  "./src/app/specialneeds/specialneeds.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/specialneeds/specialneeds.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSpecialneedsSpecialneedsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-container {\n  padding-top: 1em;\n  padding-bottom: 3em;\n  background-color: #ffffff;\n  border-left: 4px solid black;\n  border-right: 4px solid black;\n  z-index: 1;\n  height: auto;\n  position: relative;\n  overflow: hidden;\n}\n\n.float-child {\n  width: 50%;\n  padding-top: 3%;\n}\n\n.title {\n  justify-self: center;\n}\n\n.titlehr {\n  border-top: 10px solid #333;\n  width: 95%;\n}\n\n.normalhr {\n  border-top: 10px solid #d6d6d6;\n  width: 95%;\n}\n\n.lesspadding {\n  border-top: 5px solid #d6d6d6;\n  width: 95%;\n  padding: 0%;\n}\n\nh1 {\n  text-decoration: underline;\n  padding-top: -2%;\n}\n\nh3 {\n  text-decoration: underline;\n}\n\nul.nav-pills {\n  right: 20px;\n  position: fixed;\n  color: black;\n}\n\n#button {\n  position: -webkit-sticky;\n  position: fixed;\n  z-index: 2;\n  top: 85%;\n  left: 93%;\n  color: #5d0c1d;\n  opacity: 0.5;\n  font-size: 40px;\n  cursor: pointer;\n}\n\nbutton {\n  background-color: #5d0c1d;\n}\n\nbutton.stick {\n  position: fixed;\n  top: 0;\n}\n\n.tableOfContentContainer {\n  padding-top: 2%;\n  padding-left: 90.5%;\n  position: fixed;\n}\n\n.docs-toc-container {\n  border-left: 4px solid #5d0c1d;\n  font-weight: 700;\n}\n\na {\n  text-decoration: none;\n  color: #124ec2;\n}\n\nbutton:hover {\n  color: #5d0c1d;\n}\n\n.tableOfContent {\n  position: static;\n  padding: 5px 0 10px 10px;\n  font-size: 13px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BlY2lhbG5lZWRzL3NwZWNpYWxuZWVkcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLFVBQVU7RUFDVixRQUFRO0VBQ1IsU0FBUztFQUNULGNBQWM7RUFDZCxZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtBQUNSOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3NwZWNpYWxuZWVkcy9zcGVjaWFsbmVlZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAxZW07XG4gIHBhZGRpbmctYm90dG9tOiAzZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIGJsYWNrO1xuICB6LWluZGV4OiAxO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmZsb2F0LWNoaWxkIHtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZy10b3A6IDMlO1xufVxuXG4udGl0bGUge1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuLnRpdGxlaHIge1xuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICMzMzM7XG4gIHdpZHRoOiA5NSU7XG59XG5cbi5ub3JtYWxociB7XG4gIGJvcmRlci10b3A6IDEwcHggc29saWQgI2Q2ZDZkNjtcbiAgd2lkdGg6IDk1JTtcbn1cblxuLmxlc3NwYWRkaW5nIHtcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICNkNmQ2ZDY7XG4gIHdpZHRoOiA5NSU7XG4gIHBhZGRpbmc6IDAlO1xufVxuXG5oMSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBwYWRkaW5nLXRvcDogLTIlO1xufVxuXG5oMyB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG51bC5uYXYtcGlsbHMge1xuICByaWdodDogMjBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbiNidXR0b24ge1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjtcbiAgdG9wOiA4NSU7XG4gIGxlZnQ6IDkzJTtcbiAgY29sb3I6ICM1ZDBjMWQ7XG4gIG9wYWNpdHk6IDAuNTtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZDBjMWQ7XG59XG5cbmJ1dHRvbi5zdGljayB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xufVxuXG4udGFibGVPZkNvbnRlbnRDb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMiU7XG4gIHBhZGRpbmctbGVmdDogOTAuNSU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLmRvY3MtdG9jLWNvbnRhaW5lciB7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzVkMGMxZDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMxMjRlYzI7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiAjNWQwYzFkO1xufVxuXG4udGFibGVPZkNvbnRlbnQge1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBwYWRkaW5nOiA1cHggMCAxMHB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/specialneeds/specialneeds.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/specialneeds/specialneeds.component.ts ***!
    \********************************************************/

  /*! exports provided: SpecialneedsComponent */

  /***/
  function srcAppSpecialneedsSpecialneedsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpecialneedsComponent", function () {
      return SpecialneedsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SpecialneedsComponent = /*#__PURE__*/function () {
      function SpecialneedsComponent() {
        _classCallCheck(this, SpecialneedsComponent);
      }

      _createClass(SpecialneedsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SpecialneedsComponent;
    }();

    SpecialneedsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-specialneeds",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./specialneeds.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/specialneeds/specialneeds.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./specialneeds.component.css */
      "./src/app/specialneeds/specialneeds.component.css"))["default"]]
    })], SpecialneedsComponent);
    /***/
  },

  /***/
  "./src/app/spelling/spelling.component.css":
  /*!*************************************************!*\
    !*** ./src/app/spelling/spelling.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSpellingSpellingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-container {\n  /* margin: auto; */\n  padding-top: 1em;\n  padding-bottom: 3em;\n  /* padding-left: 8%;\n  padding-right: 8%; */\n  /* text-align: center; */\n  /* height: auto; */\n  /* width: 80%; */\n  background-color: #ffffff;\n  border-left: 4px solid black;\n  border-right: 4px solid black;\n  z-index: 1;\n  /* position: relative; */\n}\n\n/* p {\n  margin: auto;\n  padding-top: 5em;\n  text-align: center;\n  height: 100vh;\n  width: 80%;\n  padding-left: 8%;\n  padding-right: 8%;\n  background-color: #ffffff;\n  border-left: 4px solid black;\n  border-right: 4px solid black;\n} */\n\n#button {\n  position: -webkit-sticky;\n  position: fixed;\n  z-index: 2;\n  top: 85%;\n  left: 93%;\n  color: #5d0c1d;\n  opacity: 0.5;\n  font-size: 40px;\n  cursor: pointer;\n}\n\nbutton {\n  background-color: #5d0c1d;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BlbGxpbmcvc3BlbGxpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CO3NCQUNvQjtFQUNwQix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1Ysd0JBQXdCO0FBQzFCOztBQUVBOzs7Ozs7Ozs7OztHQVdHOztBQUVIO0VBQ0Usd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixVQUFVO0VBQ1YsUUFBUTtFQUNSLFNBQVM7RUFDVCxjQUFjO0VBQ2QsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvc3BlbGxpbmcvc3BlbGxpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWNvbnRhaW5lciB7XG4gIC8qIG1hcmdpbjogYXV0bzsgKi9cbiAgcGFkZGluZy10b3A6IDFlbTtcbiAgcGFkZGluZy1ib3R0b206IDNlbTtcbiAgLyogcGFkZGluZy1sZWZ0OiA4JTtcbiAgcGFkZGluZy1yaWdodDogOCU7ICovXG4gIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cbiAgLyogaGVpZ2h0OiBhdXRvOyAqL1xuICAvKiB3aWR0aDogODAlOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCBibGFjaztcbiAgei1pbmRleDogMTtcbiAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xufVxuXG4vKiBwIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nLXRvcDogNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmctbGVmdDogOCU7XG4gIHBhZGRpbmctcmlnaHQ6IDglO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCBibGFjaztcbn0gKi9cblxuI2J1dHRvbiB7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IDg1JTtcbiAgbGVmdDogOTMlO1xuICBjb2xvcjogIzVkMGMxZDtcbiAgb3BhY2l0eTogMC41O1xuICBmb250LXNpemU6IDQwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVkMGMxZDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/spelling/spelling.component.ts":
  /*!************************************************!*\
    !*** ./src/app/spelling/spelling.component.ts ***!
    \************************************************/

  /*! exports provided: SpellingComponent */

  /***/
  function srcAppSpellingSpellingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpellingComponent", function () {
      return SpellingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SpellingComponent = /*#__PURE__*/function () {
      function SpellingComponent() {
        _classCallCheck(this, SpellingComponent);
      }

      _createClass(SpellingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SpellingComponent;
    }();

    SpellingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-spelling',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./spelling.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/spelling/spelling.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./spelling.component.css */
      "./src/app/spelling/spelling.component.css"))["default"]]
    })], SpellingComponent);
    /***/
  },

  /***/
  "./src/app/thirdgrade/thirdgrade.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/thirdgrade/thirdgrade.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppThirdgradeThirdgradeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-container {\n  padding-top: 1em;\n  padding-bottom: 3em;\n  background-color: #ffffff;\n  border-left: 4px solid black;\n  border-right: 4px solid black;\n  z-index: 1;\n  position: relative;\n}\n\niframe {\n  padding: 2%;\n  margin: auto;\n}\n\n.title {\n  justify-self: center;\n}\n\n.titlehr {\n  border-top: 10px solid #333;\n  width: 95%;\n}\n\n.normalhr {\n  border-top: 10px solid #d6d6d6;\n  width: 95%;\n}\n\n.lesspadding {\n  border-top: 5px solid #d6d6d6;\n  width: 95%;\n  padding: 0%;\n}\n\nh1 {\n  text-decoration: underline;\n  padding-top: -2%;\n}\n\nh3 {\n  text-decoration: underline;\n}\n\nul.nav-pills {\n  right: 20px;\n  position: fixed;\n  color: black;\n}\n\n#button {\n  position: -webkit-sticky;\n  position: fixed;\n  z-index: 2;\n  top: 85%;\n  left: 93%;\n  color: #5d0c1d;\n  opacity: 0.5;\n  font-size: 40px;\n  cursor: pointer;\n}\n\nbutton {\n  background-color: #5d0c1d;\n}\n\n.tableOfContentContainer {\n  position: -webkit-sticky; /* Safari */\n  position: sticky;\n  top: 10%;\n  height: 0;\n  padding-left: 91%;\n  /* display: none; */\n}\n\n.docs-toc-container {\n  border-left: 4px solid #5d0c1d;\n  font-weight: 700;\n}\n\na {\n  text-decoration: none;\n  color: #737373;\n  font-weight: 400 !important;\n}\n\na:hover {\n  color: #5d0c1d;\n}\n\n.tableOfContent {\n  position: static;\n  padding: 5px 0px 8px 10px;\n  font-size: 13px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhpcmRncmFkZS90aGlyZGdyYWRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsVUFBVTtFQUNWLFFBQVE7RUFDUixTQUFTO0VBQ1QsY0FBYztFQUNkLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHdCQUF3QixFQUFFLFdBQVc7RUFDckMsZ0JBQWdCO0VBQ2hCLFFBQVE7RUFDUixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC90aGlyZGdyYWRlL3RoaXJkZ3JhZGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctdG9wOiAxZW07XG4gIHBhZGRpbmctYm90dG9tOiAzZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIGJsYWNrO1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlmcmFtZSB7XG4gIHBhZGRpbmc6IDIlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi50aXRsZSB7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4udGl0bGVociB7XG4gIGJvcmRlci10b3A6IDEwcHggc29saWQgIzMzMztcbiAgd2lkdGg6IDk1JTtcbn1cblxuLm5vcm1hbGhyIHtcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjZDZkNmQ2O1xuICB3aWR0aDogOTUlO1xufVxuXG4ubGVzc3BhZGRpbmcge1xuICBib3JkZXItdG9wOiA1cHggc29saWQgI2Q2ZDZkNjtcbiAgd2lkdGg6IDk1JTtcbiAgcGFkZGluZzogMCU7XG59XG5cbmgxIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHBhZGRpbmctdG9wOiAtMiU7XG59XG5cbmgzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbnVsLm5hdi1waWxscyB7XG4gIHJpZ2h0OiAyMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuI2J1dHRvbiB7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IDg1JTtcbiAgbGVmdDogOTMlO1xuICBjb2xvcjogIzVkMGMxZDtcbiAgb3BhY2l0eTogMC41O1xuICBmb250LXNpemU6IDQwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVkMGMxZDtcbn1cblxuLnRhYmxlT2ZDb250ZW50Q29udGFpbmVyIHtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5OyAvKiBTYWZhcmkgKi9cbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAxMCU7XG4gIGhlaWdodDogMDtcbiAgcGFkZGluZy1sZWZ0OiA5MSU7XG4gIC8qIGRpc3BsYXk6IG5vbmU7ICovXG59XG5cbi5kb2NzLXRvYy1jb250YWluZXIge1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICM1ZDBjMWQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNzM3MzczO1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogIzVkMGMxZDtcbn1cblxuLnRhYmxlT2ZDb250ZW50IHtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgcGFkZGluZzogNXB4IDBweCA4cHggMTBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/thirdgrade/thirdgrade.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/thirdgrade/thirdgrade.component.ts ***!
    \****************************************************/

  /*! exports provided: ThirdgradeComponent */

  /***/
  function srcAppThirdgradeThirdgradeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThirdgradeComponent", function () {
      return ThirdgradeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ThirdgradeComponent = /*#__PURE__*/function () {
      function ThirdgradeComponent() {
        _classCallCheck(this, ThirdgradeComponent);

        this.scrolled = 0;
      }

      _createClass(ThirdgradeComponent, [{
        key: "onScrollEvent",
        value: function onScrollEvent($event) {
          var number = window.pageYOffset;

          if (number >= 50) {
            this.scrolled = 1;
          } else {
            this.scrolled = 0;
          }
        }
      }, {
        key: "goToTop",
        value: function goToTop() {
          window.scrollTo(0, 0);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ThirdgradeComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:scroll", ["$event"])], ThirdgradeComponent.prototype, "onScrollEvent", null);
    ThirdgradeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-thirdgrade",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./thirdgrade.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/thirdgrade/thirdgrade.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./thirdgrade.component.css */
      "./src/app/thirdgrade/thirdgrade.component.css"))["default"]]
    })], ThirdgradeComponent);
    /***/
  },

  /***/
  "./src/app/writing/writing.component.css":
  /*!***********************************************!*\
    !*** ./src/app/writing/writing.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppWritingWritingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-container {\n  /* margin: auto; */\n  padding-top: 1em;\n  padding-bottom: 3em;\n  /* padding-left: 8%;\n  padding-right: 8%; */\n  /* text-align: center; */\n  /* height: auto; */\n  /* width: 80%; */\n  background-color: #ffffff;\n  border-left: 4px solid black;\n  border-right: 4px solid black;\n  z-index: 1;\n  /* position: relative; */\n}\n\n/* p {\n  margin: auto;\n  padding-top: 5em;\n  text-align: center;\n  height: 100vh;\n  width: 80%;\n  padding-left: 8%;\n  padding-right: 8%;\n  background-color: #ffffff;\n  border-left: 4px solid black;\n  border-right: 4px solid black;\n} */\n\n#button {\n  position: -webkit-sticky;\n  position: fixed;\n  z-index: 2;\n  top: 85%;\n  left: 93%;\n  color: #5d0c1d;\n  opacity: 0.5;\n  font-size: 40px;\n  cursor: pointer;\n}\n\nbutton {\n  background-color: #5d0c1d;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd3JpdGluZy93cml0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQjtzQkFDb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsVUFBVTtFQUNWLHdCQUF3QjtBQUMxQjs7QUFFQTs7Ozs7Ozs7Ozs7R0FXRzs7QUFFSDtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsVUFBVTtFQUNWLFFBQVE7RUFDUixTQUFTO0VBQ1QsY0FBYztFQUNkLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL3dyaXRpbmcvd3JpdGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY29udGFpbmVyIHtcbiAgLyogbWFyZ2luOiBhdXRvOyAqL1xuICBwYWRkaW5nLXRvcDogMWVtO1xuICBwYWRkaW5nLWJvdHRvbTogM2VtO1xuICAvKiBwYWRkaW5nLWxlZnQ6IDglO1xuICBwYWRkaW5nLXJpZ2h0OiA4JTsgKi9cbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xuICAvKiBoZWlnaHQ6IGF1dG87ICovXG4gIC8qIHdpZHRoOiA4MCU7ICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIGJsYWNrO1xuICB6LWluZGV4OiAxO1xuICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXG59XG5cbi8qIHAge1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmctdG9wOiA1ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZy1sZWZ0OiA4JTtcbiAgcGFkZGluZy1yaWdodDogOCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIGJsYWNrO1xufSAqL1xuXG4jYnV0dG9uIHtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogODUlO1xuICBsZWZ0OiA5MyU7XG4gIGNvbG9yOiAjNWQwYzFkO1xuICBvcGFjaXR5OiAwLjU7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWQwYzFkO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/writing/writing.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/writing/writing.component.ts ***!
    \**********************************************/

  /*! exports provided: WritingComponent */

  /***/
  function srcAppWritingWritingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WritingComponent", function () {
      return WritingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var WritingComponent = /*#__PURE__*/function () {
      function WritingComponent() {
        _classCallCheck(this, WritingComponent);
      }

      _createClass(WritingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WritingComponent;
    }();

    WritingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-writing",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./writing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/writing/writing.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./writing.component.css */
      "./src/app/writing/writing.component.css"))["default"]]
    })], WritingComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/hannahdreyer/Desktop/ElementaryEducationforAll/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map