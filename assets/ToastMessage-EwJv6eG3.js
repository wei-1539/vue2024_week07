import{f as l,m as i,_ as d,o as t,c as e,F as m,l as p,a,n as u,t as r,k as _}from"./index-_xMUitMs.js";import{u as c}from"./axios-U3vUtiKk.js";const h={computed:{...l(c,["messages"])},methods:{...i(c,["clearToast"])}},b={class:"toast-container osition-fixed pe-3 end-0",style:{"z-index":"1500",top:"6%"}},f={class:"toast-header"},g={class:"me-auto"},k=["onClick"],v={key:0,class:"toast-body"};function y(o,$,C,T,x,B){return t(),e("div",b,[(t(!0),e(m,null,p(o.messages,(s,n)=>(t(),e("div",{key:`toast${n}`,class:"toast show",role:"alert","aria-live":"assertive","aria-atomic":"true"},[a("div",f,[a("span",{class:u([`bg-${s.style}`,"rounded me-2 p-2 d-inline-block"])},null,2),a("strong",g,r(s.title),1),a("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close",onClick:S=>o.clearToast(n)},null,8,k)]),s.content?(t(),e("div",v,r(s.content),1)):_("",!0)]))),128))])}const M=d(h,[["render",y]]);export{M as T};
