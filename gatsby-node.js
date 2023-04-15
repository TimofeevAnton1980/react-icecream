exports.onCreateWebpackConfig = ({ stage, actions }) => {
    actions.setWebpackConfig({
        stats: {
            children: true,
        },
    });
};
