import { ConfigProvider } from 'antd'
import * as React from 'react'
import * as ReactDom from 'react-dom/client'
import App from './App'

ReactDom.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: 'black',
        // Alias Token
      },
    }}
  >
    <App />
    </ConfigProvider>
  </React.StrictMode>,
)
