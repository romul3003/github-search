(this["webpackJsonpgithub-search"]=this["webpackJsonpgithub-search"]||[]).push([[0],{32:function(e,a,t){e.exports=t(61)},37:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var n,r,c=t(0),l=t.n(c),s=t(29),o=t.n(s),u=(t(37),t(7)),i=t(8),m=function(){return l.a.createElement("nav",{className:"navbar navbar-dark bg-primary navbar-expand-md"},l.a.createElement("div",{className:"navbar-brand"},"Github search"),l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(u.c,{to:"/",exact:!0,className:"nav-link"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(u.c,{to:"/about",className:"nav-link"},"Info"))))},E=t(11),d=Object(c.createContext)(),p=Object(c.createContext)(),b=function(){var e=Object(c.useState)(""),a=Object(E.a)(e,2),t=a[0],n=a[1],r=Object(c.useContext)(d),s=Object(c.useContext)(p);return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter your github username",value:t,onChange:function(e){return n(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(s.clearUsers(),t.trim()?(r.hide(),s.search(t.trim())):r.show("Please, enter your data!","warning"))}}))},f=function(e){var a=e.user;return l.a.createElement("div",{className:"card"},l.a.createElement("img",{src:a.avatar_url,alt:a.login,className:"card-img-top"}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},a.login),l.a.createElement(u.b,{to:"/profile/"+a.login,className:"btn btn-primary"},"Open")))},v=function(){var e=Object(c.useContext)(p),a=e.loading,t=e.users;return l.a.createElement(c.Fragment,null,l.a.createElement(b,null),l.a.createElement("div",{className:"row"},a?l.a.createElement("p",{className:"text-center"},"Loading..."):t.map((function(e){return l.a.createElement("div",{className:"col-sm-4 mb-4",key:e.id},l.a.createElement(f,{user:e}))}))))},g=function(){return l.a.createElement("div",{className:"jumbotron"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"display-4"},"Info"),l.a.createElement("p",{className:"lead"},"App version: ",l.a.createElement("strong",null,"1.0.0"))))},h=function(e){var a=e.repos;return l.a.createElement(l.a.Fragment,null,a.map((function(e){return l.a.createElement("div",{className:"card mb-3",key:e.id},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",null,l.a.createElement("a",{href:e.html_url,rel:"noopener noreferrer",target:"_blank"},e.name))))})))},y=function(e){var a=e.match,t=Object(c.useContext)(p),n=t.getUser,r=t.getRepos,s=t.loading,o=t.user,i=t.repos,m=a.params.name;if(Object(c.useEffect)((function(){n(m),r(m)}),[]),s)return l.a.createElement("p",{className:"text-center"},"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...");var E=o.name,d=o.company,b=o.avatar_url,f=o.location,v=o.bio,g=o.blog,y=o.login,N=o.html_url,O=o.followers,j=o.following,_=o.public_repos,x=o.public_gists;return l.a.createElement(c.Fragment,null,l.a.createElement(u.b,{to:"/",className:"btn btn-link"},"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"),l.a.createElement("div",{className:"card mb-4"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-3 text-center"},l.a.createElement("img",{src:b,alt:E,style:{width:"150px"}}),l.a.createElement("h1",null,E),f&&l.a.createElement("p",null,"\u041c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435: ",f)),l.a.createElement("div",{className:"col"},v&&l.a.createElement(c.Fragment,null,l.a.createElement("h3",null,"BIO"),l.a.createElement("p",null,v)),l.a.createElement("a",{href:N,target:"_blank",rel:"noopener noreferrer",className:"btn btn-dark"},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c"),l.a.createElement("ul",null,y&&l.a.createElement("li",null,l.a.createElement("strong",null,"Username: ")," ",y),d&&l.a.createElement("li",null,l.a.createElement("strong",null,"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f: ")," ",d),g&&l.a.createElement("li",null,l.a.createElement("strong",null,"Website: ")," ",g)),l.a.createElement("div",{className:"badge badge-primary"},"\u041f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u0438: ",O),l.a.createElement("div",{className:"badge badge-success"},"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u043d: ",j),l.a.createElement("div",{className:"badge badge-info"},"\u0420\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0438: ",_),l.a.createElement("div",{className:"badge badge-dark"},"Gists: ",x))))),l.a.createElement(h,{repos:i}))},N=function(){var e=Object(c.useContext)(d),a=e.alert,t=e.hide;return a?l.a.createElement("div",{className:"alert alert-".concat(a.type||"secondary"," alert-dismissible"),role:"alert"},a.text,l.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:t},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))):null},O=t(4),j=(n={},Object(O.a)(n,"SHOW_ALERT",(function(e,a){return a.payload})),Object(O.a)(n,"HIDE_ALERT",(function(){return null})),Object(O.a)(n,"DEFAULT",(function(e){return e})),n),_=function(e,a){return(j[a.type]||j.DEFAULT)(e,a)},x=function(e){var a=e.children,t=Object(c.useReducer)(_,null),n=Object(E.a)(t,2),r=n[0],s=n[1];return l.a.createElement(d.Provider,{value:{hide:function(){return s({type:"HIDE_ALERT"})},show:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"secondary";s({type:"SHOW_ALERT",payload:{type:a,text:e}})},alert:r}},a)},R=t(10),S=t.n(R),k=t(14),w=t(15),A=t.n(w),U=t(12),C=(r={},Object(O.a)(r,"SEARCH_USERS",(function(e,a){var t=a.payload;return Object(U.a)({},e,{users:t,loading:!1})})),Object(O.a)(r,"GET_REPOS",(function(e,a){var t=a.payload;return Object(U.a)({},e,{repos:t,loading:!1})})),Object(O.a)(r,"GET_USER",(function(e,a){var t=a.payload;return Object(U.a)({},e,{user:t,loading:!1})})),Object(O.a)(r,"SET_LOADING",(function(e){return Object(U.a)({},e,{loading:!0})})),Object(O.a)(r,"CLEAR_USERS",(function(e){return Object(U.a)({},e,{users:[]})})),Object(O.a)(r,"DEFAULT",(function(e){return e})),r),L=function(e,a){return(C[a.type]||C.DEFAULT)(e,a)},T=function(e){return"".concat(e,"client_id=").concat("dc3fc4eeb13555899d7e","&client_secret=").concat("74ae66dcc2b4ea3c3fd2b77e2bb17cbe16e93f16")},D=function(e){var a=e.children,t=Object(c.useReducer)(L,{user:{},users:[],loading:!1,repos:[]}),n=Object(E.a)(t,2),r=n[0],s=n[1],o=function(){var e=Object(k.a)(S.a.mark((function e(a){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(),e.next=3,A.a.get(T("https://api.github.com/search/users?q=".concat(a,"&")));case 3:t=e.sent,s({type:"SEARCH_USERS",payload:t.data.items});case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),u=function(){var e=Object(k.a)(S.a.mark((function e(a){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(),e.next=3,A.a.get(T("https://api.github.com/users/".concat(a,"?")));case 3:t=e.sent,s({type:"GET_USER",payload:t.data});case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),i=function(){var e=Object(k.a)(S.a.mark((function e(a){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(),e.next=3,A.a.get(T("https://api.github.com/users/".concat(a,"/repos?per_page=5&")));case 3:t=e.sent,s({type:"GET_REPOS",payload:t.data});case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),m=function(){return s({type:"SET_LOADING"})},d=r.user,b=r.users,f=r.repos,v=r.loading;return l.a.createElement(p.Provider,{value:{setLoading:m,search:o,getUser:u,getRepos:i,clearUsers:function(){return s({type:"CLEAR_USERS"})},user:d,users:b,repos:f,loading:v}},a)};var F=function(){return l.a.createElement(D,null,l.a.createElement(x,null,l.a.createElement(u.a,null,l.a.createElement(m,null),l.a.createElement("div",{className:"container pt-4"},l.a.createElement(N,null),l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/",exact:!0,component:v}),l.a.createElement(i.a,{path:"/about",component:g}),l.a.createElement(i.a,{path:"/profile/:name",component:y}))))))};o.a.render(l.a.createElement(F,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.3117a82c.chunk.js.map