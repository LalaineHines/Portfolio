import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import ProjectDisplay from "../partials/projectListDisplay";

export default function ProjectPage() {
    const { pinnedProjects, otherProjects } = useOutletContext();

    return (
        <>
            <h1>My Projects</h1>
            <ProjectDisplay projects={pinnedProjects} className="" />
            <ProjectDisplay projects={otherProjects} className="" />
        </>
    );
}