package main

import (
"net/http"
// import and enalble cors
"github.com/rs/cors"
"googleauth/handlers"

"fmt"
) 

func main() {
	c := cors.New(cors.Options{
		AllowedOrigins: []string{"*"}, 
		AllowedMethods: []string{"GET", "POST"},
	  })

fmt.Println("Server is running on port 8080");
http.HandleFunc("/google/login", handlers.GoogleLogin)
http.HandleFunc("/google/callback", handlers.GoogleCallback)
http.ListenAndServe(":8080", c.Handler(http.DefaultServeMux))

}