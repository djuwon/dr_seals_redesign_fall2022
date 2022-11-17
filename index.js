window.addEventListener('load', (event) => {
    var about = document.getElementById("about_link");
    about.addEventListener('click', () => {
        navigate('intro', 0);
    })

    var experience = document.getElementById("experience_link");
    experience.addEventListener('click', () => {
        navigate('experience', -100);
    })

    var research = document.getElementById("research_link");
    research.addEventListener('click', () => {
        navigate('research', -120);
    })
    
    var course = document.getElementById("course_link");
    course.addEventListener('click', () => {
        navigate('course', -120);
    })

    var service = document.getElementById("service_link");
    service.addEventListener('click', () => {
        navigate('service', -120);
    })

    var project = document.getElementById("student_link");
    project.addEventListener('click', () => {
        navigate('student', -120);
    })

    var publication = document.getElementById("publication_link");
    publication.addEventListener('click', () => {
        navigate('publication', -120);
    })

    function navigate(section, offset) {
        window.scrollTo({top: document.getElementById(section + "_section").offsetTop + offset, left: 0, behavior: 'smooth'});
    }
});