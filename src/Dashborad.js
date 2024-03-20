import chart_img from "./images/chart.png";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import DesktopFooter from "./components/DesktopFooter";
import MobileNav from "./components/MobileNav";
import DesktopNav from "./components/DesktopNav";
import LatestTransaction from "./components/LatestTransaction";

export default function Dashborad() {
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
  ];
  const asstes = [
    {
      id: 1,
      cardNumber: "3210**** ****7890",
      transactions: 88.2,
      text: "Account number",
      image: require("./images/Visa.png"),
    },
    {
      id: 2,
      cardNumber: "8210**** ****4340",
      transactions: 64.12,
      text: "Account number",
      image: require("./images/mstercard.png"),
    },
    {
      id: 3,
      cardNumber: "8210**** ****4990",
      transactions: 88.2,
      text: "Account number",
      image: require("./images/Visa.png"),
    },
  ];
  const mobileasstes = [
    {
      id: 1,
      cardNumber: "****7890",
      transactions: 88.2,
      text: "Account",
      image: require("./images/img1.png"),
    },
    {
      id: 2,
      cardNumber: "****4340",
      transactions: 64.12,
      text: "Account",
      image: require("./images/img2.png"),
    },
    {
      id: 3,
      cardNumber: "****4990",
      transactions: 230.5,
      text: "Account",
      image: require("./images/img3.png"),
    },
  ];

  return (
    <>
      <div className="container-fluid d-none d-md-block ">
        {/* Dashborad Start */}
        <div className="row">
          {/* Dashborad SideBar start */}
          <SideBar />
          {/* Dashborad SideBar end */}
          {/* Dashborad section start */}
          <div className="col-md-10 ps-5 pt-2">
            {/* Dashborad navbar start */}
            <DesktopNav title={"Dashborad"} />
            {/* Dashborad navbar end */}

            <div className="row">
              {/* Dashborad section left start */}
              <div className="col-md-6 ">
                <div className="row d-flex gap-3">
                  {data.map((user, key) => (
                    <div className="col-md-5 mt-3 ">
                      <div
                        key={key}
                        className="card "
                        style={{ width: "14.6rem" }}
                      >
                        <div className="d-flex py-2 mx-2 justify-content-between   ">
                          <p className="total-balance-text">{user.title}</p>
                          <i className="fa-solid fa-arrow-trend-up balance-icon"></i>
                        </div>
                        <h1 className="income ms-2">${user.transactions}</h1>
                        <div className="d-flex mx-2 justify-content-between  ">
                          <p className="income-balance-text">{user.total}</p>
                          <p className="balance-icon ">{user.percent}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="col-md-11 pb-3 mt-3 border rounded-3">
                  <div className="border-bottom py-3">
                    <h1 className=" income-assets ms-3  ">Your Assets</h1>
                  </div>
                  <div className="ms-3 chart-img">
                    <img src={chart_img} className="img-fluid"></img>
                  </div>
                  {asstes.map((asste, key) => (
                    <div
                      key={key}
                      className="d-flex mt-1 justify-content-between mx-3"
                    >
                      <div className="d-flex justify-content-between">
                        <div className="me-3 mt-2">
                          <img src={asste.image} className=""></img>
                        </div>
                        <div>
                          <h6 className="card-atm ">{asste.cardNumber}</h6>
                          <p className="total-balance-text">{asste.text}</p>
                        </div>
                      </div>
                      <div>
                        <h6 className="card-atm text-end">
                          ${asste.transactions}
                        </h6>
                        <p className="total-balance-text">{asste.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Dashborad section left end */}
              {/* Dashborad section right start */}
              <div className="col-md-6 pb-2 mt-3 border rounded-3">
                <div className="border-bottom py-3">
                  <div className="d-flex mx-2 justify-content-between   ">
                    <h1 className=" income-assets ms-1  ">
                      Latest Transactions
                    </h1>
                    <i className="fa-solid fa-arrow-trend-up "></i>
                  </div>
                </div>
                <p className=" ms-2 total-balance-text mt-2">28 August</p>
                <LatestTransaction />
              </div>

              {/* Dashborad section right end */}
            </div>
          </div>
          {/* Dashborad section end */}
          {/*Desktop Footer start */}
          <DesktopFooter />
          {/*Desktop Footer End */}
        </div>
        {/* Dashborad End */}
      </div>
      {/* Dashborad Mobile section Start */}
      <div className="container-fluid d-md-none d-block side-bar pb-4">
        {/* Dashborad navbar start */}
        <MobileNav title={"Dashborad"} />

        <div className="row d-flex px-2 justify-content-around">
          {data.map((user, key) => (
            <div
              key={key}
              className="col-md-5 bg-light col-12 mt-3  border rounded-3"
            >
              <div className="d-flex  py-2 mx-2 justify-content-between   ">
                <p className="total-balance-text">{user.title}</p>
                <i className="fa-solid fa-arrow-trend-up balance-icon"></i>
              </div>
              <h1 className="income ms-2">${user.transactions}</h1>
              <div className="d-flex mx-2 justify-content-between  ">
                <p className="income-balance-text">{user.total}</p>
                <p className="balance-icon ">{user.percent}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-11 pb-3 mt-3 ">
          <div className="ms-3 chart-img">
            <img src={chart_img} className="img-fluid"></img>
          </div>
          <p className="payment">Payment accounts</p>
          {mobileasstes.map((asste, key) => (
            <div
              key={key}
              className="d-flex mt-2 border rounded-2  px-2 bg-light justify-content-between mx-3"
            >
              <div className=" d-flex justify-content-between ">
                <div className="me-3 ms-2 mt-4">
                  <img src={asste.image} className="img-country"></img>
                </div>
                <div>
                  <h6 className="card-atm pt-3 ">{asste.cardNumber}</h6>
                  <p className="total-balance-text">{asste.text}</p>
                </div>
              </div>

              <div className="mt-3 me-2">
                <h6 className="card-atm text-end">${asste.transactions}</h6>
              </div>
            </div>
          ))}
        </div>
        <div className="col-12 text-center">
          <button
            type="button"
            className="btn border btn-outline-dark text-center btn-detail"
          >
            <i className="fa-solid fa-circle me-2"></i>See detailed report
          </button>
        </div>
        {/* Dashborad Mobile section end */}
      </div>
      <Footer />
    </>
  );
}
