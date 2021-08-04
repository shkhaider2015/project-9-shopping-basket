import { IProductItem } from "../State/StateTypes";
import { Shirt1, Shirt2, Shirt3, 
    Shirt4, Shirt6, Shirt8, Shirt9 } from "./Images";

const desc:string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio`

const Data:IProductItem[] = [
    {
        id : '0001',
        title : 'Shirt 1',
        description : desc,
        price : 899,
        imageURL : Shirt1
    },
    {
        id : '0002',
        title : 'Shirt 2',
        description : desc,
        price : 1099,
        imageURL : Shirt2
    },
    {
        id : '0003',
        title : 'Shirt 3',
        description : desc,
        price : 1150,
        imageURL : Shirt3
    },
    {
        id : '0004',
        title : 'Shirt 4',
        description : desc,
        price : 730,
        imageURL : Shirt4
    },
    {
        id : '0006',
        title : 'Shirt 6',
        description : desc,
        price : 999,
        imageURL : Shirt6
    },
    {
        id : '0005',
        title : 'Shirt 5',
        description : desc,
        price : 1049,
        imageURL : Shirt8
    },
    {
        id : '0007',
        title : 'Shirt 9',
        description : desc,
        price : 749,
        imageURL : Shirt9
    },
]

export {Data}