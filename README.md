## Phase Two Self Assessment Challenge

Welcome to the Phase Two Self Assessment. At this point in Phase Two, you should have the skills to complete this challenge. Please give yourself a time box of 3 hours to work on this. Commit early and often.

If you don't finish this challenge in three hours, be sure to make a clear, concise commit at the end of three hours then feel free to continue working after time is up.

Note: We don't expect you to have all the skills committed to memory right now. Use all the resources you've accumulated over the past week!

Good luck!

# Channel Subscription Application

By now you should be familiar with creating basic web applications using Sinatra. In this challenge you'll be building a simple channel subscription application for subscribers of a cable company. This will give you a chance to demonstrate your proficiency with the web by writing code for models, views, and controllers as well as authentication, basic HTML, and some CSS.

The problem is broken into multiple parts. You should complete each part before moving on to the next. We've given approximate timeboxes for each part to help you make good progress. 

### Release 1: Authentication (Timing ~ 60 min)

Authentication is a central concern of most web applications. We're going to start by creating a simple app that does nothing more than authenticate a user.

#### User Model

You have an empty `User` model and a database with a `users` table. Add validations to the `User` model which guarantee the following:

1. Every user has an email
2. Every user's email is unique
3. Every user has a password

You should not store the user's password directly in the database.

#### Sign Up, Log In, Log Out

Create views to allow a user to:

1. Sign up as a new user
2. Log in as an existing user
3. Log out as an existing user

### Release 2: Channels  (Timing ~ 30 min)

Users can add and remove channels from their user account. Users can subscribe to many channels and a channel can have many subscribers. Channels are created for you in the database seeds.

#### Associations

We've already defined the three models for you. You'll need to create the associations between them.

The `User` model should have at least this one association (among others):

- `user.channels` should return the list of `Channel` models subscribed to by the user.

The `Channel` model should have at least this association (among others):

- `channel.subscribers` should return the list of `User` models subscribed to the channel.

**Note**: Before you move on, be sure your associations are working as expected. Try using `rake console` to manually test them.

### Release 3: CRUD It Up (Timing ~ 90 min)

With user authentication in place, let's create some CRUD pages.

1. without logging in, a user can see a list of all channels
2. after logging in, a user can see a user profile page including:
  * a list of the user's channels
  * the total price per month of all the user's channels
  * fyi - after logging in, this is the page a user should be on
3. a page to show information about a single channel including:
  * the channel's name, callsign, and price
  * the channel's total number of subscribers
  * a button to subscribe to the channel, if the user is logged in but not already subscribed
  * a button to unsubscribe from the channel, if the user is logged in and already subscribed

After three hours create a pull request and tag your instructors. Feel free to continue working on this challenge, but be sure to mark where you are after three hours.
