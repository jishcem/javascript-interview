const timer = setInterval(() => {
    console.log("QUERY RUNNING");
}, 5000); // Run every five seconds

process.on('exit', () => {
    handleExit();
})
process.on('SIGINT', () => {    
    handleExit();
    process.exit();
})

function handleExit() {
    clearInterval(timer) // Clears the timer
}