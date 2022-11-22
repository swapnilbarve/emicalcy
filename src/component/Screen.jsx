import { useSelector } from "react-redux";
import * as React from "react";
import Data from "./Info";
function Screen() {
  const { tableData } = useSelector((res) => res);
  return (
    <div style={{ width: "45%" }}>
      <Data tableData={tableData} />
    </div>
  );
}
export default Screen;
