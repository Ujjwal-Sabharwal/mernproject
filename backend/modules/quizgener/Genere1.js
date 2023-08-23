export const Genere1={
    Difficulty(req,res){
        const diff=req.params.level //using parameters
        console.log("popculture");
        if(diff=='easy'){
            res.json({1:['Which Indian music composer, known for his work in Bollywood films, has won multiple Academy Awards and is popularly referred to as the "Mozart of Madras"?','A R Rehman','M M Keeravani','Mani Sharma','Devi Sri Prasad'],
            2:['Which dance form, originating in the state of Punjab, is known for its energetic and lively movements often performed during celebrations?','Bhangra','Kathak','Bhratnatyam','Kathakkali'],
            3:['Who is often referred to as the "Father of the Indian Film Industry"?','Kishore Kumar','Dadasaheb falke','Amitabh Bachhan','Dev Anand'],
            4:['Who is often referred to as the "King of Bollywood" and has appeared in over 80 Hindi films in a career spanning several decades?','Salman Khan','Amir Khan','Akshay Kumar','Sharukh khan'],
            5:['Who holds the record for winning the most oscars','Walt Disney','Leonardo Di Caprio','Matthew McConaughey','RDJ'],
            'ans':['A R Rehman','Bhangra','Dadasaheb falke','Sharukh khan','Walt Disney']
        })
        }
        if(diff=='medium'){
            res.json({1:['How many years passed between the making of avatar and avatar way of water','10 Years','12 Years','13 Years','15 Years'],
            2:['what artisit did rema collabed with to make the song calm down','Selena Gomez','Taylor Swift','Billie Eilish','Cardi B'],
            3:['which actor played bruce wayne in the latest batman','Christian Bale','Brad Pitt','Robert Pattison','Ben Affleck'],
            4:['what animal is indiana jhones afraid of','Lions','Snakes','Elephant','Tiger'],
            5:['who played as the protagonist in the successful movie series creed','Will Smith','Micheal B Jordan','Jackie Chan','Arnold Schwarzenegger'],
            'ans':['13 Years','Selena Gomez','Robert Pattison','Snakes','Micheal B Jordan']
        })
        }
        if(diff=='hard'){
            res.json({1:['Who is the famous director behind films like Inception,The Dark Knight,and Interstellar?','James Gunn','Zack Synder','John Favro','Christopher Nolan'],
            2:['Which aactress from the famous web series Stranger Things got married ','Sadie Sink','Maya Hawke','Millie Bobby Brown','Natalia Dyer'],
            3:['Who won theBIGG BOSS Ott S2','Bebika ','Manisha','Elvish','Abhishek'],
            4:['What is the title of the book series by Suzanne Collins that was adapted into a popular film series set in a dystopian future, featuring a character named Katniss Everdeen?','The Hunger Games','Game of Thrones','Harry Potter ','Half Grilfriend'],
            5:['In the TV show "Friends," what is the name of Ross and Monicas pet dog when they were kids?','Tuffy','Jhonny','Buzzo','Chi-Chi'],
            'ans':['Christopher Nolan','Millie Bobby Brown','Elvish','The Hunger Games','Chi-Chi']
        })
        }
    }
}
