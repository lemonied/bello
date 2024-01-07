"use strict";(self.webpackChunkbello=self.webpackChunkbello||[]).push([[820],{77820:function(Xe,ne,v){v.d(ne,{yh:function(){return I},zv:function(){return oe},zU:function(){return N},Ix:function(){return Be}});var re=v(97857),x=v.n(re),ue=v(13769),M=v.n(ue),s=v(67294),S=v(93247);function A(a){return typeof a=="undefined"||a===null||a===""||Array.isArray(a)&&a.length===0}var l=v(85893),ae=["children"],B=(0,s.createContext)(null),oe=function(t){var e=t.children,n=M()(t,ae);return(0,l.jsx)(B.Provider,{value:n,children:e})},ie=v(9783),F=v.n(ie),g=function(a){return a.REMOVE="REMOVE",a.ADD="ADD",a.MODIFY="MODIFY",a.EMPTY="EMPTY",a}({}),N=function(a){return a.SOURCE="_DIFORM_TYPE_SOURCE_",a.TARGET="_DIFORM_TYPE_TARGET_",a}({}),H={"zh-cn":{ADD:"\u65B0\u589E",REMOVE:"\u5220\u9664",MODIFY:"\u4FEE\u6539",EMPTY:"\u7A7A"},en:{ADD:"New",REMOVE:"Remove",MODIFY:"Modified",EMPTY:"Empty"}},se=F()(F()(F()(F()({},g.REMOVE,"#ff4d4f"),g.ADD,"#52c41a"),g.MODIFY,"#faad14"),g.EMPTY,"#d9d9d9"),q=(0,s.createContext)({}),O=function(t){var e=t.children,n=t.value,r=(0,s.useContext)(q),u=(0,s.useMemo)(function(){return Object.assign({},r,n)},[n,r]);return(0,l.jsx)(q.Provider,{value:u,children:e})},$=(0,s.createContext)({}),R=function(t){var e=t.children,n=t.value,r=(0,s.useContext)($),u=(0,s.useMemo)(function(){return Object.assign({},r,n)},[n,r]);return(0,l.jsx)($.Provider,{value:u,children:e})},le=v(64599),fe=v.n(le),ve=v(19632),E=v.n(ve),ce=v(12444),de=v.n(ce),me=v(72004),he=v.n(me),C=v(96486),V=function(){function a(){de()(this,a),F()(this,"state",{}),F()(this,"subscribers",[])}return he()(a,[{key:"setState",value:function(e){a.updateState(this.state,e)}},{key:"getSnapshots",value:function(){return this.state}},{key:"getSnapshot",value:function(e){var n=e.names,r=e.type;if(n&&r)return this.state[a.join([r].concat(E()(n)))]}},{key:"getUniqueFieldsSnapshots",value:function(e){var n=e.names,r=e.type,u=e.uniqueKey;if(n&&r&&u)return(0,C.pickBy)(this.state,function(o,i){return new RegExp("^".concat(a.join([a.join([r].concat(E()(n))),"\\d",a.join(u)]),"$")).test(i)})}},{key:"getChildSnapshots",value:function(e){var n=e.names,r=e.type;if(n&&r){var u=a.join([r].concat(E()(n)));return(0,C.pickBy)(this.state,function(o,i){return i.startsWith(u)})}}},{key:"emit",value:function(e){var n=a.join([e.type].concat(E()(e.names))),r=this.state[n];this.setState(e);var u=fe()(this.subscribers),o;try{for(u.s();!(o=u.n()).done;){var i=o.value;i.onlyValue&&!e.remove&&r&&(0,C.isEqual)(e.value,r.value)||(i.fuzzy&&n.startsWith(i.key)||i.uniqueKey&&new RegExp("^".concat(a.join([(0,C.escapeRegExp)(i.key),"\\d",(0,C.escapeRegExp)(a.join(i.uniqueKey))]),"$")).test(n)||n===i.key)&&i.callback(e)}}catch(f){u.e(f)}finally{u.f()}}},{key:"on",value:function(e,n){var r=this,u=a.join([n.type].concat(E()(n.names))),o=x()(x()({},n),{},{key:u,callback:e});return this.subscribers.push(o),function(){var i=r.subscribers.indexOf(o);i>-1&&r.subscribers.splice(i,1)}}}],[{key:"join",value:function(e){return e.join(a.keySplit)}},{key:"updateState",value:function(e,n){var r=a.join([n.type].concat(E()(n.names)));return n.remove?delete e[r]:e[r]=n,e}}]),a}();F()(V,"keySplit","_DIFORM_STORE_KEY_SPLIT_");var p=function(){return(0,s.useContext)(q)},z=function(){var t=p(),e=t.type;return e===N.SOURCE?N.TARGET:N.SOURCE},xe=function(t){var e=(0,s.useRef)(t);return e.current=t,(0,s.useCallback)(function(){return e.current.apply(e,arguments)},[])},ye=function(t){var e=(0,s.useRef)(),n=(0,s.useRef)(t);return n.current!==t&&(e.current=n.current,n.current=t),e.current},W=function(t,e){var n=(0,s.useRef)(),r=ye(e);return(typeof e=="undefined"||!(0,C.isEqual)(r,e))&&(n.current=t()),n.current},G=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e[0],u=e.slice(1),o=xe(r);return W(function(){return C.debounce.apply(void 0,[o].concat(E()(u)))},[u])},pe=v(5574),Z=v.n(pe),J=function(){var t=p(),e=t.statusInfo,n=t.firstStatus,r=(0,s.useState)(!1),u=Z()(r,2),o=u[0],i=u[1];(0,s.useEffect)(function(){var c=setTimeout(function(){return i(!0)},300);return function(){return clearTimeout(c)}},[]);var f=(0,s.useMemo)(function(){return n?e:null},[n,e]);return o?f:null},De=v(91269),K=function(){return(0,s.useContext)(B)},Ce=function(){var t,e,n=(0,s.useContext)(De.ZP.ConfigContext),r=K(),u=(t=(e=n.locale)===null||e===void 0?void 0:e.locale)!==null&&t!==void 0?t:"en";return(0,s.useCallback)(function(o){var i,f,c=r==null?void 0:r.locale,m=(i=H[u])!==null&&i!==void 0?i:H.en,d=Object.assign({},m,c);return(f=d[o])!==null&&f!==void 0?f:o},[u,r==null?void 0:r.locale])},Q=function(){var t=Ce(),e=K();return(0,s.useCallback)(function(n){if(n){var r,u;return{code:n,text:t(n),color:(r=e==null||(u=e.color)===null||u===void 0?void 0:u[n])!==null&&r!==void 0?r:se[n]}}},[e==null?void 0:e.color,t])},L=function(){return(0,s.useContext)($)},Y=function(t){return W(function(){if(typeof t!="undefined")return Array.isArray(t)?t.length?t:void 0:[t]},[t])},b=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return W(function(){if(!e.some(function(u){return typeof u=="undefined"})){var r=C.concat.apply(void 0,e);return r.length?r:void 0}},[e])},Se=function(t){var e=Y(t),n=p(),r=n.fullNamePath;return b(r,e)},X=function(t){var e=Y(t),n=p(),r=n.anotherFieldName,u=n.uniqueKey;return(0,s.useMemo)(function(){return u&&typeof r=="number"&&typeof(e==null?void 0:e[0])=="number"?[r].concat(E()(e.slice(1))):e},[r,e,u])},k=function(t,e){var n=p(),r=n.store,u=(0,s.useState)(function(){return r==null?void 0:r.getSnapshot({type:t,names:e})}),o=Z()(u,2),i=o[0],f=o[1],c=G(function(m){f(m)},300);return(0,s.useEffect)(function(){if(e&&t&&r){c(r.getSnapshot({type:t,names:e}));var m=r.on(function(d){c(d.remove?void 0:d)},{names:e,type:t,onlyValue:!0});return function(){m(),c.cancel()}}},[t,e,r,c]),i},we=function(t){var e=useDiformContext(),n=e.type,r=useNextNames(t);return k(n,r)},ge=function(t){var e=p(),n=e.anotherFullNamePath,r=z(),u=X(t),o=b(n,u);return k(r,o)},Ie=function(t){var e=p(),n=e.type,r=e.fullNamePath,u=e.uniqueKey,o=b(r,t,u);return k(n,o)},Pe=function(){var t=p(),e=t.store,n=t.anotherFullNamePath,r=t.uniqueKey,u=z(),o=(0,s.useState)(function(){return e==null?void 0:e.getUniqueFieldsSnapshots({names:n,type:u,uniqueKey:r})}),i=Z()(o,2),f=i[0],c=i[1],m=(0,s.useRef)(f),d=G(function(){c(m.current)},300);return(0,s.useEffect)(function(){if(n&&u&&e&&r){m.current=e.getUniqueFieldsSnapshots({names:n,type:u,uniqueKey:r}),d();var h=e.on(function(y){m.current=m.current?V.updateState(x()({},m.current),y):e==null?void 0:e.getUniqueFieldsSnapshots({names:n,type:u,uniqueKey:r}),d()},{names:n,type:u,uniqueKey:r,onlyValue:!0});return function(){h(),d.cancel()}}},[n,d,e,u,r]),f},Ne=function(t){var e=p(),n=e.store,r=e.anotherFullNamePath,u=b(r,t),o=z(),i=(0,s.useRef)((0,s.useMemo)(function(){return n==null?void 0:n.getChildSnapshots({names:u,type:o})},[])),f=(0,s.useState)(!(0,C.isEmpty)(i.current)),c=Z()(f,2),m=c[0],d=c[1],h=G(function(){d(!(0,C.isEmpty)(i.current))},300);return(0,s.useEffect)(function(){if(u&&o&&n){i.current=n.getChildSnapshots({type:o,names:u}),h();var y=n.on(function(P){i.current=i.current?V.updateState(x()({},i.current),P):n==null?void 0:n.getChildSnapshots({names:u,type:o}),h()},{names:u,type:o,onlyValue:!0,fuzzy:!0});return function(){y(),h.cancel()}}},[o,u,n,h]),m},je=function(t){var e=p(),n=e.uniqueKey,r=e.anotherFullNamePath,u=Pe(),o=Ie(t),i=Ne(t);return(0,s.useMemo)(function(){if(n&&u&&o&&r){var f;return(f=(0,C.values)(u).find(function(c){return(0,C.isEqual)(c.value,o.value)}))===null||f===void 0?void 0:f.names[r.length]}return i?t:void 0},[n,u,o,r,i,t])},Ee=v(68400),Me=v.n(Ee),Fe=v(97653),Re=v(93967),Ae=v.n(Re),w,Oe=Fe.ZP.div(w||(w=Me()([`
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
`])),function(a){var t;return(t=a.$status)===null||t===void 0?void 0:t.color},function(a){var t;return(t=a.$status)===null||t===void 0?void 0:t.color},function(a){var t;return(t=a.$status)===null||t===void 0?void 0:t.color}),_=function(t){var e=t.className,n=t.style,r=t.children,u=J();return(0,l.jsxs)(Oe,{className:Ae()(e,{"bello-diform-mark":u}),style:n,$status:u,children:[u?(0,l.jsxs)("div",{className:"bello-diform-mark-divider",children:[(0,l.jsx)("span",{}),(0,l.jsx)("span",{children:u==null?void 0:u.text}),(0,l.jsx)("span",{})]}):null,r]})},be=["children","name","noStatus"],Te=["children","noStatus"],Ke=function(t){var e=t.children,n=t.name,r=t.noStatus,u=M()(t,be),o=p(),i=o.type,f=o.store,c=o.statusInfo,m=o.firstStatus,d=K(),h=ge(n),y=Q(),P=Se(n),U=(0,s.useRef)(f);U.current=f;var j=(0,s.useMemo)(function(){if(i){var D=u.value,T=h==null?void 0:h.value,Qe=function(){if(A(D)&&!A(T))return i===N.SOURCE?g.EMPTY:g.REMOVE;if(!A(D)&&A(T))return i===N.SOURCE?g.REMOVE:g.ADD;if(!A(D)&&!A(T)&&!(0,C.isEqual)(D,T))return g.MODIFY}();return y(Qe)}},[h==null?void 0:h.value,u.value,i,y]),He=(0,s.useMemo)(function(){return{statusInfo:j!=null?j:c,firstStatus:!m&&!c&&!!j}},[m,j,c]),Je=(0,s.useMemo)(function(){var D;return(D=d==null?void 0:d.wrapper)!==null&&D!==void 0?D:_},[d==null?void 0:d.wrapper]);return(0,s.useEffect)(function(){if(P&&i){var D,T=u.value;(D=U.current)===null||D===void 0||D.emit({type:i,names:P,value:T})}},[u.value,P,i]),(0,s.useEffect)(function(){if(i&&P)return function(){var D;return(D=U.current)===null||D===void 0?void 0:D.emit({type:i,names:P,remove:!0})}},[P,i]),(0,l.jsx)(O,{value:He,children:r?(0,s.cloneElement)(e,u):(0,l.jsx)(Je,{children:(0,s.cloneElement)(e,u)})})},ee=function(t){var e=t.children,n=t.noStatus,r=M()(t,Te),u=p(),o=Y(t.name);return typeof u.type!="undefined"&&o&&(0,s.isValidElement)(e)?(0,l.jsx)(S.Z.Item,x()(x()({},r),{},{children:(0,l.jsx)(Ke,{name:r.name,noStatus:r.noStyle||n,children:e})})):(0,l.jsx)(S.Z.Item,x()(x()({},r),{},{children:e}))};ee.useStatus=S.Z.Item.useStatus;var Le=["uniqueKey"],Ue=["uniqueKey"],Ve=function(t){var e=t.uniqueKey,n=M()(t,Le),r=p(),u=r.anotherFullNamePath,o=L(),i=o.namePaths,f=X(n.name),c=b(u,f),m=Y(e),d=(0,s.useMemo)(function(){return{fullNamePath:i,anotherFullNamePath:c,uniqueKey:m}},[i,c,m]);return(0,l.jsx)(O,{value:d,children:(0,l.jsx)(S.Z.List,x()({},n))})},Ze=function(t){var e=t.uniqueKey,n=M()(t,Ue),r=p(),u=L(),o=u.namePaths,i=b(o,t.name),f=(0,s.useMemo)(function(){return{namePaths:i}},[i]);return typeof r.type!="undefined"?(0,l.jsx)(R,{value:f,children:(0,l.jsx)(Ve,x()(x()({},n),{},{uniqueKey:e}))}):(0,l.jsx)(R,{value:f,children:(0,l.jsx)(S.Z.List,x()({},n))})},Ye=function(t){var e=t.children,n=t.noStatus,r=L(),u=r.fieldName,o=je(u),i=p(),f=i.statusInfo,c=i.type,m=i.firstStatus,d=Q(),h=K(),y=(0,s.useMemo)(function(){if(f)return f;if(typeof o!="number")return c===N.SOURCE?d(g.REMOVE):d(g.ADD)},[o,f,c,d]),P=(0,s.useMemo)(function(){return{fieldName:u,anotherFieldName:o,statusInfo:y,firstStatus:!m&&!f&&!!y}},[u,m,o,y,f]),U=(0,s.useMemo)(function(){var j;return(j=h==null?void 0:h.wrapper)!==null&&j!==void 0?j:_},[h==null?void 0:h.wrapper]);return(0,l.jsx)(O,{value:P,children:n?e:(0,l.jsx)(U,{children:e})})},qe=function(t){var e=p(),n=(0,s.useMemo)(function(){return{fieldName:t.fieldName}},[t.fieldName]);return typeof e.type!="undefined"?(0,l.jsx)(R,{value:n,children:(0,l.jsx)(Ye,x()({},t))}):(0,l.jsx)(R,{value:n,children:t.children})},$e=function(t){var e=t.children,n=L();return e(n)},ze=v(71230),te=v(15746),We=function(t){var e=t.source,n=t.target;return(0,l.jsxs)(ze.Z,{gutter:[8,8],children:[(0,l.jsx)(te.Z,{span:24,lg:12,children:e}),(0,l.jsx)(te.Z,{span:24,lg:12,children:n})]})},Ge=["diff"],I=function(t){var e=t.diff,n=M()(t,Ge),r=K(),u=(0,s.useMemo)(function(){var y={layout:n.layout,component:n.component,name:"source"};if(e===!0)return y;if(e)return x()(x()({},y),e)},[e,n.layout,n.component]),o=(0,s.useMemo)(function(){return x()({name:u?"target":void 0},n)},[n,u]),i=(0,s.useMemo)(function(){return{store:new V,fullNamePath:[],anotherFullNamePath:[]}},[]),f=(0,s.useMemo)(function(){return{type:N.SOURCE}},[]),c=(0,s.useMemo)(function(){return{type:N.TARGET}},[]),m=(0,s.useMemo)(function(){return{type:f.type,name:u==null?void 0:u.name,disabled:u==null?void 0:u.disabled,namePaths:[]}},[u==null?void 0:u.disabled,u==null?void 0:u.name,f.type]),d=(0,s.useMemo)(function(){return{type:c.type,name:o==null?void 0:o.name,disabled:o==null?void 0:o.disabled,namePaths:[]}},[o==null?void 0:o.disabled,o==null?void 0:o.name,c.type]),h=(0,s.useMemo)(function(){var y;return(y=r==null?void 0:r.component)!==null&&y!==void 0?y:We},[r==null?void 0:r.component]);return u?(0,l.jsx)(O,{value:i,children:(0,l.jsx)(h,{source:(0,l.jsx)(R,{value:m,children:(0,l.jsx)(O,{value:f,children:(0,l.jsx)(S.Z,x()(x()({},u),{},{children:o.children}))})}),target:(0,l.jsx)(R,{value:d,children:(0,l.jsx)(O,{value:c,children:(0,l.jsx)(S.Z,x()({},o))})})})}):(0,l.jsx)(R,{value:d,children:(0,l.jsx)(S.Z,x()({},o))})};I.Item=ee,I.List=Ze,I.ListItem=qe,I.ErrorList=S.Z.ErrorList,I.Info=$e,I.useForm=S.Z.useForm,I.useFormInstance=S.Z.useFormInstance,I.useWatch=S.Z.useWatch,I.useDiformInfo=L,I.useDiformStatus=J;var ke=["children"],Be=function(t){var e=t.children,n=M()(t,ke);return e(n)}}}]);
