## Reproduction

Steps to reproduce the problem

1. clone repo
2. start meteor app
3. click button 'go to sign in / sign up page'
4. click 'Register' link to sign up
5. Enter name, email, password and password confirmation
6. click 'Register' button
7. observe 'Exception...' error in terminal

Expected:
  - new user would be added to the users collection
  - app would route to the 'new_account' page

Actual:
  - no user was created in users collection
  - app routed back to the home page

NOTE: If you remove the following from the at_config.js, the problem does not occur:

  AccountsTemplates.addField({
    _id: 'username_and_email',
    type: 'text',
    displayName: 'Name or Email',
    placeholder: "name or email",
    required: true
  });

See accts2/both/at_config.js for configuration

See accts2/both/routes.js for router configuration

See accts2/client/views/ for each of the html/js views