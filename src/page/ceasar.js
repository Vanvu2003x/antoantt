import { Link } from "react-router-dom";
import { Alert } from "@mui/material";
import { useState } from "react";
const ceasarCipher = (text,key)=>{

  
    text = text.toUpperCase().trim().split(" ").join('');
      let result = '';
      for (let i = 0; i < text.length; i++) {
        if(text.charAt(i)<"A"||text.charAt(i)>"Z")
        {
          return null;
  
        }
        else{
          let ascii = text.charCodeAt(i);
          let newAscii;
          if(Number(key)+Number(ascii)>90)
              newAscii = (Number(key)+Number(ascii) - 26);
          else if(Number(key)+Number(ascii)<65){      
              newAscii = (Number(key)+Number(ascii) + 26);
          }
          
          else
              newAscii = Number(key)+Number(ascii);
          result += String.fromCharCode(newAscii);
        }
        
      }
      
      return result;
  }
  
  const ceasarDecipher = (text,key) =>{
    return ceasarCipher(text,-key);
  }

function Ceasar(){
    const [alerts,setAlerts] = useState([]);


    const [text,setText] = useState('');
    const [key, setKey] = useState(0);
    const [output,setOutput] = useState('');
    
 
    const handlerEncrypt = () =>{
        if(ceasarCipher(text,key)==null)
        {
          const newAlert = <Alert severity="error">This is an error Alert.</Alert>;
          setAlerts([newAlert,...alerts]);
          
           setTimeout(()=>{
            setAlerts((prevAlerts) => {prevAlerts.filter(alert => alert !== newAlert)});
    
          },2000)
        }
        
          setOutput(ceasarCipher(text,key));
      }
    
      const handlerDecrypt = ()=>{
        setOutput(ceasarDecipher(text,key));
      }


    return (
        <>
            <div className="absolute top-44 right-24">
            {
                Array.isArray(alerts) ? alerts.map((alert, index) => (
                <div key={index}>{alert}</div>
            )) : setAlerts([[]])}
            </div>
            <div className="box-border p-10 m-0 flex justify-center items-center bg-slate-200 grow">
              <form action="" className="w-72 border-2 rounded-md p-6 bg-white">
                  <h1 className="text-center m-2 text-xl font-bold">Mật mã Ceasar</h1>
                  <label  htmlFor="text" className="cursor-pointer font-bold my-2">Text</label>
                  <textarea  onChange={(e)=>setText(e.target.value)} name="" id="text"  rows="3" className="w-full border-2 outline-none py-1 px-2  my-2 resize-none"></textarea>
                  <div className="flex justify-between">
                  <label className="font-bold" htmlFor="key">Khóa k = </label>
                  <input className="w-8/12 outline-0 border-2" value={key} onChange={(e)=> setKey(Number(e.target.value))} type="number" name="" id="" min="0" placeholder="0" />
                  </div>
                  <div className="flex justify-evenly my-2 pt-2">
                  <button type="button" onClick={handlerEncrypt} className="bg-blue-500 rounded-md p-2 text-white"  id="btn_en">Encrypt</button>
                  <button type="button" onClick={handlerDecrypt} className="bg-red-500 rounded-md p-2 text-white" id="btn_de">Decrypt</button>
                  </div>

                  <label className="font-bold" htmlFor="">Đầu ra</label>
                  <div className="h-8 bg-slate-300 my-2 flex items-center p-2">{output}</div>
            </form>
            </div>
        </>
    )
}

export default Ceasar;