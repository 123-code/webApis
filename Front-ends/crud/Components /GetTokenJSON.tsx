// Get userId from parsed JWT
const { sub } = jwtDecode(token) 
const userId = sub

// Fetch profile data 
const response = await fetch(`/api/users/${userId}`, {
  headers: {
    Authorization: `Bearer ${token}`
  } 
})

const user = await response.json()