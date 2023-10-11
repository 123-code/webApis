package apiroutes

import (
	"encoding/json"
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

var userdata[] datamodel.User

DB.DBconn.Find(&userdata);
var response Response

if len(userdata) > 0 {
	user := userdata[0]
	response = Response{
		Googleid:    user.Googleid,
		Email:       user.Email,
		Given_name:  user.Given_name,
		Family_name: user.Family_name,
		Picture:     user.Picture,
		Locale:      user.Locale,
	}
}


w.Header().Set("Content-Type", "application/json")
jsonData, err := json.Marshal(response)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	fmt.Println(string(jsonData))
w.Write(jsonData)
  
  }
