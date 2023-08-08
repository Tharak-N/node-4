export const Home = (req, res, next) => {
    console.log("reching the home middleware handler")
    next()
}