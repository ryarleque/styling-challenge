export interface IFirmFacts {
    title: string;
}

export interface IFirmFactCard {
    variant: string;
    children : React.ReactNode;
    position?: string;
}

export interface IButton {
    variant: string;
    text: string;
    isDisabled?: boolean
}

export interface IVerticalCardAlignment {
    verticalAlignmentCenter?: string;
    verticalAlignmentEnd?: string;
    verticalAlignmentStart?: string;
}