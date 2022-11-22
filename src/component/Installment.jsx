import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import "./Installment"
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));
function Installment() {
  const data = useSelector((res) => res);
  return (
    <Box className="boxA" sx={{ width: "90%" }}>
      <Stack spacing={2}>
        <Item>
          Monthly Installment : {data.monthlyEMI ? ` ${data.monthlyEMI}` : ""}
        </Item>
        <Item>
          Interest Paid Amt :
          {data.intestamount ? ` ${data.intestamount}` : ""}
        </Item>
        <Item>
          Gross Amt Pay :{data.totalpayble ? ` ${data.totalpayble}` : ""}{" "}
        </Item>
      </Stack>
    </Box>
  );
}

export default Installment;
