class PinsController < ApplicationController
  def index
    render json: Pin.all
  end

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

  def update
    pin = Pin.find_by_id(params[:id])

    if pin
      if pin.update(pin_params)
        render json: pin, status: :ok
      else
        render json: {error: pin.errors.full_messages}
      end
    else
      render json: {error: "Pin not found"}, status: :not_found
    end
  end

  def destroy
    pin = Pin.find_by_id(params[:id])

    if pin
      pin.destroy
      render json: {}
    else
      render json: {error: "Pin not found"}, status: :not_found
    end
  end

  private

  def pin_params
    params.permit(:name, :description, :color, :visited)
  end
end
