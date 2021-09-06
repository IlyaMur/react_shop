(this["webpackJsonpshop-project"]=this["webpackJsonpshop-project"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),r=c(7),i=c.n(r),o=c(0);function s(){return Object(o.jsx)("nav",{className:"green darken-1",children:Object(o.jsxs)("div",{className:"nav-wrapper",children:[Object(o.jsx)("a",{href:"#!",className:"brand-logo",children:"React Toy-Shop"}),Object(o.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://github.com/IlyaMur/react_shop",target:"_blank",rel:"noreferrer",children:"Repo"})})})]})})}function l(){return Object(o.jsx)("footer",{className:"page-footer green lighten-4",children:Object(o.jsx)("div",{className:"footer-copyright",children:Object(o.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(o.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/IlyaMur/react_shop",target:"_blank",rel:"noreferrer",children:"Repo"})]})})})}var j=c(8),d=c(1),u=c(3);function b(){return Object(o.jsx)("div",{className:"progress",children:Object(o.jsx)("div",{className:"indeterminate"})})}function h(e){var t=e.id,c=e.name,n=e.description,a=e.price,r=e.full_background,i=e.addToCart;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("img",{id:"back-img",src:r,alt:c})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsx)("span",{className:"card-title",children:c}),Object(o.jsx)("p",{children:n})]}),Object(o.jsxs)("div",{className:"card-action",children:[Object(o.jsx)("button",{className:"btn",onClick:function(){return i({id:t,name:c,price:a})},children:"Buy"}),Object(o.jsxs)("span",{className:"right",style:{fontSize:"1.8rem"},children:[a," rub."]})]})]})}function m(e){var t=e.goods,c=void 0===t?[]:t,n=e.addToCart,a=void 0===n?Function.prototype:n;return c.length?Object(o.jsx)("div",{className:"goods",children:c.map((function(e){return Object(o.jsx)(h,Object(d.a)(Object(d.a)({},e),{},{addToCart:a}),e.id)}))}):Object(o.jsx)("h3",{children:"Nothing here"})}function O(e){var t=e.quantity,c=void 0===t?0:t,n=e.handleCartShow,a=void 0===n?Function.prototype:n;return Object(o.jsxs)("div",{className:"cart blue darken-4 white-text",onClick:a,children:[Object(o.jsx)("i",{className:"material-icons",children:"shopping_cart"}),c?Object(o.jsxs)("span",{className:"cart-quantity",children:[c," "]}):null]})}function p(e){var t=e.id,c=e.name,n=e.price,a=e.quantity,r=e.removeFromCart,i=void 0===r?Function.prototype:r,s=e.decreaseAmount,l=void 0===s?Function.prototype:s,j=e.increaseAmount,d=void 0===j?Function.prototype:j;return Object(o.jsxs)("li",{className:"collection-item",children:[c,Object(o.jsx)("i",{className:"material-icons cart-quantity",onClick:function(){return l(t)},children:"remove"}),"x",a,Object(o.jsx)("i",{className:"material-icons cart-quantity",onClick:function(){return d(t)},children:"add"}),"= ",n*a," rub.",Object(o.jsx)("span",{className:"secondary-content",onClick:function(){return i(t)},children:Object(o.jsx)("i",{className:"material-icons cart-delete",children:"close"})})]})}function f(e){var t=e.order,c=void 0===t?[]:t,n=e.handleCartShow,a=void 0===n?Function.prototype:n,r=e.removeFromCart,i=void 0===r?Function.prototype:r,s=e.decreaseAmount,l=void 0===s?Function.prototype:s,j=e.increaseAmount,u=void 0===j?Function.prototype:j,b=c.reduce((function(e,t){return e+t.price*t.quantity}),0);return Object(o.jsxs)("ul",{className:"collection cart-list",children:[Object(o.jsx)("li",{className:"collection-item active",children:"Cart"}),c.length?c.map((function(e){return Object(o.jsx)(p,Object(d.a)(Object(d.a)({},e),{},{removeFromCart:i,decreaseAmount:l,increaseAmount:u}),e.id)})):Object(o.jsx)("li",{className:"collection-item",children:" Cart is empty "}),Object(o.jsxs)("li",{className:"collection-item active",children:["Total price: ",b," rub."]}),Object(o.jsx)("li",{className:"collection-item right",children:Object(o.jsx)("button",{className:"btn",children:" Make order "})}),Object(o.jsx)("i",{className:"material-icons cart-close",onClick:a,children:"close"})]})}function x(e){var t=e.name,c=void 0===t?"":t,a=e.closeAlert,r=void 0===a?Function.prototype:a;return Object(n.useEffect)((function(){var e=setTimeout(r,2e3);return function(){clearTimeout(e)}}),[c]),Object(o.jsx)("div",{id:"toast-container",children:Object(o.jsxs)("div",{className:"toast",children:[c," added to the Cart"]})})}function v(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!0),i=Object(u.a)(r,2),s=i[0],l=i[1],h=Object(n.useState)([]),p=Object(u.a)(h,2),v=p[0],y=p[1],N=Object(n.useState)(!1),g=Object(u.a)(N,2),C=g[0],F=g[1],k=Object(n.useState)(""),q=Object(u.a)(k,2),S=q[0],A=q[1],w=function(){F(!C)};Object(n.useEffect)((function(){fetch("https://fortniteapi.io/v1/shop?lang=en",{headers:{Authorization:"2e665373-0fff14e2-52e5d897-0ff564f0"}}).then((function(e){return e.json()})).then((function(e){e.featured&&a(e.featured),l(!1)}))}),[]);return Object(o.jsxs)("main",{className:"container content",children:[Object(o.jsx)(O,{quantity:v.length,handleCartShow:w}),s?Object(o.jsx)(b,{}):Object(o.jsx)(m,{goods:c,addToCart:function(e){var t=v.findIndex((function(t){return t.id===e.id}));if(t<0){var c=Object(d.a)(Object(d.a)({},e),{},{quantity:1});y([].concat(Object(j.a)(v),[c]))}else{var n=v.map((function(e,c){return c===t?Object(d.a)(Object(d.a)({},e),{},{quantity:++e.quantity}):e}));y(n)}A(e.name)}}),C&&Object(o.jsx)(f,{order:v,handleCartShow:w,removeFromCart:function(e){var t=v.filter((function(t){return t.id!==e}));y(t)},decreaseAmount:function(e){var t=v.map((function(t){return t.id===e?Object(d.a)(Object(d.a)({},t),{},{quantity:--t.quantity>0?--t.quantity:0}):Object(d.a)({},t)}));y(t)},increaseAmount:function(e){var t=v.map((function(t){return t.id===e?Object(d.a)(Object(d.a)({},t),{},{quantity:++t.quantity}):Object(d.a)({},t)}));y(t)}}),S&&Object(o.jsx)(x,{name:S,closeAlert:function(){A("")}})]})}var y=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(s,{}),Object(o.jsx)(v,{}),Object(o.jsx)(l,{})]})};c(14);i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(y,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.53d3f76a.chunk.js.map