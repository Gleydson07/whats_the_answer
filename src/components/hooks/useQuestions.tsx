import { useContext, createContext, ReactNode, useState } from "react";

type QuestionsProviderProps = {
    children: ReactNode;
}

interface IQuestionContextProps {
    quantityQuestions: Number;
    quantityQuestionsValue: (value: Number) => void;
}

export const QuestionsContext = createContext({} as IQuestionContextProps);

export const QuestionsProvider = ({children}: QuestionsProviderProps) => {    
    const [quantityQuestions, setQuantityQuestions] = useState<Number>(0);

    function quantityQuestionsValue(value: Number){
        setQuantityQuestions(value)
    }

    return (
        <QuestionsContext.Provider value={{quantityQuestions, quantityQuestionsValue}}>
            {children}
        </QuestionsContext.Provider>
    )
}

export const useQuestions = () => useContext(QuestionsContext);