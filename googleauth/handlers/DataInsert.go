package handlers

import (
	"log"
	"googleauth/datamodel"
	"googleauth/database"
)

func createuser(user datamodel.User) {
	// Connect to the database
	DB.DBconnect()
	
	/*
	/ Create a new User instance
	newUser := &datamodel.User{
		Model: gorm.Model{},
		ID:    id,
		Googleid: googleid,
		Email:email,
		Given_name :givenName,
	    Family_name :familyName,
		Picture:picture,
		Locale:locale,
	}
	*/
	// Save the user to the database
	if err := DB.DBconn.Create(&user).Error; err != nil {
        log.Fatalf("Failed to create user: %v", err)
        return
    }

	log.Println("User has been saved to the database.")
}
