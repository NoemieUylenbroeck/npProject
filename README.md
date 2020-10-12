# npProject
**Type of challenge:** Consolidation

**Duration:** 4 weeks  

**Team challenge:** Solo

**Technologies used:** HTML, CSS, Node.js, MongoDB


## Project


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
<img src="https://github.com/NoemieUylenbroeck/npProject/blob/main/public/Images/readme/Homepage.jpg?raw=true" alt="drawing" width="100"/>

**Store Page**

![store page](https://github.com/NoemieUylenbroeck/npProject/blob/main/public/Images/readme/Storepage.jpg?raw=true)

**Products/Reviews Page**

![products page](https://github.com/NoemieUylenbroeck/npProject/blob/main/public/Images/readme/Productpage.jpg?raw=true)

**Contact Page**

![contact page](https://github.com/NoemieUylenbroeck/npProject/blob/main/public/Images/readme/Contactpage.jpg?raw=true)

**Calendar Page**

![calendar page](https://github.com/NoemieUylenbroeck/npProject/blob/main/public/Images/readme/Calendarpage.jpg?raw=true)

**Manage your account Page**

![account page](https://github.com/NoemieUylenbroeck/npProject/blob/main/public/Images/readme/accountpage.jpg?raw=true)

**Basket Page**

![basket page](https://github.com/NoemieUylenbroeck/npProject/blob/main/public/Images/readme/Basketpage.jpg?raw=true)

**Sign In/Up Page**

![sign In/Up page](https://github.com/NoemieUylenbroeck/npProject/blob/main/public/Images/readme/signInUppage.jpg?raw=true)


## Graphical charter

## Database
| Collection Name | Field 1 | Field 2 | Field 3| Field 4 | Field 5|
|---|---|---|---|---|---|
| Users | users_id | username | password | email |subscribed?|
| Orders | orders_id | user_id | basket(object of products_id) | / | / |
| Products | products_id | description | price | review_id | / |
| Reviews | reviews_id | user_id | product_id | review | / |
