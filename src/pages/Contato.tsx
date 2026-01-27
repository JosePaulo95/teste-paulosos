import Layout from "@/components/Layout";
import { Phone, Mail, Instagram } from "lucide-react";
import ImageGallery from "@/components/ImageGallery";

const Contato = () => {
  return (
    <Layout>
      <section className="pt-24 pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          
          <span className="text-primary text-sm tracking-editorial uppercase mb-4 block">
            Contato
          </span>

          <h1 className="font-display text-4xl md:text-5xl mb-6">
            Vamos conversar
          </h1>

          <p className="text-muted-foreground text-base md:text-lg mb-12">
            Entre em contato para orçamentos, parcerias ou dúvidas.
          </p>

          <div className="space-y-6">
            
            <a
              href="https://wa.me/559888839166"
              className="flex items-center justify-center gap-3 border border-border rounded-lg py-4 hover:bg-muted transition"
            >
              <Phone size={20} />
              <span className="text-base">+55 98 8883-9166</span>
            </a>

            <a
              href="mailto:pauloandreesc@gmail.com"
              className="flex items-center justify-center gap-3 border border-border rounded-lg py-4 hover:bg-muted transition"
            >
              <Mail size={20} />
              <span className="text-base">pauloandreesc@gmail.com</span>
            </a>

            <a
              href="https://instagram.com/_parecer.paulo"
              target="_blank"
              className="flex items-center justify-center gap-3 border border-border rounded-lg py-4 hover:bg-muted transition"
            >
              <Instagram size={20} />
              <span className="text-base">@_parecer.paulo</span>
            </a>

          </div>
        </div>
      </section>

      {/* Galeria de imagens responsiva */}
      <section className="pt-12 pb-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-display text-2xl mb-6">Galeria</h2>

          {/* Carrega imagens estáticas da pasta public/assets/projects */}
          {(() => {
            // Mostrar uma imagem por projeto (pasta) — prioriza uma miniatura representativa
            const GALLERY_LIMIT = 12; // quantidade máxima de projetos mostrados
            
            // Lista de projetos com suas primeiras imagens
            const projectImages: Record<string, string> = {
              afropunk: '/assets/projects/afropunk/@_parecer.pauloIMG_1718.jpg',
              coral: '/assets/projects/coral/@_parecer.pauloIMG_0284.jpg',
              desfile: '/assets/projects/desfile/@_parecer.paulo@_parecer.paulo_MG_4364.jpg',
              graduation: '/assets/projects/graduation/@_parecer.paulo_MG_0062.jpg',
              palestras: '/assets/projects/palestras/@_parecer.pauloIMG_4193.jpg',
              theater: '/assets/projects/theater/@_parecer.paulo_MG_0242.jpg',
            };

            // Para cada projeto pegue a primeira imagem ordenada por nome de pasta
            const projects = Object.keys(projectImages).sort();
            const representative: string[] = projects.map((p) => projectImages[p]).filter(Boolean);

            // Limita ao número definido
            const limited = representative.slice(0, GALLERY_LIMIT);

            return <ImageGallery images={limited} />;
          })()}
        </div> 
        
      </section>
    </Layout>
  );
};

export default Contato;
