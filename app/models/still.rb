class Still < ActiveRecord::Base
  scope :ordered, -> {order(:position)}
end
