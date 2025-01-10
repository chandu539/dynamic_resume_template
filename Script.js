
function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab');
    const panes = document.querySelectorAll('.tab-pane');

    
    tabs.forEach(tab => tab.classList.remove('active'));
    panes.forEach(pane => pane.classList.remove('active'));

    
    document.querySelector(`.tab[onclick="showTab('${tabId}')"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
}


function nextPage(tabId) {
    showTab(tabId);
}


function addExperience() {
    const container = document.getElementById('experienceInputs');
    const experienceBlock = `
        <div class="experience-block">
            <input type="text" placeholder="Job Title">
            <input type="text" placeholder="Company Name">
            <input type="text" placeholder="Duration">
            <textarea placeholder="Job Description"></textarea>
            <button onclick="this.parentElement.remove()">Remove</button>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', experienceBlock);
}


function addEducation() {
    const container = document.getElementById('educationInputs');
    const educationBlock = `
        <div class="education-block">
            <input type="text" placeholder="Degree">
            <input type="text" placeholder="Institution">
            <input type="text" placeholder="Year of Graduation">
            <button onclick="this.parentElement.remove()">Remove</button>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', educationBlock);
}

function addCertification() {
    const container = document.getElementById('certificationInputs');
    const certificationBlock = `
        <div class="certification-block">
            <input type="text" placeholder="Certification Name">
            <input type="text" placeholder="Issuing Organization">
            <input type="text" placeholder="Year">
            <button onclick="this.parentElement.remove()">Remove</button>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', certificationBlock);
}

function addProject() {
    const container = document.getElementById('projectInputs');
    const projectBlock = `
        <div class="project-block">
            <input type="text" placeholder="Project Title">
            <textarea placeholder="Project Description"></textarea>
            <input type="text" placeholder="Technologies Used">
            <button onclick="this.parentElement.remove()">Remove</button>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', projectBlock);
}

function generateResume() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const location = document.getElementById('location').value;
    const summary = document.getElementById('summaryInput').value;

    let experienceContent = '';
    document.querySelectorAll('.experience-block').forEach(block => {
        const inputs = block.querySelectorAll('input, textarea');
        experienceContent += `
            <div>
                <h4>${inputs[0].value} at ${inputs[1].value}</h4>
                <p>Duration: ${inputs[2].value}</p>
                <p>${inputs[3].value}</p>
            </div>
        `;
    });

    let educationContent = '';
    document.querySelectorAll('.education-block').forEach(block => {
        const inputs = block.querySelectorAll('input');
        educationContent += `
            <div>
                <h4>${inputs[0].value} from ${inputs[1].value}</h4>
                <p>Graduated in: ${inputs[2].value}</p>
            </div>
        `;
    });

    let certificationContent = '';
    document.querySelectorAll('.certification-block').forEach(block => {
        const inputs = block.querySelectorAll('input');
        certificationContent += `
            <div>
                <h4>${inputs[0].value}</h4>
                <p>Issued by: ${inputs[1].value} in ${inputs[2].value}</p>
            </div>
        `;
    });

    let projectContent = '';
    document.querySelectorAll('.project-block').forEach(block => {
        const inputs = block.querySelectorAll('input, textarea');
        projectContent += `
            <div>
                <h4>${inputs[0].value}</h4>
                <p>${inputs[1].value}</p>
                <p>Technologies used: ${inputs[2].value}</p>
            </div>
        `;
    });

    const resumeContent = `
        <h1>${fullName}</h1>
        <p>Email: ${email} | Phone: ${phone} | Location: ${location}</p>
        <h2>Professional Summary</h2>
        <p>${summary}</p>
        ${experienceContent ? `<h2>Experience</h2>${experienceContent}` : ''}
        ${educationContent ? `<h2>Education</h2>${educationContent}` : ''}
        ${certificationContent ? `<h2>Certifications</h2>${certificationContent}` : ''}
        ${projectContent ? `<h2>Projects</h2>${projectContent}` : ''}
    `;

    document.getElementById('resumePreview').innerHTML = resumeContent;
}

function printResume() {
    const resumeContent = document.getElementById('resumePreview').innerHTML;
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
        <head>
            <title>Resume</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; }
                h1, h2 { color: #2c3e50; }
                p { line-height: 1.6; }
            </style>
        </head>
        <body>${resumeContent}</body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
}
