import { BoxInformation } from "@/components/box-information";
import { CircleCheck } from "lucide-react";

export function Activities() {
    return (
        <div className="space-y-5">
            <div className="space-y-2.5">
                <BoxInformation>
                    <span className="text-xl text-zinc-300 font-semibold">Dia 17</span>
                    <span className="text-xs text-zinc-500">Sábado</span>
                </BoxInformation>
                <p className="ml-5 text-zinc-500 text-sm">Nenhuma atividade cadastrada nesta data.</p>
            </div>

            <div className="space-y-2.5 ">
                <BoxInformation>
                    <span className="text-xl text-zinc-300 font-semibold">Dia 18</span>
                    <span className="text-xs text-zinc-500">Domingo</span>
                </BoxInformation>

                <BoxInformation variant="secondary" size="default" >
                    <CircleCheck className="size-5 text-lime-300 mr-3" />
                    <span className="text-zinc-100">Café da manhã</span>
                    <span className="text-zinc-400 text-sm ml-auto">08:00h</span>
                </BoxInformation>

                <BoxInformation variant="secondary" size="default" >
                    <CircleCheck className="size-5 text-lime-300 mr-3" />
                    <span className="text-zinc-100">Academia em grupo</span>
                    <span className="text-zinc-400 text-sm ml-auto">09:00h</span>
                </BoxInformation>
            </div >
        </div >
    )
}