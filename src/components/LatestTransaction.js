import React from 'react'
// import eye from "";

export default function LatestTransaction() {
    const transactions = [
        { id: 1, image:require("../images/paypal.png"), title:"online purchaes at Ebay.com", transactions: "-$104.4800", dateTime: "28 Aug 3:00 PM" },
        { id: 2, image:require("../images/paisa.png"), title:"ATM Cash Withdral", transactions: "-$201.5000", dateTime: "28 Aug 2:15 PM" },
        { id: 3, image:require("../images/amazon.png"), title:"Online purches on Amazone.com", transactions: "-$184.00", dateTime: "28 Aug 5:40 PM" },
    
      ];
    
      const transactionsTow = [
        { id: 1, image:require("../images/paisa.png"), title:"Income payment for projects", transactions: "+$30.0000", dateTime: "24 Aug 6:40 PM" },
        { id: 2, image:require("../images/eye.png"), title:"Groceries store", transactions: "-$400.5000", dateTime: "24 Aug 1:00 AM" },
        { id: 3, image:require("../images/paypal.png"), title:"online purchaes at Ebay.com", transactions: "-$396.000", dateTime: "28 Aug 4:00 PM" },
    
      ];
    
     
    return (
        <>
                    {transactions.map((latest,key)=>(
                <div key={key} className="d-flex border-bottom mt-2 justify-content-between mx-2">
                  <div className="d-flex justify-content-between">
                    <div className="me-3 mt-2">
                      <img src={latest.image} className="rounded-circle"></img>
                    </div>
                    <div>
                      <h6 className="latest ">{latest.title}</h6>
                      <p className="latest-text">{latest.dateTime}</p>
                    </div>
                  </div>

                  <div>
                    <h6 className="card-atm text-end">${latest.transactions}</h6>
                  </div>
                </div>
                
                ))}
         
         <p className=" ms-2 total-balance-text mt-4">28 August</p>

                {transactionsTow.map((latestTow,key)=>(
                <div key={key} className="d-flex mt-2 border-bottom mt-2 justify-content-between mx-2">
                  <div className="d-flex justify-content-between">
                    <div className="me-3 mt-2">
                      <img src={latestTow.image} className="rounded-circle"></img>
                    </div>
                    <div>
                      <h6 className="latest ">{latestTow.title}</h6>
                      <p className="latest-text">{latestTow.dateTime}</p>
                    </div>
                  </div>

                  <div>
                    <h6 className="card-atm text-end">${latestTow.transactions}</h6>
                  </div>
                </div>
                
                ))}
            
          
        
            </>                
  )
}
