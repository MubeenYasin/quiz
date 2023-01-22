import { type } from "os";

export type TQuestion = {
    question: string ;
    correct_answer?: string ;
    incorrect_answers?: string[] ;
}

export type TUsers = {
    login: string;
    id: number;
    avatar_url: string;
}