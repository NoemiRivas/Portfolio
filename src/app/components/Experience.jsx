import React from 'react';

function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Hackathon Midudev",
      date: "2024",
      type: "Hackathon",
      description: "Participación en la hackathon organizada por la comunidad de midudev, totalmente online. El desafío consistía en crear un proyecto desde cero o mejorar uno existente sin usuarios reales en un plazo de 2 semanas. Desarrollé MoneyUp, una aplicación web para el control de finanzas personales.",
      achievements: [
        "Implementación exitosa de autenticación de usuarios con Clerk",
        "Despliegue completo de la aplicación: frontend en Vercel y backend en Render",
        "Desarrollo de un CRUD completo para gestión de finanzas",
        "Creación de una interfaz intuitiva con React y Tailwind CSS"
      ],
      skills: [
        "React",
        "Clerk Auth",
        "Vercel",
        "Render",
        "Tailwind CSS",
        "CRUD",
        "Git/GitHub"
      ],
      role: "Desarrolladora Full Stack"
    },
    // mas experiencias por agregar!
  ];

  return (
    <div className="py-12">
      <h2 className="text-4xl font-bold text-center mb-12">Experiencia 💼</h2>
      <div className="space-y-8">
        {experiences.map((exp) => (
          <div 
            key={exp.id} 
            className="bg-stone-900 p-6 rounded-lg hover:bg-stone-800 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold">{exp.title}</h3>
                <p className="text-stone-400">{exp.role}</p>
              </div>
              <span className="bg-stone-700 px-3 py-1 rounded-full text-sm">
                {exp.date}
              </span>
            </div>
            
            <p className="text-stone-300 mb-4">
              {exp.description}
            </p>

            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-2">Logros principales:</h4>
              <ul className="list-disc list-inside space-y-1 text-stone-300">
                {exp.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="bg-stone-700 px-3 py-1 rounded-full text-sm hover:bg-stone-600 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
