import { getDefaultMcq } from "./templates";
import { Question } from "./types";

// currently only stored local
// TODO refactor to be async
export const apiFetchQuestions = (): Question[] => {
  const questionsStr = localStorage.getItem("assessori_questions");
  if (!questionsStr) {
    localStorage.setItem(
      "assessori_assessment",
      JSON.stringify([getDefaultMcq()]),
    );
    return [getDefaultMcq()];
  }
  return JSON.parse(questionsStr);
};

export const apiPushQuestions = (questions: Question[]) => {
  localStorage.setItem("assessori_questions", JSON.stringify(questions));
};
