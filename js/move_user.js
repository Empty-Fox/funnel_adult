
    $(document).ready(function () {
  
  $('.messageButton').on('click', function () {    
    var user_name = $(this).closest(".account_girl ").find(".user_name").text();
    var user_name_count = $(this).closest(".account_girl ").find(".user_name").attr('class');
    var user_accountPhoto = $(this).closest(".account_girl ").find('img').get(0).src;
    var click_one = 1;

    localStorage.setItem("user_name", user_name); 
    localStorage.setItem("user_accountPhoto", user_accountPhoto);
    localStorage.setItem("user_name_count", user_name_count);
    localStorage.setItem("value_click", click_one);
    document.location.href = 'users/users.html';
  
  });  
  
  var user_name_ = localStorage.getItem("user_name");
  var user_accountPhoto_ = localStorage.getItem("user_accountPhoto");
  var user_name_count_ = localStorage.getItem("user_name_count");
  var click_two = localStorage.getItem("value_click");  

   if (click_two == 1) { 
    $('.userName_val').text(user_name_); 
    $(".user_accountPhoto").attr("src",user_accountPhoto_);
    $( ".userName_val" ).addClass( user_name_count_ );


    console.log('user_name_: '+user_name_);
    console.log('user_accountPhoto_: '+user_accountPhoto_);
    console.log('user_name_count_: '+user_name_count_);
    console.log('value_click: '+click_two);

    localStorage.removeItem("user_name"); 
    localStorage.removeItem("user_accountPhoto"); 
    localStorage.removeItem("user_name_count"); 
    localStorage.removeItem("value_click"); 
    localStorage.clear(); 
  } else {} 
  
  });