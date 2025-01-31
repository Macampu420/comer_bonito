import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./index.css"
import { ChakraProvider } from '@chakra-ui/react'
import theme from './components/theme/index.ts'
import { ProductsProvider } from './components/products/products-provider.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </ChakraProvider>
  </StrictMode>,
)
