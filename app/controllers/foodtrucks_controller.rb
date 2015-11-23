require 'httparty'

class FoodtrucksController < ApplicationController

  def index 
    @foodtrucks = Foodtruck.limit(3)
    gon.foodtrucks = Foodtruck.limit(3)
  end
end
