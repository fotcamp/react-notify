import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Dialog = styled.dialog<{animate?: boolean, dialogAnimation?: ReturnType<typeof css>}>`
    margin: auto;
    background-color: #FFF;
    padding: 0;
    border: 0;
    max-width: 600px;
    border-radius: 8px;
    box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
    &::backdrop {
        background-color: rgba(0, 0, 0, 0.1)
    }
    ${({ animate, dialogAnimation }) => animate && dialogAnimation}
`

export const DialogInner = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;    
    position: relative;
`

export const DialogHeader = styled.div`
    display: flex;
    align-items: center;
    color: #000;
    font-size: 1.5rem;
    overflow-y: auto;
`

export const DialogContent = styled.div`
    color: #000;
    font-size: 1rem;
    overflow-y: auto;
    max-height: 500px;

    &::-webkit-scrollbar {
        width: 6px;  
    };
    &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.35);
        border-radius: 8px;
    };
    &::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.05);
    };
`

export const DialogActions = styled.div`
    display: flex;
    flex-direction: colunm;
    justify-content: flex-end;
    padding: 8px;
    color: #000;
    font-size: 1rem;
    gap: 2px;
`

export const CloseIcon = styled.div`
    position: absolute;
    cursor: pointer;
    top: 1em;
    right: 1em;
`

export const ActionButton = styled.button`
    box-sizing: border-box;
    padding: 6px 8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    outline: 0;
    border: 0;
    color: #1976d2;
    font-size: 0.85em;

    &:hover {
        text-decoration: none;
        background-color: rgba(25, 118, 210, 0.04);
    }
`