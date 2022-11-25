import React from 'react'
import { Collapse } from 'antd';

const { Panel } = Collapse;

const text = (
  <p style={{ paddingLeft: 24 }}>
    Yes We have Wide Range of electronics Items from Smartphones to Laptops.
  </p>
);

const text2 = (
    <p style={{ paddingLeft: 24 }}>
      Yes All Items Can be Updated By the Admin When Logged In and Verified.
    </p>
  );

  const text3 = (
    <p style={{ paddingLeft: 24 }}>
      Yes you Can view your Own items After logged in
    </p>
  );

function FAQ() {
  return (
      <div  className="mt-5">
          <h1 id="faq" className="font-extrabold text-2xl text-center mb-3"> COMMON FAQ's </h1>
          <div className="w-3/4 mx-auto mb-5">
            <Collapse bordered={false} defaultActiveKey={['1']}>
            <Panel header="Do You Have Electronics Items?" key="1">
            {text}
            </Panel>
            <Panel header="Can The Inventories be Updated?" key="2">
            {text2}
            </Panel>
            <Panel header="Can I view My Own Inventories?" key="3">
            {text3}
            </Panel>
          </Collapse>
  </div>
  </div>
  )
}

export default FAQ