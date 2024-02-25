import{m as x,_ as U,o as l,c as i,a as t,h as c,v as m,F as y,l as k,k as M,q as w,r as _,b as h,w as $,t as b}from"./index-_xMUitMs.js";import{a as v,u as V}from"./axios-U3vUtiKk.js";import{m as E,D as T,P as I}from"./PagePagination-Keoe42zA.js";var C={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"wei_rio",BASE_URL:"/vue2024_week07/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:R,VITE_PATH:A}=C,N={props:["product","isNew"],mixins:[E],data(){return{tempProduct:{},status:{}}},watch:{product(){this.tempProduct=this.product}},methods:{...x(V,["pushMessage"]),createImages(){this.tempProduct.imagesUrl=[],this.tempProduct.imagesUrl.push("")},uploadFile(){const n=this.$refs.fileInput.files[0],e=new FormData;e.append("file-to-upload",n);const d=`${R}/api/${A}/admin/upload`;v.post(d,e).then(u=>{this.tempProduct.imageUrl=u.data.imageUrl,this.$refs.fileInput.value="",this.pushMessage({style:"success",title:"圖片上傳成功",content:u.data.message})}).catch(u=>{this.pushMessage({style:"danger",title:"圖片上傳失敗",content:u.response.data.message})})}}},F={id:"productModal",ref:"modal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},S={class:"modal-dialog modal-xl"},B={class:"modal-content border-0"},H={class:"modal-header bg-dark text-white"},O={id:"productModalLabel",class:"modal-title"},z={key:0},j={key:1},q=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),Y={class:"modal-body"},G={class:"row"},J={class:"col-sm-4"},K={class:"mb-2"},Q={class:"mb-3"},W=t("label",{for:"imageUrl",class:"form-label"},"輸入【主要】圖片網址",-1),X={class:"mb-3"},Z=t("label",{for:"customFile",class:"form-label"},"或 上傳圖片",-1),tt=["src"],et=t("h5",{class:"mb-3"},"多圖新增",-1),st={key:0,class:"mb-3"},ot={class:"mb-3"},lt=["for"],it=["id","onUpdate:modelValue"],nt=["src"],dt={key:0},ct={key:1},at={key:1},rt={class:"col-sm-8"},ut={class:"mb-3"},mt=t("label",{for:"title",class:"form-label"},"標題",-1),pt={class:"row"},_t={class:"mb-3 col-md-6"},ht=t("label",{for:"category",class:"form-label"},"分類",-1),bt={class:"mb-3 col-md-6"},ft=t("label",{for:"price",class:"form-label"},"單位",-1),gt={class:"row"},vt={class:"mb-3 col-md-6"},Pt=t("label",{for:"origin_price",class:"form-label"},"原價",-1),yt={class:"mb-3 col-md-6"},wt=t("label",{for:"price",class:"form-label"},"售價",-1),xt=t("hr",null,null,-1),Ut={class:"mb-3 col-md-6"},kt=t("label",{for:"youtubeLink",class:"form-label"},"預告片連結",-1),Mt={key:0,class:"mb-3 col-md-12"},Vt=["src"],Lt=t("hr",null,null,-1),Dt={class:"mb-3"},$t=t("label",{for:"description",class:"form-label"},"產品描述",-1),Et={class:"mb-3"},Tt=t("label",{for:"content",class:"form-label"},"說明內容",-1),It={class:"mb-3 d-flex"},Ct={class:"form-check form-switch"},Rt=t("label",{class:"form-check-label",for:"is_enabled"},"啟用",-1),At={class:"form-check form-switch ms-4"},Nt=t("label",{class:"form-check-label",for:"is_love"},"推薦",-1),Ft={class:"modal-footer"},St=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Bt(n,e,d,u,s,a){return l(),i("div",F,[t("div",S,[t("div",B,[t("div",H,[t("h5",O,[d.isNew?(l(),i("span",z,"新增產品")):(l(),i("span",j,"編輯產品"))]),q]),t("div",Y,[t("div",G,[t("div",J,[t("div",K,[t("div",Q,[W,c(t("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":e[0]||(e[0]=o=>s.tempProduct.imageUrl=o)},null,512),[[m,s.tempProduct.imageUrl]])]),t("div",X,[Z,t("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:e[1]||(e[1]=(...o)=>a.uploadFile&&a.uploadFile(...o))},null,544)]),t("img",{class:"img-fluid",src:s.tempProduct.imageUrl,alt:""},null,8,tt)]),et,Array.isArray(s.tempProduct.imagesUrl)?(l(),i("div",st,[(l(!0),i(y,null,k(s.tempProduct.imagesUrl,(o,p)=>(l(),i("div",{class:"mb-1",key:p},[t("div",ot,[t("label",{for:`imagesUrl${p}`,class:"form-label"},"圖片網址",8,lt),c(t("input",{id:`imagesUrl${p}`,type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":P=>s.tempProduct.imagesUrl[p]=P},null,8,it),[[m,s.tempProduct.imagesUrl[p]]])]),t("img",{class:"img-fluid",src:o,alt:""},null,8,nt)]))),128)),!s.tempProduct.imagesUrl.length||s.tempProduct.imagesUrl[s.tempProduct.imagesUrl.length-1]?(l(),i("div",dt,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[2]||(e[2]=o=>s.tempProduct.imagesUrl.push(""))}," 新增圖片 ")])):(l(),i("div",ct,[t("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:e[3]||(e[3]=o=>s.tempProduct.imagesUrl.pop())}," 刪除圖片 ")]))])):(l(),i("div",at,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[4]||(e[4]=(...o)=>a.createImages&&a.createImages(...o))}," 新增圖片 ")]))]),t("div",rt,[t("div",ut,[mt,c(t("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":e[5]||(e[5]=o=>s.tempProduct.title=o)},null,512),[[m,s.tempProduct.title]])]),t("div",pt,[t("div",_t,[ht,c(t("input",{id:"category",type:"text",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":e[6]||(e[6]=o=>s.tempProduct.category=o)},null,512),[[m,s.tempProduct.category]])]),t("div",bt,[ft,c(t("input",{id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":e[7]||(e[7]=o=>s.tempProduct.unit=o)},null,512),[[m,s.tempProduct.unit]])])]),t("div",gt,[t("div",vt,[Pt,c(t("input",{id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":e[8]||(e[8]=o=>s.tempProduct.origin_price=o)},null,512),[[m,s.tempProduct.origin_price]])]),t("div",yt,[wt,c(t("input",{id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":e[9]||(e[9]=o=>s.tempProduct.price=o)},null,512),[[m,s.tempProduct.price]])])]),xt,t("div",Ut,[kt,c(t("input",{id:"youtubeLink",type:"text",class:"form-control",placeholder:"請輸入youtube連結","onUpdate:modelValue":e[10]||(e[10]=o=>s.tempProduct.youtubeLink=o)},null,512),[[m,s.tempProduct.youtubeLink]])]),typeof s.tempProduct.youtubeLink=="string"?(l(),i("div",Mt,[t("iframe",{width:"100%",height:"400",src:`${s.tempProduct.youtubeLink}?rel=0`,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,8,Vt)])):M("",!0),Lt,t("div",Dt,[$t,c(t("textarea",{id:"description",type:"text",class:"form-control",rows:"5",placeholder:"請輸入產品描述","onUpdate:modelValue":e[11]||(e[11]=o=>s.tempProduct.description=o)},null,512),[[m,s.tempProduct.description]])]),t("div",Et,[Tt,c(t("textarea",{id:"content",type:"text",class:"form-control",rows:"5",placeholder:"請輸入說明內容","onUpdate:modelValue":e[12]||(e[12]=o=>s.tempProduct.content=o)},null,512),[[m,s.tempProduct.content]])]),t("div",It,[t("div",Ct,[c(t("input",{class:"form-check-input",type:"checkbox",role:"switch",id:"is_enabled","true-value":1,"false-value":0,"onUpdate:modelValue":e[13]||(e[13]=o=>s.tempProduct.is_enabled=o)},null,512),[[w,s.tempProduct.is_enabled]]),Rt]),t("div",At,[c(t("input",{class:"form-check-input",type:"checkbox",role:"switch",id:"is_love","true-value":1,"false-value":0,"onUpdate:modelValue":e[14]||(e[14]=o=>s.tempProduct.is_love=o)},null,512),[[w,s.tempProduct.is_love]]),Nt])])])])]),t("div",Ft,[St,t("button",{type:"button",class:"btn btn-primary",onClick:e[15]||(e[15]=o=>n.$emit("update-product",s.tempProduct))}," 確認 ")])])])],512)}const Ht=U(N,[["render",Bt]]);var Ot={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"wei_rio",BASE_URL:"/vue2024_week07/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:f,VITE_PATH:g}=Ot,zt={components:{ProductModal:Ht,DelModal:T,Pagination:I},data(){return{products:[],isNew:!1,tempProduct:{imagesUrl:[]},pagination:{},isLoading:!1,currentPage:1}},created(){this.getData()},methods:{...x(V,["pushMessage"]),getData(n=1){this.currentPage=n;const e=`${f}api/${g}/admin/products?page=${n}`;this.isLoading=!0,v.get(e).then(d=>{this.products=d.data.products,this.pagination=d.data.pagination,this.isLoading=!1,this.pushMessage({style:"success",title:"成功取得產品資訊",content:d.data.message})}).catch(d=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"取得產品資訊失敗",content:d.response.data.message})})},openModal(n,e){n==="add"?(this.tempProduct={imagesUrl:[]},this.isNew=!0,this.$refs.productModal.openModal()):n==="edit"?(this.tempProduct={...e},this.isNew=!1,this.$refs.productModal.openModal()):n==="del"&&(this.tempProduct={...e},this.$refs.delModal.openModal())},updateData(n){this.isLoading=!0,this.tempProduct=n;let e=`${f}api/${g}/admin/product`,d="post",u="新增產品";this.isNew||(e=`${f}api/${g}/admin/product/${this.tempProduct.id}`,d="put",u="更新產品"),v[d](e,{data:this.tempProduct}).then(s=>{this.isLoading=!1,this.pushMessage({style:"success",title:`成功${u}`,content:s.data.message}),this.$refs.productModal.hideModal(),this.getData(this.currentPage)}).catch(s=>{this.isLoading=!1,this.pushMessage({style:"danger",title:`${u}失敗`,content:s.response.data.message})})},removeData(){const n=`${f}api/${g}/admin/product/${this.tempProduct.id}`;this.isLoading=!0,v.delete(n).then(e=>{this.isLoading=!1,this.pushMessage({style:"success",title:"成功刪除產品",content:e.data.message}),this.$refs.delModal.hideModal(),this.getData(this.currentPage)}).catch(e=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"無法刪除產品",content:e.response.data.message})})}}},jt=t("div",{class:"loadingio-spinner-double-ring-0ut21surusy"},[t("div",{class:"ldio-2uwwzn0tw8t"},[t("div"),t("div"),t("div",null,[t("div")]),t("div",null,[t("div")])])],-1),qt={class:"container"},Yt={class:"d-flex justify-content-between align-items-center"},Gt=t("h2",{class:"my-4 fw-bold"},"產品明細",-1),Jt={class:"table-responsive"},Kt={class:"table align-middle table-bordered"},Qt=t("thead",{class:"fs-5"},[t("tr",{class:"table-active"},[t("th",{width:"125",class:"text-center d-none d-sm-table-cell"},"產品縮圖"),t("th",{class:"text-center"},"產品名稱"),t("th",{width:"120",class:"text-center d-none d-sm-table-cell"},"分類"),t("th",{width:"120"},"原價"),t("th",{width:"120"},"售價"),t("th",{width:"100",class:"text-center"},"啟用"),t("th",{width:"100",class:"text-center d-none d-sm-table-cell"},"推薦"),t("th",{width:"140",class:"text-center"},"編輯")])],-1),Wt={class:"fs-5"},Xt={class:"d-none d-sm-table-cell"},Zt=["src"],te={class:"text-center d-none d-sm-table-cell"},ee={class:"text-end"},se={class:"text-end"},oe={class:"text-center"},le={key:0,class:"text-success"},ie=t("i",{class:"bi bi-check-circle-fill h5"},null,-1),ne=[ie],de={key:1,class:"text-danger"},ce=t("i",{class:"bi bi-x-circle-fill h5"},null,-1),ae=[ce],re={class:"text-center d-none d-sm-table-cell"},ue={key:0,class:"text-danger"},me=t("i",{class:"bi bi-heart-fill",h5:""},null,-1),pe=[me],_e={class:"text-center"},he={class:"btn-group flex-sm-row flex-column"},be=["onClick"],fe=["onClick"];function ge(n,e,d,u,s,a){const o=_("VueLoading"),p=_("Pagination"),P=_("ProductModal"),L=_("DelModal");return l(),i(y,null,[h(o,{active:s.isLoading,"z-index":1060},{default:$(()=>[jt]),_:1},8,["active"]),t("div",qt,[t("div",Yt,[Gt,t("div",null,[t("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=r=>a.openModal("add"))}," 建立新的產品 ")])]),t("div",Jt,[t("table",Kt,[Qt,t("tbody",Wt,[(l(!0),i(y,null,k(s.products,r=>(l(),i("tr",{key:r.id},[t("td",Xt,[t("img",{class:"img-fluid",src:r.imageUrl,alt:"",width:"100"},null,8,Zt)]),t("td",null,b(r.title),1),t("td",te,b(r.category),1),t("td",ee,b(r.origin_price),1),t("td",se,b(r.price),1),t("td",oe,[r.is_enabled?(l(),i("span",le,ne)):(l(),i("span",de,ae))]),t("td",re,[r.is_love?(l(),i("span",ue,pe)):M("",!0)]),t("td",_e,[t("div",he,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm mb-sm-0 mb-2",onClick:D=>a.openModal("edit",r)}," 編輯 ",8,be),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:D=>a.openModal("del",r)}," 刪除 ",8,fe)])])]))),128))])])]),h(p,{pages:s.pagination,onEmitPages:a.getData},null,8,["pages","onEmitPages"]),h(P,{product:s.tempProduct,"is-new":s.isNew,onUpdateProduct:a.updateData,ref:"productModal"},null,8,["product","is-new","onUpdateProduct"]),h(L,{"out-item":s.tempProduct,onRemoveData:a.removeData,ref:"delModal"},null,8,["out-item","onRemoveData"])])],64)}const we=U(zt,[["render",ge]]);export{we as default};
