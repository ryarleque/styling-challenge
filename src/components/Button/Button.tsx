import { IButton } from "../../interfaces";
import icon from "../../assets/images/magnifyingGlass.png"
import styles from './Button.module.scss'

const Button = ({ variant = 'default', text, isDisabled = false }: IButton) => {
    return (
        <button disabled={isDisabled} className={variant === 'default' ? styles.defaultButtonType : styles.iconButtonType}>
            {variant === 'icon' && <img src={icon} alt='magnifyingGlass' />}
            <div>{text}</div>
        </button>
    )
}

export default Button;