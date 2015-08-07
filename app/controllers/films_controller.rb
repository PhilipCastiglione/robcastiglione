class FilmsController < ApplicationController
  def index
    @films = Film.all
  end

  def create
    @film = Film.new(film_params)
    redirect_to 'user_root_path' if @film.save
  end

  def update
    @film = Film.find(params[:id])
    @film.title = params[:title]
    @film.short_description = params[:short_description]
    @film.url = params[:url]
    redirect_to user_root_path, status: :see_other if @film.save
  end

  def destroy
    @film = Film.find(params[:id])
    redirect_to user_root_path, status: :see_other if @film.destroy
  end
end
