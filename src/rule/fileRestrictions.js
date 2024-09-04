export const fileTypeRestrictions = {
    1: {
        allowedExtensions: ['.tsv.gz', '.mtx.gz'],
        requiredFileNames: ['barcodes', 'features', 'matrix'],
        uploadFileCount: 3
    },
    2: {
        allowedExtensions: ['.tsv.gz', '.mtx.gz'],
        requiredFileNames: ['barcodes', 'features', 'matrix', 'barcodes_pos'],
        uploadFileCount: 4
    },
    3: {
        allowedExtensions: ['.tsv.gz', '.mtx.gz'],
        requiredFileNames: ['barcodes', 'features', 'matrix', '*'],
        uploadFileCount: 4
    },
    4: {
        allowedExtensions: ['.csv.gz', '.mtx.gz', '.h5'],
        requiredFileNames: ['*', '*'],
        uploadFileCount: 2
    },
    5: {
        allowedExtensions: ['.h5ad'],
        requiredFileNames: ['*', '*'],
        uploadFileCount: 1
    }
};
