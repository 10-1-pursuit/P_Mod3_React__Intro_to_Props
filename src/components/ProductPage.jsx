import ProductItem from "./ProductItem.jsx";


const ProductPage =()=>{


    // You can see here that we start our functional `ProductPage` component with an array of objects, each with certain consistent traits: `name`, `manufacturer`, and `price`.

    const products = [
        { name: "Ultra Boost", manufacturer: "Adidas", price: 160 },
        { name: "Air Force One Low", manufacturer: "Nike", price: 100 },
        { name: "Classic Leather", manufacturer: "Reebok", price: 120 },
        { name: "Sk8-Hi", manufacturer: "Vans", price: 60 }
    ];



    // const listItems = products.map(  (eachProduct)=>{ return <ProductItem key={eachProduct.name}  productToRender={eachProduct} /> }  )
    const listItems = products.map(  
        (eachProduct, index)=>{ 
            return(
                <ProductItem 
                    key={eachProduct.name}  //  key={index}
                    productToRender={eachProduct} 
                /> 
            )
        }  
    );
    console.log( "listItems: " , listItems )

    
    return(
        <div>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default ProductPage

















// const ProductPage =()=>{


//     // You can see here that we start our functional `ProductPage` component with an array of objects, each with certain consistent traits: `name`, `manufacturer`, and `price`.

//     const products = [
//         { name: "Ultra Boost", manufacturer: "Adidas", price: 160 },
//         { name: "Air Force One Low", manufacturer: "Nike", price: 100 },
//         { name: "Classic Leather", manufacturer: "Reebok", price: 120 },
//         { name: "Sk8-Hi", manufacturer: "Vans", price: 60 }
//     ];




//     return(
//         <div>
//             <ul>
//                {
//                 products.map(  (eachProduct)=>{ return <ProductItem key={eachProduct.name}  productToRender={eachProduct} /> }  )
//                }
//             </ul>
//         </div>
//     )
// }

// export default ProductPage







































////   Clunky / Beginner React



// import ProductItem from "./ProductItem.jsx";


// const ProductPage =()=>{


//     // You can see here that we start our functional `ProductPage` component with an array of objects, each with certain consistent traits: `name`, `manufacturer`, and `price`.

//     const products = [
//         { name: "Ultra Boost", manufacturer: "Adidas", price: 160 },
//         { name: "Air Force One Low", manufacturer: "Nike", price: 100 },
//         { name: "Classic Leather", manufacturer: "Reebok", price: 120 },
//         { name: "Sk8-Hi", manufacturer: "Vans", price: 60 }
//     ];

//     console.log("products: ", products)
//     // console.log("products[0]: ", products[0])

//     // console.log("products[0].name: ", products[0].name)
//     // console.log("products[0].manufacturer: ", products[0].manufacturer)
//     // console.log("products[0].price: ", products[0].price)


//     //// JSX return BELOW v
//     return(
//         <div>
//             <ul>
//                 {/* <li>{products[0].name} - ${products[0].price}</li>
//                 <li>{products[1].name} - ${products[1].price}</li> */}


//                 {/* <h1 id="sam"></h1> */}

//                 {/* Prop Passing Syntax :  newName={whatTheNameIsHere} */}
//                 <ProductItem productToRender={products[0]} />
//                 <ProductItem productToRender={products[1]} />
//                 <ProductItem productToRender={products[2]} />
//                 <ProductItem productToRender={products[3]} />
//                 {/* 
//                     const ProductItem =()=>{
//                         return(<li></li>) 
//                     }
//                 */}

//             </ul>
//         </div>
//     )
// }

// export default ProductPage


// const wontDontDoItFam











/* 

    function ProductPage(){

        return(
            <div>
                ProductPage Temp Title
            </div>
        )
    }

    export default ProductPage

*/