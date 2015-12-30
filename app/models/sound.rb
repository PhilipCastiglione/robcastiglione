class Sound < ActiveRecord::Base
  validates :title, :url, :short_description, :order, presence: true

  scope :ordered, -> {order(:order)}
end
