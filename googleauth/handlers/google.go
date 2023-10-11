package handlers

import (
	"context"
	"encoding/json"
	"fmt"
	"googleauth/config"
	//"googleauth/database"
	"googleauth/datamodel"
	"io/ioutil"
	"log"
	"net/http"
	"time"
	"googleauth/apiroutes"
	"github.com/golang-jwt/jwt"
	"github.com/google/uuid"
)
 


func GoogleLogin(res http.ResponseWriter,req *http.Request){
	googleConfig := config.SetupConfig()
	url := googleConfig.AuthCodeURL("randomstate")
	http.Redirect(res,req,url,http.StatusSeeOther)

}

func GoogleCallback(res http.ResponseWriter,req *http.Request){
	
	var GoogleUserInfo struct {

		ID          uuid.UUID `gorm:"type:uuid;default:uuid_generate_v4();primaryKey"`
		Googleid string `json:"id"`
		Email string `json:"email"`
		Given_name string `json:"given_name"`
		Family_name string `json:"family_name"`
		Picture string `json:"picture"`
		Locale string `json:"locale"`
	}
	


state := req.URL.Query()["state"][0]
if state != "randomstate"{
	fmt.Println(res,"states dont match!")
	
	return
}

code := req.URL.Query()["code"][0]

googleConfig := config.SetupConfig()


token,err := googleConfig.Exchange(context.Background(),code)
if err != nil{
	fmt.Println(res,"could not get token")
	
}
resp,err := http.Get("https://www.googleapis.com/oauth2/v2/userinfo?access_token=" + token.AccessToken)
if err != nil{
	fmt.Println(res,"could not create get request")
	 
}

userData,err := ioutil.ReadAll(resp.Body)
if err != nil{
	fmt.Fprintln(res,"could not parse response")
	
	
}





err = json.Unmarshal(userData, &GoogleUserInfo)
    if err != nil {
        fmt.Fprintln(res, "could not parse user ID",err)
        return
    }


	newUser := datamodel.User{     
        ID:  uuid.New(),
   
        Googleid:    GoogleUserInfo.Googleid,
        Email:       GoogleUserInfo.Email,
        Given_name:  GoogleUserInfo.Given_name,
        Family_name: GoogleUserInfo.Family_name,
        Picture:     GoogleUserInfo.Picture,
        Locale:      GoogleUserInfo.Locale,
    }


// Write JSON response
res.Header().Set("Content-Type", "application/json")
fmt.Println("data",string(userData))

redirectURL := "http://localhost:3000/feed"
log.Println("User has been saved to the database.")
http.Redirect(res,req,redirectURL,http.StatusSeeOther)

createuser(newUser)
var response apiroutes.Response

error := json.Unmarshal(userData, &response)
if error != nil {
 fmt.Println("error")
}
//apiroutes.SendResponse(res,response)
//DB.DBconn.Create(newUser)



fmt.Fprintln(res,string(userData))

claims := jwt.StandardClaims{
	Subject: "user123", 
	ExpiresAt: time.Now().Add(time.Hour * 72).Unix(),
  }
  res.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
  jwtoken := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
  ss, err := jwtoken.SignedString([]byte("secret"))
  if err != nil {
    fmt.Println("error",err);
  } else{
	fmt.Println("token",ss);
  }

  //tokenString := createJWT(user)
  res.Write([]byte(ss))
  res.Write([]byte(string(userData)))

}