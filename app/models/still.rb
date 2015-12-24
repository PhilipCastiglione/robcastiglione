class Still < ActiveRecord::Base
  validates :title, :url, :short_description, :position, presence: true

  scope :ordered, -> {order(:position)}
end
