(function() {

  "use strict";

  //
  //  sending emails via the rest api
  //


  $("#sendForm").on("click", function(e) {
    e.preventDefault();
    sendContent(
      $("#formName")[0].value,
      $("#formEmail")[0].value,
      $("#formText")[0].value,
      function emptyCallback() {}
    );
  });

  function sendContent(name, email, text, callback) {

    var EMAIL_RECIPIENT = "kassa.viktor@gmail.com";
    var NAME_RECIPIENT = "Viktorko";


    if (!email) {
      email = ":( Nebol poskytnuty ziadny email.";
    }

    if (!text) {
      text = ":( Nebola vyplnena ziadna sprava.";
    }

    if (!name) {
      name = "Neznamy zakaznik";
    }

    console.log("email", email);


    var toParam = {
      "email": EMAIL_RECIPIENT,
      "name": NAME_RECIPIENT,
      "type": "to"
    };

    var message = "";
    message += "Meno: " + name + "<br/>";
    message += "Email: " + email + "<br/>";
    message += "Sprava: " + text + "<br/>";


    var messageParam = {
      "from_email": email,
      "to": [toParam],
      "autotext": "true",
      "subject": "Test email z iteas.sk: " + name,
      "html": message
    };

    var opts = {
      url: "https://mandrillapp.com/api/1.0/messages/send.json",
      data: {
        "key": "xAnJn4xzJNB4q3Z3MBdCfQ",
        "message": messageParam
      },
      type: "POST",
      crossDomain: true,
      success: function(msg) {
        console.info("success email message", msg[0]);
      },
      error: function() {
        alert("Vyskytla sa chyba, kontaktuj Samka!")
      }
    };

    $.ajax(opts).done(console.log('huraaaaaa'));
    // $.ajax(opts).done(function() {
    //   $("#formName1")[0].value = "";
    //   $("#formEmail1")[0].value = "";
    //   $("#formNote1")[0].value = "";
    //   $("#formName2")[0].value = "";
    //   $("#formEmail2")[0].value = "";
    //   $("#formNote2")[0].value = "";
    //   $("#thanks").addClass("active");
    //   callback();
    // });

  }


})();
