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

export const TypeController = styled.div`
    .success {
        border: 2px solid #4CAF50;
    }
    .error {
        border: 2px solid #E53935;
    }
    .info {
        border: 2px solid #2196F3;
    }
    .loading {
        border: none;
    }
`

export const Toast = styled.div`
    will-change: transform;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
    background-color: #FFF;
    width: 180px;
    height: 45px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`