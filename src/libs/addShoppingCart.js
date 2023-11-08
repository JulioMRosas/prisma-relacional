export const addShoppingCart = async (shoppingCart) => {
    const response = await fetch("http://localhost:3000/api/routes/shoppingcarts/", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(shoppingCart)
    })
}