import { MapPin } from "lucide-react";
import { SectionLayout } from "@/components/SectionLayout";

const HistoryColombia = () => {
  return (
    <SectionLayout 
      title="Historia del Taekwondo en Colombia" 
      icon={<MapPin className="w-12 h-12" />}
    >
      <div className="space-y-6 text-foreground">
        <section>
          <h2 className="text-primary-light mb-4">Los Inicios (Década de 1970)</h2>
          <p className="text-lg leading-relaxed">
            El Taekwondo llegó a Colombia a finales de la década de 1960 y principios de 1970, cuando varios maestros coreanos decidieron establecerse en el país para difundir este arte marcial. Los primeros instructores fueron fundamentales para sentar las bases de lo que se convertiría en uno de los deportes más exitosos de Colombia a nivel internacional.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Entre los pioneros se destacan maestros como Kim Yong Su y otros instructores coreanos que abrieron las primeras escuelas (dojangs) en ciudades principales como Bogotá, Medellín y Cali.
          </p>
        </section>

        <section>
          <h2 className="text-primary-light mb-4">Organización Institucional (1977)</h2>
          <p className="text-lg leading-relaxed">
            En 1977 se fundó la Federación Colombiana de Taekwondo, marcando un hito importante en la organización y desarrollo del deporte en el país. Esta institución se encargó de:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
            <li>Establecer estándares técnicos y de enseñanza</li>
            <li>Organizar competencias nacionales</li>
            <li>Preparar atletas para competencias internacionales</li>
            <li>Certificar instructores y árbitros</li>
            <li>Promover el Taekwondo en todo el territorio nacional</li>
          </ul>
        </section>

        <section>
          <h2 className="text-primary-light mb-4">Primeros Éxitos Internacionales (1980-1990)</h2>
          <p className="text-lg leading-relaxed">
            Durante las décadas de 1980 y 1990, Colombia comenzó a destacarse en competencias internacionales, ganando medallas en campeonatos panamericanos y mundiales. Esto consolidó al Taekwondo como uno de los deportes con mayor potencial en el país.
          </p>
        </section>

        <section>
          <h2 className="text-primary-light mb-4">Era Dorada Olímpica (2000-Presente)</h2>
          <p className="text-lg leading-relaxed">
            Con la inclusión del Taekwondo como deporte olímpico oficial en Sydney 2000, Colombia ha brillado con intensidad:
          </p>
          
          <div className="mt-4 space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Medallas Olímpicas:</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Oro: Óscar Muñoz (Río 2016)</li>
                <li>Bronce: Óscar Muñoz (Londres 2012)</li>
                <li>Bronce: Óscar Muñoz (Tokio 2020)</li>
                <li>Plata: Yuberjen Martínez (Tokio 2020)</li>
              </ul>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Otros Atletas Destacados:</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>María del Rosario Espinoza</li>
                <li>Andrea Ramírez</li>
                <li>Diego García</li>
                <li>Andrés Felipe Córdoba</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-primary-light mb-4">Desarrollo Nacional</h2>
          <p className="text-lg leading-relaxed">
            Actualmente, Colombia cuenta con:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
            <li>Miles de practicantes en todo el país</li>
            <li>Cientos de escuelas y academias certificadas</li>
            <li>Programas de apoyo gubernamental para atletas de alto rendimiento</li>
            <li>Infraestructura deportiva especializada</li>
            <li>Sistema de ligas departamentales bien establecido</li>
            <li>Formación continua de instructores y árbitros internacionales</li>
          </ul>
        </section>

        <section>
          <h2 className="text-primary-light mb-4">Impacto Social</h2>
          <p className="text-lg leading-relaxed">
            El Taekwondo en Colombia ha trascendido lo deportivo, convirtiéndose en una herramienta de transformación social. Muchos programas utilizan el Taekwondo para:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
            <li>Alejar a los jóvenes de la violencia y las drogas</li>
            <li>Promover valores como el respeto y la disciplina</li>
            <li>Desarrollar habilidades para la vida</li>
            <li>Fortalecer la autoestima y confianza</li>
            <li>Crear oportunidades de desarrollo profesional</li>
          </ul>
        </section>

        <section>
          <h2 className="text-primary-light mb-4">El Futuro</h2>
          <p className="text-lg leading-relaxed">
            Colombia continúa siendo una potencia en Taekwondo a nivel mundial, con una sólida base de talentos jóvenes y un sistema de desarrollo deportivo cada vez más profesionalizado. El legado de los pioneros coreanos y el trabajo de generaciones de instructores y atletas colombianos han posicionado al país como referente internacional en este arte marcial.
          </p>
        </section>
      </div>
    </SectionLayout>
  );
};

export default HistoryColombia;
