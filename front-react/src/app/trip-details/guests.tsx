import { Button } from "@/components/button";
import { CircleDashed, UserCog } from "lucide-react";

export function Guest() {
    return (
        <div className="space-y-6 bg-zinc-900 px-3 py-10 shadow-shape rounded-lg">
            <h2 className="font-semibold text-xl">Convidados</h2>
            <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Harry Potter</span>
                        <span className="block text-sm text-zinc-400 truncate">harry@gryffindor.hp</span>
                    </div>
                    <CircleDashed className="text-zinc-400 size-5 shrink-0" />
                </div>
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Mash Burnedead</span>
                        <span className="block text-sm text-zinc-400 truncate">mash@adler.mb</span>
                    </div>
                    <CircleDashed className="text-zinc-400 size-5 shrink-0" />
                </div>
            </div>

            <Button variant="secondary" size="full">
                <UserCog className="size-5" />
                Gerenciar convidados
            </Button>
        </div>
    )
}