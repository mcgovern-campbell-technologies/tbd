
//this is the employee fetch query
MATCH (c:Contractor {/*employee details*/})
RETURN c

//get all employee skills 
MATCH (c:Contractor {/*employee details*/})-[:HAS_SKILL]->(s:SkillInstance)
RETURN s

//geting employee certifications
MATCH (c:Contractor {/*employee details*/})-[:HAS_CERTIFICATION]->(cert:CertificationInstance)
RETURN cert

//getting employee transactions
MATCH (c:Contractor {/*employee details*/})-[:FULFILLS_TRANSACTION]->(t:TransactionInstance)
RETURN t

//getting orders an employee is part of
MATCH (c:Contractor {/*employee details*/})-[:FULFILLS_TRANSACTION]->(t:Transaction),
(t)-[:PART_OF]->(o:Order)
RETURN o

//getting the skills and certifications required for an order
MATCH (c:Contractor {/*employee details*/})-[:FULFILLS_TRANSACTION]->(t:Transaction),
(t)-[:PART_OF]->(o:Order),
(o)-[:REQUIRES_SKILL]->(s:Skill),
(o)-[:REQUIRES_CERTIFICATION]->(cert:Certification)
RETURN s, cert

MATCH (o:Order) WHERE ID(o) = idNumber,
(o)-[:REQUIRES_SKILL]->(skill:Skill),
(o)-[:REQUIRES_CERTIFICATION]->(cert:Certification)
RETURN skill, cert

//matching an employees skill set to an orders skill set
MATCH 
//grab the contractor and their skill instances
(c:Contractor {/*employee details*/})-[:HAS_SKILL]->(si:SkillInstance),
//from the skill instance collection we find the root skill and collect the names in contractor names
(si)-[:INSTANCE_OF]->(s1) WITH collect(s1.name) AS contractorSkills,
//now we collect all of the orders inside orderskills
(o:Order)-[:REQUIRES_SKILL]->(s2) WITH collect(s2.name) AS orderSkills,
//take take only orderskills that have each of the skill names exists inside the contractor skills
orderSkills WHERE ALL(skill IN orderSkills WHERE skill IN contractorSkills)
//return the the orders that fill this criteria
RETURN o

//matching an orders requirements to employees
MATCH
//grab the order that you want
(order:Order) WHERE ID(order) = index,
//collect the order skill list
(order)-[:REQUIRES_SKILL]->(orderSkill:Skill) WITH collect(orderSkill.name) AS orderSkillList,
//collect the order certification list
(order)-[:REQUIRES_CERTIFICATION]->(orderCert:Certification) WITH collect(orderCert.name) AS orderCertList,
//take the contractor and get their certification instances
(c:Contractor)-[:HAS_CERTIFICATION]->(certInstance:CertificationInstance),
//take the cert instance, find the parent cert
(certInstance)-[:INSTANCE_OF]->(contractorCert:Certification) WITH collect(contractorCert.name) AS contractorCertList
//determine that the order certs are in the contractor cert list
WHERE ALL(cert IN orderCertList WHERE cert IN contractorCertList),
//find the contractors skill instances
(c)-[:HAS_SKILL]->(skillInstance:SkillInstance),
//take the skill instance, find the skill, compile the list
(skillInstance)-[:INSTANCE_OF]->(contractorSkill:Skill) WITH collect(contractorSkill.name) AS contractorSkillList
//determin that the skills in the orderskilllist exist in the contractor skill list
WHERE ALL(skill IN orderSkillList WHERE skill IN contractorSkillList),
return c








