export const Genere4={
    Difficulty(req,res){
        const diff=req.params.level //using parameters
        console.log("technology");
        if(diff=='easy'){
            res.json({1:"q1",2:"q2",3:"q3",4:"q4",5:"q5",6:"q6",7:"q7",8:"q8",9:"q9",10:"q10"})
        }
        if(diff=='medium'){
            res.json({1:"q11",2:"q12",3:"q13",4:"q14",5:"q15",6:"q16",7:"q17",8:"q18",9:"q19",10:"q20"})
        }
        if(diff=='hard'){
            res.json({1:"q21",2:"q22",3:"q23",4:"q24",5:"q25",6:"q26",7:"q27",8:"q28",9:"q29",10:"q30"})
        }
    }
}
