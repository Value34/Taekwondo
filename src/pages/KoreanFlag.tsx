import { Flag } from "lucide-react";
import { SectionLayout } from "@/components/SectionLayout";

const KoreanFlag = () => {
  return (
    <SectionLayout 
      title="Significado de la Bandera de Corea del Sur" 
      icon={<Flag className="w-12 h-12" />}
    >
      <div className="space-y-6 text-foreground">
        <section>
          <h2 className="text-primary-light mb-4">La Bandera Taegeukgi (태극기)</h2>
          <p className="text-lg leading-relaxed">
            La bandera nacional de Corea del Sur, llamada <strong>Taegeukgi</strong>, es rica en simbolismo filosófico y está profundamente conectada con los principios del Taekwondo. Cada elemento de la bandera representa conceptos fundamentales de la filosofía oriental y los valores marciales.
          </p>
        </section>

        <section>
          <h2 className="text-primary-light mb-4">El Fondo Blanco</h2>
          <div className="p-4 bg-white border-2 border-border rounded-lg">
            <p className="text-lg leading-relaxed text-foreground">
              El <strong>fondo blanco</strong> simboliza la <strong>pureza</strong>, la <strong>paz</strong> y el amor tradicional del pueblo coreano por estos valores. En el contexto del Taekwondo, representa la búsqueda de la excelencia moral y la mente clara del practicante.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-primary-light mb-4">El Taegeuk Central (태극)</h2>
          <div className="p-4 bg-gradient-to-br from-blue-500 to-red-500 text-white rounded-lg">
            <p className="text-lg leading-relaxed">
              El <strong>círculo Taegeuk</strong> en el centro representa el equilibrio entre fuerzas opuestas pero complementarias. Está dividido en dos secciones:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li><strong>Rojo (Yang/양):</strong> Representa lo positivo, el cielo, lo masculino, el calor, la luz, el día, lo activo</li>
              <li><strong>Azul (Yin/음):</strong> Representa lo negativo, la tierra, lo femenino, el frío, la oscuridad, la noche, lo pasivo</li>
            </ul>
            <p className="mt-4 text-lg leading-relaxed">
              Este símbolo ilustra que el universo funciona mediante el equilibrio y la armonía de fuerzas opuestas. En Taekwondo, esto se manifiesta en el equilibrio entre fuerza y control, ataque y defensa, mente y cuerpo.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-primary-light mb-4">Los Cuatro Trigramas (괘/Gwae)</h2>
          <p className="text-lg leading-relaxed mb-4">
            En cada esquina de la bandera hay un <strong>trigrama</strong> compuesto por tres líneas (continuas o divididas). Estos provienen del <strong>I-Ching</strong> (Libro de los Cambios) y representan elementos naturales y virtudes fundamentales.
          </p>

          <div className="space-y-6 mt-6">
            <div className="p-4 border-2 border-primary rounded-lg bg-primary/5">
              <h3 className="font-bold text-xl mb-3 text-primary flex items-center gap-2">
                ☰ Geon (건) - Esquina Superior Izquierda
              </h3>
              <div className="space-y-2">
                <p className="text-lg"><strong>Elemento:</strong> Cielo (天)</p>
                <p className="text-lg"><strong>Estación:</strong> Primavera</p>
                <p className="text-lg"><strong>Dirección:</strong> Sur</p>
                <p className="text-lg"><strong>Virtud:</strong> Humanidad, Benevolencia (仁)</p>
                <p className="text-lg"><strong>En Taekwondo:</strong> Representa la <strong>justicia</strong> y la <strong>fuerza creativa</strong>. El cielo simboliza el potencial ilimitado y la aspiración constante hacia la mejora. El practicante debe buscar siempre elevarse y superar sus límites.</p>
              </div>
            </div>

            <div className="p-4 border-2 border-secondary rounded-lg bg-secondary/5">
              <h3 className="font-bold text-xl mb-3 text-secondary flex items-center gap-2">
                ☵ Gam (감) - Esquina Superior Derecha
              </h3>
              <div className="space-y-2">
                <p className="text-lg"><strong>Elemento:</strong> Agua (水)</p>
                <p className="text-lg"><strong>Estación:</strong> Invierno</p>
                <p className="text-lg"><strong>Dirección:</strong> Oeste</p>
                <p className="text-lg"><strong>Virtud:</strong> Sabiduría, Inteligencia (智)</p>
                <p className="text-lg"><strong>En Taekwondo:</strong> Representa la <strong>sabiduría</strong> y la <strong>fluidez</strong>. Como el agua que se adapta a cualquier recipiente, el practicante debe ser flexible y adaptable. El agua también simboliza la persistencia: con el tiempo, incluso la gota más pequeña puede perforar la roca más dura.</p>
              </div>
            </div>

            <div className="p-4 border-2 border-accent rounded-lg bg-accent/5">
              <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                ☲ Ri (리) - Esquina Inferior Izquierda
              </h3>
              <div className="space-y-2">
                <p className="text-lg"><strong>Elemento:</strong> Fuego (火)</p>
                <p className="text-lg"><strong>Estación:</strong> Verano</p>
                <p className="text-lg"><strong>Dirección:</strong> Este</p>
                <p className="text-lg"><strong>Virtud:</strong> Cortesía, Rectitud (禮)</p>
                <p className="text-lg"><strong>En Taekwondo:</strong> Representa la <strong>pasión</strong> y la <strong>luz de la razón</strong>. El fuego ilumina la oscuridad, simbolizando la claridad mental y la energía. Un practicante debe mantener la llama de su espíritu ardiendo con disciplina y cortesía, iluminando el camino tanto para sí mismo como para otros.</p>
              </div>
            </div>

            <div className="p-4 border-2 border-primary-light rounded-lg bg-muted/30">
              <h3 className="font-bold text-xl mb-3 text-primary-light flex items-center gap-2">
                ☷ Gon (곤) - Esquina Inferior Derecha
              </h3>
              <div className="space-y-2">
                <p className="text-lg"><strong>Elemento:</strong> Tierra (地)</p>
                <p className="text-lg"><strong>Estación:</strong> Otoño</p>
                <p className="text-lg"><strong>Dirección:</strong> Norte</p>
                <p className="text-lg"><strong>Virtud:</strong> Confianza, Fidelidad (信)</p>
                <p className="text-lg"><strong>En Taekwondo:</strong> Representa la <strong>estabilidad</strong>, la <strong>receptividad</strong> y la <strong>base sólida</strong>. La tierra es donde todo crece y se sostiene. Un practicante necesita bases técnicas sólidas y una actitud receptiva para aprender. También simboliza la humildad y el estar "con los pies en la tierra".</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-primary-light mb-4">Conexión con el Taekwondo</h2>
          <p className="text-lg leading-relaxed">
            Los elementos de la bandera coreana están profundamente integrados en la filosofía del Taekwondo:
          </p>
          
          <div className="mt-4 p-5 bg-gradient-korean text-white rounded-lg space-y-3">
            <p className="text-lg"><strong>🌟 Equilibrio (Taegeuk):</strong> Balance entre ataque y defensa, fuerza y técnica.</p>
            <p className="text-lg"><strong>☰ Cielo (Justicia):</strong> Usar el Taekwondo solo para causas justas.</p>
            <p className="text-lg"><strong>☵ Agua (Sabiduría):</strong> Aprender constantemente y adaptarse a cada situación.</p>
            <p className="text-lg"><strong>☲ Fuego (Cortesía):</strong> Mantener siempre el respeto hacia instructores, compañeros y oponentes.</p>
            <p className="text-lg"><strong>☷ Tierra (Confianza):</strong> Construir bases técnicas sólidas y mantener la integridad.</p>
          </div>
        </section>

        <section>
          <h2 className="text-primary-light mb-4">Los Cinco Principios y los Trigramas</h2>
          <p className="text-lg leading-relaxed">
            Los cuatro trigramas se relacionan directamente con cuatro de los cinco principios del Taekwondo, mientras que el Taegeuk central une todo:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4 ml-4 text-lg">
            <li><strong>Cortesía (禮義, Ye Ui):</strong> Fuego / Ri</li>
            <li><strong>Integridad (廉恥, Yom Chi):</strong> Tierra / Gon</li>
            <li><strong>Perseverancia (忍耐, In Nae):</strong> Agua / Gam</li>
            <li><strong>Autocontrol (克己, Geuk Gi):</strong> Cielo / Geon</li>
            <li><strong>Espíritu Indomable (百折不屈, Baekjul Boolgool):</strong> El Taegeuk mismo, equilibrio perfecto</li>
          </ul>
        </section>

        <section>
          <h2 className="text-primary-light mb-4">Reflexión Final</h2>
          <div className="p-4 bg-muted border-l-4 border-primary rounded-r-lg">
            <p className="text-lg leading-relaxed">
              La bandera coreana no es solo un símbolo nacional, sino un mapa filosófico completo que guía al practicante de Taekwondo. Cada vez que miramos la bandera, vemos un recordatorio de que el verdadero Taekwondo no es solo técnica física, sino el cultivo del carácter, el equilibrio interior y la búsqueda constante de armonía entre todas las fuerzas de la vida.
            </p>
          </div>
        </section>
      </div>
    </SectionLayout>
  );
};

export default KoreanFlag;
