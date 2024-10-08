package com.invoiceprocessing.demo.dao;
//This is dao  used for saving data in database 
//here we are created this dao for saving implementation in database

import org.springframework.data.jpa.repository.JpaRepository;

import com.invoiceprocessing.demo.model.invoice;

public interface invoice_dao  extends JpaRepository<invoice,Long>{ //this If will save data in mysql 
//here jpa is dependencey and Jpa repository is interface of jpa dependencey so we hava to include jpa repoitory IF in invoice_dao IF
// but we cant implements one IF in another IF so we have to use extends keyword
//and this jpa repository IF will take 2 things first is modal that <invoice>and second is primary key data type
	
	

}
