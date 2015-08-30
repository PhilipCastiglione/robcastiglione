class Film < ActiveRecord::Base
  has_many :film_credits
  scope :ordered, -> {order(:position)}

  after_create do
    max = Film.maximum(:position)
    self.position = (max)? max + 1 : 0
    self.save
  end

  before_destroy do
    reorder(self.position) if self.position
  end

  def reposition_up
    old_position = self.position
    new_position = (self.position + 1) % Film.maximum(:position)
    f = Film.find_by(:position => new_position)
    f.position = old_position
    f.save
    self.position = new_position
    self.save
  end

  def reposition_down
    old_position = self.position
    new_position = (self.position - 1 + Film.maximum(:position)) % Film.maximum(:position)
    f = Film.find_by(:position => new_position)
    f.position = old_position
    f.save
    self.position = new_position
    self.save
  end

  private

  def reorder(position)
    Film.all.each do |film|
      if film.position > position
        film.position = film.position - 1
        film.save
      end
    end
  end
end
