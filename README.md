# Introduction 

This projects aimed at providing a working and usable test framework using Cypress and Azure DevOps pipelines to help setup continuous testing and continuous delivery.

In this demo I will be testing Help & FAQs page of ASOS.com for different markets (UK and France)

# Getting Started

- Download this repo
- Open in VS Code
- Run `npm install` command on root directory to install required packages
- Add cypress.env.json file with following property
  
  ```
  {
    "MARKET": "uk"
  }
  ```
  Note: change the above property value to appropriate market to run tests on different market.

# Build and Test

Run following command in command line or VS Code terminal

```
npm run cy:open
```