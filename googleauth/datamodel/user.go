package datamodel

import (
	"gorm.io/gorm"
	"github.com/google/uuid"
)


type User struct {
	gorm.Model
	ID uuid.UUID `gorm:"type:uuid;default:uuid_generate_v4();primaryKey"`
	Googleid string`json:"id"`
	Email string `json:"email"`
	Given_name string `json:"Given_name"`
	Family_name string `json:"Family_name"`
	Picture string `json:"Picture"`
	Locale string `json:"Locale"`
	
}

func (User) TableName() string {
	return "users"
  }
