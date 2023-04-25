$(document).ready(function() {

    // Customer chat functionality
    $("#customer-send-button").click(function() {
      var message = $("#customer-sage-input").val();
      if (message != "") {
      // check message is empty or not
        $("#customer-message-list").append("<li class='customer-message'>" + message + "</li>");
        $("#customer-message-input").val("");
      }
    });
  
    // Sales chat functionality
    $("#sales-send-button").click(function() {
      var message = $("#sales-message-input").val();
      if (message != "") {
        $("#sales-message-list").append("<li class='sales-message'>" + message + "</li>");
        $("#sales-message-input").val("");
      }
    });
  
  });
  
