import { BookOpen } from "lucide-react";

const Index = () => {
  return (
    <div className="w-full min-h-screen p-6 md:p-10 animate-fade-in">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-4 py-12">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-gradient-korean rounded-full flex items-center justify-center shadow-elegant">
              <BookOpen className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-primary gradient-taekwondo bg-clip-text">Portal del Taekwondo</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explora el conocimiento completo sobre este arte marcial milenario. Usa el menú lateral para navegar entre las diferentes secciones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-card border border-border rounded-xl shadow-elegant hover:shadow-lg transition-smooth">
            <h2 className="text-2xl font-bold text-primary mb-3">📚 Conocimiento</h2>
            <p className="text-lg text-muted-foreground">
              12 secciones informativas que cubren desde los fundamentos hasta aspectos culturales profundos del Taekwondo.
            </p>
          </div>

          <div className="p-6 bg-card border border-border rounded-xl shadow-elegant hover:shadow-lg transition-smooth">
            <h2 className="text-2xl font-bold text-secondary mb-3">✏️ Personalizable</h2>
            <p className="text-lg text-muted-foreground">
              Sección "Sobre mí" editable donde puedes escribir tu propia historia con el Taekwondo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
