import { Globe } from "lucide-react";
import { SectionLayout } from "@/components/SectionLayout";

const Organizations = () => {
  return (
    <SectionLayout 
      title="Organizaciones que avalan la World Taekwondo" 
      icon={<Globe className="w-12 h-12" />}
    >
      <div className="space-y-6 text-foreground">
        <section>
          <h2 className="text-primary-light mb-4">¿Qué es World Taekwondo (WT)?</h2>
          <p className="text-lg leading-relaxed">
            <strong>World Taekwondo (WT)</strong>, anteriormente conocida como World Taekwondo Federation (WTF) hasta 2017, es el organismo rector internacional del Taekwondo. Fundada en 1973, la WT es responsable de regular y promover el Taekwondo como deporte olímpico en todo el mundo.
          </p>
          <div className="mt-4 p-4 bg-primary/5 border-l-4 border-primary rounded-r-lg">
            <p className="text-lg"><strong>Sede:</strong> Seúl, Corea del Sur</p>
            <p className="text-lg"><strong>Fundación:</strong> 28 de mayo de 1973</p>
            <p className="text-lg"><strong>Miembros:</strong> Más de 200 países</p>
            <p className="text-lg"><strong>Reconocimiento:</strong> Comité Olímpico Internacional (IOC) desde 1980</p>
          </div>
        </section>

        <section>
          <h2 className="text-primary-light mb-4">Estructura de la World Taekwondo</h2>
          <p className="text-lg leading-relaxed mb-4">
            La WT funciona a través de una red de organizaciones regionales y nacionales que trabajan en conjunto para desarrollar y promover el Taekwondo globalmente:
          </p>
        </section>

        <section>
          <h2 className="text-primary-light mb-4">Kukkiwon (국기원)</h2>
          <div className="p-6 bg-card border-2 border-primary rounded-xl shadow-elegant">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-3xl font-bold">
                K
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary">Kukkiwon</h3>
                <p className="text-muted-foreground">Sede Mundial del Taekwondo</p>
              </div>
            </div>
            
            <p className="text-lg leading-relaxed mb-4">
              El Kukkiwon, también conocido como <strong>"World Taekwondo Headquarters"</strong>, es el centro oficial de investigación, desarrollo y certificación del Taekwondo. Establecido en 1972 en Seúl, Corea del Sur.
            </p>

            <div className="mt-4">
              <h4 className="font-semibold text-lg mb-3">Funciones principales:</h4>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Certificación de Dan:</strong> Emite certificados oficiales de cinturón negro reconocidos mundialmente</li>
                <li><strong>Estandarización:</strong> Define y mantiene los estándares técnicos del Taekwondo WT</li>
                <li><strong>Educación:</strong> Forma y certifica instructores internacionales</li>
                <li><strong>Investigación:</strong> Desarrolla y documenta técnicas, poomsae y teoría</li>
                <li><strong>Preservación:</strong> Mantiene la integridad y autenticidad del Taekwondo tradicional</li>
                <li><strong>Centro de entrenamiento:</strong> Facility con gimnasios y salas de entrenamiento de clase mundial</li>
              </ul>
            </div>

            <div className="mt-4 p-3 bg-muted rounded-lg">
              <p className="text-lg">
                <strong>Dato importante:</strong> Solo los certificados de Dan emitidos por Kukkiwon son reconocidos oficialmente por World Taekwondo y aceptados internacionalmente para competencias y enseñanza.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-primary-light mb-4">Uniones Continentales</h2>
          <p className="text-lg leading-relaxed mb-6">
            La World Taekwondo opera a través de cinco uniones continentales que supervisan el desarrollo del Taekwondo en sus respectivas regiones:
          </p>

          <div className="space-y-6">
            <div className="p-5 bg-secondary/5 border-l-4 border-secondary rounded-r-lg">
              <h3 className="text-xl font-bold text-secondary mb-3 flex items-center gap-2">
                🌎 PATU - Pan American Taekwondo Union
              </h3>
              <p className="text-lg leading-relaxed mb-3">
                <strong>Región:</strong> América (Norte, Centro, Sur y el Caribe)
              </p>
              <p className="text-lg leading-relaxed mb-3">
                <strong>Fundación:</strong> 1978
              </p>
              <p className="text-lg leading-relaxed">
                PATU es una de las uniones continentales más fuertes, con países como México, Estados Unidos, Colombia y Brasil produciendo atletas de élite olímpica. Organiza campeonatos panamericanos y juegos panamericanos, además de promover el desarrollo del Taekwondo en toda América.
              </p>
              <div className="mt-3 p-3 bg-background rounded-lg">
                <p className="text-lg"><strong>Países destacados:</strong> México, Estados Unidos, Colombia, Brasil, Cuba, República Dominicana</p>
              </div>
            </div>

            <div className="p-5 bg-accent/5 border-l-4 border-accent rounded-r-lg">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                🌍 AFTU - African Taekwondo Union
              </h3>
              <p className="text-lg leading-relaxed mb-3">
                <strong>Región:</strong> África
              </p>
              <p className="text-lg leading-relaxed mb-3">
                <strong>Fundación:</strong> 1980
              </p>
              <p className="text-lg leading-relaxed">
                La AFTU ha experimentado un crecimiento significativo en las últimas décadas, con países como Egipto, Nigeria, Costa de Marfil y Níger produciendo atletas competitivos a nivel mundial. La unión trabaja activamente en el desarrollo de infraestructura y programas de formación en todo el continente.
              </p>
            </div>

            <div className="p-5 bg-primary/5 border-l-4 border-primary rounded-r-lg">
              <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                🌏 ATU - Asian Taekwondo Union
              </h3>
              <p className="text-lg leading-relaxed mb-3">
                <strong>Región:</strong> Asia
              </p>
              <p className="text-lg leading-relaxed mb-3">
                <strong>Fundación:</strong> 1976
              </p>
              <p className="text-lg leading-relaxed">
                Como la cuna del Taekwondo, Asia alberga las potencias más dominantes del deporte. Corea del Sur, China, Irán, Jordania y Tailandia son solo algunos de los países que consistentemente producen campeones mundiales y olímpicos. La competencia en Asia es extremadamente alta.
              </p>
              <div className="mt-3 p-3 bg-background rounded-lg">
                <p className="text-lg"><strong>Nota:</strong> Corea del Sur es considerada la superpotencia indiscutible del Taekwondo mundial.</p>
              </div>
            </div>

            <div className="p-5 bg-muted border-l-4 border-primary-light rounded-r-lg">
              <h3 className="text-xl font-bold text-primary-light mb-3 flex items-center gap-2">
                🇪🇺 ETU - European Taekwondo Union
              </h3>
              <p className="text-lg leading-relaxed mb-3">
                <strong>Región:</strong> Europa
              </p>
              <p className="text-lg leading-relaxed mb-3">
                <strong>Fundación:</strong> 1976
              </p>
              <p className="text-lg leading-relaxed">
                Europa es una región extremadamente competitiva con países como España, Francia, Gran Bretaña, Italia, Turquía y Rusia produciendo atletas de élite. La ETU organiza campeonatos europeos anuales que son considerados entre los más competitivos fuera de Asia.
              </p>
            </div>

            <div className="p-5 bg-secondary/5 border-l-4 border-secondary rounded-r-lg">
              <h3 className="text-xl font-bold text-secondary mb-3 flex items-center gap-2">
                🦘 OTU - Oceania Taekwondo Union
              </h3>
              <p className="text-lg leading-relaxed mb-3">
                <strong>Región:</strong> Oceanía (Australia, Nueva Zelanda, islas del Pacífico)
              </p>
              <p className="text-lg leading-relaxed mb-3">
                <strong>Fundación:</strong> 1994
              </p>
              <p className="text-lg leading-relaxed">
                Aunque es la unión continental más pequeña, OTU ha producido atletas competitivos, especialmente de Australia. La región continúa desarrollando su base de practicantes y mejorando su infraestructura deportiva.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-primary-light mb-4">Federaciones Nacionales</h2>
          <p className="text-lg leading-relaxed">
            Cada país miembro de la World Taekwondo opera a través de una Federación Nacional que es responsable de:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
            <li>Organizar competencias nacionales</li>
            <li>Seleccionar y entrenar equipos nacionales</li>
            <li>Certificar instructores y árbitros</li>
            <li>Promover el Taekwondo en escuelas y comunidades</li>
            <li>Mantener estándares de calidad en la enseñanza</li>
            <li>Coordinar con las uniones continentales y la WT</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-primary-light mb-4">Otras Organizaciones Importantes</h2>
          
          <div className="space-y-4 mt-4">
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Comité Olímpico Internacional (IOC)</h3>
              <p className="text-lg">
                El IOC reconoció oficialmente a la WT en 1980, y el Taekwondo se convirtió en deporte olímpico oficial en los Juegos de Sydney 2000. Esta relación ha elevado el perfil global del Taekwondo.
              </p>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold text-primary mb-2">GAISF (Global Association of International Sports Federations)</h3>
              <p className="text-lg">
                La WT es miembro de GAISF (anteriormente SportAccord), una organización paraguas que agrupa a federaciones deportivas internacionales.
              </p>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold text-primary mb-2">WADA (World Anti-Doping Agency)</h3>
              <p className="text-lg">
                La WT trabaja en estrecha colaboración con WADA para mantener el Taekwondo limpio de dopaje, implementando estrictas políticas y controles antidopaje.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-primary-light mb-4">Diferencia: WT vs ITF</h2>
          <div className="p-5 bg-card border border-border rounded-lg">
            <p className="text-lg leading-relaxed mb-3">
              Es importante notar que existen dos organizaciones principales de Taekwondo a nivel mundial:
            </p>
            <ul className="space-y-3">
              <li>
                <strong className="text-primary">World Taekwondo (WT):</strong> Estilo olímpico, basado en Kukkiwon, enfocado en sparring deportivo con protectores electrónicos, técnicas de patada de alto nivel. Es el más difundido globalmente.
              </li>
              <li>
                <strong className="text-secondary">International Taekwon-Do Federation (ITF):</strong> Fundada por el General Choi Hong Hi en 1966, enfatiza diferentes formas (Tul en lugar de Poomsae), sparring de contacto ligero, y tiene un enfoque más tradicional de defensa personal.
              </li>
            </ul>
            <p className="mt-3 text-lg">
              Ambas son válidas y legítimas, pero tienen enfoques técnicos y filosóficos diferentes. La WT es la organización reconocida olímpicamente.
            </p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-primary-light mb-4">Impacto Global</h2>
          <div className="p-6 bg-gradient-korean text-black rounded-xl shadow-elegant">
            <p className="text-lg leading-relaxed">
              A través de su estructura organizacional, la World Taekwondo ha logrado:
            </p>
            <ul className="space-y-2 mt-4 text-lg">
              <li>✦ Estandarizar el Taekwondo en más de 200 países</li>
              <li>✦ Establecer el Taekwondo como deporte olímpico permanente</li>
              <li>✦ Promover valores de paz, respeto y fair play globalmente</li>
              <li>✦ Crear oportunidades para millones de practicantes</li>
              <li>✦ Desarrollar programas de Taekwondo para refugiados y comunidades vulnerables</li>
              <li>✦ Mantener la integridad técnica y filosófica del arte marcial</li>
            </ul>
            <p className="mt-4 text-lg leading-relaxed">
              Esta red de organizaciones trabaja en conjunto para asegurar que el Taekwondo continúe creciendo como deporte, arte marcial y herramienta de desarrollo personal para futuras generaciones.
            </p>
          </div>
        </section>
      </div>
    </SectionLayout>
  );
};

export default Organizations;
