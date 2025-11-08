import { Sparkles } from "lucide-react";
import { SectionLayout } from "@/components/SectionLayout";

const PoomsaeMeanings = () => {
  return (
    <SectionLayout 
      title="Significado de los Taeguk y Poomsae" 
      icon={<Sparkles className="w-12 h-12" />}
    >
      <div className="space-y-6 text-foreground">
        <section>
          <h2 className="text-primary-light mb-4">Filosofía de los Poomsae</h2>
          <p className="text-lg leading-relaxed">
            Cada poomsae en Taekwondo no es simplemente una secuencia de movimientos físicos, sino una expresión de principios filosóficos profundos. Los Taeguk y los poomsae de cinturón negro están basados en conceptos del <strong>I-Ching</strong> (Libro de los Cambios), la filosofía <strong>Taoísta</strong> y valores tradicionales coreanos.
          </p>
        </section>

        <section>
          <h2 className="text-primary-light mb-4">Los Ocho Taeguk</h2>
          <p className="text-lg leading-relaxed mb-4">
            Cada uno de los ocho Taeguk representa uno de los trigramas del I-Ching y sus principios asociados:
          </p>

          <div className="space-y-6">
            <div className="p-4 border-l-4 border-primary rounded-r-lg bg-primary/5">
              <h3 className="font-bold text-xl mb-2 text-primary">Taeguk Il Jang (☰ Keon - Cielo)</h3>
              <p className="text-lg"><strong>Trigrama:</strong> Tres líneas continuas</p>
              <p className="text-lg"><strong>Significado:</strong> El <strong>Cielo</strong> y el <strong>Yang</strong> puro</p>
              <p className="text-lg mt-2">
                Representa el comienzo de todo, la creación. Como el primer poomsae, simboliza el inicio del viaje del estudiante en Taekwondo. El cielo es fuerte, creativo y representa el potencial ilimitado. El practicante debe aspirar siempre hacia arriba, como el cielo que cubre todo.
              </p>
            </div>

            <div className="p-4 border-l-4 border-secondary rounded-r-lg bg-secondary/5">
              <h3 className="font-bold text-xl mb-2 text-secondary">Taeguk Ee Jang (☱ Tae - Lago)</h3>
              <p className="text-lg"><strong>Trigrama:</strong> Dos líneas continuas abajo, una discontinua arriba</p>
              <p className="text-lg"><strong>Significado:</strong> <strong>Alegría</strong> y <strong>serenidad</strong></p>
              <p className="text-lg mt-2">
                El lago es tranquilo en la superficie pero profundo por dentro. Representa la firmeza interior con calma exterior. El estudiante debe aprender a mantener la compostura y encontrar alegría en el entrenamiento, incluso cuando es difícil. Como el lago refleja el cielo, el practicante debe reflejar las enseñanzas de su maestro.
              </p>
            </div>

            <div className="p-4 border-l-4 border-accent rounded-r-lg bg-accent/5">
              <h3 className="font-bold text-xl mb-2">Taeguk Sam Jang (☲ Ri - Fuego)</h3>
              <p className="text-lg"><strong>Trigrama:</strong> Una línea continua arriba y abajo, discontinua en medio</p>
              <p className="text-lg"><strong>Significado:</strong> <strong>Pasión</strong>, <strong>calor</strong> y <strong>luz</strong></p>
              <p className="text-lg mt-2">
                El fuego arde hacia arriba, ilumina y transforma. Simboliza la energía creciente y la claridad mental. El estudiante debe mantener viva la llama de su espíritu y pasión por el arte marcial. Como el fuego da luz, el practicante debe usar su conocimiento para iluminar el camino de otros.
              </p>
            </div>

            <div className="p-4 border-l-4 border-primary-light rounded-r-lg bg-muted/30">
              <h3 className="font-bold text-xl mb-2 text-primary-light">Taeguk Sa Jang (☳ Jin - Trueno)</h3>
              <p className="text-lg"><strong>Trigrama:</strong> Dos líneas discontinuas arriba, una continua abajo</p>
              <p className="text-lg"><strong>Significado:</strong> <strong>Poder</strong>, <strong>dignidad</strong> y <strong>temor</strong></p>
              <p className="text-lg mt-2">
                El trueno representa movimiento repentino y fuerza poderosa. Simboliza la decisión y el coraje para actuar. El estudiante debe desarrollar técnicas poderosas pero controladas, como el trueno que retumba pero eventualmente cesa. Representa el punto donde el estudiante comienza a mostrar verdadero poder.
              </p>
            </div>

            <div className="p-4 border-l-4 border-primary rounded-r-lg bg-primary/5">
              <h3 className="font-bold text-xl mb-2 text-primary">Taeguk Oh Jang (☴ Seon - Viento)</h3>
              <p className="text-lg"><strong>Trigrama:</strong> Dos líneas continuas arriba, una discontinua abajo</p>
              <p className="text-lg"><strong>Significado:</strong> <strong>Gentileza</strong> pero <strong>penetrante</strong></p>
              <p className="text-lg mt-2">
                El viento es suave pero persistente, puede pasar a través de cualquier obstáculo. Representa la flexibilidad y adaptabilidad. El estudiante debe ser como el viento: gentil cuando es necesario, pero capaz de penetrar las defensas del oponente con técnicas fluidas y continuas.
              </p>
            </div>

            <div className="p-4 border-l-4 border-secondary rounded-r-lg bg-secondary/5">
              <h3 className="font-bold text-xl mb-2 text-secondary">Taeguk Yuk Jang (☵ Gam - Agua)</h3>
              <p className="text-lg"><strong>Trigrama:</strong> Una línea continua en medio, discontinuas arriba y abajo</p>
              <p className="text-lg"><strong>Significado:</strong> <strong>Fluidez</strong>, <strong>peligro</strong> y <strong>coraje</strong></p>
              <p className="text-lg mt-2">
                El agua fluye siempre hacia adelante, rodeando obstáculos pero nunca deteniéndose. Representa perseverancia y adaptabilidad. El estudiante debe ser como el agua: fluir con suavidad pero ser capaz de generar gran fuerza, adaptarse a cualquier situación y nunca rendirse.
              </p>
            </div>

            <div className="p-4 border-l-4 border-accent rounded-r-lg bg-accent/5">
              <h3 className="font-bold text-xl mb-2">Taeguk Chil Jang (☶ Gan - Montaña)</h3>
              <p className="text-lg"><strong>Trigrama:</strong> Una línea continua arriba, dos discontinuas abajo</p>
              <p className="text-lg"><strong>Significado:</strong> <strong>Estabilidad</strong>, <strong>inmutabilidad</strong> y <strong>firmeza</strong></p>
              <p className="text-lg mt-2">
                La montaña es sólida, inamovible y permanente. Representa el peso y la madurez. El estudiante a este nivel debe tener bases sólidas como una montaña, ser estable en su técnica y firme en sus principios. Como la montaña, debe saber cuándo moverse y cuándo permanecer inmóvil.
              </p>
            </div>

            <div className="p-4 border-l-4 border-primary-light rounded-r-lg bg-muted/30">
              <h3 className="font-bold text-xl mb-2 text-primary-light">Taeguk Pal Jang (☷ Gon - Tierra)</h3>
              <p className="text-lg"><strong>Trigrama:</strong> Tres líneas discontinuas</p>
              <p className="text-lg"><strong>Significado:</strong> <strong>Tierra</strong> y <strong>Yin</strong> puro</p>
              <p className="text-lg mt-2">
                La tierra es receptiva, nutritiva y da vida. Representa el final del ciclo de Taeguk y la preparación para el cinturón negro. El estudiante debe tener la humildad de la tierra, siendo receptivo al conocimiento y proporcionando una base sólida para su futuro desarrollo. La tierra complementa al cielo del primer Taeguk, completando el ciclo.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-primary-light mb-4">Poomsae de Cinturón Negro</h2>
          <p className="text-lg leading-relaxed mb-4">
            Los poomsae para cinturones negros profundizan en conceptos filosóficos y representan aspectos de la historia, geografía y cultura coreana:
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Koryo (고려) - 1° DAN</h3>
              <p className="text-lg">
                Representa la dinastía Koryo, de donde proviene el nombre "Korea". Simboliza al "hombre erudito" o "guerrero erudito" (Seonbae). Las técnicas fuertes y dinámicas reflejan el espíritu del pueblo coreano.
              </p>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Keumgang (금강) - 2° DAN</h3>
              <p className="text-lg">
                Significa "diamante" o "demasiado fuerte para ser roto". También se refiere a las montañas Keumgang, consideradas las más hermosas de Corea. Simboliza dureza y belleza.
              </p>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Taebaek (태백) - 3° DAN</h3>
              <p className="text-lg">
                Nombre de una montaña sagrada donde se dice que se fundó la nación coreana hace 4,300 años. Representa la santidad y el origen del pueblo coreano.
              </p>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Pyongwon (평원) - 4° DAN</h3>
              <p className="text-lg">
                Significa "llanura extensa" o "fuente de vida". Representa el vasto espacio donde se origina la vida y crece la civilización humana.
              </p>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Sipjin (십진) - 5° DAN</h3>
              <p className="text-lg">
                Basado en la idea de "longevidad sin límites". Deriva del símbolo decimal (10) que representa desarrollo infinito. Simboliza crecimiento constante y sin fin.
              </p>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Jitae (지태) - 6° DAN</h3>
              <p className="text-lg">
                Significa "la tierra". Representa todos los seres vivos que crecen y se desarrollan en la tierra. Simboliza respeto por la vida.
              </p>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Cheonkwon (천권) - 7° DAN</h3>
              <p className="text-lg">
                Significa "el cielo". Representa el cielo y el universo infinito. Simboliza la piety y majestad del cielo.
              </p>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Hansoo (한수) - 8° DAN</h3>
              <p className="text-lg">
                Significa "agua". Representa la fluidez, adaptabilidad y origen de la vida. Simboliza el poder y la importancia del agua.
              </p>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Ilyeo (일여) - 9° DAN</h3>
              <p className="text-lg">
                Representa la unidad del cuerpo y la mente, el estado último de iluminación en el budismo donde el ser y el universo se vuelven uno. Es el nivel más alto de comprensión filosófica.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-primary-light mb-4">El Viaje Completo</h2>
          <div className="p-5 bg-gradient-korean text-white rounded-lg">
            <p className="text-lg leading-relaxed">
              Desde el primer Taeguk (Cielo - comienzo) hasta el último poomsae de cinturón negro (Ilyeo - unidad), los poomsae cuentan una historia de crecimiento personal y espiritual. No son solo ejercicios físicos, sino un mapa del desarrollo del practicante desde la inocencia inicial hasta la sabiduría profunda y la unidad con el universo. Cada forma es un paso en el camino del "Do" - el camino del guerrero iluminado.
            </p>
          </div>
        </section>
      </div>
    </SectionLayout>
  );
};

export default PoomsaeMeanings;
