export const Genere3={
    Difficulty(req,res){
        const diff=req.params.level //using parameters
        console.log("science");
        if(diff=='easy'){
            res.json({1:['Chemical formula of water','H2O','O2','CO2','H2SO4'],
            2:['Chemical formula of oxygen','H20','O2','CO2','H2SO4'],
            3:['Chemical formula of carbondioxide','H2O','O2','CO2','H2SO4'],
            4:['Chemical formula of sulphuric acid','H2O','O2','CO2','H2SO4'],
            5:['Chemical formula of hydrochloric acid','H2O','O2','CO2','HCL'],
            "ans":['H2O','O2','CO2','H2SO4','HCL']})
        }
        if(diff=='medium'){
            res.json({1:['What is the hardest natural substance on Earth','Diamond','Steal','Iron','Graphite'],
            2:['What is the biggest planet in our solar system','Saturn','Jupiter','Uranus','Mercury'],
            3:['How many bones do sharks have','152','206','0','57'],
            4:['What is the rarest blood type in humans','AB-','A+','O-','O+'],
            5:['How many states of matter are there','3','4','5','6'],
            "ans":['Diamond','Jupiter','0','AB-','5']})
        }
        if(diff=='hard'){
            res.json({1:['What kind of small objects composes much of the universe','Atoms','Dark matter','Anti-matter','Monster energy'],
            2:['Give an example of a decapod','Crab','Beetel','Unicorn','Lizard'],
            3:['Whats the shape of the Earth','Flat','Spheroid','Round','Has no shape'],
            4:['Which is a hypothetical string theory weightless particle','Graviton','Earth Worm Jim','Anti-matter','Baryonic Matter'],
            5:['Which of these creatures is real','Xenomorph','Fish in trees','Headcrab','Grunt Helms'],
            "ans":['Dark matter','Crab','Spheroid','Graviton','Fish in trees']})
        }
    }
}
