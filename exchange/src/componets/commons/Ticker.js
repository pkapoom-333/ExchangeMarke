import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import * as actions from "../../redux/actions/counter.action";
import { CustomCard } from "../custom-card/CustomCard";

export default function Ticker(props) {
  const { currencyPair } = props;
  const name = currencyPair.split("_")[0].toUpperCase();
  const dispatch = useDispatch();
  const data = useSelector((state) =>
    state.tickerData
      ? state.tickerData.find((data) => data.symbol === currencyPair)
      : undefined
  );

  useEffect(() => {
    dispatch(actions.fetchData());
  }, [dispatch]);

  return (
    <>
      {data ? (
        <CustomCard
          displayName={name}
          lastPrice={data?.lastPrice}
          quoteVolume={data?.quoteVolume}
        />
      ) : (
        <Spin
          indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
          size="large"
        />
      )}
    </>
  );
}
