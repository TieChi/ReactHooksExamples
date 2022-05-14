import { useState, useEffect } from "react";
import apiClient from "../funcs/apiClient.js";
export default (id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  apiClient
    .get(`posts/1`)
    .then((res) => {
      setData(res);
    })
    .catch((err) => {
      setError(err);
    });
  return {
    data,
    loading,
    error
  };
};
