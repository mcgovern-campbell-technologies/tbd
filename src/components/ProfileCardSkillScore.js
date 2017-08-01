import React from 'react'
import { Pie, PieChart } from 'recharts'

function ProfileCardSkillScore () {
  const data = [
    { name: 'Skills', value: 69, fill: 'green'},
    { name: 'Skills Lacked', value: 31, fill: 'red' }
  ]
  return (
    <div>
      <p>Skilled Mechanic</p>
      <h6>SkillSkore | 54</h6>
      <PieChart width={220} height={220}>
        <h4>54</h4>
        <Pie 
          data={data}
          innerRadius={60}
          outerRadius={80} 
        />
      </PieChart>
    </div>
  )
}

export default ProfileCardSkillScore