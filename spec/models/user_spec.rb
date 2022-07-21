require 'rails_helper'

RSpec.describe User, type: :model do
  user = User.where(email: 'test@example.com').first_or_create(encrypted_password: '12345678')
  describe 'presence' do
    it 'validates precense of email' do
      user =user.created_at(
        email: "",
        encrypted_password:"123 street"
      )
      p user.errors[:email]
      expect(user.errors[:email]).to_not be_empty
    end
    it 'validates precense of encrypted password' do
      user =user.created_at(
        email: "me@gmail.com",
        encrypted_password: ""
      )
      p user.errors[:encrypted_password]
      expect(user.errors[:encrypted_password]).to_not be_empty
    end
  end 
end