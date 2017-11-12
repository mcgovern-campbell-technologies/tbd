const startUpScript = `
  CREATE 
  (s1:Skill {name: "Leadership"}),
  (s2:Skill {name: "Teamwork"}),
  (s3:Skill {name: "Communication"}),
  (s4:Skill {name: "Attention to Detail"}),
  (s5:Skill {name: "Fun Loving"}),
  (c1:Certificaiton {name: "Forklift Driver"}),
  (c2:Certificaiton {name: "Welding"}),
  (c3:Certificaiton {name: "Warehouse Safety"}),
  (c4:Certificaiton {name: "First Aid"})
  RETURN s1
`
const massDelete = `
  MATCH (n) DETACH DELETE n
`

module.exports = {
  startUpScript,
  massDelete,
}