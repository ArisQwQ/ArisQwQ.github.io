exports.ids = ["74"];
exports.modules = {
19144(module) {
// Exports
module.exports = {
	"admonition": `admonition_IR7P`,
	"admonitionHeading": `admonitionHeading_kAub`,
	"admonitionIcon": `admonitionIcon_OBob`,
	"admonitionContent": `admonitionContent_QYvi`
};


},
88964(module) {
// Exports
module.exports = {
	"backToTopButton": `backToTopButton_f2NH`,
	"backToTopButtonShow": `backToTopButtonShow_mwga`
};


},
31761(module) {
// Exports
module.exports = {
	"details": `details_e72V`
};


},
55386(module) {
// Exports
module.exports = {
	"img": `img_NZGw`
};


},
47298(module) {
// Exports
module.exports = {
	"containsTaskList": `containsTaskList_Bkah`
};


},
97777(module) {
// Exports
module.exports = {
	"details": `details_TdIR`,
	"isBrowser": `isBrowser_BuUd`,
	"collapsibleContent": `collapsibleContent_oFdx`
};


},
39278(module) {
// Exports
module.exports = {
	"blogPostFooterDetailsFull": `blogPostFooterDetailsFull_Wr5y`,
	"blogPostInfo": `blogPostInfo_k7sy`,
	"blogPostInfoTags": `blogPostInfoTags_W9UY`,
	"blogPostAuthor": `blogPostAuthor_OLeU`,
	"blogPostDetailsFull": `blogPostDetailsFull_rPUK`,
	"divider": `divider_nSib`
};


},
93483(module) {
// Exports
module.exports = {
	"titleLink": `titleLink_BX2g`
};


},
88161(module) {
// Exports
module.exports = {
	"summary": `summary_gdlI`,
	"title": `title_Q1j0`,
	"content": `content_DcDM`
};


},
34156(module) {
// Exports
module.exports = {
	"sidebar": `sidebar_brwN`,
	"sidebarItemTitle": `sidebarItemTitle_r4Q1`,
	"sidebarItemList": `sidebarItemList_QwSx`,
	"sidebarItem": `sidebarItem_lnhn`,
	"sidebarItemLink": `sidebarItemLink_yNGZ`,
	"sidebarItemLinkActive": `sidebarItemLinkActive_oSRm`,
	"sidebarAside": `sidebarAside_I1hx`,
	"backButton": `backButton_MCHS`,
	"sidebarTitle": `sidebarTitle_hPVI`,
	"sidebarContent": `sidebarContent_o34X`
};


},
60318(module) {
// Exports
module.exports = {
	"yearGroupHeading": `yearGroupHeading_fvTq`
};


},
28571(module) {
// Exports
module.exports = {
	"codeBlockContainer": `codeBlockContainer_APcc`
};


},
16921(module) {
// Exports
module.exports = {
	"codeBlockContent": `codeBlockContent_m3Ux`,
	"codeBlockTitle": `codeBlockTitle_P25_`,
	"codeBlock": `codeBlock_qGQc`,
	"codeBlockStandalone": `codeBlockStandalone_zC50`,
	"codeBlockLines": `codeBlockLines_p187`,
	"codeBlockLinesWithNumbering": `codeBlockLinesWithNumbering_OFgW`,
	"buttonGroup": `buttonGroup_6DOT`
};


},
27101(module) {
// Exports
module.exports = {
	"copyButtonCopied": `copyButtonCopied__QnY`,
	"copyButtonIcons": `copyButtonIcons_FhaS`,
	"copyButtonIcon": `copyButtonIcon_phi_`,
	"copyButtonSuccessIcon": `copyButtonSuccessIcon_FfTR`
};


},
63056(module) {
// Exports
module.exports = {
	"codeLine": `codeLine_iPqp`,
	"codeLineNumber": `codeLineNumber_F4P7`,
	"codeLineContent": `codeLineContent_pOih`
};


},
67326(module) {
// Exports
module.exports = {
	"wordWrapButtonIcon": `wordWrapButtonIcon_iowe`,
	"wordWrapButtonEnabled": `wordWrapButtonEnabled_gY8A`
};


},
74115(module) {
// Exports
module.exports = {
	"tableOfContents": `tableOfContents_jeP5`,
	"docItemContainer": `docItemContainer_hgFs`,
	"hr": `hr_UhE0`,
	"percent": `percent_H6RK`
};


},
77581(module) {
// Exports
module.exports = {
	"tag": `tag_d0Lz`,
	"tagRegular": `tagRegular_bmnp`,
	"tagWithCount": `tagWithCount_vddX`
};


},
34809(module, exports) {
/**
 * @param {string} string    The string to parse
 * @returns {Array<number>}  Returns an energetic array.
 */
function parsePart(string) {
  let res = [];
  let m;

  for (let str of string.split(",").map((str) => str.trim())) {
    // just a number
    if (/^-?\d+$/.test(str)) {
      res.push(parseInt(str, 10));
    } else if (
      (m = str.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/))
    ) {
      // 1-5 or 1..5 (equivalent) or 1...5 (doesn't include 5)
      let [_, lhs, sep, rhs] = m;

      if (lhs && rhs) {
        lhs = parseInt(lhs);
        rhs = parseInt(rhs);
        const incr = lhs < rhs ? 1 : -1;

        // Make it inclusive by moving the right 'stop-point' away by one.
        if (sep === "-" || sep === ".." || sep === "\u2025") rhs += incr;

        for (let i = lhs; i !== rhs; i += incr) res.push(i);
      }
    }
  }

  return res;
}

exports["default"] = parsePart;
module.exports = parsePart;


},
11694(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (BrowserOnly)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var _docusaurus_useIsBrowser__rspack_import_2 = __webpack_require__(78095);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

// Similar comp to the one described here:
// https://www.joshwcomeau.com/react/the-perils-of-rehydration/#abstractions
function BrowserOnly({ children, fallback }) {
    const isBrowser = (0,_docusaurus_useIsBrowser__rspack_import_2/* ["default"] */.A)();
    if (isBrowser) {
        if (typeof children !== 'function' && "production" === 'development') {}
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: children?.()
        });
    }
    return fallback ?? null;
}


},
89986(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /* export default */ const __rspack_default_export = (()=>null);


},
75714(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  e7: () => (useBlogPost),
  "in": () => (BlogPostProvider)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var _docusaurus_theme_common_internal__rspack_import_3 = __webpack_require__(25919);
/* import */ var _docusaurus_useRouteContext__rspack_import_2 = __webpack_require__(53091);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function useBlogMetadata() {
    const routeContext = useRouteContext();
    const blogMetadata = routeContext?.data?.blogMetadata;
    if (!blogMetadata) {
        throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");
    }
    return blogMetadata;
}
const Context = /*#__PURE__*/ react__rspack_import_1.createContext(null);
/**
 * Note: we don't use `PropBlogPostContent` as context value on purpose.
 * Metadata is currently stored inside the MDX component, but we may want to
 * change that in the future.
 */ function useContextValue({ content, isBlogPostPage }) {
    return (0,react__rspack_import_1.useMemo)(()=>({
            metadata: content.metadata,
            frontMatter: content.frontMatter,
            assets: content.assets,
            toc: content.toc,
            isBlogPostPage
        }), [
        content,
        isBlogPostPage
    ]);
}
/**
 * This is a very thin layer around the `content` received from the MDX loader.
 * It provides metadata about the blog post to the children tree.
 */ function BlogPostProvider({ children, content, isBlogPostPage = false }) {
    const contextValue = useContextValue({
        content,
        isBlogPostPage
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(Context.Provider, {
        value: contextValue,
        children: children
    });
}
/**
 * Returns the data of the currently browsed blog post. Gives access to
 * front matter, metadata, TOC, etc.
 * When swizzling a low-level component (e.g. the "Edit this page" link)
 * and you need some extra metadata, you don't have to drill the props
 * all the way through the component tree: simply use this hook instead.
 */ function useBlogPost() {
    const blogPost = (0,react__rspack_import_1.useContext)(Context);
    if (blogPost === null) {
        throw new _docusaurus_theme_common_internal__rspack_import_3/* .ReactContextError */.dV('BlogPostProvider');
    }
    return blogPost;
}


},
70740(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  Gx: () => (/* reexport safe */ _sidebarUtils__rspack_import_2.Gx),
  Ki: () => (/* reexport safe */ _sidebarUtils__rspack_import_2.Ki),
  OU: () => (/* reexport safe */ _sidebarUtils__rspack_import_2.OU),
  e7: () => (/* reexport safe */ _contexts__rspack_import_0.e7),
  "in": () => (/* reexport safe */ _contexts__rspack_import_0["in"])
});
/* import */ var _contexts__rspack_import_0 = __webpack_require__(75714);
/* import */ var _structuredDataUtils__rspack_import_1 = __webpack_require__(319);
/* import */ var _sidebarUtils__rspack_import_2 = __webpack_require__(10275);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




},
10275(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  Gx: () => (useVisibleBlogSidebarItems),
  Ki: () => (groupBlogSidebarItemsByYear),
  OU: () => (BlogSidebarItemList)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var _docusaurus_router__rspack_import_4 = __webpack_require__(55234);
/* import */ var _docusaurus_Link__rspack_import_2 = __webpack_require__(59078);
/* import */ var _docusaurus_theme_common__rspack_import_5 = __webpack_require__(38063);
/* import */ var _docusaurus_theme_common_internal__rspack_import_3 = __webpack_require__(15620);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function isVisible(item, pathname) {
    if (item.unlisted && !(0,_docusaurus_theme_common_internal__rspack_import_3/* .isSamePath */.ys)(item.permalink, pathname)) {
        return false;
    }
    return true;
}
/**
 * Return the visible blog sidebar items to display.
 * Unlisted items are filtered.
 */ function useVisibleBlogSidebarItems(items) {
    const { pathname } = (0,_docusaurus_router__rspack_import_4/* .useLocation */.zy)();
    return (0,react__rspack_import_1.useMemo)(()=>items.filter((item)=>isVisible(item, pathname)), [
        items,
        pathname
    ]);
}
function groupBlogSidebarItemsByYear(items) {
    const groupedByYear = (0,_docusaurus_theme_common__rspack_import_5/* .groupBy */.$z)(items, (item)=>{
        return `${new Date(item.date).getFullYear()}`;
    });
    // "as" is safe here
    // see https://github.com/microsoft/TypeScript/pull/56805#issuecomment-2196526425
    const entries = Object.entries(groupedByYear);
    // We have to use entries because of https://x.com/sebastienlorber/status/1806371668614369486
    // Objects with string/number keys are automatically sorted asc...
    // Even if keys are strings like "2024"
    // We want descending order for years
    // Alternative: using Map.groupBy (not affected by this "reordering")
    entries.reverse();
    return entries;
}
function BlogSidebarItemList({ items, ulClassName, liClassName, linkClassName, linkActiveClassName }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("ul", {
        className: ulClassName,
        children: items.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                className: liClassName,
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                    isNavLink: true,
                    to: item.permalink,
                    className: linkClassName,
                    activeClassName: linkActiveClassName,
                    children: item.title
                })
            }, item.permalink))
    });
}


},
319(__unused_rspack_module, __unused_rspack___webpack_exports__, __webpack_require__) {
"use strict";
/* import */ var _docusaurus_useBaseUrl__rspack_import_0 = __webpack_require__(66025);
/* import */ var _docusaurus_useDocusaurusContext__rspack_import_1 = __webpack_require__(40266);
/* import */ var _docusaurus_plugin_content_blog_client__rspack_import_2 = __webpack_require__(70740);
/* import */ var _contexts__rspack_import_3 = __webpack_require__(75714);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



const convertDate = (dateMs)=>new Date(dateMs).toISOString();
function getBlogPost(blogPostContent, siteConfig, withBaseUrl) {
    const { assets, frontMatter, metadata } = blogPostContent;
    const { date, title, description, lastUpdatedAt } = metadata;
    const image = assets.image ?? frontMatter.image;
    const keywords = frontMatter.keywords ?? [];
    const blogUrl = `${siteConfig.url}${metadata.permalink}`;
    const dateModified = lastUpdatedAt ? convertDate(lastUpdatedAt) : undefined;
    return {
        '@type': 'BlogPosting',
        '@id': blogUrl,
        mainEntityOfPage: blogUrl,
        url: blogUrl,
        headline: title,
        name: title,
        description,
        datePublished: date,
        ...dateModified ? {
            dateModified
        } : {},
        ...getAuthor(metadata.authors),
        ...getImage(image, withBaseUrl, title),
        ...keywords ? {
            keywords
        } : {}
    };
}
function getAuthor(authors) {
    const authorsStructuredData = authors.map(createPersonStructuredData);
    return {
        author: authorsStructuredData.length === 1 ? authorsStructuredData[0] : authorsStructuredData
    };
}
function getImage(image, withBaseUrl, title) {
    return image ? {
        image: createImageStructuredData({
            imageUrl: withBaseUrl(image, {
                absolute: true
            }),
            caption: `title image for the blog post: ${title}`
        })
    } : {};
}
function useBlogListPageStructuredData(props) {
    const { siteConfig } = useDocusaurusContext();
    const { withBaseUrl } = useBaseUrlUtils();
    const { metadata: { blogDescription, blogTitle, permalink } } = props;
    const url = `${siteConfig.url}${permalink}`;
    // details on structured data support: https://schema.org/Blog
    return {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        '@id': url,
        mainEntityOfPage: url,
        headline: blogTitle,
        description: blogDescription,
        blogPost: props.items.map((blogItem)=>getBlogPost(blogItem.content, siteConfig, withBaseUrl))
    };
}
function useBlogPostStructuredData() {
    const blogMetadata = useBlogMetadata();
    const { assets, metadata } = useBlogPost();
    const { siteConfig } = useDocusaurusContext();
    const { withBaseUrl } = useBaseUrlUtils();
    const { date, title, description, frontMatter, lastUpdatedAt } = metadata;
    const image = assets.image ?? frontMatter.image;
    const keywords = frontMatter.keywords ?? [];
    const dateModified = lastUpdatedAt ? convertDate(lastUpdatedAt) : undefined;
    const url = `${siteConfig.url}${metadata.permalink}`;
    // details on structured data support: https://schema.org/BlogPosting
    // BlogPosting is one of the structured data types that Google explicitly
    // supports: https://developers.google.com/search/docs/appearance/structured-data/article#structured-data-type-definitions
    return {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        '@id': url,
        mainEntityOfPage: url,
        url,
        headline: title,
        name: title,
        description,
        datePublished: date,
        ...dateModified ? {
            dateModified
        } : {},
        ...getAuthor(metadata.authors),
        ...getImage(image, withBaseUrl, title),
        ...keywords ? {
            keywords
        } : {},
        isPartOf: {
            '@type': 'Blog',
            '@id': `${siteConfig.url}${blogMetadata.blogBasePath}`,
            name: blogMetadata.blogTitle
        }
    };
}
/** @returns A {@link https://schema.org/Person} constructed from the {@link Author} */ function createPersonStructuredData(author) {
    return {
        '@type': 'Person',
        ...author.name ? {
            name: author.name
        } : {},
        ...author.title ? {
            description: author.title
        } : {},
        ...author.url ? {
            url: author.url
        } : {},
        ...author.email ? {
            email: author.email
        } : {},
        ...author.imageURL ? {
            image: author.imageURL
        } : {}
    };
}
/** @returns A {@link https://schema.org/ImageObject} */ function createImageStructuredData({ imageUrl, caption }) {
    return {
        '@type': 'ImageObject',
        '@id': imageUrl,
        url: imageUrl,
        contentUrl: imageUrl,
        caption
    };
}


},
21812(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionIconDanger)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function AdmonitionIconDanger(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
        viewBox: "0 0 12 16",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
            fillRule: "evenodd",
            d: "M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"
        })
    });
}


},
62751(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionIconInfo)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function AdmonitionIconInfo(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
        viewBox: "0 0 14 16",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
            fillRule: "evenodd",
            d: "M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
        })
    });
}


},
34463(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionIconNote)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function AdmonitionIconNote(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
        viewBox: "0 0 14 16",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
            fillRule: "evenodd",
            d: "M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"
        })
    });
}


},
23786(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionIconTip)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function AdmonitionIconTip(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
        viewBox: "0 0 12 16",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
            fillRule: "evenodd",
            d: "M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"
        })
    });
}


},
49103(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionIconCaution)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function AdmonitionIconCaution(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
        viewBox: "0 0 16 16",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
            fillRule: "evenodd",
            d: "M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"
        })
    });
}


},
3800(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionLayout)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var clsx__rspack_import_3 = __webpack_require__(13526);
/* import */ var _docusaurus_theme_common__rspack_import_4 = __webpack_require__(94630);
/* import */ var _styles_module_css__rspack_import_2 = __webpack_require__(19144);
/* import */ var _styles_module_css__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_2);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function AdmonitionContainer({ type, className, children, id }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
        className: (0,clsx__rspack_import_3/* ["default"] */.A)(_docusaurus_theme_common__rspack_import_4/* .ThemeClassNames.common.admonition */.G.common.admonition, _docusaurus_theme_common__rspack_import_4/* .ThemeClassNames.common.admonitionType */.G.common.admonitionType(type), (_styles_module_css__rspack_import_2_default().admonition), className),
        id: id,
        children: children
    });
}
function AdmonitionHeading({ icon, title }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        className: (_styles_module_css__rspack_import_2_default().admonitionHeading),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                className: (_styles_module_css__rspack_import_2_default().admonitionIcon),
                children: icon
            }),
            title
        ]
    });
}
function AdmonitionContent({ children }) {
    return children ? /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
        className: (_styles_module_css__rspack_import_2_default().admonitionContent),
        children: children
    }) : null;
}
function AdmonitionLayout(props) {
    const { type, icon, title, children, className, id } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(AdmonitionContainer, {
        type: type,
        className: className,
        id: id,
        children: [
            title || icon ? /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(AdmonitionHeading, {
                title: title,
                icon: icon
            }) : null,
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(AdmonitionContent, {
                children: children
            })
        ]
    });
}


},
23779(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionTypeCaution)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var clsx__rspack_import_5 = __webpack_require__(13526);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(46218);
/* import */ var _theme_Admonition_Layout__rspack_import_3 = __webpack_require__(3800);
/* import */ var _theme_Admonition_Icon_Warning__rspack_import_4 = __webpack_require__(49103);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




const infimaClassName = 'alert alert--warning';
const defaultProps = {
    icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Icon_Warning__rspack_import_4/* ["default"] */.A, {}),
    title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
        id: "theme.admonition.caution",
        description: "The default label used for the Caution admonition (:::caution)",
        children: "caution"
    })
};
// TODO remove before v4: Caution replaced by Warning
// see https://github.com/facebook/docusaurus/issues/7558
function AdmonitionTypeCaution(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Layout__rspack_import_3/* ["default"] */.A, {
        ...defaultProps,
        ...props,
        className: (0,clsx__rspack_import_5/* ["default"] */.A)(infimaClassName, props.className),
        children: props.children
    });
}


},
50887(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionTypeDanger)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var clsx__rspack_import_5 = __webpack_require__(13526);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(46218);
/* import */ var _theme_Admonition_Layout__rspack_import_3 = __webpack_require__(3800);
/* import */ var _theme_Admonition_Icon_Danger__rspack_import_4 = __webpack_require__(21812);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




const infimaClassName = 'alert alert--danger';
const defaultProps = {
    icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Icon_Danger__rspack_import_4/* ["default"] */.A, {}),
    title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
        id: "theme.admonition.danger",
        description: "The default label used for the Danger admonition (:::danger)",
        children: "danger"
    })
};
function AdmonitionTypeDanger(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Layout__rspack_import_3/* ["default"] */.A, {
        ...defaultProps,
        ...props,
        className: (0,clsx__rspack_import_5/* ["default"] */.A)(infimaClassName, props.className),
        children: props.children
    });
}


},
3028(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionTypeInfo)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var clsx__rspack_import_5 = __webpack_require__(13526);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(46218);
/* import */ var _theme_Admonition_Layout__rspack_import_3 = __webpack_require__(3800);
/* import */ var _theme_Admonition_Icon_Info__rspack_import_4 = __webpack_require__(62751);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




const infimaClassName = 'alert alert--info';
const defaultProps = {
    icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Icon_Info__rspack_import_4/* ["default"] */.A, {}),
    title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
        id: "theme.admonition.info",
        description: "The default label used for the Info admonition (:::info)",
        children: "info"
    })
};
function AdmonitionTypeInfo(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Layout__rspack_import_3/* ["default"] */.A, {
        ...defaultProps,
        ...props,
        className: (0,clsx__rspack_import_5/* ["default"] */.A)(infimaClassName, props.className),
        children: props.children
    });
}


},
70384(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionTypeNote)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var clsx__rspack_import_5 = __webpack_require__(13526);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(46218);
/* import */ var _theme_Admonition_Layout__rspack_import_3 = __webpack_require__(3800);
/* import */ var _theme_Admonition_Icon_Note__rspack_import_4 = __webpack_require__(34463);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




const infimaClassName = 'alert alert--secondary';
const defaultProps = {
    icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Icon_Note__rspack_import_4/* ["default"] */.A, {}),
    title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
        id: "theme.admonition.note",
        description: "The default label used for the Note admonition (:::note)",
        children: "note"
    })
};
function AdmonitionTypeNote(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Layout__rspack_import_3/* ["default"] */.A, {
        ...defaultProps,
        ...props,
        className: (0,clsx__rspack_import_5/* ["default"] */.A)(infimaClassName, props.className),
        children: props.children
    });
}


},
45339(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionTypeTip)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var clsx__rspack_import_5 = __webpack_require__(13526);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(46218);
/* import */ var _theme_Admonition_Layout__rspack_import_3 = __webpack_require__(3800);
/* import */ var _theme_Admonition_Icon_Tip__rspack_import_4 = __webpack_require__(23786);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




const infimaClassName = 'alert alert--success';
const defaultProps = {
    icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Icon_Tip__rspack_import_4/* ["default"] */.A, {}),
    title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
        id: "theme.admonition.tip",
        description: "The default label used for the Tip admonition (:::tip)",
        children: "tip"
    })
};
function AdmonitionTypeTip(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Layout__rspack_import_3/* ["default"] */.A, {
        ...defaultProps,
        ...props,
        className: (0,clsx__rspack_import_5/* ["default"] */.A)(infimaClassName, props.className),
        children: props.children
    });
}


},
63094(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (AdmonitionTypeWarning)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var clsx__rspack_import_5 = __webpack_require__(13526);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(46218);
/* import */ var _theme_Admonition_Layout__rspack_import_3 = __webpack_require__(3800);
/* import */ var _theme_Admonition_Icon_Warning__rspack_import_4 = __webpack_require__(49103);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




const infimaClassName = 'alert alert--warning';
const defaultProps = {
    icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Icon_Warning__rspack_import_4/* ["default"] */.A, {}),
    title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
        id: "theme.admonition.warning",
        description: "The default label used for the Warning admonition (:::warning)",
        children: "warning"
    })
};
function AdmonitionTypeWarning(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Layout__rspack_import_3/* ["default"] */.A, {
        ...defaultProps,
        ...props,
        className: (0,clsx__rspack_import_5/* ["default"] */.A)(infimaClassName, props.className),
        children: props.children
    });
}


},
59108(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var _theme_Admonition_Type_Note__rspack_import_2 = __webpack_require__(70384);
/* import */ var _theme_Admonition_Type_Tip__rspack_import_3 = __webpack_require__(45339);
/* import */ var _theme_Admonition_Type_Info__rspack_import_4 = __webpack_require__(3028);
/* import */ var _theme_Admonition_Type_Warning__rspack_import_5 = __webpack_require__(63094);
/* import */ var _theme_Admonition_Type_Danger__rspack_import_6 = __webpack_require__(50887);
/* import */ var _theme_Admonition_Type_Caution__rspack_import_7 = __webpack_require__(23779);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 






const admonitionTypes = {
    note: _theme_Admonition_Type_Note__rspack_import_2/* ["default"] */.A,
    tip: _theme_Admonition_Type_Tip__rspack_import_3/* ["default"] */.A,
    info: _theme_Admonition_Type_Info__rspack_import_4/* ["default"] */.A,
    warning: _theme_Admonition_Type_Warning__rspack_import_5/* ["default"] */.A,
    danger: _theme_Admonition_Type_Danger__rspack_import_6/* ["default"] */.A
};
// Undocumented legacy admonition type aliases
// Provide hardcoded/untranslated retrocompatible label
// See also https://github.com/facebook/docusaurus/issues/7767
const admonitionAliases = {
    secondary: (props)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Type_Note__rspack_import_2/* ["default"] */.A, {
            title: "secondary",
            ...props
        }),
    important: (props)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Type_Info__rspack_import_4/* ["default"] */.A, {
            title: "important",
            ...props
        }),
    success: (props)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Admonition_Type_Tip__rspack_import_3/* ["default"] */.A, {
            title: "success",
            ...props
        }),
    caution: _theme_Admonition_Type_Caution__rspack_import_7/* ["default"] */.A
};
/* export default */ const __rspack_default_export = ({
    ...admonitionTypes,
    ...admonitionAliases
});


},
97789(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (Admonition)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var _docusaurus_theme_common__rspack_import_3 = __webpack_require__(5956);
/* import */ var _theme_Admonition_Types__rspack_import_2 = __webpack_require__(59108);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function getAdmonitionTypeComponent(type) {
    const component = _theme_Admonition_Types__rspack_import_2/* ["default"] */.A[type];
    if (component) {
        return component;
    }
    console.warn(`No admonition component found for admonition type "${type}". Using Info as fallback.`);
    return _theme_Admonition_Types__rspack_import_2/* ["default"].info */.A.info;
}
function Admonition(unprocessedProps) {
    const props = (0,_docusaurus_theme_common__rspack_import_3/* .processAdmonitionProps */.c)(unprocessedProps);
    const AdmonitionTypeComponent = getAdmonitionTypeComponent(props.type);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(AdmonitionTypeComponent, {
        ...props
    });
}


},
11604(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (BackToTopButton)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var clsx__rspack_import_5 = __webpack_require__(13526);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(46218);
/* import */ var _docusaurus_theme_common__rspack_import_6 = __webpack_require__(94630);
/* import */ var _docusaurus_theme_common_internal__rspack_import_4 = __webpack_require__(77492);
/* import */ var _styles_module_css__rspack_import_3 = __webpack_require__(88964);
/* import */ var _styles_module_css__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_3);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function BackToTopButton() {
    const { shown, scrollToTop } = (0,_docusaurus_theme_common_internal__rspack_import_4/* .useBackToTopButton */.H)({
        threshold: 300
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("button", {
        "aria-label": (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
            id: 'theme.BackToTopButton.buttonAriaLabel',
            message: 'Scroll back to top',
            description: 'The ARIA label for the back to top button'
        }),
        className: (0,clsx__rspack_import_5/* ["default"] */.A)('clean-btn', _docusaurus_theme_common__rspack_import_6/* .ThemeClassNames.common.backToTopButton */.G.common.backToTopButton, (_styles_module_css__rspack_import_3_default().backToTopButton), shown && (_styles_module_css__rspack_import_3_default().backToTopButtonShow)),
        type: "button",
        onClick: scrollToTop
    });
}


},
71804(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (BlogPostPaginator)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(46218);
/* import */ var _theme_PaginatorNavLink__rspack_import_3 = __webpack_require__(31649);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function BlogPostPaginator(props) {
    const { nextItem, prevItem } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("nav", {
        className: "pagination-nav docusaurus-mt-lg",
        "aria-label": (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
            id: 'theme.blog.post.paginator.navAriaLabel',
            message: 'Blog post page navigation',
            description: 'The ARIA label for the blog posts pagination'
        }),
        children: [
            prevItem && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_PaginatorNavLink__rspack_import_3/* ["default"] */.A, {
                ...prevItem,
                subLabel: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                    id: "theme.blog.post.paginator.newerPost",
                    description: "The blog post button label to navigate to the newer/previous post",
                    children: "Newer post"
                })
            }),
            nextItem && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_PaginatorNavLink__rspack_import_3/* ["default"] */.A, {
                ...nextItem,
                subLabel: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                    id: "theme.blog.post.paginator.olderPost",
                    description: "The blog post button label to navigate to the older/next post",
                    children: "Older post"
                }),
                isNext: true
            })
        ]
    });
}


},
7743(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (CodeInline)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
// Simple component used to render inline code blocks
// its purpose is to be swizzled and customized
// MDX 1 used to have a inlineCode comp, see https://mdxjs.com/migrating/v2/
function CodeInline(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("code", {
        ...props
    });
}


},
93843(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (Details)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var clsx__rspack_import_4 = __webpack_require__(13526);
/* import */ var _docusaurus_theme_common_Details__rspack_import_2 = __webpack_require__(28743);
/* import */ var _styles_module_css__rspack_import_3 = __webpack_require__(31761);
/* import */ var _styles_module_css__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_3);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



// Should we have a custom details/summary comp in Infima instead of reusing
// alert classes?
const InfimaClasses = 'alert alert--info';
function Details({ ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common_Details__rspack_import_2/* .Details */.B, {
        ...props,
        className: (0,clsx__rspack_import_4/* ["default"] */.A)(InfimaClasses, (_styles_module_css__rspack_import_3_default().details), props.className)
    });
}


},
51854(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (IconCopy)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function IconCopy(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
            fill: "currentColor",
            d: "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"
        })
    });
}


},
6186(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (IconSuccess)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function IconSuccess(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
            fill: "currentColor",
            d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
        })
    });
}


},
6299(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (IconWordWrap)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function IconWordWrap(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
            fill: "currentColor",
            d: "M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"
        })
    });
}


},
43602(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (MDXA)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var clsx__rspack_import_4 = __webpack_require__(13526);
/* import */ var _docusaurus_Link__rspack_import_2 = __webpack_require__(59078);
/* import */ var _docusaurus_theme_common__rspack_import_3 = __webpack_require__(157);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function MDXA(props) {
    // MDX Footnotes have ids such as <a id="user-content-fn-1-953011" ...>
    const anchorTargetClassName = (0,_docusaurus_theme_common__rspack_import_3/* .useAnchorTargetClassName */.v)(props.id);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
        ...props,
        className: (0,clsx__rspack_import_4/* ["default"] */.A)(anchorTargetClassName, props.className)
    });
}


},
22549(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (MDXCode)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var _theme_CodeBlock__rspack_import_2 = __webpack_require__(96125);
/* import */ var _theme_CodeInline__rspack_import_3 = __webpack_require__(7743);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function shouldBeInline(props) {
    return(// empty code blocks have no props.children,
    // see https://github.com/facebook/docusaurus/pull/9704
    typeof props.children !== 'undefined' && react__rspack_import_1.Children.toArray(props.children).every((el)=>typeof el === 'string' && !el.includes('\n')));
}
function MDXCode(props) {
    return shouldBeInline(props) ? /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_CodeInline__rspack_import_3/* ["default"] */.A, {
        ...props
    }) : /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_CodeBlock__rspack_import_2/* ["default"] */.A, {
        ...props
    });
}


},
38128(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (MDXDetails)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var _theme_Details__rspack_import_2 = __webpack_require__(93843);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

function MDXDetails(props) {
    const items = react__rspack_import_1.Children.toArray(props.children);
    // Split summary item from the rest to pass it as a separate prop to the
    // Details theme component
    const summary = items.find((item)=>/*#__PURE__*/ react__rspack_import_1.isValidElement(item) && item.type === 'summary');
    const children = /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
        children: items.filter((item)=>item !== summary)
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Details__rspack_import_2/* ["default"] */.A, {
        ...props,
        summary: summary,
        children: children
    });
}


},
93068(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (MDXHeading)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var _theme_Heading__rspack_import_2 = __webpack_require__(71807);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

function MDXHeading(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Heading__rspack_import_2/* ["default"] */.A, {
        ...props
    });
}


},
38526(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (MDXImg)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var clsx__rspack_import_3 = __webpack_require__(13526);
/* import */ var _styles_module_css__rspack_import_2 = __webpack_require__(55386);
/* import */ var _styles_module_css__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_2);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function transformImgClassName(className) {
    return (0,clsx__rspack_import_3/* ["default"] */.A)(className, (_styles_module_css__rspack_import_2_default().img));
}
function MDXImg(props) {
    return(// eslint-disable-next-line jsx-a11y/alt-text
    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
        decoding: "async",
        loading: "lazy",
        ...props,
        className: transformImgClassName(props.className)
    }));
}


},
10955(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (MDXLi)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var clsx__rspack_import_4 = __webpack_require__(13526);
/* import */ var _docusaurus_useBrokenLinks__rspack_import_2 = __webpack_require__(36617);
/* import */ var _docusaurus_theme_common__rspack_import_3 = __webpack_require__(157);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function MDXLi(props) {
    // MDX Footnotes have ids such as <li id="user-content-fn-1-953011">
    (0,_docusaurus_useBrokenLinks__rspack_import_2/* ["default"] */.A)().collectAnchor(props.id);
    const anchorTargetClassName = (0,_docusaurus_theme_common__rspack_import_3/* .useAnchorTargetClassName */.v)(props.id);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
        className: (0,clsx__rspack_import_4/* ["default"] */.A)(anchorTargetClassName, props.className),
        ...props
    });
}


},
35155(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (MDXPre)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function MDXPre(props) {
    // With MDX 2, this element is only used for fenced code blocks
    // It always receives a MDXComponents/Code as children
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
        children: props.children
    });
}


},
8870(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (MDXUl)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var clsx__rspack_import_3 = __webpack_require__(13526);
/* import */ var _styles_module_css__rspack_import_2 = __webpack_require__(47298);
/* import */ var _styles_module_css__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_2);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function transformUlClassName(className) {
    // Fix https://github.com/facebook/docusaurus/issues/9098
    if (typeof className === 'undefined') {
        return undefined;
    }
    return (0,clsx__rspack_import_3/* ["default"] */.A)(className, // This class is set globally by GitHub/MDX. We keep the global class, and
    // add another class to get a task list without the default ul styling
    // See https://github.com/syntax-tree/mdast-util-to-hast/issues/28
    className?.includes('contains-task-list') && (_styles_module_css__rspack_import_2_default().containsTaskList));
}
function MDXUl(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("ul", {
        ...props,
        className: transformUlClassName(props.className)
    });
}


},
16130(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var _docusaurus_Head__rspack_import_2 = __webpack_require__(34924);
/* import */ var _theme_MDXComponents_Code__rspack_import_3 = __webpack_require__(22549);
/* import */ var _theme_MDXComponents_A__rspack_import_4 = __webpack_require__(43602);
/* import */ var _theme_MDXComponents_Pre__rspack_import_5 = __webpack_require__(35155);
/* import */ var _theme_MDXComponents_Details__rspack_import_6 = __webpack_require__(38128);
/* import */ var _theme_MDXComponents_Heading__rspack_import_7 = __webpack_require__(93068);
/* import */ var _theme_MDXComponents_Ul__rspack_import_8 = __webpack_require__(8870);
/* import */ var _theme_MDXComponents_Li__rspack_import_9 = __webpack_require__(10955);
/* import */ var _theme_MDXComponents_Img__rspack_import_10 = __webpack_require__(38526);
/* import */ var _theme_Admonition__rspack_import_11 = __webpack_require__(97789);
/* import */ var _theme_Mermaid__rspack_import_12 = __webpack_require__(89986);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 











const MDXComponents = {
    Head: _docusaurus_Head__rspack_import_2/* ["default"] */.A,
    details: _theme_MDXComponents_Details__rspack_import_6/* ["default"] */.A,
    Details: _theme_MDXComponents_Details__rspack_import_6/* ["default"] */.A,
    code: _theme_MDXComponents_Code__rspack_import_3/* ["default"] */.A,
    a: _theme_MDXComponents_A__rspack_import_4/* ["default"] */.A,
    pre: _theme_MDXComponents_Pre__rspack_import_5/* ["default"] */.A,
    ul: _theme_MDXComponents_Ul__rspack_import_8/* ["default"] */.A,
    li: _theme_MDXComponents_Li__rspack_import_9/* ["default"] */.A,
    img: _theme_MDXComponents_Img__rspack_import_10/* ["default"] */.A,
    h1: (props)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_MDXComponents_Heading__rspack_import_7/* ["default"] */.A, {
            as: "h1",
            ...props
        }),
    h2: (props)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_MDXComponents_Heading__rspack_import_7/* ["default"] */.A, {
            as: "h2",
            ...props
        }),
    h3: (props)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_MDXComponents_Heading__rspack_import_7/* ["default"] */.A, {
            as: "h3",
            ...props
        }),
    h4: (props)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_MDXComponents_Heading__rspack_import_7/* ["default"] */.A, {
            as: "h4",
            ...props
        }),
    h5: (props)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_MDXComponents_Heading__rspack_import_7/* ["default"] */.A, {
            as: "h5",
            ...props
        }),
    h6: (props)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_MDXComponents_Heading__rspack_import_7/* ["default"] */.A, {
            as: "h6",
            ...props
        }),
    admonition: _theme_Admonition__rspack_import_11/* ["default"] */.A,
    mermaid: _theme_Mermaid__rspack_import_12/* ["default"] */.A
};
/* export default */ const __rspack_default_export = (MDXComponents);


},
50879(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (MDXContent)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var _mdx_js_react__rspack_import_3 = __webpack_require__(89999);
/* import */ var _theme_MDXComponents__rspack_import_2 = __webpack_require__(16130);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function MDXContent({ children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_mdx_js_react__rspack_import_3/* .MDXProvider */.x, {
        components: _theme_MDXComponents__rspack_import_2/* ["default"] */.A,
        children: children
    });
}


},
57565(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var _docusaurus_Link__rspack_import_2 = __webpack_require__(59078);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

// Recursive component rendering the toc tree
function TOCItemTree({ toc, className, linkClassName, isChild }) {
    if (!toc.length) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("ul", {
        className: isChild ? undefined : className,
        children: toc.map((heading)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("li", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_2/* ["default"] */.A, {
                        to: `#${heading.id}`,
                        className: linkClassName ?? undefined,
                        // Developer provided the HTML, so assume it's safe.
                        dangerouslySetInnerHTML: {
                            __html: heading.value
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(TOCItemTree, {
                        isChild: true,
                        toc: heading.children,
                        className: className,
                        linkClassName: linkClassName
                    })
                ]
            }, heading.id))
    });
}
// Memo only the tree root is enough
/* export default */ const __rspack_default_export = (/*#__PURE__*/react__rspack_import_1.memo(TOCItemTree));


},
52373(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (TOCItems)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var _docusaurus_theme_common__rspack_import_3 = __webpack_require__(95437);
/* import */ var _docusaurus_theme_common_internal__rspack_import_4 = __webpack_require__(6232);
/* import */ var _docusaurus_theme_common_internal__rspack_import_5 = __webpack_require__(43463);
/* import */ var _theme_TOCItems_Tree__rspack_import_2 = __webpack_require__(57565);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function TOCItems({ toc, className = 'table-of-contents table-of-contents__left-border', linkClassName = 'table-of-contents__link', linkActiveClassName = undefined, minHeadingLevel: minHeadingLevelOption, maxHeadingLevel: maxHeadingLevelOption, ...props }) {
    const themeConfig = (0,_docusaurus_theme_common__rspack_import_3/* .useThemeConfig */.p)();
    const minHeadingLevel = minHeadingLevelOption ?? themeConfig.tableOfContents.minHeadingLevel;
    const maxHeadingLevel = maxHeadingLevelOption ?? themeConfig.tableOfContents.maxHeadingLevel;
    const tocTree = (0,_docusaurus_theme_common_internal__rspack_import_4/* .useFilteredAndTreeifiedTOC */.h)({
        toc,
        minHeadingLevel,
        maxHeadingLevel
    });
    const tocHighlightConfig = (0,react__rspack_import_1.useMemo)(()=>{
        if (linkClassName && linkActiveClassName) {
            return {
                linkClassName,
                linkActiveClassName,
                minHeadingLevel,
                maxHeadingLevel
            };
        }
        return undefined;
    }, [
        linkClassName,
        linkActiveClassName,
        minHeadingLevel,
        maxHeadingLevel
    ]);
    (0,_docusaurus_theme_common_internal__rspack_import_5/* .useTOCHighlight */.i)(tocHighlightConfig);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_TOCItems_Tree__rspack_import_2/* ["default"] */.A, {
        toc: tocTree,
        className: className,
        linkClassName: linkClassName,
        ...props
    });
}


},
28743(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  B: () => (Details)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var clsx__rspack_import_6 = __webpack_require__(13526);
/* import */ var _docusaurus_useBrokenLinks__rspack_import_2 = __webpack_require__(36617);
/* import */ var _docusaurus_useIsBrowser__rspack_import_3 = __webpack_require__(78095);
/* import */ var _Collapsible__rspack_import_5 = __webpack_require__(12501);
/* import */ var _styles_module_css__rspack_import_4 = __webpack_require__(97777);
/* import */ var _styles_module_css__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_4);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function isInSummary(node) {
    if (!node) {
        return false;
    }
    return node.tagName === 'SUMMARY' || isInSummary(node.parentElement);
}
function hasParent(node, parent) {
    if (!node) {
        return false;
    }
    return node === parent || hasParent(node.parentElement, parent);
}
/**
 * A mostly un-styled `<details>` element with smooth collapsing. Provides some
 * very lightweight styles, but you should bring your UI.
 */ function Details({ summary, children, ...props }) {
    (0,_docusaurus_useBrokenLinks__rspack_import_2/* ["default"] */.A)().collectAnchor(props.id);
    const isBrowser = (0,_docusaurus_useIsBrowser__rspack_import_3/* ["default"] */.A)();
    const detailsRef = (0,react__rspack_import_1.useRef)(null);
    const { collapsed, setCollapsed } = (0,_Collapsible__rspack_import_5/* .useCollapsible */.u)({
        initialState: !props.open
    });
    // Use a separate state for the actual details prop, because it must be set
    // only after animation completes, otherwise close animations won't work
    const [open, setOpen] = (0,react__rspack_import_1.useState)(props.open);
    const summaryElement = /*#__PURE__*/ react__rspack_import_1.isValidElement(summary) ? summary : /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("summary", {
        children: summary ?? 'Details'
    });
    return(// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("details", {
        ...props,
        ref: detailsRef,
        open: open,
        "data-collapsed": collapsed,
        className: (0,clsx__rspack_import_6/* ["default"] */.A)((_styles_module_css__rspack_import_4_default().details), isBrowser && (_styles_module_css__rspack_import_4_default().isBrowser), props.className),
        onMouseDown: (e)=>{
            const target = e.target;
            // Prevent a double-click to highlight summary text
            if (isInSummary(target) && e.detail > 1) {
                e.preventDefault();
            }
        },
        onClick: (e)=>{
            e.stopPropagation(); // For isolation of multiple nested details/summary
            const target = e.target;
            const shouldToggle = isInSummary(target) && hasParent(target, detailsRef.current);
            if (!shouldToggle) {
                return;
            }
            e.preventDefault();
            if (collapsed) {
                setCollapsed(false);
                setOpen(true);
            } else {
                setCollapsed(true);
            // Don't do this, it breaks close animation!
            // setOpen(false);
            }
        },
        children: [
            summaryElement,
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_Collapsible__rspack_import_5/* .Collapsible */.N, {
                lazy: false,
                collapsed: collapsed,
                onCollapseTransitionEnd: (newCollapsed)=>{
                    setCollapsed(newCollapsed);
                    setOpen(!newCollapsed);
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                    className: (_styles_module_css__rspack_import_4_default().collapsibleContent),
                    children: children
                })
            })
        ]
    }));
} //# sourceMappingURL=index.js.map


},
77492(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  H: () => (useBackToTopButton)
});
/* import */ var react__rspack_import_0 = __webpack_require__(58101);
/* import */ var _utils_scrollUtils__rspack_import_1 = __webpack_require__(96821);
/* import */ var _utils_useLocationChange__rspack_import_2 = __webpack_require__(86099);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


/** Wires the logic for the back to top button. */ function useBackToTopButton({ threshold }) {
    const [shown, setShown] = (0,react__rspack_import_0.useState)(false);
    const isFocusedAnchor = (0,react__rspack_import_0.useRef)(false);
    const { startScroll, cancelScroll } = (0,_utils_scrollUtils__rspack_import_1/* .useSmoothScrollTo */.gk)();
    (0,_utils_scrollUtils__rspack_import_1/* .useScrollPosition */.Mq)(({ scrollY: scrollTop }, lastPosition)=>{
        const lastScrollTop = lastPosition?.scrollY;
        // Component is just being mounted. Not really a scroll event from the user.
        // Ignore it.
        if (!lastScrollTop) {
            return;
        }
        if (isFocusedAnchor.current) {
            // This scroll position change is triggered by navigating to an anchor.
            // Ignore it.
            isFocusedAnchor.current = false;
        } else if (scrollTop >= lastScrollTop) {
            // The user has scrolled down to "fight against" the animation. Cancel any
            // animation under progress.
            cancelScroll();
            setShown(false);
        } else if (scrollTop < threshold) {
            // Scrolled to the minimum position; hide the button.
            setShown(false);
        } else if (scrollTop + window.innerHeight < document.documentElement.scrollHeight) {
            setShown(true);
        }
    });
    (0,_utils_useLocationChange__rspack_import_2/* .useLocationChange */.$)((locationChangeEvent)=>{
        if (locationChangeEvent.location.hash) {
            isFocusedAnchor.current = true;
            setShown(false);
        }
    });
    return {
        shown,
        scrollToTop: ()=>startScroll(0)
    };
} //# sourceMappingURL=useBackToTopButton.js.map


},
20100(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  f: () => (useCodeWordWrap)
});
/* import */ var react__rspack_import_0 = __webpack_require__(58101);
/* import */ var _useMutationObserver__rspack_import_1 = __webpack_require__(39908);


// Callback fires when the "hidden" attribute of a tabpanel changes
// See https://github.com/facebook/docusaurus/pull/7485
function useTabBecameVisibleCallback(codeBlockRef, callback) {
    const [hiddenTabElement, setHiddenTabElement] = (0,react__rspack_import_0.useState)();
    const updateHiddenTabElement = (0,react__rspack_import_0.useCallback)(()=>{
        // No need to observe non-hidden tabs
        // + we want to force a re-render when a tab becomes visible
        setHiddenTabElement(codeBlockRef.current?.closest('[role=tabpanel][hidden]'));
    }, [
        codeBlockRef,
        setHiddenTabElement
    ]);
    (0,react__rspack_import_0.useEffect)(()=>{
        updateHiddenTabElement();
    }, [
        updateHiddenTabElement
    ]);
    (0,_useMutationObserver__rspack_import_1/* .useMutationObserver */.P)(hiddenTabElement, (mutations)=>{
        mutations.forEach((mutation)=>{
            if (mutation.type === 'attributes' && mutation.attributeName === 'hidden') {
                callback();
                updateHiddenTabElement();
            }
        });
    }, {
        attributes: true,
        characterData: false,
        childList: false,
        subtree: false
    });
}
function useCodeWordWrap() {
    const [isEnabled, setIsEnabled] = (0,react__rspack_import_0.useState)(false);
    const [isCodeScrollable, setIsCodeScrollable] = (0,react__rspack_import_0.useState)(false);
    const codeBlockRef = (0,react__rspack_import_0.useRef)(null);
    const toggle = (0,react__rspack_import_0.useCallback)(()=>{
        const codeElement = codeBlockRef.current.querySelector('code');
        if (isEnabled) {
            codeElement.removeAttribute('style');
        } else {
            codeElement.style.whiteSpace = 'pre-wrap';
            // When code wrap is enabled, we want to avoid a scrollbar in any case
            // Ensure that very very long words/strings/tokens still wrap
            codeElement.style.overflowWrap = 'anywhere';
        }
        setIsEnabled((value)=>!value);
    }, [
        codeBlockRef,
        isEnabled
    ]);
    const updateCodeIsScrollable = (0,react__rspack_import_0.useCallback)(()=>{
        const { scrollWidth, clientWidth } = codeBlockRef.current;
        const isScrollable = scrollWidth > clientWidth || codeBlockRef.current.querySelector('code').hasAttribute('style');
        setIsCodeScrollable(isScrollable);
    }, [
        codeBlockRef
    ]);
    useTabBecameVisibleCallback(codeBlockRef, updateCodeIsScrollable);
    (0,react__rspack_import_0.useEffect)(()=>{
        updateCodeIsScrollable();
    }, [
        isEnabled,
        updateCodeIsScrollable
    ]);
    (0,react__rspack_import_0.useEffect)(()=>{
        window.addEventListener('resize', updateCodeIsScrollable, {
            passive: true
        });
        return ()=>{
            window.removeEventListener('resize', updateCodeIsScrollable);
        };
    }, [
        updateCodeIsScrollable
    ]);
    return {
        codeBlockRef,
        isEnabled,
        isCodeScrollable,
        toggle
    };
} //# sourceMappingURL=useCodeWordWrap.js.map


},
39908(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  P: () => (useMutationObserver)
});
/* import */ var react__rspack_import_0 = __webpack_require__(58101);
/* import */ var _utils_reactUtils__rspack_import_1 = __webpack_require__(25919);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

const DefaultOptions = {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true
};
function useMutationObserver(target, callback, options = DefaultOptions) {
    const stableCallback = (0,_utils_reactUtils__rspack_import_1/* .useEvent */._q)(callback);
    // MutationObserver options are not nested much
    // so this should be to memo options in 99%
    // TODO handle options.attributeFilter array
    const stableOptions = (0,_utils_reactUtils__rspack_import_1/* .useShallowMemoObject */.Be)(options);
    (0,react__rspack_import_0.useEffect)(()=>{
        const observer = new MutationObserver(stableCallback);
        if (target) {
            observer.observe(target, stableOptions);
        }
        return ()=>observer.disconnect();
    }, [
        target,
        stableCallback,
        stableOptions
    ]);
} //# sourceMappingURL=useMutationObserver.js.map


},
1847(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (usePrismTheme)
});
/* import */ var _contexts_colorMode__rspack_import_1 = __webpack_require__(24478);
/* import */ var _utils_useThemeConfig__rspack_import_0 = __webpack_require__(95437);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

/**
 * Returns a color-mode-dependent Prism theme: whatever the user specified in
 * the config. Falls back to `palenight`.
 */ function usePrismTheme() {
    const { prism } = (0,_utils_useThemeConfig__rspack_import_0/* .useThemeConfig */.p)();
    const { colorMode } = (0,_contexts_colorMode__rspack_import_1/* .useColorMode */.G)();
    const lightModeTheme = prism.theme;
    const darkModeTheme = prism.darkTheme || lightModeTheme;
    const prismTheme = colorMode === 'dark' ? darkModeTheme : lightModeTheme;
    return prismTheme;
} //# sourceMappingURL=usePrismTheme.js.map


},
43463(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  i: () => (useTOCHighlight)
});
/* import */ var react__rspack_import_0 = __webpack_require__(58101);
/* import */ var _utils_useThemeConfig__rspack_import_1 = __webpack_require__(95437);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

// TODO make the hardcoded theme-classic classnames configurable (or add them
// to ThemeClassNames?)
/**
 * If the anchor has no height and is just a "marker" in the DOM; we'll use the
 * parent (normally the link text) rect boundaries instead
 */ function getVisibleBoundingClientRect(element) {
    const rect = element.getBoundingClientRect();
    const hasNoHeight = rect.top === rect.bottom;
    if (hasNoHeight) {
        return getVisibleBoundingClientRect(element.parentNode);
    }
    return rect;
}
/**
 * Considering we divide viewport into 2 zones of each 50vh, this returns true
 * if an element is in the first zone (i.e., appear in viewport, near the top)
 */ function isInViewportTopHalf(boundingRect) {
    return boundingRect.top > 0 && boundingRect.bottom < window.innerHeight / 2;
}
function getAnchors({ minHeadingLevel, maxHeadingLevel }) {
    const selectors = [];
    for(let i = minHeadingLevel; i <= maxHeadingLevel; i += 1){
        selectors.push(`h${i}.anchor`);
    }
    return Array.from(document.querySelectorAll(selectors.join()));
}
function getActiveAnchor(anchors, { anchorTopOffset }) {
    // Naming is hard: The "nextVisibleAnchor" is the first anchor that appear
    // under the viewport top boundary. It does not mean this anchor is visible
    // yet, but if user continues scrolling down, it will be the first to become
    // visible
    const nextVisibleAnchor = anchors.find((anchor)=>{
        const boundingRect = getVisibleBoundingClientRect(anchor);
        return boundingRect.top >= anchorTopOffset;
    });
    if (nextVisibleAnchor) {
        const boundingRect = getVisibleBoundingClientRect(nextVisibleAnchor);
        // If anchor is in the top half of the viewport: it is the one we consider
        // "active" (unless it's too close to the top and and soon to be scrolled
        // outside viewport)
        if (isInViewportTopHalf(boundingRect)) {
            return nextVisibleAnchor;
        }
        // If anchor is in the bottom half of the viewport, or under the viewport,
        // we consider the active anchor is the previous one. This is because the
        // main text appearing in the user screen mostly belong to the previous
        // anchor. Returns null for the first anchor, see
        // https://github.com/facebook/docusaurus/issues/5318
        return anchors[anchors.indexOf(nextVisibleAnchor) - 1] ?? null;
    }
    // No anchor under viewport top (i.e. we are at the bottom of the page),
    // highlight the last anchor found
    return anchors[anchors.length - 1] ?? null;
}
function getLinkAnchorValue(link) {
    return decodeURIComponent(link.href.substring(link.href.indexOf('#') + 1));
}
function getLinks(linkClassName) {
    return Array.from(document.getElementsByClassName(linkClassName));
}
function getNavbarHeight() {
    // Not ideal to obtain actual height this way
    // Using TS ! (not ?) because otherwise a bad selector would be un-noticed
    return document.querySelector('.navbar').clientHeight;
}
function useAnchorTopOffsetRef() {
    const anchorTopOffsetRef = (0,react__rspack_import_0.useRef)(0);
    const { navbar: { hideOnScroll } } = (0,_utils_useThemeConfig__rspack_import_1/* .useThemeConfig */.p)();
    (0,react__rspack_import_0.useEffect)(()=>{
        anchorTopOffsetRef.current = hideOnScroll ? 0 : getNavbarHeight();
    }, [
        hideOnScroll
    ]);
    return anchorTopOffsetRef;
}
/**
 * Side-effect that applies the active class name to the TOC heading that the
 * user is currently viewing. Disabled when `config` is undefined.
 */ function useTOCHighlight(config) {
    const lastActiveLinkRef = (0,react__rspack_import_0.useRef)(undefined);
    const anchorTopOffsetRef = useAnchorTopOffsetRef();
    (0,react__rspack_import_0.useEffect)(()=>{
        if (!config) {
            // No-op, highlighting is disabled
            return ()=>{};
        }
        const { linkClassName, linkActiveClassName, minHeadingLevel, maxHeadingLevel } = config;
        function updateLinkActiveClass(link, active) {
            if (active) {
                if (lastActiveLinkRef.current && lastActiveLinkRef.current !== link) {
                    lastActiveLinkRef.current.classList.remove(linkActiveClassName);
                }
                link.classList.add(linkActiveClassName);
                lastActiveLinkRef.current = link;
            // link.scrollIntoView({block: 'nearest'});
            } else {
                link.classList.remove(linkActiveClassName);
            }
        }
        function updateActiveLink() {
            const links = getLinks(linkClassName);
            const anchors = getAnchors({
                minHeadingLevel,
                maxHeadingLevel
            });
            const activeAnchor = getActiveAnchor(anchors, {
                anchorTopOffset: anchorTopOffsetRef.current
            });
            const activeLink = links.find((link)=>activeAnchor && activeAnchor.id === getLinkAnchorValue(link));
            links.forEach((link)=>{
                updateLinkActiveClass(link, link === activeLink);
            });
        }
        document.addEventListener('scroll', updateActiveLink);
        document.addEventListener('resize', updateActiveLink);
        updateActiveLink();
        return ()=>{
            document.removeEventListener('scroll', updateActiveLink);
            document.removeEventListener('resize', updateActiveLink);
        };
    }, [
        config,
        anchorTopOffsetRef
    ]);
} //# sourceMappingURL=useTOCHighlight.js.map


},
71783(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  i: () => (useDateTimeFormat)
});
/* import */ var _docusaurus_useDocusaurusContext__rspack_import_0 = __webpack_require__(40266);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function useCalendar() {
    const { i18n: { currentLocale, localeConfigs } } = (0,_docusaurus_useDocusaurusContext__rspack_import_0/* ["default"] */.A)();
    return localeConfigs[currentLocale].calendar;
}
function useDateTimeFormat(options = {}) {
    const { i18n: { currentLocale } } = (0,_docusaurus_useDocusaurusContext__rspack_import_0/* ["default"] */.A)();
    const calendar = useCalendar();
    return new Intl.DateTimeFormat(currentLocale, {
        calendar,
        ...options
    });
} //# sourceMappingURL=IntlUtils.js.map


},
5956(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  c: () => (processAdmonitionProps)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
// Workaround because it's difficult in MDX v1 to provide a MDX title as props
// See https://github.com/facebook/docusaurus/pull/7152#issuecomment-1145779682
function extractMDXAdmonitionTitle(children) {
    const items = react__rspack_import_1.Children.toArray(children);
    const mdxAdmonitionTitleWrapper = items.find((item)=>/*#__PURE__*/ react__rspack_import_1.isValidElement(item) && item.type === 'mdxAdmonitionTitle');
    const rest = items.filter((item)=>item !== mdxAdmonitionTitleWrapper);
    const mdxAdmonitionTitle = mdxAdmonitionTitleWrapper?.props.children;
    return {
        mdxAdmonitionTitle,
        rest: rest.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: rest
        }) : null
    };
}
function processAdmonitionProps(props) {
    const { mdxAdmonitionTitle, rest } = extractMDXAdmonitionTitle(props.children);
    const title = props.title ?? mdxAdmonitionTitle;
    return {
        ...props,
        // Do not return "title: undefined" prop
        // this might create unwanted props overrides when merging props
        // For example: {...default,...props}
        ...title && {
            title
        },
        children: rest
    };
} //# sourceMappingURL=admonitionUtils.js.map


},
10796(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  DX: () => (parseClassNameLanguage),
  Li: () => (parseLines),
  M$: () => (getPrismCssVariables),
  _u: () => (containsLineNumbers),
  wt: () => (parseCodeBlockTitle)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var parse_numeric_range__rspack_import_2 = __webpack_require__(34809);
/* import */ var parse_numeric_range__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(parse_numeric_range__rspack_import_2);

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



const codeBlockTitleRegex = /title=(?<quote>["'])(?<title>.*?)\1/;
const metastringLinesRangeRegex = /\{(?<range>[\d,-]+)\}/;
// Supported types of highlight comments
const popularCommentPatterns = {
    js: {
        start: '\\/\\/',
        end: ''
    },
    jsBlock: {
        start: '\\/\\*',
        end: '\\*\\/'
    },
    jsx: {
        start: '\\{\\s*\\/\\*',
        end: '\\*\\/\\s*\\}'
    },
    bash: {
        start: '#',
        end: ''
    },
    html: {
        start: '<!--',
        end: '-->'
    }
};
const commentPatterns = {
    ...popularCommentPatterns,
    // minor comment styles
    lua: {
        start: '--',
        end: ''
    },
    wasm: {
        start: '\\;\\;',
        end: ''
    },
    tex: {
        start: '%',
        end: ''
    },
    vb: {
        start: "['‘’]",
        end: ''
    },
    vbnet: {
        start: "(?:_\\s*)?['‘’]",
        end: ''
    },
    rem: {
        start: '[Rr][Ee][Mm]\\b',
        end: ''
    },
    f90: {
        start: '!',
        end: ''
    },
    ml: {
        start: '\\(\\*',
        end: '\\*\\)'
    },
    cobol: {
        start: '\\*>',
        end: ''
    }
};
const popularCommentTypes = Object.keys(popularCommentPatterns);
function getCommentPattern(languages, magicCommentDirectives) {
    // To be more reliable, the opening and closing comment must match
    const commentPattern = languages.map((lang)=>{
        const { start, end } = commentPatterns[lang];
        return `(?:${start}\\s*(${magicCommentDirectives.flatMap((d)=>[
                d.line,
                d.block?.start,
                d.block?.end
            ].filter(Boolean)).join('|')})\\s*${end})`;
    }).join('|');
    // White space is allowed, but otherwise it should be on it's own line
    return new RegExp(`^\\s*(?:${commentPattern})\\s*$`);
}
/**
 * Select comment styles based on language
 */ function getAllMagicCommentDirectiveStyles(lang, magicCommentDirectives) {
    switch(lang){
        case 'js':
        case 'javascript':
        case 'ts':
        case 'typescript':
            return getCommentPattern([
                'js',
                'jsBlock'
            ], magicCommentDirectives);
        case 'jsx':
        case 'tsx':
            return getCommentPattern([
                'js',
                'jsBlock',
                'jsx'
            ], magicCommentDirectives);
        case 'html':
            return getCommentPattern([
                'js',
                'jsBlock',
                'html'
            ], magicCommentDirectives);
        case 'python':
        case 'py':
        case 'bash':
            return getCommentPattern([
                'bash'
            ], magicCommentDirectives);
        case 'markdown':
        case 'md':
            // Text uses HTML, front matter uses bash
            return getCommentPattern([
                'html',
                'jsx',
                'bash'
            ], magicCommentDirectives);
        case 'tex':
        case 'latex':
        case 'matlab':
            return getCommentPattern([
                'tex'
            ], magicCommentDirectives);
        case 'lua':
        case 'haskell':
            return getCommentPattern([
                'lua'
            ], magicCommentDirectives);
        case 'sql':
            return getCommentPattern([
                'lua',
                'jsBlock'
            ], magicCommentDirectives);
        case 'wasm':
            return getCommentPattern([
                'wasm'
            ], magicCommentDirectives);
        case 'vb':
        case 'vba':
        case 'visual-basic':
            return getCommentPattern([
                'vb',
                'rem'
            ], magicCommentDirectives);
        case 'vbnet':
            return getCommentPattern([
                'vbnet',
                'rem'
            ], magicCommentDirectives);
        case 'batch':
            return getCommentPattern([
                'rem'
            ], magicCommentDirectives);
        case 'basic':
            return getCommentPattern([
                'rem',
                'f90'
            ], magicCommentDirectives);
        case 'fsharp':
            return getCommentPattern([
                'js',
                'ml'
            ], magicCommentDirectives);
        case 'ocaml':
        case 'sml':
            return getCommentPattern([
                'ml'
            ], magicCommentDirectives);
        case 'fortran':
            return getCommentPattern([
                'f90'
            ], magicCommentDirectives);
        case 'cobol':
            return getCommentPattern([
                'cobol'
            ], magicCommentDirectives);
        default:
            // All popular comment types
            return getCommentPattern(popularCommentTypes, magicCommentDirectives);
    }
}
function parseCodeBlockTitle(metastring) {
    return metastring?.match(codeBlockTitleRegex)?.groups.title ?? '';
}
function getMetaLineNumbersStart(metastring) {
    const showLineNumbersMeta = metastring?.split(' ').find((str)=>str.startsWith('showLineNumbers'));
    if (showLineNumbersMeta) {
        if (showLineNumbersMeta.startsWith('showLineNumbers=')) {
            const value = showLineNumbersMeta.replace('showLineNumbers=', '');
            return parseInt(value, 10);
        }
        return 1;
    }
    return undefined;
}
function getLineNumbersStart({ showLineNumbers, metastring }) {
    const defaultStart = 1;
    if (typeof showLineNumbers === 'boolean') {
        return showLineNumbers ? defaultStart : undefined;
    }
    if (typeof showLineNumbers === 'number') {
        return showLineNumbers;
    }
    return getMetaLineNumbersStart(metastring);
}
// TODO Docusaurus v4: remove, only kept for internal retro-compatibility
//  See https://github.com/facebook/docusaurus/pull/11153
function containsLineNumbers(metastring) {
    return Boolean(metastring?.includes('showLineNumbers'));
}
function parseCodeLinesFromMetastring(code, { metastring, magicComments }) {
    // Highlighted lines specified in props: don't parse the content
    if (metastring && metastringLinesRangeRegex.test(metastring)) {
        const linesRange = metastring.match(metastringLinesRangeRegex).groups.range;
        if (magicComments.length === 0) {
            throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${metastring}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);
        }
        const metastringRangeClassName = magicComments[0].className;
        const lines = parse_numeric_range__rspack_import_2_default()(linesRange).filter((n)=>n > 0).map((n)=>[
                n - 1,
                [
                    metastringRangeClassName
                ]
            ]);
        return {
            lineClassNames: Object.fromEntries(lines),
            code
        };
    }
    return null;
}
function parseCodeLinesFromContent(code, params) {
    const { language, magicComments } = params;
    if (language === undefined) {
        return {
            lineClassNames: {},
            code
        };
    }
    const directiveRegex = getAllMagicCommentDirectiveStyles(language, magicComments);
    // Go through line by line
    const lines = code.split(/\r?\n/);
    const blocks = Object.fromEntries(magicComments.map((d)=>[
            d.className,
            {
                start: 0,
                range: ''
            }
        ]));
    const lineToClassName = Object.fromEntries(magicComments.filter((d)=>d.line).map(({ className, line })=>[
            line,
            className
        ]));
    const blockStartToClassName = Object.fromEntries(magicComments.filter((d)=>d.block).map(({ className, block })=>[
            block.start,
            className
        ]));
    const blockEndToClassName = Object.fromEntries(magicComments.filter((d)=>d.block).map(({ className, block })=>[
            block.end,
            className
        ]));
    for(let lineNumber = 0; lineNumber < lines.length;){
        const line = lines[lineNumber];
        const match = line.match(directiveRegex);
        if (!match) {
            // Lines without directives are unchanged
            lineNumber += 1;
            continue;
        }
        const directive = match.slice(1).find((item)=>item !== undefined);
        if (lineToClassName[directive]) {
            blocks[lineToClassName[directive]].range += `${lineNumber},`;
        } else if (blockStartToClassName[directive]) {
            blocks[blockStartToClassName[directive]].start = lineNumber;
        } else if (blockEndToClassName[directive]) {
            blocks[blockEndToClassName[directive]].range += `${blocks[blockEndToClassName[directive]].start}-${lineNumber - 1},`;
        }
        lines.splice(lineNumber, 1);
    }
    const lineClassNames = {};
    Object.entries(blocks).forEach(([className, { range }])=>{
        parse_numeric_range__rspack_import_2_default()(range).forEach((l)=>{
            lineClassNames[l] ??= [];
            lineClassNames[l].push(className);
        });
    });
    return {
        code: lines.join('\n'),
        lineClassNames
    };
}
/**
 * Parses the code content, strips away any magic comments, and returns the
 * clean content and the highlighted lines marked by the comments or metastring.
 *
 * If the metastring contains a range, the `content` will be returned as-is
 * without any parsing. The returned `lineClassNames` will be a map from that
 * number range to the first magic comment config entry (which _should_ be for
 * line highlight directives.)
 */ function parseLines(code, params) {
    // Historical behavior: we remove last line break
    const newCode = code.replace(/\r?\n$/, '');
    // Historical behavior: we try one strategy after the other
    // we don't support mixing metastring ranges + magic comments
    return parseCodeLinesFromMetastring(newCode, {
        ...params
    }) ?? parseCodeLinesFromContent(newCode, {
        ...params
    });
}
/**
 * Gets the language name from the class name (set by MDX).
 * e.g. `"language-javascript"` => `"javascript"`.
 * Returns undefined if there is no language class name.
 */ function parseClassNameLanguage(className) {
    if (!className) {
        return undefined;
    }
    const languageClassName = className.split(' ').find((str)=>str.startsWith('language-'));
    return languageClassName?.replace(/language-/, '');
}
// Prism languages are always lowercase
// We want to fail-safe and allow both "php" and "PHP"
// See https://github.com/facebook/docusaurus/issues/9012
function normalizeLanguage(language) {
    return language?.toLowerCase();
}
function getLanguage(params) {
    return normalizeLanguage(params.language ?? parseClassNameLanguage(params.className) ?? params.defaultLanguage) ?? 'text'; // There's always a language, required by Prism;
}
/**
 * This ensures that we always have the code block language as className
 * For MDX code blocks this is provided automatically by MDX
 * For JSX code blocks, the language gets added by this function
 * This ensures both cases lead to a consistent HTML output
 */ function ensureLanguageClassName({ className, language }) {
    return clsx(className, language && !className?.includes(`language-${language}`) && `language-${language}`);
}
function createCodeBlockMetadata(params) {
    const language = getLanguage({
        language: params.language,
        defaultLanguage: params.defaultLanguage,
        className: params.className
    });
    const { lineClassNames, code } = parseLines(params.code, {
        metastring: params.metastring,
        magicComments: params.magicComments,
        language
    });
    const className = ensureLanguageClassName({
        className: params.className,
        language
    });
    const title = parseCodeBlockTitle(params.metastring) || params.title;
    const lineNumbersStart = getLineNumbersStart({
        showLineNumbers: params.showLineNumbers,
        metastring: params.metastring
    });
    return {
        codeInput: params.code,
        code,
        className,
        language,
        title,
        lineNumbersStart,
        lineClassNames
    };
}
function getPrismCssVariables(prismTheme) {
    const mapping = {
        color: '--prism-color',
        backgroundColor: '--prism-background-color'
    };
    const properties = {};
    Object.entries(prismTheme.plain).forEach(([key, value])=>{
        const varName = mapping[key];
        if (varName && typeof value === 'string') {
            properties[varName] = value;
        }
    });
    return properties;
}
const CodeBlockContext = /*#__PURE__*/ (/* unused pure expression or super */ null && (createContext(null)));
function CodeBlockContextProvider({ metadata, wordWrap, children }) {
    // Should we optimize this in 2 contexts?
    // Unlike metadata, wordWrap is stateful and likely to trigger re-renders
    const value = useMemo(()=>{
        return {
            metadata,
            wordWrap
        };
    }, [
        metadata,
        wordWrap
    ]);
    return /*#__PURE__*/ _jsx(CodeBlockContext.Provider, {
        value: value,
        children: children
    });
}
function useCodeBlockContext() {
    const value = useContext(CodeBlockContext);
    if (value === null) {
        throw new ReactContextError('CodeBlockContextProvider');
    }
    return value;
} //# sourceMappingURL=codeBlockUtils.js.map


},
6232(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  h: () => (useFilteredAndTreeifiedTOC)
});
/* import */ var react__rspack_import_0 = __webpack_require__(58101);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
function treeifyTOC(flatTOC) {
    const headings = flatTOC.map((heading)=>({
            ...heading,
            parentIndex: -1,
            children: []
        }));
    // Keep track of which previous index would be the current heading's direct
    // parent. Each entry <i> is the last index of the `headings` array at heading
    // level <i>. We will modify these indices as we iterate through all headings.
    // e.g. if an ### H3 was last seen at index 2, then prevIndexForLevel[3] === 2
    // indices 0 and 1 will remain unused.
    const prevIndexForLevel = Array(7).fill(-1);
    headings.forEach((curr, currIndex)=>{
        // Take the last seen index for each ancestor level. the highest index will
        // be the direct ancestor of the current heading.
        const ancestorLevelIndexes = prevIndexForLevel.slice(2, curr.level);
        curr.parentIndex = Math.max(...ancestorLevelIndexes);
        // Mark that curr.level was last seen at the current index.
        prevIndexForLevel[curr.level] = currIndex;
    });
    const rootNodes = [];
    // For a given parentIndex, add each Node into that parent's `children` array
    headings.forEach((heading)=>{
        const { parentIndex, ...rest } = heading;
        if (parentIndex >= 0) {
            headings[parentIndex].children.push(rest);
        } else {
            rootNodes.push(rest);
        }
    });
    return rootNodes;
}
/**
 * Takes a flat TOC list (from the MDX loader) and treeifies it into what the
 * TOC components expect. Memoized for performance.
 */ function useTreeifiedTOC(toc) {
    return useMemo(()=>treeifyTOC(toc), [
        toc
    ]);
}
function filterTOC({ toc, minHeadingLevel, maxHeadingLevel }) {
    function isValid(item) {
        return item.level >= minHeadingLevel && item.level <= maxHeadingLevel;
    }
    return toc.flatMap((item)=>{
        const filteredChildren = filterTOC({
            toc: item.children,
            minHeadingLevel,
            maxHeadingLevel
        });
        if (isValid(item)) {
            return [
                {
                    ...item,
                    children: filteredChildren
                }
            ];
        }
        return filteredChildren;
    });
}
/**
 * Takes a flat TOC list (from the MDX loader) and treeifies it into what the
 * TOC components expect, applying the `minHeadingLevel` and `maxHeadingLevel`.
 * Memoized for performance.
 *
 * **Important**: this is not the same as `useTreeifiedTOC(toc.filter(...))`,
 * because we have to filter the TOC after it has been treeified. This is mostly
 * to ensure that weird TOC structures preserve their semantics. For example, an
 * h3-h2-h4 sequence should not be treeified as an "h3 > h4" hierarchy with
 * min=3, max=4, but should rather be "[h3, h4]" (since the h2 heading has split
 * the two headings and they are not parent-children)
 */ function useFilteredAndTreeifiedTOC({ toc, minHeadingLevel, maxHeadingLevel }) {
    return (0,react__rspack_import_0.useMemo)(()=>filterTOC({
            toc: treeifyTOC(toc),
            minHeadingLevel,
            maxHeadingLevel
        }), [
        toc,
        minHeadingLevel,
        maxHeadingLevel
    ]);
} //# sourceMappingURL=tocUtils.js.map


},
48032(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  W: () => (usePluralForm)
});
/* import */ var react__rspack_import_0 = __webpack_require__(58101);
/* import */ var _docusaurus_useDocusaurusContext__rspack_import_1 = __webpack_require__(40266);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

// We want to ensurer a stable plural form order in all cases
// It is more convenient and natural to handle "small values" first
// See https://x.com/sebastienlorber/status/1366820663261077510
const OrderedPluralForms = [
    'zero',
    'one',
    'two',
    'few',
    'many',
    'other'
];
function sortPluralForms(pluralForms) {
    return OrderedPluralForms.filter((pf)=>pluralForms.includes(pf));
}
// Hardcoded english/fallback implementation
const EnglishPluralForms = {
    locale: 'en',
    pluralForms: sortPluralForms([
        'one',
        'other'
    ]),
    select: (count)=>count === 1 ? 'one' : 'other'
};
function createLocalePluralForms(locale) {
    const pluralRules = new Intl.PluralRules(locale);
    return {
        locale,
        pluralForms: sortPluralForms(pluralRules.resolvedOptions().pluralCategories),
        select: (count)=>pluralRules.select(count)
    };
}
/**
 * Poor man's `PluralSelector` implementation, using an English fallback. We
 * want a lightweight, future-proof and good-enough solution. We don't want a
 * perfect and heavy solution.
 *
 * Docusaurus classic theme has only 2 deeply nested labels requiring complex
 * plural rules. We don't want to use `Intl` + `PluralRules` polyfills + full
 * ICU syntax (react-intl) just for that.
 *
 * Notes:
 * - 2021: 92+% Browsers support `Intl.PluralRules`, and support will increase
 * in the future
 * - NodeJS >= 13 has full ICU support by default
 * - In case of "mismatch" between SSR and Browser ICU support, React keeps
 * working!
 */ function useLocalePluralForms() {
    const { i18n: { currentLocale } } = (0,_docusaurus_useDocusaurusContext__rspack_import_1/* ["default"] */.A)();
    return (0,react__rspack_import_0.useMemo)(()=>{
        try {
            return createLocalePluralForms(currentLocale);
        } catch (err) {
            console.error(`Failed to use Intl.PluralRules for locale "${currentLocale}".
Docusaurus will fallback to the default (English) implementation.
Error: ${err.message}
`);
            return EnglishPluralForms;
        }
    }, [
        currentLocale
    ]);
}
function selectPluralMessage(pluralMessages, count, localePluralForms) {
    const separator = '|';
    const parts = pluralMessages.split(separator);
    if (parts.length === 1) {
        return parts[0];
    }
    if (parts.length > localePluralForms.pluralForms.length) {
        console.error(`For locale=${localePluralForms.locale}, a maximum of ${localePluralForms.pluralForms.length} plural forms are expected (${localePluralForms.pluralForms.join(',')}), but the message contains ${parts.length}: ${pluralMessages}`);
    }
    const pluralForm = localePluralForms.select(count);
    const pluralFormIndex = localePluralForms.pluralForms.indexOf(pluralForm);
    // In case of not enough plural form messages, we take the last one (other)
    // instead of returning undefined
    return parts[Math.min(pluralFormIndex, parts.length - 1)];
}
/**
 * Reads the current locale and returns an interface very similar to
 * `Intl.PluralRules`.
 */ function usePluralForm() {
    const localePluralForm = useLocalePluralForms();
    return {
        selectMessage: (count, pluralMessages)=>selectPluralMessage(pluralMessages, count, localePluralForm)
    };
} //# sourceMappingURL=usePluralForm.js.map


},
39425(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (Comment)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _docusaurus_BrowserOnly__rspack_import_1 = __webpack_require__(11694);
/* import */ var _docusaurus_theme_common__rspack_import_4 = __webpack_require__(95437);
/* import */ var _docusaurus_theme_common__rspack_import_5 = __webpack_require__(24478);
/* import */ var _docusaurus_useDocusaurusContext__rspack_import_2 = __webpack_require__(40266);
/* import */ var _giscus_react__rspack_import_3 = __webpack_require__(23723);





const defaultConfig = {
    id: 'comments',
    mapping: 'title',
    reactionsEnabled: '1',
    emitMetadata: '0',
    inputPosition: 'top',
    lang: 'zh-TW',
    theme: 'light',
    darkTheme: 'dark_dimmed'
};
function Comment() {
    const themeConfig = (0,_docusaurus_theme_common__rspack_import_4/* .useThemeConfig */.p)();
    const { i18n } = (0,_docusaurus_useDocusaurusContext__rspack_import_2/* ["default"] */.A)();
    // merge default config
    const giscus = {
        ...defaultConfig,
        ...themeConfig.giscus
    };
    if (!giscus.repo || !giscus.repoId || !giscus.categoryId) {
        throw new Error('You must provide `repo`, `repoId`, and `categoryId` to `themeConfig.giscus`.');
    }
    giscus.theme = (0,_docusaurus_theme_common__rspack_import_5/* .useColorMode */.G)().colorMode === 'dark' ? giscus.darkTheme : giscus.theme;
    giscus.lang = i18n.currentLocale;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_BrowserOnly__rspack_import_1/* ["default"] */.A, {
        fallback: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
            children: "Loading Comments..."
        }),
        children: ()=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_giscus_react__rspack_import_3/* ["default"] */.A, {
                ...giscus
            })
    });
}


},
75831(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (BlogLayout)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _site_src_lib_utils__rspack_import_3 = __webpack_require__(76345);
/* import */ var _theme_BlogSidebar__rspack_import_1 = __webpack_require__(35551);
/* import */ var _theme_Layout__rspack_import_2 = __webpack_require__(1419);




function BlogLayout(props) {
    const { sidebar, toc, children, ...layoutProps } = props;
    const hasSidebar = sidebar && sidebar.items.length > 0;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Layout__rspack_import_2/* ["default"] */.A, {
        ...layoutProps,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
            className: "margin-vert--md container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_BlogSidebar__rspack_import_1/* ["default"] */.A, {
                        sidebar: sidebar
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("main", {
                        className: (0,_site_src_lib_utils__rspack_import_3.cn)('col', {
                            'col--8': hasSidebar,
                            'col--8 col--offset-2': !hasSidebar
                        }),
                        itemScope: true,
                        itemType: "http://schema.org/Blog",
                        children: children
                    }),
                    toc && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "col col--2 px-0.5",
                        children: toc
                    })
                ]
            })
        })
    });
}


},
23550(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (BlogPostItemContainer)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _docusaurus_plugin_content_blog_client__rspack_import_1 = __webpack_require__(70740);
/* import */ var _docusaurus_useBaseUrl__rspack_import_2 = __webpack_require__(66025);
/* import */ var _site_src_lib_utils__rspack_import_3 = __webpack_require__(76345);




function BlogPostItemContainer({ children, className }) {
    const { frontMatter, assets } = (0,_docusaurus_plugin_content_blog_client__rspack_import_1/* .useBlogPost */.e7)();
    const { withBaseUrl } = (0,_docusaurus_useBaseUrl__rspack_import_2/* .useBaseUrlUtils */.hH)();
    const hideImage = frontMatter.hideImage === true;
    const image = hideImage ? undefined : assets.image ?? frontMatter.image;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("article", {
        className: (0,_site_src_lib_utils__rspack_import_3.cn)('relative px-4 pt-4 pb-3 lg:px-4', className),
        itemProp: "blogPost",
        itemScope: true,
        itemType: "http://schema.org/BlogPosting",
        children: [
            image && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                        itemProp: "image",
                        content: withBaseUrl(image, {
                            absolute: true
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: "absolute inset-0 z-1 h-[224px]",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                            className: "size-full rounded-[var(--ifm-pagination-nav-border-radius)] bg-cover bg-center bg-no-repeat",
                            style: {
                                WebkitMaskImage: 'linear-gradient(180deg, #fff -17.19%, #00000000 92.43%)',
                                maskImage: 'linear-gradient(180deg, #fff -17.19%, #00000000 92.43%)',
                                backgroundImage: `url("${image}")`
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        style: {
                            height: '120px'
                        }
                    })
                ]
            }),
            children
        ]
    });
}


},
92164(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (BlogPostItemContent)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _docusaurus_plugin_content_blog_client__rspack_import_1 = __webpack_require__(70740);
/* import */ var _docusaurus_utils_common__rspack_import_3 = __webpack_require__(4187);
/* import */ var _site_src_lib_utils__rspack_import_4 = __webpack_require__(76345);
/* import */ var _theme_MDXContent__rspack_import_2 = __webpack_require__(50879);





function BlogPostItemContent({ children, className }) {
    const { isBlogPostPage } = (0,_docusaurus_plugin_content_blog_client__rspack_import_1/* .useBlogPost */.e7)();
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
        // This ID is used for the feed generation to locate the main content
        id: isBlogPostPage ? _docusaurus_utils_common__rspack_import_3.blogPostContainerID : undefined,
        className: (0,_site_src_lib_utils__rspack_import_4.cn)('markdown', className),
        itemProp: "articleBody",
        style: {
            position: 'relative'
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_MDXContent__rspack_import_2/* ["default"] */.A, {
            children: children
        })
    });
}


},
76128(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (BlogPostItemFooterReadMoreLink)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _docusaurus_Link__rspack_import_1 = __webpack_require__(59078);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(46218);
/* import */ var _iconify_react__rspack_import_3 = __webpack_require__(77533);
/* import */ var react__rspack_import_4 = __webpack_require__(58101);





function ReadMoreLabel() {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("b", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
            id: "theme.blog.post.readMore",
            description: "The label used in blog post item excerpts to link to full blog posts",
            children: "Read More"
        })
    });
}
function BlogPostItemFooterReadMoreLink(props) {
    const { blogPostTitle, ...linkProps } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Link__rspack_import_1/* ["default"] */.A, {
        "aria-label": (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
            message: 'Read more about {title}',
            id: 'theme.blog.post.readMoreLabel',
            description: 'The ARIA label for the link to full blog posts from excerpts'
        }, {
            title: blogPostTitle
        }),
        style: {
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem'
        },
        ...linkProps,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(ReadMoreLabel, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_iconify_react__rspack_import_3/* .Icon */.In, {
                icon: "ri:arrow-right-line"
            })
        ]
    });
}


},
852(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (BlogPostItemFooter)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _docusaurus_plugin_content_blog_client__rspack_import_1 = __webpack_require__(70740);
/* import */ var _docusaurus_theme_common_internal__rspack_import_7 = __webpack_require__(71783);
/* import */ var _iconify_react__rspack_import_2 = __webpack_require__(77533);
/* import */ var _site_src_lib_utils__rspack_import_8 = __webpack_require__(76345);
/* import */ var _theme_BlogPostItem_Footer_ReadMoreLink__rspack_import_3 = __webpack_require__(76128);
/* import */ var _theme_Tag__rspack_import_4 = __webpack_require__(55871);
/* import */ var _Header_Info_index__rspack_import_5 = __webpack_require__(18977);
/* import */ var _styles_module_css__rspack_import_6 = __webpack_require__(39278);
/* import */ var _styles_module_css__rspack_import_6_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_6);









function BlogPostItemFooter() {
    const { metadata, isBlogPostPage } = (0,_docusaurus_plugin_content_blog_client__rspack_import_1/* .useBlogPost */.e7)();
    const { tags, title, editUrl, hasTruncateMarker, date, readingTime, authors } = metadata;
    const dateTimeFormat = (0,_docusaurus_theme_common_internal__rspack_import_7/* .useDateTimeFormat */.i)({
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC'
    });
    const formatDate = (blogDate)=>dateTimeFormat.format(new Date(blogDate));
    // A post is truncated if it's in the "list view" and it has a truncate marker
    const truncatedPost = !isBlogPostPage && hasTruncateMarker;
    const tagsExists = tags.length > 0;
    const authorsExists = authors.length > 0;
    const renderFooter = isBlogPostPage;
    if (!renderFooter) {
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
            style: {
                position: 'relative',
                zIndex: 2
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: (_styles_module_css__rspack_import_6_default().blogPostInfo),
                children: [
                    date && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_iconify_react__rspack_import_2/* .Icon */.In, {
                                icon: "ri:calendar-line"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("time", {
                                dateTime: date,
                                itemProp: "datePublished",
                                children: formatDate(date)
                            })
                        ]
                    }),
                    tagsExists && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_iconify_react__rspack_import_2/* .Icon */.In, {
                                icon: "ri:price-tag-3-line"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                className: (_styles_module_css__rspack_import_6_default().blogPostInfoTags),
                                children: tags.map(({ label, permalink: tagPermalink, description })=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Tag__rspack_import_4/* ["default"] */.A, {
                                        label: label,
                                        permalink: tagPermalink,
                                        description: description
                                    }, tagPermalink))
                            })
                        ]
                    }),
                    readingTime && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_iconify_react__rspack_import_2/* .Icon */.In, {
                                icon: "ri:time-line"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                className: (0,_site_src_lib_utils__rspack_import_8.cn)((_styles_module_css__rspack_import_6_default().blogPostReadTime), 'blog__readingTime'),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_Header_Info_index__rspack_import_5/* .ReadingTime */.u, {
                                    readingTime: readingTime
                                })
                            })
                        ]
                    }),
                    truncatedPost && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: (0,_site_src_lib_utils__rspack_import_8.cn)('flex flex-1 items-center justify-end gap-0.5 font-medium text-[var(--ifm-link-color)] opacity-0 transition-opacity duration-200 group-hover/blog:opacity-100', {
                            'col--3': tagsExists
                        }),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_BlogPostItem_Footer_ReadMoreLink__rspack_import_3/* ["default"] */.A, {
                            blogPostTitle: title,
                            to: metadata.permalink,
                            className: "hover:no-underline"
                        })
                    })
                ]
            })
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("footer", {
        className: (0,_site_src_lib_utils__rspack_import_8.cn)('row docusaurus-mt-lg', isBlogPostPage && (_styles_module_css__rspack_import_6_default().blogPostFooterDetailsFull)),
        children: truncatedPost && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
            className: (0,_site_src_lib_utils__rspack_import_8.cn)('col text--right', {
                'col--3': tagsExists
            }),
            children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_BlogPostItem_Footer_ReadMoreLink__rspack_import_3/* ["default"] */.A, {
                blogPostTitle: title,
                to: metadata.permalink
            })
        })
    });
}


},
18977(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (BlogPostItemHeaderInfo),
  u: () => (ReadingTime)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _docusaurus_Translate__rspack_import_1 = __webpack_require__(46218);
/* import */ var _docusaurus_plugin_content_blog_client__rspack_import_2 = __webpack_require__(70740);
/* import */ var _docusaurus_theme_common__rspack_import_5 = __webpack_require__(48032);
/* import */ var _docusaurus_theme_common_internal__rspack_import_6 = __webpack_require__(71783);
/* import */ var _site_src_lib_utils__rspack_import_7 = __webpack_require__(76345);
/* import */ var _iconify_react__rspack_import_3 = __webpack_require__(77533);
/* import */ var _site_src_theme_Tag__rspack_import_4 = __webpack_require__(55871);








// Very simple pluralization: probably good enough for now
function useReadingTimePlural() {
    const { selectMessage } = (0,_docusaurus_theme_common__rspack_import_5/* .usePluralForm */.W)();
    return (readingTimeFloat)=>{
        const readingTime = Math.ceil(readingTimeFloat);
        return selectMessage(readingTime, (0,_docusaurus_Translate__rspack_import_1/* .translate */.T)({
            id: 'theme.blog.post.readingTime.plurals',
            description: 'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
            message: 'One min read|{readingTime} min read'
        }, {
            readingTime
        }));
    };
}
function ReadingTime({ readingTime }) {
    const readingTimePlural = useReadingTimePlural();
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
        className: "truncate",
        children: readingTimePlural(readingTime)
    });
}
function DateTime({ date, formattedDate }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("time", {
        dateTime: date,
        itemProp: "datePublished",
        className: "truncate",
        children: formattedDate
    });
}
function BlogPostItemHeaderInfo({ className }) {
    const { metadata } = (0,_docusaurus_plugin_content_blog_client__rspack_import_2/* .useBlogPost */.e7)();
    const { date, tags, readingTime } = metadata;
    const tagsExists = tags.length > 0;
    const dateTimeFormat = (0,_docusaurus_theme_common_internal__rspack_import_6/* .useDateTimeFormat */.i)({
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC'
    });
    const formatDate = (blogDate)=>dateTimeFormat.format(new Date(blogDate));
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        className: (0,_site_src_lib_utils__rspack_import_7.cn)('inline-flex flex-wrap gap-1.5 text-base', 'margin-bottom--md', className),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "inline-flex items-center gap-1",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_iconify_react__rspack_import_3/* .Icon */.In, {
                        icon: "ri:calendar-line"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(DateTime, {
                        date: date,
                        formattedDate: formatDate(date)
                    })
                ]
            }),
            tagsExists && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "inline-flex items-center gap-1",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_iconify_react__rspack_import_3/* .Icon */.In, {
                        icon: "ri:price-tag-3-line"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                        className: (0,_site_src_lib_utils__rspack_import_7.cn)('truncate', 'inline-flex text-center'),
                        children: tags.slice(0, 3).map(({ label, description, permalink: tagPermalink }, index)=>{
                            return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                children: [
                                    index !== 0 && '/',
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_site_src_theme_Tag__rspack_import_4/* ["default"] */.A, {
                                        label: label,
                                        permalink: tagPermalink,
                                        className: "tag text-text hover:text-link !border-0 p-0.5",
                                        description: description
                                    })
                                ]
                            }, tagPermalink);
                        })
                    })
                ]
            }),
            typeof readingTime !== 'undefined' && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: "inline-flex items-center gap-1",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_iconify_react__rspack_import_3/* .Icon */.In, {
                        icon: "ri:time-line"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(ReadingTime, {
                        readingTime: readingTime
                    })
                ]
            })
        ]
    });
}


},
54221(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (BlogPostItemHeaderTitle)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _docusaurus_Link__rspack_import_1 = __webpack_require__(59078);
/* import */ var _docusaurus_plugin_content_blog_client__rspack_import_2 = __webpack_require__(70740);
/* import */ var _site_src_lib_utils__rspack_import_4 = __webpack_require__(76345);
/* import */ var _styles_module_css__rspack_import_3 = __webpack_require__(93483);
/* import */ var _styles_module_css__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_3);





function BlogPostItemHeaderTitle({ className }) {
    const { metadata, isBlogPostPage } = (0,_docusaurus_plugin_content_blog_client__rspack_import_2/* .useBlogPost */.e7)();
    const { permalink, title } = metadata;
    const TitleHeading = isBlogPostPage ? 'h1' : 'h2';
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(TitleHeading, {
        className: (0,_site_src_lib_utils__rspack_import_4.cn)((_styles_module_css__rspack_import_3_default().title), className),
        itemProp: "headline",
        children: isBlogPostPage ? title : /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_1/* ["default"] */.A, {
            itemProp: "url",
            to: permalink,
            className: (_styles_module_css__rspack_import_3_default().titleLink),
            children: title
        })
    });
}


},
8758(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (BlogPostItemHeader)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _docusaurus_plugin_content_blog_client__rspack_import_1 = __webpack_require__(70740);
/* import */ var _theme_BlogPostItem_Header_Info__rspack_import_2 = __webpack_require__(18977);
/* import */ var _theme_BlogPostItem_Header_Title__rspack_import_3 = __webpack_require__(54221);




function BlogPostItemHeader() {
    const { isBlogPostPage } = (0,_docusaurus_plugin_content_blog_client__rspack_import_1/* .useBlogPost */.e7)();
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("header", {
        style: {
            position: 'relative',
            zIndex: 2
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_BlogPostItem_Header_Title__rspack_import_3/* ["default"] */.A, {}),
            isBlogPostPage && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_BlogPostItem_Header_Info__rspack_import_2/* ["default"] */.A, {})
            })
        ]
    });
}


},
75995(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (BlogPostItemSummary)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _docusaurus_plugin_content_blog_client__rspack_import_1 = __webpack_require__(70740);
/* import */ var _styles_module_css__rspack_import_2 = __webpack_require__(88161);
/* import */ var _styles_module_css__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_2);



function getSummary(frontMatter) {
    if (typeof frontMatter.summary !== 'string') {
        return undefined;
    }
    const summary = frontMatter.summary.trim();
    return summary.length > 0 ? summary : undefined;
}
function BlogPostItemSummary() {
    const { frontMatter, isBlogPostPage } = (0,_docusaurus_plugin_content_blog_client__rspack_import_1/* .useBlogPost */.e7)();
    const summary = getSummary(frontMatter);
    if (!isBlogPostPage || !summary) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("aside", {
        className: (_styles_module_css__rspack_import_2_default().summary),
        "aria-labelledby": "blog-post-summary-title",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                id: "blog-post-summary-title",
                className: (_styles_module_css__rspack_import_2_default().title),
                children: "概要"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                className: (_styles_module_css__rspack_import_2_default().content),
                children: summary
            })
        ]
    });
}


},
92686(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (BlogPostItem)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _docusaurus_plugin_content_blog_client__rspack_import_1 = __webpack_require__(70740);
/* import */ var _site_src_lib_utils__rspack_import_7 = __webpack_require__(76345);
/* import */ var _theme_BlogPostItem_Container__rspack_import_2 = __webpack_require__(23550);
/* import */ var _theme_BlogPostItem_Content__rspack_import_3 = __webpack_require__(92164);
/* import */ var _theme_BlogPostItem_Footer__rspack_import_4 = __webpack_require__(852);
/* import */ var _theme_BlogPostItem_Header__rspack_import_5 = __webpack_require__(8758);
/* import */ var _theme_BlogPostItem_Summary__rspack_import_6 = __webpack_require__(75995);








// apply a bottom margin in list view
function useContainerClassName() {
    const { isBlogPostPage } = (0,_docusaurus_plugin_content_blog_client__rspack_import_1/* .useBlogPost */.e7)();
    return !isBlogPostPage ? 'group/blog rounded-md mt-0 bg-blog mb-8 shadow-blog' : '';
}
function BlogPostItem({ children, className }) {
    const containerClassName = useContainerClassName();
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_theme_BlogPostItem_Container__rspack_import_2/* ["default"] */.A, {
        className: (0,_site_src_lib_utils__rspack_import_7.cn)(containerClassName, className),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_BlogPostItem_Header__rspack_import_5/* ["default"] */.A, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_BlogPostItem_Summary__rspack_import_6/* ["default"] */.A, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_BlogPostItem_Content__rspack_import_3/* ["default"] */.A, {
                children: children
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_BlogPostItem_Footer__rspack_import_4/* ["default"] */.A, {})
        ]
    });
}


},
32866(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (BlogPostPageMetadata)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _docusaurus_plugin_content_blog_client__rspack_import_1 = __webpack_require__(70740);
/* import */ var _docusaurus_theme_common__rspack_import_2 = __webpack_require__(8961);



function BlogPostPageMetadata() {
    const { assets, metadata } = (0,_docusaurus_plugin_content_blog_client__rspack_import_1/* .useBlogPost */.e7)();
    const { title, description, date, tags, authors, frontMatter } = metadata;
    const { keywords } = frontMatter;
    const image = assets.image ?? frontMatter.image;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_theme_common__rspack_import_2/* .PageMetadata */.be, {
        title: title,
        description: description,
        keywords: keywords,
        image: image,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "og:type",
                content: "article"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "article:published_time",
                content: date
            }),
            authors.some((author)=>author.url) && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "article:author",
                content: authors.map((author)=>author.url).filter(Boolean).join(',')
            }),
            tags.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("meta", {
                property: "article:tag",
                content: tags.map((tag)=>tag.label).join(',')
            })
        ]
    });
}


},
38818(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (BlogPostPage)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _docusaurus_plugin_content_blog_client__rspack_import_1 = __webpack_require__(70740);
/* import */ var _docusaurus_theme_common__rspack_import_9 = __webpack_require__(8961);
/* import */ var _docusaurus_theme_common__rspack_import_11 = __webpack_require__(94630);
/* import */ var _site_src_components_Comment__rspack_import_2 = __webpack_require__(39425);
/* import */ var _site_src_lib_utils__rspack_import_10 = __webpack_require__(76345);
/* import */ var _theme_BackToTopButton__rspack_import_3 = __webpack_require__(11604);
/* import */ var _theme_BlogLayout__rspack_import_4 = __webpack_require__(75831);
/* import */ var _theme_BlogPostItem__rspack_import_5 = __webpack_require__(92686);
/* import */ var _theme_BlogPostPage_Metadata__rspack_import_6 = __webpack_require__(32866);
/* import */ var _theme_BlogPostPaginator__rspack_import_7 = __webpack_require__(71804);
/* import */ var _theme_TOC__rspack_import_8 = __webpack_require__(79181);











function BlogPostPageContent({ sidebar, children }) {
    const { metadata, toc } = (0,_docusaurus_plugin_content_blog_client__rspack_import_1/* .useBlogPost */.e7)();
    const { nextItem, prevItem, frontMatter } = metadata;
    const { hide_table_of_contents: hideTableOfContents, toc_min_heading_level: tocMinHeadingLevel, toc_max_heading_level: tocMaxHeadingLevel, hide_comment: hideComment } = frontMatter;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_theme_BlogLayout__rspack_import_4/* ["default"] */.A, {
        wrapperClassName: "blog-post-page-background",
        sidebar: sidebar,
        toc: !hideTableOfContents && toc.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_TOC__rspack_import_8/* ["default"] */.A, {
            toc: toc,
            minHeadingLevel: tocMinHeadingLevel,
            maxHeadingLevel: tocMaxHeadingLevel
        }) : undefined,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_BlogPostItem__rspack_import_5/* ["default"] */.A, {
                children: children
            }),
            (nextItem || prevItem) && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "margin-bottom--md",
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_BlogPostPaginator__rspack_import_7/* ["default"] */.A, {
                    nextItem: nextItem,
                    prevItem: prevItem
                })
            }),
            !hideComment && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_site_src_components_Comment__rspack_import_2/* ["default"] */.A, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_BackToTopButton__rspack_import_3/* ["default"] */.A, {})
        ]
    });
}
function BlogPostPage(props) {
    const BlogPostContent = props.content;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_plugin_content_blog_client__rspack_import_1/* .BlogPostProvider */["in"], {
        content: props.content,
        isBlogPostPage: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_theme_common__rspack_import_9/* .HtmlClassNameProvider */.e3, {
            className: (0,_site_src_lib_utils__rspack_import_10.cn)(_docusaurus_theme_common__rspack_import_11/* .ThemeClassNames.wrapper.blogPages */.G.wrapper.blogPages, _docusaurus_theme_common__rspack_import_11/* .ThemeClassNames.page.blogPostPage */.G.page.blogPostPage),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_BlogPostPage_Metadata__rspack_import_6/* ["default"] */.A, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(BlogPostPageContent, {
                    sidebar: props.sidebar,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(BlogPostContent, {})
                })
            ]
        })
    });
}


},
50745(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _docusaurus_plugin_content_blog_client__rspack_import_1 = __webpack_require__(70740);
/* import */ var _docusaurus_theme_common__rspack_import_4 = __webpack_require__(95437);
/* import */ var _theme_Heading__rspack_import_2 = __webpack_require__(71807);
/* import */ var react__rspack_import_3 = __webpack_require__(58101);





function BlogSidebarYearGroup({ year, yearGroupHeadingClassName, children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
        role: "group",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Heading__rspack_import_2/* ["default"] */.A, {
                as: "h3",
                className: yearGroupHeadingClassName,
                children: year
            }),
            children
        ]
    });
}
function BlogSidebarContent({ items, yearGroupHeadingClassName, ListComponent }) {
    const themeConfig = (0,_docusaurus_theme_common__rspack_import_4/* .useThemeConfig */.p)();
    if (themeConfig.blog.sidebar.groupByYear) {
        const itemsByYear = (0,_docusaurus_plugin_content_blog_client__rspack_import_1/* .groupBlogSidebarItemsByYear */.Ki)(items);
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(react_jsx_runtime__rspack_import_0.Fragment, {
            children: itemsByYear.map(([year, yearItems])=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(BlogSidebarYearGroup, {
                    year: year,
                    yearGroupHeadingClassName: yearGroupHeadingClassName,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(ListComponent, {
                        items: yearItems
                    })
                }, year))
        });
    } else {
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(ListComponent, {
            items: items
        });
    }
}
/* export default */ const __rspack_default_export = (/*#__PURE__*/(0,react__rspack_import_3.memo)(BlogSidebarContent));


},
26910(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (BlogSidebarDesktop)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _docusaurus_Link__rspack_import_1 = __webpack_require__(59078);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(46218);
/* import */ var _docusaurus_plugin_content_blog_client__rspack_import_3 = __webpack_require__(70740);
/* import */ var _iconify_react__rspack_import_4 = __webpack_require__(77533);
/* import */ var _site_src_lib_utils__rspack_import_8 = __webpack_require__(76345);
/* import */ var _theme_BlogSidebar_Content__rspack_import_5 = __webpack_require__(50745);
/* import */ var clsx__rspack_import_7 = __webpack_require__(13526);
/* import */ var _styles_module_css__rspack_import_6 = __webpack_require__(34156);
/* import */ var _styles_module_css__rspack_import_6_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_6);









const ListComponent = ({ items })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_plugin_content_blog_client__rspack_import_3/* .BlogSidebarItemList */.OU, {
        items: items,
        ulClassName: (0,clsx__rspack_import_7/* ["default"] */.A)((_styles_module_css__rspack_import_6_default().sidebarItemList), 'clean-list'),
        liClassName: (_styles_module_css__rspack_import_6_default().sidebarItem),
        linkClassName: (_styles_module_css__rspack_import_6_default().sidebarItemLink),
        linkActiveClassName: (_styles_module_css__rspack_import_6_default().sidebarItemLinkActive)
    });
};
function BlogSidebarDesktop({ sidebar }) {
    const items = (0,_docusaurus_plugin_content_blog_client__rspack_import_3/* .useVisibleBlogSidebarItems */.Gx)(sidebar.items);
    const handleBack = ()=>{
        window.history.back();
    };
    const handleBackKeyDown = (e)=>{
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleBack();
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("aside", {
        className: (0,_site_src_lib_utils__rspack_import_8.cn)('col col--2', (_styles_module_css__rspack_import_6_default().sidebarAside)),
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("nav", {
            className: (0,_site_src_lib_utils__rspack_import_8.cn)((_styles_module_css__rspack_import_6_default().sidebar), 'thin-scrollbar'),
            "aria-label": (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
                id: 'theme.blog.sidebar.navAriaLabel',
                message: 'Blog recent posts navigation',
                description: 'The ARIA label for recent posts in the blog sidebar'
            }),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                    className: (_styles_module_css__rspack_import_6_default().backButton),
                    onClick: handleBack,
                    onKeyDown: handleBackKeyDown,
                    role: "button",
                    tabIndex: 0,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_iconify_react__rspack_import_4/* .Icon */.In, {
                        icon: "ri:arrow-go-back-line"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_1/* ["default"] */.A, {
                    href: "/blog",
                    className: (0,_site_src_lib_utils__rspack_import_8.cn)((_styles_module_css__rspack_import_6_default().sidebarItemTitle), (_styles_module_css__rspack_import_6_default().sidebarTitle)),
                    children: sidebar.title
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                    className: (0,_site_src_lib_utils__rspack_import_8.cn)('margin-top--sm', (_styles_module_css__rspack_import_6_default().sidebarContent)),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_BlogSidebar_Content__rspack_import_5/* ["default"] */.A, {
                        items: items,
                        ListComponent: ListComponent,
                        yearGroupHeadingClassName: (_styles_module_css__rspack_import_6_default().yearGroupHeading)
                    })
                })
            ]
        })
    });
}


},
40956(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _docusaurus_plugin_content_blog_client__rspack_import_1 = __webpack_require__(70740);
/* import */ var _docusaurus_theme_common__rspack_import_5 = __webpack_require__(40875);
/* import */ var _theme_BlogSidebar_Content__rspack_import_2 = __webpack_require__(50745);
/* import */ var react__rspack_import_3 = __webpack_require__(58101);
/* import */ var _styles_module_css__rspack_import_4 = __webpack_require__(60318);
/* import */ var _styles_module_css__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_4);






const ListComponent = ({ items })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_plugin_content_blog_client__rspack_import_1/* .BlogSidebarItemList */.OU, {
        items: items,
        ulClassName: "menu__list",
        liClassName: "menu__list-item",
        linkClassName: "menu__link",
        linkActiveClassName: "menu__link--active"
    });
};
function BlogSidebarMobileSecondaryMenu({ sidebar }) {
    const items = (0,_docusaurus_plugin_content_blog_client__rspack_import_1/* .useVisibleBlogSidebarItems */.Gx)(sidebar.items);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_BlogSidebar_Content__rspack_import_2/* ["default"] */.A, {
        items: items,
        ListComponent: ListComponent,
        yearGroupHeadingClassName: (_styles_module_css__rspack_import_4_default().yearGroupHeading)
    });
}
function BlogSidebarMobile(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common__rspack_import_5/* .NavbarSecondaryMenuFiller */.GX, {
        component: BlogSidebarMobileSecondaryMenu,
        props: props
    });
}
/* export default */ const __rspack_default_export = (/*#__PURE__*/(0,react__rspack_import_3.memo)(BlogSidebarMobile));


},
35551(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (BlogSidebar)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _docusaurus_theme_common__rspack_import_3 = __webpack_require__(48776);
/* import */ var _theme_BlogSidebar_Desktop__rspack_import_1 = __webpack_require__(26910);
/* import */ var _theme_BlogSidebar_Mobile__rspack_import_2 = __webpack_require__(40956);




function BlogSidebar({ sidebar }) {
    const windowSize = (0,_docusaurus_theme_common__rspack_import_3/* .useWindowSize */.l)();
    if (!sidebar?.items.length) {
        return null;
    }
    // Mobile sidebar doesn't need to be server-rendered
    if (windowSize === 'mobile') {
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_BlogSidebar_Mobile__rspack_import_2/* ["default"] */.A, {
            sidebar: sidebar
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_BlogSidebar_Desktop__rspack_import_1/* ["default"] */.A, {
        sidebar: sidebar
    });
}


},
22373(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (CodeBlockContainer)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _docusaurus_theme_common__rspack_import_3 = __webpack_require__(1847);
/* import */ var _docusaurus_theme_common__rspack_import_6 = __webpack_require__(94630);
/* import */ var _docusaurus_theme_common_internal__rspack_import_4 = __webpack_require__(10796);
/* import */ var _site_src_lib_utils__rspack_import_5 = __webpack_require__(76345);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);
/* import */ var _styles_module_css__rspack_import_2 = __webpack_require__(28571);
/* import */ var _styles_module_css__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_2);






function CodeBlockContainer({ as: As, ...props }) {
    const prismTheme = (0,_docusaurus_theme_common__rspack_import_3/* .usePrismTheme */.A)();
    const prismCssVariables = (0,_docusaurus_theme_common_internal__rspack_import_4/* .getPrismCssVariables */.M$)(prismTheme);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(As, {
        ...props,
        style: prismCssVariables,
        className: (0,_site_src_lib_utils__rspack_import_5.cn)(props.className, (_styles_module_css__rspack_import_2_default().codeBlockContainer), _docusaurus_theme_common__rspack_import_6/* .ThemeClassNames.common.codeBlock */.G.common.codeBlock)
    });
}


},
14239(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (CodeBlockJSX)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _site_src_lib_utils__rspack_import_4 = __webpack_require__(76345);
/* import */ var _theme_CodeBlock_Container__rspack_import_1 = __webpack_require__(22373);
/* import */ var react__rspack_import_2 = __webpack_require__(58101);
/* import */ var _styles_module_css__rspack_import_3 = __webpack_require__(16921);
/* import */ var _styles_module_css__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_3);





// <pre> tags in markdown map to CodeBlocks. They may contain JSX children. When
// the children is not a simple string, we just return a styled block without
// actually highlighting.
function CodeBlockJSX({ children, className }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_CodeBlock_Container__rspack_import_1/* ["default"] */.A, {
        as: "pre",
        tabIndex: 0,
        className: (0,_site_src_lib_utils__rspack_import_4.cn)((_styles_module_css__rspack_import_3_default().codeBlockStandalone), 'thin-scrollbar', className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("code", {
            className: (_styles_module_css__rspack_import_3_default().codeBlockLines),
            children: children
        })
    });
}


},
85724(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (CodeBlockString)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _docusaurus_theme_common__rspack_import_9 = __webpack_require__(95437);
/* import */ var _docusaurus_theme_common__rspack_import_11 = __webpack_require__(1847);
/* import */ var _docusaurus_theme_common_internal__rspack_import_10 = __webpack_require__(10796);
/* import */ var _docusaurus_theme_common_internal__rspack_import_12 = __webpack_require__(20100);
/* import */ var _iconify_react__rspack_import_1 = __webpack_require__(77533);
/* import */ var _site_src_lib_utils__rspack_import_13 = __webpack_require__(76345);
/* import */ var _theme_CodeBlock_Container__rspack_import_2 = __webpack_require__(22373);
/* import */ var _theme_CodeBlock_CopyButton__rspack_import_3 = __webpack_require__(1143);
/* import */ var _theme_CodeBlock_Line__rspack_import_4 = __webpack_require__(8878);
/* import */ var _theme_CodeBlock_WordWrapButton__rspack_import_5 = __webpack_require__(5748);
/* import */ var prism_react_renderer__rspack_import_6 = __webpack_require__(72355);
/* import */ var react__rspack_import_7 = __webpack_require__(58101);
/* import */ var _styles_module_css__rspack_import_8 = __webpack_require__(16921);
/* import */ var _styles_module_css__rspack_import_8_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_8);












// Prism languages are always lowercase
// We want to fail-safe and allow both "php" and "PHP"
// See https://github.com/facebook/docusaurus/issues/9012
function normalizeLanguage(language) {
    return language?.toLowerCase();
}
function parseIcon(metastring) {
    const iconRegex = /icon=(?<quote>["'])(?<icon>.*?)\1/;
    const icon = metastring?.match(iconRegex)?.groups?.icon ?? '';
    if (!icon) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_iconify_react__rspack_import_1/* .Icon */.In, {
        icon: icon,
        width: "16"
    });
}
function CodeBlockString({ children, className: blockClassName = '', metastring, title: titleProp, showLineNumbers: showLineNumbersProp, language: languageProp }) {
    const { prism: { defaultLanguage, magicComments } } = (0,_docusaurus_theme_common__rspack_import_9/* .useThemeConfig */.p)();
    const language = normalizeLanguage(languageProp ?? (0,_docusaurus_theme_common_internal__rspack_import_10/* .parseClassNameLanguage */.DX)(blockClassName) ?? defaultLanguage);
    const prismTheme = (0,_docusaurus_theme_common__rspack_import_11/* .usePrismTheme */.A)();
    const wordWrap = (0,_docusaurus_theme_common_internal__rspack_import_12/* .useCodeWordWrap */.f)();
    // We still parse the metastring in case we want to support more syntax in the
    // future. Note that MDX doesn't strip quotes when parsing metastring:
    // "title=\"xyz\"" => title: "\"xyz\""
    const title = (0,_docusaurus_theme_common_internal__rspack_import_10/* .parseCodeBlockTitle */.wt)(metastring) || titleProp;
    const icon = parseIcon(metastring);
    const { lineClassNames, code } = (0,_docusaurus_theme_common_internal__rspack_import_10/* .parseLines */.Li)(children, {
        metastring,
        language,
        magicComments
    });
    const showLineNumbers = showLineNumbersProp ?? (0,_docusaurus_theme_common_internal__rspack_import_10/* .containsLineNumbers */._u)(metastring);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_theme_CodeBlock_Container__rspack_import_2/* ["default"] */.A, {
        as: "div",
        className: (0,_site_src_lib_utils__rspack_import_13.cn)(blockClassName, language && !blockClassName.includes(`language-${language}`) && `language-${language}`),
        children: [
            title && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: (_styles_module_css__rspack_import_8_default().codeBlockTitle),
                children: [
                    icon,
                    title,
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                        style: {
                            flex: 1,
                            textAlign: 'right'
                        },
                        children: language
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: (_styles_module_css__rspack_import_8_default().codeBlockContent),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(prism_react_renderer__rspack_import_6/* .Highlight */.f4, {
                        theme: prismTheme,
                        code: code,
                        language: language ?? 'text',
                        children: ({ className, style, tokens, getLineProps, getTokenProps })=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("pre", {
                                ref: wordWrap.codeBlockRef,
                                className: (0,_site_src_lib_utils__rspack_import_13.cn)(className, (_styles_module_css__rspack_import_8_default().codeBlock), 'thin-scrollbar'),
                                style: style,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("code", {
                                    className: (0,_site_src_lib_utils__rspack_import_13.cn)((_styles_module_css__rspack_import_8_default().codeBlockLines), showLineNumbers && (_styles_module_css__rspack_import_8_default().codeBlockLinesWithNumbering)),
                                    children: tokens.map((line, i)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_CodeBlock_Line__rspack_import_4/* ["default"] */.A, {
                                            line: line,
                                            getLineProps: getLineProps,
                                            getTokenProps: getTokenProps,
                                            classNames: lineClassNames[i],
                                            showLineNumbers: showLineNumbers
                                        }, i))
                                })
                            })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: (_styles_module_css__rspack_import_8_default().buttonGroup),
                        children: [
                            (wordWrap.isEnabled || wordWrap.isCodeScrollable) && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_CodeBlock_WordWrapButton__rspack_import_5/* ["default"] */.A, {
                                className: (_styles_module_css__rspack_import_8_default().codeButton),
                                onClick: ()=>wordWrap.toggle(),
                                isEnabled: wordWrap.isEnabled
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_CodeBlock_CopyButton__rspack_import_3/* ["default"] */.A, {
                                className: (_styles_module_css__rspack_import_8_default().codeButton),
                                code: code
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


},
1143(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (CopyButton)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _docusaurus_Translate__rspack_import_1 = __webpack_require__(46218);
/* import */ var _site_src_lib_utils__rspack_import_7 = __webpack_require__(76345);
/* import */ var _theme_Icon_Copy__rspack_import_2 = __webpack_require__(51854);
/* import */ var _theme_Icon_Success__rspack_import_3 = __webpack_require__(6186);
/* import */ var copy_text_to_clipboard__rspack_import_6 = __webpack_require__(31859);
/* import */ var react__rspack_import_4 = __webpack_require__(58101);
/* import */ var _styles_module_css__rspack_import_5 = __webpack_require__(27101);
/* import */ var _styles_module_css__rspack_import_5_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_5);








function CopyButton({ code, className }) {
    const [isCopied, setIsCopied] = (0,react__rspack_import_4.useState)(false);
    const copyTimeout = (0,react__rspack_import_4.useRef)(undefined);
    const handleCopyCode = (0,react__rspack_import_4.useCallback)(()=>{
        (0,copy_text_to_clipboard__rspack_import_6/* ["default"] */.A)(code);
        setIsCopied(true);
        copyTimeout.current = window.setTimeout(()=>{
            setIsCopied(false);
        }, 1000);
    }, [
        code
    ]);
    (0,react__rspack_import_4.useEffect)(()=>()=>window.clearTimeout(copyTimeout.current), []);
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("button", {
        type: "button",
        "aria-label": isCopied ? (0,_docusaurus_Translate__rspack_import_1/* .translate */.T)({
            id: 'theme.CodeBlock.copied',
            message: 'Copied',
            description: 'The copied button label on code blocks'
        }) : (0,_docusaurus_Translate__rspack_import_1/* .translate */.T)({
            id: 'theme.CodeBlock.copyButtonAriaLabel',
            message: 'Copy code to clipboard',
            description: 'The ARIA label for copy code blocks button'
        }),
        title: (0,_docusaurus_Translate__rspack_import_1/* .translate */.T)({
            id: 'theme.CodeBlock.copy',
            message: 'Copy',
            description: 'The copy button label on code blocks'
        }),
        className: (0,_site_src_lib_utils__rspack_import_7.cn)('clean-btn', className, (_styles_module_css__rspack_import_5_default().copyButton), isCopied && (_styles_module_css__rspack_import_5_default().copyButtonCopied)),
        onClick: handleCopyCode,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("span", {
            className: (_styles_module_css__rspack_import_5_default().copyButtonIcons),
            "aria-hidden": "true",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Icon_Copy__rspack_import_2/* ["default"] */.A, {
                    className: (_styles_module_css__rspack_import_5_default().copyButtonIcon)
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Icon_Success__rspack_import_3/* ["default"] */.A, {
                    className: (_styles_module_css__rspack_import_5_default().copyButtonSuccessIcon)
                })
            ]
        })
    });
}


},
8878(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (CodeBlockLine)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _site_src_lib_utils__rspack_import_2 = __webpack_require__(76345);
/* import */ var _styles_module_css__rspack_import_1 = __webpack_require__(63056);
/* import */ var _styles_module_css__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_1);



function CodeBlockLine({ line, classNames, showLineNumbers, getLineProps, getTokenProps }) {
    if (line.length === 1 && line[0]?.content === '\n') {
        line[0].content = '';
    }
    const lineProps = getLineProps({
        line,
        className: (0,_site_src_lib_utils__rspack_import_2.cn)(classNames, showLineNumbers && (_styles_module_css__rspack_import_1_default().codeLine))
    });
    const { key: _lineKey, ...linePropsWithoutKey } = lineProps;
    const lineTokens = line.map((token, key)=>{
        const { key: _tokenKey, ...tokenProps } = getTokenProps({
            token,
            key
        });
        return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
            ...tokenProps
        }, key);
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("span", {
        ...linePropsWithoutKey,
        children: [
            showLineNumbers ? /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(react_jsx_runtime__rspack_import_0.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                        className: (_styles_module_css__rspack_import_1_default().codeLineNumber)
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                        className: (_styles_module_css__rspack_import_1_default().codeLineContent),
                        children: lineTokens
                    })
                ]
            }) : lineTokens,
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("br", {})
        ]
    });
}


},
5748(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (WordWrapButton)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _docusaurus_Translate__rspack_import_1 = __webpack_require__(46218);
/* import */ var _site_src_lib_utils__rspack_import_5 = __webpack_require__(76345);
/* import */ var _theme_Icon_WordWrap__rspack_import_2 = __webpack_require__(6299);
/* import */ var react__rspack_import_3 = __webpack_require__(58101);
/* import */ var _styles_module_css__rspack_import_4 = __webpack_require__(67326);
/* import */ var _styles_module_css__rspack_import_4_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_4);






function WordWrapButton({ className, onClick, isEnabled }) {
    const title = (0,_docusaurus_Translate__rspack_import_1/* .translate */.T)({
        id: 'theme.CodeBlock.wordWrapToggle',
        message: 'Toggle word wrap',
        description: 'The title attribute for toggle word wrapping button of code block lines'
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("button", {
        type: "button",
        onClick: onClick,
        className: (0,_site_src_lib_utils__rspack_import_5.cn)('clean-btn', className, isEnabled && (_styles_module_css__rspack_import_4_default().wordWrapButtonEnabled)),
        "aria-label": title,
        title: title,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_Icon_WordWrap__rspack_import_2/* ["default"] */.A, {
            className: (_styles_module_css__rspack_import_4_default().wordWrapButtonIcon),
            "aria-hidden": "true"
        })
    });
}


},
96125(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (CodeBlock)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _docusaurus_useIsBrowser__rspack_import_1 = __webpack_require__(78095);
/* import */ var _theme_CodeBlock_Content_Element__rspack_import_2 = __webpack_require__(14239);
/* import */ var _theme_CodeBlock_Content_String__rspack_import_3 = __webpack_require__(85724);
/* import */ var react__rspack_import_4 = __webpack_require__(58101);





/**
 * Best attempt to make the children a plain string so it is copyable. If there
 * are react elements, we will not be able to copy the content, and it will
 * return `children` as-is; otherwise, it concatenates the string children
 * together.
 */ function maybeStringifyChildren(children) {
    if (react__rspack_import_4.Children.toArray(children).some((el)=>/*#__PURE__*/ (0,react__rspack_import_4.isValidElement)(el))) {
        return children;
    }
    // The children is now guaranteed to be one/more plain strings
    return Array.isArray(children) ? children.join('') : children;
}
function CodeBlock({ children: rawChildren, ...props }) {
    // The Prism theme on SSR is always the default theme but the site theme can
    // be in a different mode. React hydration doesn't update DOM styles that come
    // from SSR. Hence force a re-render after mounting to apply the current
    // relevant styles.
    const isBrowser = (0,_docusaurus_useIsBrowser__rspack_import_1/* ["default"] */.A)();
    const children = maybeStringifyChildren(rawChildren);
    const CodeBlockComp = typeof children === 'string' ? _theme_CodeBlock_Content_String__rspack_import_3/* ["default"] */.A : _theme_CodeBlock_Content_Element__rspack_import_2/* ["default"] */.A;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(CodeBlockComp, {
        ...props,
        children: children
    }, String(isBrowser));
}


},
31649(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (PaginatorNavLink)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _docusaurus_Link__rspack_import_1 = __webpack_require__(59078);
/* import */ var _site_src_lib_utils__rspack_import_2 = __webpack_require__(76345);



function PaginatorNavLink(props) {
    const { permalink, title, subLabel, isNext } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Link__rspack_import_1/* ["default"] */.A, {
        className: (0,_site_src_lib_utils__rspack_import_2.cn)('pagination-nav__link border-2 border-link hover:bg-[#a1d8f71b]', isNext ? 'pagination-nav__link--next' : 'pagination-nav__link--prev'),
        to: permalink,
        children: [
            subLabel && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "pagination-nav__sublabel",
                children: subLabel
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: "pagination-nav__label",
                children: title
            })
        ]
    });
}


},
79181(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (TOC)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _site_src_lib_utils__rspack_import_4 = __webpack_require__(76345);
/* import */ var _theme_TOCItems__rspack_import_1 = __webpack_require__(52373);
/* import */ var framer_motion__rspack_import_3 = __webpack_require__(92396);
/* import */ var _styles_module_css__rspack_import_2 = __webpack_require__(74115);
/* import */ var _styles_module_css__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_2);





const LINK_CLASS_NAME = 'table-of-contents__link toc-highlight';
const LINK_ACTIVE_CLASS_NAME = 'table-of-contents__link--active';
function TOC({ className, ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(framer_motion__rspack_import_3/* .motion.div */.P.div, {
        className: (0,_site_src_lib_utils__rspack_import_4.cn)((_styles_module_css__rspack_import_2_default().tableOfContents), 'thin-scrollbar', className),
        initial: {
            opacity: 0.0001,
            x: 100
        },
        animate: {
            opacity: 1,
            x: 0
        },
        transition: {
            type: 'spring',
            stiffness: 400,
            damping: 20,
            duration: 3
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_TOCItems__rspack_import_1/* ["default"] */.A, {
            ...props,
            className: "table-of-contents pl-0",
            linkClassName: LINK_CLASS_NAME,
            linkActiveClassName: LINK_ACTIVE_CLASS_NAME
        })
    });
}


},
55871(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (Tag)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _docusaurus_Link__rspack_import_1 = __webpack_require__(59078);
/* import */ var _site_src_lib_utils__rspack_import_4 = __webpack_require__(76345);
/* import */ var react__rspack_import_2 = __webpack_require__(58101);
/* import */ var _styles_module_css__rspack_import_3 = __webpack_require__(77581);
/* import */ var _styles_module_css__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_3);





function Tag({ permalink, label, count, className }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Link__rspack_import_1/* ["default"] */.A, {
        href: permalink,
        className: (0,_site_src_lib_utils__rspack_import_4.cn)((_styles_module_css__rspack_import_3_default().tag), count ? (_styles_module_css__rspack_import_3_default().tagWithCount) : (_styles_module_css__rspack_import_3_default().tagRegular), className),
        children: [
            label,
            count && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                children: count
            })
        ]
    });
}


},
23723(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (y)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var react__rspack_import_1 = __webpack_require__(58101);


function y({ id: e, host: i, repo: o, repoId: r, category: n, categoryId: u, mapping: s, term: a, strict: d, reactionsEnabled: f, emitMetadata: m, inputPosition: c, theme: p, lang: l, loading: g }) {
  const [t, x] = (0,react__rspack_import_1.useState)(!1);
  return (0,react__rspack_import_1.useEffect)(() => {
    t || __webpack_require__.e(/* import() */ "25").then(__webpack_require__.bind(__webpack_require__, 93440)).then(() => x(!0));
  }, []), t ? (0,react_jsx_runtime__rspack_import_0.jsx)("giscus-widget", { id: e, host: i, repo: o, repoid: r, category: n, categoryid: u, mapping: s, term: a, strict: d, reactionsenabled: f, emitmetadata: m, inputposition: c, theme: p, lang: l, loading: g }) : null;
}



},
89999(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  R: () => (useMDXComponents),
  x: () => (MDXProvider)
});
/* import */ var react__rspack_import_0 = __webpack_require__(58101);
/**
 * @typedef {import('mdx/types.js').MDXComponents} MDXComponents
 * @typedef {import('react').Component<{}, {}, unknown>} Component
 * @typedef {import('react').ReactNode} ReactNode
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__rspack_import_0.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__rspack_import_0.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__rspack_import_0.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} props
 *   Props.
 * @returns {JSX.Element}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(props) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (props.disableParentContext) {
    allComponents =
      typeof props.components === 'function'
        ? props.components(emptyComponents)
        : props.components || emptyComponents
  } else {
    allComponents = useMDXComponents(props.components)
  }

  return react__rspack_import_0.createElement(
    MDXContext.Provider,
    {value: allComponents},
    props.children
  )
}


},
31859(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (copyTextToClipboard)
});
function copyTextToClipboard(text, {target = document.body} = {}) {
	if (typeof text !== 'string') {
		throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof text}\`.`);
	}

	const element = document.createElement('textarea');
	const previouslyFocusedElement = document.activeElement;

	element.value = text;

	// Prevent keyboard from showing on mobile
	element.setAttribute('readonly', '');

	element.style.contain = 'strict';
	element.style.position = 'absolute';
	element.style.left = '-9999px';
	element.style.fontSize = '12pt'; // Prevent zooming on iOS

	const selection = document.getSelection();
	const originalRange = selection.rangeCount > 0 && selection.getRangeAt(0);

	target.append(element);
	element.select();

	// Explicit selection workaround for iOS
	element.selectionStart = 0;
	element.selectionEnd = text.length;

	let isSuccess = false;
	try {
		isSuccess = document.execCommand('copy');
	} catch {}

	element.remove();

	if (originalRange) {
		selection.removeAllRanges();
		selection.addRange(originalRange);
	}

	// Get the focus back on the previously focused element, if any
	if (previouslyFocusedElement) {
		previouslyFocusedElement.focus();
	}

	return isSuccess;
}


},

};
;