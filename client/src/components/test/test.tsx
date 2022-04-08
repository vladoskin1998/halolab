import React, { useEffect, ReactElement, useState } from "react";
import TestItem from "./testItem";
import { ListItemInterface } from '../../types/types'
import TestModal from './testModal'

const Test = (): ReactElement => {

    const [list, setList] = useState<ListItemInterface[]>([])
    const [minItem, setMinItem] = useState<ListItemInterface>()
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {

        const setValue = (l: ListItemInterface[]) => {
            setList(l)

            const minItem = l.reduce((p, v) => p.price < v.price ? p : v);
            setMinItem(minItem)
        }

        fetch('https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e')
            .then(response => response.json())
            .then(json => setValue(json))
            .catch(e => e.message)
    }, [])

    return <div className="test">

        {list.length ?
            <>
                <div className="container">
                    <div className="test-list">
                        {
                            list.map((it, index) => <TestItem props={it} key={index}/>)
                        }
                    </div>
                    <div className="test-footer">
                        <button className="test_button"
                            onClick={() => setOpenModal(true)}
                        >Buy cheapest</button>
                        {openModal && <TestModal close={() => {
                            setOpenModal(false)

                        }}
                            name={minItem?.name}
                            category={minItem?.category}
                            price={minItem?.price}
                        />}
                    </div>
                </div>
            </>
            : <div className="ui-loader-ring"></div>
        }
    </div>
}

export default Test;