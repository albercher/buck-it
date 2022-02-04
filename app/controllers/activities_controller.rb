class ActivitiesController < ApplicationController
  # def create
  #   act =
  #     Activity.create(activities_params)
  #   if act.valid?
  #     render json: act, status: :created
  #   else
  #     render json: act.errors.full_messages, status: :unprocessable_entity
  #   end
  # end


  def create
    act = Activity.create(activities_params)
    if act.valid?
        render json: act, status: :created
    else
        render json: act.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    act = Activity.find_by_id(params[:id])

    if act
      if act.update(activities_params)
        render json: act, status: :ok
      else
        render json: {error: act.errors.full_messages}
      end
    else
      render json: {error: "Activity not found"}, status: :not_found
    end
  end

  def destroy
    act = Activity.find_by_id(params[:id])

    if act
      act.destroy
      render json: {}
    else
      render json: {error: "Activity not found"}, status: :not_found
    end
  end

  private

  def activities_params
    params.permit(:name, :description, :completed, :user_id)
  end
end
