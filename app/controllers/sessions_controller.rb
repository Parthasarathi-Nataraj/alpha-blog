class SessionsController < ApplicationController

def new

end

protect_from_forgery with: :null_session
def create
session[:user_id] = nil
  
user = User.find_by(email: params[:session][:email].downcase)

if user && user.authenticate(params[:session][:password])

session[:user_id] = user.id

flash[:success] = "You have successfully logged in"

redirect_to user_path(user)

else

session[:user_id] = nil
  
flash.now[:danger] = "There was something wrong with your login information"

render 'new'

end

end

def destroy

session[:user_id] = nil

flash[:success] = "You have logged out"

redirect_to root_path

end

end