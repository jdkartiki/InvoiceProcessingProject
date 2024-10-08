package com.invoiceprocessing.demo.services;

import java.util.List;

import com.invoiceprocessing.demo.model.invoice;

public interface invoicce_service {
	//This is interface so in  IF there is abstract methods
	public invoice addInvoice(invoice Invoice);//here addInvoice is service and whole this line is abstract mehod in this IF
	public List<invoice> getInvoices();//method from controller and here get is api
	public invoice deleteInvoice(long id);
	public invoice addOrUpdateInvoice(invoice invoice);
	
	

}
