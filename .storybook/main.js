const config = {
    stories: [
        '../src/components/**/*.stories.mdx',
        '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/preset-create-react-app',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    typescript: {
        check: true,
        checkOptions: {},
    },
    features: {
        postcss: false,
        previewCsfV3: false,
        buildStoriesJson: true,
        storyStoreV7: true,
    },
    core: {
        builder: 'webpack5',
    },
};
export default config;

// typescript: {
//     reactDocgen: 'react-docgen-typescript',
//     reactDocgenTypescriptOptions: {
//         compilerOptions: {
//             allowSyntheticDefaultImports: true,
//             esModuleInterop: true,
//         },
//     },
// },

// docs: {
//   autodocs: true,
// },
