export const getEveryUser = async () => {
    const response = await fetch("http://localhost:3000/api/routes/users", {
        next: {
            revalidate: 0
        }
    });
    return response.json();
}