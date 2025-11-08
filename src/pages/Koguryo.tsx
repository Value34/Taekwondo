import { Mountain } from "lucide-react";
import { SectionLayout } from "@/components/SectionLayout";

const Koguryo = () => {
  return (
    <SectionLayout 
      title="Koguryo (고구려)" 
      icon={<Mountain className="w-12 h-12" />}
    >
      <div className="space-y-6 text-foreground">
        <section>
          <h2 className="text-primary-light mb-4">¿Qué fue Koguryo?</h2>
          <p className="text-lg leading-relaxed">
            <strong>Koguryo</strong> (también escrito Goguryeo, 고구려) fue uno de los tres reinos que conformaron el período de los Tres Reinos de Corea (37 a.C. - 668 d.C.). Fue el más grande y poderoso de los tres reinos, junto con Baekje y Silla, y es considerado fundamental en la historia del Taekwondo y las artes marciales coreanas.
          </p>
          <div className="mt-4 p-4 bg-primary/5 border-l-4 border-primary rounded-r-lg">
            <p className="text-lg"><strong>Periodo:</strong> 37 a.C. - 668 d.C. (705 años)</p>
            <p className="text-lg"><strong>Ubicación:</strong> Norte de Corea, sur de Manchuria y partes de Mongolia</p>
            <p className="text-lg"><strong>Capital:</strong> Inicialmente en Jolbon, luego en Gungnae, y finalmente en Pyongyang</p>
            <p className="text-lg"><strong>Territorio:</strong> En su apogeo, fue el reino más extenso de Corea, abarcando la mayor parte de Manchuria</p>
          </div>
        </section>

        <section>
          <h2 className="text-primary-light mb-4">Importancia para el Taekwondo</h2>
          <p className="text-lg leading-relaxed mb-4">
            Koguryo es de suprema importancia para la historia del Taekwondo por varias razones:
          </p>

          <div className="space-y-6">
            <div className="p-5 bg-card border-2 border-primary rounded-xl">
              <h3 className="font-bold text-xl text-primary mb-3">1. Evidencia Arqueológica de Artes Marciales</h3>
              <p className="text-lg leading-relaxed">
                Los murales de las tumbas de Koguryo proporcionan la evidencia visual más antigua de la práctica de artes marciales en la península coreana. Estas pinturas, que datan de los siglos IV al VII, muestran claramente figuras humanas practicando técnicas que se asemejan al Taekwondo moderno.
              </p>
            </div>

            <div className="p-5 bg-card border-2 border-secondary rounded-xl">
              <h3 className="font-bold text-xl text-secondary mb-3">2. Las Tumbas de los Guerreros</h3>
              <p className="text-lg leading-relaxed mb-4">
                Los murales más famosos se encuentran en las tumbas de Muyongchong (Tumba de los Bailarines) y Kakchochong (Tumba del Luchador), ubicadas en la actual provincia china de Jilin (antigua Koguryo).
              </p>
              
              <div className="mt-4 space-y-3">
                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Muyongchong (무용총)</h4>
                  <p className="text-lg">
                    Esta tumba, que data aproximadamente del año 400 d.C., contiene pinturas que muestran dos figuras enfrentándose en lo que claramente parece ser una competencia de artes marciales. Las posturas y movimientos representados son sorprendentemente similares a técnicas modernas de Taekwondo.
                  </p>
                </div>

                <div className="p-3 bg-muted rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Kakchochong (각저총)</h4>
                  <p className="text-lg">
                    Conocida como la "Tumba del Luchador", muestra figuras realizando técnicas de lucha y patadas. Una imagen particularmente famosa muestra a dos hombres en posiciones de combate que recuerdan las posiciones básicas del Taekwondo.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-card border-2 border-accent rounded-xl">
              <h3 className="font-bold text-xl mb-3">3. Subak y Taekkyeon</h3>
              <p className="text-lg leading-relaxed">
                Durante el período de Koguryo, se desarrollaron sistemas de combate coreanos nativos:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                <li><strong>Subak (수박):</strong> Un sistema de combate que enfatizaba golpes de mano y técnicas de lucha</li>
                <li><strong>Taekkyeon (택견):</strong> Un arte marcial caracterizado por movimientos fluidos y patadas circulares, considerado un antepasado directo del Taekwondo</li>
              </ul>
              <p className="mt-3 text-lg leading-relaxed">
                Estos sistemas no eran solo para entretenimiento, sino parte fundamental del entrenamiento militar de los guerreros de Koguryo.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-primary-light mb-4">Cultura Guerrera de Koguryo</h2>
          <p className="text-lg leading-relaxed mb-4">
            Koguryo fue conocido por su cultura militar extraordinariamente fuerte:
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-primary/5 border-l-4 border-primary rounded-r-lg">
              <h3 className="font-semibold text-lg text-primary mb-2">Espíritu Marcial</h3>
              <p className="text-lg">
                Los guerreros de Koguryo eran temidos y respetados. El reino resistió numerosas invasiones de imperios chinos poderosos, incluyendo la dinastía Sui y Tang, demostrando su excepcional capacidad militar y espíritu indomable.
              </p>
            </div>

            <div className="p-4 bg-secondary/5 border-l-4 border-secondary rounded-r-lg">
              <h3 className="font-semibold text-lg text-secondary mb-2">Entrenamiento Militar</h3>
              <p className="text-lg">
                El entrenamiento en artes marciales era parte integral de la preparación militar. Los soldados practicaban regularmente técnicas de combate sin armas, consideradas tan importantes como el manejo de armas.
              </p>
            </div>

            <div className="p-4 bg-accent/5 border-l-4 border-accent rounded-r-lg">
              <h3 className="font-semibold text-lg mb-2">Valores Guerreros</h3>
              <p className="text-lg">
                La cultura de Koguryo enfatizaba valores como el coraje, la lealtad, la disciplina y el honor - valores que se reflejan directamente en los principios del Taekwondo moderno.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-primary-light mb-4">El Legado de Koguryo en el Taekwondo</h2>

          <div className="p-6 bg-gradient-korean text-black rounded-xl shadow-elegant">
            <h3 className="text-2xl font-bold mb-4">Conexiones Directas:</h3>

            <ul className="space-y-3 text-lg">
              <li>
                <strong>📜 Evidencia Histórica:</strong> Los murales de Koguryo son citados en la literatura oficial del Taekwondo como evidencia de que las artes marciales de patada han sido parte de la cultura coreana durante más de 1,500 años.
              </li>

              <li>
                <strong>🥋 Técnicas Ancestrales:</strong> Muchas posturas y técnicas básicas del Taekwondo moderno muestran similitudes notables con las representaciones en los murales de Koguryo.
              </li>

              <li>
                <strong>🏛️ Identidad Nacional:</strong> La conexión con Koguryo ayuda a establecer el Taekwondo como un arte marcial genuinamente coreano, diferenciándolo de influencias japonesas o chinas.
              </li>

              <li>
                <strong>⚔️ Espíritu Guerrero:</strong> El espíritu indomable de los guerreros de Koguryo es invocado como inspiración para el quinto principio del Taekwondo.
              </li>

              <li>
                <strong>🎖️ Orgullo Cultural:</strong> La referencia a Koguryo conecta a los practicantes modernos con una herencia guerrera noble y antigua, infundiendo orgullo y propósito a la práctica.
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-primary-light mb-4">Koguryo en la Enseñanza del Taekwondo</h2>
          <p className="text-lg leading-relaxed mb-4">
            En muchas escuelas de Taekwondo, especialmente en Corea, se enseña sobre Koguryo como parte de la educación histórica y cultural:
          </p>
          
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Los estudiantes aprenden sobre los murales como evidencia de las raíces antiguas del Taekwondo</li>
            <li>Se estudian las técnicas representadas en los murales y se comparan con técnicas modernas</li>
            <li>El espíritu guerrero de Koguryo se usa como ejemplo de los valores del Taekwondo</li>
            <li>La historia de Koguryo inspira orgullo nacional y respeto por la tradición</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-primary-light mb-4">Patrimonio Mundial de la UNESCO</h2>
          <div className="p-5 bg-muted border border-border rounded-lg">
            <p className="text-lg leading-relaxed">
              En 2004, las <strong>Tumbas de Koguryo</strong> fueron declaradas Patrimonio Mundial de la UNESCO, reconociendo su importancia histórica y cultural excepcional. Este reconocimiento internacional ha aumentado aún más el prestigio de la conexión entre Koguryo y el Taekwondo, validando la antigüedad y autenticidad de las artes marciales coreanas.
            </p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-primary-light mb-4">Significado Profundo</h2>
          <div className="p-6 bg-card border-2 border-primary rounded-xl">
            <p className="text-lg leading-relaxed mb-4">
              La conexión con Koguryo le da al Taekwondo algo invaluable: <strong>raíces históricas profundas</strong>. No es solo un deporte moderno o un sistema de combate del siglo XX, sino la continuación de una tradición marcial que se remonta a más de 1,500 años.
            </p>
            <p className="text-lg leading-relaxed">
              Cuando un practicante de Taekwondo ejecuta una patada o toma una postura de combate, está conectándose - conscientemente o no - con los guerreros de Koguryo que defendieron su reino con valentía y habilidad marcial excepcional. Esta conexión histórica añade profundidad, legitimidad y un sentido de continuidad cultural al arte marcial que practicamos hoy.
            </p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-primary-light mb-4">Para Reflexionar</h2>
          <div className="p-5 bg-accent/5 border-l-4 border-accent rounded-r-lg">
            <p className="text-lg leading-relaxed italic">
              "Los guerreros de Koguryo pintados en las tumbas nunca imaginaron que, más de 1,500 años después, millones de personas alrededor del mundo practicarían un arte marcial que tiene sus raíces en las técnicas que ellos dominaron. Koguryo nos recuerda que el Taekwondo no es solo sobre el presente - es un puente entre el pasado antiguo y el futuro, un arte vivo que continúa evolucionando mientras mantiene su esencia."
            </p>
          </div>
        </section>
      </div>
    </SectionLayout>
  );
};

export default Koguryo;
