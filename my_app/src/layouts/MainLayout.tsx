import React, { FC } from 'react'
import { Layout, Spin } from 'antd'
import styles from './MainLayout.module.scss'
import Logo from '../components/Logo'
const { Header, Footer, Sider, Content } = Layout;
import UserInfo from '../components/UserTopInfo';
import { Outlet } from 'react-router-dom';

const MainLayout: FC = () => {
    return (
        <Layout>
            <Header className={styles.header}>
                <div className={styles.left}>
                    <Logo />
                </div>
                <div className={styles.right}>
                    <UserInfo />
                </div>
            </Header>
            <Layout className={styles.main}>
                <Content>
                    <Outlet />
                </Content>
            </Layout>
            <Footer className={styles.footer}>X问卷 &copy;2023 - present. Created by Wanxin</Footer>
        </Layout>
    );
}

export default MainLayout;
