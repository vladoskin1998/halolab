import React, { useState } from "react";
import { Input } from '../ui/input';
import { validIsEmpty, validIsName, validIsNumber } from '../../actions/validate'

const TestModalForm = ({ close }: { close: () => void }) => {

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const [isName, setIsName] = useState(true)
    const [isNumber, setIsNumber] = useState(true)

    const onChangeName = (s: string): string => {
        return validIsEmpty(s) || validIsName(s)
    }

    const onChangeNumber = (s: string): string => {
        return validIsEmpty(s) || validIsNumber(s)
    }

    const handlerSend = () => {

        const isValidName = onChangeName(name)
        const isValidNumber = onChangeNumber(number)

        if (isValidName) {
            setIsName(false)
        }
        if (isValidNumber) {
            setIsNumber(false)

        }

        if (!isValidName && !isValidNumber) {

            const payload = { name, number }

            fetch('http://localhost:5000/api/add-price',
                {
                    method: 'POST',
                    headers: new Headers({
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    }),
                    body: JSON.stringify(payload)
                }
            )
                .then(response => response.json())
                .then(json => {
                    close()
                    console.log(json)
                }
                )
                .catch(e => e.message)
        }
    }

    return <div className="test-modal-form">
        <Input placeholder={"Name"}
            state={name}
            setState={setName}
            message={onChangeName(name)}
            valid={isName}
            setValid={setIsName}
        />
        <Input placeholder={"Number"}
            state={number}
            setState={setNumber}
            message={onChangeNumber(number)}
            valid={isNumber}
            setValid={setIsNumber}
        />
        <button className="test_button" onClick={handlerSend}>Order</button>
    </div>
}

export default TestModalForm;