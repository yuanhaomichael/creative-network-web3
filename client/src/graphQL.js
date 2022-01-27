import invoiceContent from './InvoiceContent'

const getByBussinessId = () => {
  return fetch("https://gql.waveapps.com/graphql/public", {
    method: "POST",
    headers: {
      Authorization: "Bearer Plfdo8v2HJAojj88UHEonbeDARCIMK",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query { business(id: "QnVzaW5lc3M6M2JlOWMxY2EtNTBmOS00ZjAwLWFkNTYtN2IxNTAzMWI5ODdk") {
          id
          customers(page: 1, pageSize: 50, sort: [NAME_ASC]) {
            pageInfo {
              currentPage
              totalPages
              totalCount
            }
            edges {
              node {
                id
                name
                email
                currency {
                  code
                }
                lastName
              }
            }
          }
        }}`,
      variables: {},
    }),
  })
    .then((r) => r.json())
    .then((data) => data);
};

const fecthData = () => {
  fetch("https://gql.waveapps.com/graphql/public", {
    method: "POST",
    headers: {
      Authorization: "Bearer Plfdo8v2HJAojj88UHEonbeDARCIMK",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query { businesses(page: 1, pageSize: 10) {
            pageInfo {
              currentPage
              totalPages
              totalCount
            }
            edges {
              node {
                id
                name
                isClassicAccounting
                isClassicInvoicing
                isPersonal
              }
            }
          }}`,
      variables: {},
    }),
  })
    .then((r) => r.json())
    .then((data) => data);
};

const createCustomer = (name, email, city, postalCode, addressLine1, addressLine2) => {
  let input = {
    businessId: "QnVzaW5lc3M6M2JlOWMxY2EtNTBmOS00ZjAwLWFkNTYtN2IxNTAzMWI5ODdk",
    name: name,
    email: email,
    address: {
      city: city,
      postalCode: postalCode,
      addressLine1: addressLine1,
      addressLine2: addressLine2,
    },
  };

  let query = `mutation ($input: CustomerCreateInput!) {
        customerCreate(input: $input) {
          didSucceed
          inputErrors {
            code
            message
            path
          }
          customer {
            id
            name
            firstName
            lastName
            email
            address {
              addressLine1
              addressLine2
              city
              province {
                code
                name
              }
              country {
                code
                name
              }
              postalCode
            }
            currency {
              code
            }
          }
         }
      }`;
  return fetch("https://gql.waveapps.com/graphql/public", {
    method: "POST",
    headers: {
      Authorization: "Bearer Plfdo8v2HJAojj88UHEonbeDARCIMK",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: {
        input,
      },
    }),
  })
    .then((r) => r.json())
    .then((data) => data);
};

const createProduct = (name, unitPrice) => {
  let input = {
    businessId: "QnVzaW5lc3M6M2JlOWMxY2EtNTBmOS00ZjAwLWFkNTYtN2IxNTAzMWI5ODdk",
    name: name,
    unitPrice: unitPrice,
    incomeAccountId:
      "QWNjb3VudDoxMjY0MDgzOTUzMjIwODcwMzEyO0J1c2luZXNzOjNiZTljMWNhLTUwZjktNGYwMC1hZDU2LTdiMTUwMzFiOTg3ZA==",
    expenseAccountId:
      "QWNjb3VudDoxMjY0MDgzOTUzMjIwODcwMzEyO0J1c2luZXNzOjNiZTljMWNhLTUwZjktNGYwMC1hZDU2LTdiMTUwMzFiOTg3ZA==",
  };

  let query = `mutation ($input: ProductCreateInput!) {
    productCreate(input: $input) {
      didSucceed
      inputErrors {
        code
        message
        path
      }
      product {
        id
        name
        description
        unitPrice
        incomeAccount {
          id
          name
        }
        expenseAccount {
          id
          name
        }
        isSold
        isBought
        isArchived
        createdAt
        modifiedAt
      }
    }
  }`;

  return fetch("https://gql.waveapps.com/graphql/public", {
    method: "POST",
    headers: {
      Authorization: "Bearer Plfdo8v2HJAojj88UHEonbeDARCIMK",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: {
        input,
      },
    }),
  })
    .then((r) => r.json())
    .then((data) => data);
};

const fecthProductsIncomeId = () => {
  return fetch("https://gql.waveapps.com/graphql/public", {
    method: "POST",
    headers: {
      Authorization: "Bearer Plfdo8v2HJAojj88UHEonbeDARCIMK",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query {
        business(id: "QnVzaW5lc3M6M2JlOWMxY2EtNTBmOS00ZjAwLWFkNTYtN2IxNTAzMWI5ODdk") {
          id
          accounts(subtypes: [INCOME, DISCOUNTS, OTHER_INCOME]) {
            edges {
              node {
                id
                name
                subtype {
                  name
                  value
                }
              }
            }
          }
        }
      }`,
      variables: {},
    }),
  })
    .then((r) => r.json())
    .then((data) => data);
};

const fecthListOfProducs = () => {
  return fetch("https://gql.waveapps.com/graphql/public", {
    method: "POST",
    headers: {
      Authorization: "Bearer Plfdo8v2HJAojj88UHEonbeDARCIMK",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query { business(id: "QnVzaW5lc3M6M2JlOWMxY2EtNTBmOS00ZjAwLWFkNTYtN2IxNTAzMWI5ODdk") {
          id
          products(page: 1, pageSize: 30) {
            pageInfo {
              currentPage
              totalPages
              totalCount
            }
            edges {
              node {
                id
                name
                description
                unitPrice
                defaultSalesTaxes {
                  id
                  name
                  abbreviation
                  rate
                }
                isSold
                isBought
                isArchived
                createdAt
                modifiedAt
              }
            }
          }
        }}`,
      variables: {},
    }),
  })
    .then((r) => r.json())
    .then((data) => data);
};

//create Invoice
const createInvoice = (
  customerId,
  invoiceDate,
  dueDate,
  name,
  unitPrice,
  invoiceNumber,
  totalInput,
  dep1,
  dep2,
  forInvoiceDueDate1,
  forInvoiceDueDate2,
  product
) => {
  let input = {
    businessId: "QnVzaW5lc3M6M2JlOWMxY2EtNTBmOS00ZjAwLWFkNTYtN2IxNTAzMWI5ODdk",
    customerId: customerId,
    items: [
      {
        productId: product,
        unitPrice: unitPrice,
        description: name,
      },
    ],
    hideDescription: true,
    invoiceDate: invoiceDate,
    dueDate: dueDate,
    invoiceNumber: invoiceNumber,
    memo: `ACH/Wire Payment - Bank Details: \n \n LEMONTREE MEDIA LLC \n Institution: ${invoiceContent.institution} \n Account Number: ${invoiceContent.accountNumber} \n Account Type: ${invoiceContent.accountType} \n ABA/Routing Number: ${invoiceContent.aba} \n SWIFT Code: ${invoiceContent.swift_code} \n \n _____ \n \n - Estimated Project Fees - $${totalInput} \n - Payment Terms: A ${dep1}% deposit is due upon signing, with remaining${dep2}% due net 15 \n - Payment Schedule: \n - ${dep1}% Payment: ${forInvoiceDueDate1} \n -${dep2}% Payment: ${forInvoiceDueDate2}`,
  };

  let query = `mutation ($input: InvoiceCreateInput!) {
    invoiceCreate(input: $input) {
      didSucceed
      inputErrors {
        message
        code
        path
      }
      invoice {
        id
        createdAt
        modifiedAt
        pdfUrl
        viewUrl
        status
        title
        subhead
        invoiceNumber
        invoiceDate
        poNumber
        customer {
          id
          name
        }
        currency {
          code
        }
        dueDate
        amountDue {
          value
          currency {
            symbol
          }
        }
        amountPaid {
          value
          currency {
            symbol
          }
        }
        taxTotal {
          value
          currency {
            symbol
          }
        }
        total {
          value
          currency {
            symbol
          }
        }
        exchangeRate
        footer
        memo
        disableCreditCardPayments
        disableBankPayments
        itemTitle
        unitTitle
        priceTitle
        amountTitle
        hideName
        hideDescription
        hideUnit
        hidePrice
        hideAmount
        items {
          product {
            id
            name
            # Can add additional product fields here
          }
          description
          quantity
          price
          subtotal {
            value
            currency {
              symbol
            }
          }
          total {
            value
            currency {
              symbol
            }
          }
          account {
            id
            name
            subtype {
              name
              value
            }
            # Can add additional account fields here
          }
          taxes {
            amount {
              value
            }
            salesTax {
              id
              name
              # Can add additional sales tax fields here
            }
          }
        }
        lastSentAt
        lastSentVia
        lastViewedAt
      }
    }
  }`;

  return fetch("https://gql.waveapps.com/graphql/public", {
    method: "POST",
    headers: {
      Authorization: "Bearer Plfdo8v2HJAojj88UHEonbeDARCIMK",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: {
        input,
      },
    }),
  })
    .then((r) => r.json())
    .then((data) => data);
};

// const aproveInvoice = (id) => {
//   let input = {
//     invoiceId: id,
//   };

//   let query = `mutation ($input: InvoiceApproveInput!) {
//       invoiceApprove(input: $input) {
//           didSucceed
//           invoice {
//             id
//           }
//         }
//       }`;
//   return fetch("https://gql.waveapps.com/graphql/public", {
//     method: "POST",
//     headers: {
//       Authorization: "Bearer Plfdo8v2HJAojj88UHEonbeDARCIMK",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       query,
//       variables: {
//         input,
//       },
//     }),
//   })
//     .then((r) => r.json())
//     .then((data) => data);
// };

//email send
// const sentInvoiceToMail = (id) => {
//   let input = {
//     invoiceId: id,
//     to: ["amustufa37@gmail.com", "tehseen.siddiq@gmail.com"],
//     message: "Testing Invoice",
//     attachPDF: true,
//   };
//   let query = `mutation ($input: InvoiceSendInput!) {
//     invoiceSend(input: $input) {
//       didSucceed
//       inputErrors {
//         message
//         code
//         path
//       }
//     }
//   }`;
//   return fetch("https://gql.waveapps.com/graphql/public", {
//     method: "POST",
//     headers: {
//       Authorization: "Bearer Plfdo8v2HJAojj88UHEonbeDARCIMK",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       query,
//       variables: {
//         input,
//       },
//     }),
//   })
//     .then((r) => r.json())
//     .then((data) => data);
// };
//list of invoices
const listOfInvoices = () => {
  return fetch("https://gql.waveapps.com/graphql/public", {
    method: "POST",
    headers: {
      Authorization: "Bearer Plfdo8v2HJAojj88UHEonbeDARCIMK",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query { business(id: "QnVzaW5lc3M6M2JlOWMxY2EtNTBmOS00ZjAwLWFkNTYtN2IxNTAzMWI5ODdk") {
        id
        isClassicInvoicing
        invoices(page: 1, pageSize: 100) {
          pageInfo {
            currentPage
            totalPages
            totalCount
          }
          edges {
            node {
              id
              createdAt
              modifiedAt
              pdfUrl
              viewUrl
              status
              title
              subhead
              invoiceNumber
              invoiceDate
              poNumber
              customer {
                id
                name
                # Can add additional customer fields here
              }
              currency {
                code
              }
              dueDate
              amountDue {
                value
                currency {
                  symbol
                }
              }
              amountPaid {
                value
                currency {
                  symbol
                }
              }
              taxTotal {
                value
                currency {
                  symbol
                }
              }
              total {
                value
                currency {
                  symbol
                }
              }
              exchangeRate
              footer
              memo
              disableCreditCardPayments
              disableBankPayments
              itemTitle
              unitTitle
              priceTitle
              amountTitle
              hideName
              hideDescription
              hideUnit
              hidePrice
              hideAmount
              items {
                product {
                  id
                  name
                  # Can add additional product fields here
                }
                description
                quantity
                price
                subtotal {
                  value
                  currency {
                    symbol
                  }
                }
                total {
                  value
                  currency {
                    symbol
                  }
                }
                account {
                  id
                  name
                  subtype {
                    name
                    value
                  }
                  # Can add additional account fields here
                }
                taxes {
                  amount {
                    value
                  }
                  salesTax {
                    id
                    name
                    # Can add additional sales tax fields here
                  }
                }
              }
              lastSentAt
              lastSentVia
              lastViewedAt
            }
          }
        }
        }}`,
      variables: {},
    }),
  })
    .then((r) => r.json())
    .then((data) => data);
};

// const deleteInvoice = () => {
//   let input = {
//     invoiceId: "QnVzaW5lc3M6M2JlOWMxY2EtNTBmOS00ZjAwLWFkNTYtN2IxNTAzMWI5ODdkO0ludm9pY2U6MTMwNTE2Mzg3MzUxNDQ3OTkxNA=="
//   };
//   let query = `mutation ($input: InvoiceDeleteInput!) {
//     invoiceDelete(input: $input) {
//       didSucceed
//       inputErrors {
//         message
//         code
//         path
//       }
//     }
//   }`;
//   return fetch("https://gql.waveapps.com/graphql/public", {
//     method: "POST",
//     headers: {
//       Authorization: "Bearer Plfdo8v2HJAojj88UHEonbeDARCIMK",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       query,
//       variables: {
//         input,
//       },
//     }),
//   })
//     .then((r) => r.json())
//     .then((data) => data);
// };

const deleteCustomer = () => {
  let input = {
    id: "QnVzaW5lc3M6M2JlOWMxY2EtNTBmOS00ZjAwLWFkNTYtN2IxNTAzMWI5ODdkO0N1c3RvbWVyOjU4OTMzMjU5",
  };
  let query = `mutation ($input: CustomerDeleteInput!) {
    customerDelete(input: $input) {
      
      didSucceed
      inputErrors {
        message
        code
        path
      }
    }
  }`;
  return fetch("https://gql.waveapps.com/graphql/public", {
    method: "POST",
    headers: {
      Authorization: "Bearer Plfdo8v2HJAojj88UHEonbeDARCIMK",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: {
        input,
      },
    }),
  })
    .then((r) => r.json())
    .then((data) => data);
};

export {
  getByBussinessId,
  createCustomer,
  fecthData,
  createProduct,
  fecthProductsIncomeId,
  fecthListOfProducs,
  createInvoice,
  deleteCustomer,
  listOfInvoices,
};
