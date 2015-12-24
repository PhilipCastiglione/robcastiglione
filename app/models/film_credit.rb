class FilmCredit < ActiveRecord::Base
  belongs_to :film

  validates :title, :url, :short_description, :position, presence: true

  scope :ordered, -> {order(:film_id)}
end
