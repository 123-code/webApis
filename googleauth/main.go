package main

import (
"net/http"
"googleauth/handlers"
"fmt"
) 

func main() {
http.HandleFunc("/google/login", handlers.GoogleLogin)
http.HandleFunc("/google/callback", handlers.GoogleCallback)
http.ListenAndServe(":8080", nil)
fmt.Println("Server is running on port 8080");
}