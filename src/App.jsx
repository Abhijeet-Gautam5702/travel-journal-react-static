import React from "react"
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"
import "./index.css"

export default function App(){
    return (
        <>
        <div className="wrapper">
            <Header/>
            <Content/>
        </div>
        <Footer/>
        </>
    )
}