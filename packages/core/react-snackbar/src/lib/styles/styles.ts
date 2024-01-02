import styled from '@emotion/styled';

export const ToastContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: fixed;
    left: 16px;
    top: 16px;
    right: 16px;
    bottom: 16px;
    pointer-events: none;
`

export const SnackbarController = styled.div`
    pointer-events: auto;
    
    .success {
        background: #4CAF50;
    }
    .error {
        background: #E53935;
    }
    .info {
        background: #2196F3;
    }
    .loading {
        background: #FFF;
        color: #000;
    }
`

export const Toast = styled.div`
    will-change: transform;
    padding: 0 10px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
    color: #FFF;
    width: 180px;
    height: 45px;
    border-radius: 4px;
    cursor: pointer;
    display: grid;
    gap: 5px;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    justify-content: center;
`

export const TypeIcon = styled.div`
    display: flex;
`

export const Message = styled.div`
    text-align: left;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    word-wrap: break-word;
    line-height: 1em;
`

export const CloseIcon = styled.div`
    display: flex;
`