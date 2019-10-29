(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{T0eK:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return s}));a("5hJT"),a("W1QL"),a("K/PF"),a("t91x"),a("75LO"),a("PJhk"),a("aD51");var n=a("SAVP"),r=a("TjRS");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"general/validating-record.mdx"}});var i={_frontmatter:l},c=r.a;function s(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(c,o({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"record-validations"},"Record Validations"),Object(n.b)("p",null,"Field validations are great, but sometimes we need to fire validations once the user has fulfilled all\nthe form values (typically just when the user hits the ",Object(n.b)("em",{parentName:"p"},"submit")," button), how can we fire this kind\nof validations? using the ",Object(n.b)("a",o({parentName:"p"},{href:"/fonk-doc/api#formvalidation"}),Object(n.b)("strong",{parentName:"a"},"FormValidation"))," ",Object(n.b)("a",o({parentName:"p"},{href:"/fonk-doc/api#validaterecord"}),Object(n.b)("strong",{parentName:"a"},"validateRecord"))," method."),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"validateRecord(values: any): Promise<RecordValidationResult>\n")),Object(n.b)("p",null,"In this method we pass as arguments:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"All the record values, usually this kind of validation need access to the whole form data.")),Object(n.b)("p",null,"And it returns"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Whether all the associated record validations passed or failed (in case just one of the validations failed)."),Object(n.b)("li",{parentName:"ul"},"A list of results including the result of firing all the record validations.")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"This behavior is different to ",Object(n.b)("a",o({parentName:"p"},{href:"/fonk-doc/api#validatefield"}),"ValidateField"),", because validate field is ove one field, validateRecord is over a list of records. you get success or stops the process\nFor each record has same behaviour like validateField.")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"You can find detailed information about this method in the ",Object(n.b)("a",o({parentName:"p"},{href:"/fonk-doc/api#validaterecord"}),"api definition"),").")),Object(n.b)("p",null,"Let's get our hand wet:"),Object(n.b)("p",null,"We want to validate that, the user gets freeshipping if he is subscribed to ",Object(n.b)("em",{parentName:"p"},"prime services")," or\nif the the total amount purchase is greater than 30 USD."),Object(n.b)("p",null,"Let's start with the following model:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'const checkoutForm = {\n  product: "shoes",\n  price: 20,\n  discount: 5,\n  isPrime: false\n};\n')),Object(n.b)("p",null,"Let's define a Record Validator:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-javascript"}),'const freeShippingRecordValidator = ({ values }) => {\n  const succeeded = values.isPrime || values.price - values.discount > 20;\n\n  return {\n    succeeded,\n    message: succeeded\n      ? ""\n      : "Subscribe to prime service or total must be greater than 20USD",\n    type: "RECORD_FREE_SHIPPING"\n  };\n};\n')),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"More information about record validators in this ",Object(n.b)("a",o({parentName:"p"},{href:"/fonk-doc/api#recordvalidation-function-type"}),"link"),".")),Object(n.b)("p",null,"And let's define our form validation schema:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"const validationSchema = {\n  record: {\n    freeShipping: [freeShippingRecordValidator]\n  }\n};\n\nconst formValidation: FormValidation = createFormValidation(validationSchema);\n")),Object(n.b)("p",null,"Now if we want fire the form record validation we only need to call:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"formValidation.validateRecord(checkoutForm).then(recordValidationResult => {\n  console.log(recordValidationResult);\n});\n")),Object(n.b)("p",null,"In this case it will return:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-javascript"}),'{\n  "succeeded": false,\n  "recordErrors": {\n    "freeShipping": {\n      "succeeded": false,\n      "message": "Subscribe to prime service or total must be greater than 20USD",\n      "type": "RECORD_FREE_SHIPPING"\n    }\n  }\n}\n')),Object(n.b)("p",null,"The record validation failed, we can show a message to the user asking to subscribe to prime services or adding more items to his basket to get free shipping cost."),Object(n.b)("p",null,"If we update the values of the form, e.g. the user has contracted ",Object(n.b)("em",{parentName:"p"},"prime services")," it will return\na validation succeeded."),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"checkoutForm.isPrime = true;\n")),Object(n.b)("p",null,"And we fire the record validation:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-javascript"}),"formValidation.validateRecord(checkoutForm).then(recordValidationResult => {\n  console.log(recordValidationResult);\n});\n")),Object(n.b)("p",null,"It will return:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-javascript"}),'{\n  "succeeded": true,\n  "recordErrors": {\n    "freeShipping": {\n      "succeeded": true,\n      "message": "",\n      "type": "RECORD_FREE_SHIPPING"\n    }\n  }\n}\n')),Object(n.b)("p",null,"The record validation succeeded."),Object(n.b)("p",null,"Examples:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/vanilla/js/validate-record"}),"Plain Vanilla JS"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/vanilla/ts/validate-record"}),"Plain Vanilla TS"),".")),Object(n.b)("p",null,"React final form examples:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/react-final-form/js/validate-record"}),"React + React Final Form JS"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/react-final-form/ts/validate-record"}),"React + React Final Form TS"),".")),Object(n.b)("p",null,"Now that you know how to fire validate field & record validations \nlet's jump firing all the validation toghether ",Object(n.b)("a",o({parentName:"p"},{href:"/fonk-doc/validating-form"}),"form validations")))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"general/validating-record.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---general-validating-record-mdx-1d7cebed1cb57a732b62.js.map