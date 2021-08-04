import { ListProduct } from './Components/ListProduct';
import { IconCart } from "./Data/Images";
import "./App.css"
import { useSelector } from 'react-redux';
import { IProductItem, IState } from "./State/StateTypes";
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const cart = useSelector((state:IState) => state.cart)
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(
    () => {
      cart.map(
        (item:IProductItem) => setTotalAmount(totalAmount + item.price)
      )
      // eslint-disable-next-line
    }, [cart]
  )

  return <div>
    { console.log("State : ", cart) }
    <div style={{ width : '100%', textAlign : 'center' }} ><span className="heading" >SHOPPING BASKET</span></div>
    <div style={{ marginLeft: '15vw', marginRight: '15vw', marginTop: '5vw' }} >
      <div style={{ marginBottom : '15vh' }} >
      <ListProduct />
      </div>
    <div style={{ position : 'fixed', display : 'flex', flexDirection : 'row-reverse', bottom : 0, right:0, left : 0, width :'100vw',  backgroundColor : 'lightblue' }} >
        
              <img alt="icon-cart" src={IconCart} width="60vh" style={{ marginRight : '15vw' }} />
              <h1> {totalAmount} </h1>
              <div style={{ marginRight : 30, marginTop : 'auto', marginBottom : 'auto' }} >
                <span>Items</span> <br />
                <span> {cart.length} </span>
              </div>
    </div>
    </div>

  </div>
}

export default App;
