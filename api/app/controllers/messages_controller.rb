class MessagesController < ApplicationController
    before_action :set_message, only: [:show, :update, :destroy]
  
    # GET /messages
    def index
      messages = Message.all
      render json: messages
    end
  
    # GET /messages/1
    def show
        message = Message.find(params[:id])
      render json: message
    end
  
    # POST /messages
    def create
      message = Message.new(message_params)
  
      if message.save
        render json: message, status: :created, location: message
      else
        render json: message.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /messages/1
    def update
      if message.update(message_params)
        render json: message
      else
        render json: message.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /messages/1
    def destroy
      message.destroy
      render json: { message: 'Message was successfully destroyed.' }
    end
  
    private
  
    # Use callbacks to share common setup or constraints between actions.
    def set_message
      message = Message.find(params[:id])
      render json: message
    end
  
    # Only allow a list of trusted parameters through.
    def message_params
      params.require(:message).permit(:sender_user_id, :recipient_user_id, :content)
    end
end
  
