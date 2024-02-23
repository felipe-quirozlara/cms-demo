import { cn } from "@/lib/utils";
import { Navbar } from "../navbar"
import { Button } from "../ui/button";
import { getDataPortada } from "./get-data"
import Image from "next/image";

export const Hero = async () => {
  const info = await getDataPortada();

  if (!info) return <h1>Sin info</h1>

  return (
    <section
      className="relative w-full h-96 overflow-hidden"
    >
      <div
        className={cn(
          "flex flex-col justify-between",
          "w-full h-full",
          "absolute z-10",
          "px-4 pt-4",
        )}
      >
        <Navbar />
        <div>
          {info.contenido.map((info) => (
            <>
              {info.__component.includes("ui.lista-de-botones")
                ?
                <div
                  className={cn(
                    "flex flex-row gap-3"
                  )}
                >
                  {info.Botones?.map((boton) => (
                    <Button
                      variant={boton.colores == "naranja" ? "orange" : "default"}
                    >
                      {boton.title}
                    </Button>
                  ))}
                </div>
                :
                <p
                  className={cn(
                    info.__component.includes("ui.texto-negrita") && "font-bold"
                  )}
                >
                  {info.Texto}
                </p>
              }
            </>
          ))}
        </div>
      </div>
      <Image
        className={cn(
          "w-full h-auto absolute top-0 left-0 object-contain"
        )}
        src={info.img}
        width={1440}
        height={767}
        alt={"Background image"}
      />
    </section>
  )
}