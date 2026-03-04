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
      <li>Secure Data Storage: Your data is securely stored and backed up.</li>   
      <li>Customizable Categories: Create custom categories for better organization.</li>
      <li>Recurring Expenses: Set up recurring expenses for regular bills.</li>
      <li>Export Data: Export your expense data in CSV format for further analysis.</li>  
      <li>Mobile App: Access your expenses on the go with our mobile app.</li>  
    </ul>
    <p>Start managing your expenses today and take control of your finances!</p>

    
    </>
  )
}

export default App
