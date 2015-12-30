class Film < ActiveRecord::Base
  has_and_belongs_to_many :film_credits

  validates :title, :url, :short_description, :order, presence: true

  scope :ordered, -> {order(:order)}
end
