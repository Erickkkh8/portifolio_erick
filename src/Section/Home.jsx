

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
      <div className="bg-gray-950 h-screen w-screen">
        <NavBar />
       378,
          <main className="pt-85 pl-20 gap-5  font-bold flex flex-col justify-start">
            <Texto_Animado
              className="text-4xl text-green-50"
              text="olá, eu sou o "
              start={step >= 0}
              onFinish={() => nextStep(1, 500)}
            />

            <Texto_Animado
              className="text-blue-500 text-6xl"
              text="Erick Henrique"
              start={step >= 1}
              onFinish={() => nextStep(2, 500)}
            />

            <Texto_Animado
              className="text-2xl text-gray-400"
              text="Desenvolvedor Front-End | JavaScript| React.js | Node.js"
              start={step >= 2}
            />
          </main>
      
      </div>

      <div className="absolute top-65 right-50 w-86 h-86 rounded-full overflow-hidden border-4 border-gray-500 hover:scale-110 hover:duration-300"> 

         <img 
          src="https://github.com/ErickHenrique.png"
           alt="Erick Henrique" />
      </div>

      <div>

      <h1 className="text-4xl text-white">sobre mim</h1>
      </div>
    </>
  );
}

export default Home;