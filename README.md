This project contains the companion code for the Stimulus tutorial article published on [Medium](https://davidcolby.medium.com/instant-search-results-with-rails-6-and-stimulus-ffaf333926b5). In it, we build a search form that allows a user to type a search term into a text field and instantly see filtered results that match their query, as shown here:

![A gif of a user typing in a search term and a list of results changing to match the term](project-preview.gif?raw=true "Instant search preview")

The Rails project in this repo contains all you need to get started using Stimulus in Rails 6. 

If you want to view the demo in action:

* Clone this repository
* `bundle install`
* `rails db:create && rails db:migrate`
* `rails server`
* Visit `localhost:3000` in your browser and create a few players
