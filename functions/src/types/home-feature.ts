export type Parameter = {
    label: string,
    key: string,
    options?: ParameterOptions,
}

export interface ParameterInput extends Parameter {
    type: string,
    required: boolean,
    value: string | number,
}

export interface ParameterOutput extends Parameter {
    value?: string
}

export interface ParameterOptions {
    min?: number,
    step?: number
}

export type HomeFeature = {
    id: string,
    label: string,
    input: ParameterInput[],
    output: ParameterOutput[],
    options?: string[]
}
