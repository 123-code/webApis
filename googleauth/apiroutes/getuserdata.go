package apiroutes

import (
	"encoding/json"
	"github.com/gorilla/sessions"
	"googleauth/datamodel"
	"googleauth/database"
	"net/http"
	"fmt"
)
type Response struct {
	Googleid string`json:"id"`
	Email string `json:"email"`
	Given_name string `json:"Given_name"`
	Family_name string `json:"Family_name"`
	Picture string `json:"Picture"`
	Locale string `json:"Locale"`
	
}

func SendResponse(w http.ResponseWriter, r *http.Request) {
	var store = sessions.NewCookieStore([]byte("your-secret-key"))
	session, _ := store.Get(r, "user-session")

	userId, ok := session.Values["user_id"].(string)

	if !ok {
        http.Error(w, "User not logged in", http.StatusUnauthorized)
        return
    }




	var user datamodel.User
    if err := DB.DBconn.Where("Googleid = ?", userId).First(&user).Error; err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
  



	response := Response{
		Googleid:    user.Googleid,
		Email:       user.Email,
		Given_name:  user.Given_name,
		Family_name: user.Family_name,
		Picture:     user.Picture,
		Locale:      user.Locale,
	}



w.Header().Set("Content-Type", "application/json")
jsonData, err := json.Marshal(response)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		fmt.Println(err)
		return
	}

	fmt.Println("sent",string(jsonData))
    w.Write(jsonData)
  
  }
