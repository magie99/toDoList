const projectManager = (() => {
    const projects = [];
    let currentProject;

    const changeCurrentProject = (project) =>{
        currentProject = project;
    }

    return{
        changeCurrentProject
    };
})();

export default projectManager;