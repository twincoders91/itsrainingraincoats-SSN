# ItsRainingRaincoats

ItsRainingRaincoats (IRR) is a Singapore charity that aims to build bridges of integration between migrant workers and residents of Singapore. This project is tended for the fulfillment of the academic requirements of the Software engineering Immersive programme from General Assembly, and ItsRainingRaincoats was used as the subject of the study. The contributors to this project are in no way, means or form related to ItsRainingRaincoats.

## Description

Part of IRR's activities includes the collection of donations from people in Singapore and the re-distribution of the items to migrant workers on request. The current state involves a labour-intensive and tedious process, with inefficient means of communication between the migrant workers, donors and volunteers.

The goal of this project is to create a platform on which all three parties can conduct their exchange. For migrant workers, this would mean having a means to put in a request for items, without language being a preventing factor. For donors, this would mean having a means to submit a request to IRR to donate items and to schedule a drop-off of said items. For volunteers, this would take the form of a management platform where they are able to view both types of requests and conduct the quality checks, approvals or rejections, and tracking for the requests.

Three different workflows have been identified, each relating to the specific user group. As of 27 Oct 2022, the basic requirements for the migrant worker and donor workflows have been completed.

## Application Structure

Displayed below is the structure of the application.

```
--> Root (/)
    |--> Language Select (/language-select)
    |--> Login (/login)
    |--> Account Creation (/create-account)
         |--> User Account Creation - Generic account creation, tags the type of account (i.e. migrant worker, donor or volunteer)
         |--> Profile Creation - Only for migrant workers, to facilitate delivery of items
    |--> Home (/home)
         |--> Homepage - Separate views for migrant workers and donors
         |--> Application - Separate views for migrant workers and donors
    |--> Donate (/donate)
         |--> <Shawn to fill up>
    |--> Item Request (/item-request)
         |--> Item Category
              |--> Pre-set Items
              |--> Other requests - Through text inputs or photo inputs
         |--> Item Cart
         |--> Delivery Methods - Delivery to the migrant worker's dormitory or self-pickup
```

## Feature List

1. **Language Select** _(Currently not implemented)_

   - Four option buttons for users to select
   - One option must be selected before the user can proceed
   - Page can be skipped if the user has previously logged in

2. **Login Page**

   - Both username and password inputs must be filled up before the `login` button is enabled
   - An error in submission will be reflected as an `invalid username or password`
   - Users have the option to sign up for a new account from the login page

3. **Account Creation**

   - **User Group Selection**

     - Options for migrant workers, donors and volunteers
     - Selection of an option determines the account creation process for the user group

   - **Donor Account Creation**

     - <Shawn to fill up>

   - **Migrant Worker Account Creation**

     - Split into User Account Creation and Migrant Worker Profile Creation

     - **User Account Creation**

       - Required fields are clearly labelled upon load
       - Front-end validation to ensure the correct password is submitted
       - Back-end validation to ensure the username has not been taken already

     - **Profile Creation**
       - Various input fields for the creation of the migrant worker's profile
       - Required fields are clearly labelled upon load
       - All required fields must be filled in before the users are able to proceed to the next page

4. **Home Page**
5. **Donation Request**
6. **Item Request**

## Potential Future Implementations

- **<Something>**
- **<Something>**
- **<Something>**

## Issues Faced

- **<Something>**
- **<Something>**
