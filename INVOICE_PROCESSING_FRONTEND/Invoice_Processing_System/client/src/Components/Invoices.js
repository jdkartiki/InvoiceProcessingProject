import { Table, TableHead, TableBody, TableRow, TableCell, Button, styled, Typography } from "@mui/material";

const StyledTable = styled(Table)({
  marginLeft: 10,
  marginRight: 10,
  marginTop: 50,
  "& > thead > tr > th": {
    background: "#000",
    color: "#FFFFFF",
    fontSize: 18,
  },
  "& > tbody > tr > td": {
    fontSize: 15,
  },
  "& >tbody > p": {
    fontSize: 18,
    marginTop: 15,
  },
  
});

const Invoices = ({ invoices, removeInvoice, updateInvoice }) => {
  return (
    <StyledTable>
      <TableHead>
        <TableRow>
          <TableCell>Vendor</TableCell>
          <TableCell>Product</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Date</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {invoices && Array.isArray(invoices) && invoices.length > 0 ? (
          invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell>{invoice.vendor}</TableCell>
              <TableCell>{invoice.product}</TableCell>
              <TableCell>{invoice.amount}</TableCell>
              <TableCell>{invoice.date}</TableCell>
              <TableCell>{invoice.action}</TableCell>
              <TableCell>
                <Button variant="contained" color="success" onClick={() => removeInvoice(invoice.id)}>
                  Mark Done
                </Button>
                <Button variant="contained" color="primary" onClick={() => updateInvoice(invoice)}>
                  UPDATE
                </Button>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <Typography>NO PENDING INVOICES</Typography>
        )}
      </TableBody>
    </StyledTable>
  );
};

export default Invoices;
