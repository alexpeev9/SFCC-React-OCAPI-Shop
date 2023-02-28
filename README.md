# 📕 SFCC React OCAPI Shop

- The main focus of this project is working with [OCAPI](https://documentation.b2c.commercecloud.salesforce.com/DOC1/index.jsp?topic=%2Fcom.demandware.dochelp%2FOCAPI%2Fcurrent%2Fusage%2FGettingStartedWithOCAPI.html) - Salesforce B2C's Open Commerce API.

- This project was created with [Create React App](https://github.com/facebook/create-react-app).

### 📌 Requirements

| Name | Version   |
| ---- | :-------- |
| Node | >=18.13.0 |

### 📌 Preview Images

#### Detail Page

![1]

- The project supports Master, Bundle and Base Product

#### Details Page - Selected

![2]

- If a specific color is selected the carousel will change for the specific color

#### Cart

![3]

#### Checkout - Shipping Address

![4]

#### Checkout - Shipping Method

![5]

- shipping methods are retrieved from the database

![6]

#### Checkout - Billing Address

![7]

- To prevent a user from writing the same billing address the information from the shipping address is copied here.

#### Checkout - Payment Info

![8]

#### Checkout - Payment Method

![9]

- Payment card types are retrieved from the database. Each type of card has its validation that is applied.

![10]

#### Order

![11]

#### Error Page

![12]

<!-- MARKDOWN LINKS & IMAGES -->

[1]: metadata/images/1-details.png
[2]: metadata/images/2-details-selected.png
[3]: metadata/images/3-cart.png
[4]: metadata/images/4-checkout-step-1.png
[5]: metadata/images/5-checkout-step-2.png
[6]: metadata/images/6-checkout-step-2-dropdown.png
[7]: metadata/images/7-checkout-step-3.png
[8]: metadata/images/8-checkout-step-4.png
[9]: metadata/images/9-checkout-step-5.png
[10]: metadata/images/10-checkout-step-5-validation.png
[11]: metadata/images/11-order.png
[12]: metadata/images/12-not-found.png

### 📌 Business Manager Configuration

- Be sure to update your **Open Commerce API Settings** from the Business Manager using the data from **metadata/apiSettings.json**

- Import **Content Assets** from **metadata/contentAssets.xml**

- After you are done you can delete the **metadata** folder

### 📌 Files Configuration

- Create **.env** file next to **.env.example** and fill it with your settings

- Because the **OCAPI** can't work with localhost:3000, you need to **bypass** the cors configurations.
- ⚠️ Open: `C:\Windows\System32\drivers\etc\hosts` as administrator and on the last row type `127.0.0.1 proxy.info`.

### 📌 Project Setup

- In your console run:

```shell
npm install
npm run start
```

- Now you can access your project at:

`http://proxy.info:3000`
