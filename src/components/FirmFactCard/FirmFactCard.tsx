import { IFirmFactCard } from "../../interfaces"
import { getVerticalAlignment } from "../../utils";
import styles from "./FirmFactCard.module.scss"

const FirmFactCard = ({ variant = 'default', position = 'center', children }: IFirmFactCard) => {
    const verticalAlignment = getVerticalAlignment(position, styles);
    const variantType = variant === 'default' ? styles.defaultCardType : styles.borderCardType;
    return (
        <div className={`${verticalAlignment} ${variantType}`}>
            {children}
        </div>
    )
}

export default FirmFactCard;