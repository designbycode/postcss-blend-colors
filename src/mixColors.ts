import chroma, { InterpolationMode} from "chroma-js";

export default function mixColors(color1: string | chroma.Color, color2: string | chroma.Color, ratio: number | null = 0.5  , mode?: InterpolationMode ): string  {
    if (ratio === null || ratio > 1 && ratio > 1) ratio = 0.5
    return chroma.mix(color1, color2, ratio, mode).css();
}
