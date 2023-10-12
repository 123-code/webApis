package DB

import (
	
	"log"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"googleauth/datamodel"
	//"os"
  )

  var DBconn *gorm.DB

func DBconnect(){
	var err error;

	dsn := "host=bubble.db.elephantsql.com user=phwhnrge password=gWpUx0ZYKbFDhY9_ry-AMPTTN7pzqt71 dbname=phwhnrge port=5432 sslmode=disable"
	DBconn, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})

	DBconn.AutoMigrate(&datamodel.User{});
	

if err != nil{ 
	log.Fatal("Failded to connect to database")
}

}