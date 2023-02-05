import React, {useState} from 'react';
import s from "./Paginator.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight,faChevronLeft} from "@fortawesome/free-solid-svg-icons";


type PaginatorPropsType = {
    pageSize: number,
    totalItemsCount: number,
    portionSize: number,
    currentPage: number,
    onPageSelected: (pageNumber: number) => void,
}

export const Paginator = (props: PaginatorPropsType) => {

    const countPages: number = Math.ceil(props.totalItemsCount / props.pageSize)
    let pagesArray: Array<number> = []
    for (let i = 1; i <= countPages; i++) {
        pagesArray.push(i)
    }

    let [portionNumber, setPortionNumber] = useState(1);
    let portionsCount = Math.ceil(countPages / props.portionSize);
    let leftEdge = (portionNumber - 1) * props.portionSize + 1;
    let rightEdge = portionNumber * props.portionSize;

    return (
        <div>
            {portionNumber > 1 &&
                <FontAwesomeIcon icon={faChevronLeft} onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }} />}
            <ul className={s.paginator}>
                {pagesArray
                    .filter(p => p >= leftEdge && p <= rightEdge)
                    .map(p =>
                        <li key={p} onClick={(e) => props.onPageSelected(p)}
                            className={props.currentPage === p ? s.selectedPage : s.page}>{p}</li>
                    )}
            </ul>
            {portionsCount > portionNumber &&
            <FontAwesomeIcon icon={faChevronRight} onClick={() => {
                setPortionNumber(portionNumber + 1)
            }} />}
        </div>
    );
};
