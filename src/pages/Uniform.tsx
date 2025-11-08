import { Shirt } from "lucide-react";
import { SectionLayout } from "@/components/SectionLayout";

const Uniform = () => {
  return (
    <SectionLayout 
      title="El Uniforme y Su Significado" 
      icon={<Shirt className="w-12 h-12" />}
    >
      <div className="space-y-6 text-foreground">
        <section>
          <h2 className="text-primary-light mb-4">El Dobok (도복)</h2>
          <p className="text-lg leading-relaxed">
            El uniforme de Taekwondo se llama <strong>Dobok (도복)</strong>, que literalmente significa "ropa del camino" o "vestimenta del Do". No es solo un uniforme deportivo, sino un símbolo del compromiso del practicante con el arte marcial y sus valores. Cada elemento del dobok tiene un propósito y significado específico.
          </p>
        </section>

        <section>
          <h2 className="text-primary-light mb-4">Elementos del Dobok</h2>
          
          <div className="space-y-4 mt-4">
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Chaqueta (Sangui 상의)</h3>
              <p className="text-lg">
                La parte superior del dobok, tradicionalmente de color blanco. Representa la pureza de intención y mente abierta al aprendizaje. El color blanco simboliza que el practicante debe mantener un espíritu limpio y libre de malas intenciones.
              </p>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Pantalón (Hahui 하의)</h3>
              <p className="text-lg">
                La parte inferior, también tradicionalmente blanca. El diseño permite libertad total de movimiento para ejecutar patadas altas y técnicas acrobáticas.
              </p>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Cinturón (Tti 띠)</h3>
              <p className="text-lg">
                El cinturón representa el nivel técnico y el progreso del estudiante. Va desde el blanco (principiante) hasta el negro (maestría básica). El cinturón se ata alrededor de la cintura, simbolizando que el conocimiento debe estar firmemente atado al practicante.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-primary-light mb-4">Significado del Color Blanco</h2>
          <div className="p-5 bg-card border-l-4 border-primary rounded-r-lg">
            <p className="text-lg leading-relaxed">
              El dobok tradicional es de color blanco por varias razones filosóficas:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li><strong>Pureza:</strong> Representa una mente libre de malas intenciones</li>
              <li><strong>Humildad:</strong> Todos visten igual, sin importar su estatus fuera del dojang</li>
              <li><strong>Igualdad:</strong> El blanco es neutral, todos comienzan igual</li>
              <li><strong>Tradición coreana:</strong> El blanco es el color tradicional del pueblo coreano, que históricamente era conocido como "el pueblo vestido de blanco"</li>
              <li><strong>Lienzo en blanco:</strong> Simboliza estar listo para aprender y absorber conocimiento</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-primary-light mb-4">Diferencias: Poomsae vs Combate</h2>
          <p className="text-lg leading-relaxed mb-4">
            Existen diferencias significativas entre el dobok usado para competencias de Poomsae y el usado para competencias de Combate (Kyorugi):
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="p-6 bg-primary/5 border-2 border-primary rounded-xl">
              <h3 className="text-2xl font-bold text-primary mb-4">Dobok de Poomsae</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Diseño:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Cuello en V o Y tradicional</li>
                    <li>Solapas más elaboradas, a menudo con bordados</li>
                    <li>Chaqueta entallada que cierra completamente</li>
                    <li>Puede tener diseños decorativos en negro o dorado</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Material:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Tela más rígida y con más cuerpo</li>
                    <li>Puede tener textura tipo diamante</li>
                    <li>Diseñado para hacer "sonido de snapping" en técnicas</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Objetivo:</h4>
                  <p className="text-lg">
                    Presentar una apariencia elegante y profesional. El dobok debe acentuar los movimientos y crear un efecto visual impresionante. El sonido del dobok es parte de la presentación.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Características especiales:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Mangas y pantalones pueden ser más holgados</li>
                    <li>Colores: blanco tradicional, o blanco con detalles negros/rojos en cuello y mangas</li>
                    <li>A menudo lleva bordados con el nombre del país, bandera, o emblema de la federación</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 bg-secondary/5 border-2 border-secondary rounded-xl">
              <h3 className="text-2xl font-bold text-secondary mb-4">Dobok de Combate (Kyorugi)</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Diseño:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Cuello cerrado tipo camiseta</li>
                    <li>Chaqueta ajustada que se cierra con velcro</li>
                    <li>Sin solapas tradicionales</li>
                    <li>Diseño minimalista y funcional</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Material:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Tela ligera, transpirable y elástica</li>
                    <li>Material resistente al agarre</li>
                    <li>Diseñado para máxima movilidad</li>
                    <li>Secado rápido</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Objetivo:</h4>
                  <p className="text-lg">
                    Permitir máxima libertad de movimiento y comodidad durante el combate intenso. Debe ser difícil de agarrar por el oponente y no interferir con el equipo de protección.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Características especiales:</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Mangas y pantalones más ajustados</li>
                    <li>El competidor puede usar dobok de su color asignado (rojo o azul) en algunas competencias</li>
                    <li>Diseñado para usar con peto electrónico</li>
                    <li>Menos ornamentación, más funcional</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-primary-light mb-4">Equipo de Protección para Combate</h2>
          <p className="text-lg leading-relaxed mb-4">
            Además del dobok, los competidores de combate utilizan equipo de protección obligatorio:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Peto (Hogu)</h3>
              <p>Protector de torso electrónico que registra puntos cuando es impactado con la fuerza adecuada.</p>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Casco (Head Guard)</h3>
              <p>Protección para la cabeza con sensores electrónicos en competencias de alto nivel.</p>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Espinilleras y Empeines</h3>
              <p>Protección para las piernas y pies, esencial para patadas seguras.</p>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Guantes</h3>
              <p>Protección para las manos, con sensores en competencias oficiales.</p>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Protector Bucal</h3>
              <p>Obligatorio para proteger dientes y mandíbula.</p>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold text-primary mb-2">Protector Inguinal</h3>
              <p>Obligatorio para hombres y recomendado para mujeres.</p>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-primary-light mb-4">Cuidado y Respeto del Dobok</h2>
          <div className="p-5 bg-accent/5 border-l-4 border-accent rounded-r-lg">
            <p className="text-lg leading-relaxed mb-4">
              El dobok merece respeto y cuidado apropiado:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Limpieza:</strong> Debe mantenerse limpio y bien cuidado, representando el orgullo del practicante</li>
              <li><strong>Plegado:</strong> Debe doblarse apropiadamente después de cada uso</li>
              <li><strong>Nunca pisar:</strong> El dobok nunca debe dejarse en el suelo donde pueda ser pisado</li>
              <li><strong>No usar fuera del dojang:</strong> Solo debe usarse para entrenar o en eventos oficiales</li>
              <li><strong>Reparaciones:</strong> Debe repararse inmediatamente si se daña</li>
              <li><strong>Reemplazo:</strong> Debe reemplazarse cuando esté muy desgastado</li>
            </ul>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-primary-light mb-4">Insignias y Bordados</h2>
          <p className="text-lg leading-relaxed">
            El dobok puede llevar insignias y bordados específicos que indican:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
            <li>Bandera nacional en el pecho o brazo</li>
            <li>Nombre del dojang o escuela en la espalda</li>
            <li>Nombre del practicante (opcional)</li>
            <li>Insignia de la federación nacional o internacional</li>
            <li>Para cinturones negros: puede incluir dan bars (líneas que indican el grado DAN)</li>
          </ul>
          <p className="mt-4 text-lg leading-relaxed">
            La ubicación y tipo de bordados suelen estar regulados por la federación o el instructor.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-primary-light mb-4">Reflexión Final</h2>
          <div className="p-6 bg-gradient-korean text-black rounded-xl shadow-elegant">
            <p className="text-lg leading-relaxed">
              El dobok es más que una prenda deportiva; es un símbolo de identidad, compromiso y respeto. Cuando un practicante se viste con su dobok, está haciendo una declaración de que deja atrás su identidad social y se convierte en un estudiante de Taekwondo. El dobok iguala a todos en el dojang - no importa quién seas fuera, dentro del dojang todos somos estudiantes del arte marcial. Cuidar tu dobok es cuidar tu compromiso con el Taekwondo y todo lo que representa.
            </p>
          </div>
        </section>
      </div>
    </SectionLayout>
  );
};

export default Uniform;
