class Api::V1::InterviewsController < ApplicationController

  def index
    @interviews = Interview.all
    render json: @interviews
  end

end
