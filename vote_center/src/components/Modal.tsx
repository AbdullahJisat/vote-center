import React from 'react';

interface ModalProps {
    id: string;
    modalBody: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({id, modalBody}) => {
    return (
        <div className="modal fade" id={id}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Default Modal</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {modalBody}
                    </div>
                    <div className="modal-footer justify-content-between">
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};

export default Modal;
