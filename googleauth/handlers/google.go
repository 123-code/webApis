package handlers

import (
	"context"
	"encoding/json"
	"fmt"
	"googleauth/config"
	"io/ioutil"
	"net/http"
	"time"

	"github.com/golang-jwt/jwt"
	// "io/ioutil"
	// "context"
	// "fmt"
)
 
type GoogleUserInfo struct {
    ID string `json:"id"`
    // Add other fields as needed based on the JSON structure.
}


func GoogleLogin(res http.ResponseWriter,req *http.Request){
	googleConfig := config.SetupConfig()
	url := googleConfig.AuthCodeURL("randomstate")
	http.Redirect(res,req,url,http.StatusSeeOther)

}

func GoogleCallback(res http.ResponseWriter,req *http.Request){

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

var userInfo GoogleUserInfo
err = json.Unmarshal(userData, &userInfo)
    if err != nil {
        fmt.Fprintln(res, "could not parse user ID",err)
        return
    }


// Write JSON response
res.Header().Set("Content-Type", "application/json")
fmt.Println("data",userData)
redirectURL := "http://localhost:3000/feed?userID="+string(userInfo.ID)
http.Redirect(res,req,redirectURL,http.StatusSeeOther)

//fmt.Fprintln(res,string(userData))

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