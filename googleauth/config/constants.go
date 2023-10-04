package config

import (
"golang.org/x/oauth2"
"golang.org/x/oauth2/google"
)

func SetupConfig() *oauth2.Config{
	conf :=  &oauth2.Config{
	ClientID: "39388159085-uujiv50c19vtafdg1vjle3sj6r5lmn4q.apps.googleusercontent.com",
	ClientSecret: "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",
	RedirectURL: "http://localhost:8080/google/callback",
	
	Scopes: []string{"https://www.googleapis.com/auth/userinfo.email","https://www.googleapis.com/auth/userinfo.profile"},

	Endpoint: google.Endpoint,
	}
	return conf
}