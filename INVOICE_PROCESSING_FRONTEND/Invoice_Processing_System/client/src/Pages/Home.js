import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import { Box, Typography, Button } from "@mui/material";
import Add_Invoice from "../Components/Add_Invoice";
import Invoices from "../Components/Invoices";
import { getAllInvoice, deleteInvoice } from "../Services/Api";

const Home = () => {
  const [addInvoice, setAddInvoice] = useState(false);
  const [invoices, setInvoices] = useState([]);
  const [editInvoice, setEditInvoice] = useState(null); // State to hold the invoice to edit

  useEffect(() => {
    const getData = async () => {
      const response = await getAllInvoice();
      setInvoices(response.data);
    };
    getData();
  }, [addInvoice]);

  const toggleInvoice = () => {
    setAddInvoice(true);
    setEditInvoice(null); // Reset edit state when toggling the Add Invoice form
  };

  const removeInvoice = async (id) => {
    await deleteInvoice(id);
    const updatedInvoice = invoices.filter((invoice) => invoice.id !== id);
    setInvoices(updatedInvoice);
  };

  const updateInvoice = (invoice) => {
    setEditInvoice(invoice); // Set the selected invoice to edit
    setAddInvoice(true); // Show the form for editing
  };

  return (
    <React.Fragment>
      <Header />
      <Box style={{ margin: 20 }}>
        <Typography variant="h4">Pending Invoices</Typography>
        {!addInvoice && (
          <Button
            variant="contained"
            style={{ marginTop: 15 }}
            onClick={() => toggleInvoice()}
          >
            Add Invoice
          </Button>
        )}
        {addInvoice && (
          <Add_Invoice
            setAddInvoice={setAddInvoice}
            editInvoice={editInvoice} // Pass the edit invoice state to the Add_Invoice form
          />
        )}
        <Box>
          <Invoices
            invoices={invoices}
            removeInvoice={removeInvoice}
            updateInvoice={updateInvoice} // Pass the update function to Invoices component
          />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Home;
