import { User, Edit2, Save } from "lucide-react";
import { SectionLayout } from "@/components/SectionLayout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import { toast } from "sonner";

const AboutMe = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState("");

  // Load content from localStorage on mount
  useEffect(() => {
    const savedContent = localStorage.getItem("aboutMeContent");
    if (savedContent) {
      setContent(savedContent);
    } else {
      setContent(
        "Haz clic en el botón 'Editar' para añadir tu información personal.\n\nAquí puedes escribir sobre:\n- Tu experiencia en Taekwondo\n- Tus logros y certificaciones\n- Tu filosofía personal sobre el arte marcial\n- Tus objetivos y metas\n- Lo que el Taekwondo significa para ti"
      );
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("aboutMeContent", content);
    setIsEditing(false);
    toast.success("Tu información ha sido guardada exitosamente", {
      description: "Los cambios se han guardado en tu navegador",
    });
  };

  const handleCancel = () => {
    const savedContent = localStorage.getItem("aboutMeContent");
    if (savedContent) {
      setContent(savedContent);
    }
    setIsEditing(false);
  };

  return (
    <SectionLayout title="Sobre mí" icon={<User className="w-12 h-12" />}>
      <div className="space-y-6">
        <div className="flex items-center justify-between mb-4">
          <p className="text-lg text-muted-foreground">
            Esta es tu sección personal. Puedes editarla para compartir tu historia con el Taekwondo.
          </p>
          {!isEditing && (
            <Button
              onClick={() => setIsEditing(true)}
              variant="default"
              className="gap-2"
            >
              <Edit2 className="h-4 w-4" />
              Editar
            </Button>
          )}
        </div>

        {isEditing ? (
          <div className="space-y-4">
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[400px] text-lg font-mono"
              placeholder="Escribe tu información aquí..."
            />
            <div className="flex gap-3 justify-end">
              <Button
                onClick={handleCancel}
                variant="outline"
              >
                Cancelar
              </Button>
              <Button
                onClick={handleSave}
                className="gap-2"
              >
                <Save className="h-4 w-4" />
                Guardar Cambios
              </Button>
            </div>
          </div>
        ) : (
          <div className="prose prose-lg max-w-none">
            <div className="p-6 bg-muted/30 rounded-lg border border-border whitespace-pre-wrap text-lg leading-relaxed">
              {content}
            </div>
          </div>
        )}

        <div className="mt-8 p-4 bg-primary/5 border-l-4 border-primary rounded-r-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Nota:</strong> Tu información se guarda localmente en tu navegador. Si limpias los datos del navegador, esta información se perderá.
          </p>
        </div>
      </div>
    </SectionLayout>
  );
};

export default AboutMe;
