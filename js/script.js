// Copyright (c) 2020 Mr.Coxall All rights reserved
//
// Created by: Jakub Malhotra
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  const TAX = 1.13
  const sprinkles = 1.99
  const delivery = 15
  const size = parseFloat(document.getElementById("size").value)
  const flavour = parseFloat(document.getElementById("flavour").value)
  const sprinklesAnswer = document.getElementById("sprinkles").value
  const pickUpOrDelivery = document.getElementById("pick-up-or-delivery").value

  const basePriceNoTAX = size + flavour
  const basePrice = basePriceNoTAX * TAX
  const sprinklesOnly = (basePriceNoTAX + sprinkles) * TAX
  const deliveryOnly = (basePriceNoTAX + delivery) * TAX
  const sprinklesAndDelivery = (basePriceNoTAX + sprinkles + delivery) * TAX

  let subtotal = 0
  let tax = 0

  if (sprinklesAnswer == "yes" && pickUpOrDelivery == "delivery") {
    subtotal = sprinklesAndDelivery / TAX
    tax = sprinklesAndDelivery - subtotal
    document.getElementById("subtotal").innerHTML =
      "Subtotal: $" + subtotal.toFixed(2)
    document.getElementById("tax").innerHTML = "Tax: $" + tax.toFixed(2)
    document.getElementById("total").innerHTML =
      "Total: $" + sprinklesAndDelivery.toFixed(2) + " including tax."
  } else if (sprinklesAnswer == "no" && pickUpOrDelivery == "delivery") {
    subtotal = deliveryOnly / TAX
    tax = deliveryOnly - subtotal
    document.getElementById("subtotal").innerHTML =
      "Subtotal: $" + subtotal.toFixed(2)
    document.getElementById("tax").innerHTML = "Tax: $" + tax.toFixed(2)
    document.getElementById("total").innerHTML =
      "Total: $" + deliveryOnly.toFixed(2) + " including tax."
  } else if (sprinklesAnswer == "yes" && pickUpOrDelivery == "pick") {
    subtotal = sprinklesOnly / TAX
    tax = sprinklesOnly - subtotal
    document.getElementById("subtotal").innerHTML =
      "Subtotal: $" + subtotal.toFixed(2)
    document.getElementById("tax").innerHTML = "Tax: $" + tax.toFixed(2)
    document.getElementById("total").innerHTML =
      "Total: $" + sprinklesOnly.toFixed(2) + " including tax."
  } else {
    subtotal = basePrice / TAX
    tax = basePrice - subtotal
    document.getElementById("subtotal").innerHTML =
      "Subtotal: $" + subtotal.toFixed(2)
    document.getElementById("tax").innerHTML = "Tax: $" + tax.toFixed(2)
    document.getElementById("total").innerHTML =
      "Total: $" + basePrice.toFixed(2) + " including tax."
  }
}
