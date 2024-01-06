import { css, keyframes } from "@emotion/react";

export const DialogShowKeyframes = keyframes`
0% {transform: scale(0.95); opacity:0;}
100% {transform: scale(1); opacity:1;}
`;

export const DialogCloseKeyframes = keyframes`
0% {transform: scale(1); opacity:1;}
100% {transform: scale(0.95); opacity:0;}
`;

export const DialogShow = css`
    animation: ${DialogShowKeyframes} 150ms cubic-bezier(0.4, 0, 0.2, 1); 
`

export const DialogClose= css`
    animation: ${DialogCloseKeyframes} 150ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
`