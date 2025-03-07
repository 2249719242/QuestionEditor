import React, { FC } from 'react'
import { Button, message } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
// import { useRequest } from 'ahooks'
import { LOGIN_PATHNAME } from '../router'
import { REGISTER_PATHNAME } from '../router'
import styles from './UserTopInfo.module.scss'

const UserTopInfo: FC = () => {
  const nav = useNavigate()
  return (
    <div className={styles.container}>
      <Button className={styles.btn} onClick={() => nav(LOGIN_PATHNAME)}>登录</Button>
      <Button className={styles.btn} onClick={() => nav(REGISTER_PATHNAME)}>注册</Button>
    </div>
  )
}

export default UserTopInfo