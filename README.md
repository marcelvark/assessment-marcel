I created this repository for an assessment that was part of a job application. I had no previous experience with Angular, SCSS, or RXJS. I watched a few tutorials on Angular, and used info from various online sources for the rest.

The goal was to assess Angular skills; basic setup, creating pages, hooking up (fake) API calls with RXJS, and styling based on a simple design. I had to make a mockup with login functionality, including login- and dashboard pages, using Components as I saw fit. User logged in state needed to be preserved on page reloads. Server-returned data was supplied in JSON format.

After creating the pages, I added a Service for the login mockup. I applied some RXJS there, but based on my current understanding, I did not see how to use it in a meaningful way. RXJS Server login data is simply stored in sessionStorage.

Using a UI component library was not a part of the assignment, so I chose to stick to SCSS and use the provided styling examples as a starting point. In absence of a UI library I did not add icons either.

Adding good comments was part of the assignment, and I added a bit more than I normally would. The CSS comments are useful I think, but my template files don't need comments yet.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.3.