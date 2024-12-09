import body1 from "../../assets/body1.webp";

const MainPart = () => {
  return (
    <div
      style={{ display: "flex",height:"100%",width:"100%", position: "relative", padding: 0, margin: 0 }}
    >
      <img
        src={body1}
        style={{
          flex: 1,
          objectFit: "contain",
          width: "100%",
          height:"100%",
          padding: 0,
          margin: 0,
        }}
      />
    </div>
  );
};

export default MainPart;
