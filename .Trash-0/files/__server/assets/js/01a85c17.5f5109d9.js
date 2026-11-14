exports.ids = ["786"];
exports.modules = {
92271(module) {
// Exports
module.exports = {
	"control": `control_Wopi`,
	"selection": `selection_yruk`
};


},
34348(module) {
// Exports
module.exports = {
	"page": `page_MlxY`,
	"title": `title_CMNi`,
	"container": `container_G1pp`,
	"header": `header_oIww`,
	"description": `description_xk5y`,
	"textLink": `textLink_rKoC`
};


},
5189(module) {
// Exports
module.exports = {
	"toolbar": `toolbar_Q96X`,
	"search": `search_JivK`,
	"result": `result_CbO5`,
	"tagList": `tagList_XeLL`,
	"tagLink": `tagLink_sEmg`,
	"tagCount": `tagCount_T9lH`,
	"groups": `groups_yArG`,
	"group": `group_ybMi`,
	"empty": `empty_I27q`
};


},
70149(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  b: () => (translateTagsPageTitle)
});
/* import */ var _docusaurus_Translate__rspack_import_0 = __webpack_require__(46218);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
const translateTagsPageTitle = ()=>(0,_docusaurus_Translate__rspack_import_0/* .translate */.T)({
        id: 'theme.tags.tagsPageTitle',
        message: 'Tags',
        description: 'The title of the tag list page'
    });
function getTagLetter(tag) {
    return tag[0].toUpperCase();
}
/**
 * Takes a list of tags (as provided by the content plugins), and groups them by
 * their initials.
 */ function listTagsByLetters(tags) {
    const groups = {};
    Object.values(tags).forEach((tag)=>{
        const initial = getTagLetter(tag.label);
        groups[initial] ??= [];
        groups[initial].push(tag);
    });
    return Object.entries(groups)// Sort letters
    .sort(([letter1], [letter2])=>letter1.localeCompare(letter2)).map(([letter, letterTags])=>{
        // Sort tags inside a letter
        const sortedTags = letterTags.sort((tag1, tag2)=>tag1.label.localeCompare(tag2.label));
        return {
            letter,
            tags: sortedTags
        };
    });
} //# sourceMappingURL=tagsUtils.js.map


},
64649(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (SegmentedControl)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _styles_module_css__rspack_import_1 = __webpack_require__(92271);
/* import */ var _styles_module_css__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_1);


function SegmentedControl({ label, value, options, onChange, controls }) {
    const selected = options.findIndex((option)=>option.value === value);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        className: (_styles_module_css__rspack_import_1_default().control),
        role: "group",
        "aria-label": label,
        style: {
            '--segments': options.length
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                className: (_styles_module_css__rspack_import_1_default().selection),
                "aria-hidden": "true",
                style: {
                    transform: `translateX(${selected * 100}%)`
                }
            }),
            options.map((option)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("button", {
                    type: "button",
                    onClick: ()=>onChange(option.value),
                    "aria-pressed": value === option.value,
                    "aria-controls": controls,
                    children: [
                        option.icon,
                        option.label
                    ]
                }, option.value))
        ]
    });
}


},
95139(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (BlogTagsListPage)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _docusaurus_Link__rspack_import_1 = __webpack_require__(59078);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(46218);
/* import */ var _docusaurus_theme_common__rspack_import_9 = __webpack_require__(70149);
/* import */ var _docusaurus_theme_common__rspack_import_10 = __webpack_require__(8961);
/* import */ var _docusaurus_theme_common__rspack_import_11 = __webpack_require__(94630);
/* import */ var _site_src_components_SegmentedControl__rspack_import_3 = __webpack_require__(64649);
/* import */ var _site_src_css_collection_module_css__rspack_import_4 = __webpack_require__(34348);
/* import */ var _site_src_css_collection_module_css__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(_site_src_css_collection_module_css__rspack_import_4);
/* import */ var _theme_Layout__rspack_import_5 = __webpack_require__(1419);
/* import */ var _theme_SearchMetadata__rspack_import_6 = __webpack_require__(45278);
/* import */ var react__rspack_import_7 = __webpack_require__(58101);
/* import */ var _styles_module_css__rspack_import_8 = __webpack_require__(5189);
/* import */ var _styles_module_css__rspack_import_8_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_8);










function compareLabels(left, right) {
    const a = left.toLowerCase();
    const b = right.toLowerCase();
    return a < b ? -1 : a > b ? 1 : 0;
}
function getGroup(label) {
    const letter = label.charAt(0).toUpperCase();
    if (/^[A-Z]$/.test(letter)) return letter;
    if (/^[\u3400-\u9fff]$/.test(letter)) return '中文';
    return '#';
}
function TagLinks({ tags }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("ul", {
        className: (_styles_module_css__rspack_import_8_default().tagList),
        children: tags.map((tag)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Link__rspack_import_1/* ["default"] */.A, {
                    to: tag.permalink,
                    className: (_styles_module_css__rspack_import_8_default().tagLink),
                    title: tag.description,
                    "aria-label": (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
                        id: 'blog.tags.link',
                        message: '查看「{tag}」的相關文章，共 {count} 篇'
                    }, {
                        tag: tag.label,
                        count: tag.count
                    }),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                            children: tag.label
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                            className: (_styles_module_css__rspack_import_8_default().tagCount),
                            "aria-hidden": "true",
                            children: tag.count
                        })
                    ]
                })
            }, tag.permalink))
    });
}
function BlogTagsListPage({ tags }) {
    const title = (0,_docusaurus_theme_common__rspack_import_9/* .translateTagsPageTitle */.b)();
    const description = (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
        id: 'blog.tags.description',
        message: '從一個關鍵詞，找到感興趣的內容。'
    });
    const [view, setView] = (0,react__rspack_import_7.useState)('all');
    const [query, setQuery] = (0,react__rspack_import_7.useState)('');
    const search = (0,react__rspack_import_7.useRef)(null);
    const normalizedQuery = query.trim().toLowerCase();
    const filtered = tags.filter((tag)=>tag.label.toLowerCase().includes(normalizedQuery)).sort((left, right)=>compareLabels(left.label, right.label));
    const groups = new Map();
    filtered.forEach((tag)=>{
        const key = getGroup(tag.label);
        const group = groups.get(key) ?? [];
        group.push(tag);
        groups.set(key, group);
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common__rspack_import_10/* .HtmlClassNameProvider */.e3, {
        className: `${_docusaurus_theme_common__rspack_import_11/* .ThemeClassNames.wrapper.blogPages */.G.wrapper.blogPages} ${_docusaurus_theme_common__rspack_import_11/* .ThemeClassNames.page.blogTagsListPage */.G.page.blogTagsListPage}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_theme_Layout__rspack_import_5/* ["default"] */.A, {
            title: title,
            description: description,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_SearchMetadata__rspack_import_6/* ["default"] */.A, {
                    tag: "blog_tags_list"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("main", {
                    className: (_site_src_css_collection_module_css__rspack_import_4_default().page),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: (_site_src_css_collection_module_css__rspack_import_4_default().container),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("header", {
                                className: (_site_src_css_collection_module_css__rspack_import_4_default().header),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h1", {
                                                className: (_site_src_css_collection_module_css__rspack_import_4_default().title),
                                                children: title
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                className: (_site_src_css_collection_module_css__rspack_import_4_default().description),
                                                children: description
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Link__rspack_import_1/* ["default"] */.A, {
                                        to: "/blog",
                                        className: (_site_src_css_collection_module_css__rspack_import_4_default().textLink),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                "aria-hidden": "true",
                                                children: "←"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                                                id: "blog.tags.back",
                                                children: "返回博客"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: (_styles_module_css__rspack_import_8_default().toolbar),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: (_styles_module_css__rspack_import_8_default().search),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("label", {
                                                className: "sr-only",
                                                htmlFor: "blog-tag-search",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                                                    id: "blog.tags.search",
                                                    children: "搜索標籤"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("input", {
                                                ref: search,
                                                id: "blog-tag-search",
                                                type: "search",
                                                value: query,
                                                onChange: (event)=>setQuery(event.target.value),
                                                placeholder: (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
                                                    id: 'blog.tags.search.placeholder',
                                                    message: '輸入標籤名稱…'
                                                }),
                                                "aria-controls": "blog-tags"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                        className: (_styles_module_css__rspack_import_8_default().result),
                                        role: "status",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                                            id: "blog.tags.count",
                                            values: {
                                                count: filtered.length
                                            },
                                            children: '{count} 個標籤'
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_site_src_components_SegmentedControl__rspack_import_3/* ["default"] */.A, {
                                        label: (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
                                            id: 'blog.tags.view',
                                            message: '標籤顯示方式'
                                        }),
                                        value: view,
                                        onChange: setView,
                                        controls: "blog-tags",
                                        options: [
                                            {
                                                value: 'all',
                                                label: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                                                    id: "blog.tags.all",
                                                    children: "全部標籤"
                                                })
                                            },
                                            {
                                                value: 'letters',
                                                label: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                                                    id: "blog.tags.letters",
                                                    children: "按字母"
                                                })
                                            }
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                id: "blog-tags",
                                children: filtered.length === 0 ? /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                    className: (_styles_module_css__rspack_import_8_default().empty),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                                                id: "blog.tags.empty",
                                                children: "沒有找到匹配的標籤"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("button", {
                                            type: "button",
                                            onClick: ()=>{
                                                setQuery('');
                                                search.current?.focus();
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                                                id: "blog.tags.clear",
                                                children: "清除搜索"
                                            })
                                        })
                                    ]
                                }) : view === 'all' ? /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(TagLinks, {
                                    tags: filtered
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                    className: (_styles_module_css__rspack_import_8_default().groups),
                                    children: Array.from(groups, ([letter, group])=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("section", {
                                            className: (_styles_module_css__rspack_import_8_default().group),
                                            "aria-labelledby": `tag-group-${letter}`,
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                                                    id: `tag-group-${letter}`,
                                                    children: letter === '中文' ? /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                                                        id: "blog.tags.chinese",
                                                        children: "中文"
                                                    }) : letter
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(TagLinks, {
                                                    tags: group
                                                })
                                            ]
                                        }, letter))
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}


},

};
;