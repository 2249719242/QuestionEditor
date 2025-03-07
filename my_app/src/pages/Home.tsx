import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Typography } from 'antd'
import { MANAGE_INDEX_PATHNAME } from '../router'
import styles from './Home.module.scss'

const { Title, Paragraph } = Typography
const Home: FC = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Title >问卷调查 | 在线投票</Title>
        <Paragraph>
          一个简洁的问卷系统
        </Paragraph>
        <Button type='primary' onClick={() => navigate(MANAGE_INDEX_PATHNAME)}>
          开始创建
        </Button>
      </div>
    </div>
  )
}

export default Home