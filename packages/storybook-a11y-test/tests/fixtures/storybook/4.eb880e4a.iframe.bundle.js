(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"../../node_modules/@storybook/preview-web/dist/modern/renderDocs.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"renderDocs",(function(){return renderDocs})),__webpack_require__.d(__webpack_exports__,"unmountDocs",(function(){return unmountDocs}));var react=__webpack_require__("../../node_modules/react/index.js"),react_default=__webpack_require__.n(react),react_dom=__webpack_require__("../../node_modules/react-dom/index.js"),react_dom_default=__webpack_require__.n(react_dom);const wrapper={fontSize:"14px",letterSpacing:"0.2px",margin:"10px 0"},main={margin:"auto",padding:30,borderRadius:10,background:"rgba(0,0,0,0.03)"},heading={textAlign:"center"},NoDocs=()=>react_default.a.createElement("div",{style:wrapper,className:"sb-nodocs sb-wrapper"},react_default.a.createElement("div",{style:main},react_default.a.createElement("h1",{style:heading},"No Docs"),react_default.a.createElement("p",null,"Sorry, but there are no docs for the selected story. To add them, set the story's ",react_default.a.createElement("code",null,"docs")," parameter. If you think this is an error:"),react_default.a.createElement("ul",null,react_default.a.createElement("li",null,"Please check the story definition."),react_default.a.createElement("li",null,"Please check the Storybook config."),react_default.a.createElement("li",null,"Try reloading the page.")),react_default.a.createElement("p",null,"If the problem persists, check the browser console, or the terminal you've run Storybook from.")));function renderDocs(story,docsContext,element,callback){return async function renderDocsAsync(story,docsContext,element){var _docs$getContainer,_docs$getPage;const{docs:docs}=story.parameters;if((null!=docs&&docs.getPage||null!=docs&&docs.page)&&!(null!=docs&&docs.getContainer||null!=docs&&docs.container))throw new Error("No `docs.container` set, did you run `addon-docs/preset`?");const DocsContainer=docs.container||await(null===(_docs$getContainer=docs.getContainer)||void 0===_docs$getContainer?void 0:_docs$getContainer.call(docs))||(({children:children})=>react_default.a.createElement(react_default.a.Fragment,null,children)),Page=docs.page||await(null===(_docs$getPage=docs.getPage)||void 0===_docs$getPage?void 0:_docs$getPage.call(docs))||NoDocs,docsElement=react_default.a.createElement(DocsContainer,{key:story.componentId,context:docsContext},react_default.a.createElement(Page,null));await new Promise((resolve=>{react_dom_default.a.render(docsElement,element,resolve)}))}(story,docsContext,element).then(callback)}function unmountDocs(element){react_dom_default.a.unmountComponentAtNode(element)}NoDocs.displayName="NoDocs"}}]);