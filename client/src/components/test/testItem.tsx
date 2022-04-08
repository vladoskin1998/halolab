import React, { ReactElement, useState } from "react";
import TestModal from './testModal'
import { ListItemInterface } from '../../types/types'

const TestItem = ({ props }: { props: ListItemInterface }): ReactElement => {

    const [openModal, setOpenModal] = useState(false)
    const { name, category, price } = props

    return <div className="test-item">
        <div className="test-item_subtitle">{name}</div>
        <div className="test-item_title">
            {category.length > 12 ? `${category.substring(0, 12).toLowerCase()}...` : category.toLowerCase()}
        </div>
        <div className="test-item-price">
            <span className="test-item-price_dolar">$</span>
            <span className="test-item-price_number">{price}</span>
            <button className="test-item-price_button test-item-price_button--hover"
                onClick={() => setOpenModal(true)}
            >Buy</button>
            {openModal &&
                <TestModal close={() => setOpenModal(false)}
                    name={name}
                    category={category}
                    price={price}
                />}
        </div>
    </div>
}

export default TestItem;