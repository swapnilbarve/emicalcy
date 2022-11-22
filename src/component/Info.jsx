import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Info({ tableData }) {
  return tableData.length ? (
    <TableContainer component={Paper} style={{ padding: "3px" }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Payment </TableCell>
            <TableCell align="center">Installment Payment Amount </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((amount) => (
            <TableRow
              key={amount.month}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">Month Name {amount.month}</TableCell>
              <TableCell align="center"> {amount.monthlyAmt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    " "
  );
}

export default Info;
