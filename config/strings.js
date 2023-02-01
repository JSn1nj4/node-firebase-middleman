const projectIds = {
    development: "grpc-test-7a8ce",
}

const firebaseDbUrl = `https://${projectIds[process.env.APP_ENV]}.firebaseio.com`

module.exports = {
    projectIds,
    firebaseDbUrl,
}