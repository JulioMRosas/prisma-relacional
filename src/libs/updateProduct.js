export const updateProduct = async (product, id) => {
    await fetch(`http://localhost:3000/api/routes/products/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(product)
    })
}