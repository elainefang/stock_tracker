class StocksController < ApplicationController

  def index
    render json: Stock.order("ticker ASC").all
  end

  def create
    @stock = Stock.new(stock_params)

    if @stock.save
      render json: @stock
    else
      render status: 400, nothing: true
    end
  end

  def show
    @stock = Stock.find(params[:id])

    if @stock
      render json: @stock
    else
      render status: 400, nothing: true
    end
  end

  def update
    @stock = Stock.find(params[:id])

    if @stock.update(stock_params)
      render json: @stock
    else
      render status: 400, nothing: true
    end
  end

  def destroy
    @stock = Stock.find(params[:id])

    if @stock.destroy
      render json: {}
    else
      render status: 400, nothing: true
    end
  end

  private

    def stock_params
      params.require(:stock).permit(:ticker, :name, :user_id, :quantity)
    end

end
