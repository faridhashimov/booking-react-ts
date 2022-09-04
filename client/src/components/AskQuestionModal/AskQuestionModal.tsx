import React, { useEffect } from 'react'
import style from './AskQuestionModal.module.css'

const AskQuestionModal: React.FC<{
    modal: boolean
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ modal, setModal }): JSX.Element => {
    const onQuestionSend = (e: React.FormEvent) => {
        e.preventDefault()
    }

    useEffect(() => {
        document.body.style.overflowY = 'hidden'

        return () => {
            document.body.style.overflowY = 'scroll'
        }
    }, [])

    return (
        <div className={style.modalBackground}>
            <div className={style.modalContainer}>
                <div className={style.modalWrapper}>
                    <div className={style.modal}>
                        <div className={style.modalHeader}>
                            <div className={style.modalTitle}>
                                <h3>
                                    Didn't find your answer? Ask a question
                                    about the property
                                </h3>
                            </div>
                            <div
                                onClick={() => setModal(false)}
                                className={style.iconContainer}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    role="presentation"
                                >
                                    <path d="M13 12l6.26-6.26a.73.73 0 0 0-1-1L12 11 5.74 4.71a.73.73 0 1 0-1 1L11 12l-6.29 6.26a.73.73 0 0 0 .52 1.24.73.73 0 0 0 .51-.21L12 13l6.26 6.26a.74.74 0 0 0 1 0 .74.74 0 0 0 0-1z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className={style.modalBody}>
                            <form
                                onSubmit={onQuestionSend}
                                className={style.inputCOntainer}
                            >
                                <label htmlFor="question">
                                    Type your question here:
                                </label>
                                <textarea
                                    name="question"
                                    id="question"
                                    cols={72}
                                    rows={5}
                                    placeholder="e.g. do you offer room service?"
                                ></textarea>
                                <span>300 characters left</span>
                                <button
                                    className={style.questionSubmitBtn}
                                    type="submit"
                                >
                                    Submit your question
                                </button>
                            </form>
                        </div>
                        <div className={style.modalFooter}>
                            Your question will be published on Booking.com after
                            it's approved and answered.
                            <span>Click here to read post guidelines.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AskQuestionModal
