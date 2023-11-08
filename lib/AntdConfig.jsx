import { ConfigProvider } from 'antd';
import ruRU from 'antd/locale/ru_RU';

export default function AntdConfig({children}) {
  return (
    <ConfigProvider 
      locale={ruRU}
      theme={{
        "token": {
          "wireframe": false,
          "fontSize": 16,
          "colorPrimary": "#03536d",
          "colorInfo": "#03536d"
        },
        "components": {
          "Table": {
            "headerColor": "rgb(3, 83, 109)",
            "fontSize": 14,
          }
        }
      }}
    >
      {children}
    </ConfigProvider>
  )
}
