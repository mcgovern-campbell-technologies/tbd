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
  MERGE (c:Company {name: 'kuka', created_at: '${new Date()}'})
  MERGE (l1:Location {name: 'Sterling Heights', created_at: '${new Date()}'})
  MERGE (l2:Location {name: 'Clinton Township', created_at: '${new Date()}'})
  MERGE (l3:Location {name: 'Manufacturing Center', created_at: '${new Date()}'})
  MERGE (l4:Location {name: 'Tank Plant', created_at: '${new Date()}'})
  MERGE (l5:Location {name: 'Warren Plant', created_at: '${new Date()}'})
  MERGE (l6:Location {name: 'NW', created_at: '${new Date()}'})
  MERGE (l7:Location {name: 'Palmdale', created_at: '${new Date()}'})
  MERGE (l8:Location {name: 'Metro Park', created_at: '${new Date()}'})
  CREATE UNIQUE (c)-[:HAS_LOCATION]->(l1)
  CREATE UNIQUE (c)-[:HAS_LOCATION]->(l2)
  CREATE UNIQUE (c)-[:HAS_LOCATION]->(l3)
  CREATE UNIQUE (c)-[:HAS_LOCATION]->(l4)
  CREATE UNIQUE (c)-[:HAS_LOCATION]->(l5)
  CREATE UNIQUE (c)-[:HAS_LOCATION]->(l6)
  CREATE UNIQUE (c)-[:HAS_LOCATION]->(l7)
  CREATE UNIQUE (c)-[:HAS_LOCATION]->(l8)
  MERGE (pr:Project {name: 'A sample project', created_at: '${new Date()}'})
  CREATE UNIQUE (l8)-[:HAS_PROJECT]->(pr)
  MERGE (te:Team {name: 'Sparky Team', created_at: '${new Date()}'})
  CREATE UNIQUE (te)-[:TEAM_FOR]->(pr)
  MERGE (r:Role {name: 'Electrician 1', days: 'm,tu,w', starttime: '09:00am', endtime: '05:00pm', rate: '$22/hr', created_at: '${new Date()}'})
  CREATE UNIQUE (te)-[:HAS_ROLE]->(r)
  MERGE (sk1:SkillLevel {name: 'One'})
  MERGE (sk2:SkillLevel {name: 'Two'})
  CREATE UNIQUE (r)-[:HAS_SKILL_LEVEL]->(sk1)
  CREATE UNIQUE (r)-[:HAS_SKILL_LEVEL]->(sk2)
  MERGE (tr:Trade {name: 'Electrician'})
  CREATE UNIQUE (sk1)-[:HAS_TRADE]->(tr)
  CREATE UNIQUE (sk2)-[:HAS_TRADE]->(tr)
  MERGE (p1:Position {name: 'Electrician position', status: 'filled', created_at: '${new Date()}'})
  MERGE (p2:Position {name: 'Electrician position', status: 'pending', created_at: '${new Date()}'})
  MERGE (p3:Position {name: 'Electrician position', status: 'unfilled', created_at: '${new Date()}'})
  CREATE UNIQUE (p1)-[:IS_POSITION_FOR]->(r)
  CREATE UNIQUE (p2)-[:IS_POSITION_FOR]->(r)
  CREATE UNIQUE (p3)-[:IS_POSITION_FOR]->(r)
  MERGE (cont1:Contractor {email: "robJohnson@gmail.com", name: "Rob Johnson", created_at: '${new Date()}'})
  CREATE UNIQUE (cont1)-[:HAS_POSITION]->(p1)
  MERGE (cont2:Contractor {email: "JeffBezos@gmail.com", name: "Jeff Bezos", created_at: '${new Date()}'})
  CREATE UNIQUE (cont2)-[:HAS_PENDING_POSITION]->(p2)
  MERGE (s1:Skill {name: "Leadership", created_at: '${new Date()}'})
  MERGE (s2:Skill {name: "Teamwork", created_at: '${new Date()}'})
  MERGE (s3:Skill {name: "Communication", created_at: '${new Date()}'})
  MERGE (s4:Skill {name: "Attention to Detail", created_at: '${new Date()}'})
  MERGE (s5:Skill {name: "Fun Loving", created_at: '${new Date()}'})
  MERGE (c1:Certification {name: "Forklift Driver", created_at: '${new Date()}'})
  MERGE (c2:Certification {name: "Welding", created_at: '${new Date()}'})
  MERGE (c3:Certification {name: "Warehouse Safety", created_at: '${new Date()}'})
  MERGE (c4:Certification {name: "First Aid", created_at: '${new Date()}'})
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
