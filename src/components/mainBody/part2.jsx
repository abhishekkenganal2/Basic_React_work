import workplace from "../../assets/workplay.webp";
import bbb from "../../assets/BBB.webp";
import rating from "../../assets/rating.webp";

const Part2 = () => {
  return (
    <div style={{ display: "flex", height: "75vh", position: "relative" }}>
      <div
        style={{
          flexDirection: "column",
          color: "white",
          flex: 1,
          backgroundColor: "#14253B",
        }}
      >
        <img
          src={bbb}
          style={{
            flex: 1,
            objectFit: "contain",
            width: "100%",
            height: "55%",
            padding: 0,
            margin: 0,
          }}
        />
        <img
          src={rating}
          style={{
            flex: 1,
            objectFit: "contain",
            width: "100%",
            height: "10%",
            padding: 0,
            margin: 0,
          }}
        />
        <h2 style={{margin:"0 0 5% 0",fontWeight:500}}>Great Customer Reviews</h2>
        <p style={{ fontSize: 20,margin:"0" }}>BBB A+ rating and 300k+ </p>
        <p style={{ fontSize: 20,margin:"0" }}> Reviews on Shopper Approved</p>
      </div>
      <div
        style={{
          flex: 1,
          padding: 0,
          margin: 0,
        }}
      >
        <img
          src={workplace}
          style={{
            flex: 1,
            height:"100%",
            width: "100%",
            padding: 0,
            margin: 0,
          }}
        />
      </div>
      <div
        style={{
          flex: 1,
          backgroundColor: "#F1F6FB",
          color: "black",
          textAlign:"start"
        }}
      >
        <div style={{padding:"10% 20%",textAlign:"left"}}>
          <h2>Work & Play</h2>
          <p style={{fontWeight:400, fontSize:"16px",lineHeight:'32px'}}>In addition to monthly team events and weekly catered lunches, JM Bullion hosts regular gatherings for employees to get to know each other. Our rapid growth requires that we work hard, but we never forget to mix in some play.</p>
        </div>
      </div>
    </div>
  );
};

export default Part2;
