export const getAllData = async () => {
    const [response1, response2, response3] = await Promise.all([
        fetch("http://localhost:3000/api/routes/users"),
        fetch("http://localhost:3000/api/routes/products"),
        fetch("http://localhost:3000/api/routes/shoppingcarts"),
    ]);
    
    const data1 = await response1.json();
    const data2 = await response2.json();
    const data3 = await response3.json();
    
    const data = {
        users: data1,
        products: data2,
        shoppingCarts: data3
    }

    console.log(data);
    return data;
}