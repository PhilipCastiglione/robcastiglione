class FilmCreditsController < ApplicationController
  def create
    @film_credit = FilmCredit.new
    @film_credit.film = Film.find_by(:title => params[:film])
    @film_credit.role = params[:role]
    @film_credit.name = params[:name]
    @film_credit.save
    render json: @film_credit
  end

  def update
    @film_credit = FilmCredit.find(params[:id])
    @film_credit.film = Film.find_by(:title => params[:film])
    @film_credit.role = params[:role]
    @film_credit.name = params[:name]
    @film_credit.save
    render json: @film_credit
  end

  def destroy
    @film_credit = FilmCredit.find(params[:id])
    @film_credit.destroy
    render json: nil
  end

  def order
    FilmCredit.find(params[:id]).send(params[:method])
  end
end
 
