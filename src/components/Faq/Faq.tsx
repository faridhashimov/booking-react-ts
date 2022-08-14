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
        if (items.includes(id)) {
            setItems(items.filter((i) => i !== id))
        } else {
            setItems((prev) => [...prev, id])
        }
    }

    return (
        <div className={style.container}>
            <div className={style.faqContainer}>
                <div className={style.faqLeft}>
                    <h3>FAQs about La Quinta by Wyndham Time Square South</h3>
                </div>
                <div className={style.accordeonContainer}>
                    {faq.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => onQuestionSelect(item.id)}
                            className={style.accordeonItem}
                            style={{
                                height: items.includes(item.id)
                                    ? 'max-content'
                                    : '56px',
                            }}
                        >
                            <div className={style.accQuestion}>
                                <h3>{item.question}</h3>
                                <div className={style.chevronContainer}>
                                    {items.includes(item.id) ? (
                                        <FiChevronDown />
                                    ) : (
                                        <FiChevronUp />
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
    )
}

export default Faq
