import type { Styles } from '../@types/styles';

export const getStyles = (styles: Styles) => Object.values(styles).join(' ');