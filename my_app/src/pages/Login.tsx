import React, { FC, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Typography, Space, Form, Input, Button, Checkbox, message } from 'antd'
import { UserAddOutlined } from '@ant-design/icons'
import { useRequest } from 'ahooks'
import { REGISTER_PATHNAME, MANAGE_INDEX_PATHNAME } from '../router'
import styles from './Login.module.scss'
import type { FormProps } from 'antd';

const { Title } = Typography

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

// const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
//   console.log('Success:', values);
// };



// const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
//   console.log('Failed:', errorInfo);
// };

const Login: FC = () => {
  const nav = useNavigate()

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
    nav(MANAGE_INDEX_PATHNAME);
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return ( 
  <div className={styles.container}>
    <Form
      name="basic"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 14 }}
      style={{ width: 400, padding: 20, background: 'rgba(255, 255, 255, 0.8)', borderRadius: 10 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Title level={2} style={{ textAlign: 'center', marginBottom: 30 }}>用户登录</Title>

      <Form.Item<FieldType>
        label={<span style={{ color: '#ff4d4f' }}>用户名</span>}
        name="username"
        rules={[{ required: true, message: '请输入用户名！' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label={<span style={{ color: '#ff4d4f' }}>密码</span>}
        name="password"
        rules={[{ required: true, message: '请输入密码！' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 7, span: 12 }}>
        <Space>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
          <Link to={REGISTER_PATHNAME}>注册新用户</Link>
        </Space>
      </Form.Item>
    </Form>
  </div>
  )
}

export default Login
