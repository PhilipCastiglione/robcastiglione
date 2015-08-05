class FilmsController < ApplicationController
  def index
    @films = Film.all
  end

  def create
    @film = Film.new(film_params)
    redirect_to 'user_root_path' if @film.save
  end

  def update

  end

  def destroy
    @film = Film.find(params[:id])
    redirect_to 'user_root_path' if @film.destroy
  end

  private

  def film_params

  end
end
