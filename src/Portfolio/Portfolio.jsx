import React, {useState} from 'react';
import imagesData from '../imagesData';
import Toolbar from '../Toolbar/Toolbar';
import ProjectList from '../ProjectList/ProjectList'

const initialFilterList = ['All', 'Websites', 'Flayers', 'Business Cards'];
const initialActiveFilter = 'All';


const Portfolio = (props) => {
    const [projects, setProjects] = useState(imagesData);
    const [filters, setFilter] = useState(initialFilterList);
    const [activeFilter, setActiveFilter] = useState(initialActiveFilter);
    const onClickHandler = (button) => setActiveFilter(button);


    const portfolioFilter = () => {
        return activeFilter === 'All' ? projects : projects.filter((project) => project.category === activeFilter)
    }

    return (
        <>
        <Toolbar filters={filters} active={activeFilter} onSelectFilter={onClickHandler}/>
        <ProjectList projects={portfolioFilter()}/>
        </>
    )
}

export default Portfolio;