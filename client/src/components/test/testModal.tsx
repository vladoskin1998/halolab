import React, { ReactElement } from "react";
import { Modal } from '../ui/modal';
import TestModalForm from './testModalForm'
import { TestModalInterface } from '../../types/types'

const TestModal = ({ close, name, category, price }: TestModalInterface): ReactElement => {

    return (<Modal close={close}>
        <div className="test-modal">
            <div className="test-item_subtitle">{name}</div>
            <div className="test-item_title">{category}</div>
            <div className="test-item-price test-modal_price">
                <span className="test-item-price_dolar">$</span>
                <span className="test-item-price_number">{price}</span>
            </div>
            <TestModalForm close={close}/>
            
        </div>
    </Modal>)
}

export default TestModal;