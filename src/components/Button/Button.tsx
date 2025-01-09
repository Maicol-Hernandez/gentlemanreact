import './Button.css'

interface Props {
    label: string,
    perentMethod: () => void
}

export const Button = ({ label, perentMethod }: Props) => {
    return (
        <button className="custom-button" onClick={perentMethod}>
            {label}
        </button>
    )
}