import { Award } from "lucide-react";
import { SectionLayout } from "@/components/SectionLayout";

const BeltMeanings = () => {
  return (
    <SectionLayout 
      title="Significado de los Cinturones" 
      icon={<Award className="w-12 h-12" />}
    >
      <div className="space-y-6 text-foreground">
        <section>
          <h2 className="text-primary-light mb-4">Sistema de Grados</h2>
          <p className="text-lg leading-relaxed">
            El sistema de cinturones en Taekwondo representa el progreso del estudiante en su camino marcial. Cada color simboliza una etapa de crecimiento y desarrollo, tanto físico como mental. El sistema se divide en grados KUP (cinturones de color) y grados DAN (cinturones negros).
          </p>
        </section>

        <section>
          <h2 className="text-primary-light mb-4">Cinturones de Color (Grados KUP)</h2>
          
          <div className="space-y-6 mt-4">
            <div className="p-4 border-l-4 border-primary rounded-r-lg bg-muted/30">
              <h3 className="font-bold text-xl mb-2 flex items-center gap-2">
                <div className="w-8 h-8 bg-white border-2 border-gray-400 rounded"></div>
                Cinturón Blanco (10° KUP)
              </h3>
              <p className="text-lg">
                Representa la <strong>pureza</strong> e <strong>inocencia</strong>. El estudiante es como una hoja en blanco, sin conocimiento del Taekwondo, pero con toda la potencialidad para aprender. Es el inicio del viaje.
              </p>
            </div>

            <div className="p-4 border-l-4 border-yellow-500 rounded-r-lg bg-muted/30">
              <h3 className="font-bold text-xl mb-2 flex items-center gap-2">
                <div className="w-8 h-8 bg-yellow-400 border-2 border-gray-400 rounded"></div>
                Cinturón Amarillo (8° KUP)
              </h3>
              <p className="text-lg">
                Simboliza la <strong>tierra</strong> donde se planta la semilla y comienza a echar raíces. El estudiante empieza a construir la base fundamental de las técnicas. Representa el <strong>descubrimiento</strong> y los primeros pasos firmes en el arte marcial.
              </p>
            </div>

            <div className="p-4 border-l-4 border-green-600 rounded-r-lg bg-muted/30">
              <h3 className="font-bold text-xl mb-2 flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500 border-2 border-gray-400 rounded"></div>
                Cinturón Verde (6° KUP)
              </h3>
              <p className="text-lg">
                Representa la <strong>planta que crece</strong> hacia arriba, buscando el sol. El estudiante desarrolla y fortalece sus técnicas. Simboliza el <strong>crecimiento</strong> y la <strong>vitalidad</strong>. Las habilidades comienzan a florecer.
              </p>
            </div>

            <div className="p-4 border-l-4 border-blue-600 rounded-r-lg bg-muted/30">
              <h3 className="font-bold text-xl mb-2 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-500 border-2 border-gray-400 rounded"></div>
                Cinturón Azul (4° KUP)
              </h3>
              <p className="text-lg">
                Simboliza el <strong>cielo</strong> hacia el cual la planta crece y se expande. El estudiante progresa más allá de lo básico, refinando sus técnicas. Representa la <strong>aspiración</strong> y el <strong>desarrollo avanzado</strong>.
              </p>
            </div>

            <div className="p-4 border-l-4 border-red-600 rounded-r-lg bg-muted/30">
              <h3 className="font-bold text-xl mb-2 flex items-center gap-2">
                <div className="w-8 h-8 bg-red-500 border-2 border-gray-400 rounded"></div>
                Cinturón Rojo (2° KUP)
              </h3>
              <p className="text-lg">
                Representa el <strong>peligro</strong> y la <strong>advertencia</strong>. El estudiante ha adquirido considerable poder y debe aprender a controlarlo con responsabilidad. Simboliza la <strong>madurez técnica</strong> y el <strong>autocontrol</strong>. Es la etapa previa a la maestría básica.
              </p>
            </div>

            <div className="p-4 border-l-4 border-gray-900 rounded-r-lg bg-muted/30">
              <h3 className="font-bold text-xl mb-2 flex items-center gap-2">
                <div className="w-8 h-8 bg-black border-2 border-gray-400 rounded"></div>
                Cinturón Negro (1° DAN en adelante)
              </h3>
              <p className="text-lg">
                Simboliza la <strong>maestría</strong> de las técnicas fundamentales y el <strong>opuesto del blanco</strong>, indicando que el estudiante ha completado un ciclo de aprendizaje. Sin embargo, también representa el inicio de un nuevo viaje más profundo. El negro absorbe toda la luz, significando que el practicante ahora está listo para absorber todo el conocimiento avanzado.
              </p>
              <p className="mt-2 text-lg">
                <strong>Importante:</strong> El cinturón negro no es el final, sino el verdadero comienzo del camino del Taekwondo. Se dice que alcanzar el cinturón negro significa que ahora se está listo para aprender de verdad.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-primary-light mb-4">Cinturones Intermedios (Punta)</h2>
          <p className="text-lg leading-relaxed">
            Algunos sistemas incluyen cinturones con punta o franja del siguiente color, representando la transición entre un grado y otro. Estos indican que el estudiante está progresando y está a mitad de camino hacia el siguiente nivel.
          </p>
        </section>

        <section>
          <h2 className="text-primary-light mb-4">Grados DAN (Cinturones Negros)</h2>
          <p className="text-lg leading-relaxed">
            Después del cinturón negro, el sistema continúa con los grados DAN:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
            <li><strong>1° a 3° DAN:</strong> Instructor principiante a instructor avanzado</li>
            <li><strong>4° a 6° DAN:</strong> Maestro (Sabum)</li>
            <li><strong>7° a 8° DAN:</strong> Gran Maestro (Sabum-nim)</li>
            <li><strong>9° DAN:</strong> Gran Maestro Senior</li>
            <li><strong>10° DAN:</strong> Gran Maestro Honorario (raramente otorgado, generalmente póstumo)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-primary-light mb-4">Filosofía del Sistema de Cinturones</h2>
          <p className="text-lg leading-relaxed">
            El sistema de cinturones no es solo una forma de medir el progreso técnico, sino también el crecimiento personal y espiritual. Cada cambio de cinturón requiere:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
            <li>Dominio técnico apropiado al nivel</li>
            <li>Tiempo mínimo de práctica</li>
            <li>Demostración de valores del Taekwondo</li>
            <li>Madurez física y mental adecuada</li>
            <li>Compromiso con el arte marcial</li>
          </ul>
          <p className="mt-4 text-lg leading-relaxed">
            El verdadero valor no está en el color del cinturón, sino en el conocimiento, disciplina y carácter que se desarrollan en el camino hacia obtenerlo.
          </p>
        </section>
      </div>
    </SectionLayout>
  );
};

export default BeltMeanings;
