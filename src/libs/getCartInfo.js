export const getCartInfo = async (id) => {

    const cartInfo = await fetch(`http://localhost:3000/api/routes/shoppingcarts/${id}`, {
        method: "GET"
    })

    return cartInfo.json();
}

