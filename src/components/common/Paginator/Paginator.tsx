import React, {useState} from "react";
import styles from "./Paginator.module.css"


type paginatorType = {
    pageSize: number
    currentPage: number
    totalItemsCount: number
    onPageChanged: (p: number) => void
    portionSize?: number
    // setCurrentPage:Function
}


export const Paginator = ({pageSize, currentPage, totalItemsCount, onPageChanged, portionSize = 10}: paginatorType) => {

    let pageCount = Math.ceil(totalItemsCount / pageSize);
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    //ниже получили сколбко всего будет страниц, так как задали размер одной страницы 10 users
    let portionCount = Math.ceil(pageCount / portionSize)

    let [portionNumber, setPortionNumber] = useState<number>(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize
    console.log(portionCount)
    // console.log(portionNumber)
    return (
        <div>{portionNumber > 1 && <button className={styles.myButton} onClick={() => setPortionNumber(portionNumber - 1)}>prev</button>}
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <span
                        className={currentPage === p ? styles.selectPage : styles.pages }
                        onClick={(e) => {
                            onPageChanged(p)
                        }}
                        key={p}>
                    {p}</span>
                })
            }
            {portionCount > portionNumber && <button className={styles.myButton} onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>}

        </div>
    )
}