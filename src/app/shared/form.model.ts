import { Question } from './question.model';

export class Form {
    id: number;
    title: string;
    description: string;
    questions: Question[] = [];
    user_id: number;
    enable: boolean;
    primary_color: string;
    slug: string;

    constructor(formInfo: any) {
        this.id = formInfo.id;
        this.title = formInfo.title;
        this.description = formInfo.description;
        this.user_id = formInfo.user_id;
        this.enable = formInfo.enable;
        this.primary_color = formInfo.primary_color;
        this.slug = formInfo.slug;

        this.includeQuestions(formInfo.questions);
    }

    private includeQuestions(questions: any) {
        for (const count in questions) {
            let question = new Question(questions[count]);
            (question.position == null ? question.position = parseInt(count) : '')
            this.questions.push( question );
        }
    }
}
