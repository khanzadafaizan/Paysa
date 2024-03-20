import React from "react";
import transImg from "./images/trans-img.png";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import DesktopFooter from "./components/DesktopFooter";
import MobileNav from "./components/MobileNav";
import DesktopNav from "./components/DesktopNav";
export default function Transactions() {
const transaction =[
  {id:1, sendName:"Mark", sendTo:"Robert", trId:123, amount:45631, charge:"2%", finalAmount:485657, sourceId:154, date:"01/15/2024", status:"success"},
  {id:2, sendName:"Mark", sendTo:"Robert", trId:123, amount:45631, charge:"2%", finalAmount:485657, sourceId:154, date:"01/15/2024", status:"success"},
  {id:3, sendName:"Mark", sendTo:"Robert", trId:123, amount:45631, charge:"2%", finalAmount:485657, sourceId:154, date:"01/15/2024", status:"success"},
  {id:4, sendName:"Mark", sendTo:"Robert", trId:123, amount:45631, charge:"2%", finalAmount:485657, sourceId:154, date:"01/15/2024", status:"success"},
  {id:5, sendName:"Mark", sendTo:"Robert", trId:123, amount:45631, charge:"2%", finalAmount:485657, sourceId:154, date:"01/15/2024", status:"success"},
  {id:6, sendName:"Mark", sendTo:"Robert", trId:123, amount:45631, charge:"2%", finalAmount:485657, sourceId:154, date:"01/15/2024", status:"success"},

];
  return (
    <>
      <div className="container-fluid d-none d-md-block ">
        {/* Accounts Start */}
        <div className="row">
          {/* Accounts SideBar start */}
          <SideBar />
          {/* Accounts SideBar end */}
          {/* Accounts section start */}
          <div className="col-md-10 ps-5 pt-2">
            {/* Accounts navbar start */}
           <DesktopNav title={"Transactions"}/>

            {/* Accounts navbar end */}
            {/* Accounts section start */}
            {/* Accounts section end */}
            <div className="row border-bottom">
              <div className="col-md-12 py-5">
                <div className="d-flex gap-4">
                  <div className="mt-2">
                    <img src={transImg}></img>
                  </div>
                  <div>
                    <h6 className="total-balance-text">Accounts**** 7890</h6>
                    <h1 className="transaction-heading">$120,420.50</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table text-center table-striped">
                    <thead>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">SEND BY</th>
                        <th scope="col">SEND TO</th>
                        <th scope="col">TRANSACTION ID</th>
                        <th scope="col">AMOUNT</th>
                        <th scope="col">CHARGE</th>
                        <th scope="col">FINAL AMOUNT</th>
                        <th scope="col">SOURCE ID</th>
                        <th scope="col">DATE</th>
                        <th scope="col">STATUS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transaction.map((user, key)=>(
                      <tr key={key } >
                        <th scope="row">{user.id}</th>
                        <td>{user.sendName}</td>
                        <td>{user.sendTo}</td>
                        <td>{user.trId}</td>
                        <td>{user.amount}</td>
                        <td>{user.charge}</td>
                        <td>{user.finalAmount}</td>
                        <td>{user.sourceId}</td>
                        <td>{user.date}</td>
                        <td>{user.status}</td>
                      </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* Accounts section end */}
          {/* Footer start */}
          <DesktopFooter />
          {/* Footer End */}
        </div>
        {/* Accounts End */}
      </div>
      {/* Accounts Mobile section Start */}
      <div className="container-fluid d-md-none d-block side-bar pb-4">
        {/* Accounts navbar start */}
        <MobileNav title={"Transactions"}/>
        {/* Accounts navbar end */}
        {/* Accounts Hero section start */}
        <div className="row border-bottom bg-light">
          <div className="col-md-12 py-5">
            <div className="d-flex gap-4">
              <div className="mt-2">
                <img src={transImg}></img>
              </div>
              <div>
                <h6 className="total-balance-text">Accounts**** 7890</h6>
                <h1 className="transaction-heading">$120,420.50</h1>
              </div>
            </div>
          </div>
        </div>
        {/* Accounts Hero section end */}
        <div className="row mt-2">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table text-center table-striped">
                <thead>
                  <tr>
                    <th scope="col table-th">ID</th>
                    <th scope="col table-th">SENDBY</th>
                    <th scope="col table-th">SENDTO</th>
                    <th scope="col table-th">TRANSACTION</th>
                    <th scope="col table-th">AMOUNT</th>
                    <th scope="col table-th">CHARGE</th>
                    <th scope="col table-th">FINALAMOUNT</th>
                    <th scope="col table-th">SOURCEID</th>
                    <th scope="col table-th">DATE</th>
                    <th scope="col table-th">STATUS</th>
                  </tr>
                </thead>
                <tbody>
                {transaction.map((user, key)=>(
                      <tr key={key } >
                        <th scope="row">{user.id}</th>
                        <td>{user.sendName}</td>
                        <td>{user.sendTo}</td>
                        <td>{user.trId}</td>
                        <td>{user.amount}</td>
                        <td>{user.charge}</td>
                        <td>{user.finalAmount}</td>
                        <td>{user.sourceId}</td>
                        <td>{user.date}</td>
                        <td>{user.status}</td>
                      </tr>
                      ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Accounts Mobile section end */}
      </div>
      <Footer />
    </>
  );
}
