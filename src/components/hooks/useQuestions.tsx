import { useContext, createContext, ReactNode, useState } from "react";
import axios from "axios";

type QuestionsProviderProps = {
    children: ReactNode;
}

type Question = {
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
}

type Questions = {
    results: Question[]
}

interface IQuestionContextProps {
    quantityQuestions: number;
    loadedQuestions: Question[];
    getQuantityQuestions: (value: number) => void;
    loadingQuestions: () => void;
}

export const QuestionsContext = createContext({} as IQuestionContextProps);

export const QuestionsProvider = ({children}: QuestionsProviderProps) => {    
    const [quantityQuestions, setQuantityQuestions] = useState<number>(0);
    const [loadedQuestions, setLoadedQuestions] = useState<Question[]>({} as Question[]);

    async function loadingQuestions(){
        try {
            const {results} = await axios.get<Questions>(`https://opentdb.com/api.php?amount=${quantityQuestions}`)
            .then(response => response.data);

            setLoadedQuestions(results);
        } catch (error) {
            
        }

    }

    function getQuantityQuestions(value: number){
        setQuantityQuestions(value)
    }

    return (
        <QuestionsContext.Provider value={{
            quantityQuestions, 
            loadedQuestions,
            getQuantityQuestions, 
            loadingQuestions
        }}>
            {children}
        </QuestionsContext.Provider>
    )
}

export const useQuestions = () => useContext(QuestionsContext);