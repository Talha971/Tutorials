import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import Home from '../pages/home';

const { Header, Content, Footer } = Layout;

const items = [
    {
        label: "Home",
        key: "/home"
    },
    {
        label: "Profile",
        key: "/profile"
    }
];

const AppLayout = ({ children }) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const navigate = useNavigate()

    return (
        <Layout>
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className="demo-logo" />
                {/* navigate towards path method 1 */}
                {/* <Menu
                    onClick={(data) => {
                        console.log(data);
                        navigate(data.key)
                    }}

                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items}
                    style={{ flex: 1, minWidth: 0 }}
                /> */}

                {/* navigate towards path method 2 */}
                <div style={{ display: "flex", gap: "19px", width: "50%" }}>
                    <Link to={"/home"}><div style={{ color: "white", cursor: "pointer" }}>Home</div></Link>
                    <Link to={"/profile"}><div style={{ color: "white", cursor: "pointer" }} > Profile</div></Link>
                </div>

            </Header >
            <Content style={{ padding: '10px 48px' }}>

                <div
                    style={{
                        padding: 24,
                        minHeight: 380,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout >
    );
};

export default AppLayout;