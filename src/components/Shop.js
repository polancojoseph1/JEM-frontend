import './Shop.css';
import ShopCards from './ShopCards.js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Shop = (props) => {
  const { id, setId, setType, type } = props;
  let [electronics, setElectronics] = useState([]);
  const [order, setOrder] = useState(null);

  let getElectronics = async () => {
    let { data } = await axios.get("https://jem-backend.herokuapp.com/api/electronics");

    let filteredData = data.filter((electronic) => {
      if (!type) return true;
      return electronic.Type === type
    })

    setElectronics(filteredData);
  }
  
  useEffect(() => {
    let getOrder = async () => {
      let orderId = id;
      if (orderId) {
        let { data } = await axios.get(`https://jem-backend.herokuapp.com/api/orders/${orderId}`);
        setOrder(data);
      }

    }
    getOrder()
    getElectronics();
  }, []);
  
  let TVarray = [];
  for (let i = 0; i < electronics.length; i++){
    if (electronics[i].Type === "TV") {
     TVarray.push(electronics[i])
   }
  }
  
  let consoleArray = []
  for (let i = 0; i < electronics.length; i++){
    if (electronics[i].Type === "Game Console") {
     consoleArray.push(electronics[i])
   }
  }

  
 let laptopArray = []
  for (let i = 0; i < electronics.length; i++){
    if (electronics[i].Type === "Laptop") {
    laptopArray.push(electronics[i])
   }
  }

    let earbudsArray = []
    for (let i = 0; i < electronics.length; i++){
      if (electronics[i].Type === "Earbuds") {
        // console.log(window.location)
     }
    }
 
  return (
      <div className='shop-div'>
      <div className='sidebar-div'>
      <button className='tv-sb'>TVs</button>
      <button className='consoles-sb'>Consoles</button>
      <button className='phones-sb'>Phones</button>
      <button className='pcs-sb'>PCs/Laptops</button>
      <button className='headphones-sb'>Headphones</button>
      </div>
      <ShopCards electronics={electronics} type={type} setType={setType} order={order} setOrder={ setOrder } id={ id } setId={ setId }/>
      </div>
  )
}

export default Shop;
