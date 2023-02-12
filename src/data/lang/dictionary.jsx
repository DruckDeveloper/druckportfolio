// importing images
import toDoList from '../../assets/images/to-do-list.webp'

export const dictionary = {
  en: {
    // Header Content
    header: {
      profileName: 'Druck Developer',
      profileRol1: 'Javascript Full stack developer',
      profileRol2: 'AWS cloud practitioner',
      nav: {
        buttonAboutme: 'About me',
        buttonProjects: 'Projects',
        buttonSkills: 'Skills',
        buttonCertifications: 'Certifications',
        buttonContactme: 'Contact me'
      }
    },

    // AboutMe Page
    hero: {
      contentName: 'Hi, Im Dylan',
      contentRol: 'Web Developer',
      contentText: [
        'I am a person passionate about technology, self-taught and persevering',
        'With solid technical skills in programming and AWS cloud services'
      ],
      contentText2: 'We can build the future together',
      buttons: {
        downloadButotn: 'Descargar CV',
        contactButton: 'Work with Me'
      }
    },

    // Projects page
    projects: {
      title: 'My projects',
      card: [
        {
          title: 'Legacy todo list',
          repo: 'https://github.com/CamilaForer/Legacy-to-do-list',
          repoButton: 'Repository',
          deploy: 'https://legacy-to-do-list-o115.vercel.app/',
          deployButton: 'Deploy',
          image: toDoList,
          description: ['ToDo list Application with stack MERN']
        }
      ]
    },

    // ContactMe Page
    contactme: {
      contactTitle: 'Contact Me',
      inputText: {
        mailField: 'Email',
        subjectField: 'Subject',
        messageField: 'Message'
      },
      sendButtonText: 'Send'
    }
  },
  es: {
    // Header Content
    header: {
      profileName: 'Druck Developer',
      profileRol1: 'Desarrollador full stack Javascript',
      profileRol2: 'AWS practicante en cloud',
      nav: {
        buttonAboutme: 'Sobre mi',
        buttonProjects: 'Proyectos',
        buttonSkills: 'Habilidades',
        buttonCertifications: 'Certificaciones',
        buttonContactme: 'Contactame'
      }
    },

    // AboutMe Page
    hero: {
      contentName: 'Hola, soy Dylan',
      contentRol: 'Desarrollador web',
      contentText: [
        'Soy una persona apasionada por la tecnología, autodidacta y perseverante',
        'Con sólidas habilidades técnicas en programación y servicios en la nube de AWS'
      ],
      content2: 'Construyamos el futuro juntos',
      buttons: {
        downloadButotn: 'Download CV',
        contactButton: 'Trabaja conmigo'
      }
    },

    // Projects page
    projects: {
      title: 'Mis proyectos',
      card: [
        {
          title: 'Legacy todo list',
          repo: 'https://github.com/CamilaForer/Legacy-to-do-list',
          repoButton: 'Repositorio',
          deploy: 'https://legacy-to-do-list-o115.vercel.app/',
          deployButton: 'Despliegue',
          image: toDoList,
          description: ['Aplicacíon de tareas por hacer desarrollada con el stack MERN']
        },
        {
          title: 'Legacy todo list',
          repo: 'https://github.com/CamilaForer/Legacy-to-do-list',
          repoButton: 'Repositorio',
          deploy: 'https://legacy-to-do-list-o115.vercel.app/',
          deployButton: 'Despliegue',
          image: toDoList,
          description: ['Aplicacíon de tareas por hacer desarrollada con el stack MERN']
        },
        {
          title: 'Legacy todo list',
          repo: 'https://github.com/CamilaForer/Legacy-to-do-list',
          repoButton: 'Repositorio',
          deploy: 'https://legacy-to-do-list-o115.vercel.app/',
          deployButton: 'Despliegue',
          image: toDoList,
          description: ['Aplicacíon de tareas por hacer desarrollada con el stack MERN']
        }
      ]
    },

    // ContactMe Page
    contactme: {
      contactTitle: 'Contacta conmigo',
      inputText: {
        mailField: 'Correo',
        subjectField: 'Asunto',
        messageField: 'Mensaje'
      },
      sendButtonText: 'Enviar'
    }
  }
}
