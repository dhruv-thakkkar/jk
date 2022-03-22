import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";

function PackageDetails() {
  const [Data, setData] = useState([]);

  const { id } = useParams();
  const fetchData = () => {
    var url = "http://localhost:3000/api/v1/packages/get-package";
    axios
      .post(url, { "category_id": id })
      .then((response) => {
        if (response.data) {
          console.log(response.data)
          setData((e) => response.data)
        }
      })
      .catch((error) => {
        if (error.response) {
        }
      });

  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {(Data && Data.message) ?
        Data.message.map(function (arr, i) {
          return (
            <Link to={"/package/"+arr._id}>{arr.package_title}</Link>
          )
        })
        : null}
    </div>
  );
}
export default PackageDetails;
