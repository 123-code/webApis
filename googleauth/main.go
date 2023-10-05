package main

import (
"net/http"
// import and enalble cors
//"github.com/rs/cors"
"googleauth/handlers"
"fmt"
) 

func main() {
/*
corsHandler := cors.New(
	cors.Options{
		AllowedOrigins: []string{"http://localhost:3000"},
		AllowCredentials: true,
		AllowedMethods: []string{"GET","POST","PUT","DELETE","OPTIONS"},
		AllowedHeaders: []string{"*"},
		Debug: true,	
	},
)

*/
http.HandleFunc("/google/login", handlers.GoogleLogin)
http.HandleFunc("/google/callback", handlers.GoogleCallback)
http.ListenAndServe(":8080", nil)
fmt.Println("Server is running on port 8080");
}