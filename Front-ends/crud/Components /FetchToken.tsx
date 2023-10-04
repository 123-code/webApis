

export async function FetchToken() {
    const response = await fetch("localhost:8080/google/callback")
    const token = await response.text()
    localStorage.setItem('token', token)
}