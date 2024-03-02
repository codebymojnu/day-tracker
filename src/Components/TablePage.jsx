// eslint-disable-next-line no-unused-vars
import "./LoginSignUp.css";
import LoginSignUp from "./LoginSignUp/LoginSignUp";

const TablePage = () => {
  return (
    <>
      <div onClick={<LoginSignUp />}>হোম পেজে ফিরে যান</div>
      <div>
        <Table>
          <tr>
            <th>Date</th>
            <th>Win/Loss</th>
            <th>Score</th>
            <th>Gift</th>
          </tr>
        </Table>
      </div>
    </>
  );
};

export default TablePage;
