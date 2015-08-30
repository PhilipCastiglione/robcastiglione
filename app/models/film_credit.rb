class FilmCredit < ActiveRecord::Base
  belongs_to :film
  scope :ordered, -> {order(:film_id)}

  after_create do
    max = FilmCredit.maximum(:position)
    self.position = (max)? max + 1 : 0
    self.save
  end

  before_destroy do
    reorder(self.position, self.film_id) if self.position
  end

  def reposition_up
    old_position = self.position
    new_position = (self.position + 1) % FilmCredit.where(:film_id => self.film_id).maximum(:position)
    f = FilmCredit.where(:film_id => self.film_id).find_by(:position => new_position)
    f.position = old_position
    f.save
    self.position = new_position
    self.save
  end

  def reposition_down
    old_position = self.position
    new_position = (self.position - 1) % FilmCredit.where(:film_id => self.film_id).maximum(:position)
    f = FilmCredit.where(:film_id => self.film_id).find_by(:position => new_position)
    f.position = old_position
    f.save
    self.position = new_position
    self.save
  end

  private

  def reorder(position, id)
    FilmCredit.where(:film_id => id).each do |credit|
      if credit.position > position
        credit.position = credit.position - 1
        credit.save
      end
    end
  end
end
