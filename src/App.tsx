import { ListProduct } from './Components/ListProduct';

function App() {
  return <div>
    <div style={{ width : '100%', textAlign : 'center' }} ><h1 >SHOPPING BASKET</h1></div>
    <div style={{ marginLeft: '15vw', marginRight: '15vw', marginTop: '5vw' }} >
      <ListProduct />
    </div>

    <div style={{ position : 'fixed', bottom : 0, width :'100vw', border : '1px solid black' }} >
        ...Footer
    </div>
  </div>
}

export default App;
