class PlayerSearchController < ApplicationController
  layout false
  def index
    @players = Player.where("name LIKE ?", "%#{params[:search]}%")
  end
end
