//////////////////time in message minutes with 0 /////////////////
function minutes_with_leading_zeros(today) {
  return (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
}

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
console.log("data.js new")
if ($("#chat-title").find(".user_name").hasClass('user_name1')) {
  console.log('user_name1')
  var botMessage = [["Hey dude,💜I have something hot for you", "Do you wanna to see nudes?",
    "Just wait a few seconds . . . I'll send you of my 🍑 and 🍒",
    "Like it ?"]];
  var photoUser1 = ["images/10.jpg"]
}
if ($("#chat-title").find(".user_name").hasClass('user_name2')) {
  console.log('user_name2')
  var botMessage = [["Hey dude,💜I have something hot for you", "Do you wanna to see nudes?",
    "Just wait a few seconds . . . I'll send you of my 🍑 and 🍒",
    "Like it ?"]];
  var photoUser1 = ["images/10.jpg"]
}
if ($("#chat-title").find(".user_name").hasClass('user_name3')) {
  console.log('user_name3')
  var botMessage = [["Hey dude,💜I have something hot for you", "Do you wanna to see nudes?",
    "Just wait a few seconds . . . I'll send you of my 🍑 and 🍒",
    "Like it ?"]];
  var photoUser1 = ["images/10.jpg"]
}
if ($("#chat-title").find(".user_name").hasClass('user_name4')) {
  var botMessage = [["Hey dude,💜I have something hot for you", "Do you wanna to see nudes?",
    "Just wait a few seconds . . . I'll send you of my 🍑 and 🍒",
    "Like it ?"]];
  var photoUser1 = ["images/10.jpg"]
}
if ($("#chat-title").find(".user_name").hasClass('user_name5')) {
  var botMessage = [["Hey dude,💜I have something hot for you", "Do you wanna to see nudes?",
    "Just wait a few seconds . . . I'll send you of my 🍑 and 🍒",
    "Like it ?"]];
  var photoUser1 = ["images/10.jpg"]
}
if ($("#chat-title").find(".user_name").hasClass('user_name6')) {
  var botMessage = [["Hey dude,💜I have something hot for you", "Do you wanna to see nudes?",
    "Just wait a few seconds . . . I'll send you of my 🍑 and 🍒",
    "Like it ?"]];
  var photoUser1 = ["images/10.jpg"]
}


url_image = '';

var today = new Date();
var time = today.getHours() + ":" + minutes_with_leading_zeros(today);
var counter = 0, timer = null, I, timer_v = 2000;
setTimeout(function() { 
  addMessageBot_first(["message-row", "other-message"], botMessage)
}, 2000);

function timer_bot(counter) {
  I = setInterval(function () {
    if (timer !== null) { return };
    if (counter++ == 3) {
      setTimeout(function() { 
        addMessageBot(["message-row", "other-message"], botMessage);
      counter = 0;
      }, 2000);
    
    }
  }, timer_v);
}
timer_bot(counter);

function enterMessage() {
  counter = 0;
  var yourMessage = document.getElementById("myTextField").value;
  null == yourMessage || "" == yourMessage || (addMessage(["message-row", "you-message"], yourMessage),
    document.getElementById("myTextField").value = "");
}

$(document).on('click', '#id', function () {
  enterMessage();
})

var clicks1 = 0, bclicks1 = 0;
var bclicks2 = 0;
function addMessageBot_first(classList, message) {
  var timeTyping = 5e3
    , messageRow = document.createElement("div")
    , messageContent = document.createElement("div")
    , messageImage = document.createElement("img")
    , messageText = document.createElement("div")
    , messageText_p1 = document.createElement("p")
    , messageText_p2 = document.createElement("p");

  if (messageRow.classList.add(...classList),
    messageContent.classList.add("message-content"),
    messageText.classList.add("message-text"),
    messageRow.appendChild(messageContent),
    messageContent.appendChild(messageImage),
    messageContent.appendChild(messageText),
    messageText.appendChild(messageText_p1),
    messageText.appendChild(messageText_p2),
    messageText_p2.classList.add("messageText_p2"),

    (!document.getElementById("signalPresent1").style.opacity)) {
    bclicks2 += 1;
    var today = new Date();
    var time = today.getHours() + ":" + minutes_with_leading_zeros(today);
    document.getElementById("container1").appendChild(messageRow),
      messageText_p1.innerText = "typing now ....";

    setTimeout((function () {
      messageText_p1.innerText = "",
        messageText_p1.innerText = message[0][0];
      messageText_p2.innerText = time;
    }
    ), timeTyping);    
    var picture = document.images[0].src;
    messageImage.classList.add("message_content_photo1"),
      messageImage.src = picture
  }
}

function addMessageBot(classList, message) {
  var timeTyping = 5e3
    , messageRow = document.createElement("div")
    , messageContent = document.createElement("div")
    , messageImage = document.createElement("img")
    , messageText = document.createElement("div")
    , messageText_p1 = document.createElement("p")
    , messageText_p2 = document.createElement("p");

  if (messageRow.classList.add(...classList),
    messageContent.classList.add("message-content"),
    messageText.classList.add("message-text"),
    messageRow.appendChild(messageContent),
    messageContent.appendChild(messageImage),
    messageContent.appendChild(messageText),
    messageText.appendChild(messageText_p1),
    messageText.appendChild(messageText_p2),
    messageText_p2.classList.add("messageText_p2"),

    (!document.getElementById("signalPresent1").style.opacity)) {
    bclicks1 += 1;
    var today = new Date();
    var time = today.getHours() + ":" + minutes_with_leading_zeros(today);
    document.getElementById("container1").appendChild(messageRow),
      messageText_p1.innerText = "typing now ....";

    setTimeout((function () {
      messageText_p1.innerText = "",
        messageText_p1.innerText = message[0][bclicks1];
      messageText_p2.innerText = time;
      if (bclicks1 == 2) {
        clearInterval(I);
        setTimeout(function () {
          addMessageBotTimer1(["message-row", "other-message"], photoUser1);
          timer_bot(counter);
        }, 4000)
      }
      if (bclicks1 == 3) {
        document.getElementById("opacityBlock").style.display = 'block';
        document.querySelectorAll(".stylick").forEach(a => a.style.display = "block");
        $('input').blur();
        clearInterval(I);
        timer = null;
      }
    }
    ), timeTyping);
    var picture = document.images[0].src;
    messageImage.classList.add("message_content_photo1"),
      messageImage.src = picture
  }
}
function addMessage(classList, message) {
  var messageRow = document.createElement("div")
    , messageContent = document.createElement("div")
    , messageText = document.createElement("div");
  messageRow.classList.add(...classList),
    messageContent.classList.add("message-content"),
    messageText.classList.add("message-text"),
    messageText_p1 = document.createElement("p")
    , messageText_p2 = document.createElement("p");
  messageText.appendChild(messageText_p1),
    messageText.appendChild(messageText_p2),
    messageText_p2.classList.add("messageText_p2"),
    messageText_p1.innerText = message,
    messageRow.appendChild(messageContent),
    messageContent.appendChild(messageText);
  var today = new Date();
  var time = today.getHours() + ":" + minutes_with_leading_zeros(today);
  messageText_p2.innerText = time;
  (document.getElementById("container1").appendChild(messageRow))
}
function addMessageBotTimer1(classList, message) {
  var messageRow = document.createElement("div");
  messageRow.classList.add(...classList);
  var messageContent = document.createElement("div");
  messageContent.classList.add("message-content"),
    messageRow.appendChild(messageContent);
  var messageImage = document.createElement("img")
    , messageText = document.createElement("div")
    , messageImageText = document.createElement("img")
    , text = document.createElement("div")
    , messageText_p2 = document.createElement("p");
  messageText.classList.add("message-text"),
    messageContent.append(messageImage),
    messageContent.append(messageText),
    messageImageText.classList.add("message-text_img"),
    messageText.appendChild(text),
    messageText.appendChild(messageImageText),
    messageText.appendChild(messageText_p2),
    messageText_p2.classList.add("messageText_p2");
  var i = 0
    , str1 = message[0][i];
  str1.length > 13 && (str1 = str1.substring(0, 10) + "..."),
    clicks1 += 1;
  var today = new Date();
  var time = today.getHours() + ":" + minutes_with_leading_zeros(today);
  document.getElementById("container1").appendChild(messageRow),
    text.innerText = "typing....",
    setTimeout((function () {
      text.innerText = "",
        messageImageText.classList.add("message-text_img"),
        messageImageText.src = photoUser1[0],
        messageText_p2.innerText = time;
    }
    ), 1e3);
  var picture = document.images[0].src;
  messageImage.classList.add("message_content_photo1"),
    messageImage.src = picture
}
$(".enter_mes").on("keyup", (function (e) {
  13 == e.which && $("#id").click()
}
));