import { useState, useEffect, useRef} from "react";

export function Texto_Animado({ 
  text,
  className,
  start,
  onFinish,
  speed = 100
}) {

  const [textoAnimado, setTextoAnimado] = useState("");
    const jaAnimou = useRef(false);


  useEffect(() => {
    if (!start || jaAnimou.current) return;
    
    setTextoAnimado("");
    let i = 0;
     
    const interval = setInterval(() => {
        setTextoAnimado(text.slice(0, i + 1));
        i++;
        
        if (i >= text.length) {
            clearInterval(interval);
             jaAnimou.current = true; 
            onFinish && onFinish();
        }
    }, speed);
      return () => clearInterval(interval);
  }, [start, text, speed, onFinish]);

   return <h1 className={className}>{textoAnimado}</h1>;
  }