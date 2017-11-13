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
  (c4:Certification {name: "First Aid"})
  RETURN s1
`
const massDelete = `
  MATCH (n) DETACH DELETE n
`

module.exports = {
  startUpScript,
  massDelete,
}