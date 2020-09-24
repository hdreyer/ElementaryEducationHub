(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* Before release, move each page's basic shared layout CSS to here */\n/* * {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n} */\nbody {\n  background-color: #d6d6d6;\n}\nh3,\nh2,\nh4,\nh4,\nh5,\nh6 {\n  text-align: center;\n  z-index: 1;\n}\n/* iPhone SE */\n@media only screen and (max-width: 321px) {\n  header {\n    height: 2.5em;\n    padding-top: 0.5em;\n  }\n\n  .tableOfContentContainer {\n    display: none;\n  }\n\n  .main {\n    border-left: 0px;\n    border-right: 0px;\n  }\n\n  /* h3,\n  h4,\n  h5 {\n    font-size: 85%;\n  }\n\n  p {\n    font-size: 85%;\n  } */\n\n  .text-center {\n    display: none;\n  }\n\n  #button {\n    /* top: 87%;\n    left: 87%; */\n    opacity: 0.9;\n  }\n}\n/* Extra small devices (phones, 600px and down) */\n@media only screen and (min-width: 322px) and (max-width: 600px) {\n  header {\n    height: 5em;\n    -o-object-fit: contain;\n       object-fit: contain;\n    justify-content: center;\n    align-content: center;\n  }\n\n  .main {\n    border-left: 0px;\n    border-right: 0px;\n  }\n\n  img {\n    padding-top: 0.4em;\n    max-width: 90vw;\n    /* height: auto; */\n    align-self: center;\n  }\n\n  .tableOfContentContainer {\n    display: none;\n  }\n\n  #button {\n    /* top: 87%;\n    left: 87%; */\n    opacity: 0.9;\n  }\n\n  .float-container {\n    display: block;\n  }\n\n  /* h3,\n  h4,\n  h5 {\n    font-size: 85%;\n  }\n\n  p {\n    font-size: 85%;\n  } */\n\n  .text-center {\n    display: none;\n  }\n}\n/* Small devices (portrait tablets and large phones, 600px and up) */\n@media only screen and (min-width: 601px) and (max-width: 700px) {\n  .tableOfContentContainer {\n    display: none;\n  }\n\n  #button {\n    /* top: 87%;\n    left: 87%; */\n    opacity: 0.9;\n  }\n\n  .text-center {\n    display: none;\n  }\n}\n/* Small devices (portrait tablets and large phones, 600px and up) */\n@media only screen and (min-width: 701px) and (max-width: 767px) {\n  .tableOfContentContainer {\n    display: none;\n  }\n\n  #button {\n    /* top: 87%;\n    left: 90%; */\n    opacity: 0.9;\n  }\n\n  .text-center {\n    display: none;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 800px) {\n  .tableOfContentContainer {\n    display: none;\n  }\n\n  #button {\n    /* top: 87%;\n    left: 90%; */\n    opacity: 0.9;\n  }\n\n  .text-center {\n    display: none;\n  }\n}\n/* Medium devices (landscape tablets, 801px to 991px) */\n@media only screen and (min-width: 801px) and (max-width: 991px) {\n  .navbar .icon {\n    display: none;\n  }\n\n  #button {\n    /* top: 87%;\n    left: 93%; */\n    opacity: 0.9;\n  }\n}\n/* Large devices (laptops/desktops, 992px and up) */\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\n  .navbar .icon {\n    display: none;\n  }\n\n  #button {\n    /* top: 87%;\n    left: 93%; */\n    opacity: 0.5;\n  }\n}\n/* Extra large devices (large laptops and desktops, 1200px and up) */\n@media only screen and (min-width: 1200px) and (max-width: 1365px) {\n  /* .page-container {\n    padding-bottom: 3%;\n  } */\n\n  .navbar .icon {\n    display: none;\n  }\n\n  #button {\n    /* top: 87%;\n    left: 90%; */\n    opacity: 0.5;\n  }\n}\n/* Extra extra large devices (laptop and desktops, 1366px and up) */\n@media only screen and (min-width: 1366px) and (max-width: 1679px) {\n  .navbar .icon {\n    display: none;\n  }\n\n  #button {\n    /* top: 87%;\n    left: 90%; */\n    opacity: 0.5;\n  }\n}\n/* 13″ MacBook Pro (1.5x scaling) */\n@media only screen and (min-width: 1680px) and (max-width: 1850px) {\n  .navbar .icon {\n    display: none;\n  }\n\n  #button {\n    /* top: 87%;\n    left: 87%; */\n    opacity: 0.5;\n  }\n}\n@media only screen and (min-width: 1851px) and (max-width: 1919px) {\n  .navbar .icon {\n    display: none;\n  }\n}\n/* 1080p desktop displays */\n@media only screen and (min-width: 1920px) {\n  .navbar .icon {\n    display: none;\n  }\n\n  #button {\n    /* top: 87%;\n    left: 87%; */\n    opacity: 0.5;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFFQUFxRTtBQUNyRTs7OztHQUlHO0FBRUg7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTs7Ozs7O0VBTUUsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjtBQUVBLGNBQWM7QUFDZDtFQUNFO0lBQ0UsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0VBRUE7Ozs7Ozs7O0tBUUc7O0VBRUg7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRTtnQkFDWTtJQUNaLFlBQVk7RUFDZDtBQUNGO0FBRUEsaURBQWlEO0FBQ2pEO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsc0JBQW1CO09BQW5CLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFO2dCQUNZO0lBQ1osWUFBWTtFQUNkOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTs7Ozs7Ozs7S0FRRzs7RUFFSDtJQUNFLGFBQWE7RUFDZjtBQUNGO0FBRUEsb0VBQW9FO0FBQ3BFO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRTtnQkFDWTtJQUNaLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7RUFDZjtBQUNGO0FBRUEsb0VBQW9FO0FBQ3BFO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRTtnQkFDWTtJQUNaLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7RUFDZjtBQUNGO0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFO2dCQUNZO0lBQ1osWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7QUFFQSx1REFBdUQ7QUFDdkQ7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFO2dCQUNZO0lBQ1osWUFBWTtFQUNkO0FBQ0Y7QUFFQSxtREFBbUQ7QUFDbkQ7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFO2dCQUNZO0lBQ1osWUFBWTtFQUNkO0FBQ0Y7QUFFQSxvRUFBb0U7QUFDcEU7RUFDRTs7S0FFRzs7RUFFSDtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFO2dCQUNZO0lBQ1osWUFBWTtFQUNkO0FBQ0Y7QUFFQSxtRUFBbUU7QUFDbkU7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFO2dCQUNZO0lBQ1osWUFBWTtFQUNkO0FBQ0Y7QUFFQSxtQ0FBbUM7QUFDbkM7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFO2dCQUNZO0lBQ1osWUFBWTtFQUNkO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFO2dCQUNZO0lBQ1osWUFBWTtFQUNkO0FBQ0YiLCJmaWxlIjoic3JjL3N0eWxlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBCZWZvcmUgcmVsZWFzZSwgbW92ZSBlYWNoIHBhZ2UncyBiYXNpYyBzaGFyZWQgbGF5b3V0IENTUyB0byBoZXJlICovXG4vKiAqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufSAqL1xuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDZkNjtcbn1cblxuaDMsXG5oMixcbmg0LFxuaDQsXG5oNSxcbmg2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB6LWluZGV4OiAxO1xufVxuXG4vKiBpUGhvbmUgU0UgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIxcHgpIHtcbiAgaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDIuNWVtO1xuICAgIHBhZGRpbmctdG9wOiAwLjVlbTtcbiAgfVxuXG4gIC50YWJsZU9mQ29udGVudENvbnRhaW5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5tYWluIHtcbiAgICBib3JkZXItbGVmdDogMHB4O1xuICAgIGJvcmRlci1yaWdodDogMHB4O1xuICB9XG5cbiAgLyogaDMsXG4gIGg0LFxuICBoNSB7XG4gICAgZm9udC1zaXplOiA4NSU7XG4gIH1cblxuICBwIHtcbiAgICBmb250LXNpemU6IDg1JTtcbiAgfSAqL1xuXG4gIC50ZXh0LWNlbnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICNidXR0b24ge1xuICAgIC8qIHRvcDogODclO1xuICAgIGxlZnQ6IDg3JTsgKi9cbiAgICBvcGFjaXR5OiAwLjk7XG4gIH1cbn1cblxuLyogRXh0cmEgc21hbGwgZGV2aWNlcyAocGhvbmVzLCA2MDBweCBhbmQgZG93bikgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIycHgpIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBoZWFkZXIge1xuICAgIGhlaWdodDogNWVtO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLm1haW4ge1xuICAgIGJvcmRlci1sZWZ0OiAwcHg7XG4gICAgYm9yZGVyLXJpZ2h0OiAwcHg7XG4gIH1cblxuICBpbWcge1xuICAgIHBhZGRpbmctdG9wOiAwLjRlbTtcbiAgICBtYXgtd2lkdGg6IDkwdnc7XG4gICAgLyogaGVpZ2h0OiBhdXRvOyAqL1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgfVxuXG4gIC50YWJsZU9mQ29udGVudENvbnRhaW5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICNidXR0b24ge1xuICAgIC8qIHRvcDogODclO1xuICAgIGxlZnQ6IDg3JTsgKi9cbiAgICBvcGFjaXR5OiAwLjk7XG4gIH1cblxuICAuZmxvYXQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC8qIGgzLFxuICBoNCxcbiAgaDUge1xuICAgIGZvbnQtc2l6ZTogODUlO1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiA4NSU7XG4gIH0gKi9cblxuICAudGV4dC1jZW50ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLyogU21hbGwgZGV2aWNlcyAocG9ydHJhaXQgdGFibGV0cyBhbmQgbGFyZ2UgcGhvbmVzLCA2MDBweCBhbmQgdXApICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLnRhYmxlT2ZDb250ZW50Q29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgI2J1dHRvbiB7XG4gICAgLyogdG9wOiA4NyU7XG4gICAgbGVmdDogODclOyAqL1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgfVxuXG4gIC50ZXh0LWNlbnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4vKiBTbWFsbCBkZXZpY2VzIChwb3J0cmFpdCB0YWJsZXRzIGFuZCBsYXJnZSBwaG9uZXMsIDYwMHB4IGFuZCB1cCkgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAudGFibGVPZkNvbnRlbnRDb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAjYnV0dG9uIHtcbiAgICAvKiB0b3A6IDg3JTtcbiAgICBsZWZ0OiA5MCU7ICovXG4gICAgb3BhY2l0eTogMC45O1xuICB9XG5cbiAgLnRleHQtY2VudGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAudGFibGVPZkNvbnRlbnRDb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAjYnV0dG9uIHtcbiAgICAvKiB0b3A6IDg3JTtcbiAgICBsZWZ0OiA5MCU7ICovXG4gICAgb3BhY2l0eTogMC45O1xuICB9XG5cbiAgLnRleHQtY2VudGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi8qIE1lZGl1bSBkZXZpY2VzIChsYW5kc2NhcGUgdGFibGV0cywgODAxcHggdG8gOTkxcHgpICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMXB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLm5hdmJhciAuaWNvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICNidXR0b24ge1xuICAgIC8qIHRvcDogODclO1xuICAgIGxlZnQ6IDkzJTsgKi9cbiAgICBvcGFjaXR5OiAwLjk7XG4gIH1cbn1cblxuLyogTGFyZ2UgZGV2aWNlcyAobGFwdG9wcy9kZXNrdG9wcywgOTkycHggYW5kIHVwKSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAubmF2YmFyIC5pY29uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgI2J1dHRvbiB7XG4gICAgLyogdG9wOiA4NyU7XG4gICAgbGVmdDogOTMlOyAqL1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxufVxuXG4vKiBFeHRyYSBsYXJnZSBkZXZpY2VzIChsYXJnZSBsYXB0b3BzIGFuZCBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cCkgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSBhbmQgKG1heC13aWR0aDogMTM2NXB4KSB7XG4gIC8qIC5wYWdlLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1ib3R0b206IDMlO1xuICB9ICovXG5cbiAgLm5hdmJhciAuaWNvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICNidXR0b24ge1xuICAgIC8qIHRvcDogODclO1xuICAgIGxlZnQ6IDkwJTsgKi9cbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cbn1cblxuLyogRXh0cmEgZXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFwdG9wIGFuZCBkZXNrdG9wcywgMTM2NnB4IGFuZCB1cCkgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTM2NnB4KSBhbmQgKG1heC13aWR0aDogMTY3OXB4KSB7XG4gIC5uYXZiYXIgLmljb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAjYnV0dG9uIHtcbiAgICAvKiB0b3A6IDg3JTtcbiAgICBsZWZ0OiA5MCU7ICovXG4gICAgb3BhY2l0eTogMC41O1xuICB9XG59XG5cbi8qIDEz4oCzIE1hY0Jvb2sgUHJvICgxLjV4IHNjYWxpbmcpICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2ODBweCkgYW5kIChtYXgtd2lkdGg6IDE4NTBweCkge1xuICAubmF2YmFyIC5pY29uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgI2J1dHRvbiB7XG4gICAgLyogdG9wOiA4NyU7XG4gICAgbGVmdDogODclOyAqL1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE4NTFweCkgYW5kIChtYXgtd2lkdGg6IDE5MTlweCkge1xuICAubmF2YmFyIC5pY29uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi8qIDEwODBwIGRlc2t0b3AgZGlzcGxheXMgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTkyMHB4KSB7XG4gIC5uYXZiYXIgLmljb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAjYnV0dG9uIHtcbiAgICAvKiB0b3A6IDg3JTtcbiAgICBsZWZ0OiA4NyU7ICovXG4gICAgb3BhY2l0eTogMC41O1xuICB9XG59XG4iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hannahdreyer/Desktop/ElementaryEducationforAll/src/styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map