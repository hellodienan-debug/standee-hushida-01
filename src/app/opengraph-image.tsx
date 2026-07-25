import {ImageResponse} from "next/og";
export const runtime="edge";
export const alt="Hushida Digital Signage 50 inch — SHT";
export const size={width:1200,height:630};
export const contentType="image/png";
export default function Image(){return new ImageResponse(<div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",padding:80,background:"#071b2b",color:"white",fontFamily:"sans-serif"}}><div style={{fontSize:44,fontWeight:800,color:"#f28a2e"}}>SHT.</div><div style={{fontSize:64,fontWeight:800,lineHeight:1.05,marginTop:28}}>Biến mỗi không gian thành một điểm chạm thương hiệu số.</div><div style={{fontSize:28,marginTop:28,color:"#d4e0e8"}}>Hushida Digital Signage 50 inch</div></div>,{...size});}
