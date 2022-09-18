import { FormControl } from '@angular/forms';

export interface ITypedForm {
    userName: FormControl<string | null>;
    age: FormControl<number>;
    gender: FormControl<string | null>;
    address: FormControl<string | null>;
}

export interface ICardContent {
    heading: string;
    content: string;
}

export type UserType = 'Basic' | 'Prime';