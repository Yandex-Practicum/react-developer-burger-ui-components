module.exports = {
    snapshotSerializers: ['enzyme-to-json/serializer'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    collectCoverage: true,
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/src/__mocks__/file-mock.ts',
        '\\.(css|less)$': '<rootDir>/src/__mocks__/style-mock.ts',
        '^worker-loader': '<rootDir>/src/__mocks__/file-mock.ts'
    },
    coverageDirectory: '<rootDir>/__coverage__',
    setupFilesAfterEnv: ['<rootDir>/tasks/tests.js']
};
