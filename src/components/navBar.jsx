export default function NavBar() {
  const links = [
    
    { nome: "Sobre", href: "/about" },
    { nome: "Projetos", href: "/projects" },
    { nome: "Contato", href: "/contact" },
  ];

  return (
    <nav className="w-full flex fixed items-center z-10  justify-center px-6 py-8  ">
      <div className="w-full relative flex justify-center ">
        <button className="cursor-pointer text-white absolute left-0 font-bold text-xl">MeuPortifolio</button>
        <ul>
          {links.map((link) => (
            <li key={link.nome } className="inline-block"> 
              <a href={link.href} className=" text-white p-4 rounded-2xl bg-gray-700 mx-3  hover:bg-gray-500">
                {link.nome}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
3