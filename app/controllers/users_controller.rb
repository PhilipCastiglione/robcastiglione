class UsersController < ApplicationController
  before_action :authenticate_user!

  def admin
    @films = Film.all
    @sounds = Sound.all
    @stills = Still.all
  end
end