package com.invoiceprocessing.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.invoiceprocessing.demo.dao.invoice_dao;
import com.invoiceprocessing.demo.model.invoice;

@Service
public class invoice_service_implementation implements invoicce_service {

    @Autowired
    invoice_dao InvoiceDao;

    // This method handles both adding and updating invoices
    @Override
    public invoice addOrUpdateInvoice(invoice Invoice) {
        if (Invoice.getId() != 0) { // If the invoice has an ID, it's an update operation
            // Find the existing invoice by ID
            invoice existingInvoice = InvoiceDao.findById(Invoice.getId()).orElse(null);
            if (existingInvoice != null) {
                // Update the existing invoice with the new details
                existingInvoice.setVendor(Invoice.getVendor());
                existingInvoice.setProduct(Invoice.getProduct());
                existingInvoice.setAmount(Invoice.getAmount());
                existingInvoice.setDate(Invoice.getDate());
                existingInvoice.setAction(Invoice.getAction());
                return InvoiceDao.save(existingInvoice); // Save the updated invoice
            }
        }
        // If the ID is 0, it's a new invoice, so save it
        return InvoiceDao.save(Invoice);
    }

    @Override
    public List<invoice> getInvoices() {
        return InvoiceDao.findAll();
    }

    @Override
    public invoice deleteInvoice(long id) {
        invoice Invoice = InvoiceDao.findById(id).get();
        InvoiceDao.delete(Invoice);
        return Invoice;
    }

	@Override
	public invoice addInvoice(invoice Invoice) {
		// TODO Auto-generated method stub
		return null;
	}
}
