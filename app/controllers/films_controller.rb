class FilmsController < ApplicationController
  def index
    @films = Film.ordered
  end

  def create
    @film = Film.new
    @film.title = params[:title]
    @film.short_description = params[:short_description]
    @film.url = params[:url]
    @film.save
    render json: @film
  end

  def update
    @film = Film.find(params[:id])
    @film.title = params[:title]
    @film.short_description = params[:short_description]
    @film.url = params[:url]
    @film.save
    render json: @film
  end

  def destroy
    @film = Film.find(params[:id])
    @film.destroy
    FilmCredit.where(:film_id => params[:id]).destroy_all
    render json: nil
  end

  def projects
    @films = Film.ordered.select { |f| f.thumbnail.present? }
  end
end
