import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleExclamation,faCheckCircle} from '@fortawesome/free-solid-svg-icons';

export const sayHello = ()=>console.log("Hello");

export const formatMoney = (amount,format)=>{
  //Format doc: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
  let formatedValue = "";
  switch (format) {
      case "USD":
          formatedValue = new Intl.NumberFormat('en-US',{ style:'currency',currency:'USD'}).format(amount)
          break;
      case "EUR":
        formatedValue = new Intl.NumberFormat('en-US',{ style:'currency',currency:'EUR'}).format(amount)
        break;
      case "JPY":
        formatedValue = new Intl.NumberFormat('en-US',{ style:'currency',currency:'JPY'}).format(amount)
        break;
      case "CAD":
        formatedValue = new Intl.NumberFormat('en-US',{ style:'currency',currency:'CAD'}).format(amount)
        break;
      case "CLP":
        formatedValue = new Intl.NumberFormat('en-US',{ style:'currency',currency:'CLP'}).format(amount)
        break;
      default:
        formatedValue = new Intl.NumberFormat('en-US',{ style:'currency',currency:'USD'}).format(amount)
        break;
  }
  return formatedValue;
}

export const unformatMoney =(money)=>{
  return Number.parseFloat(money.replaceAll(/[^.0-9]/g,""));
}

/* Account Operations*/
export const getOperationType = (key)=>{
  let text = null;
    switch (key) {
      case "1":
        text = "Transacción";
        break;
      case "2":
        text = "Cobro";
        break;
      default:
        text = "N/A";
        break;
    }
    return text;
}

export const getOperationStatus = (key)=>{
  let text = "N/A";
  switch (key) {
    case "1":
      text = (
        <React.Fragment>
          <FontAwesomeIcon icon={faCircleExclamation}/> Sin Procesar
        </React.Fragment>
      )
      break;
    case "2":
      text = (
        <React.Fragment>
          <FontAwesomeIcon icon={faCheckCircle}/> Procesada
        </React.Fragment>
      )
      break;
    default:
      break;
  }
  return text;
}