const container = document.getElementById('container')
function createDivs(rows, cols)
{
    container.innerHTML = "";
    container.style.width = "480px";
    for(let i=0;i<rows;i++)
    {
        for(let j=0;j<cols;j++)
        {
            const newElement = document.createElement("div");
            newElement.className = "grids";
            newElement.style.width=`calc(100%/${rows})`
            newElement.style.height=`calc(100%/${rows})`
            newElement.dataset.opacity = 0;
            container.appendChild(newElement);
        }
    }
    addHoverEffect();
}
createDivs(16, 16);

function getRandomColor()
{
    let x = Math.random();
    if(x>0 && x<0.5)
        return "grey";
    else
        return "black";
}
    

function addHoverEffect() {
    document.querySelectorAll(".grids").forEach(cell => {
        cell.addEventListener("mouseover", () => {
            let currentOpacity = parseFloat(cell.dataset.opacity);
            if (currentOpacity < 1) {
                currentOpacity += 0.2; 
                cell.dataset.opacity = currentOpacity.toFixed(1);
            }
            let color = getRandomColor();
            cell.style.backgroundColor = `rgba(${getRGB(color)}, ${currentOpacity})`; // Apply opacity
        });
    });
}

// Convert color names to RGB values
function getRGB(color) {
    const colors = {
        "purple": "128, 0, 128",
        "indigo": "75, 0, 130",
        "blue": "0, 0, 255",
        "green": "0, 128, 0",
        "yellow": "255, 255, 0",
        "red": "255, 0, 0",
        "black": "0, 0, 0",
        "brown": "165, 42, 42"
    };
    return colors[color] || "0, 0, 0"; // Default black if unknown
}

const resets = document.getElementById("resets");
resets.addEventListener('click', () => {
    document.querySelectorAll(".grids").forEach(cell => {
        cell.style.backgroundColor = "white";
    })
})

const setSizes = document.getElementById("setSize")
setSizes.addEventListener('click', () => {
    let userGrid = parseInt(prompt("No. of grids ?"))
    if (isNaN(userGrid) || userGrid < 1 || userGrid > 100) {
        userGrid = 16; 
    }
    createDivs(userGrid, userGrid);
})

// opacity: 1;
//  transition: opacity 0.5s ease-in-out;
