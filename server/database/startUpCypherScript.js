// CREATE
// (cont:Contractor {email: "robJohnson@gmail.com", name: "Rob Johnson"}),
// (s1:Skill {name: "Leadership"}),
// (s2:Skill {name: "Teamwork"}),
// (s3:Skill {name: "Communication"}),
// (s4:Skill {name: "Attention to Detail"}),
// (s5:Skill {name: "Fun Loving"}),
// (c1:Certification {name: "Forklift Driver"}),
// (c2:Certification {name: "Welding"}),
// (c3:Certification {name: "Warehouse Safety"}),
// (c4:Certification {name: "First Aid"}),
// (p:Project {name: "Deathstar"}),
// (l:Location {name: "Alderaan"})
// RETURN s1
const startUpScript = `
  MERGE (c:Company {name: 'kuka'})
  MERGE (l1:Location {name: 'Sterling Heights'})
  MERGE (l2:Location {name: 'Clinton Township'})
  MERGE (l3:Location {name: 'Manufacturing Center'})
  MERGE (l4:Location {name: 'Tank Plant'})
  MERGE (l5:Location {name: 'Warren Plant'})
  MERGE (l6:Location {name: 'NW'})
  MERGE (l7:Location {name: 'Palmdale'})
  MERGE (l8:Location {name: 'Metro Park'})
  CREATE UNIQUE (c)-[:HAS_LOCATION]->(l1)
  CREATE UNIQUE (c)-[:HAS_LOCATION]->(l2)
  CREATE UNIQUE (c)-[:HAS_LOCATION]->(l3)
  CREATE UNIQUE (c)-[:HAS_LOCATION]->(l4)
  CREATE UNIQUE (c)-[:HAS_LOCATION]->(l5)
  CREATE UNIQUE (c)-[:HAS_LOCATION]->(l6)
  CREATE UNIQUE (c)-[:HAS_LOCATION]->(l7)
  CREATE UNIQUE (c)-[:HAS_LOCATION]->(l8)
  MERGE (pr:Project {name: 'A sample project'})
  CREATE UNIQUE (l8)-[:HAS_PROJECT]->(pr)
  MERGE (te:Team {name: 'Sparky Team'})
  CREATE UNIQUE (pr)-[:HAS_TEAM]->(te)
  MERGE (r:Role {name: 'Electrician 1', trade: 'Electrician', skillLevel: '1', days: 'm,tu,w', starttime: '09:00am', endtime: '05:00pm', rate: '$22/hr'})
  CREATE UNIQUE (te)-[:HAS_ROLE]->(r)
  MERGE (p1:Position {name: 'Electrician position', status: 'filled'})
  MERGE (p2:Position {name: 'Electrician position', status: 'pending'})
  MERGE (p3:Position {name: 'Electrician position', status: 'unfilled'})
  CREATE UNIQUE (p1)-[:IS_POSITION_FOR]->(r)
  CREATE UNIQUE (p2)-[:IS_POSITION_FOR]->(r)
  CREATE UNIQUE (p3)-[:IS_POSITION_FOR]->(r)
  MERGE (cont1:Contractor {email: "robJohnson@gmail.com", name: "Rob Johnson"})
  CREATE UNIQUE (cont1)-[:HAS_POSITION]->(p1)
  MERGE (cont2:Contractor {email: "JeffBezos@gmail.com", name: "Jeff Bezos"})
  CREATE UNIQUE (cont2)-[:HAS_PENDING_POSITION]->(p2)
  MERGE (s1:Skill {name: "Leadership"})
  MERGE (s2:Skill {name: "Teamwork"})
  MERGE (s3:Skill {name: "Communication"})
  MERGE (s4:Skill {name: "Attention to Detail"})
  MERGE (s5:Skill {name: "Fun Loving"})
  MERGE (c1:Certification {name: "Forklift Driver"})
  MERGE (c2:Certification {name: "Welding"})
  MERGE (c3:Certification {name: "Warehouse Safety"})
  MERGE (c4:Certification {name: "First Aid"})
  CREATE UNIQUE (cont1)-[:HAS_CERTIFICATION]->(c1)
  CREATE UNIQUE (cont2)-[:HAS_CERTIFICATION]->(c1)
  CREATE UNIQUE (cont2)-[:HAS_CERTIFICATION]->(c4)
  CREATE UNIQUE (cont1)-[:HAS_SKILL]->(s1)
  CREATE UNIQUE (cont2)-[:HAS_SKILL]->(s2)
  CREATE UNIQUE (cont2)-[:HAS_SKILL]->(s4)
  RETURN c
`
const massDelete = `
  MATCH (n) DETACH DELETE n
`

module.exports = {
  startUpScript,
  massDelete,
}
