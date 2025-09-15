import { useState } from "react";
import { Link } from "react-router-dom";
import { CircleX } from "lucide-react";

import "../style/about.css";

function PassionDisplay({
    name,
    fomattedContents,
    leadPhotoUrl,
    expandedSection,
    setExpandedSection,
}) {
    if (expandedSection && expandedSection !== name) {
        return null;
    }

    function PassionInfo() {
        if (!expandedSection) {
            return null;
        }

        return (
           <div>
            <button
            type="button"
            onClick={() => {
                setExpandedSection(null);
            }}
            >
                <CircleX />
                close
            </button>
            {formattedContents}
           </div>
        );
    }

    return (
        <div className="passion">
            <button
            type="button"
            onClick={() => {
                setExpandedSection(name);
            }}
            >
                <im src={leadPhotoUrl} alt={`lead photo for ${name}`} />
                {name}
            </button>
            <PassionInfo />
        </div>
    );
}

function PassionList({ expandedSection, setExpandedSection }) {
    const langaugeContents = (
        <div>
            <p>
               I've been interested in learning programming since I was a high schooler
               and looking into college majors that interested me. Programming is a huge 
               part in my future career goals and has helped my further understand the 
               world of tehcnology around me. 
            </p>
        </div>
    );

    const readingContents = (
        <div>
            <p>
                There's not much better than sipping some hot coffee and reading a
                good book. Some of my favorites genre's are: 
            </p>
            <ol>
                <li>Murder Mysteries</li>
                <li>Mysteries in general</li>
                <li>Action Fantasy</li>
                <li>Mystery Fantasy</li>
            </ol>
        </div>
    );

    return (
        <div className="passion-list">
            <div>
                <h2>My Passions</h2>
                <p>(click to see more)</p>
            </div>
            <div>
                <PassionDisplay
                mane={"Reading"}
                formattedContents={readingContents}
                leadPhotoUrl={""}
                expandedSection={expandedSection}
                setExpandedSection={setExpandedSection}
                />
                <PasionDisplay 
                name={"Language Learning"}
                formattedContents={languageContents}
                leadPhotoUrl={""}
                expandedSection={expandedSection}
                setExpandedSection={setExpandedSection}
                />
            </div>
        </div>
    );
}

export default function AboutPage() {
    const [expandedSection, setExpandedSection] = useState(null);

    return (
        <>
            <h1>About Me</h1>
            <p>
                Hi there, I'm Lalaine! I am currently a sophmore in college. I chose
                to major in cybersecurity while minoring in programming and analytics.
                So far I have been doing pretty good in college but have found that I 
                would like to seek new challenges and break into the tech world professionally.
            </p>
            <PassionsList 
            expandedSection={expandedSection}
            setExpandedSection={setExpandedSection}
            />
        </>
    );
}