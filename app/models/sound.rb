class Sound < ActiveRecord::Base
  validates :title, :url, :short_description, :order, presence: true

  scope :ordered, -> {order(:order)}

  rails_admin do
    list do
      configure :created_at do
        hide
      end
      configure :updated_at do
        hide
      end
    end
  end
end
