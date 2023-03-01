import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Btc from "../pages/Btc";
import Busd from "../pages/Busd";
import Usdt from "../pages/Usdt";

export default class Router extends Component {
  render() {
    const paths = {
      home: "/",
      Btc: "/market/BTC_THB",
      Busd: "/market/BUSD_THB",
      Usdt: "/market/USDT_THB",
    };

    return (
      <Routes>
        <Route path={paths.Btc} element={<Btc />} />
        <Route path={paths.Busd} element={<Busd />} />
        <Route path={paths.Usdt} element={<Usdt />} />
      </Routes>
    );
  }
}
