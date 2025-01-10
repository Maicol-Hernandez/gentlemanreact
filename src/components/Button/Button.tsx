import { ReactNode } from 'react'
import './Button.css'
import { useGlobalContext } from '../../context/global.context'

interface Props {
    children: ReactNode,
    perentMethod: () => void
}

interface ChildrenProps {
    children: ReactNode
}

export const ColorRed = ({ children }: ChildrenProps) => {
    const { value } = useGlobalContext();

    return (<div className="color-red">{value} : {children}</div>)
}

export const Button = ({ children, perentMethod }: Props) => {
    const { setValue } = useGlobalContext();

    const handleClick = () => {
        setValue(10);
        perentMethod();
    }

    return (
        <button className="custom-button" onClick={handleClick}>
            {children}
        </button>
    )
}