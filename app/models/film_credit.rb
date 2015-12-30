class FilmCredit < ActiveRecord::Base
  has_and_belongs_to_many :films

  validates :role, :name, presence: true

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
