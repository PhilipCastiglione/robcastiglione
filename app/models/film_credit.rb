class FilmCredit < ActiveRecord::Base
  belongs_to :film
  scope :ordered, -> {order(:film_id)}
end
