import office1 from "../../assets/officelife1.webp";
import office2 from "../../assets/office-life-2.jpg";
import glass from "../../assets/glassdoor.png";

const Part3 = () => {
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
          src={office1}
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
            padding: 0,
            margin: 0,
          }}
        />
      </div>
      <div
        style={{
          flex: 1,
          padding: 0,
          margin: 0,
          backgroundColor: "#F1F6FB",
        }}
      >
        <div style={{padding:"10% 20%",textAlign:"left"}}>
          <h2>Office Life</h2>
          <p style={{fontWeight:400, fontSize:"16px",lineHeight:'32px'}}>JM Bullion is determined to be a rewarding business for both its customers and employees. As the company grows and the industry evolves, our team remains flexible and adaptable.</p>
        </div>
      </div>
      <div
        style={{
          flex: 1,
          alignItems:"center",
          color: "black",
          textAlign:"center"
        }}
      >
        <img
          src={office2}
          style={{
            flex: 1,
            height:"65%",
            width: "100%",
            padding: 0,
            margin: 0,
          }}
        />
        <img
          src={glass}
          style={{
            height:"auto",
            width: "65%%",
          }}
        />
      </div>
    </div>
  );
};

export default Part3;
