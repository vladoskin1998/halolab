import React, { ReactElement } from "react";
import Close from '../../svg/close'

export const Modal = ({ children, close }: { children?: JSX.Element, close: () => void }): ReactElement => {
    return <div className="ui-modal">
        <div className="ui-modal-body">
            <div className="ui-modal-close" onClick={close}>
                <Close />
            </div>
            {children}
        </div>
    </div>
}

