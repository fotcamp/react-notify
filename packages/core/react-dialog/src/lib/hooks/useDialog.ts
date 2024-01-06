import { useState, useRef, useCallback } from "react";

const useDialog = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dialogRef = useRef<HTMLDialogElement>(null);

    const toggleDialog = useCallback(() => {
        if (!dialogRef.current) return;

        if (isOpen) {
            setIsOpen(false);
            setTimeout(() => {
                dialogRef.current?.close();
            }, 180);
        } else {
            dialogRef.current?.showModal();
            setIsOpen(true);
        }
    }, [isOpen]);

    return { dialogRef, isOpen, toggleDialog };
};

export default useDialog;
