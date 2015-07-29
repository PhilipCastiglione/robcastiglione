class StillsController < ApplicationController
  def index
    @stills = Still.all
  end
end
