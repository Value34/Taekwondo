import { Heart } from "lucide-react";
import { SectionLayout } from "@/components/SectionLayout";

const Principles = () => {
  return (
    <SectionLayout 
      title="Principios del Taekwondo" 
      icon={<Heart className="w-12 h-12" />}
    >
      <div className="space-y-6 text-foreground">
        <section>
          <h2 className="text-primary-light mb-4">Los Cinco Principios Fundamentales</h2>
          <p className="text-lg leading-relaxed">
            El Taekwondo no es solo un arte marcial de técnicas físicas, sino un camino de desarrollo personal basado en cinco principios fundamentales. Estos valores, establecidos por el General Choi Hong Hi, guían la conducta y el carácter del practicante tanto dentro como fuera del dojang.
          </p>
        </section>

        <div className="space-y-8 mt-8">
          <div className="p-6 border-2 border-primary rounded-xl bg-primary/5 shadow-elegant">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-bold text-primary">Cortesía (禮義 - Ye Ui)</h3>
            </div>
            <p className="text-lg leading-relaxed mb-4">
              La cortesía es la manifestación externa del respeto interior. No es solo ser educado, sino mostrar consideración genuina por los demás y sus sentimientos.
            </p>
            <div className="mt-4">
              <h4 className="font-semibold text-lg mb-2">En la práctica significa:</h4>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Saludar con reverencia al entrar y salir del dojang</li>
                <li>Dirigirse con respeto a instructores, compañeros y oponentes</li>
                <li>Escuchar atentamente sin interrumpir</li>
                <li>Reconocer los logros de otros sin envidia</li>
                <li>Pedir permiso antes de actuar en situaciones formales</li>
                <li>Mantener el dojang limpio y ordenado</li>
              </ul>
            </div>
            <div className="mt-4 p-3 bg-background/50 rounded-lg">
              <p className="text-lg italic">
                "La cortesía debe extenderse más allá del dojang hacia todas las áreas de la vida, creando armonía en la sociedad."
              </p>
            </div>
          </div>

          <div className="p-6 border-2 border-secondary rounded-xl bg-secondary/5 shadow-elegant">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold text-secondary">Integridad (廉恥 - Yom Chi)</h3>
            </div>
            <p className="text-lg leading-relaxed mb-4">
              La integridad es la capacidad de definir lo correcto y lo incorrecto, y vivir de acuerdo a esos principios morales. Es ser honesto consigo mismo y con los demás.
            </p>
            <div className="mt-4">
              <h4 className="font-semibold text-lg mb-2">En la práctica significa:</h4>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Ser honesto sobre las propias capacidades y limitaciones</li>
                <li>No hacer trampa en exámenes o competencias</li>
                <li>Admitir errores y aceptar responsabilidades</li>
                <li>Mantener las promesas y compromisos</li>
                <li>Distinguir entre el bien y el mal, eligiendo siempre el bien</li>
                <li>No abusar del conocimiento marcial</li>
              </ul>
            </div>
            <div className="mt-4 p-3 bg-background/50 rounded-lg">
              <p className="text-lg italic">
                "Un estudiante sin integridad es como un árbol sin raíces: puede parecer fuerte, pero caerá con la primera tormenta."
              </p>
            </div>
          </div>

          <div className="p-6 border-2 border-accent rounded-xl bg-accent/5 shadow-elegant">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-bold">Perseverancia (忍耐 - In Nae)</h3>
            </div>
            <p className="text-lg leading-relaxed mb-4">
              La perseverancia es la paciencia y determinación para continuar ante las dificultades. Es la voluntad de seguir adelante incluso cuando el camino es difícil.
            </p>
            <div className="mt-4">
              <h4 className="font-semibold text-lg mb-2">En la práctica significa:</h4>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Entrenar consistentemente, incluso cuando no hay motivación</li>
                <li>Repetir técnicas miles de veces hasta perfeccionarlas</li>
                <li>No rendirse ante el fracaso o los obstáculos</li>
                <li>Mantener metas a largo plazo sin buscar gratificación inmediata</li>
                <li>Superar el dolor y la fatiga con determinación mental</li>
                <li>Continuar aprendiendo durante toda la vida</li>
              </ul>
            </div>
            <div className="mt-4 p-3 bg-background/50 rounded-lg">
              <p className="text-lg italic">
                "El bambú que se dobla con el viento pero no se rompe, es símbolo de la perseverancia. La paciencia y la persistencia conquistan todo."
              </p>
            </div>
          </div>

          <div className="p-6 border-2 border-primary-light rounded-xl bg-muted/30 shadow-elegant">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary-light text-white rounded-full flex items-center justify-center text-2xl font-bold">
                4
              </div>
              <h3 className="text-2xl font-bold text-primary-light">Autocontrol (克己 - Geuk Gi)</h3>
            </div>
            <p className="text-lg leading-relaxed mb-4">
              El autocontrol es el dominio sobre las propias emociones, acciones e impulsos. Es la capacidad de mantener la calma y actuar racionalmente en cualquier situación.
            </p>
            <div className="mt-4">
              <h4 className="font-semibold text-lg mb-2">En la práctica significa:</h4>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Controlar la fuerza al entrenar con compañeros</li>
                <li>No usar las técnicas de Taekwondo con ira o por venganza</li>
                <li>Mantener la compostura bajo presión o provocación</li>
                <li>Dominar el miedo en situaciones de peligro</li>
                <li>Regular las emociones negativas como la frustración o la arrogancia</li>
                <li>Tomar decisiones reflexivas en lugar de impulsivas</li>
              </ul>
            </div>
            <div className="mt-4 p-3 bg-background/50 rounded-lg">
              <p className="text-lg italic">
                "El autocontrol es la marca del verdadero maestro. Quien se conquista a sí mismo es más fuerte que quien conquista mil enemigos en batalla."
              </p>
            </div>
          </div>

          <div className="p-6 border-2 border-primary rounded-xl bg-primary/5 shadow-elegant">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                5
              </div>
              <h3 className="text-2xl font-bold text-primary">Espíritu Indomable (百折不屈 - Baekjul Boolgool)</h3>
            </div>
            <p className="text-lg leading-relaxed mb-4">
              El espíritu indomable es el coraje y la valentía para enfrentar cualquier desafío sin rendirse jamás. Es la determinación absoluta que no puede ser quebrantada por nada.
            </p>
            <div className="mt-4">
              <h4 className="font-semibold text-lg mb-2">En la práctica significa:</h4>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Nunca aceptar la derrota ante la injusticia</li>
                <li>Defender las propias convicciones sin importar la presión</li>
                <li>Levantarse cada vez después de una caída</li>
                <li>Mantener la valentía ante situaciones de miedo</li>
                <li>No permitir que el fracaso defina tu futuro</li>
                <li>Inspirar a otros con tu determinación inquebrantable</li>
              </ul>
            </div>
            <div className="mt-4 p-3 bg-background/50 rounded-lg">
              <p className="text-lg italic">
                "Un espíritu indomable significa 'cien veces derribado, pero nunca vencido'. Es la esencia del guerrero verdadero."
              </p>
            </div>
          </div>
        </div>

        <section className="mt-10">
          <h2 className="text-primary-light mb-4">Ampliación Especial: Ciencia, Amor y Fe</h2>
          <p className="text-lg leading-relaxed mb-6">
            Además de los cinco principios tradicionales, algunos maestros contemporáneos han propuesto una ampliación filosófica que integra tres conceptos adicionales que enriquecen la práctica y comprensión del Taekwondo moderno:
          </p>

          <div className="space-y-6">
            <div className="p-5 bg-gradient-to-r from-primary/10 to-primary/5 border-l-4 border-primary rounded-r-lg">
              <h3 className="text-xl font-bold text-primary mb-3">Ciencia (科學)</h3>
              <p className="text-lg leading-relaxed">
                El Taekwondo moderno reconoce la importancia del conocimiento científico en la práctica marcial. No es suficiente repetir técnicas sin comprensión; el practicante debe entender los principios biomecánicos, fisiológicos y físicos detrás de cada movimiento.
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                <li>Comprender la física detrás de la generación de potencia</li>
                <li>Conocer la anatomía para técnicas efectivas y seguras</li>
                <li>Aplicar principios de palanca, momentum y equilibrio</li>
                <li>Entrenar basado en evidencia deportiva y científica</li>
                <li>Buscar mejora continua a través del análisis y la razón</li>
              </ul>
              <p className="mt-3 text-lg italic">
                "La ciencia nos libera de la superstición y nos permite evolucionar el arte marcial para las nuevas generaciones."
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-secondary/10 to-secondary/5 border-l-4 border-secondary rounded-r-lg">
              <h3 className="text-xl font-bold text-secondary mb-3">Amor (愛)</h3>
              <p className="text-lg leading-relaxed">
                El amor es el principio que conecta al practicante con su comunidad, con la humanidad y con el arte marcial mismo. No se trata solo de compasión, sino de un compromiso profundo con el bienestar de todos.
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                <li>Amor por el arte marcial y dedicación a su preservación</li>
                <li>Compasión por los compañeros y disposición para ayudarlos</li>
                <li>Cuidado por la seguridad y bienestar de todos en el dojang</li>
                <li>Amor por la paz y uso del Taekwondo solo para proteger</li>
                <li>Conexión emocional que trasciende la técnica física</li>
              </ul>
              <p className="mt-3 text-lg italic">
                "Sin amor, el Taekwondo es solo violencia técnica. Con amor, se convierte en un camino de paz."
              </p>
            </div>

            <div className="p-5 bg-gradient-to-r from-accent/10 to-accent/5 border-l-4 border-accent rounded-r-lg">
              <h3 className="text-xl font-bold mb-3">Fe (信念)</h3>
              <p className="text-lg leading-relaxed">
                La fe es la confianza profunda en el proceso, en uno mismo, en los maestros y en el camino del Taekwondo. Es creer en el potencial de transformación personal a través de la práctica dedicada.
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                <li>Confianza en que el entrenamiento dará frutos con el tiempo</li>
                <li>Fe en las enseñanzas de los maestros y la tradición</li>
                <li>Creencia en la propia capacidad de superación</li>
                <li>Confianza en que el arte marcial puede transformar vidas</li>
                <li>Fe en los valores del Taekwondo como guía de vida</li>
              </ul>
              <p className="mt-3 text-lg italic">
                "La fe no es ciega, sino la confianza basada en la experiencia de generaciones de practicantes que han recorrido el camino antes que nosotros."
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-primary-light mb-4">La Integración de los Principios</h2>
          <div className="p-6 bg-gradient-korean text-white rounded-xl shadow-elegant">
            <p className="text-lg leading-relaxed mb-4">
              Los cinco principios fundamentales, junto con Ciencia, Amor y Fe, forman un sistema completo de desarrollo humano. No son conceptos separados, sino que se entrelazan y se refuerzan mutuamente:
            </p>
            <ul className="space-y-2 text-lg">
              <li>✦ La <strong>cortesía</strong> nace del <strong>amor</strong> hacia los demás</li>
              <li>✦ La <strong>integridad</strong> requiere <strong>fe</strong> en los principios morales</li>
              <li>✦ La <strong>perseverancia</strong> se fortalece con <strong>fe</strong> en el proceso</li>
              <li>✦ El <strong>autocontrol</strong> se perfecciona con comprensión <strong>científica</strong></li>
              <li>✦ El <strong>espíritu indomable</strong> se alimenta de <strong>amor</strong> por la justicia</li>
            </ul>
            <p className="mt-4 text-lg leading-relaxed">
              Juntos, estos principios transforman el Taekwondo de una simple técnica de combate en un verdadero <strong>"Do"</strong> - un camino de vida que desarrolla personas íntegras, completas y contribuyentes positivos a la sociedad.
            </p>
          </div>
        </section>
      </div>
    </SectionLayout>
  );
};

export default Principles;
