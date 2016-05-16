console.log('...login.js loaded');

// Open Login
function openLogin(){
$("#login").on('click', function(){
    $("#login-modal").toggle();
});
};

// Close Login
function closeLogin(){
  $('.close.login').on('click', function(){
    $('#login-modal').toggle();
  });
};

// Open Signup
function openSignup(){
$("#signup").on('click', function(){
    $("#signup-modal").toggle();
});
};

// Close Signup
function closeSignup(){
  $('.close.signup').on('click', function(){
    $('#signup-modal').toggle();
  });
};

// Open Help
function openHelp(){
  $('#help').on('click', function(){
    $('#help-modal').toggle();
});
}

// Close Help
function closeHelp(){
  $('.close.help').on('click', function(){
    $('#help-modal').toggle();
  });
};

// Send request to create a user
function createUser(userData, callback){
  $.ajax({
    method: 'post',
    url: '/api/users',
    data: {user: userData},
    success: function(data){
      callback(data);
    }
  });
}

// Create Form Handler
function setCreateUserFormHandler(){
  $('form#signup-form').on('submit', function(e){
    e.preventDefault();

    // Obtain the username from form
    var usernameField = $(this).find('input[name="username"]');
    var usernameText = usernameField.val();
    usernameField.val('');

    // Obtain the password from form
    var passwordField = $(this).find('input[name="password"]');
    var passwordText = passwordField.val();
    passwordField.val('');

    // Organize the data to be sent
    var userData = {username: usernameText, password: passwordText};
    console.log('userdata', userData);

    // Create a new user
    createUser(userData, function(user){
      console.log(user);
    });

  });
}

// Update User
function updateUser(userData, callback){
  $.ajax({
    method: 'patch',
    url: '/api/users',
    data: {user: userData},
    success: function(data){
      callback(data);
    }
  });
}

// Login User
function logInUser(usernameAttempt, passwordAttempt, callback){
  $.ajax({
    method: 'post',
    url: '/api/users/authenticate',
    data: {username: usernameAttempt, password: passwordAttempt},
    success: function(data){
      callback(data);
    }
  });
}

// Login Form Handler
function setLogInFormHandler(){
  $('form#login-form').on('submit', function(e){
    e.preventDefault();

    var usernameField = $(this).find('input[name="username"]');
    var usernameText = usernameField.val();
    usernameField.val('');

    var passwordField = $(this).find('input[name="password"]');
    var passwordText = passwordField.val();
    passwordField.val('');

    var userData = {username: usernameText, password: passwordText};

    logInUser(usernameText, passwordText, function(data){
      $.cookie('token', data.token);  // save the token as a cookie
      console.log('Token:', $.cookie('token') );
      $("#login-modal").toggle();
    });

  });
}

$(function(){
  setCreateUserFormHandler();
  setLogInFormHandler();
  openLogin();
  closeLogin();
  openSignup();
  closeSignup();
  openHelp();
  closeHelp();
});
