class Still < ActiveRecord::Base
  scope :ordered, -> {order(:position)}

  after_create do
    max = Still.maximum(:position)
    self.position = (max)? max + 1 : 0
    self.save
  end

  before_destroy do
    reorder(self.position) if self.position
  end

  def reposition_up
    old_position = self.position
    new_position = (self.position + 1) % Still.maximum(:position)
    s = Still.find_by(:position => new_position)
    s.position = old_position
    s.save
    self.position = new_position
    self.save
  end

  def reposition_down
    old_position = self.position
    new_position = (self.position - 1 + Still.maximum(:position)) % Still.maximum(:position)
    s = Still.find_by(:position => new_position)
    s.position = old_position
    s.save
    self.position = new_position
    self.save
  end

  private

  def reorder(position)
    Still.all.each do |still|
      if still.position > position
        still.position = still.position - 1
        still.save
      end
    end
  end

end

