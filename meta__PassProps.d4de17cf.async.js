"use strict";(self.webpackChunkbello=self.webpackChunkbello||[]).push([[624],{74630:function(l,e,n){var a;n.r(e),n.d(e,{demos:function(){return P}});var r=n(15009),s=n.n(r),_=n(99289),u=n.n(_),t=n(67294),E=n(46907),d=n(2625),p=n(66171),P={"passprops-demo-common":{component:t.memo(t.lazy(function(){return n.e(386).then(n.bind(n,11583))})),asset:{type:"BLOCK",id:"passprops-demo-common",refAtomIds:["PassProps"],dependencies:{"index.tsx":{type:"FILE",value:n(26842).Z},react:{type:"NPM",value:"18.3.1"},bello:{type:"NPM",value:"1.0.5"},antd:{type:"NPM",value:"5.22.7"}},entry:"index.tsx"},context:{react:a||(a=n.t(t,2)),bello:d,antd:p},renderOpts:{compile:function(){var I=u()(s()().mark(function i(){var m,v=arguments;return s()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(335).then(n.bind(n,37335));case 2:return o.abrupt("return",(m=o.sent).default.apply(m,v));case 3:case"end":return o.stop()}},i)}));function c(){return I.apply(this,arguments)}return c}()}}}},88113:function(l,e,n){n.r(e),n.d(e,{texts:function(){return r}});var a=n(46907);const r=[{value:"\u7528\u4E8E\u7B80\u5355\u573A\u666F\u4E0B\u7684\u8868\u5355\u9879\u81EA\u5B9A\u4E49",paraId:0,tocIndex:0},{value:"\u5C5E\u6027",paraId:1,tocIndex:4},{value:"\u8BF4\u660E",paraId:1,tocIndex:4},{value:"\u7C7B\u578B",paraId:1,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:4},{value:"children",paraId:1,tocIndex:4},{value:"\u5B50\u4EE3\u5143\u7D20",paraId:1,tocIndex:4},{value:"(props: Record<string, any>) => ReactNode",paraId:1,tocIndex:4},{value:"void",paraId:1,tocIndex:4}]},26842:function(l,e){e.Z=`import React from 'react';
import { PassProps } from 'bello';
import { Form, Input } from 'antd';

export default () => {
  return (
    <Form
      initialValues={{
        username: 'username',
      }}
      layout='vertical'
    >
      <Form.Item
        label={'\u7528\u6237\u540D\uFF08\u53EA\u8BFB\uFF09'}
        name={'username'}
      >
        <PassProps>
          {
            (p) => {
              return (
                <span>{p.value}</span>
              );
            }
          }
        </PassProps>
      </Form.Item>
      <Form.Item
        label={'\u6635\u79F0\uFF08\u7981\u6B62\u8F93\u5165\u524D\u540E\u7A7A\u683C\uFF09'}
        name={'nickname'}
      >
        <PassProps>
          {
            (p) => {
              return (
                <Input
                  {...p}
                  onChange={e => {
                    p.onChange?.(e.target.value.trim());
                  }}
                />
              );
            }
          }
        </PassProps>
      </Form.Item>
    </Form>
  );
};`}}]);
