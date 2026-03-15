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

    console.log("--- Task System Summary ---");

    const completedTasks = tasks.filter(task => task.status === "done");

    if (completedTasks.length > 0) {
        
        completedTasks.forEach(task => {
            console.log(`${task.title}, STATUS : ${task.status.toUpperCase()}.`);
        });
    } else {
        console.log("No tasks completed. Let's get to work!");
    }

}

initializeTaskSystem();
