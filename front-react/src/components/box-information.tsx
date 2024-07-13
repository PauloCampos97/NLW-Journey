import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

// Definição das variantes com Tailwind Variants
const BoxInformationVariants = tv({
    base: 'w-full px-4 bg-zinc-900 rounded-xl shadow-shape flex items-center justify-between ',

    variants: {
        variant: {
            primary: 'h-16',
            secondary: 'h-12'
        },

        size: {
            full: 'w-full',
            default: 'w-11.5/12 ml-5'
        }
    },

    defaultVariants: {
        variant: 'primary',
        size: 'full'
    }
});

// Interface das props para o componente BoxInformation
interface BoxInformationProps extends ComponentProps<'div'>, VariantProps<typeof BoxInformationVariants> {
    children: ReactNode;
}

// Componente BoxInformation
export function BoxInformation({ children, variant, size, ...props }: BoxInformationProps) {
    // Obtém as classes com base nas variantes
    const classes = BoxInformationVariants({ variant, size });

    return (
        <div {...props} className={classes}>
            {children}
        </div>
    );
}
