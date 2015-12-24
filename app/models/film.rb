class Film < ActiveRecord::Base
  has_many :film_credits

  validates :title, :url, :short_description, :position, presence: true

  scope :ordered, -> {order(:position)}
end
