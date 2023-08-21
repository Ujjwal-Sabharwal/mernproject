import express from "express"
import { Genere1 } from "../modules/quizgener/Genere1.js";
import { Genere2 } from "../modules/quizgener/Genere2.js";
import { Genere3 } from "../modules/quizgener/Genere3.js";
import { Genere4 } from "../modules/quizgener/Genere4.js";
export const QuizRoutes=express.Router() // creating routes
QuizRoutes.get('/quiz/popculture/:level',Genere1.Difficulty);  //using callback
QuizRoutes.get('/quiz/currentaffairs/:level',Genere2.Difficulty);  //using callback
QuizRoutes.get('/quiz/science/:level',Genere3.Difficulty);  //using callback
QuizRoutes.get('/quiz/technology/:level',Genere4.Difficulty);  //using callback
