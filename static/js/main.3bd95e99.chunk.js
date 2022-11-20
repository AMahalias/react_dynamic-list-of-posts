(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{20:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var s=a(11),c=a.n(s),n=a(5),r=a(2),i=a(3),o=a.n(i),l=a(1),d=(a(18),a(19),a(20),a(4)),j=a.n(d),u=a(0),m=function(e){var t=e.posts,a=e.selectedPostId,s=void 0===a?0:a,c=e.selectPost;return Object(u.jsxs)("div",{"data-cy":"PostsList",children:[Object(u.jsx)("p",{className:"title",children:"Posts:"}),Object(u.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{className:"has-background-link-light",children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:"Title"}),Object(u.jsx)("th",{children:" "})]})}),Object(u.jsx)("tbody",{children:t.map((function(e){var t=e.id,a=e.title;return Object(u.jsxs)("tr",{"data-cy":"Post",children:[Object(u.jsx)("td",{"data-cy":"PostId",children:t}),Object(u.jsx)("td",{"data-cy":"PostTitle",children:a}),Object(u.jsx)("td",{className:"has-text-right is-vcentered",children:Object(u.jsx)("button",{type:"button","data-cy":"PostButton",className:j()("button is-link",{"is-light":s!==t}),onClick:function(){c(s===t?null:e)},children:s===t?"Close":"Open"})})]},t)}))})]})]})},b=a(12),h=(a(22),function(){return Object(u.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(u.jsx)("div",{className:"Loader__content"})})}),O=a(8),x=a(10),p=function(e){var t=e.addComment,a=e.postId,s=Object(l.useState)(""),c=Object(r.a)(s,2),i=c[0],d=c[1],m=Object(l.useState)(""),b=Object(r.a)(m,2),h=b[0],p=b[1],f=Object(l.useState)(""),v=Object(r.a)(f,2),N=v[0],y=v[1],g=Object(l.useState)(!1),w=Object(r.a)(g,2),k=w[0],C=w[1],E=Object(l.useState)({name:!1,email:!1,body:!1}),S=Object(r.a)(E,2),P=S[0],I=S[1],T=function(){var e=Object(n.a)(o.a.mark((function e(s){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s.preventDefault(),I({name:!i,email:!h,body:!N}),e.prev=2,i&&h&&N){e.next=5;break}return e.abrupt("return");case 5:return C(!0),e.next=8,t(i,h,N,a);case 8:y(""),e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(2),new Error("Unable to submit form");case 14:return e.prev=14,C(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,11,14,17]])})));return function(t){return e.apply(this,arguments)}}(),L=function(e){switch(e.target.name){case"name":d(e.target.value);break;case"email":p(e.target.value);break;case"body":y(e.target.value)}var t=e.target.name;I((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(O.a)({},t,!1))}))};return Object(u.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:T,children:[Object(u.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(u.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(u.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(u.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:j()("input",{"is-danger":P.name}),value:i,onChange:L}),Object(u.jsx)("span",{className:"icon is-small is-left",children:Object(u.jsx)("i",{className:"fas fa-user"})}),P.name&&Object(u.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(u.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),P.name&&Object(u.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(u.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(u.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(u.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(u.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:j()("input",{"is-danger":P.email}),value:h,onChange:L}),Object(u.jsx)("span",{className:"icon is-small is-left",children:Object(u.jsx)("i",{className:"fas fa-envelope"})}),P.email&&Object(u.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(u.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),P.email&&Object(u.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(u.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(u.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(u.jsx)("div",{className:"control",children:Object(u.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:j()("textarea",{"is-danger":P.body}),value:N,onChange:L})}),P.body&&Object(u.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(u.jsxs)("div",{className:"field is-grouped",children:[Object(u.jsx)("div",{className:"control",children:Object(u.jsx)("button",{type:"submit",className:j()("button is-link",{"is-loading":k}),children:"Add"})}),Object(u.jsx)("div",{className:"control",children:Object(u.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:function(){d(""),p(""),y(""),I({name:!1,email:!1,body:!1})},children:"Clear"})})]})]})},f="https://mate.academy/students-api";function v(e){return new Promise((function(t){setTimeout(t,e)}))}function N(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s={method:t};return a&&(s.body=JSON.stringify(a),s.headers={"Content-Type":"application/json; charset=UTF-8"}),v(300).then((function(){return fetch(f+e,s)})).then((function(e){return e.json()}))}var y=function(e){return N(e)},g=function(e,t){return N(e,"POST",t)},w=function(e){return N(e,"DELETE")},k=function(e,t,a,s){return g("/comments",{name:e,email:t,body:a,postId:s})},C=function(e){var t=e.comments,a=e.setComments;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{className:"title is-4",children:"Comments:"}),t.map((function(e){var t=e.name,s=e.id,c=e.email,r=e.body;return Object(u.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(u.jsxs)("div",{className:"message-header",children:[Object(u.jsx)("a",{href:"mailto:".concat(c),"data-cy":"CommentAuthor",children:t}),Object(u.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:Object(n.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a((function(e){return e.filter((function(e){return s!==e.id}))})),e.next=3,w("/comments/".concat(s));case 3:case"end":return e.stop()}}),e)}))),children:"delete button"})]}),Object(u.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:r})]},s)}))]})},E=function(e){var t=e.post,a=e.comments,s=e.isLoading,c=e.hasError,i=e.setComments,d=t.id,j=t.title,m=Object(l.useState)(!1),O=Object(r.a)(m,2),x=O[0],f=O[1];Object(l.useEffect)((function(){f(!1)}),[t]);var v=function(){var e=Object(n.a)(o.a.mark((function e(t,a,s,c){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k(t,a,s,c);case 3:n=e.sent,i((function(e){return[].concat(Object(b.a)(e),[n])})),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),new Error("Unable to create new comment");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a,s,c){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(u.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(u.jsxs)("div",{className:"block",children:[Object(u.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(d,": ").concat(j)}),Object(u.jsx)("p",{"data-cy":"PostBody",children:t.body})]}),Object(u.jsxs)("div",{className:"block",children:[s&&a&&Object(u.jsx)(h,{}),c&&Object(u.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),0===a.length&&!s&&!c&&Object(u.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),a.length>0&&Object(u.jsx)(C,{comments:a,setComments:i}),!x&&!s&&!c&&Object(u.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){return f(!0)},children:"Write a comment"})]}),x&&Object(u.jsx)(p,{addComment:v,postId:d})]})})},S=function(e){var t=e.user,a=e.users,s=e.chooseUser,c=Object(l.useState)(0),n=Object(r.a)(c,2),i=n[0],o=n[1],d=Object(l.useState)(!1),m=Object(r.a)(d,2),b=m[0],h=m[1];return Object(l.useEffect)((function(){if(b){var e=function(){h(!1)};return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}}),[b]),Object(u.jsxs)("div",{"data-cy":"UserSelector",className:j()("dropdown",{"is-active":b}),children:[Object(u.jsx)("div",{className:"dropdown-trigger",children:Object(u.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){h((function(e){return!e}))},children:[Object(u.jsx)("span",{children:t?t.name:"Choose a user"}),Object(u.jsx)("span",{className:"icon is-small",children:Object(u.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(u.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(u.jsx)("div",{className:"dropdown-content",children:a.map((function(e){var t=e.id,a=e.name;return Object(u.jsx)("a",{href:"#user-".concat(t),className:j()("dropdown-item",{"is-active":i===t}),onClick:function(){s(e),o(t),h(!1)},children:a},t)}))})})]})},P=function(){var e=Object(l.useState)(null),t=Object(r.a)(e,2),a=t[0],s=t[1],c=Object(l.useState)([]),i=Object(r.a)(c,2),d=i[0],b=i[1],O=Object(l.useState)([]),x=Object(r.a)(O,2),p=x[0],f=x[1],v=Object(l.useState)(!1),N=Object(r.a)(v,2),g=N[0],w=N[1],k=Object(l.useState)(!1),C=Object(r.a)(k,2),P=C[0],I=C[1],T=Object(l.useState)(!1),L=Object(r.a)(T,2),F=L[0],U=L[1],B=Object(l.useState)(null),D=Object(r.a)(B,2),M=D[0],A=D[1],_=Object(l.useState)([]),J=Object(r.a)(_,2),q=J[0],W=J[1],G=function(){var e=Object(n.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y("/users");case 3:t=e.sent,b(t),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),new Error("Unable to load users from server");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){G()}),[]);var Y=function(){var e=Object(n.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return");case 2:return M||I(!0),e.prev=3,e.next=6,s=a.id,y("/posts?userId=".concat(s));case 6:t=e.sent,f(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),w(!0);case 13:return e.prev=13,I(!1),e.finish(13);case 16:case"end":return e.stop()}var s}),e,null,[[3,10,13,16]])})));return function(){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){A(null),a?Y():f([])}),[null===a||void 0===a?void 0:a.id]);var z=function(){var e=Object(n.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(U(!0),e.prev=1,!M){e.next=7;break}return e.next=5,a=M.id,y("/comments?postId=".concat(a));case 5:t=e.sent,W(t);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),w(!0);case 12:return e.prev=12,U(!1),e.finish(12);case 15:case"end":return e.stop()}var a}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){W([]),z()}),[M]),Object(u.jsx)("main",{className:"section",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"tile is-ancestor",children:[Object(u.jsx)("div",{className:"tile is-parent",children:Object(u.jsxs)("div",{className:"tile is-child box is-success",children:[Object(u.jsx)("div",{className:"block",children:Object(u.jsx)(S,{user:a,users:d,chooseUser:s})}),Object(u.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!a&&Object(u.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),a&&P&&Object(u.jsx)(h,{}),a&&g&&Object(u.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),a&&!P&&!g&&(0===p.length?Object(u.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}):Object(u.jsx)(m,{posts:p,selectedPostId:null===M||void 0===M?void 0:M.id,selectPost:A}))]})]})}),Object(u.jsx)("div",{"data-cy":"Sidebar",className:j()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":M}),children:M&&Object(u.jsx)("div",{className:"tile is-child box is-success ",children:Object(u.jsx)(E,{post:M,comments:q,isLoading:F,hasError:g,setComments:W})})})]})})})};c.a.render(Object(u.jsx)(P,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.3bd95e99.chunk.js.map