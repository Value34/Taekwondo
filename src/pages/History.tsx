import { History as HistoryIcon } from "lucide-react";
import { SectionLayout } from "@/components/SectionLayout";

const History = () => {
  return (
    <SectionLayout 
      title="Historia y Evolución del Taekwondo" 
      icon={<HistoryIcon className="w-12 h-12" />}
    >
      <div className="space-y-6 text-foreground">
        <section>
          <h2 className="text-primary-light mb-4">Orígenes Antiguos</h2>
          <p className="text-lg leading-relaxed">
            Las raíces del Taekwondo se remontan a más de 2,000 años atrás, en los antiguos reinos de Corea. Durante el periodo de los Tres Reinos (57 a.C. - 668 d.C.), se desarrollaron diferentes formas de artes marciales:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
            <li><strong className="text-primary">Koguryo:</strong> Practicaban el Subak y Taekkyeon</li>
            <li><strong className="text-primary">Silla:</strong> Desarrollaron el Hwarang-do con los guerreros Hwarang</li>
            <li><strong className="text-primary">Baekje:</strong> También tenían sus propias tradiciones marciales</li>
          </ul>
        </section>

        <section>
          <h2 className="text-primary-light mb-4">Periodo de Ocupación Japonesa (1910-1945)</h2>
          <p className="text-lg leading-relaxed">
            Durante la ocupación japonesa de Corea, la práctica de artes marciales coreanas fue prohibida. Sin embargo, algunos maestros continuaron practicando en secreto y también estudiaron artes marciales japonesas como el Karate. Esta fue una época oscura para la identidad marcial coreana, pero sentó las bases para lo que vendría después.
          </p>
        </section>

        <section>
          <h2 className="text-primary-light mb-4">Nacimiento del Taekwondo Moderno (1945-1955)</h2>
          <p className="text-lg leading-relaxed">
            Después de la liberación de Corea en 1945, varios maestros comenzaron a abrir escuelas (Kwan) de artes marciales en Seúl:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
            <li>Chung Do Kwan (1944) - Lee Won Kuk</li>
            <li>Moo Duk Kwan (1945) - Hwang Kee</li>
            <li>Song Moo Kwan (1946) - Ro Byung Jick</li>
            <li>Chang Moo Kwan (1946) - Yoon Byung In</li>
            <li>Ji Do Kwan (1946) - Chun Sang Sup</li>
          </ul>
          <p className="mt-4 text-lg leading-relaxed">
            Cada Kwan tenía sus propias técnicas y filosofías, pero todas compartían raíces coreanas.
          </p>
        </section>

        <section>
          <h2 className="text-primary-light mb-4">Unificación y Nombre Oficial (1955-1961)</h2>
          <p className="text-lg leading-relaxed">
            El 11 de abril de 1955, el General Choi Hong Hi propuso el nombre "Taekwondo" para unificar las diferentes escuelas bajo un solo nombre. Este nombre fue elegido por su conexión con el antiguo Taekkyon y por representar mejor la identidad coreana. En 1961, se fundó la Asociación Coreana de Taekwondo (KTA).
          </p>
        </section>

        <section>
          <h2 className="text-primary-light mb-4">Expansión Internacional (1966-1973)</h2>
          <p className="text-lg leading-relaxed">
            En 1966, el General Choi Hong Hi fundó la Federación Internacional de Taekwondo (ITF), comenzando la expansión global del arte marcial. Sin embargo, diferencias políticas llevaron a una división. En 1973, se fundó la Federación Mundial de Taekwondo (WTF, ahora World Taekwondo o WT) en Corea del Sur, y se estableció el Kukkiwon como la sede central del Taekwondo.
          </p>
        </section>

        <section>
          <h2 className="text-primary-light mb-4">Reconocimiento Olímpico (1988-2000)</h2>
          <p className="text-lg leading-relaxed">
            El Taekwondo fue deporte de demostración en los Juegos Olímpicos de Seúl 1988 y Barcelona 1992. Finalmente, en los Juegos Olímpicos de Sydney 2000, el Taekwondo se convirtió en un deporte olímpico oficial, marcando el reconocimiento mundial de este arte marcial coreano.
          </p>
        </section>

        <section>
          <h2 className="text-primary-light mb-4">Era Moderna (2000-Presente)</h2>
          <p className="text-lg leading-relaxed">
            Hoy en día, el Taekwondo se practica en más de 200 países con millones de practicantes en todo el mundo. La World Taekwondo (WT) continúa evolucionando el deporte, implementando nuevas reglas y tecnología (como el sistema de puntuación electrónica) para hacerlo más justo, emocionante y accesible. El Taekwondo sigue siendo un símbolo de la cultura coreana y un medio de desarrollo personal y físico para personas de todas las edades.
          </p>
        </section>
      </div>
    </SectionLayout>
  );
};

export default History;
