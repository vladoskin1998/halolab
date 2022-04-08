import React, { ReactElement, useEffect, useState } from "react";
import Close from '../../svg/close'

export const Input = ({
    state,
    setState,
    message = "",
    placeholder,
    valid,
    setValid
}: {
    state: string,
    setState: (s: string) => void,
    message?: string,
    placeholder?: string,
    valid: boolean,
    setValid: (s: boolean) => void,
}
): ReactElement => {

    const blurInput = () => {
        if (message) {
            setValid(false)
        }
    }

    const focusInput = () => setValid(true)

    return (
        <div className={`ui-input ${!valid && "ui-input-error_block"}`}>
            <input placeholder={placeholder}
                value={state}
                onChange={e => setState(e.target.value)}
                onBlur={blurInput}
                onFocus={focusInput}
            />
            {!valid &&
                <>
                    <div className="ui-input-error_message">{message}</div>
                    <button className="ui-input-error_close" onClick={() => setState('')}>
                        <Close />
                    </button>
                </>
            }
        </div>
    )
}

