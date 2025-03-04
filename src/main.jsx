import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';
import { TaskContextProvider } from './context/TaskContext';
import './index.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </StrictMode>,
)
