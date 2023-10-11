package main

import (
"net/http"
// import and enalble cors
"github.com/rs/cors"
"googleauth/handlers"
"googleauth/database"
"googleauth/apiroutes"
"fmt"
) 

func main() {
	DB.DBconnect()
	c := cors.New(cors.Options{
		AllowedOrigins: []string{"*"}, 
		AllowedMethods: []string{"GET", "POST"},
	  })

fmt.Println("Server is running on port 8080");
http.HandleFunc("/google/login", handlers.GoogleLogin)
http.HandleFunc("/google/callback", handlers.GoogleCallback)
http.HandleFunc("/getuserdata", apiroutes.SendResponse)
http.ListenAndServe(":8080", c.Handler(http.DefaultServeMux))

}