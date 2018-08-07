//$(function(){
//    $(".red-box").fadeOut(2000);
//    $(".green-box").fadeOut(2000);
//    $(".blue-box").fadeOut(2000);
//    $(".red-box").fadeTo(3000, 0.2);
//    $(".green-box").fadeTo(2000, 0.5);
//    $(".blue-box").fadeTo(1000, 0.8);
//    $(".red-box").fadeToggle();
//    $(".green-box").fadeToggle();
//    $(".blue-box").fadeToggle();
//    $(".green-box").fadeOut(1000);
//    $(".green-box").fadeIn(1000);
//    $(".green-box").fadeTo(1000, 0.5);
//});

//$(function(){
//    $(".red-box").fadeTo(1000, 0, function(){
//        $(".green-box").fadeTo(1000, 0, function(){
//            $(".blue-box").fadeTo(1000, 0);
//        });
//    });
//});

//$(function(){
//   $(".lightbox").fadeTo(1000, 1);
//});

// ÜL 1
//$(function () {
//    $("#list").children("li").filter(":even").css("background-color", "rgba(180, 180, 30, 0.8)")
//});

//ÜL 2
//$(function () {
//    $("li").filter(function(index){
//        return index % 3 === 2
//    }).css("background-color", "rgba(180, 180, 30, 0.8)")
//});

//ÜL 3
//$(function () {
//    $("#list").find("li").not(function(index){
//        return index % 3 === 2
//    }).css("background-color", "rgba(180, 180, 30, 0.8)")
//});

/* DOM 3*/


//ÜL 1
//$(function () {
//   $("#content").prepend("Kermo Liblik"); 
//});
//
//ÜL 2
//$(function () {
//    $(".blue-box").after($(".red-box"));
//});
//ÜL 3
//$(function () {
//   $("li").filter(function(index){
//    return index % 3 === 1
//    }).replaceWith("Asendatud Alamelement 1");
//});
////ÜL 4
//$(function () {
//   $("form").children().not("input:text, textarea, br").remove();
//});
//ÜL 5
//$(function(){
//    $(".red-box").empty();
//    $(".green-box").empty();
//    $(".blue-box").empty();
//});
//ÜL 6
//$(function(){
//   var galeryImage = $(".gallery").find("img").first();
//   var images = [
//     "images/laptop-mobile_small.jpg",
//     "images/laptop-on-table_small.jpg",
//     "images/people-office-group-team_small.jpg"
//   ];
//   var i = 0;
//   setInterval(function(){
//      i = (i + 1) % images.length;
//      galeryImage.fadeOut(function(){
//         $(this).attr("src", images[i]);
//         $(this).fadeIn();
//      });
//      console.log(galeryImage.attr("src"));
//   }, 2000);
//});

/* DOM 4*/

//ül 1
//$(function(){
//  var redbox = $(".red-box");
//  redbox.css("width", "160px");
//  var greenbox = $(".green-box");
//  greenbox.css("width", "160px");
//  var bluebox = $(".blue-box");
//  bluebox.css("width", "160px");
//});

//ül 2
//$(function(){
//    $(".red-box").removeClass("red-box").addClass("blue-box");
//    $(".dummy").removeClass("dummy").addClass("green-box");
//});

//ül 3
//$(function(){
//    var firstPar = $("p:first");
//    firstPar.text("<strong>Tere</strong> Maailm!")
//});
//$(function(){
//    var firstPar = $("p:first");
//    firstPar.html("<strong>Tere</strong> Maailm!")
//});

//ül 4
//$(function(){
//    var firstPar = $("p:first");
//    firstPar.append("<strong>. See on just lisatud</strong>")
//});

/* 5. Sündmuste töötlus */

//ül 1
//$(function(){
//    $(".red-box").click(function(){
//        $(".red-box").fadeTo(500, 0.5, function(){
//            $(".green-box").fadeTo(500, 0.5, function(){
//                $(".blue-box").fadeTo(500, 0.5);
//            });
//        });
//    });
//});

//ül 2
//$(function(){
//   $(".green-box").hover(function(){
//       var firstbar = $(".green-box");
//       firstbar.html("Hiir on peal");
//   }); 
//});

//ül 3
//$(function(){
//   var bluebox = $(".blue-box");
//   bluebox.hover(function(){
//      $(this).stop().fadeTo(500, 0.7);
//   }, function(){
//       $(this).stop().fadeTo(500, 1);
//   });
//});

//ül 4
//$(function(){
//   var images = [
//       "images/laptop-mobile_small.jpg",
//       "images/laptop-on-table_small.jpg",
//       "images/people-office-group-team_small.jpg"
//   ];
//   var i = 0;
//   $(".gallery").find("img").on("click", function(){
//      i = (i + 1) % images.length;
//       console.log(i);
//      $(this).fadeOut(function(){
//         $(this).attr("src", images[i]).fadeIn(); 
//      });
//   });
//});

//ül 5
//$(function(){
//   var images = [
//       "images/laptop-mobile_small.jpg",
//       "images/laptop-on-table_small.jpg",
//       "images/people-office-group-team_small.jpg"
//   ];
//   var i = 0;
//   var galleryimage = $(".gallery").find("img");
//   galleryimage.on("click", switchtonextimage);
//    
//   function switchtonextimage(){
//       i = (i + 1) % images.lenght;
//       galleryimage.fadeOut(function()){
//            galleryimage.attr("src", images[i]).fadeIn();
//       });
//   }
//  });

//ül 6
//$(function(){
//    $("#list li").hover(function(){
//       $(this).css("color", "#666"); 
//    });
//});

//ül 7
//$(function() {
//    $("#btn-click").click({user:"Kermo",domain:"example.com"},
//        function(event){
//        greetUser(event.data);
//    });
//    function greetUser(userdata){
//        console.log(userdata);
//        username = userdata.user || "Anonüüm";
//domeen = userdata.domain || "example.com"
//        alert("Tere tulemast " + username + " " + domeen + "!");
//    }
//});
/* 6 Sündmuste töötlus 2*/

//ül 1
//$(function(){
//   var inputFields = $("input:text, input:password, textarea");
//   inputFields.focus(function(){
//      $(this).css("box-shadow", "0 0 4px #666");
//   });
//   inputFields.blur(function(){
//      $
//      (this).css("box-shadow", "none"); 
//   });
//    
//   $("#name").blur(function(){
//      var text = $(this).val();
//       if(text.length < 3){
//           $(this).css("box-shadow", "0 0 4px #811");
//       } else {
//           $(this).css("box-shadow", "0 0 4px #181");
//       }
//   });
//});

//ül 2
//$(function(){
//  $("#checkbox").change(function(){
//        var isChecked = $(this).prop("checked");
//        
//        if(isChecked){
//            $(this).add("label[for='cb']").css("box-shadow", "0 0 4px #181");
//        } else {
//            $(this).add("label[for='cb']").css("box-shadow", "0 0 4px #811");
//        }
//  })
//});

//$(function(){
//    $("#selection").change(function(){
//        var selectedOption = $(this).find(":selected").text();
//        alert("Valisite " + selectedOption);
//    });
//});

//ül 3
//$(function(){
//    $("#form").submit(function(event){
//       var name = $("#name").val();
//       var password = $("#password").val();
//       var message = $("#message").val();
//       var checked = $("#checked").is(":checked");
//        
//      validateNameField(name, event);
//      validatePasswordField(password, event);
//      validateMessageField(message, event);
//      validateCheckboxField(checked, event);
//    });
//});
//
//function validateNameField(name, event){
//    if(!isValidName(name)){
//        $("#name-feedback").text("Palun sisesta vähemalt 2 tähemärki");
//        event.preventDefault();
//    } else {
//        $("#name-feedback").text("");
//    }
//}
////
//function isValidName(name){
//    return name.length >= 2;
//}
//function validatePasswordField(password, event){
//    if(!isValidPassword(password)){
//        $("#password-feedback").text("Parool peab olema vähemalt 6 sümbolit pikk");
//        event.preventDefault();
//    } else {
//        $("#password-feedback").text("");
//    }
//}
//
//function isValidPassword(password){
//    return password.length >= 6;
//}
//function validateMessageField(message, event){
//    if(!isValidMessage(message)){
//        $("#message-feedback").text("Palun sisesta sõnum");
//        event.preventDefault();
//    } else {
//        $("#message-feedback").text("");
//    }
//}
//
//function isValidMessage(message){
//    return message.trim() != "";
//}
//function validateCheckboxField(isChecked, event){
//    if(!isChecked){
//        $("#checkbox-feedback").text("Palun nõustuda sellega");
//        event.preventDefault();
//    } else {
//        $("#message-feedback").text("");
//    }
//}

//ül 4
//$(function(){
//    var form = $("#form");
//    enableFastFeedback(form);
//    
//    form.submit(function(event){
//       var name = $("#name").val();
//       var password = $("#password").val();
//       var message = $("#message").val();
//       var checked = $("#checked").is(":checked");
//        
//      validateNameField(name, event);
//      validatePasswordField(password, event);
//      validateMessageField(message, event);
//      validateCheckboxField(checked, event);
//    });
//});
//
//function enableFastFeedback(formElement){
//    var nameInput = formElement.find("#name");
//    var passwordInput = formElement.find("#password");
//    var messageInput = formElement.find("#message");
//    var checkboxInput = formElement.find("#checkbox");
//    
//    nameInput.blur(function(event){
//       var name = $(this).val();
//       validateNameField(name, event);
//        
//       if(!isValidName(name)){
//           $(this).css({
//               "box-shadow": "0 0 4px #811",
//               "border": "1px solid #600"
//           });
//       } else {
//           $(this).css({
//               "box-shadow": "0 0 4px #181",
//               "border": "1px solid #060"
//           });
//       }
//    });
//    passwordInput.blur(function(event){
//           var password = $(this).val();
//           validatePasswordField(password, event);
//
//           if(!isValidPassword(password)){
//               $(this).css({
//                   "box-shadow": "0 0 4px #811",
//                   "border": "1px solid #600"
//               });
//           } else {
//               $(this).css({
//                   "box-shadow": "0 0 4px #181",
//                   "border": "1px solid #060"
//               });
//           }
//        });
//    messageInput.blur(function(event){
//           var message = $(this).val();
//           validateMessageField(message, event);
//
//           if(!isValidMessage(message)){
//               $(this).css({
//                   "box-shadow": "0 0 4px #811",
//                   "border": "1px solid #600"
//               });
//           } else {
//               $(this).css({
//                   "box-shadow": "0 0 4px #181",
//                   "border": "1px solid #060"
//               });
//           }
//        });
//    checkboxInput.change(function(event){
//       var isChecked = $(this).is(":checked");
//       validateCheckboxField(isChecked, event);
//        
//       if(!isChecked){
//           $(this).add("label[for='cb']").css({
//               "box-shadow": "0 0 4px #811",
//               "border": "1px solid #600"
//           });
//       } else {
//           $(this).add("label[for='cb']").css({
//               "box-shadow": "0 0 4px #181",
//               "border": "1px solid #060"
//           });
//       }
//    });
//}


/* 7. Ajax JQuery */

//ül 0
//$(function(){
//   $("#code").load("js/script.js", function(response, status){
//        if(status == "error"){
//            alert("Ei leia faili");
//        }
//        console.log(response);
//   });
//});

//$(function(){
//    var flickrApiUrl = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
//    $.getJSON(flickrApiUrl, {
//        tags: "sun, beach",
//        tagmode: "any",
//        format: "json"
//    }).done(function(data){
//        console.log(data);
//        $.each(data.items, function(index, item){
//            console.log(item);
//            $("<img>").attr("src", item.media.m).appendTo("#flickr");
//            if(index == 4) {
//                return false;
//            }
//        });
//    }).fail(function(){
//        alert("Ajaks päring ei toimi");
//    });
//});

//ül 1
//$(function(){
//   var pokeapiUrl = "https://pokeapi.co/api/v2/generation/1/";
//   var pokemonByName = "https://pokeapi.co/api/v2/pokemon/";
//    
//   $.getJSON(pokeapiUrl).done(function(data){
//      console.log(data);
//      $.each(data.pokemon_species, function(index, pokemon){
//          var name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
//          var link = $("<a>").attr("id", pokemon.name).attr("href", "#").append($("<strong>").text(name));
//          var par = $("<p>").html("Pokemon liik nr " + (index+1) + " on ").append(link);
//          
//          link.click(function(event){
//              $.getJSON(pokemonByName + pokemon.name).done(function(details){
//                  console.log(details);
//                  var pokemonDiv = $("#pokemon-details");
//                  pokemonDiv.empty();
//                  pokemonDiv.append("<h2>" + name + "</h2>");
//                  pokemonDiv.append("<img src='" + details.sprites.front_default + "'>");
//                  pokemonDiv.append("<img src='" + details.sprites.back_default + "'>");
//                  pokemonDiv.append("<img src='" + details.sprites.front_default + "'>");
//                  pokemonDiv.append("<img src='" + details.sprites.back_default + "'>");
//              });
//              event.preventDefault();
//          });
//          
//          par.appendTo("#pokemon");
//      });
//   }).fail(function(){
//       console.log("Pokeapi ei ole kätte saadav");
//   }).always(function(){
//       console.log("Pokemon on lahe");
//   });
//});

//ül 2 on ül 1
//ül 3 on ül 1

