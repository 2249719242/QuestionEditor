import React, { FC, useEffect, useState } from 'react'
import { Space, Typography } from 'antd'
import { FormOutlined } from '@ant-design/icons'
import { Form, Link } from 'react-router-dom'
import styles from './Logo.module.scss'
import router from '../router'
const { Title } = Typography
const Logo: FC = () => {
  return (
    <div className={styles.container}>
      {/* 跳转 */}
      <Link to={'/'}>
        <Space>
          <Title>
            <FormOutlined />
          </Title>
          <Title style={{ color: 'white' }}>X问卷</Title>
        </Space>
      </Link>
    </div>
  )
}

export default Logo;
