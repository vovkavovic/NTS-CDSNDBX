import type { InputType } from '@types';

export type Field = {
    id?: number;
    class: null | string;
    conditional: null | string;
    label: string;
    name: string;
    placeholder: string;
    required: boolean;
    type: InputType;
};
