
function ProjectGrid() {
    return (
        <div className="ProjectGrid">
            <ProjectTile Image={'/Images/Wizard1CroppedSquare.png'} Name={'Project One'} Description={'Description 1'} />
            <ProjectTile Image={'Images/HorizontalBarsWaterColorSun.png'} Name={'Project Two'} Description={'Description 2'} />
            <ProjectTile Image={'Images/HorizontalBarsWaterColorOcean.png'} Name={'Project Three'} Description={'Description 3'} />
        </div>
    );
}

function ProjectTile({ Image, Name, Description }) {
    return (
        <div className="ProjectTile">
            <ProjectImage pImage={Image} />
            <ProjectNameDescriptionBox pbName={Name} pbDescription={Description} />
        </div>
    );
}

function ProjectNameDescriptionBox({ pbName, pbDescription }) {
    return (
        <div className="ProjectNameDescriptionBox">
            <ProjectName pName={pbName} />
            <ProjectDescription pDescription={pbDescription} />
        </div>
    );
}

function ProjectName({ pName }) {
    return (
        <div className="ProjectName">
            <b>{pName}<br></br><br></br></b>
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

