import NavBar from "../components/navBar";
import { Texto_Animado } from "../components/Texto_Animado";
import { useState } from "react";

function Home() {
  const [step, setStep] = useState(0);

  const nextStep = (value, delay = 500) => {
    setTimeout(() => {
      setStep(value);
    }, delay);
  };
  return (
    <>
      <div className=" max-h-screen max-w-screen min-h-250">
        <NavBar />
      
        <main className="pt-85 pl-20   font-bold flex flex-col justify-start">
          <Texto_Animado
            className="text-4xl text-green-50 pb-4 absolute"
            text="olá, eu sou o "
            start={step >= 0}
            onFinish={() => nextStep(1, 500)}
          />

          <Texto_Animado
            className="text-blue-500 text-6xl py-10 absolute"
            text="Erick Henrique"
            start={step >= 1}
            onFinish={() => nextStep(2, 500)}
          />

          <Texto_Animado
            className="text-2xl text-gray-400 absolute py-25"
            text="Desenvolvedor Front-End | JavaScript| React.js | Node.js"
            start={step >= 2}
          />
        </main>
        <div className="relative bottom-30 left-310 w-86 h-86 rounded-full overflow-hidden border-4 border-gray-500 hover:scale-110 hover:duration-300">
          <img
            src="https://github.com/ErickHenrique.png"
            alt="Erick Henrique"
          />

        </div>
          <div>
            <div className=" relative flex flex-col py-4 w-full justify-center items-center p-4">
              <h1 className=" flex  text-4xl text-white">
                sobre mim
              </h1>
              <p className="text-white text-center p-4">
                Olá! Eu sou um desenvolvedor front-end apaixonado por criar  
                experiências web incríveis. <br />
                 Com habilidades em JavaScript,    
                React.js e Node.js, estou sempre em busca de novos desafios e 
                 <br />
                oportunidades para aprender e crescer na área de tecnologia.
              </p>
            </div>
          </div>
      </div>
    </>
  );
}

export default Home;
