# Homework - Week 2

## Part 1

Clone and install [mean-template](https://github.com/sergei202/mean-template).
This is a repo containing a fully functioning client/server MEAN example.

Your homework is to understand how it works.  We went over the server-side in class and ran out of time on the client-side.

The code is lightly commented, but still plenty to figure out.

Parts 2/3/4 will have you fork that repo and add on it, so please make sure you understand how it all works.

### Hints
- Everything in the repo is things we've done in class (throughout the modules)
- The Dummy model fields don't mean anything, don't try to abstract meaning from it, they are just examples
- As always, ask questions!


## Part 2

We're going to recreate the Pet Store example from class last week, but we'll do it fresh using the [mean-template](https://github.com/sergei202/mean-template) repo from Part 1.

Your Task:
- Be able to list all pets
- Be able to add new and edit existing pets
- Each pet should have these fields:
	- Name
	- Type (cat/dog)
	- Adopted (yes/no)

To accomplish this, you will need to:

- Server-side:
	- Create a `Pet` model
	- Add `petRouter.js`
	- Add `petCtrl.js`
- Client-side:
	- Create a `PetList` and a `PetDetail`
	- Add routing and a link in `SideNav`
	- Add `getPets()` and `savePet()` to `ApiService`

### Hints
- Study the way the Dummies example works
- Don't forget to `app.use()` `petRouter` in `server.js`
