class Film < ActiveRecord::Base
  has_and_belongs_to_many :film_credits

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
