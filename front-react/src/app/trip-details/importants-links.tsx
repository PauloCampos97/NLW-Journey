import { Button } from "@/components/button";
import { Link2, Plus } from "lucide-react";

export function ImportantsLinks() {
    return (
        <div className="space-y-6 bg-zinc-900 px-3 py-10 shadow-shape rounded-lg">
            <h2 className="font-semibold text-xl">Links importantes</h2>
            <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Reserva AirBnB</span>
                        <a href="#" className="block text-zinc-400 truncate hover:text-zinc-200"></a>
                    </div>
                    <Link2 className="text-zinc-400 size-5 shrink-0" />
                </div>
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Reserva AirBnB</span>
                        <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200"></a>
                    </div>
                    <Link2 className="text-zinc-400 size-5 shrink-0" />
                </div>
            </div>
            <Button variant="secondary" size="full">
                Cadastrar novo link
            </Button>
        </div>
    )
}