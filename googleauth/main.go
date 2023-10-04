package main

import (
"net/http"
"googleauth/handlers"
) 

func main() {
http.HandleFunc("/google/login", handlers.MainHandler)
http.HandleFunc("/google/callback", handlers.MainHandler)
http.ListenAndServe(":8080", nil)
}