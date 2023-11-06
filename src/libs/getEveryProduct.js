export const getEveryProduct = async () => {
    const response = await fetch("http://localhost:3000/api/routes/products", {
        next: {
            revalidate: 0
        }
    });
    return response.json();
}