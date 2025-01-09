import { ReactNode } from 'react'
import './Button.css'

interface Props {
    children: ReactNode,
    perentMethod: () => void
}

interface ChildrenProps {
    children: ReactNode
}

export const ColorRed = ({ children }: ChildrenProps) => {
    return (<div className="color-red">{children}</div>)
}

export const Button = ({ children, perentMethod }: Props) => {
    return (
        <button className="custom-button" onClick={perentMethod}>
            {children}
        </button>
    )
}