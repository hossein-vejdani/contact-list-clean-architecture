import './BasePagination.scss'
import { useEffect, useMemo, useState } from "react";

export type BasePaginationPropsType = {
    totalPages: number
    onChange: (page: number) => void
}

const BasePagination = ({ totalPages, onChange }: BasePaginationPropsType) => {
    const [currentPage, setCurrentPage] = useState(1);
    let left = currentPage - 2;
    let right = currentPage + 2;


    if (left <= 0) {
        right += left === 0 ? 1 : 2
        left = 1
    }

    if (right > totalPages) right = totalPages;

    useEffect(() => {
        onChange(currentPage)
    }, [currentPage])

    const pages = useMemo(() => {
        const items = []
        for (let i = left; i <= right; i++) {
            items.push(
                <button key={i} onClick={() => { setCurrentPage(i) }} className={currentPage === i ? 'base-pagination__button base-pagination__button--active' : 'base-pagination__button'} >
                    {i}
                </button>,
            );
        }
        return items
    }, [currentPage, totalPages])

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    return (
        <div className='base-pagination'>
            <button onClick={prevPage} className='base-pagination__button'>
                prev
            </button>
            {pages}
            <button onClick={nextPage} className='base-pagination__button'>
                next
            </button>
        </div>
    );
}

export default BasePagination