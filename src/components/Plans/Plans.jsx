import React from 'react'
import './Plans.css'
import whiteTick from '../../assets/whiteTick.png'
import {planData, plansData} from '../../data/plansData'

export const Plans = () => {
  return (
    <div className='plans-container'>
<div className="programs-header" style={{gap:'2rem'}}>
    <span className="stroke-text">READY TO START</span>
    <span>YOUR journey</span>
    <span className="stroke-text">NOW WITH US</span>

</div>

{/* plans card */}
<div className="plans">
  {plansData.map((plan,i)=>
  (
<div className="plan" key={i}>
  {plan.icon}
  <span>{plan.name}</span>
  <span>{plan.price}</span>
<div className="features">
  {plan.features.map}((feature,i)={'>'}
  (<div className="feature">
    <img src={whiteTick} alt="" />
    </div>))
</div>
<div>
  <span>SEE more benefits</span>
</div>
<button className='btn'>Join Now</button>
</div>

  ))}
    </div>
    </div>
  )
}
