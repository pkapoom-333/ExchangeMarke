import React from "react";
import { Card } from "antd";
import "./styles.scss";

export function CustomCard({ displayName, lastPrice, quoteVolume }) {
  return (
    <Card className="card-wrapper" style={{ width: 300 }}>
      <div className="ticker-card">
        <h2>{displayName}/THB</h2>
        <h3>{parseFloat(lastPrice).toLocaleString("en-US")}</h3>
        <h5>Volume: {parseFloat(quoteVolume).toLocaleString("en-US")}</h5>
      </div>
    </Card>
  );
}
