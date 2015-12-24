class Film < ActiveRecord::Base
  has_many :film_credits
  scope :ordered, -> {order(:position)}
end
