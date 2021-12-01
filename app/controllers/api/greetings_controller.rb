# module Api
#   class GreetingsController < ::ApplicationController
#     def index
#       greeting = Greeting.order(Arel.sql('RANDOM()')).first
#       render json: { message: greeting.message }
#     end
#   end
# end

module Api
  class GreetingsController < ::ApplicationController
    def index
      greeting = Greeting.order(Arel.sql('RANDOM()')).first
      render json: { greeting: greeting.message }
    end
  end
end


# class Api::GreetingsController < ApplicationController
#   def index
#     @greeting = Greeting.order(Arel.sql('RANDOM()')).first
#     render json: { greeting: @greeting.message }
#   end
# end