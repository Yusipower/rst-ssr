'use client'

import { Button } from 'antd'
import { useRouter } from 'next/navigation'
import { ArrowLeftOutlined } from '@ant-design/icons';

const BackButton = () => {
  const router = useRouter();
  
  return (
    <Button
      className="mt-4"
      type="text"
      size="large"
      icon={<ArrowLeftOutlined />}
      onClick={() => router.back()}
    >
      Назад
    </Button>
  )
}

export default BackButton