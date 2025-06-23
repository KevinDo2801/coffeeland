import React from'react'
import'../styles/FeaturesSection.css'

const features=[
  {icon:'🚀',title:'Share Progress',desc:'Post your indie project updates and milestones.'},
  {icon:'💡',title:'Learn & Inspire',desc:'Discover lessons, wins, and pivots from fellow makers.'},
  {icon:'🤝',title:'Connect',desc:'Find collaborators, feedback, and support.'}
]

const FeaturesSection=()=>{
  return(
    <section className='features-section' id='features'>
      <h2 className='features-title'>Why Builders Console Log?</h2>
      <div className='features-grid'>
        {features.map((f,i)=>(
          <div className='feature-card' key={i}>
            <div className='feature-icon'>{f.icon}</div>
            <h3 className='feature-name'>{f.title}</h3>
            <p className='feature-desc'>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection 