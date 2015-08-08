class StillsController < ApplicationController
  def index
    @stills = Still.all
  end

  def create
    @still = Still.new
    @still.title = params[:title]
    @still.short_description = params[:short_description]
    @still.url = params[:url]
    @still.save
    render json: @still
  end

  def update
    @still = Still.find(params[:id])
    @still.title = params[:title]
    @still.short_description = params[:short_description]
    @still.url = params[:url]
    @still.save
    render json: @still
  end

  def destroy
    @still = Still.find(params[:id])
    @still.destroy
    render json: nil
  end
end
