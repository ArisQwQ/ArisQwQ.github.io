exports.ids = ["496"];
exports.modules = {
88964(module) {
// Exports
module.exports = {
	"backToTopButton": `backToTopButton_f2NH`,
	"backToTopButtonShow": `backToTopButtonShow_mwga`
};


},
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
9725(module) {
// Exports
module.exports = {
	"posts": `posts_aO00`,
	"post": `post_sYvK`,
	"body": `body_jYdI`,
	"meta": `meta_UZJL`,
	"pinned": `pinned_HcWX`,
	"title": `title_isrX`,
	"titleLink": `titleLink_vkdq`,
	"summary": `summary_ZyE1`,
	"tags": `tags_qwRc`,
	"cover": `cover_TGEw`
};


},
71534(module) {
// Exports
module.exports = {
	"headerLinks": `headerLinks_s6gh`,
	"toolbar": `toolbar_LBMe`,
	"results": `results_Qmgi`,
	"pagination": `pagination_bzst`
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
19258(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (BlogListPaginator)
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


function BlogListPaginator(props) {
    const { metadata } = props;
    const { previousPage, nextPage } = metadata;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("nav", {
        className: "pagination-nav",
        "aria-label": (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
            id: 'theme.blog.paginator.navAriaLabel',
            message: 'Blog list page navigation',
            description: 'The ARIA label for the blog pagination'
        }),
        children: [
            previousPage && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_PaginatorNavLink__rspack_import_3/* ["default"] */.A, {
                permalink: previousPage,
                title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                    id: "theme.blog.paginator.newerEntries",
                    description: "The label used to navigate to the newer blog posts page (previous page)",
                    children: "Newer entries"
                })
            }),
            nextPage && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_PaginatorNavLink__rspack_import_3/* ["default"] */.A, {
                permalink: nextPage,
                title: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                    id: "theme.blog.paginator.olderEntries",
                    description: "The label used to navigate to the older blog posts page (next page)",
                    children: "Older entries"
                }),
                isNext: true
            })
        ]
    });
}


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
26533(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  V: () => (useViewType)
});
/* import */ var react__rspack_import_0 = __webpack_require__(58101);

function useViewType() {
    const [viewType, setViewType] = (0,react__rspack_import_0.useState)('list');
    (0,react__rspack_import_0.useEffect)(()=>{
        try {
            const savedView = localStorage.getItem('viewType');
            if (savedView === 'list' || savedView === 'grid') setViewType(savedView);
        } catch  {
        // The layout still works when browser storage is unavailable.
        }
    }, []);
    const toggleViewType = (0,react__rspack_import_0.useCallback)((newViewType)=>{
        setViewType(newViewType);
        try {
            localStorage.setItem('viewType', newViewType);
        } catch  {
        // Keep the selected layout for this visit even if it cannot be saved.
        }
    }, []);
    return {
        viewType,
        toggleViewType
    };
}


},
51013(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (BlogPosts)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _docusaurus_Link__rspack_import_1 = __webpack_require__(59078);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(46218);
/* import */ var motion_react__rspack_import_6 = __webpack_require__(48130);
/* import */ var motion_react__rspack_import_7 = __webpack_require__(92396);
/* import */ var react__rspack_import_3 = __webpack_require__(58101);
/* import */ var _BlogPostItem_Header_Info__rspack_import_4 = __webpack_require__(18977);
/* import */ var _posts_module_css__rspack_import_5 = __webpack_require__(9725);
/* import */ var _posts_module_css__rspack_import_5_default = /*#__PURE__*/__webpack_require__.n(_posts_module_css__rspack_import_5);







function Post({ content, viewType }) {
    const { metadata, assets } = content;
    const { title, date, permalink, description, readingTime, tags, frontMatter } = metadata;
    const [imageFailed, setImageFailed] = (0,react__rspack_import_3.useState)(false);
    const reduceMotion = (0,motion_react__rspack_import_6/* .useReducedMotion */.I)();
    const image = frontMatter.hideImage === true || imageFailed ? undefined : assets.image ?? frontMatter.image;
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(motion_react__rspack_import_7/* .motion.article */.P.article, {
        className: (_posts_module_css__rspack_import_5_default().post),
        "data-cover": Boolean(image),
        layout: reduceMotion ? false : 'position',
        layoutDependency: viewType,
        transition: {
            layout: {
                duration: 0.28,
                ease: [
                    0.16,
                    1,
                    0.3,
                    1
                ]
            }
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                className: (_posts_module_css__rspack_import_5_default().body),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: (_posts_module_css__rspack_import_5_default().meta),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("time", {
                                dateTime: date,
                                children: date.slice(0, 10)
                            }),
                            typeof readingTime === 'number' && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_BlogPostItem_Header_Info__rspack_import_4/* .ReadingTime */.u, {
                                    readingTime: readingTime
                                })
                            }),
                            Boolean(frontMatter.sticky) && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                className: (_posts_module_css__rspack_import_5_default().pinned),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                                    id: "blog.post.pinned",
                                    children: "置頂"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h2", {
                        className: (_posts_module_css__rspack_import_5_default().title),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_1/* ["default"] */.A, {
                            to: permalink,
                            className: (_posts_module_css__rspack_import_5_default().titleLink),
                            children: title
                        })
                    }),
                    description && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                        className: (_posts_module_css__rspack_import_5_default().summary),
                        children: description
                    }),
                    tags.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("ul", {
                        className: (_posts_module_css__rspack_import_5_default().tags),
                        children: tags.slice(0, 3).map((tag)=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("li", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Link__rspack_import_1/* ["default"] */.A, {
                                    to: tag.permalink,
                                    children: tag.label
                                })
                            }, tag.permalink))
                    })
                ]
            }),
            image && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                className: (_posts_module_css__rspack_import_5_default().cover),
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("img", {
                    src: image,
                    alt: "",
                    loading: "lazy",
                    decoding: "async",
                    onError: ()=>setImageFailed(true)
                })
            })
        ]
    });
}
function BlogPosts({ items, viewType }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
        className: (_posts_module_css__rspack_import_5_default().posts),
        "data-view": viewType,
        children: items.map(({ content })=>/*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(Post, {
                content: content,
                viewType: viewType
            }, content.metadata.permalink))
    });
}


},
4585(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.d(__webpack_exports__, {
  A: () => (ViewTypeSwitch)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _docusaurus_Translate__rspack_import_1 = __webpack_require__(46218);
/* import */ var _site_src_components_SegmentedControl__rspack_import_2 = __webpack_require__(64649);



function ViewTypeSwitch({ viewType, toggleViewType }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_site_src_components_SegmentedControl__rspack_import_2/* ["default"] */.A, {
        label: (0,_docusaurus_Translate__rspack_import_1/* .translate */.T)({
            id: 'blog.view.label',
            message: '文章顯示方式'
        }),
        value: viewType,
        onChange: toggleViewType,
        controls: "blog-posts",
        options: [
            {
                value: 'list',
                label: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_1/* ["default"] */.A, {
                    id: "blog.view.list",
                    children: "列表"
                }),
                icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("path", {
                        d: "M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"
                    })
                })
            },
            {
                value: 'grid',
                label: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_1/* ["default"] */.A, {
                    id: "blog.view.grid",
                    children: "網格"
                }),
                icon: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    "aria-hidden": "true",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("rect", {
                            x: "3",
                            y: "3",
                            width: "7",
                            height: "7",
                            rx: "1.5"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("rect", {
                            x: "14",
                            y: "3",
                            width: "7",
                            height: "7",
                            rx: "1.5"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("rect", {
                            x: "3",
                            y: "14",
                            width: "7",
                            height: "7",
                            rx: "1.5"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("rect", {
                            x: "14",
                            y: "14",
                            width: "7",
                            height: "7",
                            rx: "1.5"
                        })
                    ]
                })
            }
        ]
    });
}


},
1004(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (BlogListPage)
});
/* import */ var react_jsx_runtime__rspack_import_0 = __webpack_require__(25105);
/* import */ var _docusaurus_Link__rspack_import_1 = __webpack_require__(59078);
/* import */ var _docusaurus_Translate__rspack_import_2 = __webpack_require__(46218);
/* import */ var _docusaurus_theme_common__rspack_import_12 = __webpack_require__(8961);
/* import */ var _docusaurus_theme_common__rspack_import_13 = __webpack_require__(94630);
/* import */ var _site_src_css_collection_module_css__rspack_import_3 = __webpack_require__(34348);
/* import */ var _site_src_css_collection_module_css__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(_site_src_css_collection_module_css__rspack_import_3);
/* import */ var _site_src_hooks_useViewType__rspack_import_4 = __webpack_require__(26533);
/* import */ var _theme_BackToTopButton__rspack_import_5 = __webpack_require__(11604);
/* import */ var _theme_BlogListPaginator__rspack_import_6 = __webpack_require__(19258);
/* import */ var _theme_Layout__rspack_import_7 = __webpack_require__(1419);
/* import */ var _theme_SearchMetadata__rspack_import_8 = __webpack_require__(45278);
/* import */ var _Posts__rspack_import_9 = __webpack_require__(51013);
/* import */ var _ViewTypeSwitch__rspack_import_10 = __webpack_require__(4585);
/* import */ var _styles_module_css__rspack_import_11 = __webpack_require__(71534);
/* import */ var _styles_module_css__rspack_import_11_default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__rspack_import_11);













function BlogListPage({ metadata, items }) {
    const { viewType, toggleViewType } = (0,_site_src_hooks_useViewType__rspack_import_4/* .useViewType */.V)();
    const title = (0,_docusaurus_Translate__rspack_import_2/* .translate */.T)({
        id: 'theme.blog.title.new',
        message: '博客'
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_theme_common__rspack_import_12/* .HtmlClassNameProvider */.e3, {
        className: `${_docusaurus_theme_common__rspack_import_13/* .ThemeClassNames.wrapper.blogPages */.G.wrapper.blogPages} ${_docusaurus_theme_common__rspack_import_13/* .ThemeClassNames.page.blogListPage */.G.page.blogListPage}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_theme_Layout__rspack_import_7/* ["default"] */.A, {
            title: metadata.blogTitle,
            description: metadata.blogDescription,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_SearchMetadata__rspack_import_8/* ["default"] */.A, {
                    tag: "blog_posts_list"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("main", {
                    className: (_site_src_css_collection_module_css__rspack_import_3_default().page),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                        className: (_site_src_css_collection_module_css__rspack_import_3_default().container),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("header", {
                                className: (_site_src_css_collection_module_css__rspack_import_3_default().header),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("h1", {
                                                className: (_site_src_css_collection_module_css__rspack_import_3_default().title),
                                                children: title
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("p", {
                                                className: (_site_src_css_collection_module_css__rspack_import_3_default().description),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                                                    id: "blog.description",
                                                    children: "編程：WA 和 TLE 之旅"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                        className: (_styles_module_css__rspack_import_11_default().headerLinks),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Link__rspack_import_1/* ["default"] */.A, {
                                                to: "/blog/tags",
                                                className: (_site_src_css_collection_module_css__rspack_import_3_default().textLink),
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                                                        id: "blog.tags.browse",
                                                        children: "按標籤瀏覽"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                        "aria-hidden": "true",
                                                        children: "→"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)(_docusaurus_Link__rspack_import_1/* ["default"] */.A, {
                                                to: "/blog/archive",
                                                className: (_site_src_css_collection_module_css__rspack_import_3_default().textLink),
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                                                        id: "blog.archive",
                                                        children: "按年份瀏覽"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                        "aria-hidden": "true",
                                                        children: "→"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("div", {
                                className: (_styles_module_css__rspack_import_11_default().toolbar),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsxs)("p", {
                                        className: (_styles_module_css__rspack_import_11_default().results),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                                                id: "blog.count",
                                                values: {
                                                    count: metadata.totalCount
                                                },
                                                children: '共 {count} 篇文章'
                                            }),
                                            metadata.totalPages > 1 && /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("span", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_docusaurus_Translate__rspack_import_2/* ["default"] */.A, {
                                                    id: "blog.page",
                                                    values: {
                                                        page: metadata.page,
                                                        total: metadata.totalPages
                                                    },
                                                    children: '第 {page} / {total} 頁'
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_ViewTypeSwitch__rspack_import_10/* ["default"] */.A, {
                                        viewType: viewType,
                                        toggleViewType: toggleViewType
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                id: "blog-posts",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_Posts__rspack_import_9/* ["default"] */.A, {
                                    items: items,
                                    viewType: viewType
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)("div", {
                                className: (_styles_module_css__rspack_import_11_default().pagination),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_BlogListPaginator__rspack_import_6/* ["default"] */.A, {
                                    metadata: metadata
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__rspack_import_0.jsx)(_theme_BackToTopButton__rspack_import_5/* ["default"] */.A, {})
            ]
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

};
;