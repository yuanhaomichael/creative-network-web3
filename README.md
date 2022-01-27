# lemontree-final

```bash
npm install

npm run start-dev
```

## Case Studies Testimonial

- For Modal Body Text:

  - Story Text: In `HomepageTestimonialList.js` [Component](https://github.com/LemonTree-Media/lemontree-final/blob/master/client/src/components/Homepage/HomepageTestimonialList.js) on -Line Number 28,43,58 & 73 (Array)

  - The Challenge Text: In `HomepageTestimonialList.js` [Component](https://github.com/LemonTree-Media/lemontree-final/blob/master/client/src/components/Homepage/HomepageTestimonialList.js) on -Line Number 36,51,66 & 80 (Array) Code

## Invoice Notes & Terms

We are using [`InvoiceContent.js`](https://github.com/LemonTree-Media/lemontree-final/blob/master/client/src/InvoiceContent.js) for Creating (Invoice Notes & Terms) and you can access this file from the src Folder Directory.


## Environment Variables

### Local Setup

Please create `.env` file at root directory and save below mentioned environment variables.

1. EMAIL_CLIENT_SECRET(authentication password)
2. MONGODB_URI(MongoDB URI)
3. EMAIL_CLIENT_ADDRESS(google workspace email address)
4. MONGODB_SECRET(MongoDB secret string)

> there's a sample file available in the code named **sample.env**

### Heroku

on heroku where the application is deployed there will be a settings tab in the dashboard you will see a section named **Config Vars** here click on button *`Reveal Config Vars`* then add the above mentioned environment variables over there.
