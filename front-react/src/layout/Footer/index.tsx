import { Logos } from "@/components/config/Logos";
export default function Footer() {
  return (

    <footer>
      <div className="rodape bg-gray-800 flex justify-evenly py-8 text-xs text-white">
        <div className="inf flex gap-24">
          <div className="informacoesLegais flex flex-col">
            <p className="text-lg mb-10 ">Informações Legais</p>
            <div className="flex flex-col gap-2">
              <a href="politica-de-privacidade">Política de privacidade</a>
              <a href="#">Política de Cookies</a>
              <a href="#">Preferências de Cookies</a>
              <a href="#">Política de divulgação de vulnerabilidade</a>
            </div>
          </div>
          <div className="contato flex flex-col">
            <p className="text-lg mb-10">Contato</p>
            <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5537999641014">
              <p className="text-xl mb-5">WhatsApp</p>
              <p className="text-white mb-1">Ou ligue</p>
              <p>(+XX X XXXX-XXXX)</p>
            </a>
          </div>
          <div className="endereco flex flex-col">
            <p className="text-lg mb-10">Endereço</p>
            <p className="text-white">
              Rua da Bahia n°573 Centro Belo Horizonte MG
            </p>
          </div>
        </div>


        <div className="dados">
          <div className="marca">
            <img src={Logos.images.logo.footer} className="w-72" alt="Logo" />
          </div>
        </div>
      </div>


      <div className="copyright bg-zinc-900 py-4 text-xs text-gray-200 text-center">
        Copyright © 2024-2024 Orbitech | Developed in NLW by {" "}
        <a href="#">Paulo Campos</a>
      </div>
    </footer>


  );
}
