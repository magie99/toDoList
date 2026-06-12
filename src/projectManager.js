const projectManager = (() => {
    const projects = [];
    let currentProject;

    const changeCurrentProject = (title) =>{
        currentProject = projects.find(item => item.title == title);
    }
    const getCurrentProject = () =>{
        return currentProject 
    }
    const getAllProjects = () =>{
        return projects
    }
    const addProject = (title) =>{
        const newProject = new Project(title);
        projects.push(newProject);            
        return newProject;       
    }
    const removeProject = (project) =>{
        projects.splice(projects.indexOf(project),1);
    }
    return{
        changeCurrentProject,
        getCurrentProject,
        getAllProjects,
        addProject,
        removeProject
    };
})();

export default projectManager;