import { useState, useEffect } from "react";
import apiClient from "../funcs/apiClient.js";
export default (id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);
    apiClient
      .get(`/comments`)
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });

  }, [id]);

  return {
    data,
    loading,
    error
  };

};
