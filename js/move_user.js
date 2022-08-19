console.log("move_user.js")
  
  $('.messageButton').on('click', function () {    
    var user_name = $(this).closest(".account_girl ").find(".user_name").text();
    var user_name_count = $(this).closest(".account_girl ").find(".user_name").attr('class');
    var user_accountPhoto = $(this).closest(".account_girl ").find('img').get(0).src;
    var user_account = $(this).closest(".account_girl ").find(".account_style").text();
    var click_one = 1;

      localStorage.removeItem("user_name"); 
    localStorage.removeItem("user_accountPhoto"); 
    localStorage.removeItem("user_name_count"); 
    localStorage.removeItem("value_click"); 
    localStorage.removeItem("user_account"); 
    localStorage.clear(); 


    localStorage.setItem("user_name", user_name); 
    localStorage.setItem("user_accountPhoto", user_accountPhoto);
    localStorage.setItem("user_name_count", user_name_count);
    localStorage.setItem("value_click", click_one);
    localStorage.setItem("user_account", user_account);
    document.location.href = 'users/users.html';
  
  });  
  
  
