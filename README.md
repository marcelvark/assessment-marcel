I created this repository for an assessment that was part of a job application. I had no previous experience with Angular, SCSS, or RXJS. I watched a few tutorials on Angular, and used info from various online sources for the rest.

The goal was to assess Angular skills; basic setup, creating pages, hooking up (fake) API calls with RXJS, and styling based on a simple design. I had to make a mockup with login functionality, including login- and dashboard pages, using Components as I saw fit. User logged in state needed to be preserved over page reloads. Server-returned data was supplied in JSON format.

After creating the pages, I added a Service for handling the login mockup. I looked into more advanced RXJS examples, but found it too elaborate to use in the context of this assessment. So I simply stored all mockup server data in sessionStorage. I also believe that using proper database/server/authentication logic should be postponed initially. While it may be essential for the end product, it significantly hinders development. It would only add boilerplate code at this stage.

Using a UI component library was not a part of the assignment, so I chose to stick to SCSS and use the provided styling examples as a starting point. In absence of a UI library I did not add icons either.

Adding good comments was part of the assignment, and I added a bit more than I normally would. The CSS comments are useful I think, but my template files don't need comments yet.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.3.