exports.ids = ["811"];
exports.modules = {
36832(module) {
// Exports
module.exports = {
	"popup": `popup_Zo16`,
	"buttonContainer": `buttonContainer_Y26s`
};


},
85750(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  "default": () => (PwaReloadPopup)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _docusaurus_Translate__rspack_import_1 = __webpack_require__(46218);
/* import */ var _site_src_lib_utils__rspack_import_4 = __webpack_require__(76345);
/* import */ var react__rspack_import_2 = __webpack_require__(58101);
/* import */ var _styles_module_css__rspack_import_3 = __webpack_require__(36832);
/* import */ var _styles_module_css__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_3);





function PwaReloadPopup({ onReload }) {
    const [isVisible, setIsVisible] = (0,react__rspack_import_2.useState)(true);
    return isVisible ? /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        className: (0,_site_src_lib_utils__rspack_import_4.cn)('alert', 'alert--secondary', (_styles_module_css__rspack_import_3_default().popup)),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_1/* ["default"] */.A, {
                    id: "theme.PwaReloadPopup.info",
                    description: "The text for PWA reload popup",
                    children: "New version available"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: (_styles_module_css__rspack_import_3_default().buttonContainer),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("button", {
                        className: "button button--link",
                        type: "button",
                        onClick: ()=>{
                            setIsVisible(false);
                            onReload();
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_1/* ["default"] */.A, {
                            id: "theme.PwaReloadPopup.refreshButtonText",
                            description: "The text for PWA reload button",
                            children: "Refresh"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("button", {
                        "aria-label": (0,_docusaurus_Translate__rspack_import_1/* .translate */.T)({
                            id: 'theme.PwaReloadPopup.closeButtonAriaLabel',
                            message: 'Close',
                            description: 'The ARIA label for close button of PWA reload popup'
                        }),
                        className: "close",
                        type: "button",
                        onClick: ()=>setIsVisible(false),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                            "aria-hidden": "true",
                            children: "x"
                        })
                    })
                ]
            })
        ]
    }) : null;
}


},

};
;