import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"
import reactLogo from "../src/images/reactjs-icon.png"

function Header() {
    return (
        <div>
            <header> 
                <nav className="nav">
                    <div className="nav-full-logo">
                        <img className="nav-logo" alt="" src={reactLogo} />
                        <p className="nav-title">ReactFacts</p>
                    </div>   
                    <p className="nav-subtitle">React Course - Project 1</p>
                </nav>
            </header>
        </div>
    )
}

function Main() {
    return(
        <div className="main-body">
            <h1 className="main-body-title">Fun facts about React</h1>
            <ul className="main-body-list">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including <br />mobile apps</li>
            </ul>
         </div>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <Main />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById('root'));