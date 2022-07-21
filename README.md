# Capstone requirements/Project details at the bottom

## ▶︎Terminal Commands
```
$ rails new grubber-app -d postgresql -T
$ cd grubber-app
$ rails db:create
$ bundle add rspec-rails
$ rails generate rspec:install
$ bundle add webpacker
$ bundle add react-rails
$ rails webpacker:install
$ rails webpacker:install:react
$ yarn add @babel/preset-react
$ yarn add @rails/activestorage
$ yarn add @rails/ujs
$ rails generate react:install
$ rails generate react:component App
$ bundle add devise
$ rails generate devise:install
$ rails generate devise User
$ rails db:migrate
$ rails generate controller Home
```

## 🛠 Configurations

### Devise Config
**config/environments/development.rb**
```ruby
# This line added:
config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }
```

**config/initializers/devise.rb**
```ruby
# This line replaced:
config.sign_out_via = :delete
# With this line:
config.sign_out_via = :get
```

File added in app/views/home called index.html.erb
**app/views/home/index.html.erb**
```javascript
<%= react_component 'App', {
  logged_in: user_signed_in?,
  current_user: current_user,
  new_user_route: new_user_registration_path,
  sign_in_route: new_user_session_path,
  sign_out_route: destroy_user_session_path
} %>
```

### React in Rails Config

**app/views/layouts/application.html.erb**
```ruby
# This line replaced:
<%= javascript_importmap_tags %>
# With this line:
<%= javascript_pack_tag 'application', 'data-turbolinks-track': 'reload' %>
```

**config/routes.rb**
```ruby
# These lines added:
get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
root 'home#index'
```

### React Routing Config
▶︎ terminal commands
```
$ bash
$ yarn add react-router-dom@5.3.3
```

**app/javascript/components/App.js**
```javascript
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'
```

### Reactstrap Config
▶︎ terminal commands
```
$ bash
$ bundle add bootstrap
$ mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
$ yarn add reactstrap
```

**app/assets/stylesheets/application.scss**
```css
@import 'bootstrap';
```


## 👯‍♀️ Clone the Repo 
Clone the repo from the Chompy Stackers Github organization:

▶︎ terminal commands
```
$ bash
$ bundle 
$ yarn
$ rails db:setup
```

## 🏁 Start the Server
▶︎ terminal commands
```
$ bash
$ rails s
```


## 🏡 Restaurant Resource    
The Devise User model is going to have an association with the Restaurant model. In this situation, the User will have many Restaurants and the Restaurants will belong to a User.

▶︎ terminal commands          
```
$ bash
$ rails generate resource Restaurant street:text city:text state:text foodtype:text comment:text image:text user_id:integer
$ rails db:migrate
```

### User and Restaurant Associations
The Restaurants will belong to a User and a User will have many Restaurants.

**app/models/Restaurant.rb**
```ruby
class Restaurant < ApplicationRecord
  belongs_to :user
end
```

**app/models/user.rb**
```ruby
class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :Restaurants
end
```

## 🚗 Testing
rspec will run all tests, to specify, add the file name after the command

▶︎ terminal commands

```
$ bash
$ yarn jest
$ rspec spec/
```

# Deploying Grubber to Heroku
- In order to deploy to Heroku, the main change we need to make in our app is to add the pg gem because Heroku uses PostgreSQL as its database. We can’t use sqlite on Heroku.
- So let’s change our Gemfile. Let’s move sqlite to the development and test group, and add the pg gem to a production group:

# 💎Gemfile:
```ruby
group :development, :test do
  gem 'sqlite3'
end

group :production do
  gem 'pg'
end
```

# Install the 💎 Gem:
Terminal command: 
```
$ bundle install
```
- You also need to make sure you have set up a git repo in your code directory and commit all the changes we made to the code.
- Now let’s create a Heroku app. We just need to run the terminal command: 
```
$ heroku create my-events-app
```
- where my-events-app is the name of the app on Heroku.


- If we don’t pass a name to heroku create, Heroku automatically generates a random name for the app.

- Then let’s push our code to the git repo on Heroku,

terminal command: 
```
$ git push heroku master
```
- That’ll take a couple of minutes to deploy. It can take a bit longer the first time because it needs to install all the gems and setup the app.

- Once that’s done, we can open the app in a browser either by typing in the app url or by running the terminal command:
```
$ heroku open
```
- But it won’t work yet because we need to migrate the database first. So let’s run the terminal command:
```
$ heroku run rake db:migrate
```
- Let’s also seed the database with some events, run the terminal command:
```
$ heroku run rake db:seed
```
- Now let’s refresh and there’s our Eventlite app running on Heroku!



# Capstone Requirements

### Project Requirements
- React in Rails application
- Full CRUD functionality <---spend a lot of time on this 
- User authentication (signup, login, logout)
- Minimum of two database tables (one will be User)
- Testing - 60% code coverage
- Deployed to Heroku
- A [well written README](https://medium.com/chingu/keys-to-a-well-written-readme-55c53d34fe6d) with link to live application
- "About Us" page
- Demo project with the team
[this can be done in 5 days][finish requirements and then style]

### Project Stretch Goals
- Responsive design (include a mobile view for example)
- Accessible design features
- Continuous integration [Github and Heroku]
- Incorporate an external API

### Things to Think About
- A simple project idea will allow you to add more features and styling
- Step out of your comfort zone
- Work with everyone in your group
- Work on a feature or part of the app you're not completely comfortable with
- Organization and clear communication - make sure everyone is on the same page
- Make sure everyone contributes and feels included [group of 4: 20%]

### Project Demos - 10 min total
General reminders
- No one will notice your bugs if you don't point them out
- Use "we" rather than "I" statements
- Please practice your demo and **stay within the time total limit**
- The audience doesn't know the demo format so provide context

Product (2 min)
- Introduce yourself and your role on the team
- Introduce your team name and your app name
- Share the elevator pitch for your application (you may need to revise your pitch if your application changed during development)

Design (2 min)
- Introduce yourself and your role on the team
- Show off the UX/UI of your application
- Highlight 2-3 things for which your team is proud

Tech (2 min)
- Introduce yourself and your role on the team
- Share the code functionality for the 2-3 things for which your team is proud (corresponding to the topics covered in UX/UI)

Project (2 min)
- Introduce yourself and your role on the team
- Share one notable blocker your team overcame
- Share what a typical day looked like for your team during the project

Wrap-up (2 min)
- Each person share something you learned
- Each person share some advice for the next cohort

---
[Back to Syllabus](../README.md#unit-ten-capstone-project-mvp)


# Capstone Project Details

**Planning is critical to the success of your project.** Proper planning can help avoid wasting time and ensure your team is successful.

### Prep To Do List [X]
- [X] Create a team name: Chompy-Stackers
- [X] Create a slack channel within the LEARN workspace [Jorge]
  - [X] Add the instructors
- [X] Create a team email address [Stephen]
  - [X] Create a team GitHub Organization
  - [X] Add all team members, instructors, and mentors in the role of "owner"
  - [X] Add an image to your organization[JB]
  - [X] Add Slack integrations for your repository `/github subscribe <repo-url>`
- [X] Create a team Trello Board[Frank]
  - [X] Add the instructors
- [X] Create a team Heroku account[Jorge]
  - [X] Be sure to keep track of the username and password as we will need it for deployment
- [X] Decide on Developer Roles

### Green Light Meeting [X]
- [X] Elevator pitch - 30 sec summary of the app [JB]
- [X] Wireframes - visual representations of all the pages your user will see for your MVP [Designigator]
- [X] DB schema drawn out with column names, data types, and table relationships
- [X] CRUD actions [Frank]
- [X] User stories for your MVP on Trello [Jorge]

### Trello Board [X]  
- [X] Swim lanes[Frank]
- [x] Icebox
- [x] MVP
- [x] Doing
- [x] Code review
- [x] Done

### Team Name [X]
- Chompy Stackers

### Elevator Pitch [X]
The elevator pitch should succinctly explain your project's purpose and functionality.
    - "HAVE YOU EVER NOT KNOWN WHERE TO GO FOR FOOD?" 
    - "YOU KNOW WHAT YOU LIKE BUT DON'T KNOW WHERE TO GO!" 
    - "ADD YOUR FAVORITE LOCATIONS AND SHUFFLE THEM TO FIND THE PERFECT PLACE   TO CHOMP DOWN"

### Wireframes [X]
Wireframes are drawings or basic outlines of what each page of your application will look to the user. Wireframes should be vague enough that style choices are not limited, but provide enough information to create an MVP. During development, if there are any questions or disagreements on the look or basic functionality of your app, wireframes can help sort out those issues. A good wireframe will allow the development team to "walk through" the application page by page.

[Figma](https://www.figma.com/) is a great tool for wireframing!

### DB Schema
Setting up your database will be one of the first steps in your project. The database schema should be drawn out with the name of each column and the data type of each column. Relationships between each table should be defined.

### User Stories
A user story describes how a user interacts with an app. Stories take your wireframes and DB schema and turn them into actionable items. Stories are a detailed "to do" list for every part of your application. Stories keep the team focused on the overall goal of the application as well as keeping the individual developers on task. There should be a clear understanding of when a story is "done".

### Schedules
The capstone project is two weeks long and can be divided into two one-week (5 day) sprints. The first sprint is getting the basic functionality of your application, or your **Minimum Viable Product**. The second sprint is for adding additional styling and **Icebox** functionality.

A typical day:
```
9:00 - Check in with the class

9:15 - Morning standup with the class
- Project: What tasks did you complete yesterday? What task are you working on today?
- Tech: What are your blockers? What is your plan for your mentorship session today?

9:30 - Check in with your group and discuss the plan for the day
- What story is each person working on?
- What is the goal for the day?
- What story / branch are you currently working on?

9:30 - Pair up and start coding, remember to take breaks regularly and take breaks at the same time

12:00 - Lunch

1:00 - Coding

4:15 - Wrap up with your group
- Reflect on the progress you made throughout the day
- Move any cards completed and discuss the next steps
- Surface any blockers
- Discuss actions items for tomorrow

4:30 - Afternoon standup with the class
- Product: What did your team do today that got your application closer to the requirements of the project?
- Design: What did your team do today that increased your user's experience?

4:45 - Check out with the class
```

### Developer Roles (4 Person Team)
Everyone on the team is a developer on the application. To help divide responsibilities, each member of the team will take ownership over one of the following areas:

**Product Manager** [JB]
- Takes ownership on the big-picture vision of the product. Ensures the product meets all requirements.
    - Must have strong management skills to provide support to the team and keep team unblocked.
    - Manages the conversation around large changes to the app.
    - Ensures the README contains appropriate information.
    - Gives progress updates to the class at the end of the day.

**Project Manager** [Jorge]
- Takes ownership on internal team communication. Oversees the project management board.
    - Must have strong communication with the team about who is working on what.
    - Guardian of the Trello board.
    - Ensures developers are assigned to the card they are working on.
    - Notifies the instructors and/or mentors of PRs when a card is moved to the PR swimlane.
    - Keeps Slack active with updates and pins appropriate content.
    - Manages external resources.
    - Gives status updates to the class at the beginning of the day.

**Tech Lead/Anchor** [Frank]
- Takes ownership over the code base and version control.
    - Must have a strong understanding of the technical needs of the project.
    - Guardian of GitHub.
    - Merges code when appropriate.
    - Leads mentorship sessions for the team.
    - Surfaces blockers to the class at the beginning of the day.

**Design Lead** [Stephen]
- Takes ownership over the look, color scheme, and branding of the project.
    - Must have a strong understanding of the UI/UX needs of the application.
    - Guardian of the wireframes.
    - Oversees color schemes and implementation of branding.
    - Ensures intuitive navigation and user experience.
    - Explores styling libraries, responsive design, and accessibility features.
    - Gives user status updates to the class at the end of the day.


Everyone on the team is a developer on the project. To help divide responsibilities each member of the team will take ownership over one of the following areas.

---
[Back to Syllabus](../README.md#unit-ten-capstone-project-mvp)