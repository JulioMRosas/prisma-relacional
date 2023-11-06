export const deleteUser = async (user) => {
    const { id } = user;

    fetch(`http://localhost:3000/api/routes/users/${id}`, {
        method: "DELETE"
    })
}