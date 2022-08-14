import { format, parseISO } from 'date-fns'
import { useState } from 'react'
import { questions } from '../../data'
import Portal from '../../Portal'
import AskQuestionModal from '../AskQuestionModal/AskQuestionModal'
import Slider from '../Slider/Slider'
import style from './Questions.module.css'

const Questions = () => {
    const [index, setIndex] = useState<number>(0)
    const [modal, setModal] = useState<boolean>(false)

    return (
        <>
            <div className={style.mainWrapper}>
                <div className={style.questionsMainWrapper}>
                    <Slider
                        data={5}
                        maxEl={3}
                        index={index}
                        setIndex={setIndex}
                    />
                    <div className={style.questions}>
                        <div
                            style={{
                                transform: `translateX(${-370 * index}px)`,
                            }}
                            className={style.questionsWrapper}
                        >
                            {questions.map((q) => (
                                <div key={q.id} className={style.questionCard}>
                                    <div className={style.questionInfo}>
                                        <div className={style.question}>
                                            <div
                                                className={style.iconContainer}
                                            >
                                                <svg
                                                    height="24"
                                                    width="24"
                                                    viewBox="0 0 24 24"
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    focusable="false"
                                                >
                                                    <path d="M14.25 3.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm1.5 0a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0zM18 13.5a6 6 0 0 0-12 0v2.25c0 .414.336.75.75.75H9l-.746-.675.75 7.5A.75.75 0 0 0 9.75 24h4.5a.75.75 0 0 0 .746-.675l.75-7.5L15 16.5h2.25a.75.75 0 0 0 .75-.75V13.5zm-1.5 0v2.25l.75-.75H15a.75.75 0 0 0-.746.675l-.75 7.5.746-.675h-4.5l.746.675-.75-7.5A.75.75 0 0 0 9 15H6.75l.75.75V13.5a4.5 4.5 0 1 1 9 0z"></path>
                                                </svg>
                                            </div>
                                            <p>{q.question}</p>
                                        </div>
                                        <div className={style.answer}>
                                            <div
                                                className={style.iconContainer}
                                            >
                                                <svg
                                                    height="24"
                                                    width="24"
                                                    viewBox="0 0 24 24"
                                                    role="presentation"
                                                    aria-hidden="true"
                                                    focusable="false"
                                                >
                                                    <path d="M24 13.5a6 6 0 0 0-6-6h-3a6 6 0 0 0 0 12h.75l-.53-.22 4.5 4.5a.75.75 0 0 0 1.28-.53v-5.024l-.43.678A5.989 5.989 0 0 0 24 13.502zm-1.5-.002a4.489 4.489 0 0 1-2.57 4.05.75.75 0 0 0-.43.678v5.024l1.28-.53-4.5-4.5a.75.75 0 0 0-.53-.22H15a4.5 4.5 0 1 1 0-9h3a4.5 4.5 0 0 1 4.5 4.5zM6.22 12.22l-3 3 1.28.53v-5.024a.75.75 0 0 0-.43-.678A4.489 4.489 0 0 1 5.998 1.5H9a4.502 4.502 0 0 1 4.313 3.214.75.75 0 0 0 1.438-.428A6.002 6.002 0 0 0 9 0H6a5.988 5.988 0 0 0-2.57 11.404L3 10.726v5.024a.75.75 0 0 0 1.28.53l3-3a.75.75 0 1 0-1.06-1.06z"></path>
                                                </svg>
                                            </div>
                                            <p>
                                                {q.answer.length > 100
                                                    ? `${q.answer.slice(
                                                          0,
                                                          125
                                                      )}...`
                                                    : q.answer}
                                                <button
                                                    className={
                                                        style.readmoreBtn
                                                    }
                                                >
                                                    Read more
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                    <div className={style.answeredOn}>
                                        Answered on
                                        {format(
                                            parseISO(q.createdAt),
                                            'MMMM d, y'
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={style.questionBtnGroup}>
                    <button onClick={() => setModal(true)}>
                        Ask a question
                    </button>
                    <button>See more questions (15)</button>
                </div>
            </div>
            {modal && (
                <Portal>
                    <AskQuestionModal modal={modal} setModal={setModal} />
                </Portal>
            )}
        </>
    )
}

export default Questions
