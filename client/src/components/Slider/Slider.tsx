import { useState } from 'react'
import { SliderDataType } from '../../types'
import style from './Slider.module.css'

const Slider = ({ data, maxEl, index, setIndex }: SliderDataType) => {
    const [arrow, setArrow] = useState<string>('')

    const handleClick = (direction: string) => {
        if (direction === 'left') {
            setIndex(index > 0 && index - 1)
        } else {
            setIndex(index !== data ? index + 1 : data)
        }
        setArrow(direction)
    }

    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div
                    style={{
                        display: index > 0 ? 'block' : 'none',
                    }}
                >
                    <div
                        onClick={() => handleClick('left')}
                        className={`${style.arrow} ${style.arrowLeft}`}
                        style={{
                            boxShadow:
                                arrow === 'left'
                                    ? '0px 0px 0px 3px rgba(0, 113, 194, 0.24)'
                                    : '0px 2px 8px 0px rgba(0, 0, 0, 0.16)',
                        }}
                    >
                        <svg
                            height="25"
                            width="25"
                            viewBox="0 0 24 24"
                            role="presentation"
                            aria-hidden="true"
                            focusable="false"
                        >
                            <path d="M14.55 18a.74.74 0 0 1-.53-.22l-5-5A1.08 1.08 0 0 1 8.7 12a1.1 1.1 0 0 1 .3-.78l5-5a.75.75 0 0 1 1.06 0 .74.74 0 0 1 0 1.06L10.36 12l4.72 4.72a.74.74 0 0 1 0 1.06.73.73 0 0 1-.53.22zm-4.47-5.72zm0-.57z"></path>
                        </svg>
                    </div>
                </div>
                <div
                    style={{
                        display: data - index > maxEl ? 'block' : 'none',
                    }}
                >
                    <div
                        onClick={() => handleClick('right')}
                        className={`${style.arrow} ${style.arrowRight}`}
                        style={{
                            boxShadow:
                                arrow === 'right'
                                    ? '0px 0px 0px 3px rgba(0, 113, 194, 0.24)'
                                    : '0px 2px 8px 0px rgba(0, 0, 0, 0.16)',
                        }}
                    >
                        <svg
                            height="25"
                            width="25"
                            viewBox="0 0 24 24"
                            role="presentation"
                            aria-hidden="true"
                            focusable="false"
                        >
                            <path d="M9.45 6c.2 0 .39.078.53.22l5 5c.208.206.323.487.32.78a1.1 1.1 0 0 1-.32.78l-5 5a.75.75 0 0 1-1.06 0 .74.74 0 0 1 0-1.06L13.64 12 8.92 7.28a.74.74 0 0 1 0-1.06.73.73 0 0 1 .53-.22zm4.47 5.72zm0 .57z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider
