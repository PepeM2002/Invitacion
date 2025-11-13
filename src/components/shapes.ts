/** @format */

export type Shape = {
    id: string;
    left: string;
    top: string;
    fontSize: string;
    animationDuration: string;
    animationDelay: string;
};

const generateShapes = (num: number, prefix: string, sizeRange: [number, number]) => {
    return Array.from({ length: num }).map((_, i) => ({
        id: `${prefix}-${i}`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        fontSize: `${Math.floor(Math.random() * (sizeRange[1] - sizeRange[0])) + sizeRange[0]}px`,
        animationDuration: `${(Math.random() * 8 + 6).toFixed(2)}s`,
        animationDelay: `${(Math.random() * 5).toFixed(2)}s`,
    }));
};

export const hearts = generateShapes(30, "heart", [14, 30]);
export const stars = generateShapes(20, "star", [6, 12]);
