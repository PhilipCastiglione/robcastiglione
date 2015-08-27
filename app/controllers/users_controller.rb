class UsersController < ApplicationController
  before_action :authenticate_user!

  def admin
    @films = Film.all
    @film_credits = FilmCredit.ordered
    @sounds = Sound.all
    @stills = Still.all
  end
end
