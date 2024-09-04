import{D as c,a as w,v as u,_ as I}from"./emailValidator-Ymztw1_3.js";import{_ as D,r as m,c as T,w as f,a as _,o as h,b as g,d as e,e as o,f as U,u as M,F as y,g as P,p as k,h as C}from"./index-BSuUKYbM.js";const n=p=>(k("data-v-8e54d3a5"),p=p(),C(),p),A={class:"platform-step"},E={class:"platform-step-header"},F=n(()=>e("div",{class:"platform-step-title"},[e("span",null,"MapMyCells")],-1)),O={class:"platform-step-steps"},B={class:"platform-container"},N={class:"platform-left"},$=n(()=>e("div",{class:"platform-step-span"},[e("span",{class:"platform-step-span-title"},"Step 1"),e("span",{class:"platform-step-span-text"},"Upload your gene expression data")],-1)),L={class:"platform-left-select"},j=n(()=>e("div",{class:"platform-left-tip"},[e("span",null,"Data Usage & Privacy"),e("span",null,"Allen Institute does not use, retain, or aggregate any data uploaded to MapMyCells for its own internal purposes, nor will we publish your data publicly. Allen Institute database administrators can access any uploaded dataset for debugging and other error remediation purposes. All files will be deleted one week after upload. Please do not submit any sensitive data, personally identifiable data, or protected health data that could put an individual's privacy at risk into MapMyCells. See the Allen Institute Privacy Policy for more information on our privacy practices.")],-1)),q={class:"platform-right"},z=n(()=>e("div",{class:"platform-step-span"},[e("span",{class:"platform-step-span-title"},"Step 1"),e("span",{class:"platform-step-span-text"},"Upload your gene expression data")],-1)),G={class:"platform-left-select"},H=n(()=>e("div",{class:"platform-right-image"},[e("img",{src:I,alt:""})],-1)),J={__name:"Platform",setup(p){const i=m(0),x=[{title:"selectData",description:""},{title:"configureEmail",description:""},{title:"start",description:""}],s=m(["","",""]),d=m(""),r=[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"}],v=T(()=>s.value.every(l=>l!==""));return f(v,l=>{l&&(u(d.value)?i.value=2:i.value=1)}),f(d,l=>{v.value&&u(l)&&(i.value=2)}),(l,a)=>{const V=_("el-step"),S=_("el-steps");return h(),g(y,null,[e("div",A,[e("div",E,[F,e("div",O,[o(S,{class:"custom-steps",active:i.value,"align-center":"","finish-status":"success"},{default:U(()=>[(h(),g(y,null,P(x,(t,b)=>o(V,{key:b,title:l.$t(`steps.${t.title}`)},null,8,["title"])),64))]),_:1},8,["active"])])])]),e("div",B,[e("div",N,[$,e("div",L,[o(c,{modelValue:s.value[0],"onUpdate:modelValue":a[0]||(a[0]=t=>s.value[0]=t),options:r,tagText:"Data set",placeholderText:"Select"},null,8,["modelValue"]),o(c,{modelValue:s.value[1],"onUpdate:modelValue":a[1]||(a[1]=t=>s.value[1]=t),options:r,tagText:"Data set",placeholderText:"Select"},null,8,["modelValue"])]),j]),e("div",q,[z,e("div",G,[H,o(c,{modelValue:s.value[2],"onUpdate:modelValue":a[2]||(a[2]=t=>s.value[2]=t),options:r,tagText:"Data set",placeholderText:"Select"},null,8,["modelValue"]),o(w,{modelValue:d.value,"onUpdate:modelValue":a[3]||(a[3]=t=>d.value=t),tagText:"Enter your email address",placeholderText:"Select",validateFn:M(u)},null,8,["modelValue","validateFn"])])])])],64)}}},R=D(J,[["__scopeId","data-v-8e54d3a5"]]);export{R as default};
