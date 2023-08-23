export const Genere4={
    Difficulty(req,res){
        const diff=req.params.level //using parameters
        console.log("technology");
        if(diff=='easy'){
            res.json({1:['In which decade was the American Institute of Electrical Engineers (AIEE) founded','1850','1880','1930','1950'],
            2:['What is part of a database that holds only one type of information','Report','Field','Record','File'],
            3:['OS computer abbreviation usually means','Order of Significance','Open Software','Operating System','Optical Sensor'],
            4:['In which decade with the first transatlantic radio broadcast occur','1850','1860','1870','1900'],
            5:['MOV extension refers usually to what kind of file','Image file','Animation/movie file','Audio file','MS Office document'],
            "ans":['1880','Field','Operating System','1900','Animation/movie file']})
        }
        if(diff=='medium'){
            res.json({1:['Blue is what number on the resistor color code','1','4','2','6'],
            2:['Changing computer language of 1s and 0s to characters that a person can understand is...','Highlight','Clip art','Decode','Execute'],
            3:['Whats a web browser?','A kind of spider','A computer that stores WWW files','A person who likes to look at websites','A software program that allows you to access sites on the WWW'],
            4:['How many bits is a byte','2','4','8','16'],
            5:['http://www.indiabix.com - is an example of what','URL','Access code','A directory','A server'],
            "ans":['6','Decode','A software program that allows you to access sites on the WWW','8','URL']})
        }
        if(diff=='hard'){
            res.json({1:['Which company created the most used networking software in the 1980s','Microsoft','Sun','IBM','Novell'],
            2:['Which of the following operating systems is produced by IBM','OS-2','Windows','DOS','UNIX'],
            3:['Which of the following is NOT a type of expansion slot or bus design used in Advanced-Technology class systems','PCMCIA','ISA','PROM','EISA'],
            4:['What is a GPU','Grouped Processing Unit','Graphics Processing Unit','Graphical Performance Utility','Graphical Portable Unit'],
            5:['Which one of the following is a search engine','Macromedia Flash','Google','Netscape','Librarians Index to the Internet'],
            "ans":['Novell','OS-2','PROM','Graphics Processing Unit','Google']})
        }
    }
}
