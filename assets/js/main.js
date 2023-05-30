const profileButton = document.getElementById("profile");
const projectsButton = document.getElementById("projects");

const terminal = document.getElementById("terminal-commands");

const projects = {
    hobbyhunt: {
        name: "HobbyHunt",
        color: "text-red-300",
        icon: "fa-compass"
    },
    wallet: {
        name: "Personal Wallet",
        color: "text-green-300",
        icon: "fa-wallet"
    },
    vehicle: {
        name: "Vehicle Management",
        color: "text-blue-300",
        icon: "fa-car"
    },
    arfix: {
        name: "Arfix",
        color: "text-indigo-300",
        icon: "fa-tools"
    },
    streetio: {
        name: "Streetio",
        color: "text-[#a0f371]",
        icon: "fa-location-dot"
    },
    twitterbot: {
        name: "Twitter Trading Bot",
        color: "text-[#eace8b]",
        icon: "fa-robot"
    },
};

profileButton.onclick = function () {
    addCommandToTerminal("cat Profile");
    const text = `My name is Alejandro, and I'm a software developer primarily focused on PHP. I have experience with Python, APIs, message queues like RabbitMQ, Laravel, ReactJS, and more. I enjoy tackling complex problems and creating innovative solutions using technology. I'm skilled in the entire software development life cycle, from requirements gathering to implementation and testing. I thrive on collaborating with cross-functional teams and staying updated with the latest trends in the software development field.`;
    setTimeout(function () {
        addTextToTerminal(text);
    }, 1000);
};

projectsButton.onclick = function () {
    addCommandToTerminal("ls Projects");
    setTimeout(function () {
        const node = document.createElement("div");
        node.classList.add("ls-result");
        for (let key in projects) {
            if (projects.hasOwnProperty(key)) {
                const childNode = document.createElement("div");
                childNode.setAttribute("data-project", key);
                childNode.classList.add("cursor-pointer", "project-button", projects[key]['color']);
                const iconNode = document.createElement("i");
                iconNode.classList.add("fa-solid");
                iconNode.classList.add(projects[key]['icon']);
                const textnode = document.createTextNode(" " + projects[key]['name']);
                childNode.appendChild(iconNode);
                childNode.appendChild(textnode);
                node.appendChild(childNode);
            }
        }
        terminal.appendChild(node);
    }, 1000);
};

function addCommandToTerminal(command) {
    const node = document.createElement("div");
    const spanNode = document.createElement("span");
    node.classList.add("prompt");
    spanNode.classList.add("command");
    const dollarTextNode = document.createTextNode("$ ");
    const textnode = document.createTextNode(command);
    spanNode.appendChild(textnode);
    node.appendChild(dollarTextNode);
    node.appendChild(spanNode);
    terminal.appendChild(node);
}

function addTextToTerminal(text) {
    const node = document.createElement("div");
    node.classList.add("result");
    const textnode = document.createTextNode(text);
    node.appendChild(textnode);
    terminal.appendChild(node);
}

function showMenu() {
    const menu = document.getElementById("menu");
    addCommandToTerminal("ls");
    Array.from(menu).forEach((element) => {
        terminal.appendChild(element);
    });
}

