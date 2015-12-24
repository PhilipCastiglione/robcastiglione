class Sound < ActiveRecord::Base
  scope :ordered, -> {order(:position)}
end
