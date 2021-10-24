module.exports = {
    exportPathMap: function () {
        return {
            "/": { page: "/" },
        };
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
    // images: {
    //     domains: ["s3.amazonaws.com"],
    // },
};
