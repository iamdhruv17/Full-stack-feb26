import './App.css'
import Header from './componenets/Header.jsx'
import Footer from './componenets/Footer.jsx'
// import Registration from './componenets/Registration.jsx'


function App() {
    const y=[22,33,26,28,29];
        const c={name:"KIET",state:"Uttar Pradesh",country:"India",year:2024};


  return (
    <div>
      <Header title="My Website" />
            {/* <Header title="hello Website" /> */}

    
    <h1>Hello, World!</h1>
    <p2>This is a paragraph in the App component.</p2>

    <card>
      <h4>Card Title . hello my name is dhruv</h4>
      <p>Card Content</p>
    </card>
    <Footer year={y} company={c} />

    {/* <Registration/> */}
    </div>
    )
}

export default App
