class UsersController < ApplicationController
  before_action :authenticate_user!

  def admin
    @films = Film.all
    @film = Film.new
    @sounds = Sound.all
    @sound = Sound.new
    @stills = Still.all
    @still = Still.new
  end
end
