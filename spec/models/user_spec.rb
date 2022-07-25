require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'presence' do
    it 'validates presence of email' do
      user = User.where(email: '').first_or_create(password: '12345678', password_confirmation: '12345678')
      p user.errors[:email]
      expect(user.errors[:email]).to_not be_empty
    end
    it 'validates presence of password' do
      user = User.where(email: '').first_or_create(password: '', password_confirmation: '12345678')
      p user.errors[:password]
      expect(user.errors[:password]).to_not be_empty
    end
    it 'validates presence of password_confirmation' do
      user = User.where(email: '').first_or_create(password: '12345678', password_confirmation: '1234567')
      p user.errors[:password_confirmation]
      expect(user.errors[:password_confirmation]).to_not be_empty
    end
  end 
end