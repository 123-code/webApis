package datamodel

import (
	"gorm.io/gorm"
	"github.com/google/uuid"
)


type User struct {
	gorm.Model
	ID uuid.UUID `gorm:"primaryKey;type:uuid;default:uuid_generate_v4()"`
	googleid string `json:"googleid"`
	email string `json "email"`
	given_name string `json "given_name"`
	family_name string `json "family_name`
	picture string `json "picture"`
	locale string `json "locale"`
}


func (p *User) BeforeCreate(tx *gorm.DB) error{
	p.ID = uuid.New()
	return nil
}