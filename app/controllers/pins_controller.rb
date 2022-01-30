class PinsController < ApplicationController
  def create
    pin = Pin.create(
        longitude: params[:longitude],
        latitude: params[:latitude],
        user_id: params[:user_id],
        place_name: params[:place_name]
      )
    if pin.valid?
        render json: pin, status: :created
    else
        render json: pin.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def pin_params
    params.permit(:name, :description, :color, :visited)
  end
end
