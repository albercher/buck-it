class BuckitsController < ApplicationController
    # def index
    #     render json: Buckit.order("updated_at DESC").limit(9)
    # end

    def index
        render json: current_user.buckits.all
        # render json: User.first.buckits.all
    end

    def show
        buckit = Buckit.find_by_id(params[:id])
        render json: buckit
    end

    def create
        buckit = current_user.buckits.create(buckit_params)
        # buckit = User.first.buckits.create(buckit_params)

        if buckit.valid?
            render json: buckit, status: :created
        else
            render json: buckit.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        buckit = Buckit.find_by_id(params[:id])
    
        if buckit
          buckit.destroy
          render json: {}
        else
          render json: {error: "Buckit not found"}, status: :not_found
        end
    end

    private

    def buckit_params
        params.require(:buckit).permit(:name, :description, :color, pins_attributes: [ :id, :place_name, :longitude, :latitude, :order_number, :place_id ])
    end
end
