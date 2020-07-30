(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"3qbP":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return s}));var o=a("Fcif"),n=a("+I+c"),i=a("/FXl"),r=a("TjRS"),l=(a("aD51"),{});void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"form-libraries/formik.mdx"}});var c={_frontmatter:l},b=r.a;function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)(b,Object(o.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"integrating-fonk-with-react-formik"},"Integrating Fonk with React Formik"),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/jaredpalmer/formik"}),"Formik")," is a great library to manage forms state."),Object(i.b)("p",null,"Adding ",Object(i.b)("strong",{parentName:"p"},"Fonk")," to ",Object(i.b)("strong",{parentName:"p"},"Formik")," allows you to seamlessly add validation capabilities to ",Object(i.b)("strong",{parentName:"p"},"Formik"),"."),Object(i.b)("p",null,"In order to use ",Object(i.b)("strong",{parentName:"p"},"Fonk")," with ",Object(i.b)("strong",{parentName:"p"},"Formik")," you will have to install ",Object(i.b)("strong",{parentName:"p"},"fonk-formik")," adaptor:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"npm install @lemoncode/fonk @lemoncode/fonk-formik --save\n")),Object(i.b)("p",null,"The main change to apply when using a ",Object(i.b)("strong",{parentName:"p"},"fonk-formik")," comes when you want to instantiate\n",Object(i.b)("strong",{parentName:"p"},"Fonk")," engine with your form validation schema, instead of calling ",Object(i.b)("em",{parentName:"p"},"createFormValidation"),"\n, just replace that entry with ",Object(i.b)("em",{parentName:"p"},"createFormikValidation")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-diff"}),"- import { createFormValidation, Validators } from '@lemoncode/fonk';\n+ import { Validators } from '@lemoncode/fonk';\n+ import { createFormikValidation } from '@lemoncode/fonk-formik';\n\nconst validationSchema = {\n  field: {\n    email: [Validators.required],\n    password: [Validators.required]\n  }\n};\n\n- export const formValidation = createFormValidation(validationSchema);\n+ export const formValidation = createFormikValidation(validationSchema);\n")),Object(i.b)("p",null,"Now you can hook to Formik form validation (example):"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-diff"}),'    <Formik\n      initialValues={{ email: "", password: "" }}\n+     validate={formValidation.validateForm}\n      onSubmit={(values, { setSubmitting }) => {\n        setTimeout(() => {\n          alert(JSON.stringify(values, null, 2));\n          setSubmitting(false);\n        }, 400);\n      }}\n    >\n')),Object(i.b)("p",null,"And if you want to hook to Formik field validations (example):"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-diff"}),'  <form onSubmit={handleSubmit}>\n    <Field\n      name="email"\n+     validate={(value) => formValidation.validateField("email", value)} />\n')),Object(i.b)("p",null,"Example: How to display field validation error message:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-diff"}),'    <Field name="email"/>\n+    {errors &&\n+      errors.email &&\n+       touched.email &&\n+       <div>{errors.email}</div>}\n')),Object(i.b)("h1",{id:"examples"},"Examples:"),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/formik/js/basic"}),"Basic example")),Object(i.b)("p",null,Object(i.b)("img",{alt:"basic",src:a("y8BA")})),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/formik/js/formik-components"}),"Using formik Field")),Object(i.b)("p",null,Object(i.b)("img",{alt:"formik-components",src:a("mcie")})),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/formik/js/field-level-validation"}),"Firing validations at field level")),Object(i.b)("p",null,Object(i.b)("img",{alt:"field-level-validation",src:a("6yt8")})),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/formik/js/async-validator"}),"Asynchronous validation")),Object(i.b)("p",null,Object(i.b)("img",{alt:"async-validator",src:a("o+Ab")})),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/formik/js/custom-error-message-global"}),"Customizing validator's error messages globaly")),Object(i.b)("p",null,Object(i.b)("img",{alt:"custom-error-message-global",src:a("N7gg")})),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/formik/js/custom-error-message-local"}),"Customizing validator's error messages just for a given form")),Object(i.b)("p",null,Object(i.b)("img",{alt:"custom-error-message-local",src:a("uD80")})),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/formik/js/custom-validators"}),"Creating custom validators")),Object(i.b)("p",null,Object(i.b)("img",{alt:"custom-validators",src:a("tiIy")})),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/formik/js/nested-field"}),"Validating nested fields")),Object(i.b)("p",null,Object(i.b)("img",{alt:"nested-field",src:a("cTuY")})),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/formik/js/record-validation"}),"Defining record validations")),Object(i.b)("p",null,Object(i.b)("img",{alt:"record-validation",src:a("6PPP")})),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/formik/js/shopping-cart-array-validator"}),"Array validation - Shopping cart example")),Object(i.b)("p",null,Object(i.b)("img",{alt:"array-shopping-cart-validation",src:a("Rz1j")})),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://codesandbox.io/s/github/lemoncode/fonk/tree/master/examples/formik/js/multiple-user-creation-array-validator"}),"Array validation - Multiple users creation example")),Object(i.b)("p",null,Object(i.b)("img",{alt:"array-create-multiple-users",src:a("TRBs")})))}void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"form-libraries/formik.mdx"}}),s.isMDXComponent=!0},"6PPP":function(e,t,a){e.exports=a.p+"static/record-validation-706a38dd52978ea17f99928b7bd23248.gif"},"6yt8":function(e,t,a){e.exports=a.p+"static/field-level-validation-bdc9b3f69b6e85abe7e18356fc4c3a65.gif"},N7gg:function(e,t,a){e.exports=a.p+"static/custom-error-message-global-a0b49023dad33b59c4526fd39e22b0b6.gif"},Rz1j:function(e,t,a){e.exports=a.p+"static/array-shopping-cart-validation-32fb9f9483ead846c0c24b5a6507431b.gif"},TRBs:function(e,t,a){e.exports=a.p+"static/array-create-multiple-users-f239ce8fba53f664afb86b188cfcb8a2.gif"},cTuY:function(e,t,a){e.exports=a.p+"static/nested-field-3aeed75c21e53f9ceb6a864ff7c52ce5.gif"},mcie:function(e,t,a){e.exports=a.p+"static/formik-components-a135b2f872b77b9d1db88c129ff92785.gif"},"o+Ab":function(e,t,a){e.exports=a.p+"static/async-validator-04a546b4c95bd219bfdbfe29a305c0fe.gif"},tiIy:function(e,t,a){e.exports=a.p+"static/custom-validators-5f8d1905a9dd216a764a52b188a4ca36.gif"},uD80:function(e,t,a){e.exports=a.p+"static/custom-error-message-local-ee6b5614dfb422bbd1a266be41e2b300.gif"},y8BA:function(e,t,a){e.exports=a.p+"static/basic-52890d9a68244acfa09f1c684dea3776.gif"}}]);
//# sourceMappingURL=component---form-libraries-formik-mdx-1949947f90d63e679e60.js.map