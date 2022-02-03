class ActivitiesController < ApplicationController
  def create
    act =
      Activity.create(activities_params)
    if act.valid?
      render json: act, status: :created
    else
      render json: act.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def activities_params
    params.permit(:name, :description, :completed, :pin_id)
  end
end
