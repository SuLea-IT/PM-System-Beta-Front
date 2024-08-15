// rule/fileTypeValidator.js

export const allowedFileTypes = ['image/jpeg', 'image/png'];

export function validateFileType(file) {
    const isValidType = allowedFileTypes.includes(file.type);
    if (!isValidType) {
        console.error(`File type ${file.type} is not allowed. Only ${allowedFileTypes.join(', ')} are allowed.`);
    }
    return isValidType;
}
