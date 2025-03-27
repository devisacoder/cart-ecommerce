import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProviderContext } from './context/ProductContext.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <ProviderContext>
        <App />
    </ProviderContext>
  </QueryClientProvider>
)
