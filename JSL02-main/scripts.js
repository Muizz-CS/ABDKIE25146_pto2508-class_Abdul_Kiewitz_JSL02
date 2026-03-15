function initializeTaskSystem() {
    const tasks = [];

    for (let i = 1; i <= 2; i++) {
        const title = prompt(`Enter Task ${i} Title:`);
        const description = prompt(`Enter Task ${i} Description:`);
        let status = "";

        while (true) {
            let statusInput = prompt(`Enter Status for "${title}" (todo, doing, or done):`);
            
            status = statusInput ? statusInput.toLowerCase().trim() : "";

            if (status === "todo" || status === "doing" || status === "done") {
                break; // Exit loop if valid
            } else {
                alert("Invalid status! Please enter 'todo', 'doing', or 'done'.");
            }
        }
        
        tasks.push({ title, description, status });
    }
}

initializeTaskSystem();
