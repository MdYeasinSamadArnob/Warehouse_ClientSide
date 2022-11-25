import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
import { useState } from 'react';


const confirm = (setProceed,setIsModalVisible) => {
  Modal.confirm({
    title: 'Confirm',
    icon: <ExclamationCircleOutlined />,
    content: 'Do you want to delete this task?',
    okText: 'Yes',
    cancelText: 'No',
    onOk() {
        console.log('OK');
        // setProceed(true);
        setIsModalVisible(false);
        },

        onCancel() {    console.log('Cancel');}
  });
};

const ConfirmModal = ({setIsModalVisible,setProceed}) =>{ 
    
    return(
  <Space>
   
    {/* <Button onClick={confirm}>Confirm</Button> */}
    {confirm(setProceed,setIsModalVisible)}
  </Space>
);
}

export default ConfirmModal;