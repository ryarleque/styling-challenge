import { IVerticalCardAlignment } from './interfaces';

export const getVerticalAlignment = (position: string, styleList: IVerticalCardAlignment) => {
    switch (position) {
        case 'center': return styleList.verticalAlignmentCenter;
        case 'end': return styleList.verticalAlignmentEnd;
        case 'top': return styleList.verticalAlignmentStart;
    }
}