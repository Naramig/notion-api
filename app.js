const api = require("./app/main");

process.on("uncaughtException", cleanup);
process.on("SIGINT", cleanup);
process.on("SIGUSR1", cleanup);
process.on("SIGUSR2", cleanup);

(async () => {
    try {
        await api.init();
    } catch (err) {
        console.log("Ошибка при инициализации сервиса: " + (err.stack || err));
        cleanup();
    }
})();

function cleanup() {
    setTimeout(function () {
        console.log("exiting...");
        process.exit(1);
    }, 3000);
}