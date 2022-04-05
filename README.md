# MyBillBook APP Frontend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Features

* Built a Home page and Item management functionality
  1. Home Page: \
    On the home page, implemented Login functionality along with designs\
    After successful login:-
      * Save user details in local storage. Used these details to show user information.
      * Redirects to items page route.
  2. Item Page: \
    Item creation, edit & list view.
      * Save inputs taken from the item creation form to client-side storage
      * Fetches all saved items from storage and display the list
      * When clicked on any item in the list, the clicked item data get filled in the form and user can modify fields and save the item.
* Client-side item search based on item name and item code.
* Alphabetical sorting of the item name
* Reactiveness of form and table, i.e changes done on the form and saved, reflects on the table in real-time

### API’s Endpoints

1. For Requesting OTP:\
    End point: /api/web/request_otp\
    Request body:\
    &emsp;&emsp;&emsp;&emsp; {\
    &emsp;&emsp;&emsp;&emsp;&emsp; mobile_number: “your mobile number”\
    &emsp;&emsp;&emsp;&emsp; }
2. For Login:\
    End point : /api/web/authenticate\
    Request body :\
    &emsp;&emsp;&emsp;&emsp; {\
    &emsp;&emsp;&emsp;&emsp;&emsp; mobile_number: “your mobile number”,\
    &emsp;&emsp;&emsp;&emsp;&emsp; otp_code: “otp code received on mobile”\
    &emsp;&emsp;&emsp;&emsp; }
