---
title: 'How to draw on a page using react hooks and typescript'
excerpt: "Can we recreate the drawing interaction on DEV's offline page as a React Component using Hooks and Typescript? Let's find out"
category: "programming"
tags:
    - 'typescript'
    - 'react'
    - 'web development'
    - 'tutorial'
---

Recently, [How to Create the Drawing Interaction on DEV's Offline Page](https://dev.to/aspittel/how-to-create-the-drawing-interaction-on-dev-s-offline-page-1mbe) by [Ali Spittel](https://dev.to/aspittel) showed up in my feed, and it looked pretty cool. This got me wondering if I could create the same thing as a react component using hooks and typescript.

Well, the fact that I am writing this post means I was able to recreate it. So let's see how I did it.

If you are interested in the final product, you can check out the [Github repository](https://github.com/AnkurSheel/react-drawing-interaction) or the [code sandbox](https://codesandbox.io/s/react-drawing-interaction-bo1ph?from-embed).

## Creating the Component

The first thing we need to do is to create a **Canvas** component.

The canvas needs to take up some space that we will want any parent component to override, so we will add `width` and `height` as props.

But, we want sensible defaults so that we don't have to add these props every time we want to use this component. So, we will add some _defaultProps_ to set these values to _window.innerWidth_ and _window.innerHeight_ respectively.

```typescript
import React from 'react';

interface CanvasProps {
    width: number;
    height: number;
}

const Canvas = ({ width, height }: CanvasProps) => {
    return <canvas height={height} width={width} />;
};

Canvas.defaultProps = {
    width: window.innerWidth,
    height: window.innerHeight,
};

export default Canvas;
```

## Lets Draw

Since we need to modify the canvas element, we will need to add a ref to it. We can do this using the `useRef` hook and changing our _canvas_ element to set the ref.

```typescript
const canvasRef = useRef < HTMLCanvasElement > null;
return <canvas ref={canvasRef} height={height} width={width} />;
```

### Set state

We need to keep track of some variables.

-   the mouse position.
-   whether we are painting or not.

We can do this by adding the `useState` hook. We will also create a `Coordinate` type to help with keeping track of mouse positions.

```typescript
type Coordinate = {
    x: number;
    y: number;
};

const Canvas = ({ width, height }: CanvasProps) => {
const [isPainting, setIsPainting] = useState(false);
const [mousePosition, setMousePosition] = useState<Coordinate | undefined>(undefined);
// ... other stuff here
```

### Start drawing when the mouse is pressed.

We will add the event listener in the `useEffect` hook. If we have a valid reference to the canvas, we add an event listener to the _mouseDown_ event. We also remove the event listener when we unmount.

```typescript
useEffect(() => {
    if (!canvasRef.current) {
        return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    canvas.addEventListener('mousedown', startPaint);
    return () => {
        canvas.removeEventListener('mousedown', startPaint);
    };
}, [startPaint]);
```

_startPaint_ needs to get the current coordinates of the mouse and set `isPainting` to true. We will also wrap it in a `useCallback` hook to use it inside the `useEffect` hook.

```typescript
 const startPaint = useCallback((event: MouseEvent) => {
        const coordinates = getCoordinates(event);
        if (coordinates) {
            setIsPainting(true);
            setMousePosition(coordinates);
        }
    }, []);

// ...other stuff here

const getCoordinates = (event: MouseEvent): Coordinate | undefined => {
    if (!canvasRef.current) {
        return;
    }

    const canvas: HTMLCanvasElement = canvasRef.current;
    return {event.pageX - canvas.offsetLeft, event.pageY - canvas.offsetTop};
};
```

### Draw the line on mouse move

Like the _mouseDown_ event listener, we will use the _ useEffect` hook to add the \_mousemove_ event.

```typescript
useEffect(() => {
    if (!canvasRef.current) {
        return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    canvas.addEventListener('mousemove', paint);
    return () => {
        canvas.removeEventListener('mousemove', paint);
    };
}, [paint]);
```

_paint_ needs to

-   Check if we are painting.
-   Get the new mouse coordinates.
-   Draw a line from the old coordinates to the new one by getting the rendering context from the canvas.
-   Update the old coordinates.

```typescript
const paint = useCallback(
    (event: MouseEvent) => {
        if (isPainting) {
            const newMousePosition = getCoordinates(event);
            if (mousePosition && newMousePosition) {
                drawLine(mousePosition, newMousePosition);
                setMousePosition(newMousePosition);
            }
        }
    },
    [isPainting, mousePosition]
);

// ...other stuff here

const drawLine = (originalMousePosition: Coordinate, newMousePosition: Coordinate) => {
    if (!canvasRef.current) {
        return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    const context = canvas.getContext('2d');
    if (context) {
        context.strokeStyle = 'red';
        context.lineJoin = 'round';
        context.lineWidth = 5;

        context.beginPath();
        context.moveTo(originalMousePosition.x, originalMousePosition.y);
        context.lineTo(newMousePosition.x, newMousePosition.y);
        context.closePath();

        context.stroke();
    }
};
```

### Stop drawing on mouse release

We want to stop drawing when either the user releases the mouse or moves the mouse out of the canvas area.

```typescript
useEffect(() => {
    if (!canvasRef.current) {
        return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    canvas.addEventListener('mouseup', exitPaint);
    canvas.addEventListener('mouseleave', exitPaint);
    return () => {
        canvas.removeEventListener('mouseup', exitPaint);
        canvas.removeEventListener('mouseleave', exitPaint);
    };
}, [exitPaint]);
```

In _exitPaint_, we just set the `isPainting` to `false`.

```typescript
const exitPaint = useCallback(() => {
    setIsPainting(false);
}, []);
```

## Conclusion

And we have a React component that we can reuse. You can see the final code in either the [Github repository](https://github.com/AnkurSheel/react-drawing-interaction) or play with the [code sandbox](https://codesandbox.io/s/react-drawing-interaction-bo1ph?from-embed).
