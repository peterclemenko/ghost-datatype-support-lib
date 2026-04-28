/**
 * Example helper exported from the package.
 *
 * @param taco - A string to include in the returned message
 * @returns A greeting string including the provided `taco` value
 * @example
 * ```ts
 * myPackage('Hello'); // 'Hello from my package'
 * ```
 */
export const myPackage = (taco = ''): string => `${taco} from my package`;

/**
 * Public exports for filetype parsers.
 */
export { ArdriveExport, ArdriveExportRow } from './filetypes/ardrive-export';
