package com.invoiceprocessing.demo.model;// From FE we dont send any ID we have to create it in BE

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

//This is model we create it for validate objects that  come from FE 

@Entity//for creating table 
public class invoice {//it handles components that come from front end ie vendor product...
	@Id//for taking primary key
	@GeneratedValue(strategy = GenerationType.AUTO)//for generating ID automatic
	private long id;//we generated id for attaching on invoice that come from FE that is each unique id 
	// for each invoice in FE for uniquely identify them perform actions on them 
	private String vendor;//these are default objects from FE add_invoice page
	private String product;//we have to validate these objects that come from FE
	private int amount;//it validate in the way that these all objects must be in FE
	private String date;//if this object is String then only string must be come from FE not any other DT object
	private String action;
	
	public invoice() {//default  constructor
		
	}
	public invoice(long id, String vendor, String product, int amount, String date, String action) {//para constructor
		super();
		this.id = id;
		this.vendor = vendor;
		this.product = product;
		this.amount = amount;
		this.date = date;
		this.action = action;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getVendor() {
		return vendor;
	}
	public void setVendor(String vendor) {
		this.vendor = vendor;
	}
	public String getProduct() {
		return product;
	}
	public void setProduct(String product) {
		this.product = product;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getAction() {
		return action;
	}
	public void setAction(String action) {
		this.action = action;
	}
	
	
}
