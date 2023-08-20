
function ProjectGrid(clickState) {


    return (
        <div className="ProjectGrid" style={{display: clickState.clickState ? 'grid' : 'none'}}>
            <ProjectTile
                Image={'/Images/Wizard1CroppedSquare.png'}
                Name={'Portfolio (this site)'}
                Link={'https://github.com/AlexBohnson/AlexBohnson.github.io'}
                Description={`My project portfolio. Designed in Figma. Written in Javascript, HTML and CSS. Built with React.js.
                                A work in progress.`} />

            <ProjectTile
                Image={'Images/YarnifyCatSearch.JPG'}
                Name={'Yarnify'}
                Link={'https://github.com/AlexBohnson/Yarnify'}
                Description={`Full stack Android app. Searches, filters,
                        and saves knitting patterns returned from Ravelry.com's RESTful API. Built in Android Studio. Written in Java.`} />

            <ProjectTile 
                Image={'/Images/GitHubCap.JPG'}
                Name={'GitHub'}
                Link={'https://github.com/alexbohnson?tab=repositories'}
                Description={'My GitHub repositories.'} />
        </div>
    );
}

function ProjectTile({ Image, Name, Link, Description }) {
    return (
        <div className="ProjectTile">
            <ProjectImage pImage={Image} />
            <ProjectNameDescriptionBox pbName={Name} pbLink={Link} pbDescription={Description} />
        </div>
    );
}

function ProjectNameDescriptionBox({ pbName, pbLink, pbDescription }) {
    return (
        <div className="ProjectNameDescriptionBox">
            <ProjectName pName={pbName} pLink={pbLink} />
            <ProjectDescription pDescription={pbDescription} />
        </div>
    );
}

function ProjectName({ pName, pLink }) {
    return (
        <div className="ProjectName">
            <a href={pLink}><b>{pName}<br></br><br></br></b></a>
        </div>
    );
}

function ProjectDescription({ pDescription }) {
    return (
        <div className="ProjectDescription">
            {pDescription}
        </div>
    );
}

function ProjectImage({ pImage }) {

    return (
        <div
            className="ProjectImage"
            style={{ backgroundImage: `url(${pImage})` }}
        >
        </div>
    );
}

export default ProjectGrid;

