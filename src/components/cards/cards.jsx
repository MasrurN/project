import Card from "../card/card";
import './cards.css'
export default function Cards ({products,  addtoCart}) {
    return (

        <>
            {
        products.map((product,index)=> (
            <Card   addtoCart={addtoCart} product={product}/>

        ))
 }</>
    )
}