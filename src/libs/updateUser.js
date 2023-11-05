export const updateUser = async (user, id) => {
    await fetch(`http://localhost:3000/api/routes/users/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
    })
}