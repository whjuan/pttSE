(function(t){function e(e){for(var r,o,i=e[0],l=e[1],c=e[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},s=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1614:function(t,e,a){"use strict";a("7e51")},"56d7":function(t,e,a){"use strict";a.r(e);var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Index")],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Header"),a("router-view")],1)},i=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("nav",{staticClass:"navbar navbar-expand-sm navbar-dark bg-secondary"},[a("div",{staticClass:"navbar-nav"},[a("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/"}},[t._v("帳號搜尋")]),a("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/keyword"}},[t._v("關鍵字搜尋")]),a("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/observe"}},[t._v("觀察帳號清單")])],1)])])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-sm navbar-dark bg-primary"},[a("div",{staticClass:"navbar-nav"},[a("span",{staticClass:"nav-item active text-white"},[t._v("PTT搜尋引擎")])])])}],u={name:"Header"},d=u,p=(a("8262"),a("2877")),h=Object(p["a"])(d,l,c,!1,null,"1efa679e",null),v=h.exports,g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar navbar-light bg-secondary",staticStyle:{height:"60px"}})])}],_={name:"Footer"},f=_,b=(a("1614"),Object(p["a"])(f,g,m,!1,null,"0b44c314",null)),y=b.exports,P={name:"Index",data(){return{}},components:{Header:v,Footer:y}},C=P,x=Object(p["a"])(C,o,i,!1,null,"77b821ba",null),w=x.exports,k={name:"App",components:{Index:w}},T=k,D=(a("5c0b"),Object(p["a"])(T,n,s,!1,null,null,null)),A=D.exports,S=a("8c4f"),O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container"},[t._v("alonelykid stinger5009 "),a("p",{staticClass:"mt-5"},[t._v("新增觀察ID")]),a("GetInput",{staticClass:"mb-5",on:{getInput:t.getInput}}),a("table",{staticClass:"table table-striped"},[t._m(0),a("tbody",t._l(t.list,(function(e){return a("tr",{key:e},[a("td",[t._v(t._s(e))]),a("td",[a("router-link",{staticClass:"btn btn-primary",attrs:{type:"button",to:{name:"ViewRecords",params:{id:e}}},on:{click:function(a){return t.passValue(e)}}},[t._v("查看紀錄")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(a){return t.deleteLocalStorageArray(e)}}},[t._v("移除觀察")])],1)])})),0)])],1)])},N=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("觀察ID")]),a("th",[t._v("操作")])])])}],L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",[a("div",{staticClass:"row mt-5"},[a("div",{staticClass:"col-10 pr-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],staticClass:"form-control",attrs:{type:"text",placeholder:"輸入ID"},domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}})]),a("div",{staticClass:"col-2"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.setInput}},[t._v("新增觀察")])])])])},E=[],$={name:"GetInput",data(){return{input:""}},methods:{setInput(){this.$emit("getInput",this.input)}}},I=$,j=Object(p["a"])(I,L,E,!1,null,"62a6dfb9",null),H=j.exports,R={name:"ObserveList",components:{GetInput:H},mounted(){this.datalist=this.getLocalStorageArray()},data(){return{datalist:[]}},computed:{list:function(){return this.datalist}},methods:{getLocalStorageArray(){var t=localStorage.getItem("ObservedList"),e=JSON.parse(t);return e},setLocalStorageArray(t){this.datalist=t;var e=JSON.stringify(t);localStorage.setItem("ObservedList",e)},deleteLocalStorageArray(t){var e=confirm("確定移除 "+t+" 嗎？");if(e){var a=this.getLocalStorageArray();a.splice(a.indexOf(t),1),this.setLocalStorageArray(a)}},getInput(t){if(null===this.getLocalStorageArray("ObservedList")){var e=[];this.setLocalStorageArray(e)}var a=this.getLocalStorageArray("ObservedList");if(a.find(e=>e==t))alert("此 ID 已在觀察名單內");else{var r=window.location.href;r=r.replace("observe",""),r=r+"api/GetByUserId?user_id="+t+"&start=none&end=none",this.$http.get(r,{headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, POST, PATCH, PUT, DELETE, OPTIONS","Access-Control-Allow-Headers":"Origin, Content-Type, X-Auth-Token"}}).then(e=>{0===e.data.hits.length?alert("此 ID 不存在"):(a.push(t),this.setLocalStorageArray(a))}).catch(t=>console.log(t))}},passValue(t){this.$router.push({name:"ViewRecords",params:{id:t}})}}},q=R,M=Object(p["a"])(q,O,N,!1,null,"b355ad06",null),U=M.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container"},[a("Result",{attrs:{tableData:t.tableData,input:t.input,totalData:t.totalData}}),a("Pagination",{attrs:{prevText:t.prevText,nextText:t.nextText,linkClass:t.linkClass,pageNum:t.pageNum,totalPageCount:t.totalPageCount},on:{updatePage:t.filterByPageNum}})],1)])},G=[],V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",["Account"==t.route||"ViewRecords"==t.route?a("p",{staticClass:"mt-5"},[t._v(t._s(t.input)+" 之發文紀錄")]):"Keyword"==t.route?a("p",{staticClass:"mt-5"},[t._v(t._s(t.input)+" 的相關推文")]):t._e(),a("p",{staticClass:"text-muted"},[t._v(" "+t._s(t.totalData)+" ")]),a("table",{staticClass:"table table-striped",attrs:{id:"result"}},[a("thead",["Account"==t.route||"ViewRecords"==t.route?a("tr",t._l(t.accountHead,(function(e){return a("th",{key:e},[t._v(" "+t._s(e)+" ")])})),0):"Keyword"==t.route?a("tr",t._l(t.keywordHead,(function(e){return a("th",{key:e},[t._v(" "+t._s(e)+" ")])})),0):t._e()]),"Account"==t.route||"ViewRecords"==t.route?a("tbody",t._l(t.tableData,(function(e){return a("tr",{key:e._id},[a("td",[t._v(t._s(e._source.board))]),e._source.date?a("td",[t._v(t._s(new Date(1e3*Number(e._source.date)).toLocaleString().split(" ")[0]))]):a("td",[t._v("無法顯示")]),e._source.article_title?a("td",[a("a",{attrs:{target:"_blank",href:e._source.article_url}},[t._v(t._s(e._source.article_title))])]):a("td",[a("a",{attrs:{target:"_blank",href:e._source.article_url}},[t._v("來源格式錯誤，點擊以查看原文網址")])]),e._source.content.length<=25?a("td",[t._v(t._s(e._source.comment_tag)+" : "+t._s(e._source.content))]):t._e(),e._source.content.length>25?a("td",[t._v(t._s(e._source.comment_tag)+" : "+t._s(e._source.content.substr(0,25)+" . . ."))]):t._e()])})),0):"Keyword"==t.route?a("tbody",t._l(t.tableData,(function(e){return a("tr",{key:e._id},[a("td",[t._v(t._s(e._source.user_id))]),a("td",[t._v(t._s(e._source.board))]),e._source.date?a("td",[t._v(t._s(new Date(1e3*Number(e._source.date)).toLocaleString().split(" ")[0]))]):a("td",[t._v("無法顯示")]),a("td",[a("a",{attrs:{target:"_blank",href:e._source.article_url}},[t._v(t._s(e._source.article_title))])]),e._source.content.length<=20?a("td",[t._v(t._s(e._source.comment_tag)+" : "+t._s(e._source.content))]):t._e(),e._source.content.length>20?a("td",[t._v(t._s(e._source.comment_tag)+" : "+t._s(e._source.content.substr(0,20)+" . . ."))]):t._e()])})),0):t._e()])])},K=[],z={name:"Result",data(){return{accountHead:["看板","日期","標題","類型"],keywordHead:["作者帳號","看板","日期","標題","類型"]}},computed:{route:function(){return this.$route.name}},props:{tableData:Array,input:String,totalData:String}},J=z,X=Object(p["a"])(J,V,K,!1,null,"18df8efa",null),F=X.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("paginate",{attrs:{value:t.pageNum,"page-count":t.totalPageCount,"click-handler":t.changePage,"page-range":3,"margin-pages":1,"prev-text":t.prevText,"next-text":t.nextText,"container-class":"pagination","page-class":"page-item","page-link-class":"page-link","prev-class":"page-item","next-class":"page-item","prev-link-class":t.linkClass,"next-link-class":t.linkClass,"activate-class":"active"}})},W=[],Y=a("8832"),Z=a.n(Y),tt={name:"pagination",components:{Paginate:Z.a},props:{prevText:String,nextText:String,linkClass:String,pageNum:Number,totalPageCount:Number},methods:{changePage(t){this.$emit("updatePage",t)}}},et=tt,at=Object(p["a"])(et,Q,W,!1,null,"e651a6ae",null),rt=at.exports,nt={name:"ViewRecords",components:{Result:F,Pagination:rt},data(){return{dataArray:[],input:"",tableData:[],requestUrl:"",totalData:"",prevText:"",nextText:"",linkClass:"",rowsPerPage:10,pageNum:1,totalPageCount:0}},mounted(){var t=this.$route.params.id;this.input=t;var e=window.location.href;e=e.replace("observe/"+t,""),console.log(e),e=e+"api/GetByUserId?user_id="+t+"&start=none&end=none",console.log(e),this.requestUrl=e,e=e+"&size="+this.rowsPerPage+"&from=0",console.log(e),this.requestSender(e)},methods:{requestSender(t){this.$http.get(t,{headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, POST, PATCH, PUT, DELETE, OPTIONS","Access-Control-Allow-Headers":"Origin, Content-Type, X-Auth-Token"}}).then(t=>{this.dataArray=t.data.hits.map(t=>t),this.tableHead=["看板","日期","標題","類型"],this.tableTitle=this.input+" 之發文紀錄",this.totalData="共 "+t.data.total.value+" 筆資料",this.prevText="Prev",this.nextText="Next",this.linkClass="page-link",this.totalPageCount=Math.ceil(t.data.total.value/this.rowsPerPage),this.tableData=this.dataArray.slice(0,this.rowsPerPage)}).catch(t=>console.log(t))},filterByPageNum(t){this.pageNum=t,this.requestSender(this.requestUrl+"&size="+this.rowsPerPage+"&from="+this.rowsPerPage*(t-1))}}},st=nt,ot=Object(p["a"])(st,B,G,!1,null,"10c86df2",null),it=ot.exports,lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container"},["Account"==t.route?a("p",{staticClass:"mt-5"},[t._v("帳號查詢 (範例: alonelykid stinger5009) ")]):"Keyword"==t.route?a("p",{staticClass:"mt-5"},[t._v("關鍵字查詢 (範例: 跨年)")]):t._e(),a("div",[a("loading",{attrs:{active:t.isLoading,"can-cancel":!0,"is-full-page":t.fullPage},on:{"update:active":function(e){t.isLoading=e}}}),a("SearchingBar",{on:{"3param":t.urlMaker}}),a("Result",{attrs:{tableData:t.tableData,input:t.input,totalData:t.totalData}}),a("Pagination",{attrs:{prevText:t.prevText,nextText:t.nextText,linkClass:t.linkClass,pageNum:t.pageNum,totalPageCount:t.totalPageCount},on:{updatePage:t.filterByPageNum}})],1)])])},ct=[],ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",[a("div",{staticClass:"row mt-5"},[a("div",{staticClass:"col-10 pr-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入"},domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}})]),a("div",{staticClass:"col-2"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.setSearch}},[t._v("Search")])]),a("div",{staticClass:"col-10 pr-0"},[a("p",{staticClass:"mt-5"},[t._v("選擇日期區間")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.startDate,expression:"startDate"}],attrs:{type:"date"},domProps:{value:t.startDate},on:{input:function(e){e.target.composing||(t.startDate=e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.endDate,expression:"endDate"}],attrs:{type:"date"},domProps:{value:t.endDate},on:{input:function(e){e.target.composing||(t.endDate=e.target.value)}}}),a("div",{staticClass:"col-10 pr-0"},[a("button",{staticClass:"btn btn-danger row mt-3",attrs:{type:"button"},on:{click:function(e){t.startDate="",t.endDate=""}}},[t._v("Reset Date")])])])])])},dt=[],pt={name:"Searchbar",data(){return{input:"",startDate:"",endDate:"",d1:0,d2:0,input_clean:""}},props:{},computed:{},methods:{dateToTimestamp(t){return Date.parse(t+"T00:00:00")/1e3},checkSearch(){return this.d1=this.dateToTimestamp(this.startDate),this.d2=this.dateToTimestamp(this.endDate),this.input&&0!==this.input.trim().length?!(!isNaN(this.d1)||!isNaN(this.d2))||(isNaN(this.d1)||isNaN(this.d2)?"請輸入完整的日期":!(this.d1>this.d2)||(this.d1=[this.d2,this.d2=this.d1][0],!0)):"請確實輸入"},setSearch(){!0===this.checkSearch()?(this.input_clean=this.input.trim(),this.$emit("3param",this.input_clean,this.d1,this.d2)):alert(this.checkSearch())}}},ht=pt,vt=Object(p["a"])(ht,ut,dt,!1,null,"3a53ec77",null),gt=vt.exports,mt=a("9062"),_t=a.n(mt),ft=(a("e40d"),{name:"Account",components:{SearchingBar:gt,Result:F,Pagination:rt,Loading:_t.a},data(){return{input:"",requestUrl:"",tableData:[],totalData:"",prevText:"",nextText:"",linkClass:"",rowsPerPage:10,pageNum:3,totalPageCount:0,isLoading:!1,fullPage:!0}},computed:{route:function(){return this.$route.name}},methods:{requestSender(t){this.isLoading=!0,this.$http.get(t,{headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, POST, PATCH, PUT, DELETE, OPTIONS","Access-Control-Allow-Headers":"Origin, Content-Type, X-Auth-Token"}}).then(t=>{this.tableData=t.data.hits.map(t=>t),this.isLoading=!1,"Account"===this.route?0==this.tableData.length?(this.totalData="共 0 筆資料",alert("此帳號不存在")):(this.totalData="共 "+t.data.total.value+" 筆資料",this.prevText="Prev",this.nextText="Next",this.linkClass="page-link",this.totalPageCount=Math.ceil(t.data.total.value/this.rowsPerPage)):"Keyword"===this.route&&(0==this.tableData.length?(this.totalData="共 0 筆資料",alert("此關鍵字不存在")):(this.totalData="共 "+t.data.total.value+" 筆資料",this.prevText="Prev",this.nextText="Next",this.linkClass="page-link",this.totalPageCount=Math.ceil(t.data.total.value/this.rowsPerPage)))}).catch(t=>console.log(t))},urlMaker(t,e,a){var r;this.isLoading=!0,this.input=t,"Keyword"===this.route?(r=window.location.href,r=r.replace("keyword",""),console.log(r),r+="api/GetByContent?content=",console.log(r)):"Account"===this.route&&(r=window.location.href+"api/",r+="GetByUserId?user_id="),r+=t,console.log(r),isNaN(e)&&isNaN(a)?r+="&start=none&end=none":r=r+"&start="+e+"&end="+a,this.requestUrl=r,r=r+"&size="+this.rowsPerPage+"&from=0",this.pageNum=1,this.requestSender(r)},filterByPageNum(t){this.pageNum=t,this.requestSender(this.requestUrl+"&size="+this.rowsPerPage+"&from="+this.rowsPerPage*(t-1))}}}),bt=ft,yt=Object(p["a"])(bt,lt,ct,!1,null,"462795e2",null),Pt=yt.exports;r["a"].use(S["a"]);const Ct=[{path:"*",redirect:"Account"},{path:"/",name:"Account",component:Pt},{path:"/keyword",name:"Keyword",component:Pt},{path:"/observe",name:"ObserveList",component:U},{path:"/observe/:id",name:"ViewRecords",component:it}],xt=new S["a"]({mode:"history",routes:Ct});var wt=xt,kt=a("bc3a"),Tt=a.n(kt),Dt=a("2106"),At=a.n(Dt);a("4989");r["a"].prototype.$eventBus=new r["a"],r["a"].use(At.a,Tt.a),r["a"].config.productionTip=!1,new r["a"]({router:wt,render:function(t){return t(A)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"7e51":function(t,e,a){},8262:function(t,e,a){"use strict";a("b118")},"9c0c":function(t,e,a){},b118:function(t,e,a){}});
//# sourceMappingURL=app.5a912a8d.js.map