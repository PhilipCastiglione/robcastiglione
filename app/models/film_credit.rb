class FilmCredit < ActiveRecord::Base
  has_and_belongs_to_many :films

  validates :role, :name, :position, presence: true

  scope :ordered, -> {order(:position)}
end
