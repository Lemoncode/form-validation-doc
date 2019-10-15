(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{967:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return c}));a(11),a(6),a(5),a(3),a(7),a(4),a(9);var n=a(77),r=a(959);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"validators/validators.mdx"}});var o={_frontmatter:l},s=r.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(s,i({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"validators"},"Validators"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Fonk")," isolated field and record validation into ",Object(n.b)("strong",{parentName:"p"},"Validators")),Object(n.b)("p",null,"A validator is a function, that given an input (for instance, field name,\nfieldvalue), check for a give business rule (e.g. is field a valid\nemail, or has been field informed), and depending on the success or not\nof that validation it returns a succeed output, or a fail one (including\nadditional context information like the error message or validation\ntype applied)."),Object(n.b)("p",null,"For instance let's create a validator that check if a field contains no blank spaces:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-javascript"}),"const VALIDATOR_TYPE = 'NO_SPACES';\n\nlet defaultMessage = 'String cannot contain white spaces';\nexport const setErrorMessage = message => (defaultMessage = message);\n\nexport const validator = (fieldValidatorArgs) => {\n  const {\n      value,\n      // Just if we want to override the default error message\n      message = defaultMessage,\n    } = fieldValidatorArgs;\n\n    // If the field is not informed, just return succeeded, this\n    // case should be handle before by the required validator\n    const succeeded = !value || (typeof value === 'string' && value === value.trim());\n\n   // Return ValidationResultStructure\n   // ValidationSucceeded: true / false\n   // message: error message (string) can be overriden\n   // type: type of validation executed (in this case NO_SPACES)\n   // In this case we directly return data (sync validator),\n   // we can return promises as well (async validator)\n  return {\n    succeeded,\n    message: succeeded ? '' : (message as string),\n    type: VALIDATOR_TYPE,\n  };\n}\n")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"You can use typescript to build this validator, validators typings definitions\nare exposed by the library.")),Object(n.b)("p",null,"What are the advantage of Validators?"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"We just isolates validation in a single function."),Object(n.b)("li",{parentName:"ul"},"These functions can be easily reused."),Object(n.b)("li",{parentName:"ul"},"These functions be easily tested."),Object(n.b)("li",{parentName:"ul"},"These functions do one thing and only one thing."),Object(n.b)("li",{parentName:"ul"},"We can create microlibraries for validators and cherry pick the ones that\nwe really need in our project.")),Object(n.b)("p",null,"Validators can be:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Synchronous."),Object(n.b)("li",{parentName:"ul"},"Asynchronous.")),Object(n.b)("p",null,"Validators can be defined:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"At field level:"),Object(n.b)("li",{parentName:"ul"},"At record level:")),Object(n.b)("p",null,"You can find:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"A set of built-in validators in the core ",Object(n.b)("a",i({parentName:"li"},{href:"https://github.com/Lemoncode/fonk"}),Object(n.b)("strong",{parentName:"a"},"Fonk"))," library (required, minLength, maxLength, pattern, email)."),Object(n.b)("li",{parentName:"ul"},"A list of microlibraries available with a range set of validators already implemented (just install the ones that you need, like a buffet style)."),Object(n.b)("li",{parentName:"ul"},"If any of the built-in validators doesn't match your needs, you can build your own custom validator, and\neven publish it as a microlibrary to spread the OSS love around the world.")),Object(n.b)("p",null,"Enough theory, let's get started learning how to use the validators that already ships ",Object(n.b)("strong",{parentName:"p"},"Fonk"),"\nlibrary, click on this ",Object(n.b)("a",i({parentName:"p"},{href:"/fonk-doc/validators/builtin-validators"}),"link")," to get started."))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"validators/validators.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---validators-validators-mdx-cab7efc4a7f0d80d1d29.js.map