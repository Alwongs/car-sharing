module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/car-sharing/" : "/",
    css: {
        loaderOptions: {
            scss: {
                prependData: '@import "@/assets/styles.scss";'
            }
        }
    }
}