import { BookOpen } from "lucide-react";
import { SectionLayout } from "@/components/SectionLayout";

const WhatIsTaekwondo = () => {
  return (
    <SectionLayout 
      title="¿Qué es el Taekwondo?" 
      icon={<BookOpen className="w-12 h-12" />}
    >
      <div className="space-y-6 text-foreground">
        <section>
          <h2 className="text-primary-light mb-4">Definición</h2>
          <p className="text-lg leading-relaxed">
            El Taekwondo es un arte marcial coreano que se caracteriza por su énfasis en las técnicas de patada, aunque también incluye técnicas de puño, bloqueos, barridos y algunas técnicas de luxación articular. Su nombre proviene de tres palabras coreanas:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
            <li><strong className="text-primary">Tae (태)</strong> - Pie, patada</li>
            <li><strong className="text-primary">Kwon (권)</strong> - Puño, golpe con la mano</li>
            <li><strong className="text-primary">Do (도)</strong> - Camino, método, arte</li>
          </ul>
          <p className="mt-4 text-lg leading-relaxed">
            Por lo tanto, Taekwondo puede traducirse como "el camino del pie y el puño" o "el arte de las patadas y los puñetazos".
          </p>
        </section>

        <section>
          <h2 className="text-primary-light mb-4">Filosofía</h2>
          <p className="text-lg leading-relaxed">
            El Taekwondo no es solo un sistema de combate o defensa personal, sino que también es una disciplina que busca el desarrollo integral del individuo. Su filosofía se basa en:
          </p>
          <ul className="list-disc list-inside space-y-3 mt-4 ml-4 text-lg">
            <li>El respeto y la cortesía hacia los demás</li>
            <li>El autocontrol y la disciplina mental</li>
            <li>La perseverancia ante las dificultades</li>
            <li>La integridad y honestidad</li>
            <li>El espíritu indomable</li>
          </ul>
        </section>

        <section>
          <h2 className="text-primary-light mb-4">Objetivo del Taekwondo</h2>
          <p className="text-lg leading-relaxed">
            El objetivo principal del Taekwondo trasciende el combate físico. Busca formar personas íntegras que apliquen los valores del arte marcial en su vida diaria. Entre sus objetivos se encuentran:
          </p>
          <ul className="list-disc list-inside space-y-3 mt-4 ml-4 text-lg">
            <li><strong>Desarrollo físico:</strong> Mejorar la condición física, flexibilidad, coordinación y equilibrio</li>
            <li><strong>Desarrollo mental:</strong> Fortalecer la concentración, confianza y autoestima</li>
            <li><strong>Desarrollo espiritual:</strong> Cultivar valores éticos y morales</li>
            <li><strong>Defensa personal:</strong> Aprender técnicas efectivas de protección</li>
            <li><strong>Deporte competitivo:</strong> Participar en competencias nacionales e internacionales</li>
          </ul>
        </section>

        <section>
          <h2 className="text-primary-light mb-4">Características Distintivas</h2>
          <p className="text-lg leading-relaxed">
            El Taekwondo se distingue de otras artes marciales por:
          </p>
          <ul className="list-disc list-inside space-y-3 mt-4 ml-4 text-lg">
            <li>Énfasis en patadas de alto nivel y técnicas espectaculares</li>
            <li>Sistema de combate dinámico y deportivo reconocido como deporte olímpico</li>
            <li>Formas o poomsae que combinan técnicas en secuencias coreográficas</li>
            <li>Sistema de grados representado por cinturones de colores</li>
            <li>Código de conducta basado en valores tradicionales coreanos</li>
          </ul>
        </section>
      </div>
    </SectionLayout>
  );
};

export default WhatIsTaekwondo;
