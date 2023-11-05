export const addUser = async (user) => {
    await fetch("http://localhost:3000/api/routes/users/", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
    })
}