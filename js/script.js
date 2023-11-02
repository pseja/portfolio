const jsonData = {
    name: "Lukáš Pšeja",
    age: 20,
    contact: {
        email: "luk4sps3j4@gmail.com",
        github: '<a href="https://github.com/pseja">"https://github.com/pseja"</a>',
    },
    skills: {
        languages: ["C", "Python"],
        tools: ["Git", "VS Code"],
    },
};

function formatJSON(obj, currentIndent = 0) {
    const indent = 2; // INDENT SPACES FOR NESTED OBJECTS

    const keys = Object.keys(obj);
    const innerSpaces = " ".repeat(currentIndent + indent);

    let result = "";

    if (currentIndent === 0) {
        result = "{\n";
    }

    keys.forEach((key, index) => {
        result += `${innerSpaces}`;

        if (Array.isArray(obj[key])) {
            result += `<span class="key">"${key}"</span>: [`;
            const array = obj[key];
            for (let i = 0; i < array.length; i++) {
                if (i !== 0) {
                    result += ", ";
                }
                if (
                    typeof array[i] === "string" &&
                    array[i].startsWith("<a href=")
                ) {
                    result += array[i];
                } else {
                    result += `<span class="value">"${array[i]}"</span>`;
                }
            }
            result += "]";
        } else {
            result += `<span class="key">"${key}"</span>: `;

            const value = obj[key];

            if (typeof value === "object") {
                result += `{\n${formatJSON(
                    value,
                    currentIndent + indent
                )}${innerSpaces}}`;
            } else if (
                typeof value === "string" &&
                value.startsWith("<a href=")
            ) {
                result += value;
            } else {
                result += `<span class="value">"${value}"</span>`;
            }
        }

        if (index < keys.length - 1) {
            result += ",\n";
        } else {
            result += "\n";
        }
    });

    if (currentIndent === 0) {
        result += "}";
    }

    return result;
}

const jsonContent = document.getElementById("json-content");
jsonContent.innerHTML = formatJSON(jsonData);
