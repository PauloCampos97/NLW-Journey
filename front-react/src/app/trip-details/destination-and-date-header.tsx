import { MapPin, Calendar, Settings2 } from "lucide-react";
import { Button } from "@/components/button";
import { BoxInformation } from "@/components/box-information";

export function DestinationAndDateHeader() {
    return (
        <BoxInformation className="primary">
            <div className="flex items-center gap-2">
                <MapPin className="size-5 text-zinc-400" />
                <span className="right-0">Floreanópolis,<br /> Brasil</span>
            </div>
            <div className="flex gap-10">
                <div>
                    <Calendar className="m-auto" />
                    <span>17 a 23 de Agosto</span>
                </div>
                <Button variant="secondary" size="default">
                    Alterar local/data
                    <Settings2 className="size-5" />
                </Button>
            </div>
        </BoxInformation>
    )
}