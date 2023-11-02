const jsonData = {
    name: "Your Name",
    title: "Front-End Developer",
    contact: {
        email: "your.email@example.com",
        phone: "123-456-7890",
        website: "www.yourwebsite.com",
        location: "Your City, Your Country",
    }
};

function formatJSON(obj, indent = 0) {
    const keys = Object.keys(obj);
    const spaces = " ".repeat(indent);
    const innerSpaces = " ".repeat(indent + 2); // INDENT + 2 SPACES FOR NESTED OBJECTS

    let result = "";

    if (indent === 0) {
        result = "{\n";
    }

    keys.forEach((key, index) => {
        result += `${innerSpaces}<span class="key">"${key}"</span>: `;

        const value = obj[key];

        if (typeof value === "object") {
            result += `{\n${formatJSON(value, indent + 4)}\n${spaces}}`;
        } else if (typeof value === "string") {
            result += `<span class="value">"${value}"</span>`;
        } else {
            result += `<span class="value">${value}</span>`;
        }

        if (index < keys.length - 1) {
            result += ",\n";
        } else {
            result += "\n";
        }
    });

    if (indent === 0) {
        result += "}";
    }

    return result;
}

const jsonContent = document.getElementById("json-content");
jsonContent.innerHTML = formatJSON(jsonData);
