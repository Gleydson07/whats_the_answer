import { useContext, createContext, ReactNode, useState, useEffect } from "react";
import { api } from "../../services/axios";

type QuestionsProviderProps = {
    children: ReactNode;
}

// type currentQuiz = {
//     questions: Question[],
//     current: number,
//     corrects: number,
//     incorrects: number,
//     next: number,
//     totalQuestions: number,
// }

type Questions = {
    results: Question[];
}

type Question = {
    id: number,
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
    answers: string[]
}

interface IQuestionContextProps {
    quantityQuestions: number;
    oneQuestion: Question;
    answerSelected: String;
    loadingQuantityQuestions: (value: number) => void;
    loadingUserAnswer: (value: String) => void;
    loadingQuestions: () => void;
    checkAnswer: (value: String) => boolean;
    getQuestion: (value?: number) => void;
}

export const QuestionsContext = createContext({} as IQuestionContextProps);

export const QuestionsProvider = ({children}: QuestionsProviderProps) => {    
    const [quantityQuestions, setQuantityQuestions] = useState<number>(0);
    const [loadedQuestions, setLoadedQuestions] = useState<Question[]>([] as Question[]);
    const [oneQuestion, setOneQuestion] = useState<Question>({} as Question);    
    const [answerSelected, setAnswerSelected] = useState<String>('');

    function checkAnswer(userResponse: String){
        return userResponse === oneQuestion?.correct_answer;
    }

    function loadingUserAnswer(value: String){
        setAnswerSelected(value);
    }

    function getQuestion(next?: number){
        if(loadedQuestions) {
            if(!next){
                setOneQuestion(loadedQuestions[0]);
            }else{
                if(next !== quantityQuestions){
                    setOneQuestion(loadedQuestions[next]);
                }else{
                    console.log('quiz finished')
                }
            }
        }
    }

    async function loadingQuestions(){
        const results = await api.get<Questions>(`?amount=${quantityQuestions}`)
        .then(response => response.data)
        .then(data => data.results);
        
        const data = results.map((item, index) => ({
                ...item, 
                id: index, 
                answers: shuffle([item.correct_answer, ...item.incorrect_answers])
        }))
        
        setLoadedQuestions([...data])

        setOneQuestion({
            ...results[0], 
            id: 0, 
            answers: shuffle([results[0].correct_answer, ...results[0].incorrect_answers])
        })
    }

    function loadingQuantityQuestions(value: number){
        setQuantityQuestions(value);
    }

    function shuffle(array: Array<any>) {
        let copy = [];
        let n = array.length; 
        let i = 0;
      
        while(n) {  
          i = Math.floor(Math.random() * array.length);  
          if (i in array) {
            copy.push(array[i]);
            delete array[i];
            n--;
          }
        }  
        return copy;
    }

    return (
        <QuestionsContext.Provider value={{
            quantityQuestions,
            oneQuestion,
            loadingQuantityQuestions,
            answerSelected,
            loadingUserAnswer,
            loadingQuestions,
            checkAnswer,
            getQuestion
        }}>
            {children}
        </QuestionsContext.Provider>
    )
}

export const useQuestions = () => useContext(QuestionsContext);