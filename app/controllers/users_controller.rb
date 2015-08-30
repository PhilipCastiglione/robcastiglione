class UsersController < ApplicationController
  before_action :authenticate_user!

  def admin
    @films = Film.ordered
    @film_credits = FilmCredit.ordered
    @sounds = Sound.ordered
    @stills = Still.ordered
  end
end
