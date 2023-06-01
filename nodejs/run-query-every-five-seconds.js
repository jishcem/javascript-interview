const timer = setInterval(() => {
    console.log("QUERY RUNNING");
}, 5000);

process.on('exit', () => {
    handleExit();
})
process.on('SIGINT', () => {    
    handleExit();
    process.exit();
})

function handleExit() {
    clearInterval(timer)
}