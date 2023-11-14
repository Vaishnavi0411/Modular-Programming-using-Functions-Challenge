{
  //menu details
  var priceOfPizzaRegular = 9.99;
  var priceOfPizzaMedium = 11.99;
  var priceOfPizzaLarge = 13.99;
  var priceOfGarlicbread = 5.99;
  var priceOfBeverages = 1.99;
  var size = 1;
  //customer details 
  var customerName = "Gary";
  var customerPhone = "412312345";
  //order details 
  var noOfGarlicbread = 5;
  var noOfPizzaRegular = 10;
  var noOfBeverages = 10;
  var priceOfPizza1 = priceOfPizza(size);
  //display customer and menu details 
  function display() {
    alert("Customer Details" + '\n' +
      "-------------------------------------" + '\n' +
      "Customer Name                    : " + customerName + '\n' +
      "Customer Phone Number      : " + customerPhone);
  }
  display();
  function display1() {
    alert("Menu Items" + '\n' +
      "     " + "S.No        Item Category         Price" + '\n' +
      "      ------------------------------------------------------------------" + '\n' +
      "     " + "  1)          Pizza(Regular)         $ " + priceOfPizzaRegular + '\n' +
      "     " + "  2)          Pizza(Medium)        $ " + priceOfPizzaMedium + '\n' +
      "     " + "  3)          Pizza(Large)             $ " + priceOfPizzaLarge + '\n' +
      "     " + "  4)          Garlic Bread             $ " + priceOfGarlicbread + '\n' +
      "     " + "  5)          Beverages                $ " + priceOfBeverages + '\n')
  }
  display1();
  //prices 
  function priceOfPizza(size) {
    if (size == 1) {
      let prize = priceOfPizzaRegular;
      return prize;
    }
    else if (size == 2) {
      let prize = priceOfPizzaMedium;
      return prize;
    }
    else if (size == 3) {
      let prize = priceOfPizzaLarge;
      return prize;
    }
    else {
      return "enter 1 to 3 values";
    }
  }

  function priceOfGarlicBread1() {
    return priceOfGarlicbread;
  }
  function priceOfBeverages2() {
    return priceOfBeverages;
  }
  //subtotal
  function pizzaSubTotal(noOfPizzaRegular, priceOfPizza1) {
    var total = noOfPizzaRegular * priceOfPizza1;
    return total;
  }
  function garlicBreadSubTotal(noOfGarlicbread, priceOfGarlicbread) {
    var total1 = noOfGarlicbread * priceOfGarlicbread;
    return total1;
  }
  function beveragesSubTotal(noOfBeverages, priceOfBeverages) {
    var total2 = noOfBeverages * priceOfBeverages;
    return total2;
  }
  //Total
  function totalBillAmount(total, total1, total2) {
    return total + total1 + total2;
  }
  var pizzaSubTotal1 = pizzaSubTotal(noOfPizzaRegular, priceOfPizza1);
  var garlicBreadSubTotal1 = garlicBreadSubTotal(noOfGarlicbread, priceOfGarlicbread);
  var beveragesSubTotal1 = beveragesSubTotal(noOfBeverages, priceOfBeverages);
  var totalBillAmount1 = totalBillAmount(pizzaSubTotal1, garlicBreadSubTotal1, beveragesSubTotal1);
  var discountAmount = 0.1 * totalBillAmount1;

  function finalBillAmount(totalBillAmount1) {
    if (totalBillAmount1 >= 50) {
      return totalBillAmount1 - discountAmount;
    }
    else {
      return totalBillAmount1;
    }
  }
  var finalBillAmount1 = finalBillAmount(totalBillAmount1);

  function billdisplay() {
    alert("Bill Details" + '\n' +
      "----------------------------------------------" + '\n' +
      "Pizza (Regular)             : " + noOfPizzaRegular + '\n' +
      "Garlic Bread                 : " + noOfGarlicbread + '\n' +
      "Beverages                    : " + noOfBeverages + '\n' +
      "----------------------------------------------------------------" + '\n' +
      "The total bill amount is                    :$ " + totalBillAmount1.toFixed(2) + '\n' +
      "Discount amount is                          :$ " + discountAmount.toFixed(2) + '\n' +
      "The final  bill amount is                   :$ " + finalBillAmount1.toFixed(2)
    );
  }
  billdisplay();

}