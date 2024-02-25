import{T as L}from"./ToastMessage-EwJv6eG3.js";import{m as v,_ as h,r as n,o as _,c as g,b as a,w as i,a as s,d as u,F as m,j as V,k as T}from"./index-_xMUitMs.js";import{a as p,u as f}from"./axios-U3vUtiKk.js";var $={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"wei_rio",BASE_URL:"/vue2024_week07/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:R}=$,y={data(){return{isLoading:!1}},methods:{...v(f,["pushMessage"]),logout(){this.isLoading=!0;const t=`${R}/logout`;p.post(t).then(e=>{this.isLoading=!1,this.pushMessage({style:"success",title:"登出成功",content:e.data.message}),this.$router.push("/login")}).catch(e=>{this.pushMessage({style:"danger",title:"登出失敗",content:e.response.data.message})})}}},E=s("div",{class:"loadingio-spinner-double-ring-0ut21surusy"},[s("div",{class:"ldio-2uwwzn0tw8t"},[s("div"),s("div"),s("div",null,[s("div")]),s("div",null,[s("div")])])],-1),x={class:"navbar navbar-expand-lg navbar-dark bg-dark sticky-top"},w={class:"container-fluid"},M=s("div",{class:"navbar-brand"},"Streamify",-1),B=s("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[s("span",{class:"navbar-toggler-icon"})],-1),N={class:"collapse navbar-collapse justify-content-end",id:"navbarNav"},S={class:"navbar-nav"},U={class:"nav-item"},I={class:"nav-item"},A={class:"nav-item"},D={class:"nav-item"};function C(t,e,k,b,c,r){const l=n("VueLoading"),o=n("RouterLink");return _(),g(m,null,[a(l,{active:c.isLoading,"z-index":1060},{default:i(()=>[E]),_:1},8,["active"]),s("nav",x,[s("div",w,[M,B,s("div",N,[s("ul",S,[s("li",U,[a(o,{to:"/admin/product",class:"nav-link"},{default:i(()=>[u("產品")]),_:1})]),s("li",I,[a(o,{to:"/admin/order",class:"nav-link"},{default:i(()=>[u("訂單")]),_:1})]),s("li",A,[a(o,{to:"/admin/coupons",class:"nav-link"},{default:i(()=>[u("優惠卷")]),_:1})]),s("li",D,[s("a",{onClick:e[0]||(e[0]=(...d)=>r.logout&&r.logout(...d)),class:"nav-link",style:{cursor:"pointer"}},"登出")])])])])])],64)}const O=h(y,[["render",C]]);var P={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"wei_rio",BASE_URL:"/vue2024_week07/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:z}=P,j={components:{BackNavLayout:O,ToastMessages:L},data(){return{status:!1}},methods:{...v(f,["pushMessage"]),checkUser(){const t=`${z}api/user/check`;p.post(t).then(e=>{this.pushMessage({style:"success",title:"登入成功",content:e.data.message}),this.status=!0}).catch(e=>{this.pushMessage({style:"danger",title:"錯誤訊息",content:e.response.data.message}),this.$router.push("/login")})}},created(){const t=document.cookie.replace(/(?:(?:^|.*;\s*)hexSchool\s*=\s*([^;]*).*$)|^.*$/,"$1");p.defaults.headers.common.Authorization=t,this.checkUser()}},F={class:"container-fluid"};function H(t,e,k,b,c,r){const l=n("BackNavLayout"),o=n("ToastMessages"),d=n("RouterView");return _(),g(m,null,[a(l),s("div",F,[a(o),c.status?(_(),V(d,{key:0})):T("",!0)])],64)}const K=h(j,[["render",H]]);export{K as default};