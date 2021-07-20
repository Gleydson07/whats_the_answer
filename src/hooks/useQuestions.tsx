import { useEffect } from "react";
import { useContext, createContext, ReactNode, useState } from "react";
import { api } from "../services/axios";

type QuestionsProviderProps = {
    children: ReactNode;
}

type Quiz = {
    questions: Question[],
    corrects: number,
    totalQuestions: number,
}

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
    answers: string[],
    answer_selected_for_user: string;
}

interface IQuestionContextProps {
    quantityQuestions: number;
    oneQuestion: Question;
    answerSelected: String;
    quiz: Quiz,
    loadingQuantityQuestions: (value: number) => void;
    loadingUserAnswer: (value: String) => void;
    loadingQuestions: () => void;
    checkAnswer: (value: string) => boolean;
    getQuestion: (value?: number) => void;
    setDataQuiz: (value: Quiz) => void;
    resetQuiz: () => void;
}

const initialQuizProps  = {
    questions: [] as Question[],
    corrects: 0,
    totalQuestions: 0
}

export const QuestionsContext = createContext({} as IQuestionContextProps);

export const QuestionsProvider = ({children}: QuestionsProviderProps) => {    
    const [quantityQuestions, setQuantityQuestions] = useState<number>(0);
    const [loadedQuestions, setLoadedQuestions] = useState<Question[]>([] as Question[]);
    const [oneQuestion, setOneQuestion] = useState<Question>({} as Question);    
    const [answerSelected, setAnswerSelected] = useState<String>('');
    const [quiz, setQuiz] = useState<Quiz>(initialQuizProps);

    useEffect(() => {
        quiz.totalQuestions && localStorage.setItem("whatstheanswer@quiz", JSON.stringify(quiz));
    }, [quiz])

    function resetQuiz(){
        setQuiz(initialQuizProps);
    }

    function setDataQuiz(quiz: Quiz){
        setQuiz(quiz);
    }

    function checkAnswer(userResponse: string){
        const result = userResponse === oneQuestion.correct_answer;
        let correct = 0;

        if(result){
            correct = 1;
        }
        
        setQuiz({
            questions: [...quiz.questions, {...oneQuestion, answer_selected_for_user: userResponse}],
            corrects: quiz.corrects+=correct,
            totalQuestions: quantityQuestions
        })

        return result;
    }

    function loadingUserAnswer(value: String){
        setAnswerSelected(value); 
    }

    function getQuestion(next?: number){
        if(loadedQuestions) {
            if(!next){
                setOneQuestion(loadedQuestions[0]);
            }else if(next !== quantityQuestions){
                setOneQuestion(loadedQuestions[next]);
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
        
        setLoadedQuestions(data)

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
            getQuestion,
            setDataQuiz,
            resetQuiz,
            quiz
        }}>
            {children}
        </QuestionsContext.Provider>
    )
}

export const useQuestions = () => useContext(QuestionsContext);