import React, {useState} from 'react';
import s from "./Paginator.module.css";

type PaginatorPropsType = {
    pageSize: number,
    totalItemsCount: number,
    portionSize: number,
    currentPage:number,
    onPageSelected: (pageNumber: number) => void,
}

export const Paginator = (props: PaginatorPropsType) => {

    const countPages: number = Math.ceil(props.totalItemsCount / props.pageSize)
    let pagesArray: Array<number> = []
    for (let i = 1; i <= countPages; i++) {
        pagesArray.push(i)
    }

    let [portionNumber, setPortionNumber] = useState(1);
    let portionsCount = Math.ceil(countPages/props.portionSize);
    let leftEdge = (portionNumber-1)*props.portionSize+1;
    let rightEdge = portionNumber * props.portionSize;

    return (
        <div>
            {portionNumber > 1 &&
                <button onClick={()=>{setPortionNumber(portionNumber-1)}}>back</button>}

            {pagesArray
                .filter (p => p>=leftEdge && p<=rightEdge)
                .map(p =>
                <span key={p} onClick={(e) => props.onPageSelected(p)}
                      className={props.currentPage === p ? s.selectedPage : ''}>{p}</span>)}

            {portionsCount > portionNumber &&
                <button onClick={()=>{setPortionNumber(portionNumber+1)}}>next</button>}
        </div>
    );
};
