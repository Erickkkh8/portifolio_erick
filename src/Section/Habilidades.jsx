import { Texto_Animado } from "../components/Texto_Animado";

export default function Habilidades() {
  const languages = [
    { name: "HTML5", icon: "assets/languages/html.svg" },
    { name: "CSS3", icon: "assets/languages/css.svg" },
    { name: "JavaScript", icon: "assets/languages/javascript.svg" },
    { name: "TypeScript", icon: "assets/languages/typescript.svg" },
    { name: "React.js", icon: "assets/languages/react.svg" },
    { name: "Next.js", icon: "assets/languages/nextjs.svg" },
    { name: "CSS-in-JS", icon: "assets/languages/styledcomponents.svg" },
    { name: "Material UI", icon: "assets/languages/materialui.svg" },
    { name: "Tailwind CSS", icon: "assets/languages/tailwindcss.svg" },
    { name: "GraphQL", icon: "assets/languages/graphql.svg" },
    { name: "Apollo", icon: "assets/languages/apollo.svg" },
    { name: "Redux", icon: "assets/languages/redux.svg" },
    { name: "React Query", icon: "assets/languages/reactquery.svg" },
    { name: "React Testing", icon: "assets/languages/testing.svg" },
    { name: "Strapi", icon: "assets/languages/strapi.svg" },
    { name: "Storybook", icon: "assets/languages/storybook.svg" },
    { name: "SASS", icon: "assets/languages/sass.svg" },
    { name: "Figma", icon: "assets/languages/figma.svg" },
  ];
  return (
    <>
     

     
      <h1 className="flex items-center justify-center py-20 text-4xl text-white">Habilidades</h1>

      <div className="w-full px-100  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {languages.map((language, index) => (
            <div
            key={index}
            className="group bg-zinc-900
            max-w-40
            rounded-2xl
            p-6
            flex flex-col items-center justify-center
            cursor-pointer
            transition-all duration-300 ease-out
            hover:scale-110
            hover:shadow-[0_20px_40px_rgba(255,255,255,0.15)] "
            >
            <p className="text-white font-semibold mb-3">{language.name}</p>

            <img
              src={language.icon}
              alt={language.name}
              className="
              w-14 h-14
              transition-transform duration-300
              group-hover:scale-125 group-hover:rotate-3
              "
              />
          </div>
        ))}
      </div>
     
        
        </>
    
  );
}
