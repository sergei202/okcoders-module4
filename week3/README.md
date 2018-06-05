# Week 3 - June 2nd

## Mongoose Populate
Mongoose poplate let's us link two separate collections

- https://medium.com/@nicknauert/mongooses-model-populate-b844ae6d1ee7
-

#### Adding Customers to Pet Store example

- Front End
	- Create CustomerList and CustomerDetail (`ng g c customers/CustomerList` and `ng g c customers/CustomerDetail`)
	- Add link to Sidenav
	- Add routes in `app-routing.module.ts`
	- Copy AnimalList html/ts to CustomerList (Ctrl-F is your friend here)
	- Copy AnimalDetail html/ts to CustomerDetail
	- Copy Animal methods to Customer in `api.service.ts`

- Back End
	- Create Customer model
	- Create Customer router and controller
	- `app.use()` your router in `server.ts`
