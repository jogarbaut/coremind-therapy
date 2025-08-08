module.exports = {
    async check(ctx) {
        try {
            // Test database connection
            const dbConnection = strapi.db.connection
            const result = await strapi.db.connection.raw("SELECT NOW()")

            ctx.body = {
                status: "success",
                message: "All systems operational",
                timestamp: new Date().toISOString(),
                database: {
                    connected: true,
                    timestamp: result.rows[0].now,
                },
                strapi: {
                    version: strapi.config.info.strapi,
                    environment: strapi.config.environment,
                },
            }
        } catch (error) {
            ctx.status = 500
            ctx.body = {
                status: "error",
                message: "System check failed",
                error: error.message,
            }
        }
    },
}
