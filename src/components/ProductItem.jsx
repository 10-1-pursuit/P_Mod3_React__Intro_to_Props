

//  <ProductItem   productToRender={products[0]} />
   

const ProductItem =( { productToRender } )=> {

    // Prop Recieving
    console.log( "productToRender: ", productToRender  )  //  productToRender: {}

    return(
        <li>
            {productToRender.name} - ${productToRender.price}
        </li>
    )
}

export default ProductItem