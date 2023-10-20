type User = {
    firstName: string,
    middleName?: string,
    lastName: string,
    email: string,
    password: string,
    passwordConfirmation: string
}

type Post = {
    body: string,
    upVote: number,
    downVote: number
}

type Comment = {
    userName: string,
    body: string,
    upVote: number,
    downVote: number
}

type Reply = {
    userName: string,
    body: string,
    upVote: number,
    downVote: number
}

type Subject = {
    name: string
}

type SubjectCoverage = {
    name: string
}

type Quiz = {
    difficulty: string,
    score: number
}

type QuizItem = {
    problem: string,
    firstChoice: string,
    secondChoice: string,
    thirdChoice: string,
    fourthChoice: string,
    answer: string
}

type AnswerSheet = {
    score: number
}

type Admin = {
    firstName: string,
    middleName?: string,
    lastName: string,
    email: string,
    password: string,
    passwordConfirmation: string
}

type Topic = {
    name: string,
    discussion: string
}
