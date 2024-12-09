import React from "react";

const SupportData = ({ data1, data2, data3 }) => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        textAlign:'left',
        gap: 10,
      }}
    >
      <div style={{ height: 60, width: 60, border: "1px solid white",borderRadius:'5px' }} />
      <div
        style={{
          width: "auto",
          alignItems:'start',
          height: 60,
        }}
      >
        <p style={{ margin: 0, color: "#8e9fb1", fontWeight: 100 }}>{data1}</p>
        <h2 style={{ margin: 0, color: "#fff" }}>{data2}</h2>
        <p style={{ margin: 0, color: "#8e9fb1", fontWeight: 100 }}>{data3}</p>
      </div>
    </div>
  );
};

const Support = () => {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        height: "20vh",
        padding: "0 5%",
        backgroundColor: "#13365c",
      }}
    >
      <SupportData
        data1="Toll Free Number"
        data2="1-800-276-6508"
        data3="Mon-Fri 8am-6pm CST"
      />
      <SupportData
        data1="Frequently Asked Questions"
        data2="VIEW FAQ NOW"
        data3="Quick answers to common questions"
      />
      <SupportData
        data1="have any questions?"
        data2="EMAIL US"
        data3="Click here to email us"
      />
    </div>
  );
};

export default Support;
