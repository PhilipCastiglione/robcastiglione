class Sound < ActiveRecord::Base
  scope :ordered, -> {order(:position)}

  after_create do
    max = Sound.maximum(:position)
    self.position = (max)? max + 1 : 0
    self.save
  end

  before_destroy do
    reorder(self.position) if self.position
  end

  def reposition_up
    old_position = self.position
    new_position = (self.position + 1) % Sound.maximum(:position)
    s = Sound.find_by(:position => new_position)
    s.position = old_position
    s.save
    self.position = new_position
    self.save
  end

  def reposition_down
    old_position = self.position
    new_position = (self.position - 1 + Sound.maximum(:position)) % Sound.maximum(:position)
    s = Sound.find_by(:position => new_position)
    s.position = old_position
    s.save
    self.position = new_position
    self.save
  end

  private

  def reorder(position)
    Sound.all.each do |sound|
      if sound.position > position
        sound.position = sound.position - 1
        sound.save
      end
    end
  end
end

