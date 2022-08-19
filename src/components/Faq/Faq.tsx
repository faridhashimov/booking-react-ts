import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { IFaq } from '../../types'
import style from './Faq.module.css'

interface IFaqProps {
    faq: Array<IFaq>
}

const Faq = ({ faq }: IFaqProps) => {
    const [items, setItems] = useState<number[]>([])
    const onQuestionSelect = (id: number) => {
        if (window.innerWidth < 500) {
            return
        }
        if (items.includes(id)) {
            setItems(items.filter((i) => i !== id))
        } else {
            setItems((prev) => [...prev, id])
        }
    }

    console.log(window.innerWidth)

    return (
        <div className={style.container}>
            <div className={style.faqContainer}>
                <div className={style.faqLeft}>
                    <h3>FAQs about La Quinta by Wyndham Time Square South</h3>
                </div>
                <div className={style.accordeonWrapper}>
                    <div className={style.accordeonContainer}>
                        {faq.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => onQuestionSelect(item.id)}
                                className={
                                    items.includes(item.id)
                                        ? `${style.maxContent}`
                                        : `${style.accordeonItem}`
                                }
                            >
                                <div className={style.accQuestion}>
                                    <h3>{item.question}</h3>
                                    <div className={style.chevronContainer}>
                                        {items.includes(item.id) ? (
                                            <FiChevronUp />
                                        ) : (
                                            <FiChevronDown />
                                        )}
                                    </div>
                                </div>
                                <div className={style.accAnswer}>
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq
