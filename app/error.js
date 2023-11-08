'use client' // Error components must be Client Components

import { useEffect } from 'react'
import { Result, Button } from 'antd';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <Result
      status="500"
      title="500"
      subTitle="Извините, что-то пошло не так."
      extra={
        <div className="flex justify-center gap-2">
          <Button href="/" type="primary">Вернуться домой</Button>
          <Button onClick={() => reset()}>
            Попробуйте еще раз
          </Button>
        </div>
      }
    />
  )
}