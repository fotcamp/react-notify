import { keyframes } from '@emotion/react';

export const toastStackStyles = {
    'top-left': (index : number) => ({
        top: 60 * index,
        left: 0,
        transition: "top 230ms cubic-bezier(0.21, 1.02, 0.73, 1) 0s",
    }),
    'top-center': (index : number) => ({
        top: 60 * index,
        left: '50%',
        transform: 'translate(-50%, 0)',
        transition: "top 230ms cubic-bezier(0.21, 1.02, 0.73, 1) 0s",
    }),
    'top-right': (index : number) => ({
        top: 60 * index,
        right : 0,
        transition: "top 230ms cubic-bezier(0.21, 1.02, 0.73, 1) 0s",
    }),
    'bottom-left': (index : number) => ({
        bottom: 60 * index,
        left : 0,
        transition: "bottom 230ms cubic-bezier(0.21, 1.02, 0.73, 1) 0s",
    }),
    'bottom-center': (index : number) => ({
        bottom: 60 * index,
        left: '50%',
        transform: 'translate(-50%, 0)',
        transition: "bottom 230ms cubic-bezier(0.21, 1.02, 0.73, 1) 0s",
    }),
    'bottom-right': (index : number) => ({
        bottom: 60 * index,
        right : 0,
        transition: "bottom 230ms cubic-bezier(0.21, 1.02, 0.73, 1) 0s",
    }) 
}

export const slideInCenterTop = keyframes`
0% {transform: translate3d(0,-200%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`;

export const slideOutCenterTop = keyframes`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,-150%,-1px) scale(.6); opacity:0;}
`;

export const slideInCenterBottom = keyframes`
0% {transform: translate3d(0,200%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`;

export const slideOutCenterBottom = keyframes`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,150%,-1px) scale(.6); opacity:0;}
`;

export const slideInRight = keyframes`
0% {transform: translate3d(110%, 0, 0);}
80% {transform: translate3d(-10%, 0, 0);}
100% {transform: translate3d(0, 0, 0);}
`

export const slideInLeft = keyframes`
0% {transform: translate3d(-110%, 0, 0);}
80% {transform: translate3d(10%, 0, 0);}
100% {transform: translate3d(0, 0, 0);}
`

export const slideOutRight = keyframes`
0% {transform: translate3d(0, 0, 0);}
20% {transform: translate3d(-10%, 0, 0);}
100% {transform: translate3d(110%, 0, 0);}
`;

export const slideOutLeft = keyframes`
0% {transform: translate3d(0, 0, 0);}
20% {transform: translate3d(10%, 0, 0);}
100% {transform: translate3d(-110%, 0, 0);}
`;
