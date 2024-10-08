import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Button, styled } from "@mui/material";
import { saveInvoice } from "../Services/Api";

const Component = styled(Box)({
  marginTop: 20,
  "&> P": {
    fontSize: 25,
    marginBottom: 60,
  },
  "& > div > div": {
    marginRight: 20,
    minWidth: 200,
  },
  
});

const defaultObj = {
  vendor: "",
  product: "",
  amount: 0,
  date: "",
  action: "Pending",
};

const Add_Invoice = ({ setAddInvoice, editInvoice }) => {
  const [Invoice, setInvoice] = useState(defaultObj);

  // Populate the form with the data to edit if editInvoice exists
  useEffect(() => {
    if (editInvoice) {
      setInvoice(editInvoice); // Set the existing invoice in the form
    }
  }, [editInvoice]);

  const onValueChange = (e) => {
    setInvoice({ ...Invoice, [e.target.name]: e.target.value });
  };

  const addOrUpdateInvoice = async () => {
    try {
      // Save the invoice (it will either be an update or new invoice based on the presence of an ID)
      await saveInvoice({
        ...Invoice,
        amount: Number(Invoice.amount),
      });
      setAddInvoice(false); // Close the form after adding/updating
    } catch (error) {
      console.error("Error saving invoice:", error);
    }
  };

  return (
    <Component>
      <Typography>{editInvoice ? "Update Invoice" : "Add Invoice"}</Typography>
      <Box>
        <TextField variant="standard"placeholder="Enter Vendor Name"
          value={Invoice.vendor} onChange={(e) => onValueChange(e)}name="vendor"autoComplete="off"/>
        <TextField
          variant="standard"
          placeholder="Enter Product Name"
          value={Invoice.product}
          onChange={(e) => onValueChange(e)}
          name="product"
          autoComplete="off"
        />
        <TextField
          variant="standard"
          placeholder="Enter Amount (In Rs)"
          type="number"
          value={Invoice.amount}
          onChange={(e) => onValueChange(e)}
          name="amount"
          autoComplete="off"
        />
        <TextField
          variant="standard"
          placeholder="Enter Date"
          type="date"
          value={Invoice.date}
          onChange={(e) => onValueChange(e)}
          name="date"
          autoComplete="off"
        />
        <Button variant="contained" onClick={addOrUpdateInvoice}>
          {editInvoice ? "Update Invoice" : "Add Invoice"}
        </Button>
      </Box>
    </Component>
  );
};

export default Add_Invoice;
