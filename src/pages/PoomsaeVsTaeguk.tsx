import { GitCompare } from "lucide-react";
import { SectionLayout } from "@/components/SectionLayout";

const PoomsaeVsTaeguk = () => {
  return (
    <SectionLayout 
      title="Diferencias entre Poomsae y Taeguk" 
      icon={<GitCompare className="w-12 h-12" />}
    >
      <div className="space-y-6 text-foreground">
        <section>
          <h2 className="text-primary-light mb-4">Definiciones Fundamentales</h2>
          <p className="text-lg leading-relaxed">
            Existe a menudo confusión entre los términos "Poomsae" y "Taeguk", pero es importante entender que tienen significados diferentes aunque estén relacionados. Ambos son elementos esenciales en la práctica y evolución del Taekwondo.
          </p>
        </section>

        <section>
          <h2 className="text-primary-light mb-4">¿Qué es un Poomsae?</h2>
          <div className="p-4 bg-primary/5 border-l-4 border-primary rounded-r-lg">
            <p className="text-lg leading-relaxed">
              <strong className="text-primary">Poomsae (품새)</strong> es el término general para referirse a las <strong>"formas"</strong> o <strong>"patrones"</strong> en Taekwondo. Es una secuencia de movimientos de ataque y defensa ejecutados contra oponentes imaginarios siguiendo un patrón específico en el suelo (diagrama).
            </p>
          </div>
          
          <div className="mt-4">
            <h3 className="font-semibold text-xl mb-3">Características de los Poomsae:</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Combinan técnicas de manos, pies, posturas y bloqueos</li>
              <li>Siguen diagramas geométricos específicos</li>
              <li>Requieren precisión, equilibrio, potencia y ritmo</li>
              <li>Desarrollan la memoria muscular y la técnica correcta</li>
              <li>Son utilizados para exámenes de grado y competencias</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-primary-light mb-4">¿Qué son los Taeguk?</h2>
          <div className="p-4 bg-secondary/5 border-l-4 border-secondary rounded-r-lg">
            <p className="text-lg leading-relaxed">
              <strong className="text-secondary">Taeguk (태극)</strong> es el nombre de una <strong>serie específica</strong> de ocho poomsae diseñados para estudiantes de grados KUP (cinturones de color). Cada Taeguk corresponde a un cinturón específico del blanco al rojo-negro.
            </p>
          </div>
          
          <div className="mt-4">
            <h3 className="font-semibold text-xl mb-3">Los Ocho Taeguk:</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Taeguk Il Jang (1):</strong> Cinturón Blanco-Amarillo / Amarillo</li>
              <li><strong>Taeguk Ee Jang (2):</strong> Cinturón Amarillo-Verde</li>
              <li><strong>Taeguk Sam Jang (3):</strong> Cinturón Verde</li>
              <li><strong>Taeguk Sa Jang (4):</strong> Cinturón Verde-Azul</li>
              <li><strong>Taeguk Oh Jang (5):</strong> Cinturón Azul</li>
              <li><strong>Taeguk Yuk Jang (6):</strong> Cinturón Azul-Rojo</li>
              <li><strong>Taeguk Chil Jang (7):</strong> Cinturón Rojo</li>
              <li><strong>Taeguk Pal Jang (8):</strong> Cinturón Rojo-Negro</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-primary-light mb-4">Diferencias Clave</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse mt-4">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="border border-border p-3 text-left">Aspecto</th>
                  <th className="border border-border p-3 text-left">Poomsae</th>
                  <th className="border border-border p-3 text-left">Taeguk</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-muted/30">
                  <td className="border border-border p-3 font-semibold">Definición</td>
                  <td className="border border-border p-3">Término general para todas las formas</td>
                  <td className="border border-border p-3">Serie específica de 8 formas para grados KUP</td>
                </tr>
                <tr>
                  <td className="border border-border p-3 font-semibold">Alcance</td>
                  <td className="border border-border p-3">Incluye Taeguk, Palgwe, y formas para cinturones negros</td>
                  <td className="border border-border p-3">Solo las 8 formas básicas para cinturones de color</td>
                </tr>
                <tr className="bg-muted/30">
                  <td className="border border-border p-3 font-semibold">Nivel</td>
                  <td className="border border-border p-3">Todos los niveles (KUP y DAN)</td>
                  <td className="border border-border p-3">Solo grados KUP (cinturones de color)</td>
                </tr>
                <tr>
                  <td className="border border-border p-3 font-semibold">Ejemplo</td>
                  <td className="border border-border p-3">Taeguk, Koryo, Keumgang, Taebaek, etc.</td>
                  <td className="border border-border p-3">Taeguk Il Jang, Taeguk Ee Jang, etc.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-primary-light mb-4">Analogía para Entender la Diferencia</h2>
          <div className="p-4 bg-accent/5 border border-border rounded-lg">
            <p className="text-lg leading-relaxed">
              Piensa en esto como una analogía con las matemáticas:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
              <li><strong>"Matemáticas"</strong> sería como <strong>"Poomsae"</strong> (el término general)</li>
              <li><strong>"Aritmética básica"</strong> (sumar, restar, multiplicar) sería como <strong>"Taeguk"</strong> (una parte específica dentro del todo)</li>
            </ul>
            <p className="mt-4 text-lg leading-relaxed">
              Todas las formas de aritmética son matemáticas, pero no todas las matemáticas son aritmética básica. De la misma manera, todos los Taeguk son Poomsae, pero no todos los Poomsae son Taeguk.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-primary-light mb-4">Otros Tipos de Poomsae</h2>
          <p className="text-lg leading-relaxed">
            Además de los Taeguk, existen otros poomsae en Taekwondo:
          </p>
          
          <div className="mt-4 space-y-3">
            <div className="p-3 bg-muted rounded-lg">
              <h3 className="font-semibold text-primary mb-1">Palgwe (Sistema Antiguo)</h3>
              <p>Sistema de 8 formas anterior a los Taeguk, basado en el I-Ching.</p>
            </div>
            
            <div className="p-3 bg-muted rounded-lg">
              <h3 className="font-semibold text-primary mb-1">Poomsae para Cinturones Negros</h3>
              <p>Koryo, Keumgang, Taebaek, Pyongwon, Sipjin, Jitae, Cheonkwon, Hansoo, Ilyeo (del 1° al 9° DAN).</p>
            </div>
            
            <div className="p-3 bg-muted rounded-lg">
              <h3 className="font-semibold text-primary mb-1">Poomsae Freestyle</h3>
              <p>Creaciones artísticas para competencias que combinan técnicas tradicionales con acrobacias.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-primary-light mb-4">Resumen</h2>
          <div className="p-5 bg-gradient-korean text-white rounded-lg">
            <p className="text-lg leading-relaxed font-semibold">
              ✓ <strong>Poomsae</strong> = Todas las formas en Taekwondo
            </p>
            <p className="text-lg leading-relaxed font-semibold mt-2">
              ✓ <strong>Taeguk</strong> = Serie específica de 8 poomsae para cinturones de color
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Por lo tanto, cuando alguien dice "voy a practicar Taeguk", está siendo específico sobre qué tipo de poomsae va a practicar. Cuando dice "voy a practicar poomsae", está hablando de manera general sobre formas.
            </p>
          </div>
        </section>
      </div>
    </SectionLayout>
  );
};

export default PoomsaeVsTaeguk;
