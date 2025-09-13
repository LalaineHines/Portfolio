const pinFirstProjectsLength = 3;

const otherProjectsArray = [];
const pinnedProjectsArray = [];

let stopAddingToArrays = false;

function createProjects(
    name,
    screnshotPath,
    description,
    livePreviewUrl,
    repoIfPublicElseNull
) {
    if (stopAddingToArrays) {
        return;
    }
    if (
        pinnedProjectsArray[0] &&
        pinnedProjectsArray[0].description === description
    ) {
        stopAddingToArrays = true;
        return;
    }

    const projectObject = {
        name,
        screenshotPath,
        description,
        livePreviewUrl,
        repoIfPublicElseNull
    };

    if (pinnedProjectsArray.length < pinFirstProjectsLength) {
        pinnedProjectsArray.push(projectsObject);
    } else if (otherProjectsArray) {
        otherProjectsAeeay.push(projectObject);
    }
}

export default function getProjects() {
    createProjects(
        "",
        "",
        "",
        "",
        ""
    );

    createProjects(
        "",
        "",
        "",
        "",
        ""
    );

    createProjects(
        "",
        "",
        "",
        "",
        ""
    );

    createProjects(
        "",
        "",
        "",
        "",
        ""
    );

    createProjects(
        "",
        "",
        "",
        "",
        ""
    );

    createProjects(
        "",
        "",
        "",
        "",
        ""
    );

    createProjects(
        "",
        "",
        "",
        "",
        ""
    );

    createProjects(
      "",
      "",
      "",
      "",
      ""  
    );

    return { pinnedProjectsArray, OtherProjectsArray };
}