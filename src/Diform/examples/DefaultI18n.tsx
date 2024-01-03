import React, { useState } from 'react';
import { Col, ConfigProvider, Input, Radio, Row } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import enUS from 'antd/locale/en_US';
import { Diform } from 'bello';

export default () => {

  const [lang, setLang] = useState(enUS);

  return (
    <ConfigProvider
      locale={lang}
    >
      <Row gutter={[0, 16]}>
        <Col span={24}>
          <Radio.Group
            defaultValue={'en'}
            options={[
              {
                label: '中文',
                value: 'zh-cn',
              },
              {
                label: 'English',
                value: 'en',
              },
            ]}
            onChange={e => {
              if (e.target.value === 'zh-cn') {
                setLang(zhCN);
              } else {
                setLang(enUS);
              }
            }}
          />
        </Col>
        <Col span={24}>
          <Diform
            diff={{
              initialValues: {
                defaultName: '默认文案',
              },
            }}
          >
            <Diform.Item
              name={'defaultName'}
            >
              <Input />
            </Diform.Item>
          </Diform>
        </Col>
      </Row>
    </ConfigProvider>
  );
};
