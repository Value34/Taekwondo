import { 
  BookOpen, 
  History, 
  MapPin, 
  Award, 
  GitCompare, 
  Flag, 
  Sparkles, 
  Heart, 
  Globe, 
  Shirt, 
  Mountain, 
  User 
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const sections = [
  { 
    title: "¿Qué es el Taekwondo?", 
    url: "/que-es", 
    icon: BookOpen 
  },
  { 
    title: "Historia y Evolución", 
    url: "/historia", 
    icon: History 
  },
  { 
    title: "Historia en Colombia", 
    url: "/historia-colombia", 
    icon: MapPin 
  },
  { 
    title: "Significado de Cinturones", 
    url: "/cinturones", 
    icon: Award 
  },
  { 
    title: "Poomsae vs Taeguk", 
    url: "/poomsae-taeguk", 
    icon: GitCompare 
  },
  { 
    title: "Bandera de Corea", 
    url: "/bandera", 
    icon: Flag 
  },
  { 
    title: "Significado de Poomsae", 
    url: "/significado-poomsae", 
    icon: Sparkles 
  },
  { 
    title: "Principios del Taekwondo", 
    url: "/principios", 
    icon: Heart 
  },
  { 
    title: "Organizaciones WT", 
    url: "/organizaciones", 
    icon: Globe 
  },
  { 
    title: "El Uniforme", 
    url: "/uniforme", 
    icon: Shirt 
  },
  { 
    title: "Koguryo", 
    url: "/koguryo", 
    icon: Mountain 
  },
  { 
    title: "Sobre mí", 
    url: "/sobre-mi", 
    icon: User 
  },
];

export function TaekwondoSidebar() {
  const { open } = useSidebar();

  return (
    <Sidebar className={open ? "w-72" : "w-16"} collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <div className="flex items-center justify-between px-2 py-4">
            {open && (
              <SidebarGroupLabel className="text-sidebar-foreground text-lg font-bold">
                Taekwondo
              </SidebarGroupLabel>
            )}
            <SidebarTrigger />
          </div>
          
          <SidebarGroupContent>
            <SidebarMenu>
              {sections.map((section) => (
                <SidebarMenuItem key={section.url}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={section.url} 
                      end 
                      className="transition-smooth hover:bg-sidebar-accent"
                      activeClassName="bg-sidebar-accent text-sidebar-ring font-semibold"
                    >
                      <section.icon className="h-5 w-5" />
                      {open && <span>{section.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
