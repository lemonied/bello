(self.webpackChunkbello=self.webpackChunkbello||[]).push([[81],{6085:function(b,p,a){"use strict";a.d(p,{y:function(){return g}});var E=a(97857),f=a.n(E),I=a(13769),j=a.n(I),s=a(67294),y=a(93247),S=a(96486),D=a(77959);function O(i){return typeof i=="undefined"||i===null||i===""}function L(i,t){return O(i)&&O(t)?!0:(0,S.isEqual)(i,t)}var V=function(t,e,n){if(O(t)&&!O(e))return n===D.z.SOURCE?D.$.EMPTY:D.$.REMOVE;if(!O(t)&&O(e))return n===D.z.SOURCE?D.$.REMOVE:D.$.ADD;if(!L(t,e))return D.$.MODIFY},ae=a(42056),v=a(85893),Y=(0,s.createContext)({}),T=function(t){var e=t.children,n=t.value,r=(0,s.useContext)(Y),o=(0,s.useMemo)(function(){return Object.assign({},r,n)},[n,r]);return(0,v.jsx)(Y.Provider,{value:o,children:e})},G=(0,s.createContext)({}),A=function(t){var e=t.children,n=t.value,r=(0,s.useContext)(G),o=(0,s.useMemo)(function(){return Object.assign({},r,n)},[n,r]);return(0,v.jsx)(G.Provider,{value:o,children:e})},Je=a(84820),ie=a(64599),se=a.n(ie),le=a(19632),F=a.n(le),fe=a(12444),ve=a.n(fe),de=a(72004),ce=a.n(de),me=a(9783),H=a.n(me),$=function(){function i(){ve()(this,i),H()(this,"state",{}),H()(this,"subscribers",[])}return ce()(i,[{key:"setState",value:function(e){i.updateState(this.state,e)}},{key:"getSnapshots",value:function(){return this.state}},{key:"getSnapshot",value:function(e){var n=e.names,r=e.type;if(n&&r)return this.state[[r].concat(F()(n)).join(i.keySplit)]}},{key:"getUniqueFieldsSnapshots",value:function(e){var n=e.names,r=e.type,o=e.uniqueKey;if(n&&r&&o)return(0,S.pickBy)(this.state,function(u,l){return new RegExp("^".concat(i.join([i.join([r].concat(F()(n))),"\\d",i.join(o)]),"$")).test(l)})}},{key:"getChildSnapshots",value:function(e){var n=e.names,r=e.type;if(n&&r){var o=i.join([r].concat(F()(n)));return(0,S.pickBy)(this.state,function(u,l){return l.startsWith(o)})}}},{key:"emit",value:function(e){var n=i.join([e.type].concat(F()(e.names))),r=this.state[n];this.setState(e);var o=se()(this.subscribers),u;try{for(o.s();!(u=o.n()).done;){var l=u.value;l.onlyValue&&!e.remove&&r&&L(e.value,r.value)||(l.fuzzy&&n.startsWith(l.key)||l.uniqueKey&&new RegExp("^".concat(i.join([(0,S.escapeRegExp)(l.key),"\\d",(0,S.escapeRegExp)(i.join(l.uniqueKey))]),"$")).test(n)||n===l.key)&&l.callback(e)}}catch(d){o.e(d)}finally{o.f()}}},{key:"on",value:function(e,n){var r=this,o=[n.type].concat(F()(n.names)).join(i.keySplit),u=f()(f()({},n),{},{key:o,callback:e});return this.subscribers.push(u),function(){var l=r.subscribers.indexOf(u);l>-1&&r.subscribers.splice(l,1)}}}],[{key:"join",value:function(e){return e.join(i.keySplit)}},{key:"updateState",value:function(e,n){var r=[n.type].concat(F()(n.names)).join(i.keySplit);return n.remove?delete e[r]:e[r]=n,e}}]),i}();H()($,"keySplit","_DIFORM_STORE_KEY_SPLIT_");var P=function(){return(0,s.useContext)(Y)},J=function(){var t=P(),e=t.type;return e===D.z.SOURCE?D.z.TARGET:D.z.SOURCE},he=function(t){var e=(0,s.useRef)(t);return e.current=t,(0,s.useCallback)(function(){return e.current.apply(e,arguments)},[])},xe=function(t){var e=(0,s.useRef)(),n=(0,s.useRef)(t);return n.current!==t&&(e.current=n.current,n.current=t),e.current},Q=function(t,e){var n=(0,s.useRef)(),r=xe(e);return(typeof e=="undefined"||!(0,S.isEqual)(r,e))&&(n.current=t()),n.current},X=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e[0],o=e.slice(1),u=he(r);return Q(function(){return S.debounce.apply(void 0,[u].concat(F()(o)))},[o])},ye=a(5574),B=a.n(ye),k=function(){var t=P(),e=t.statusInfo,n=t.firstStatus,r=(0,s.useState)(!1),o=B()(r,2),u=o[0],l=o[1];(0,s.useEffect)(function(){var c=setTimeout(function(){return l(!0)},300);return function(){return clearTimeout(c)}},[]);var d=(0,s.useMemo)(function(){return n?e:null},[n,e]);return u?d:null},De=a(91269),w={"zh-cn":{ADD:"\u65B0\u589E",REMOVE:"\u5220\u9664",MODIFY:"\u4FEE\u6539",EMPTY:"\u7A7A"},en:{ADD:"New",REMOVE:"Remove",MODIFY:"Modified",EMPTY:"Empty"}},U=function(){return(0,s.useContext)(ae.B)},Ce=function(){var t,e,n=(0,s.useContext)(De.ZP.ConfigContext),r=U(),o=(t=(e=n.locale)===null||e===void 0?void 0:e.locale)!==null&&t!==void 0?t:"en";return(0,s.useCallback)(function(u){var l,d,c=r==null?void 0:r.locale,h=(l=w[o])!==null&&l!==void 0?l:w.en,m=Object.assign({},h,c);return(d=m[u])!==null&&d!==void 0?d:u},[o,r==null?void 0:r.locale])},ee=function(){var t=Ce(),e=U();return(0,s.useCallback)(function(n){if(n){var r,o;return f()(f()({},n),{},{text:t(n.code),color:(r=e==null||(o=e.color)===null||o===void 0?void 0:o[n.code])!==null&&r!==void 0?r:n.color})}},[e==null?void 0:e.color,t])},W=function(){return(0,s.useContext)(G)},Z=function(t){return Q(function(){if(typeof t!="undefined")return Array.isArray(t)?t.length?t:void 0:[t]},[t])},K=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return Q(function(){if(!e.some(function(o){return typeof o=="undefined"})){var r=S.concat.apply(void 0,e);return r.length?r:void 0}},[e])},Pe=function(t){var e=Z(t),n=P(),r=n.fullNamePath;return K(r,e)},te=function(t){var e=Z(t),n=P(),r=n.anotherFieldName,o=n.uniqueKey;return(0,s.useMemo)(function(){return o&&typeof r=="number"&&typeof(e==null?void 0:e[0])=="number"?[r].concat(F()(e.slice(1))):e},[r,e,o])},_=function(t,e){var n=P(),r=n.store,o=(0,s.useState)(function(){return r==null?void 0:r.getSnapshot({type:t,names:e})}),u=B()(o,2),l=u[0],d=u[1],c=X(function(h){d(h)},300);return(0,s.useEffect)(function(){if(e&&t&&r){c(r.getSnapshot({type:t,names:e}));var h=r.on(function(m){c(m.remove?void 0:m)},{names:e,type:t,onlyValue:!0});return function(){h(),c.cancel()}}},[t,e,r,c]),l},Qe=function(t){var e=useDiformContext(),n=e.type,r=useNextNames(t);return _(n,r)},pe=function(t){var e=P(),n=e.anotherFullNamePath,r=J(),o=te(t),u=K(n,o);return _(r,u)},Ee=function(t){var e=P(),n=e.type,r=e.fullNamePath,o=e.uniqueKey,u=K(r,t,o);return _(n,u)},Se=function(){var t=P(),e=t.store,n=t.anotherFullNamePath,r=t.uniqueKey,o=J(),u=(0,s.useState)(function(){return e==null?void 0:e.getUniqueFieldsSnapshots({names:n,type:o,uniqueKey:r})}),l=B()(u,2),d=l[0],c=l[1],h=(0,s.useRef)(d),m=X(function(){c(h.current)},300);return(0,s.useEffect)(function(){if(n&&o&&e&&r){h.current=e.getUniqueFieldsSnapshots({names:n,type:o,uniqueKey:r}),m();var C=e.on(function(x){h.current=h.current?$.updateState(f()({},h.current),x):e==null?void 0:e.getUniqueFieldsSnapshots({names:n,type:o,uniqueKey:r}),m()},{names:n,type:o,uniqueKey:r,onlyValue:!0});return function(){C(),m.cancel()}}},[n,m,e,o,r]),d},Me=function(t){var e=P(),n=e.store,r=e.anotherFullNamePath,o=K(r,t),u=J(),l=(0,s.useRef)((0,s.useMemo)(function(){return n==null?void 0:n.getChildSnapshots({names:o,type:u})},[])),d=(0,s.useState)(!(0,S.isEmpty)(l.current)),c=B()(d,2),h=c[0],m=c[1],C=X(function(){m(!(0,S.isEmpty)(l.current))},300);return(0,s.useEffect)(function(){if(o&&u&&n){l.current=n.getChildSnapshots({type:u,names:o}),C();var x=n.on(function(N){l.current=l.current?$.updateState(f()({},l.current),N):n==null?void 0:n.getChildSnapshots({names:o,type:u}),C()},{names:o,type:u,onlyValue:!0,fuzzy:!0});return function(){x(),C.cancel()}}},[u,o,n,C]),h},je=function(t){var e=P(),n=e.uniqueKey,r=e.anotherFullNamePath,o=Se(),u=Ee(t),l=Me(t);return(0,s.useMemo)(function(){if(n&&o&&u&&r){var d;return(d=(0,S.values)(o).find(function(c){return L(c.value,u.value)}))===null||d===void 0?void 0:d.names[r.length]}return l?t:void 0},[n,o,u,r,l,t])},ge=a(68400),Ie=a.n(ge),Ne=a(97653),Oe=a(93967),Re=a.n(Oe),ne,Fe=Ne.ZP.div(ne||(ne=Ie()([`
  &.bello-diform-mark{
    padding: 8px;
    border-style: dashed;
    border-top: none;
    border-left-width: 1px;
    border-bottom-width: 1px;
    border-right-width: 1px;
    border-color: `,`;
    position: relative;

    .bello-diform-mark-divider{
      position: absolute;
      bottom: 100%;
      width: 100%;
      left: 0;
      transform: translate(0, 50%);
      display: flex;
      align-items: center;

      & > span{
        font-size: 12px;
        color: `,`;

        &:first-child{
          flex: 0 0 25%;
        }

        &:last-child {
          flex: 1;
        }

        &:first-child, &:last-child{
          border-top-width: 1px;
          border-top-style: dashed;
          border-color: `,`;
        }
      }
    }
  }
`])),function(i){var t;return(t=i.$status)===null||t===void 0?void 0:t.color},function(i){var t;return(t=i.$status)===null||t===void 0?void 0:t.color},function(i){var t;return(t=i.$status)===null||t===void 0?void 0:t.color}),re=function(t){var e=t.className,n=t.style,r=t.children,o=k();return(0,v.jsxs)(Fe,{className:Re()(e,{"bello-diform-mark":o}),style:n,$status:o,children:[o?(0,v.jsxs)("div",{className:"bello-diform-mark-divider",children:[(0,v.jsx)("span",{}),(0,v.jsx)("span",{children:o==null?void 0:o.text}),(0,v.jsx)("span",{})]}):null,r]})},Ae=["children","name","noStatus"],Te=["children","noStatus"],Ke=function(t){var e=t.children,n=t.name,r=t.noStatus,o=j()(t,Ae),u=P(),l=u.type,d=u.store,c=u.statusInfo,h=u.firstStatus,m=pe(n),C=ee(),x=U(),N=Pe(n),z=(0,s.useRef)(d);z.current=d;var R=(0,s.useMemo)(function(){if(l){var M=o.value,q=m==null?void 0:m.value;return C(V(M,q,l))}},[m==null?void 0:m.value,o.value,l,C]),Ge=(0,s.useMemo)(function(){return{statusInfo:R!=null?R:c,firstStatus:!h&&!c&&!!R}},[h,R,c]),He=(0,s.useMemo)(function(){var M;return(M=x==null?void 0:x.wrapper)!==null&&M!==void 0?M:re},[x==null?void 0:x.wrapper]);return(0,s.useEffect)(function(){if(N&&l){var M,q=o.value;(M=z.current)===null||M===void 0||M.emit({type:l,names:N,value:q})}},[o.value,N,l]),(0,s.useEffect)(function(){if(l&&N)return function(){var M;return(M=z.current)===null||M===void 0?void 0:M.emit({type:l,names:N,remove:!0})}},[N,l]),(0,v.jsx)(T,{value:Ge,children:r?(0,s.cloneElement)(e,o):(0,v.jsx)(He,{children:(0,s.cloneElement)(e,o)})})},oe=function(t){var e=t.children,n=t.noStatus,r=j()(t,Te),o=P(),u=Z(t.name);return typeof o.type!="undefined"&&u&&(0,s.isValidElement)(e)?(0,v.jsx)(y.Z.Item,f()(f()({},r),{},{children:(0,v.jsx)(Ke,{name:r.name,noStatus:r.noStyle||n,children:e})})):(0,v.jsx)(y.Z.Item,f()(f()({},r),{},{children:e}))};oe.useStatus=y.Z.Item.useStatus;var be=["uniqueKey"],Le=["uniqueKey"],Ue=function(t){var e=t.uniqueKey,n=j()(t,be),r=P(),o=r.anotherFullNamePath,u=W(),l=u.namePaths,d=te(n.name),c=K(o,d),h=Z(e),m=(0,s.useMemo)(function(){return{fullNamePath:l,anotherFullNamePath:c,uniqueKey:h}},[l,c,h]);return(0,v.jsx)(T,{value:m,children:(0,v.jsx)(y.Z.List,f()({},n))})},We=function(t){var e=t.uniqueKey,n=j()(t,Le),r=P(),o=W(),u=o.namePaths,l=K(u,t.name),d=(0,s.useMemo)(function(){return{namePaths:l}},[l]);return typeof r.type!="undefined"?(0,v.jsx)(A,{value:d,children:(0,v.jsx)(Ue,f()(f()({},n),{},{uniqueKey:e}))}):(0,v.jsx)(A,{value:d,children:(0,v.jsx)(y.Z.List,f()({},n))})},ze=function(t){var e=t.children,n=t.noStatus,r=W(),o=r.fieldName,u=je(o),l=P(),d=l.statusInfo,c=l.type,h=l.firstStatus,m=ee(),C=U(),x=(0,s.useMemo)(function(){if(d)return d;if(typeof u!="number")return c===D.z.SOURCE?m(D.$.REMOVE):m(D.$.ADD)},[u,d,c,m]),N=(0,s.useMemo)(function(){return{fieldName:o,anotherFieldName:u,statusInfo:x,firstStatus:!h&&!d&&!!x}},[o,h,u,x,d]),z=(0,s.useMemo)(function(){var R;return(R=C==null?void 0:C.wrapper)!==null&&R!==void 0?R:re},[C==null?void 0:C.wrapper]);return(0,v.jsx)(T,{value:N,children:n?e:(0,v.jsx)(z,{children:e})})},$e=function(t){var e=P(),n=(0,s.useMemo)(function(){return{fieldName:t.fieldName}},[t.fieldName]);return typeof e.type!="undefined"?(0,v.jsx)(A,{value:n,children:(0,v.jsx)(ze,f()({},t))}):(0,v.jsx)(A,{value:n,children:t.children})},Be=function(t){var e=t.children,n=W();return e(n)},Ze=a(71230),ue=a(15746),Ve=function(t){var e=t.source,n=t.target;return(0,v.jsxs)(Ze.Z,{gutter:8,children:[(0,v.jsx)(ue.Z,{span:12,children:e}),(0,v.jsx)(ue.Z,{span:12,children:n})]})},Ye=["diff"],g=function(t){var e=t.diff,n=j()(t,Ye),r=U(),o=(0,s.useMemo)(function(){var x={layout:n.layout,component:n.component,name:"source"};if(e===!0)return x;if(e)return f()(f()({},x),e)},[e,n.layout,n.component]),u=(0,s.useMemo)(function(){return f()({name:o?"target":void 0},n)},[n,o]),l=(0,s.useMemo)(function(){return{store:new $,fullNamePath:[],anotherFullNamePath:[]}},[]),d=(0,s.useMemo)(function(){return{type:D.z.SOURCE}},[]),c=(0,s.useMemo)(function(){return{type:D.z.TARGET}},[]),h=(0,s.useMemo)(function(){return{type:d.type,name:o==null?void 0:o.name,disabled:o==null?void 0:o.disabled,namePaths:[]}},[o==null?void 0:o.disabled,o==null?void 0:o.name,d.type]),m=(0,s.useMemo)(function(){return{type:c.type,name:u==null?void 0:u.name,disabled:u==null?void 0:u.disabled,namePaths:[]}},[u==null?void 0:u.disabled,u==null?void 0:u.name,c.type]),C=(0,s.useMemo)(function(){var x;return(x=r==null?void 0:r.component)!==null&&x!==void 0?x:Ve},[r==null?void 0:r.component]);return o?(0,v.jsx)(T,{value:l,children:(0,v.jsx)(C,{source:(0,v.jsx)(A,{value:h,children:(0,v.jsx)(T,{value:d,children:(0,v.jsx)(y.Z,f()(f()({},o),{},{children:u.children}))})}),target:(0,v.jsx)(A,{value:m,children:(0,v.jsx)(T,{value:c,children:(0,v.jsx)(y.Z,f()({},u))})})})}):(0,v.jsx)(A,{value:m,children:(0,v.jsx)(y.Z,f()({},u))})};g.Item=oe,g.List=We,g.ListItem=$e,g.ErrorList=y.Z.ErrorList,g.Info=Be,g.useForm=y.Z.useForm,g.useFormInstance=y.Z.useFormInstance,g.useWatch=y.Z.useWatch,g.useDiformInfo=W,g.useDiformStatus=k},7481:function(b,p,a){"use strict";a.d(p,{Diform:function(){return E.y},DiformConfigProvider:function(){return j.z},DiformTypes:function(){return s.z}});var E=a(6085),f=a(84820),I=a.n(f);a.o(f,"DiformConfigProvider")&&a.d(p,{DiformConfigProvider:function(){return f.DiformConfigProvider}}),a.o(f,"DiformTypes")&&a.d(p,{DiformTypes:function(){return f.DiformTypes}}),a.o(f,"PassProps")&&a.d(p,{PassProps:function(){return f.PassProps}});var j=a(42056),s=a(77959)},42056:function(b,p,a){"use strict";a.d(p,{B:function(){return y},z:function(){return S}});var E=a(13769),f=a.n(E),I=a(67294),j=a(85893),s=["children"],y=(0,I.createContext)(null),S=function(O){var L=O.children,V=f()(O,s);return(0,j.jsx)(y.Provider,{value:V,children:L})}},77959:function(b,p,a){"use strict";a.d(p,{$:function(){return E},z:function(){return f}});var E={REMOVE:{code:"REMOVE",color:"#ff4d4f"},ADD:{code:"ADD",color:"#52c41a"},MODIFY:{code:"MODIFY",color:"#faad14"},EMPTY:{code:"EMPTY",color:"#d9d9d9"}},f=function(I){return I.SOURCE="_DIFORM_TYPE_SOURCE_",I.TARGET="_DIFORM_TYPE_TARGET_",I}({})},84820:function(){},63170:function(b,p,a){"use strict";a.d(p,{I:function(){return j}});var E=a(13769),f=a.n(E),I=["children"],j=function(y){var S=y.children,D=f()(y,I);return S(D)}},31081:function(b,p,a){"use strict";a.d(p,{Diform:function(){return E.Diform},DiformConfigProvider:function(){return E.DiformConfigProvider},DiformTypes:function(){return E.DiformTypes},PassProps:function(){return f.I}});var E=a(7481);a.o(E,"PassProps")&&a.d(p,{PassProps:function(){return E.PassProps}});var f=a(63170)}}]);
