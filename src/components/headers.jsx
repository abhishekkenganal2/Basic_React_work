import GPTW from "../assets/GPTW.webp";
import people_Love from "../assets/people_Love.webp";
import GPW from "../assets/great-place-certified.png";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        backgroundColor: "#101623",
        height: "55vh",
      }}
    >
      <div style={{position:'relative', flex:1}}>
        <div
          style={{
            position: 'absolute',
            bottom:0,
            width: '100%',
            borderTop: '50px solid #D6CCB6',
            borderRight: '15px solid transparent'
          }}
        />
        <img src={GPTW} style={{position: 'absolute',left:5, objectFit: 'contain',width: '100%',height: '100%'}} />
      </div>
      <div style={{ flex: 2, color:'white' }}>
        <img src={people_Love} alt="" srcset="" style={{objectFit: 'contain',margin:0,width: '80%',height: '25%',padding:'5% 0 0 0'}}/>
        <h1 style={{margin:0}}><b>Great Place to Work Certified</b></h1>
        <div style={{flexDirection:"row"}}>
           <p style={{fontSize:20,margin:5,padding:0,fontWeight:500}}>------  We just received our 9<sup>th</sup> year in a row  ------</p></div>
        <p style={{fontSize:25,margin:0}}><i>for work environment and facilities </i></p>
      </div>
      <div style={{ flex: 1}}>
        <img src={GPW} alt="" srcset="" style={{objectFit: 'contain',width: '100%',height: '80%',padding:'10% 0 0 0'}}/>
      </div>
    </div>
  );
};

export default Header;
