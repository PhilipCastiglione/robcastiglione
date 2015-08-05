class FilmsController < ApplicationController
  def index
    @films = Film.all
  end

  def create
    @film = Film.new(film_params)
    redirect_to 'user_root_path' if @film.save
  end

  def update
    puts params
    # @film = Film.find(params[:id])
    # redirect_to 'user_root_path' if update(film_params)
    redirect_to user_root_path, status: :see_other
  end

  def destroy
    @film = Film.find(params[:id])
    redirect_to user_root_path, status: :see_other if @film.destroy
  end
end
