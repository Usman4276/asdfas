import React, { useState, useEffect } from "react";
import axios from "axios";
import { ScaleLoader } from "react-spinners";

export default function products() {
  const [Data, setData] = useState([]);
  let response;
  const fun = async () => {
    response = await axios.get("/api/data");
    response ? setData(response.data) : null;
  };

  function Table() {
    return (
      <div className="div-container">
        <div className="table-main-container">
          <table className="table-container">
            <thead className="table-heading">
              <tr>
                <th>Product</th>
                <th>$Price</th>
              </tr>
            </thead>
            <tbody className="table-foot">
              {Data.map((val) => (
                <tr>
                  <td>{val.product}</td>
                  <td>${val.price}</td>
                  <td>
                    <button>Pay</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  function View() {
    if(Data.length===0){
      return <div className="loader"><ScaleLoader /></div>;
    }else{
      return <Table/>
    }
  }
 
  useEffect(() => {
    fun();
  }, []);

  return (
    <>
      <View /> 
    </>
  );
}
