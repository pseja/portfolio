const jsonData = {
    name: "neco",
    title: "neco",
    contact: {
        email: "email",
        phone: "+420123456789",
        neco: {
            dalsi: "test",
            jestedalsi: "test"
        }
    },
    test: "neco"
};

function formatJSON(obj, currentIndent = 0) {
    const indent = 4; // INDENT SPACES FOR NESTED OBJECTS

    const keys = Object.keys(obj);
    const innerSpaces = " ".repeat(currentIndent + indent);

    let result = "";

    if (currentIndent === 0) {
        result = "{\n";
    }

    keys.forEach((key, index) => {
        result += `${innerSpaces}<span class="key">"${key}"</span>: `;

        const value = obj[key];

        if (typeof value === "object") {
            result += `{\n${formatJSON(value, currentIndent + indent)}${innerSpaces}}`;
        } else if (typeof value === "string") {
            result += `<span class="value">"${value}"</span>`;
        } else {
            result += `<span class="value">${value}</span>`;
        }
        if (index < keys.length - 1)
            result += ",\n";
        else
            result += "\n";
    });

    if (currentIndent === 0) {
        result += "}";
    }

    return result;
}

const jsonContent = document.getElementById("json-content");
jsonContent.innerHTML = formatJSON(jsonData);
