const tasks = [
    { title: "Task 1", url: "works/task 1/task1.html" },
    { title: "Task 2", url: "works/task 2/dashboard (1).html" },  // Updated Task 2 Path
    { title: "Task 3", url: "works/task 3/hover.html" },
    { title: "Task 4", url: "works/task 4/index-1.html" },
    { title: "Task 5", url: "works/task 5/task5 (1).html" },
    { title: "Task 6", url: "works/task 6/task 6.html" },
    { title: "Task 7", url: "works/task 7/task 7.html" },
    { title: "Task 8", url: "works/task 8/console.html" },
    { title: "Task 9", url: "works/task 9/Grade calculator.html" },
    { title: "Task 10", url: "works/task 10/process line.html" },
    { title: "Task 11", files: [
        { name: "File 1", url: "works/task 11/stars.html" },
        { name: "File 2", url: "works/task 11/sum.html" }
    ]},
    { title: "Task 12", url: "works/task 12/SakethStdInfo.html" },
    { title: "Task 13", url: "works/task 13/SakethStdInfo-1.html" },
    { title: "Task 14", files: [
        { name: "File 1", url: "works/task 14/task.html" },
        { name: "File 2", url: "works/task 14/vanish.html" }
    ]},
    { title: "Task 15", url: "works/task 15/task 15.html" },
    { title: "Task 16", url: "works/task 16/task 16.html" }
];

function createNav() {
    const nav = document.getElementById("navbar");
    tasks.forEach(task => {
        if (task.files) {
            const dropdown = document.createElement("div");
            dropdown.classList.add("dropdown");
            const btn = document.createElement("button");
            btn.innerText = task.title;
            btn.classList.add("nav-btn");
            const dropdownContent = document.createElement("div");
            dropdownContent.classList.add("dropdown-content");
            task.files.forEach(file => {
                const fileBtn = document.createElement("button");
                fileBtn.innerText = file.name;
                fileBtn.onclick = () => loadTask(file.url);
                dropdownContent.appendChild(fileBtn);
            });
            dropdown.appendChild(btn);
            dropdown.appendChild(dropdownContent);
            nav.appendChild(dropdown);
        } else {
            const btn = document.createElement("button");
            btn.innerText = task.title;
            btn.classList.add("nav-btn");
            btn.onclick = () => loadTask(task.url);
            nav.appendChild(btn);
        }
    });
}

function loadTask(url) {
    document.getElementById("contentFrame").src = url;
}

createNav();
