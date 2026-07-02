// Hamburger menu toggle
document.getElementById('hamburger').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});

// Fetch and display jobs from the 'jobs' folder (JSON or Markdown)
// Since Decap CMS stores jobs as Markdown files, we'll need a way to read them.
// For simplicity, we'll show a static list or use a JSON approach.
// But since Decap CMS generates .md files, we'll use a simple fetch to a JSON file that we generate manually or via a build step.

// Option 1: Static fallback (if no JSON)
// Option 2: Use a simple PHP or serverless function to parse Markdown (but Netlify supports)
// For now, we'll just show a sample job list from a JSON file (you can create a jobs.json manually or let CMS generate Markdown and use a build tool).

// We'll create a simple approach: we'll store jobs as JSON in a file called jobs.json (manually created or via a small script).
// But since you want CMS, I'll give you a solution where CMS creates Markdown files and we use a small JS to fetch them via Netlify's proxy? Actually, easiest: let's just use a JSON endpoint.

// For demo, I'll embed sample jobs and later you can replace with real data.

const jobListDiv = document.getElementById('job-list');

// Sample jobs (for now, you can later fetch from /jobs.json or parse Markdown)
const sampleJobs = [
    {
        title: "Frontend Developer",
        location: "Mumbai, India",
        description: "Looking for a skilled frontend developer with React experience.",
        date: "2026-04-11"
    },
    {
        title: "Backend Engineer",
        location: "Remote",
        description: "Node.js, Python, and AWS expertise required.",
        date: "2026-04-10"
    },
    {
        title: "HR Manager",
        location: "Delhi, India",
        description: "Manage recruitment and employee relations.",
        date: "2026-04-09"
    }
];

function displayJobs(jobs) {
    if (jobs.length === 0) {
        jobListDiv.innerHTML = '<p>No jobs available right now. Check back later!</p>';
        return;
    }
    jobListDiv.innerHTML = jobs.map(job => `
        <div class="job-item">
            <h3>${job.title}</h3>
            <div class="location">📍 ${job.location}</div>
            <div class="description">${job.description}</div>
            <div class="date">${job.date}</div>
        </div>
    `).join('');
}

// Try fetching from a JSON file (if you create one), else use sample
// Future: you can replace this with a call to Netlify Functions or a Markdown parser.
displayJobs(sampleJobs);

// For real CMS integration, you would either:
// 1. Use a build process (like Eleventy, Hugo) to convert Markdown to JSON, or
// 2. Use Netlify Functions to read Markdown files from the repo (complex), or
// 3. Use a third-party service like Contentful, or
// 4. Use the CMS's built-in API to fetch data.

// Since you want non-technical users to post jobs via CMS, the easiest way is:
// - CMS writes Markdown files in /jobs/ folder.
// - Your static site (HTML) loads a JavaScript that fetches a pre-generated JSON (generated via a build hook).
// - Netlify can run a build command that converts Markdown to JSON before deployment.

// For now, we'll keep it simple with sample data. But once you set up Decap CMS, you can use a small Node script to convert Markdown to JSON during build.
// I'll provide that script in the next step.
