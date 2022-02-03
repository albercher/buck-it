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

  def index
    # if current_user
    if params[:user_id]
      act = User.find_by_id(:user_id).activities
      render json: act
    else
      render json: {error: "No activities found"}, status: :not_found
    end
  end

  private

  def activities_params
    params.permit(:name, :description, :completed, :pin_id)
  end
end
