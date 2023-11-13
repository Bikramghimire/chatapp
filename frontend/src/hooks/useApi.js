import React, { useState } from "react";
import request from "../utils/request";

const useAPI = () => {
  const [state, setState] = useState({
    loading: false,
    error: "",
    data: null,
  });
  const makeRequest = async (config) => {
    try {
      setState({
        loading: true,
        error: "",
        data: state.data,
      });
      const res = await request(config);
      setState({
        loading: false,
        error: "",
        data: res,
      });
      return res;
    } catch (error) {
      setState({
        loading: false,
        error: error,
        data: state.data,
      });
    }
  };

  return [makeRequest, state];
};

export default useAPI;
