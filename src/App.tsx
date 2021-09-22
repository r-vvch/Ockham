import './App.css';
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, CompassOutlined } from '@ant-design/icons';

const { Header, Content, Sider } = Layout;

function App() {
  return (
      <Layout className="layout">
          <Header className="header">
              <div className="logo">🪒</div>
          </Header>
          <Content style={{ padding: '0 50px' }}>
              <Layout className="site-layout-background">
                  <Sider className="sider" width={200}>
                      <Menu
                          mode="inline"
                          defaultSelectedKeys={['1']}
                          defaultOpenKeys={['sub1']}
                          style={{ height: '100%' }}
                      >
                          <Menu.Item key="1" icon={<UserOutlined />}>option1</Menu.Item>
                          <Menu.Item key="2" icon={<LaptopOutlined />}>option2</Menu.Item>
                          <Menu.Item key="3" icon={<NotificationOutlined />}>option3</Menu.Item>
                          <Menu.Item key="4" icon={<CompassOutlined />}>option4</Menu.Item>
                      </Menu>
                  </Sider>
                  <Content style={{ padding: '24px', minHeight: 280, background: '#fff' }}>Content</Content>
              </Layout>
          </Content>
      </Layout>
  );
}

export default App;
