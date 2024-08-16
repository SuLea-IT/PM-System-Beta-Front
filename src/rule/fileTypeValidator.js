// rule/fileTypeValidator.js
import i18n from "../i18n/i18n.js";
export const allowedFileTypes = ['image/jpeg', 'image/png'];

export function validateFileType(file) {
    const isValidType = allowedFileTypes.includes(file.type);
    if (!isValidType) {
        console.error(i18n.global.t('fileUploadConsoleError', {
            type: file.type,
            allowedTypes: allowedFileTypes.join(', ')
        }));
    }
    return isValidType;
}

