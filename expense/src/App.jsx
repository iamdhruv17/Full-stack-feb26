import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <h1>Expense Tracker</h1>
    <h2>Track your expenses and manage your budget effectively.</h2>
    <h3>Features:</h3>
    <ul>
      <li>Expense Tracking: Easily add and categorize your expenses.</li>
      <li>Budget Management: Set monthly budgets and track your spending.</li>
      <li>Reports and Analytics: Visualize your spending patterns with charts and graphs.</li>
      <li>Multi-Device Sync: Access your expense data across multiple devices.</li>
    </ul>
    
    </>
  )
}

export default App
