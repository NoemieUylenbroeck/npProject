# npProject
**Type of challenge:** Consolidation

**Duration:** 4 weeks  

**Team challenge:** Solo

**Technologies used:** HTML, CSS, Node.js, MongoDB

**Chosen theme:** promoting handicraft


## Project

It will be a website about a little shop (Name in progress) that sells homemade cooking and drinks (tea, coffee,..). Customers will have their account and they will be able to order products on the website (and then pick it up at the shop), to leave reviews on the products and to see a calendar about the events the shop promotes.

## Functionalities (in order of priorities)
1. Sign up, sign in, session sytem
2. Online order (basket system)
3. Product reviews
4. Searchbar
5. Manage your account
6. Forgotten password
7. API (calendar?)
8. Contact form
9. Newsletter (order confirmation ?)

## Mock-up
  
**Home Page**

<img src="https://github.com/NoemieUylenbroeck/npProject/blob/main/public/Images/readme/Homepage.jpg?raw=true" alt="home page" width="250"/>

**Store Page**

<img src="https://github.com/NoemieUylenbroeck/npProject/blob/main/public/Images/readme/Storepage.jpg?raw=true" alt="home page" width="250"/>

**Products/Reviews Page**

<img src="https://github.com/NoemieUylenbroeck/npProject/blob/main/public/Images/readme/Productpage.jpg?raw=true" alt="home page" width="250"/>

**Contact Page**

<img src="https://github.com/NoemieUylenbroeck/npProject/blob/main/public/Images/readme/Contactpage.jpg?raw=true" alt="home page" width="250"/>

**Calendar Page**

<img src="https://github.com/NoemieUylenbroeck/npProject/blob/main/public/Images/readme/Calendarpage.jpg?raw=true" alt="home page" width="250"/>

**Manage your account Page**

<img src="https://github.com/NoemieUylenbroeck/npProject/blob/main/public/Images/readme/accountpage.jpg?raw=true" alt="home page" width="200"/>

**Basket Page**

<img src="https://github.com/NoemieUylenbroeck/npProject/blob/main/public/Images/readme/Basketpage.jpg?raw=true" alt="home page" width="250"/>

**Sign In/Up Page**

<img src="https://github.com/NoemieUylenbroeck/npProject/blob/main/public/Images/readme/signInUppage.jpg?raw=true" alt="home page" width="250"/>


## Graphical charter

In progress. It will be something light. The footer and the navbar will be recurring.

## Database
| Collection Name | Field 1 | Field 2 | Field 3| Field 4 | Field 5|
|---|---|---|---|---|---|
| Users | users_id | username | password | email |subscribed?|
| Orders | orders_id | user_id | basket(object of products_id) | / | / |
| Products | products_id | description | price | review_id | / |
| Reviews | reviews_id | user_id | product_id | review | / |
