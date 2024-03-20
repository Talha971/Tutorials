import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    LogoutOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { useNavigate } from 'react-router-dom';

import LOGO from '../assets/images/logo.png'
import smallLogo from '../assets/images/small logo.png'
import { signOut, auth } from '../config/firebase';
import UsersPage from '../pages/users';


const { Header, Sider, Content } = Layout;
const AppLayout = ({ children }) => {
    const navigate = useNavigate()
    console.log('props-->', children);
    const [collapsed, setCollapsed] = useState(false);

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const logoutUser = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <Layout style={{ height: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className='logo-container demo-logo-vertical text-center p-2'>
                    <img width={collapsed ? "40px" : "100px"} src={collapsed ? smallLogo : LOGO} alt="" />
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'nav 1',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'nav 2',
                        },
                        {
                            key: '3',
                            icon: <UserOutlined />,
                            label: 'Users',
                            onClick: () => {
                                navigate("/users")
                            }
                        },
                        {
                            key: '4',
                            icon: <LogoutOutlined />,
                            label: 'Logout',
                            onClick: () => { logoutUser() }

                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};
export default AppLayout;