export const deleteProduct = async (product) => {
    const { id } = product;

    fetch(`http://localhost:3000/api/routes/products/${id}`, {
        method: "DELETE"
    })
}