import { useSelector } from "react-redux";
import { IProductItem, IState } from "../State/StateTypes";
import { useActions } from "../State/useActions";

export const ListProduct = () => {

    const products = useSelector((state:IState) => state.product);
    const cart = useSelector((state:IState) => state.cart);

    const { AddedItem } = useActions()

    return <div style={{ display: 'flex', flexDirection : 'row', flexWrap : 'wrap', justifyContent : 'start' }} >
        {
            products.map(
                (item: IProductItem, index: number) => (
                    <div style={{flexBasis: '33%', marginTop : '2vh'  }} >
                    <div style={{ width: '15vw', padding: 10, boxShadow: '0 3em 3em rgba(0,0,0,0.1)'}}>
                        <div >
                            <img alt="product" src={item.imageURL} width="100%" height="220vh" />
                        </div>
                        <div>
                            <span style={{ fontSize : '3vh', fontWeight : 'bold' }} >{item.title}</span>
                        </div>
                        <div>
                            <p style={{ fontSize : '1.5vh' }} > {item.description.slice(0, 100)} </p>
                        </div>
                        <div style={{ textAlign: 'right' }} >
                            <span style={{ fontSize : '2vh', fontWeight : 'bold' }} >Rs : {item.price}</span>
                        </div>
                        <button
                        style={{
                            width: '100%',
                            backgroundColor : 'lightblue',
                            borderColor : 'lightblue',
                            marginTop : '1vh',
                            padding : '0.5vh'
                        }} 
                        onClick={() => AddedItem(item)}
                        disabled={cart.find((ele:IProductItem) => ele.id === item.id) === item}
                        > 
                        { cart.find((ele:IProductItem) => ele.id === item.id) === item ? "Added " : "Add " }
                            to cart </button>
                    </div>
                    </div>
                )
            )
        }


    </div>
}