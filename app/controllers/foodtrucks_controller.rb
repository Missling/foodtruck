require 'httparty'

class FoodtrucksController < ApplicationController

  def index 
    @foodtrucks = Foodtruck.all
    gon.foodtrucks = Foodtruck.all
  end
end
