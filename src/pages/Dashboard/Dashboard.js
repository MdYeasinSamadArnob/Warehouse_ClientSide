import { FileOutlined, PieChartOutlined, UserOutlined ,DesktopOutlined,TeamOutlined} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import { useState } from 'react';
import {Link,Outlet} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const { Header, Content, Footer, Sider } = Layout;


// function getItem(label, key, icon, children) {
//   // const isadmin=localStorage.getItem("admin")

//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }

// function getItemAdmin(label, key, icon, children) {
//   const isadmin=localStorage.getItem("admin")
// if(isadmin==="true"){
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }
  
// }

// function getItemGeneral(label, key, icon, children) {
//   const isadmin=localStorage.getItem("admin")
// if(isadmin==="false"){
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }
  
// }

// const items = [
//   getItem('My Profile', '1', <PieChartOutlined />),
//   getItemGeneral('Add Review', '2', <DesktopOutlined />),
//   getItemGeneral('My Orders', '3', <FileOutlined />),
//   getItemAdmin('Manage products', '4', <FileOutlined />),
//   getItemAdmin('Add product', '5', <FileOutlined />),
//   getItemAdmin('Make Admin', '6', <FileOutlined />),
// ];

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);

  const navigate = useNavigate();

  function getItem(label, key, icon, children) {
    // const isadmin=localStorage.getItem("admin")
  
    return {
      key,
      icon,
      children,
      label,
    };
  }
  
  function getItemAdmin(label, key, icon, children) {
    // const isadmin=localStorage.getItem("admin")
  if(admin){
    return {
      key,
      icon,
      children,
      label,
    };
  }
    
  }
  
  function getItemGeneral(label, key, icon, children) {
    // const isadmin=localStorage.getItem("admin")
  if(!admin){
    return {
      key,
      icon,
      children,
      label,
    };
  }
    
  }
  
  const items = [
    getItem('My Profile', '1', <PieChartOutlined />),
    getItemGeneral('Add Review', '2', <DesktopOutlined />),
    getItemGeneral('My Orders', '3', <FileOutlined />),
    getItemAdmin('Manage products', '4', <FileOutlined />),
    getItemAdmin('Add product', '5', <FileOutlined />),
    getItemAdmin('Make Admin', '6', <FileOutlined />),
  ];

  const handleRoute=({ item, key, keyPath, domEvent }) => {
    console.log(item, key, keyPath, domEvent);
    if(key==='1'){
      navigate('/dashboard/myprofile')
    }
    else if(key==='2'){
      navigate('/dashboard/addreview')
    }
    else if(key==='3'){
      navigate('/dashboard/myorders')
    }
    else if(key==='4'){
      navigate('/dashboard/manageproducts')
    }
    else if(key==='5'){
      navigate('/dashboard/addproduct')
    }
    else if(key==='6'){
      navigate('/dashboard/users')
    }

  };


  return (
    <Layout
      style={{
        minHeight: '100vh',
        paddingTop: '60px',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <Menu onClick={handleRoute}theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
           
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
           <Outlet/>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;