import React from 'react';

const ProjectList = (props) => {
    const imagesList = props.projects.map((image) => <img src={image.img} className="project-list_gallery__image" alt={image.category} />);
    console.log(imagesList)

    return (
    <div className="project-list_gallery__wrapper">{imagesList}</div>
    )
}

export default ProjectList;