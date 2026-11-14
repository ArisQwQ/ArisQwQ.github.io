exports.ids = ["452"];
exports.modules = {
92592(module) {
// Exports
module.exports = {
	"hero": `hero_P6qw`,
	"intro": `intro_N1Ap`,
	"avatar": `avatar_V_jw`,
	"hero_text": `hero_text_Szzf`,
	"name": `name_n0jY`,
	"socials": `socials_kVsb`
};


},
51057(module) {
// Exports
module.exports = {
	"home": `home_o84C`
};


},
23218(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (IdealImage)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(46218);
/* import */ var _theme_IdealImageLegacy__rspack_import_3 = __webpack_require__(14773);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


// Adopted from https://github.com/endiliey/react-ideal-image/blob/master/src/components/helpers.js#L59-L65
function bytesToSize(bytes) {
    const sizes = [
        'B',
        'KB',
        'MB',
        'GB',
        'TB'
    ];
    if (bytes === 0) {
        return 'n/a';
    }
    const scale = Math.floor(Math.log(bytes) / Math.log(1024));
    if (scale === 0) {
        return `${bytes} ${sizes[scale]}`;
    }
    return `${(bytes / 1024 ** scale).toFixed(1)} ${sizes[scale]}`;
}
// Adopted from https://github.com/endiliey/react-ideal-image/blob/master/src/components/IdealImage/index.js#L43-L75
function getMessage(icon, state) {
    switch(icon){
        case 'noicon':
        case 'loaded':
            return null;
        case 'loading':
            return (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
                id: 'theme.IdealImageMessage.loading',
                message: 'Loading...',
                description: 'When the full-scale image is loading'
            });
        case 'load':
            {
                // We can show `alt` here
                const { pickedSrc } = state;
                const { size } = pickedSrc;
                const sizeMessage = size ? ` (${bytesToSize(size)})` : '';
                return (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
                    id: 'theme.IdealImageMessage.load',
                    message: 'Click to load{sizeMessage}',
                    description: 'To prompt users to load the full image. sizeMessage is a parenthesized size figure.'
                }, {
                    sizeMessage
                });
            }
        case 'offline':
            return (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
                id: 'theme.IdealImageMessage.offline',
                message: 'Your browser is offline. Image not loaded',
                description: 'When the user is viewing an offline document'
            });
        case 'error':
            {
                const { loadInfo } = state;
                if (loadInfo === 404) {
                    return (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
                        id: 'theme.IdealImageMessage.404error',
                        message: '404. Image not found',
                        description: 'When the image is not found'
                    });
                }
                return (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
                    id: 'theme.IdealImageMessage.error',
                    message: 'Error. Click to reload',
                    description: 'When the image fails to load for unknown error'
                });
            }
        default:
            throw new Error(`Wrong icon: ${icon}`);
    }
}
function IdealImage(props) {
    const { img, ...propsRest } = props;
    // In dev env just use regular img with original file
    if (typeof img === 'string' || 'default' in img) {
        return(// eslint-disable-next-line jsx-a11y/alt-text
        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            src: typeof img === 'string' ? img : img.default,
            ...propsRest
        }));
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_IdealImageLegacy__rspack_import_3/* ["default"] */.A, {
        ...propsRest,
        height: img.src.height ?? 100,
        width: img.src.width ?? 100,
        placeholder: {
            lqip: img.preSrc
        },
        src: img.src.src,
        srcSet: img.src.images.map((image)=>({
                ...image,
                src: image.path
            })),
        getMessage: getMessage
    });
}


},
93524(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var _index__rspack_import_2 = __webpack_require__(50682);

// This icon is from "material design icons"
// It is licensed under Apache License 2.0
// Full text is available here
// https://github.com/google/material-design-icons/blob/master/LICENSE


const Download = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_index__rspack_import_2/* ["default"] */.A, {
        ...props,
        path: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"
    });
/* export default */ const __rspack_default_export = (Download);


},
36062(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var _index__rspack_import_2 = __webpack_require__(50682);

// This icon is from "material design icons"
// It is licensed under Apache License 2.0
// Full text is available here
// https://github.com/google/material-design-icons/blob/master/LICENSE


const Loading = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_index__rspack_import_2/* ["default"] */.A, {
        ...props,
        path: "M6,2V8H6V8L10,12L6,16V16H6V22H18V16H18V16L14,12L18,8V8H18V2H6M16,16.5V20H8V16.5L12,12.5L16,16.5M12,11.5L8,7.5V4H16V7.5L12,11.5Z"
    });
/* export default */ const __rspack_default_export = (Loading);


},
46973(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var _index__rspack_import_2 = __webpack_require__(50682);

// This icon is from "material design icons"
// It is licensed under Apache License 2.0
// Full text is available here
// https://github.com/google/material-design-icons/blob/master/LICENSE


const Offline = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_index__rspack_import_2/* ["default"] */.A, {
        ...props,
        path: "M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"
    });
/* export default */ const __rspack_default_export = (Offline);


},
21190(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var _index__rspack_import_2 = __webpack_require__(50682);

// This icon is from "material design icons"
// It is licensed under Apache License 2.0
// Full text is available here
// https://github.com/google/material-design-icons/blob/master/LICENSE


const Warning = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_index__rspack_import_2/* ["default"] */.A, {
        ...props,
        path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
    });
/* export default */ const __rspack_default_export = (Warning);


},
50682(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);


// import PropTypes from 'prop-types'
const Icon = ({ size = 24, fill = '#000', className, path })=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        className: className,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                fill: fill,
                d: path
            })
        ]
    });
/*
Icon.propTypes = {
  size: PropTypes.number,
  fill: PropTypes.string,
  className: PropTypes.string,
  path: PropTypes.string.isRequired,
}
 */ /* export default */ const __rspack_default_export = (Icon);


},
64485(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (IdealImage)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var _waypoint__rspack_import_2 = __webpack_require__(36490);
/* import */ var _Media__rspack_import_3 = __webpack_require__(92049);
/* import */ var _constants__rspack_import_5 = __webpack_require__(92447);
/* import */ var _loaders__rspack_import_6 = __webpack_require__(55454);
/* import */ var _helpers__rspack_import_4 = __webpack_require__(90383);







const { initial, loading, loaded, error } = _constants__rspack_import_5/* .loadStates */.v;
const defaultShouldAutoDownload = ({ connection, size, threshold, possiblySlowNetwork })=>{
    if (possiblySlowNetwork) return false;
    if (!connection) return true;
    const { downlink, rtt, effectiveType } = connection;
    switch(effectiveType){
        case 'slow-2g':
        case '2g':
            return false;
        case '3g':
            if (downlink && size && threshold) {
                return size * 8 / (downlink * 1000) + rtt < threshold;
            }
            return false;
        case '4g':
        default:
            return true;
    }
};
const defaultGetMessage = (icon, state)=>{
    switch(icon){
        case _constants__rspack_import_5/* .icons.noicon */.P.noicon:
        case _constants__rspack_import_5/* .icons.loaded */.P.loaded:
            return null;
        case _constants__rspack_import_5/* .icons.loading */.P.loading:
            return 'Loading...';
        case _constants__rspack_import_5/* .icons.load */.P.load:
            // we can show `alt` here
            const { pickedSrc } = state;
            const { size } = pickedSrc;
            if (size) {
                return [
                    'Click to load (',
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("nobr", {
                        children: (0,_helpers__rspack_import_4/* .bytesToSize */.Cq)(size)
                    }, "nb"),
                    ')'
                ];
            } else {
                return 'Click to load';
            }
        case _constants__rspack_import_5/* .icons.offline */.P.offline:
            return 'Your browser is offline. Image not loaded';
        case _constants__rspack_import_5/* .icons.error */.P.error:
            const { loadInfo } = state;
            if (loadInfo === 404) {
                return '404. Image not found';
            } else {
                return 'Error. Click to reload';
            }
        default:
            throw new Error(`Wrong icon: ${icon}`);
    }
};
const defaultGetIcon = (state)=>{
    const { loadState, onLine, overThreshold, userTriggered } = state;
    if (_helpers__rspack_import_4/* .ssr */.ht) return _constants__rspack_import_5/* .icons.noicon */.P.noicon;
    switch(loadState){
        case loaded:
            return _constants__rspack_import_5/* .icons.loaded */.P.loaded;
        case loading:
            return overThreshold ? _constants__rspack_import_5/* .icons.loading */.P.loading : _constants__rspack_import_5/* .icons.noicon */.P.noicon;
        case initial:
            if (onLine) {
                const { shouldAutoDownload } = state;
                if (shouldAutoDownload === undefined) return _constants__rspack_import_5/* .icons.noicon */.P.noicon;
                return userTriggered || !shouldAutoDownload ? _constants__rspack_import_5/* .icons.load */.P.load : _constants__rspack_import_5/* .icons.noicon */.P.noicon;
            } else {
                return _constants__rspack_import_5/* .icons.offline */.P.offline;
            }
        case error:
            return onLine ? _constants__rspack_import_5/* .icons.error */.P.error : _constants__rspack_import_5/* .icons.offline */.P.offline;
        default:
            throw new Error(`Wrong state: ${loadState}`);
    }
};
class IdealImage extends react__rspack_import_1.Component {
    constructor(props){
        super(props);
        // TODO: validate props.srcSet
        this.state = {
            loadState: initial,
            connection: _helpers__rspack_import_4/* .nativeConnection */.KX ? {
                downlink: navigator.connection.downlink,
                rtt: navigator.connection.rtt,
                effectiveType: navigator.connection.effectiveType
            } : null,
            onLine: true,
            overThreshold: false,
            inViewport: false,
            userTriggered: false,
            possiblySlowNetwork: false
        };
    }
    /*
  static propTypes = {
    /!** how much to wait in ms until consider download to slow *!/
    threshold: PropTypes.number,
    /!** function to generate src based on width and format *!/
    getUrl: PropTypes.func,
    /!** array of sources *!/
    srcSet: PropTypes.arrayOf(
      PropTypes.shape({
        width: PropTypes.number.isRequired,
        src: PropTypes.string,
        size: PropTypes.number,
        format: PropTypes.oneOf(['jpeg', 'jpg', 'webp', 'png', 'gif']),
      }),
    ).isRequired,
    /!** function which decides if image should be downloaded *!/
    shouldAutoDownload: PropTypes.func,
    /!** function which decides what message to show *!/
    getMessage: PropTypes.func,
    /!** function which decides what icon to show *!/
    getIcon: PropTypes.func,
    /!** type of loader *!/
    loader: PropTypes.oneOf(['image', 'xhr']),
    /!** Width of the image in px *!/
    width: PropTypes.number.isRequired,
    /!** Height of the image in px *!/
    height: PropTypes.number.isRequired,
    placeholder: PropTypes.oneOfType([
      PropTypes.shape({
        /!** Solid color placeholder *!/
        color: PropTypes.string.isRequired,
      }),
      PropTypes.shape({
        /!**
         * [Low Quality Image Placeholder](https://github.com/zouhir/lqip)
         * [SVG-Based Image Placeholder](https://github.com/technopagan/sqip)
         * base64 encoded image of low quality
         *!/
        lqip: PropTypes.string.isRequired,
      }),
    ]).isRequired,
    /!** Map of icons *!/
    icons: PropTypes.object.isRequired,
    /!** theme object - CSS Modules or React styles *!/
    theme: PropTypes.object.isRequired,
  }*/ static defaultProps = {
        shouldAutoDownload: defaultShouldAutoDownload,
        getMessage: defaultGetMessage,
        getIcon: defaultGetIcon,
        loader: 'xhr'
    };
    componentDidMount() {
        if (_helpers__rspack_import_4/* .nativeConnection */.KX) {
            this.updateConnection = ()=>{
                if (!navigator.onLine) return;
                if (this.state.loadState === initial) {
                    this.setState({
                        connection: {
                            effectiveType: navigator.connection.effectiveType,
                            downlink: navigator.connection.downlink,
                            rtt: navigator.connection.rtt
                        }
                    });
                }
            };
            navigator.connection.addEventListener('onchange', this.updateConnection);
        } else if (this.props.threshold) {
            this.possiblySlowNetworkListener = (e)=>{
                if (this.state.loadState !== initial) return;
                const { possiblySlowNetwork } = e.detail;
                if (!this.state.possiblySlowNetwork && possiblySlowNetwork) {
                    this.setState({
                        possiblySlowNetwork
                    });
                }
            };
            window.document.addEventListener('possiblySlowNetwork', this.possiblySlowNetworkListener);
        }
        this.updateOnlineStatus = ()=>this.setState({
                onLine: navigator.onLine
            });
        this.updateOnlineStatus();
        window.addEventListener('online', this.updateOnlineStatus);
        window.addEventListener('offline', this.updateOnlineStatus);
    }
    componentWillUnmount() {
        this.clear();
        if (_helpers__rspack_import_4/* .nativeConnection */.KX) {
            navigator.connection.removeEventListener('onchange', this.updateConnection);
        } else if (this.props.threshold) {
            window.document.removeEventListener('possiblySlowNetwork', this.possiblySlowNetworkListener);
        }
        window.removeEventListener('online', this.updateOnlineStatus);
        window.removeEventListener('offline', this.updateOnlineStatus);
    }
    onClick = ()=>{
        const { loadState, onLine, overThreshold } = this.state;
        if (!onLine) return;
        switch(loadState){
            case loading:
                if (overThreshold) this.cancel(true);
                return;
            case loaded:
                // nothing
                return;
            case initial:
            case error:
                this.load(true);
                return;
            default:
                throw new Error(`Wrong state: ${loadState}`);
        }
    };
    clear() {
        if (this.loader) {
            this.loader.cancel();
            this.loader = undefined;
        }
    }
    cancel(userTriggered) {
        if (loading !== this.state.loadState) return;
        this.clear();
        this.loadStateChange(initial, userTriggered);
    }
    loadStateChange(loadState, userTriggered, loadInfo = null) {
        this.setState({
            loadState,
            overThreshold: false,
            userTriggered: !!userTriggered,
            loadInfo
        });
    }
    load = (userTriggered)=>{
        const { loadState, url } = this.state;
        if (_helpers__rspack_import_4/* .ssr */.ht || loaded === loadState || loading === loadState) return;
        this.loadStateChange(loading, userTriggered);
        const { threshold } = this.props;
        const loader = this.props.loader === 'xhr' ? (0,_loaders__rspack_import_6/* .xhrLoader */.Eq)(url) : (0,_loaders__rspack_import_6/* .imageLoader */.R2)(url);
        loader.then(()=>{
            this.clear();
            this.loadStateChange(loaded, false);
        }).catch((e)=>{
            this.clear();
            if (e.status === 404) {
                this.loadStateChange(error, false, 404);
            } else {
                this.loadStateChange(error, false);
            }
        });
        if (threshold) {
            const timeoutLoader = (0,_loaders__rspack_import_6/* .timeout */.wR)(threshold);
            timeoutLoader.then(()=>{
                if (!this.loader) return;
                window.document.dispatchEvent(new CustomEvent('possiblySlowNetwork', {
                    detail: {
                        possiblySlowNetwork: true
                    }
                }));
                this.setState({
                    overThreshold: true
                });
                if (!this.state.userTriggered) this.cancel(true);
            });
            this.loader = (0,_loaders__rspack_import_6/* .combineCancel */.u2)(loader, timeoutLoader);
        } else {
            this.loader = loader;
        }
    };
    onEnter = ()=>{
        if (this.state.inViewport) return;
        this.setState({
            inViewport: true
        });
        const pickedSrc = (0,_helpers__rspack_import_4/* .selectSrc */.NA)({
            srcSet: this.props.srcSet,
            maxImageWidth: this.props.srcSet.length > 1 ? (0,_helpers__rspack_import_4/* .guessMaxImageWidth */.pR)(this.state.dimensions) // eslint-disable-line react/no-access-state-in-setstate
             : 0,
            supportsWebp: _helpers__rspack_import_4/* .supportsWebp */.J$
        });
        const { getUrl } = this.props;
        const url = getUrl ? getUrl(pickedSrc) : pickedSrc.src;
        const shouldAutoDownload = this.props.shouldAutoDownload({
            ...this.state,
            size: pickedSrc.size
        });
        this.setState({
            pickedSrc,
            shouldAutoDownload,
            url
        }, ()=>{
            if (shouldAutoDownload) this.load(false);
        });
    };
    onLeave = ()=>{
        if (this.state.loadState === loading && !this.state.userTriggered) {
            this.setState({
                inViewport: false
            });
            this.cancel(false);
        }
    };
    render() {
        const icon = this.props.getIcon(this.state);
        const message = this.props.getMessage(icon, this.state);
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_waypoint__rspack_import_2/* .Waypoint */.Y, {
            onEnter: this.onEnter,
            onLeave: this.onLeave,
            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_Media__rspack_import_3/* ["default"] */.A, {
                ...this.props,
                ...(0,_helpers__rspack_import_4/* .fallbackParams */.p2)(this.props),
                onClick: this.onClick,
                icon: icon,
                src: this.state.url || '',
                onDimensions: (dimensions)=>this.setState({
                        dimensions
                    }),
                message: message
            })
        });
    }
}


},
36490(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  Y: () => (Waypoint)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);

/*
This is a slimmed down copy of https://github.com/civiccc/react-waypoint
The MIT License (MIT)
Copyright (c) 2015 Brigade
 */ 
function addEventListener(element, type, listener, options) {
    element.addEventListener(type, listener, options);
    return ()=>element.removeEventListener(type, listener, options);
}
// Because waypoint may fire before the setState() updates due to batching
// queueMicrotask is a better option than setTimeout() or React.flushSync()
// See https://github.com/facebook/docusaurus/issues/11018
// See https://github.com/civiccc/react-waypoint/blob/0905ac5a073131147c96dd0694bd6f1b6ee8bc97/src/onNextTick.js
function subscribeMicrotask(callback) {
    let subscribed = true;
    queueMicrotask(()=>{
        if (subscribed) callback();
    });
    return ()=>subscribed = false;
}
function Waypoint(props) {
    return typeof window !== 'undefined' ? /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(WaypointClient, {
        ...props,
        children: props.children
    }) : props.children;
}
// TODO maybe replace this with IntersectionObserver later?
//  IntersectionObserver doesn't support the "fast scroll" thing
//  but it's probably not a big deal
class WaypointClient extends react__rspack_import_1.Component {
    static defaultProps = {
        topOffset: 0,
        bottomOffset: 0,
        onEnter () {},
        onLeave () {}
    };
    scrollableAncestor;
    previousPosition = null;
    unsubscribe;
    innerRef = /*#__PURE__*/ (0,react__rspack_import_1.createRef)();
    componentDidMount() {
        this.scrollableAncestor = findScrollableAncestor(this.innerRef.current);
        const unsubscribeScroll = addEventListener(this.scrollableAncestor, 'scroll', this._handleScroll, {
            passive: true
        });
        const unsubscribeResize = addEventListener(window, 'resize', this._handleScroll, {
            passive: true
        });
        const unsubscribeInitialScroll = subscribeMicrotask(()=>{
            this._handleScroll();
        });
        this.unsubscribe = ()=>{
            unsubscribeScroll();
            unsubscribeResize();
            unsubscribeInitialScroll();
        };
    }
    componentDidUpdate() {
        this._handleScroll();
    }
    componentWillUnmount() {
        this.unsubscribe?.();
    }
    _handleScroll = ()=>{
        const node = this.innerRef.current;
        const { topOffset, bottomOffset, onEnter, onLeave } = this.props;
        const bounds = getBounds({
            node: node,
            scrollableAncestor: this.scrollableAncestor,
            topOffset,
            bottomOffset
        });
        const currentPosition = getCurrentPosition(bounds);
        const previousPosition = this.previousPosition;
        this.previousPosition = currentPosition;
        if (previousPosition === currentPosition) {
            return;
        }
        if (currentPosition === 'inside') {
            onEnter();
        } else if (previousPosition === 'inside') {
            onLeave();
        }
        const isRapidScrollDown = previousPosition === 'below' && currentPosition === 'above';
        const isRapidScrollUp = previousPosition === 'above' && currentPosition === 'below';
        if (isRapidScrollDown || isRapidScrollUp) {
            onEnter();
            onLeave();
        }
    };
    render() {
        // @ts-expect-error: fix this implicit API
        return /*#__PURE__*/ react__rspack_import_1.cloneElement(this.props.children, {
            innerRef: this.innerRef
        });
    }
}
/**
 * Traverses up the DOM to find an ancestor container which has an overflow
 * style that allows for scrolling.
 *
 * @return {Object} the closest ancestor element with an overflow style that
 *   allows for scrolling. If none is found, the `window` object is returned
 *   as a fallback.
 */ function findScrollableAncestor(inputNode) {
    let node = inputNode;
    while(node.parentNode){
        // @ts-expect-error: it's fine
        node = node.parentNode;
        if (node === document.body) {
            // We've reached all the way to the root node.
            return window;
        }
        const style = window.getComputedStyle(node);
        const overflow = style.getPropertyValue('overflow-y') || style.getPropertyValue('overflow');
        if (overflow === 'auto' || overflow === 'scroll' || overflow === 'overlay') {
            return node;
        }
    }
    // A scrollable ancestor element was not found, which means that we need to
    // do stuff on window.
    return window;
}
function getBounds({ node, scrollableAncestor, topOffset, bottomOffset }) {
    const { top, bottom } = node.getBoundingClientRect();
    let contextHeight;
    let contextScrollTop;
    if (scrollableAncestor === window) {
        contextHeight = window.innerHeight;
        contextScrollTop = 0;
    } else {
        const ancestorElement = scrollableAncestor;
        contextHeight = ancestorElement.offsetHeight;
        contextScrollTop = ancestorElement.getBoundingClientRect().top;
    }
    const contextBottom = contextScrollTop + contextHeight;
    return {
        top,
        bottom,
        viewportTop: contextScrollTop + topOffset,
        viewportBottom: contextBottom - bottomOffset
    };
}
function getCurrentPosition(bounds) {
    if (bounds.viewportBottom - bounds.viewportTop === 0) {
        return 'invisible';
    }
    // top is within the viewport
    if (bounds.viewportTop <= bounds.top && bounds.top <= bounds.viewportBottom) {
        return 'inside';
    }
    // bottom is within the viewport
    if (bounds.viewportTop <= bounds.bottom && bounds.bottom <= bounds.viewportBottom) {
        return 'inside';
    }
    // top is above the viewport and bottom is below the viewport
    if (bounds.top <= bounds.viewportTop && bounds.viewportBottom <= bounds.bottom) {
        return 'inside';
    }
    if (bounds.viewportBottom < bounds.top) {
        return 'below';
    }
    if (bounds.top < bounds.viewportTop) {
        return 'above';
    }
    return 'invisible';
}


},
31671(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var _IdealImage__rspack_import_2 = __webpack_require__(64485);
/* import */ var _icons__rspack_import_3 = __webpack_require__(42324);
/* import */ var _theme__rspack_import_4 = __webpack_require__(7871);





const IdealImageWithDefaults = ({ icons: iconsProp = _icons__rspack_import_3/* ["default"] */.A, theme: themeProp = _theme__rspack_import_4/* ["default"] */.A, ...props })=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_IdealImage__rspack_import_2/* ["default"] */.A, {
        ...props,
        icons: iconsProp,
        theme: themeProp
    });
/* export default */ const __rspack_default_export = (IdealImageWithDefaults);


},
92049(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (Media)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var _composeStyle__rspack_import_3 = __webpack_require__(70085);
/* import */ var _constants__rspack_import_2 = __webpack_require__(92447);


// import PropTypes from 'prop-types'


const { load, loading, loaded, error, noicon, offline } = _constants__rspack_import_2/* .icons */.P;
class Media extends react__rspack_import_1.PureComponent {
    /*static propTypes = {
    /!** URL of the image *!/
    src: PropTypes.string.isRequired,
    /!** Width of the image in px *!/
    width: PropTypes.number.isRequired,
    /!** Height of the image in px *!/
    height: PropTypes.number.isRequired,
    placeholder: PropTypes.oneOfType([
      PropTypes.shape({
        /!** Solid color placeholder *!/
        color: PropTypes.string.isRequired,
      }),
      PropTypes.shape({
        /!**
         * [Low Quality Image Placeholder](https://github.com/zouhir/lqip)
         * [SVG-Based Image Placeholder](https://github.com/technopagan/sqip)
         * base64 encoded image of low quality
         *!/
        lqip: PropTypes.string.isRequired,
      }),
    ]).isRequired,
    /!** display icon *!/
    icon: PropTypes.oneOf([load, loading, loaded, error, noicon, offline])
      .isRequired,
    /!** Map of icons *!/
    icons: PropTypes.object.isRequired,
    /!** theme object - CSS Modules or React styles *!/
    theme: PropTypes.object.isRequired,
    /!** Alternative text *!/
    alt: PropTypes.string,
    /!** Color of the icon *!/
    iconColor: PropTypes.string,
    /!** Size of the icon in px *!/
    iconSize: PropTypes.number,
    /!** React's style attribute for root element of the component *!/
    style: PropTypes.object,
    /!** React's className attribute for root element of the component *!/
    className: PropTypes.string,
    /!** On click handler *!/
    onClick: PropTypes.func,
    /!** callback to get dimensions of the placeholder *!/
    onDimensions: PropTypes.func,
    /!** message to show below the icon *!/
    message: PropTypes.node,
    /!** reference for Waypoint *!/
    innerRef: PropTypes.func,
    /!** noscript image src *!/
    nsSrc: PropTypes.string,
    /!** noscript image srcSet *!/
    nsSrcSet: PropTypes.string,
  }*/ static defaultProps = {
        iconColor: '#fff',
        iconSize: 64
    };
    constructor(props){
        super(props);
        this.state = {
            isMounted: false
        };
    }
    componentDidMount() {
        this.setState({
            isMounted: true
        });
        if (this.props.onDimensions && this.dimensionElement) /* Firefox returns 0 for both clientWidth and clientHeight.
      To fix this we can check the parentNode's clientWidth and clientHeight as a fallback. */ this.props.onDimensions({
            width: this.dimensionElement.clientWidth || this.dimensionElement.parentNode.clientWidth,
            height: this.dimensionElement.clientHeight || this.dimensionElement.parentNode.clientHeight
        });
    }
    renderIcon(props) {
        const { icon, icons, iconColor: fill, iconSize: size, theme } = props;
        const iconToRender = icons[icon];
        if (!iconToRender) return null;
        const styleOrClass = (0,_composeStyle__rspack_import_3/* ["default"] */.A)({
            width: size + 100,
            height: size,
            color: fill
        }, theme.icon);
        return /*#__PURE__*/ react__rspack_import_1.createElement('div', styleOrClass, [
            /*#__PURE__*/ react__rspack_import_1.createElement(iconToRender, {
                fill,
                size,
                key: 'icon'
            }),
            /*#__PURE__*/ react__rspack_import_1.createElement('br', {
                key: 'br'
            }),
            this.props.message
        ]);
    }
    renderImage(props) {
        return props.icon === loaded ? /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
            ...(0,_composeStyle__rspack_import_3/* ["default"] */.A)(props.theme.img),
            src: props.src,
            alt: props.alt,
            width: props.width,
            height: props.height
        }) : /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
            ...(0,_composeStyle__rspack_import_3/* ["default"] */.A)(props.theme.img),
            width: props.width,
            height: props.height,
            ref: (ref)=>this.dimensionElement = ref
        });
    }
    renderNoscript(props) {
        // render noscript in ssr + hydration to avoid hydration mismatch error
        return this.state.isMounted ? null : /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("noscript", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                ...(0,_composeStyle__rspack_import_3/* ["default"] */.A)(props.theme.img, props.theme.noscript),
                src: props.nsSrc,
                srcSet: props.nsSrcSet,
                alt: props.alt,
                width: props.width,
                height: props.height
            })
        });
    }
    render() {
        const props = this.props;
        const { placeholder, theme } = props;
        let background;
        if (props.icon === loaded) {
            background = {};
        } else if (placeholder.lqip) {
            background = {
                backgroundImage: `url("${placeholder.lqip}")`
            };
        } else {
            background = {
                backgroundColor: placeholder.color
            };
        }
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
            ...(0,_composeStyle__rspack_import_3/* ["default"] */.A)(theme.placeholder, background, props.style, props.className),
            onClick: this.props.onClick,
            onKeyPress: this.props.onClick,
            ref: this.props.innerRef,
            children: [
                this.renderImage(props),
                this.renderNoscript(props),
                this.renderIcon(props)
            ]
        });
    }
}


},
70085(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/**
 * Composes styles and/or classes
 *
 * For classes it will concat them in in one string
 * and return as `className` property.
 * Alternative is https://github.com/JedWatson/classnames
 *
 * For objects it will merge them in one object
 * and return as `style` property.
 *
 * Usage:
 * Assume you have `theme` object, which can be css-module
 * or object or other css-in-js compatible with css-module
 *
 * <a {...compose(theme.link, theme.active, {color: "#000"})}>link</a>
 *
 * @returns {{className: string, style: object}} - params for React component
 */ /* export default */ const __rspack_default_export = ((...stylesOrClasses)=>{
    const classes = [];
    let style;
    for (const obj of stylesOrClasses){
        if (obj instanceof Object) {
            Object.assign(style || (style = {}), obj);
        } else if (obj === undefined || obj === false) {
        // ignore
        } else if (typeof obj === 'string') {
            classes.push(obj);
        } else {
            throw new Error(`Unexpected value ${obj}`);
        }
    }
    return {
        className: classes.length > 1 ? classes.join(' ') : classes[0],
        style
    };
});


},
92447(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  P: () => (icons),
  v: () => (loadStates)
});
const load = 'load';
const loading = 'loading';
const loaded = 'loaded';
const error = 'error';
const noicon = 'noicon';
const offline = 'offline';
const icons = {
    load,
    loading,
    loaded,
    error,
    noicon,
    offline
};
const initial = 'initial';
const loadStates = {
    initial,
    loading,
    loaded,
    error
};


},
90383(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  Cq: () => (bytesToSize),
  J$: () => (supportsWebp),
  KX: () => (nativeConnection),
  NA: () => (selectSrc),
  ht: () => (ssr),
  p2: () => (fallbackParams),
  pR: () => (guessMaxImageWidth)
});
const ssr = typeof window === 'undefined' || window.navigator.userAgent === 'ReactSnap';
const nativeConnection = !ssr && !!window.navigator.connection;
// export const getScreenWidth = () => {
//   if (ssr) return 0
//   const devicePixelRatio = window.devicePixelRatio || 1
//   const {screen} = window
//   const {width} = screen
//   // const angle = (screen.orientation && screen.orientation.angle) || 0
//   // return Math.max(width, height)
//   // const rotated = Math.floor(angle / 90) % 2 !== 0
//   // return (rotated ? height : width) * devicePixelRatio
//   return width * devicePixelRatio
// }
// export const screenWidth = getScreenWidth()
const guessMaxImageWidth = (dimensions, w)=>{
    if (ssr) return 0;
    // Default to window object but don't use window as a default
    // parameter so that this can be used on the server as well
    if (!w) {
        w = window;
    }
    const imgWidth = dimensions.width;
    const { screen } = w;
    const sWidth = screen.width;
    const sHeight = screen.height;
    const { documentElement } = document;
    const windowWidth = w.innerWidth || documentElement.clientWidth;
    const windowHeight = w.innerHeight || documentElement.clientHeight;
    const devicePixelRatio = w.devicePixelRatio || 1;
    const windowResized = sWidth > windowWidth;
    let result;
    if (windowResized) {
        const body = document.getElementsByTagName('body')[0];
        const scrollWidth = windowWidth - imgWidth;
        const isScroll = body.clientHeight > windowHeight || body.clientHeight > sHeight;
        if (isScroll && scrollWidth <= 15) {
            result = sWidth - scrollWidth;
        } else {
            result = imgWidth / windowWidth * sWidth;
        }
    } else {
        result = imgWidth;
    }
    return result * devicePixelRatio;
};
const bytesToSize = (bytes)=>{
    const sizes = [
        'Bytes',
        'KB',
        'MB',
        'GB',
        'TB'
    ];
    if (bytes === 0) return 'n/a';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    if (i === 0) return `${bytes} ${sizes[i]}`;
    return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
};
// async function supportsWebp() {
//   if (typeof createImageBitmap === 'undefined' || typeof fetch === 'undefined')
//     return false
//   return fetch(
//     'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=',
//   )
//     .then(response => response.blob())
//     .then(blob => createImageBitmap(blob).then(() => true, () => false))
// }
// let webp = undefined
// const webpPromise = supportsWebp()
// webpPromise.then(x => (webp = x))
// export default () => {
//   if (webp === undefined) return webpPromise
//   return {
//     then: callback => callback(webp),
//   }
// }
const detectWebpSupport = ()=>{
    if (ssr) return false;
    const elem = document.createElement('canvas');
    if (elem.getContext?.('2d')) {
        // was able or not to get WebP representation
        return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    } else {
        // very old browser like IE 8, canvas not supported
        return false;
    }
};
const supportsWebp = detectWebpSupport();
const isWebp = (x)=>x.format === 'webp' || x.src?.match(/\.webp($|\?.*)/i);
// eslint-disable-next-line no-shadow
const selectSrc = ({ srcSet, maxImageWidth, supportsWebp })=>{
    if (srcSet.length === 0) throw new Error('Need at least one item in srcSet');
    let supportedFormat, width;
    if (supportsWebp) {
        supportedFormat = srcSet.filter(isWebp);
        if (supportedFormat.length === 0) supportedFormat = srcSet;
    } else {
        supportedFormat = srcSet.filter((x)=>!isWebp(x));
        if (supportedFormat.length === 0) throw new Error('Need at least one supported format item in srcSet');
    }
    let widths = supportedFormat.filter((x)=>x.width >= maxImageWidth);
    if (widths.length === 0) {
        widths = supportedFormat;
        width = Math.max.apply(null, widths.map((x)=>x.width));
    } else {
        width = Math.min.apply(null, widths.map((x)=>x.width));
    }
    return supportedFormat.filter((x)=>x.width === width)[0];
};
const fallbackParams = ({ srcSet, getUrl })=>{
    if (!ssr) return {};
    const notWebp = srcSet.filter((x)=>!isWebp(x));
    const first = notWebp[0];
    return {
        nsSrcSet: notWebp.map((x)=>`${getUrl ? getUrl(x) : x.src} ${x.width}w`).join(','),
        nsSrc: getUrl ? getUrl(first) : first.src,
        ssr
    };
};


},
42324(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var _Icon_Download__rspack_import_0 = __webpack_require__(93524);
/* import */ var _Icon_Offline__rspack_import_1 = __webpack_require__(46973);
/* import */ var _Icon_Warning__rspack_import_2 = __webpack_require__(21190);
/* import */ var _Icon_Loading__rspack_import_3 = __webpack_require__(36062);
/* import */ var _constants__rspack_import_4 = __webpack_require__(92447);





const { load, loading, loaded, error, noicon, offline } = _constants__rspack_import_4/* .icons */.P;
/* export default */ const __rspack_default_export = ({
    [load]: _Icon_Download__rspack_import_0/* ["default"] */.A,
    [loading]: _Icon_Loading__rspack_import_3/* ["default"] */.A,
    [loaded]: null,
    [error]: _Icon_Warning__rspack_import_2/* ["default"] */.A,
    [noicon]: null,
    [offline]: _Icon_Offline__rspack_import_1/* ["default"] */.A
});


},
55454(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  Eq: () => (xhrLoader),
  R2: () => (imageLoader),
  u2: () => (combineCancel),
  wR: () => (timeout)
});
/* import */ var _unfetch__rspack_import_0 = __webpack_require__(47455);
// There is an issue with cancelable interface
// It is not obvious that
// `image(src)` has `cancel` function
// but `image(src).then()` doesn't

/**
 * returns new "promise" with cancel function combined
 *
 * @param {Promise} p1 - first "promise" with cancel
 * @param {Promise} p2 - second "promise" with cancel
 * @returns {Promise} - new "promise" with cancel
 */ const combineCancel = (p1, p2)=>{
    if (!p2) return p1;
    const result = p1.then((x)=>x, (x)=>x);
    result.cancel = ()=>{
        p1.cancel();
        p2.cancel();
    };
    return result;
};
const timeout = (threshold)=>{
    let timerId;
    const result = new Promise((resolve)=>{
        timerId = setTimeout(resolve, threshold);
    });
    result.cancel = ()=>{
        // there is a bug with cancel somewhere in the code
        // if (!timerId) throw new Error('Already canceled')
        clearTimeout(timerId);
        timerId = undefined;
    };
    return result;
};
// Caveat: image loader can not cancel download in some browsers
const imageLoader = (src)=>{
    let img = new Image();
    const result = new Promise((resolve, reject)=>{
        img.onload = resolve;
        // eslint-disable-next-line no-multi-assign
        img.onabort = img.onerror = ()=>reject({});
        img.src = src;
    });
    result.cancel = ()=>{
        if (!img) throw new Error('Already canceled');
        // eslint-disable-next-line no-multi-assign
        img.onload = img.onabort = img.onerror = undefined;
        img.src = '';
        img = undefined;
    };
    return result;
};
// Caveat: XHR loader can cause errors because of 'Access-Control-Allow-Origin'
// Caveat: we still need imageLoader to do actual decoding,
// but if images are uncachable this will lead to two requests
const xhrLoader = (url, options)=>{
    let controller = new _unfetch__rspack_import_0/* .UnfetchAbortController */.a();
    const signal = controller.signal;
    const result = new Promise((resolve, reject)=>(0,_unfetch__rspack_import_0/* .unfetch */.W)(url, {
            ...options,
            signal
        }).then((response)=>{
            if (response.ok) {
                response.blob().then(()=>imageLoader(url)).then(resolve);
            } else {
                reject({
                    status: response.status
                });
            }
        }, reject));
    result.cancel = ()=>{
        if (!controller) throw new Error('Already canceled');
        controller.abort();
        controller = undefined;
    };
    return result;
}; // Caveat: AbortController only supported in Chrome 66+
 // Caveat: we still need imageLoader to do actual decoding,
 // but if images are uncachable this will lead to two requests
 // export const fetchLoader = (url, options) => {
 //   let controller = new AbortController()
 //   const signal = controller.signal
 //   const result = new Promise((resolve, reject) =>
 //     fetch(url, {...options, signal}).then(response => {
 //       if (response.ok) {
 //         options && options.onMeta && options.onMeta(response.headers)
 //         response
 //           .blob()
 //           .then(() => imageLoader(url))
 //           .then(resolve)
 //       } else {
 //         reject({status: response.status})
 //       }
 //     }, reject),
 //   )
 //   result.cancel = () => {
 //     if (!controller) throw new Error('Already canceled')
 //     controller.abort()
 //     controller = undefined
 //   }
 //   return result
 // }


},
7871(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ({
    placeholder: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'relative'
    },
    img: {
        width: '100%',
        height: 'auto',
        maxWidth: '100%',
        /* TODO: fix bug in styles */ marginBottom: '-4px'
    },
    icon: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center'
    },
    noscript: {
        position: 'absolute',
        top: 0,
        left: 0
    }
});


},
47455(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  W: () => (unfetch),
  a: () => (UnfetchAbortController)
});
class UnfetchAbortController {
    constructor(){
        this.signal = {
            onabort: ()=>{}
        };
        this.abort = ()=>this.signal.onabort();
    }
}
// modified version of https://github.com/developit/unfetch
// - ponyfill instead of polyfill
// - add support for AbortController
const unfetch = (url, options)=>{
    options = options || {};
    return new Promise((resolve, reject)=>{
        const request = new XMLHttpRequest();
        request.open(options.method || 'get', url, true);
        // eslint-disable-next-line guard-for-in
        for(const i in options.headers){
            request.setRequestHeader(i, options.headers[i]);
        }
        request.withCredentials = options.credentials === 'include';
        request.onload = ()=>{
            resolve(response());
        };
        request.onerror = reject;
        if (options.signal) options.signal.onabort = ()=>{
            // eslint-disable-next-line no-multi-assign
            request.onerror = request.onload = undefined;
            request.abort();
        };
        request.send(options.body);
        function response() {
            const keys = [];
            const all = [];
            const headers = {};
            let header;
            request.getAllResponseHeaders().replace(/^(.*?):\s*?([\s\S]*?)$/gm, (m, key, value)=>{
                keys.push(key = key.toLowerCase());
                all.push([
                    key,
                    value
                ]);
                header = headers[key];
                headers[key] = header ? `${header},${value}` : value;
            });
            return {
                // eslint-disable-next-line no-bitwise
                ok: (request.status / 100 | 0) === 2,
                status: request.status,
                statusText: request.statusText,
                url: request.responseURL,
                clone: response,
                text: ()=>Promise.resolve(request.responseText),
                json: ()=>Promise.resolve(request.responseText).then(JSON.parse),
                blob: ()=>Promise.resolve(new Blob([
                        request.response
                    ])),
                headers: {
                    keys: ()=>keys,
                    entries: ()=>all,
                    get: (n)=>headers[n.toLowerCase()],
                    has: (n)=>n.toLowerCase() in headers
                }
            };
        }
    });
};


},
14773(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var _components_IdealImageWithDefaults__rspack_import_0 = __webpack_require__(31671);

/* export default */ const __rspack_default_export = (_components_IdealImageWithDefaults__rspack_import_0/* ["default"] */.A);


},
93743(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (BlogSection)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _docusaurus_Link__rspack_import_1 = __webpack_require__(59078);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(46218);
/* import */ var _docusaurus_useGlobalData__rspack_import_3 = __webpack_require__(58364);
/* import */ var _theme_IdealImage__rspack_import_4 = __webpack_require__(23218);
/* import */ var _Section__rspack_import_5 = __webpack_require__(9419);






const chunk = (arr, size)=>Array.from({
        length: Math.ceil(arr.length / size)
    }, (_, i)=>arr.slice(i * size, i * size + size));
const BLOG_POSTS_COUNT = 6;
const BLOG_POSTS_PER_ROW = 2;
function BlogItem({ post }) {
    const { metadata: { permalink, frontMatter, title, description } } = post;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
        className: "card bg-blog flex w-full shadow-blog",
        children: [
            frontMatter.image && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_1/* ["default"] */.A, {
                href: permalink,
                className: "block max-h-[240px] w-full overflow-hidden",
                tabIndex: -1,
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_IdealImage__rspack_import_4/* ["default"] */.A, {
                    src: frontMatter?.image,
                    alt: title,
                    img: ""
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "card__body",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h3", {
                        className: "text-base leading-relaxed",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_1/* ["default"] */.A, {
                            href: permalink,
                            className: "text-text underline-offset-4 hover:underline",
                            children: title
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        className: "mb-0 text-sm leading-relaxed text-secondary",
                        children: description
                    })
                ]
            })
        ]
    }, permalink);
}
function BlogSection() {
    const blogData = (0,_docusaurus_useGlobalData__rspack_import_3/* .usePluginData */.P_)('docusaurus-plugin-content-blog');
    const posts = chunk(blogData.posts.slice(0, BLOG_POSTS_COUNT), BLOG_POSTS_PER_ROW);
    if (blogData.postNum === 0) {
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: "作者還沒開始寫博文哦..."
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_Section__rspack_import_5/* .Section */.w, {
        title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
            id: "homepage.blog.title",
            children: "近期博客"
        }),
        icon: "ri:quill-pen-line",
        href: "/blog",
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
            className: "grid grid-cols-1 gap-6 md:grid-cols-3",
            children: posts.map((postGroup, index)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("ul", {
                    className: "m-0 flex min-w-0 list-none flex-col gap-6 p-0",
                    children: postGroup.map((post)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(BlogItem, {
                            post: post
                        }, post.id))
                }, index))
        })
    });
}


},
35874(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (Hero)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var motion_react__rspack_import_5 = __webpack_require__(48130);
/* import */ var motion_react__rspack_import_6 = __webpack_require__(92396);
/* import */ var _docusaurus_Translate__rspack_import_1 = __webpack_require__(46218);
/* import */ var _docusaurus_useBaseUrl__rspack_import_2 = __webpack_require__(66025);
/* import */ var _site_src_components_SocialLinks__rspack_import_3 = __webpack_require__(52370);
/* import */ var _styles_module_css__rspack_import_4 = __webpack_require__(92592);
/* import */ var _styles_module_css__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_4);






const variants = {
    visible: (i)=>({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: [
                    0.16,
                    1,
                    0.3,
                    1
                ],
                delay: i * 0.1
            }
        }),
    hidden: {
        opacity: 0,
        y: 30
    }
};
function Name() {
    const reduceMotion = (0,motion_react__rspack_import_5/* .useReducedMotion */.I)();
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(motion_react__rspack_import_6/* .motion.h1 */.P.h1, {
        id: "hero-title",
        className: (_styles_module_css__rspack_import_4_default().hero_text),
        custom: 1,
        initial: reduceMotion ? false : 'hidden',
        animate: "visible",
        variants: variants,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_1/* ["default"] */.A, {
                id: "homepage.hero.greet",
                children: "你好! 我是"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                className: (_styles_module_css__rspack_import_4_default().name),
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_1/* ["default"] */.A, {
                    id: "homepage.hero.name",
                    children: " Aris_QwQ"
                })
            })
        ]
    });
}
function Hero() {
    const reduceMotion = (0,motion_react__rspack_import_5/* .useReducedMotion */.I)();
    const avatar = (0,_docusaurus_useBaseUrl__rspack_import_2/* ["default"] */.Ay)('/img/avatar.png');
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("section", {
        className: (_styles_module_css__rspack_import_4_default().hero),
        "aria-labelledby": "hero-title",
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
            className: (_styles_module_css__rspack_import_4_default().intro),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                    className: (_styles_module_css__rspack_import_4_default().avatar),
                    src: avatar,
                    width: 100,
                    height: 100,
                    alt: ""
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(Name, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(motion_react__rspack_import_6/* .motion.p */.P.p, {
                    custom: 2,
                    initial: reduceMotion ? false : 'hidden',
                    animate: "visible",
                    variants: variants,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_1/* ["default"] */.A, {
                        id: "homepage.hero.text",
                        children: "一隻 OIer，但是沒有什麼出息。"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(motion_react__rspack_import_6/* .motion.div */.P.div, {
                    className: (_styles_module_css__rspack_import_4_default().socials),
                    custom: 3,
                    initial: reduceMotion ? false : 'hidden',
                    animate: "visible",
                    variants: variants,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_site_src_components_SocialLinks__rspack_import_3/* ["default"] */.A, {})
                })
            ]
        })
    });
}


},
9419(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  w: () => (Section)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _docusaurus_Link__rspack_import_1 = __webpack_require__(59078);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(46218);
/* import */ var _iconify_react__rspack_import_3 = __webpack_require__(77533);




function Section({ title, icon, href, children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
        className: "py-6 max-lg:mx-4",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "mt-8 mb-4 inline-flex w-full items-center justify-between md:mt-6",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("h2", {
                        className: "m-0 inline-flex items-center gap-2 text-xl font-semibold",
                        children: [
                            icon && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_iconify_react__rspack_import_3/* .Icon */.In, {
                                icon: icon
                            }),
                            title
                        ]
                    }),
                    href && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Link__rspack_import_1/* ["default"] */.A, {
                        href: href,
                        className: "group/link inline-flex min-h-11 items-center justify-center text-sm text-secondary underline-offset-4 hover:text-text hover:underline",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                                id: "homepage.lookMore",
                                children: "查看更多"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_iconify_react__rspack_import_3/* .Icon */.In, {
                                icon: "ri:arrow-right-s-line",
                                className: "transition group-hover/link:translate-x-1"
                            })
                        ]
                    })
                ]
            }),
            children
        ]
    });
}


},
24445(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Home)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _docusaurus_useDocusaurusContext__rspack_import_1 = __webpack_require__(40266);
/* import */ var _theme_Layout__rspack_import_2 = __webpack_require__(1419);
/* import */ var _components_landing_BlogSection__rspack_import_3 = __webpack_require__(93743);
/* import */ var _components_landing_Hero__rspack_import_4 = __webpack_require__(35874);
/* import */ var _index_module_css__rspack_import_5 = __webpack_require__(51057);
/* import */ var _index_module_css__rspack_import_5_default = /*#__PURE__*/__webpack_require__.n(_index_module_css__rspack_import_5);






function Home() {
    const { siteConfig: { customFields, tagline } } = (0,_docusaurus_useDocusaurusContext__rspack_import_1/* ["default"] */.A)();
    const { description } = customFields;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Layout__rspack_import_2/* ["default"] */.A, {
        title: tagline,
        description: description,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("main", {
            className: (_index_module_css__rspack_import_5_default().home),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_landing_Hero__rspack_import_4/* ["default"] */.A, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                    className: "relative",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "mx-auto max-w-7xl pb-12 lg:px-8",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_components_landing_BlogSection__rspack_import_3/* ["default"] */.A, {})
                    })
                })
            ]
        })
    });
}


},

};
;