import { Container } from "@material-ui/core";
import { FormQuestion } from "../components/FormQuestion";
import { Header } from "../components/Header";
import { useQuestions } from "../components/hooks/useQuestions";

export function Dashboard(){
    const {loadedQuestions} = useQuestions();
    return (
            <Container>
                <Header/>
                {loadedQuestions.map(question => (
                    <FormQuestion quiz={question}/>
                ))

                }
            </Container>
    )
}