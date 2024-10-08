package com.invoiceprocessing.demo.controller;
//This is controller from MVC and it is for handling the request that is come from FE

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.invoiceprocessing.demo.model.invoice;
import com.invoiceprocessing.demo.services.invoicce_service;

@RestController//to tell compiler that this is controller 
@CrossOrigin
public class invoice_controller {
	@Autowired
	invoicce_service InvoiceService;//here we create a one object of IF but we cannnt make object of any IF so we have to insert one annotation that is autowired
@PostMapping("/Invoice")//This is post api  and Invoice is its endpoint and controller tells that when this api hits what should compiler will do
	public invoice addOrUpdateInvoice(@RequestBody invoice Invoice) {//function for handling endpoint that is Invoice and for fetching Invoice body objects
	return this.InvoiceService.addOrUpdateInvoice(Invoice);//here we are returning Invoice
		
	}
	@GetMapping("/Invoice")
	public List<invoice> getInvoices(){
		return this.InvoiceService.getInvoices();
	}
	@DeleteMapping("/Invoice/{invoiceId}")//here invoiceId is variable
	public invoice deleteInvoice(@PathVariable String invoiceId) {
		return this.InvoiceService.deleteInvoice(Long.parseLong(invoiceId));
	}

}
