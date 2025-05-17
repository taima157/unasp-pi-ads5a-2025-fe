import dynamic from "next/dynamic";

const CardComponent = dynamic(() => import("@/components/quem-somos/card"), {
  ssr: false,
});
const BackgroundComponent = dynamic(() => import("@/components/background"), {
  ssr: false,
});

// Arrays com todos os membros do projeto
const TeamMembers = [
  {
    Nome: "Gustavo Taima"
  },
  {
    Nome: "Eduarda Ribas"
  },
  {
    Nome: "Felipe da Costa"
  },
  {
    Nome: "Marcos Vinicius",
  },
];

export default function QuemSomos() {
  return (
    <>
      <BackgroundComponent className="min-h-screen grid place-content-center">
        <div className="flex flex-col p-4">

          {/* Quem somos */}
          <h2 className="font-bold text-3xl">Quem somos?</h2>
          <p className="max-w-sm sm:max-w-3xl lg:max-w-6xl">
            Somos uma equipe apaixonada de desenvolvedores que combinam
            tecnologia e conhecimento jurídico para criar uma plataforma
            inovadora. Nosso objetivo é tornar o acesso à justiça mais fácil e
            acessível para todos, conectando as pessoas a advogados experientes
            e oferecendo suporte da comunidade.
          </p>

          {/* Todos os membros do projeto */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12 mb-40 gap-8">
            {TeamMembers.map((member) => {
              return <CardComponent key={member.Nome} {...member} />;
            })}
          </div>
        </div>
      </BackgroundComponent>
    </>
  );
}
