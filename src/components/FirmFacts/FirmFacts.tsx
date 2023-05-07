import { IFirmFacts } from '../../interfaces'
import styles from './FirmFacts.module.scss'

import FirmFactCard from '../FirmFactCard/FirmFactCard'
import Button from '../Button/Button'

const FirmFacts = ({ title }: IFirmFacts) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.cardsLayout}>
                <FirmFactCard variant='border'>
                    <Button variant='icon' text='This is a two line button that terminates with ellipsis' />
                </FirmFactCard>

                <FirmFactCard variant='default'>
                    <Button variant='icon' text='This is a two line button that terminates with ellipsis' />
                </FirmFactCard>

                <FirmFactCard variant='border'>
                    <Button variant='default' text='This is a one line button' />
                </FirmFactCard>

                <FirmFactCard variant='default'>
                    <Button variant='icon' text='This is a two line button that terminates with ellipsis' />
                </FirmFactCard>

                <FirmFactCard variant='default' position='top'>
                    <Button variant='icon' text='This is a two line button that terminates with ellipsis' />
                </FirmFactCard>

                <FirmFactCard variant='border' position='top'>
                    <Button isDisabled variant='icon' text='This is a two line button that terminates with ellipsis' />
                </FirmFactCard>

                <FirmFactCard variant='border' position='top'>
                    <Button variant='icon' text='This is a two line button that terminates with ellipsis' />
                </FirmFactCard>
            </div>
        </div>
    )
}

export default FirmFacts