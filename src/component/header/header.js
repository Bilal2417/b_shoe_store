"use client"
import Link from "next/link"
import "./header.css"

export default function Header (){
    return <>
<div className="container">
  <header className="d-flex justify-content-center py-3">
    <ul className="nav nav-pills">
      <li className="nav-item">
        <a href="/" className="nav-link active" id="home" aria-current="page">
          Home
        </a>
      </li>
      <li className="nav-item" >
        <Link href="/basket" onClick={() =>{
let Basket =document.getElementById("basket") 
Basket.classList.add("active")
let Home =document.getElementById("home") 
Home.classList.remove("active")
        }} className="nav-link" id="basket">
          Basket
        </Link>
      </li>
    </ul>
  </header>
</div>

    </>
}