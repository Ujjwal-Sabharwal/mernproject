import express from "express"
import { Genere1 } from "../modules/quizgener/Genere1.js";
import { Genere2 } from "../modules/quizgener/Genere2.js";
import { Genere3 } from "../modules/quizgener/Genere3.js";
import { Genere4 } from "../modules/quizgener/Genere4.js";
export const QuizRoutes=express.Router() // creating routes
QuizRoutes.get('/G1/:level',Genere1.Difficulty);  //using callback
QuizRoutes.get('/G2/:level',Genere2.Difficulty);  //using callback
QuizRoutes.get('/G3/:level',Genere3.Difficulty);  //using callback
QuizRoutes.get('/G4/:level',Genere4.Difficulty);  //using callback