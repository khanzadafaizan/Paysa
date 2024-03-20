import React from "react";
import { Link } from "react-router-dom";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import DesktopFooter from "./components/DesktopFooter";
import MobileNav from "./components/MobileNav";
import DesktopNav from "./components/DesktopNav";

export default function Invoicing() {
  const invoice = [
    {
      id: "Inv 001",
      invicone: "fa-regular fa-file me-2",
      name: "Invoice for UI design",
      amount: "$1.140,00",
      date: "28 Dec 2022",
      status: "Paid",
      icone: "fa-solid fa-ellipsis footer-icon",
    },
    {
      id: "Inv 002",
      invicone: "fa-regular fa-file me-2",
      name: "Invoice for UI design",
      amount: "$1.140,00",
      date: "28 Dec 2022",
      status: "Paid",
      icone: "fa-solid fa-ellipsis footer-icon",
    },
    {
      id: "Inv 003",
      invicone: "fa-regular fa-file me-2",
      name: "Invoice for UI design",
      amount: "$1.140,00",
      date: "28 Dec 2022",
      status: "Paid",
      icone: "fa-solid fa-ellipsis footer-icon",
    },
    {
      id: "Inv 004",
      invicone: "fa-regular fa-file me-2",
      name: "Invoice for UI design",
      amount: "$1.140,00",
      date: "28 Dec 2022",
      status: "Paid",
      icone: "fa-solid fa-ellipsis footer-icon",
    },
    {
      id: "Inv 005",
      invicone: "fa-regular fa-file me-2",
      name: "Invoice for UI design",
      amount: "$1.140,00",
      date: "28 Dec 2022",
      status: "Paid",
      icone: "fa-solid fa-ellipsis footer-icon",
    },
    {
      id: "Inv 006",
      invicone: "fa-regular fa-file me-2",
      name: "Invoice for UI design",
      amount: "$1.140,00",
      date: "28 Dec 2022",
      status: "Paid",
      icone: "fa-solid fa-ellipsis footer-icon",
    },
  ];
  const data = [
    {
      id: 1,
      title: "income",
      transactions: 9.65,
      total: "84 Transation",
      percent: "+10%",
    },
    {
      id: 2,
      title: "sending",
      transactions: 7.45,
      total: "54 Transation",
      percent: "-2%",
    },
    {
      id: 3,
      title: "sending",
      transactions: 7.45,
      total: "54 Transation",
      percent: "-2%",
    },
  ];
  const invoiceUi = [
    {
      id: "Inv 001",
      invicone: "fa-regular fa-file me-2",
      name: "Invoice for UI design",
      amount: "$1.140,00",
      date: "28 Dec 2022",
      img: require("./images/status_green.png"),
    },
    {
      id: "Inv 002",
      invicone: "fa-regular fa-file me-2",
      name: "Invoice for UI design",
      amount: "$1.140,00",
      date: "28 Dec 2022",
      img: require("./images/status_yellow.png"),
    },
    {
      id: "Inv 003",
      invicone: "fa-regular fa-file me-2",
      name: "Invoice for UI design",
      amount: "$1.140,00",
      date: "28 Dec 2022",
      img: require("./images/status_yellow.png"),
    },
    {
      id: "Inv 004",
      invicone: "fa-regular fa-file me-2",
      name: "Invoice for UI design",
      amount: "$1.140,00",
      date: "28 Dec 2022",
      img: require("./images/status_green.png"),
    },
    {
      id: "Inv 005",
      invicone: "fa-regular fa-file me-2",
      name: "Invoice for UI design",
      amount: "$1.140,00",
      date: "28 Dec 2022",
      img: require("./images/status_red.png"),
    },
    {
      id: "Inv 006",
      invicone: "fa-regular fa-file me-2",
      name: "Invoice for UI design",
      amount: "$1.140,00",
      date: "28 Dec 2022",
      img: require("./images/status_green.png"),
    },
  ];
  return (
    <>
      <div className="container-fluid d-none d-md-block ">
        {/* Invoicing Start */}
        <div className="row">
          {/* Invoicing SideBar start */}
          <SideBar />
          {/* Invoicing SideBar end */}
          {/* Invoicing section start */}
          <div className="col-md-10 ps-5 pt-2">
            {/* Invoicing navbar start */}
            <DesktopNav title={"Invoices"} />

            {/* Invoicing navbar end */}
            {/* Invoicing section start */}
            {/* Invoicing sectins start */}
            <div className="row mt-5">
              <div className="col-md-12 d-flex gap-2">
                {data.map((income, key) => (
                  <div key={key} className="card " style={{ width: "21rem" }}>
                    <div className="d-flex  py-2 px-2 justify-content-between   ">
                      <p className="total-balance-text">{income.title}</p>
                      <i className="fa-solid fa-arrow-trend-up balance-icon"></i>
                    </div>
                    <h1 className="income ms-2">${income.transactions}</h1>
                    <div className="d-flex mx-2 justify-content-between  ">
                      <p className="income-balance-text">{income.total}</p>
                      <p className="balance-icon ">{income.percent}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Invoicing sectins end */}
            <div className="row mt-4 ">
              <div className="col-md-3 col-12 bg-light d-flex justify-content-between rounded-3 py-2 ">
                <Link
                  to={""}
                  type="button"
                  className="Link btn btn-outline-dark border-0 invoicing-btn"
                >
                  All
                </Link>
                <Link
                  to={""}
                  type="button"
                  className="Link btn btn-outline-dark border-0 invoicing-btn"
                >
                  Paid
                </Link>
                <Link
                  to={""}
                  type="button"
                  className="Link btn btn-outline-dark border-0 invoicing-btn"
                >
                  Unpaid
                </Link>

                <span className="account-open "></span>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col table-th">ID</th>
                        <th scope="col table-th">NAME</th>
                        <th scope="col table-th">AMOUNT</th>
                        <th scope="col table-th">DUE DATE</th>
                        <th scope="col table-th">STATUS</th>
                        <th scope="col table-th"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {invoice.map((inv, key) => (
                        <tr key={key}>
                          <th scope="row">{inv.id}</th>
                          <td className="inv">
                            <i className={inv.invicone}></i>
                            {inv.name}
                          </td>
                          <td className="invoicing-amount">{inv.amount}</td>
                          <td className="inv">{inv.date}</td>
                          <td className="invoicing-paid balance-icon">
                            {inv.status}
                          </td>
                          <td>
                            <i className={inv.icone}></i>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Invoicing section end */}
          </div>
          {/* Invoicing section end */}
          {/* Footer start */}
          <DesktopFooter />
          {/* Footer End */}
        </div>
        {/* Invoicing End */}
      </div>
      {/* Invoicing Mobile section Start */}
      <div className="container-fluid d-md-none d-block side-bar pb-4">
        {/* Invoicing navbar start */}
        <MobileNav title={"Invoices"} />
        {/* Invoicing sectins start */}
        <div className="row my-3 mx-2">
          <div className="col-md-3 col-12 bg-light d-flex gap-3 justify-content-center rounded-3 py-2 ">
            <Link
              to={""}
              type="button"
              className="Link btn btn-outline-dark border-0 invoicing-btn"
            >
              All
            </Link>
            <Link
              to={""}
              type="button"
              className="Link btn btn-outline-dark border-0 invoicing-btn"
            >
              Paid
            </Link>
            <Link
              to={""}
              type="button"
              className="Link btn btn-outline-dark border-0 invoicing-btn"
            >
              Unpaid
            </Link>

            <span className="account-open "></span>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            {invoiceUi.map((inv, key) => (
              <div key={key} className="card p-2 mx-2 my-1">
                <div className="d-flex justify-content-between">
                  <div>
                    <p className="inv mt-2">
                      <i className={inv.invicone}></i>
                      {inv.id}
                    </p>
                  </div>
                  <div className="d-flex gap-2 ">
                    <p className="inv mt-2">{inv.date}</p>
                    <div>
                      <img src={inv.img} className="img-fluid mt-2"></img>
                    </div>
                  </div>
                </div>
                <h6 className="income">{inv.name}</h6>
                <p className="income-balance-text">{inv.amount}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Invoicing sectins end */}

        {/* Invoicing Mobile section end */}
      </div>
      <Footer />
    </>
  );
}
