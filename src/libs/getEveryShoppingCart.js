export const getEveryShoppingCart = async () => {
    const response = await fetch("http://localhost:3000/api/routes/shoppingcarts", {
        next: {
            revalidate: 0
        }
    });
    return response.json();
}