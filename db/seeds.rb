puts "Purged #{Film.destroy_all.count} films."
[{title: 'Shaman',
  url: 'https://vimeo.com/134639255',
  short_description: 'Inspired by the Himalayan Shaman of Northern Nepal (1967) and John T. Hitchcock, University of Wisconsin'},
  {title: 'That Which Feeds Us',
  url: 'https://vimeo.com/130279788',
  short_description: 'The film highlights a way to address some of the most pressing environmental and health crises facing the island of Kauai - and of island Earth. That may sound like an outstanding claim, but as ʻĀINA vividly illustrates, such is the power of agriculture and food for people and the planet.'},
  {title: 'Otherwise Engaged',
  url: 'https://vimeo.com/129888782',
  short_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat facere laborum cum error nam hic quas, natus nemo, alias fugiat eaque molestiae quam quasi doloribus eos illo, eveniet expedita voluptatum.'}
].each do |f|
  film = Film.new(f)
  puts film.errors.full_messages unless film.save
end
puts "Created #{Film.count} films."

puts "Purged #{FilmCredit.destroy_all.count} film credits."
[{film_id: Film.find_by(title: 'Shaman').id,
  role: 'Director',
  name: 'Robert Castiglione'},
  {film_id: Film.find_by(title: 'Shaman').id,
  role: 'Cinematographer',
  name: 'John Smith'},
  {film_id: Film.find_by(title: 'That Which Feeds Us').id,
  role: 'Director',
  name: 'Robert Castiglione'},
  {film_id: Film.find_by(title: 'That Which Feeds Us').id,
  role: 'DOP',
  name: 'Jane Doe'},
  {film_id: Film.find_by(title: 'That Which Feeds Us').id,
  role: 'Editor',
  name: 'Robert Castiglione'},
  {film_id: Film.find_by(title: 'Otherwise Engaged').id,
  role: 'Director',
  name: 'Robert Castiglione'},
  {film_id: Film.find_by(title: 'Otherwise Engaged').id,
  role: 'Magician',
  name: 'Mysterio Wizard'}
].each do |fc|
  film_credit = FilmCredit.new(fc)
  puts film_credit.errors.full_messages unless film_credit.save
end
puts "Created #{FilmCredit.count} film credits."

puts "Purged #{Sound.destroy_all.count} sounds."
[{title: 'Introitus',
  url: 'https://soundcloud.com/forss/introitus',
  short_description: 'Introitus ipsum dolor sit amet, consectetur adipisicing elit. Inventore mollitia reprehenderit dolores harum totam dicta molestiae quisquam commodi vero fuga cum modi, laudantium, delectus fugiat voluptatibus deserunt, ab similique vel.'},
  {title: 'Regulus',
  url: 'https://soundcloud.com/forss/regulus',
  short_description: 'Loving the glitchy staccato funkiness of this - set gut!! Ich bin ein Nerd'},
  {title: 'Diligam',
  url: 'https://soundcloud.com/forss/diligam',
  short_description: 'Forss ipsum dolor sit amet, consectetur adipisicing elit. Officiis dolore earum, nesciunt ex explicabo! Voluptatum praesentium libero eligendi neque id omnis? Facilis suscipit veniam earum nostrum cum ea nam officia.'}
].each do |s|
  sound = Sound.new(s)
  puts sound.errors.full_messages unless sound.save
end
puts "Created #{Sound.count} sounds."

puts "Purged #{Still.destroy_all.count} stills."
[{title: 'City',
  url: 'http://www.oregonscenics.com/s-n-p-ci-wide.jpg',
  short_description: 'City lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis hic beatae quos reprehenderit voluptatibus distinctio vitae excepturi in, adipisci veritatis accusamus assumenda quod voluptatem aut at, consectetur libero laboriosam molestias.'},
  {title: 'Nature',
  url: 'http://bestinspired.com/wp-content/uploads/2015/03/4-Nature-Wallpapers-2014-1.jpg',
  short_description: 'Nature lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio necessitatibus nostrum hic laboriosam quisquam reprehenderit qui excepturi deserunt, explicabo nemo expedita labore dolorum architecto esse ipsum facilis debitis facere voluptatibus!'},
  {title: 'Cat',
  url: 'http://www.wallpapers9hd.com/wp-content/uploads/2015/05/hd_wallpapers_nature_animals_5.jpg',
  short_description: 'Cat lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat facere laborum cum error nam hic quas, natus nemo, alias fugiat eaque molestiae quam quasi doloribus eos illo, eveniet expedita voluptatum.'}
].each do |st|
  still = Still.new(st)
  puts still.errors.full_messages unless still.save
end
puts "Created #{Still.count} stills."
