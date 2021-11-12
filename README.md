## PedalPals
## Live Website Link [PedalPals](https://github.com/facebook/create-react-app)

## Description
PedalPals is a online shopping site for purchasing high quality and cool looking bikes. Client's needs is our top priority. We try our best to satisfy our client.

## Functionality used-
1. This site is a single page application and has a total of six routes(Home, Explore, Dashboard, Login, Register).
Menubar and footer are shared in all routes.
2. Home route has 4 section in total(Banner, Bicycle products, Client reviews, Contact) excluding Menubar and footer.
3. Each product has a 'purchase' button which lead to a protected route in which the extra product details are shown and user gets to fill up a form and purchase the clicked product.
4. If you are not logged in then clicking 'purchase' button will redirect you to Login page. And after login you will be redirected to initial page. Dashboard route is protected too.
5. Login has a email-password based authentication and sign in with google authentication.
6. Once logged in a user can see Dashboard route, and will appear a logOut button on menubar which will log out the user.
7. Dashboard for a regular user have 2 nested routes(My orders, Add review) and a logout button. In my orders route a user can see his/her purchased products and can also cancel purchase. And user can also add review which will be shown in the home page.
8. However an admin will see different nested and protected route on dashboard which will not be seen by regular user. Those routes are Manage Orders, Add Product, Manage Products, Make admin and a logout button. In Manage order route an admin will see all products purchased by available users. And an admin can delete or approve a order. In Add product route an admin can add a product which will appear on explore page. An admin can make a regular user admin in Make Admin route. In Manage products route an admin can see all products stored in the database and can delete a product from database.
9. This site is responsive for mobile and tablet devices.
10. All the data used in this site are from mongoDb database.


## Technology used-
1. React.
2. Meterial UI.
3. React Router.
4. Firebase.
5. Node.
6. Express.
7. MongoDB.