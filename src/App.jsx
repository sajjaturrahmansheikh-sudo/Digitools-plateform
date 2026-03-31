
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Cart from './Components/Cart'
import Navbar from './Components/Navbar/Navbar'
import Status from './Components/Status/Status'
import Tools from './Components/Tools/Tools'
import Getstarted from './Components/Getstarted'
import Pricing from './Components/Pricing'

const getCarts = async () => {
  const res = await fetch("/Cartdata.json")
  return res.json();
}
const cartsPromis = getCarts();


function App() {

  const [activeTab, setActiveTab] = useState("products");
  const [carts, setCarts] = useState([]);


  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Status></Status>
      <div className='container mx-auto mt-20'>
        <h2 className='text-5xl font-extrabold text-[#101727] text-center mb-2.5'>Premium Digital Tools</h2>
        <p className='text-[#627382] text-center'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
      </div>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center py-10 bg-transparent">
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab w-40 rounded-full ${activeTab === "products" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : ""}`}
          aria-label="Products"
          onClick={() => setActiveTab("products")}
          defaultChecked

        />
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab w-40 rounded-full ${activeTab === "cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : ""}`}
          aria-label={`Cart (${carts.length})`}
          onClick={() => setActiveTab("cart")}
        />
      </div>

      {activeTab === "products" && <Tools cartsPromis={cartsPromis} carts={carts} setCarts={setCarts}></Tools>}
      {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts}></Cart>}

    <Getstarted></Getstarted>

    <Pricing></Pricing>



    </>
  )
}

export default App
