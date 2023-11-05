export const addProduct = async (product) => {
    await fetch("http://localhost:3000/api/routes/products/", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(product)
    })
}