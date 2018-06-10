const startUpScript = `
  CREATE
  (cont:Contractor {email: "robJohnson@gmail.com", name: "Rob Johnson"}),
  (s1:Skill {name: "Leadership"}),
  (s2:Skill {name: "Teamwork"}),
  (s3:Skill {name: "Communication"}),
  (s4:Skill {name: "Attention to Detail"}),
  (s5:Skill {name: "Fun Loving"}),
  (c1:Certification {name: "Forklift Driver"}),
  (c2:Certification {name: "Welding"}),
  (c3:Certification {name: "Warehouse Safety"}),
  (c4:Certification {name: "First Aid"}),
  (p:Project {name: "Deathstar"}),
  (l:Location {name: "Alderaan"})
  RETURN s1
`
const massDelete = `
  MATCH (n) DETACH DELETE n
`

module.exports = {
  startUpScript,
  massDelete,
}

// MERGE (c:Company {name: 'kuka'})
// MERGE (l1:Location {name: 'Sterling Heights'})
// MERGE (l2:Location {name: 'Clinton Township'})
// MERGE (l3:Location {name: 'Manufacturing Center'})
// MERGE (l4:Location {name: 'Tank Plant'})
// MERGE (l5:Location {name: 'Warren Plant'})
// MERGE (l6:Location {name: 'NW'})
// MERGE (l7:Location {name: 'Palmdale'})
// MERGE (l8:Location {name: 'Metro Park'})
// CREATE UNIQUE (c)-[:HAS_LOCATION]->(l1)
// CREATE UNIQUE (c)-[:HAS_LOCATION]->(l2)
// CREATE UNIQUE (c)-[:HAS_LOCATION]->(l3)
// CREATE UNIQUE (c)-[:HAS_LOCATION]->(l4)
// CREATE UNIQUE (c)-[:HAS_LOCATION]->(l5)
// CREATE UNIQUE (c)-[:HAS_LOCATION]->(l6)
// CREATE UNIQUE (c)-[:HAS_LOCATION]->(l7)
// CREATE UNIQUE (c)-[:HAS_LOCATION]->(l8)
// MERGE (tr:Trade {name: 'Electrician'})
// MERGE (lev1:PositionLevel { value: 1, label: 'one', abreviation: 'I'})
// MERGE (lev2:PositionLevel { value: 2, label: 'two', abreviation: 'II'})
// MERGE (lev3:PositionLevel { value: 3, label: 'specialist', abreviation: 'spec'})
// MERGE (lev4:PositionLevel { value: 4, label: 'general labor', abreviation: 'gen'})
// CREATE UNIQUE (tr)-[:HAS_LEVEL]-(lev1)
// CREATE UNIQUE (tr)-[:HAS_LEVEL]-(lev2)
// CREATE UNIQUE (tr)-[:HAS_LEVEL]-(lev3)
// CREATE UNIQUE (tr)-[:HAS_LEVEL]-(lev4)
// RETURN c
