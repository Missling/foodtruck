# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

responses = HTTParty.get('https://data.sfgov.org/resource/rqzj-sfat.json?status=approved')

responses.each do |response|
  name = response['applicant']
  longitude = response['longitude']
  latitude = response['latitude']
  description = response['fooditems'].gsub!(/:/, ',')
  location1 = response['address'].split(" ").first
  location2 = response['locationdescription']

  truck = Foodtruck.create(name: name, longitude: longitude, latitude: latitude, description: description, address: location1 + " " + location2)
  truck.save!
end 
