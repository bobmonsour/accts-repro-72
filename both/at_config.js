AccountsTemplates.configureRoute('signIn', {
  name: 'signin',
  path: '/signin',
  template: 'signin',
  redirect: '/signedin'
});

AccountsTemplates.configureRoute('signUp', {
  name: 'signUp',
  path: '/signup',
  template: 'signup',
  redirect: '/new_account'
});

AccountsTemplates.addField({
    _id: "username",
    type: "text",
    required: true,
    displayName: "Name",
    placeholder: "your name here"
});

AccountsTemplates.removeField('email');
AccountsTemplates.addField({
    _id: 'email',
    type: 'email',
    required: true,
    displayName: "Email",
    placeholder: "your email address here",
    re: /.+@(.+){2,}\.(.+){2,}/,
    errStr: 'Invalid email'
});

AccountsTemplates.addField({
    _id: 'username_and_email',
    type: 'text',
    displayName: 'Name or Email',
    placeholder: "name or email",
    required: true
});

AccountsTemplates.removeField('password');
AccountsTemplates.addField({
    _id: 'password',
    type: 'password',
    required: true,
    // minLength: 6,
    displayName: 'Password',
    placeholder: 'at least six characters'
});

AccountsTemplates.init();
