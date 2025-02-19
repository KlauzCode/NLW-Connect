// biome-ignore lint/style/useImportType: <explanation>
import { ReactNode } from "react"

interface IconButtonProps {
    children: ReactNode
}


export function IconButton(props: IconButtonProps) {
    return (
        // biome-ignore lint/a11y/useButtonType: <explanation>
        <button className="p-1.5 bg-gray-500 text-blue rounded-md  cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900"
        >
            {props.children}
        </button>
    )
}