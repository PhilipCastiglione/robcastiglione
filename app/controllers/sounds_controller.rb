class SoundsController < ApplicationController
  def index
    @sounds = Sound.ordered
  end

  def create
    @sound = Sound.new
    @sound.title = params[:title]
    @sound.short_description = params[:short_description]
    @sound.url = params[:url]
    @sound.save
    render json: @sound
  end

  def update
    @sound = Sound.find(params[:id])
    @sound.title = params[:title]
    @sound.short_description = params[:short_description]
    @sound.url = params[:url]
    @sound.save
    render json: @sound
  end

  def destroy
    @sound = Sound.find(params[:id])
    @sound.destroy
    render json: nil
  end
end
